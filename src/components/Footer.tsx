/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, MapPin, Instagram, Facebook, ArrowUp, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, NAVIGATION_LINKS, WHATSAPP_LINKS } from '../lib/constants';
import JFlipsLogo from './JFlipsLogo';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b132b] text-zinc-400 border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10 items-start">

          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <JFlipsLogo className="h-9 [&_span]:text-white" showText={false} size="sm" />
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">JFLIPS</span>
            </div>

            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Structured, safety-first cheerleading and tumbling coaching in Krugersdorp and the West Rand.
            </p>

            <div className="flex gap-3 text-zinc-400">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white/5 hover:bg-mat hover:text-white border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white/5 hover:bg-mat hover:text-white border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-sans font-semibold text-xs text-white uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2 text-xs">
              {NAVIGATION_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-white transition-colors py-0.5">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-sans font-semibold text-xs text-white uppercase tracking-wider">
              Programs
            </h4>
            <div className="flex flex-col gap-2 text-xs text-zinc-400">
              <span>Cheerleading team training</span>
              <span>Tumbling classes</span>
              <span>Private coaching</span>
              <span>School partnership teams</span>
              <span>School demonstrations</span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-sans font-semibold text-xs text-white uppercase tracking-wider">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <div className="flex items-center gap-2 text-zinc-400">
                <Mail className="w-4 h-4 text-mat shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={WHATSAPP_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin className="w-4 h-4 text-mat shrink-0" />
                <span>{CONTACT_INFO.location}, South Africa</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-sans">
          <span>&copy; {new Date().getFullYear()} JFLIPS Cheer &amp; Tumbling. All rights reserved.</span>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-colors cursor-pointer text-xs"
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
