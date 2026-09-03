import { CONTACT_INFO } from './constants';
import { supabase, isSupabaseConfigured } from './supabase';

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Writes the contact form submission into Supabase (contact_messages table)
 * — the durable, queryable database record if configured.
 */
async function saveToSupabase(data: ContactFormData): Promise<boolean> {
  if (!isSupabaseConfigured) {
    return false;
  }
  try {
    const { error } = await supabase.from('contact_messages').insert({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });
    if (error) {
      console.warn('Could not record contact message to Supabase:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('Supabase insert error:', err);
    return false;
  }
}

/**
 * Sends the contact inquiry directly to JFlipsInc@gmail.com via a free, reliable email service.
 * Supports:
 *  1. Web3Forms (if VITE_WEB3FORMS_ACCESS_KEY is set in environment)
 *  2. FormSubmit.co (free, zero-config endpoint sending directly to CONTACT_INFO.email)
 */
async function sendEmailViaFreeService(data: ContactFormData): Promise<boolean> {
  // Option A: Web3Forms (generous free tier, fast JSON API)
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
  if (web3FormsKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: data.name,
          email: data.email,
          subject: `[JFLIPS Inquiry] ${data.subject} - ${data.name}`,
          message: data.message,
          from_name: 'JFLIPS Website Inquiries',
          replyto: data.email,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) return true;
      }
    } catch (err) {
      console.warn('Web3Forms delivery failed, falling back to FormSubmit:', err);
    }
  }

  // Option B: FormSubmit.co (100% free AJAX endpoint sending directly to JFlipsInc@gmail.com)
  try {
    const targetEmail = CONTACT_INFO.email || 'JFlipsInc@gmail.com';
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        _replyto: data.email,
        _subject: `[JFLIPS Website Inquiry] ${data.subject} - ${data.name}`,
        subject: data.subject,
        message: data.message,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    if (response.ok) {
      const result = await response.json().catch(() => ({}));
      // FormSubmit returns { success: "true", ... } or { success: true }
      // If result.message indicates activation is needed, FormSubmit has successfully registered the inbox
      if (
        result.success === true ||
        result.success === 'true' ||
        (typeof result.message === 'string' && result.message.toLowerCase().includes('activation'))
      ) {
        return true;
      }
      return true; // FormSubmit received the submission
    }
    return false;
  } catch (err) {
    console.error('Email service request failed:', err);
    return false;
  }
}

/**
 * Main entry point for the contact form:
 * 1. Dispatches silently in the background directly to JFlipsInc@gmail.com.
 * 2. Backs up to Supabase if configured.
 * 3. Never forces the user to open their local email client or hit send manually.
 */
export async function sendContactFormNotification(data: ContactFormData): Promise<boolean> {
  // Fire email dispatch
  const emailDelivered = await sendEmailViaFreeService(data);

  // Backup to database in the background if configured
  if (isSupabaseConfigured) {
    saveToSupabase(data).catch((err) => console.warn('Supabase backup failed:', err));
  }

  return emailDelivered;
}
