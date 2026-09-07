/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_LINKS, NAVIGATION_LINKS } from '../lib/constants';
import JFlipsLogo from './JFlipsLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-chalk border-b-2 border-ink transition-[padding] duration-200 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-mat rounded-sm"
            aria-label="JFLIPS Home"
          >
            <JFlipsLogo size="sm" showText={true} />
          </a>

          <nav className="hidden lg:flex items-center gap-7 font-sans font-semibold text-sm">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-ink/70 hover:text-mat transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="font-sans font-semibold text-xs px-3.5 py-2 border border-ink text-ink hover:bg-ink hover:text-white transition-colors duration-150 rounded"
            >
              Get in touch
            </a>
            <a
              href={WHATSAPP_LINKS.cheer}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mat hover:bg-mat-deep text-white font-sans font-semibold text-xs px-3.5 py-2 transition-colors duration-150 rounded"
            >
              Cheer team
            </a>
            <a
              href={WHATSAPP_LINKS.tumbling}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-flame hover:bg-flame-deep text-white font-sans font-semibold text-xs px-3.5 py-2 transition-colors duration-150 rounded"
            >
              Tumbling
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ink"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle main menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-ink pt-24 px-8 pb-10 flex flex-col justify-between lg:hidden">
          <div className="flex flex-col gap-6">
            <span className="font-sans text-xs text-white/50 border-b border-white/10 pb-3 font-medium">
              Navigation
            </span>
            <nav className="flex flex-col gap-5">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-display font-bold text-3xl text-chalk hover:text-flame transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 mt-8 border-t border-chalk/15 pt-8">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full text-center border border-chalk/30 text-chalk font-sans font-semibold text-sm py-3 rounded"
            >
              Get in touch
            </a>
            <a
              href={WHATSAPP_LINKS.cheer}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-mat text-chalk font-sans font-semibold text-sm py-3 rounded"
            >
              Cheer team (WhatsApp)
            </a>
            <a
              href={WHATSAPP_LINKS.tumbling}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-flame text-chalk font-sans font-semibold text-sm py-3 rounded"
            >
              Tumbling (WhatsApp)
            </a>
          </div>
        </div>
      )}
    </>
  );
}
