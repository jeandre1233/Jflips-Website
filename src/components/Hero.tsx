/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowDown, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINKS } from '../lib/constants';
import InteractiveBg from './InteractiveBg';
import JFlipsLogo from './JFlipsLogo';

const SparkleStar = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`absolute pointer-events-none ${className}`}
  >
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z"/>
  </svg>
);

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
      {/* 3D Immersive background story canvas */}
      <InteractiveBg />

      {/* Grid container with custom section boundaries */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-center w-full">

        <div className="lg:col-span-7 text-left flex flex-col items-start">
          <span className="tag tag-flame mb-6">Krugersdorp &middot; West Rand</span>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.98] text-white mb-6">
            Where passion
            <br />
            meets <span className="bg-flame text-chalk px-2">performance</span>.
          </h1>

          <p className="font-sans text-lg text-chalk/70 max-w-xl leading-relaxed mb-10">
            JFLIPS is a competitive cheerleading and tumbling team based in Krugersdorp.
            We teach real stunting technique, safe progressions, and the kind of teamwork
            that only comes from trusting the person spotting you.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* Darker blue button with the premium starry effect */}
            <a
              href={WHATSAPP_LINKS.cheer}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden flex items-center justify-center gap-2 bg-mat hover:bg-mat-deep text-chalk font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-150 border border-flame/30 shadow-[0_0_20px_rgba(0,168,255,0.15)]"
            >
              {/* Starry night sky sparkles effect inside the button */}
              <SparkleStar className="top-1 left-3 w-2.5 h-2.5 text-chalk/40 animate-pulse [animation-duration:1.5s]" />
              <SparkleStar className="bottom-1.5 right-4 w-2 h-2 text-chalk/30 animate-pulse [animation-duration:3s]" />
              <SparkleStar className="top-3 right-2 w-1.5 h-1.5 text-chalk/50" />
              <MessageCircle className="w-4 h-4 text-chalk/80 relative z-10" />
              <span className="relative z-10">Cheer team</span>
            </a>

            {/* Light blue stripe color button */}
            <a
              href={WHATSAPP_LINKS.tumbling}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-flame hover:bg-flame-deep text-chalk font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors duration-150 shadow-[0_0_20px_rgba(0,168,255,0.25)]"
            >
              <MessageCircle className="w-4 h-4 text-chalk/80" />
              <span>Tumbling classes</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-start">
          <div className="relative flex items-center justify-center p-4 lg:-translate-x-12 lg:-translate-y-12">
            {/* Premium ambient glow behind the logo */}
            <div className="absolute w-96 h-96 bg-flame/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute w-72 h-72 bg-[#00a8ff]/20 rounded-full blur-[70px] pointer-events-none animate-pulse [animation-duration:5s]" />
            
            <JFlipsLogo 
              size="xl" 
              showText={false} 
              className="relative z-10 transition-transform duration-500 hover:scale-[1.02]" 
            />
          </div>
        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
        <span className="font-mono text-[9px] uppercase tracking-widest text-chalk/40">
          Scroll to explore
        </span>
        <ArrowDown className="w-4 h-4 text-chalk/40 animate-bounce" />
      </div>
    </section>
  );
}
