/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../lib/constants';
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
    <section id="contact" className="py-24 md:py-32 bg-chalk text-ink scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-2xl mb-20">
          <span className="tag">Contact</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mt-4 text-ink">
            Get in touch
          </h2>
          <p className="font-sans text-ink/70 mt-4 leading-relaxed">
            Questions about school partnerships, private sessions, or schedules? Reach out directly.
            We reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">

          <div className="lg:col-span-5 flex flex-col gap-4">

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-4 p-6 bg-white border-2 border-ink/10 hover:border-mat transition-colors duration-150 group"
            >
              <div className="w-11 h-11 bg-chalk text-mat flex items-center justify-center group-hover:bg-mat group-hover:text-chalk transition-colors duration-150 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-ink/40 block mb-0.5">Phone / WhatsApp</span>
                <span className="font-display font-bold text-ink group-hover:text-mat transition-colors text-base">
                  {CONTACT_INFO.phoneFormatted}
                </span>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-4 p-6 bg-white border-2 border-ink/10 hover:border-mat transition-colors duration-150 group"
            >
              <div className="w-11 h-11 bg-chalk text-mat flex items-center justify-center group-hover:bg-mat group-hover:text-chalk transition-colors duration-150 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-ink/40 block mb-0.5">Email</span>
                <span className="font-display font-bold text-ink group-hover:text-mat transition-colors text-base break-all">
                  {CONTACT_INFO.email}
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-white border-2 border-ink/10">
              <div className="w-11 h-11 bg-chalk text-mat flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-ink/40 block mb-0.5">Based in</span>
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
                className="flex-1 flex items-center justify-center gap-2 py-4 border-2 border-ink/10 hover:border-mat text-ink/70 hover:text-mat font-sans font-semibold text-xs uppercase tracking-wider transition-colors duration-150"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 border-2 border-ink/10 hover:border-mat text-ink/70 hover:text-mat font-sans font-semibold text-xs uppercase tracking-wider transition-colors duration-150"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-7 bg-white p-8 md:p-10 border-2 border-ink/10 relative">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="font-display font-bold text-xl text-ink border-b-2 border-ink/10 pb-3">
                  Send a message
                </h3>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-ink/40" htmlFor="contactName">
                    Your name
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sandra Ndlovu"
                    className="bg-chalk border-2 border-ink/10 px-4 py-3 text-sm text-ink focus:outline-none focus:border-mat transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-ink/40" htmlFor="contactEmail">
                    Email address
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sandra@school.co.za"
                    className="bg-chalk border-2 border-ink/10 px-4 py-3 text-sm text-ink focus:outline-none focus:border-mat transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-ink/40" htmlFor="contactSubject">
                    What's this about
                  </label>
                  <select
                    id="contactSubject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-chalk border-2 border-ink/10 px-4 py-3 text-sm text-ink focus:outline-none focus:border-mat transition-colors"
                  >
                    <option value="General Inquiry">General question</option>
                    <option value="Merchandise Order">Merchandise order / inquiry</option>
                    <option value="School Partnership">School partnership</option>
                    <option value="Private Booking">Private coaching</option>
                    <option value="Exhibition Demo">School demonstration</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-ink/40" htmlFor="contactMessage">
                    Message
                  </label>
                  <textarea
                    id="contactMessage"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What can we help with?"
                    className="bg-chalk border-2 border-ink/10 px-4 py-3 text-sm text-ink focus:outline-none focus:border-mat transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded text-xs flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-sans leading-relaxed">{errorMessage}</p>
                      <a
                        href={`https://wa.me/27${CONTACT_INFO.phone.startsWith('0') ? CONTACT_INFO.phone.slice(1) : CONTACT_INFO.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 text-mat font-bold hover:underline"
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
                  className="relative w-full bg-ink hover:bg-ink-soft disabled:opacity-50 text-chalk font-sans font-bold text-xs uppercase tracking-widest py-4 transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-chalk/30 border-t-chalk rounded-full animate-spin" />
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
              <div className="flex flex-col items-center text-center py-10 px-4">
                <div className="w-16 h-16 bg-emerald-600 text-chalk rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-display font-extrabold text-2xl md:text-3xl mb-3 text-ink">
                  Inquiry Sent Successfully!
                </h3>
                <p className="font-sans text-sm text-ink/75 leading-relaxed max-w-md mb-2">
                  Thank you, <strong className="text-ink font-semibold">{submittedInfo?.name || 'there'}</strong>! Your message regarding <strong className="text-ink font-semibold">"{submittedInfo?.subject || 'Inquiry'}"</strong> has been sent directly to the JFLIPS coaching team.
                </p>
                <p className="font-sans text-xs text-ink/60 leading-relaxed max-w-md mb-8">
                  We will review your inquiry and reply to <span className="font-mono text-mat font-medium">{submittedInfo?.email}</span> within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setSubmittedInfo(null);
                      setErrorMessage(null);
                    }}
                    className="font-sans font-semibold text-xs uppercase tracking-widest px-6 py-3 bg-ink text-chalk hover:bg-mat transition-colors rounded cursor-pointer"
                  >
                    Send another message
                  </button>
                  <a
                    href={`https://wa.me/27${CONTACT_INFO.phone.startsWith('0') ? CONTACT_INFO.phone.slice(1) : CONTACT_INFO.phone}?text=${encodeURIComponent("Hi JFLIPS, I just sent an inquiry on your website and would also like to connect on WhatsApp.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-semibold text-xs uppercase tracking-widest px-5 py-3 border border-ink/20 text-ink hover:bg-chalk transition-colors rounded inline-flex items-center gap-1.5"
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
