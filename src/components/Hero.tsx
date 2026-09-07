/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowDown, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINKS } from '../lib/constants';
import InteractiveBg from './InteractiveBg';
import JFlipsLogo from './JFlipsLogo';

interface HeroProps {
  onSchoolsClick: () => void;
  onRegisterClick: () => void;
}

export default function Hero({ onSchoolsClick, onRegisterClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000c26] text-chalk px-6 md:px-12 pt-28 pb-16"
    >
      {/* 3D background canvas */}
      <InteractiveBg />

      {/* Grid container with custom section boundaries */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-center w-full">

        <div className="lg:col-span-7 text-left flex flex-col items-start">
          <p className="text-flame font-medium text-sm mb-4">
            Krugersdorp, West Rand
          </p>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.98] text-white mb-6">
            Where passion meets performance.
          </h1>

          <p className="font-sans text-lg text-chalk/75 max-w-xl leading-relaxed mb-10">
            JFLIPS is a competitive cheerleading and tumbling team based in Krugersdorp.
            We teach real stunting technique, safe progressions, and the kind of teamwork
            that only comes from trusting the person spotting you.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href={WHATSAPP_LINKS.cheer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-mat hover:bg-mat-deep text-white font-sans font-semibold text-sm px-7 py-3.5 rounded transition-colors duration-150 border border-white/10"
            >
              <MessageCircle className="w-4 h-4 text-white/90" />
              <span>Cheer team</span>
            </a>

            <a
              href={WHATSAPP_LINKS.tumbling}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-flame hover:bg-flame-deep text-white font-sans font-semibold text-sm px-7 py-3.5 rounded transition-colors duration-150"
            >
              <MessageCircle className="w-4 h-4 text-white/90" />
              <span>Tumbling classes</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-start">
          <div className="relative flex items-center justify-center p-4 lg:-translate-x-8">
            <JFlipsLogo 
              size="xl" 
              showText={false} 
              className="relative z-10 transition-transform duration-300 hover:scale-[1.01]" 
            />
          </div>
        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
        <span className="font-sans text-xs text-chalk/50">
          Scroll to explore
        </span>
        <ArrowDown className="w-4 h-4 text-chalk/40 animate-bounce" />
      </div>
    </section>
  );
}
