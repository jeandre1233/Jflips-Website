/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINKS } from '../lib/constants';

export default function RegisterInterestForm() {
  return (
    <section id="register" className="py-20 md:py-28 bg-[#0b132b] text-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-5 flex flex-col gap-5">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white leading-tight">
              Connect with Coach Jeandré
            </h2>
            <p className="font-sans text-zinc-300 text-sm md:text-base leading-relaxed">
              We connect directly with every parent and athlete before enrollment to understand current skill level, goals, and class placement.
            </p>

            <div className="p-5 bg-white/5 border border-white/10 rounded-lg mt-2 flex items-start gap-3.5">
              <div className="p-2 bg-mat/20 text-mat shrink-0 rounded">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white mb-1">Direct coach consultation</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We discuss your athlete's experience, trial sessions, and answer all parent questions directly on WhatsApp.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-flame block mb-1">Team Program</span>
                <h3 className="font-display font-bold text-2xl text-white mb-3 tracking-tight">Cheerleading</h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                  Competitive cheerleading team in Krugersdorp. Open to ages 4–18+, Level 1–4 stunting taught with accredited safety guidelines.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={WHATSAPP_LINKS.cheer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-mat hover:bg-mat-deep text-white font-sans font-semibold text-xs py-3 flex items-center justify-center gap-2 transition-colors rounded"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inquire about cheer
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-flame block mb-1">Weekly Classes</span>
                <h3 className="font-display font-bold text-2xl text-white mb-3 tracking-tight">Tumbling</h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                  Floor acrobatics, back handsprings, tucks, and layouts with progressions suitable for gymnasts, dancers, and beginners.
                </p>
              </div>

              <div className="mt-4">
                <a
                  href={WHATSAPP_LINKS.tumbling}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-flame hover:bg-flame-deep text-white font-sans font-semibold text-xs py-3 flex items-center justify-center gap-2 transition-colors rounded"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inquire about tumbling
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
