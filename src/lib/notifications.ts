import { supabase, isSupabaseConfigured } from './supabase';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Writes the contact form submission into Supabase (contact_messages table)
 * — the durable, queryable record. Run supabase_contact_messages.sql once
 * against your Supabase project before this will work.
 */
async function saveToSupabase(data: ContactFormData): Promise<boolean> {
  if (!isSupabaseConfigured) {
    console.warn('Supabase is not configured — VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY missing.');
    return false;
  }
  const { error } = await supabase.from('contact_messages').insert({
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message,
  });
  if (error) {
    console.error('Failed to save contact message to Supabase:', error.message);
    return false;
  }
  return true;
}

/**
 * Optional: also pings a Discord webhook for an instant alert, the same
 * pattern JFLIPS Pro already uses for new signups. Set
 * VITE_CONTACT_WEBHOOK_URL if you want this — it's optional, Supabase
 * alone is enough to not lose messages.
 */
async function pingDiscord(data: ContactFormData): Promise<void> {
  const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK_URL as string | undefined;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: '📬 New contact form message from the JFLIPS website',
        embeds: [
          {
            title: data.subject,
            color: 0xff5a1f,
            fields: [
              { name: 'Name', value: data.name || '—', inline: true },
              { name: 'Email', value: data.email || '—', inline: true },
              { name: 'Message', value: data.message || '—' },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });
  } catch (err) {
    console.error('Discord ping failed (non-fatal, message is already saved):', err);
  }
}

/**
 * Main entry point for the contact form. Tries Supabase first (the
 * durable record); if that fails for any reason, the caller should fall
 * back to openMailtoFallback so the message is never silently lost.
 */
export async function sendContactFormNotification(data: ContactFormData): Promise<boolean> {
  const saved = await saveToSupabase(data);
  if (saved) {
    pingDiscord(data); // fire-and-forget, doesn't block success
  }
  return saved;
}

/**
 * Last-resort fallback: opens the user's email client pre-filled with
 * their message, so nothing is lost if Supabase isn't configured or the
 * insert fails for any reason.
 */
export function openMailtoFallback(data: ContactFormData, toAddress: string): void {
  const body = `From: ${data.name} (${data.email})\n\n${data.message}`;
  const url = `mailto:${toAddress}?subject=${encodeURIComponent(
    `[JFLIPS Website] ${data.subject}`
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}
