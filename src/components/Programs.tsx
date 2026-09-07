/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, Clock, MapPin, MessageCircle, Sparkles, Shield, Users } from 'lucide-react';
import { WHATSAPP_LINKS } from '../lib/constants';

interface ProgramsProps {
  onContactClick: () => void;
}

export default function Programs({ onContactClick }: ProgramsProps) {
  return (
    <section id="programs" className="relative py-20 md:py-28 bg-[#f8fafc] text-ink border-t border-b border-zinc-200 scroll-mt-20">
      <div id="parents" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-14 gap-6">
          <div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-ink leading-tight">
              Tumbling classes &amp; cheerleading teams
            </h2>
          </div>
          <p className="font-sans text-ink/75 max-w-xl text-base leading-relaxed">
            Both programs receive equal focus and qualified coaching. Whether mastering high-flying competitive cheerleading stunts or precision floor tumbling, athletes train in an encouraging, safety-first environment.
          </p>
        </div>

        {/* 50/50 Equal Split: Tumbling Classes on Left, Cheerleading on Right */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT CARD: Precision Tumbling Classes */}
          <div className="bg-white border border-zinc-200 rounded-lg p-7 md:p-9 flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-ink tracking-tight mb-3">
                Tumbling classes
              </h3>
              <p className="font-sans text-sm text-ink/75 leading-relaxed mb-6">
                Dedicated floor acrobatics and tumbling mechanics. Athletes build spatial awareness, core strength, and safe landing habits, progressing from foundational handstands and cartwheels to round-offs, back handsprings, tucks, and aerial flips.
              </p>

              {/* Venue / Location */}
              <div className="p-4 bg-zinc-50 rounded border border-zinc-200 mb-6 flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-mat/10 text-mat flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 font-medium block mb-0.5">
                    Location
                  </span>
                  <div className="font-display font-bold text-ink text-base">
                    Laerskool Muldersdrift Grounds
                  </div>
                  <span className="text-xs text-zinc-600">Krugersdorp, Gauteng</span>
                </div>
              </div>

              {/* Weekly Schedule */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-mat" />
                  <span className="text-xs font-bold text-ink">
                    Weekly class schedule
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-zinc-50 border border-zinc-200 rounded">
                    <span className="text-xs text-mat font-semibold block mb-1">
                      Wednesdays &amp; Thursdays
                    </span>
                    <div className="flex items-center gap-2 text-ink font-display font-bold text-base">
                      <Clock className="w-4 h-4 text-zinc-400" />
                      <span>2:00 PM – 3:00 PM</span>
                    </div>
                    <p className="text-xs text-zinc-600 mt-1">Fundamentals &amp; skill drills</p>
                  </div>

                  <div className="p-3.5 bg-zinc-50 border border-zinc-200 rounded">
                    <span className="text-xs text-flame-deep font-semibold block mb-1">
                      Fridays
                    </span>
                    <div className="flex items-center gap-2 text-ink font-display font-bold text-base">
                      <Clock className="w-4 h-4 text-zinc-400" />
                      <span>4:00 PM – 5:00 PM</span>
                    </div>
                    <p className="text-xs text-zinc-600 mt-1">End-of-week technique session</p>
                  </div>
                </div>

                <p className="font-sans text-xs text-zinc-600 mt-2.5">
                  Additional class times are added as training groups expand.
                </p>
              </div>

              {/* Pricing Note */}
              <div className="p-4 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-700 mb-6">
                <span className="text-xs font-semibold text-zinc-800 block mb-1">
                  Tuition and enrollment
                </span>
                <p>
                  We offer group packages and private coaching options. Contact Coach Jeandré directly to discuss rates and class placement.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-5 border-t border-zinc-200 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={WHATSAPP_LINKS.tumbling}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-flame hover:bg-flame-deep text-white font-sans font-semibold text-sm px-5 py-3.5 rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire about tumbling</span>
              </a>

              <button
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 text-zinc-700 hover:text-ink font-sans font-medium text-xs transition-colors cursor-pointer"
              >
                General inquiry
              </button>
            </div>
          </div>

          {/* RIGHT CARD: Cheerleading Team Training */}
          <div className="bg-white border border-zinc-200 rounded-lg p-7 md:p-9 flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-ink tracking-tight mb-1">
                Cheerleading team training
              </h3>
              <p className="text-sm font-semibold text-mat mb-3">
                For all stages
              </p>
              <p className="font-sans text-sm text-ink/75 leading-relaxed mb-6">
                Our flagship cheerleading squad. Athletes combine partner stunting, pyramids, basket tosses, jumps, tumbling, and synchronised choreography into competition routines for national competition stages.
              </p>

              {/* Venue & Eligibility */}
              <div className="p-4 bg-zinc-50 rounded border border-zinc-200 mb-6 flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-mat/10 text-mat flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 font-medium block mb-0.5">
                    Training hub
                  </span>
                  <div className="font-display font-bold text-ink text-base">
                    Krugersdorp Hub &amp; Partner Schools
                  </div>
                  <span className="text-xs text-zinc-600">Ages 6 to 18, grouped by skill level</span>
                </div>
              </div>

              {/* Team Structure & Practices */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4 h-4 text-mat" />
                  <span className="text-xs font-bold text-ink">
                    Training commitment
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-zinc-50 border border-zinc-200 rounded">
                    <span className="text-xs text-mat font-semibold block mb-1">
                      Squad practices
                    </span>
                    <div className="flex items-center gap-2 text-ink font-display font-bold text-base">
                      <Clock className="w-4 h-4 text-zinc-400" />
                      <span>Two to four hours weekly</span>
                    </div>
                    <p className="text-xs text-zinc-600 mt-1">Stunting, pyramid build &amp; motions</p>
                  </div>

                  <div className="p-3.5 bg-zinc-50 border border-zinc-200 rounded">
                    <span className="text-xs text-flame-deep font-semibold block mb-1">
                      Competition pathway
                    </span>
                    <div className="flex items-center gap-2 text-ink font-display font-bold text-base">
                      <Sparkles className="w-4 h-4 text-zinc-400" />
                      <span>National Competition Ready</span>
                    </div>
                    <p className="text-xs text-zinc-600 mt-1">Showcases and provincial routines</p>
                  </div>
                </div>

                <p className="font-sans text-xs text-zinc-600 mt-2.5">
                  Trial sessions welcome new athletes with no previous cheer experience.
                </p>
              </div>

              {/* Pricing Note */}
              <div className="p-4 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-700 mb-6">
                <span className="text-xs font-semibold text-zinc-800 block mb-1">
                  Team placement and enrollment
                </span>
                <p>
                  Cheer membership includes coaching, routine choreography, and team clinics. Contact Coach Jeandré to discuss team placement and training details.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-5 border-t border-zinc-200 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={WHATSAPP_LINKS.cheer}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-mat hover:bg-mat-deep text-white font-sans font-semibold text-sm px-5 py-3.5 rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire about cheer</span>
              </a>

              <button
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 text-zinc-700 hover:text-ink font-sans font-medium text-xs transition-colors cursor-pointer"
              >
                General inquiry
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
