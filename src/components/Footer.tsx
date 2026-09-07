/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUp, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, NAVIGATION_LINKS, WHATSAPP_LINKS } from '../lib/constants';
import JFlipsLogo from './JFlipsLogo';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-chalk/60 border-t-2 border-chalk/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b-2 border-chalk/10 items-start">

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <JFlipsLogo className="h-10 [&_span]:text-chalk" showText={false} size="sm" />
              <span className="font-display font-extrabold text-2xl tracking-tight text-chalk">JFLIPS</span>
            </div>

            <p className="font-sans text-xs text-chalk/50 leading-relaxed">
              We help young athletes and schools in Krugersdorp find confidence, athletic power, and
              real teamwork through structured, safe cheerleading and tumbling programmes.
            </p>

            <div className="flex gap-4 text-chalk/60">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-chalk/5 hover:bg-mat hover:text-chalk border border-chalk/15 flex items-center justify-center transition-colors duration-150"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-chalk/5 hover:bg-mat hover:text-chalk border border-chalk/15 flex items-center justify-center transition-colors duration-150"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-chalk font-bold">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2.5 text-xs">
              {NAVIGATION_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-chalk transition-colors duration-150 py-0.5">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-chalk font-bold">
              Programs
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-chalk/50">
              <span>Cheerleading team training</span>
              <span>Precision tumbling class</span>
              <span>Private stunt coaching</span>
              <span>Skill progression clinics</span>
              <span>School demonstrations</span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-chalk font-bold">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-xs">
              <div className="flex items-center gap-2 text-chalk/50">
                <Mail className="w-4 h-4 text-mat shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-chalk transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-chalk/50">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={WHATSAPP_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-chalk transition-colors"
                >
                  {CONTACT_INFO.phoneFormatted} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2 text-chalk/50">
                <MapPin className="w-4 h-4 text-mat shrink-0" />
                <span>{CONTACT_INFO.location}, South Africa</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-chalk/40 font-mono">
          <span>&copy; {new Date().getFullYear()} JFLIPS. All rights reserved.</span>

          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-1.5 px-4 py-2 bg-chalk/5 border border-chalk/15 hover:border-chalk/30 text-chalk/50 hover:text-chalk transition-colors duration-150 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
