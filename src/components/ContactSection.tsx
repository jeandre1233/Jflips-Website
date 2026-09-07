/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_LINKS } from '../lib/constants';
import { sendContactFormNotification } from '../lib/notifications';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedInfo, setSubmittedInfo] = useState<{
    name: string;
    email: string;
    subject: string;
  } | null>(null);

  useEffect(() => {
    const handlePrefill = (event: Event) => {
      const customEvent = event as CustomEvent<{ subject?: string; message?: string }>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          subject: customEvent.detail?.subject || prev.subject,
          message: customEvent.detail?.message || prev.message,
        }));
        setIsSuccess(false);
        setErrorMessage(null);
      }
    };

    window.addEventListener('jflips:prefill-contact', handlePrefill);
    return () => window.removeEventListener('jflips:prefill-contact', handlePrefill);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const delivered = await sendContactFormNotification(formData);

    setIsSubmitting(false);
    if (delivered) {
      setSubmittedInfo({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
      });
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } else {
      setErrorMessage(
        `Unable to dispatch your message automatically. Please try again or reach Coach Jeandré directly on WhatsApp at ${CONTACT_INFO.phoneFormatted}.`
      );
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f8fafc] text-ink scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-2xl mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-ink">
            Get in touch
          </h2>
          <p className="font-sans text-sm md:text-base text-zinc-600 mt-3 leading-relaxed">
            Questions about school partnerships, private sessions, or schedules? Reach out directly. We reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-start">

          <div className="lg:col-span-5 flex flex-col gap-4">

            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white border border-zinc-200 hover:border-emerald-500 transition-colors rounded-lg group"
            >
              <div className="w-10 h-10 bg-emerald-50 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0 rounded">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-xs text-zinc-500 font-medium block mb-0.5">WhatsApp / Call</span>
                <span className="font-display font-bold text-ink group-hover:text-emerald-700 transition-colors text-base">
                  {CONTACT_INFO.phoneFormatted}
                </span>
                <span className="block text-xs text-emerald-600 font-medium mt-0.5">
                  Tap to chat on WhatsApp
                </span>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-4 p-5 bg-white border border-zinc-200 hover:border-mat transition-colors rounded-lg group"
            >
              <div className="w-10 h-10 bg-zinc-100 text-mat flex items-center justify-center group-hover:bg-mat group-hover:text-white transition-colors shrink-0 rounded">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-500 font-medium block mb-0.5">Email</span>
                <span className="font-display font-bold text-ink group-hover:text-mat transition-colors text-base break-all">
                  {CONTACT_INFO.email}
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 bg-white border border-zinc-200 rounded-lg">
              <div className="w-10 h-10 bg-zinc-100 text-mat flex items-center justify-center shrink-0 rounded">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-500 font-medium block mb-0.5">Based in</span>
                <span className="font-display font-bold text-ink text-base">
                  {CONTACT_INFO.address}
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 border border-zinc-200 bg-white hover:border-mat text-zinc-700 hover:text-mat font-sans font-semibold text-xs transition-colors rounded-lg"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 border border-zinc-200 bg-white hover:border-mat text-zinc-700 hover:text-mat font-sans font-semibold text-xs transition-colors rounded-lg"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-7 bg-white p-6 md:p-8 border border-zinc-200 rounded-lg">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-200 pb-3 gap-2">
                  <h3 className="font-display font-bold text-lg text-ink">
                    Send a message
                  </h3>
                  <a
                    href={WHATSAPP_LINKS.general}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Or chat on WhatsApp instead</span>
                  </a>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-zinc-700" htmlFor="contactName">
                    Your name
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sandra Ndlovu"
                    className="bg-zinc-50 border border-zinc-300 rounded px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-mat transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-zinc-700" htmlFor="contactEmail">
                    Email address
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sandra@school.co.za"
                    className="bg-zinc-50 border border-zinc-300 rounded px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-mat transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-zinc-700" htmlFor="contactSubject">
                    Subject
                  </label>
                  <select
                    id="contactSubject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-zinc-50 border border-zinc-300 rounded px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-mat transition-colors"
                  >
                    <option value="General Inquiry">General question</option>
                    <option value="Merchandise Order">Merchandise order / inquiry</option>
                    <option value="School Partnership">School partnership</option>
                    <option value="Private Booking">Private coaching</option>
                    <option value="Exhibition Demo">School demonstration</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-zinc-700" htmlFor="contactMessage">
                    Message
                  </label>
                  <textarea
                    id="contactMessage"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What can we help with?"
                    className="bg-zinc-50 border border-zinc-300 rounded px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-mat transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3.5 bg-amber-50 border border-amber-200 text-amber-900 rounded text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-sans leading-relaxed">{errorMessage}</p>
                      <a
                        href={`https://wa.me/27${CONTACT_INFO.phone.startsWith('0') ? CONTACT_INFO.phone.slice(1) : CONTACT_INFO.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 text-mat font-semibold hover:underline"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat with us on WhatsApp instead</span>
                      </a>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-ink hover:bg-mat disabled:opacity-50 text-white font-sans font-semibold text-xs py-3.5 transition-colors flex items-center justify-center gap-2 rounded cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center py-8 px-4">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2 text-ink">
                  Inquiry Sent
                </h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed max-w-md mb-1">
                  Thank you, <strong className="text-ink font-semibold">{submittedInfo?.name || 'there'}</strong>. Your message regarding <strong className="text-ink font-semibold">"{submittedInfo?.subject || 'Inquiry'}"</strong> has been sent to the JFLIPS coaching team.
                </p>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-md mb-6">
                  We will review your inquiry and reply to <span className="text-mat font-medium">{submittedInfo?.email}</span> within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setSubmittedInfo(null);
                      setErrorMessage(null);
                    }}
                    className="font-sans font-semibold text-xs px-5 py-2.5 bg-ink text-white hover:bg-mat transition-colors rounded cursor-pointer"
                  >
                    Send another message
                  </button>
                  <a
                    href={`https://wa.me/27${CONTACT_INFO.phone.startsWith('0') ? CONTACT_INFO.phone.slice(1) : CONTACT_INFO.phone}?text=${encodeURIComponent("Hi JFLIPS, I just sent an inquiry on your website and would also like to connect on WhatsApp.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-semibold text-xs px-4 py-2.5 border border-zinc-300 text-ink hover:bg-zinc-50 transition-colors rounded inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Coach</span>
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
