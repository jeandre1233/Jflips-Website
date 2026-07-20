/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../lib/constants';
import { sendContactFormNotification, openMailtoFallback } from '../lib/notifications';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hadError, setHadError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHadError(false);

    const delivered = await sendContactFormNotification(formData);

    if (delivered) {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } else {
      openMailtoFallback(formData, CONTACT_INFO.email);
      setIsSubmitting(false);
      setIsSuccess(true);
      setHadError(true);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full bg-ink hover:bg-ink-soft disabled:opacity-50 text-chalk font-sans font-bold text-xs uppercase tracking-widest py-4 transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-chalk/30 border-t-chalk rounded-full animate-spin" />
                      <span>Sending...</span>
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
              <div className="flex flex-col items-center text-center py-12">
                <div className="w-16 h-16 bg-mat text-chalk flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 text-ink">
                  {hadError ? 'Opening your email app…' : 'Message sent'}
                </h3>
                <p className="font-sans text-sm text-ink/60 leading-relaxed max-w-sm mb-8">
                  {hadError
                    ? "We've pre-filled an email for you — just hit send in your mail app to reach us."
                    : "Thanks for reaching out. We'll get back to you within 24 hours."}
                </p>
                <button
                  onClick={() => { setIsSuccess(false); setHadError(false); }}
                  className="font-sans font-semibold text-xs uppercase tracking-widest text-mat hover:text-mat-deep transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
