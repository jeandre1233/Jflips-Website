/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, Clock, MapPin, DollarSign, Download, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINKS } from '../lib/constants';

export default function TumblingSchedule() {
  return (
    <section id="tumbling-schedule" className="py-20 md:py-24 bg-[#f5f1fa] text-ink border-t-2 border-b-2 border-ink/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-flame mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Tumbling Schedule & Pricing</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-ink leading-tight">
              Tumbling Classes Parent Info
            </h2>
            <p className="font-sans text-base md:text-lg text-ink/70 mt-3 max-w-2xl leading-relaxed">
              Structured floor gymnastics, air track mechanics, and tumbling progressions hosted at <strong className="text-ink font-semibold">Laerskool Muldersdrift</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <a
              href={WHATSAPP_LINKS.tumbling}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-flame hover:bg-flame-deep text-chalk font-sans font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition-colors duration-150 rounded shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Join via WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/tumbling_info.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink hover:bg-mat text-chalk font-sans font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition-colors duration-150 rounded"
            >
              <Download className="w-4 h-4 text-flame" />
              Info Sheet PDF
            </a>
          </div>
        </div>

        {/* Schedule & Info Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Class Days & Times */}
          <div className="md:col-span-7 bg-white p-6 md:p-8 border-2 border-ink/10 shadow-sm rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-6">
                <div className="flex items-center gap-2 text-ink">
                  <Calendar className="w-5 h-5 text-mat" />
                  <h3 className="font-display font-bold text-xl">Weekly Class Schedule</h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 bg-flame/15 text-flame rounded">
                  Active Sessions
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-chalk border border-ink/10 rounded">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-mat font-bold block mb-1">
                    Wednesdays & Thursdays
                  </span>
                  <div className="flex items-center gap-2 text-ink font-display font-bold text-xl">
                    <Clock className="w-4 h-4 text-ink/40" />
                    <span>2:00 PM – 3:00 PM</span>
                  </div>
                  <p className="font-sans text-xs text-ink/60 mt-1">Foundations & skill progressions</p>
                </div>

                <div className="p-4 bg-chalk border border-ink/10 rounded">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-flame font-bold block mb-1">
                    Fridays
                  </span>
                  <div className="flex items-center gap-2 text-ink font-display font-bold text-xl">
                    <Clock className="w-4 h-4 text-ink/40" />
                    <span>4:00 PM – 5:00 PM</span>
                  </div>
                  <p className="font-sans text-xs text-ink/60 mt-1">End-of-week tumbling session</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-ink/70 bg-[#ebe6f2] p-3.5 rounded border border-ink/10">
                <MapPin className="w-4 h-4 text-mat shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink">Venue:</strong> Laerskool Muldersdrift grounds.
                </div>
              </div>
            </div>

            <p className="font-sans text-xs text-mat font-semibold italic mt-6 pt-4 border-t border-ink/10">
              * Note: As numbers grow, we will look at adding more classes and days — keep an eye out as more established dates become available!
            </p>
          </div>

          {/* Pricing & Private Options */}
          <div className="md:col-span-5 bg-ink text-chalk p-6 md:p-8 border-2 border-ink shadow-sm rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-chalk/15 pb-4 mb-6">
                <div className="flex items-center gap-2 text-chalk">
                  <DollarSign className="w-5 h-5 text-flame" />
                  <h3 className="font-display font-bold text-xl">Rates & Private Options</h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 bg-chalk/10 text-chalk/80 rounded">
                  Per Session
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-chalk/5 border border-chalk/10 rounded">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-flame font-bold block mb-1">
                    Group Tumbling Class
                  </span>
                  <div className="font-display font-extrabold text-3xl text-chalk">
                    R200 <span className="text-xs font-sans text-chalk/60 font-normal">/ session</span>
                  </div>
                  <p className="font-sans text-xs text-chalk/60 mt-1 leading-relaxed">
                    Air track drills, progression lines, core strength & personal spotting.
                  </p>
                </div>

                <div className="p-4 bg-chalk/5 border border-chalk/10 rounded">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-chalk/60 font-bold block mb-1">
                    1-on-1 Private Coaching
                  </span>
                  <div className="font-display font-extrabold text-3xl text-chalk">
                    R350 <span className="text-xs font-sans text-chalk/60 font-normal">/ session</span>
                  </div>
                  <p className="font-sans text-xs text-chalk/60 mt-1 leading-relaxed">
                    Personalized coaching session; day & time scheduled directly with your coach.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_LINKS.tumbling}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full text-center bg-flame hover:bg-flame-deep text-chalk font-sans font-bold text-xs uppercase tracking-widest py-3.5 rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Join Tumbling Classes on WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
