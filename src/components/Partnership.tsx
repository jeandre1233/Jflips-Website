/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, ArrowRight } from 'lucide-react';
import partnershipImage from '../pictures/Image_3.jpeg';

interface OptionCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ownership: string;
  branding: string;
  administration: string;
  coaching: string;
  badge?: string;
  ctaText: string;
}

const PARTNERSHIPS: OptionCard[] = [
  {
    id: 'school-programme',
    number: '01',
    title: 'School programme',
    subtitle: 'Your school, our coaching',
    description: 'For schools who want cheer as an official sport, run through your existing co-curricular setup and your own school colors.',
    features: [
      'The school owns the team',
      'Uses your school colors, branding & uniforms',
      'Your office handles billing & permissions',
      'JFLIPS provides accredited coaching',
    ],
    ownership: 'School owned',
    branding: 'School brand',
    administration: 'School managed',
    coaching: 'JFLIPS coaching',
    ctaText: 'Ask about school programme',
  },
  {
    id: 'jflips-club',
    number: '02',
    title: 'JFLIPS club',
    subtitle: 'Zero admin, on your premises',
    description: 'For schools who want elite cheer training on-site with no administrative work or cost to the school.',
    features: [
      'JFLIPS owns & operates the team',
      'Runs under JFLIPS colors & apparel',
      'Parents register and pay JFLIPS directly',
      'JFLIPS manages everything end to end',
    ],
    ownership: 'JFLIPS owned',
    branding: 'JFLIPS brand',
    administration: 'JFLIPS managed',
    coaching: 'JFLIPS coaching',
    ctaText: 'Start a club at your school',
  },
];

export default function Partnership({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="schools" className="py-24 md:py-32 bg-[#ebe6f2] text-ink scroll-mt-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <span className="tag">For schools</span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-4 text-ink leading-tight">
              Bring cheer to your school
            </h2>
            <p className="font-sans text-lg text-ink/70 mt-6 leading-relaxed">
              We partner with schools across the West Rand to set up cheer programmes. Pick whichever
              setup fits how your school runs.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden border border-ink/10 shadow-md rounded">
              <img 
                src={partnershipImage} 
                alt="School cheer partnership team" 
                className="w-full h-[240px] object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-ink/10 border-2 border-ink/10">
          {PARTNERSHIPS.map((partner) => {
            const isClub = partner.id === 'jflips-club';
            return (
              <div
                key={partner.id}
                className={`relative flex flex-col justify-between p-8 md:p-12 ${
                  isClub ? 'bg-ink text-chalk' : 'bg-white text-ink'
                }`}
              >
                <div>
                  <span className={`score-num text-2xl block mb-4 ${isClub ? 'text-flame' : 'text-mat'}`}>
                    {partner.number}
                  </span>

                  <h3 className={`font-display font-bold text-3xl md:text-4xl tracking-tight mb-2 ${isClub ? 'text-chalk' : 'text-ink'}`}>
                    {partner.title}
                  </h3>
                  <p className={`font-sans text-sm mb-6 font-semibold ${isClub ? 'text-flame' : 'text-mat'}`}>
                    {partner.subtitle}
                  </p>

                  <p className={`font-sans text-sm leading-relaxed mb-8 ${isClub ? 'text-chalk/70' : 'text-ink/60'}`}>
                    {partner.description}
                  </p>

                  <div className={`grid grid-cols-2 gap-4 mb-8 py-6 border-t-2 border-b-2 ${isClub ? 'border-chalk/15 text-chalk/90' : 'border-ink/10 text-ink/80'}`}>
                    <div>
                      <span className={`font-mono text-[9px] uppercase tracking-widest block mb-1 ${isClub ? 'text-chalk/40' : 'text-ink/40'}`}>Ownership</span>
                      <span className="text-xs font-semibold">{partner.ownership}</span>
                    </div>
                    <div>
                      <span className={`font-mono text-[9px] uppercase tracking-widest block mb-1 ${isClub ? 'text-chalk/40' : 'text-ink/40'}`}>Apparel</span>
                      <span className="text-xs font-semibold">{partner.branding}</span>
                    </div>
                    <div>
                      <span className={`font-mono text-[9px] uppercase tracking-widest block mb-1 ${isClub ? 'text-chalk/40' : 'text-ink/40'}`}>Admin</span>
                      <span className="text-xs font-semibold">{partner.administration}</span>
                    </div>
                    <div>
                      <span className={`font-mono text-[9px] uppercase tracking-widest block mb-1 ${isClub ? 'text-chalk/40' : 'text-ink/40'}`}>Coaching</span>
                      <span className="text-xs font-semibold">{partner.coaching}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {partner.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isClub ? 'text-flame' : 'text-mat'}`} />
                        <span className={`font-sans text-sm ${isClub ? 'text-chalk/85' : 'text-ink/70'}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <button
                    onClick={onContactClick}
                    className={`group w-full font-sans font-bold text-xs uppercase tracking-widest py-4 transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                      isClub ? 'bg-flame hover:bg-flame-deep text-chalk' : 'border-2 border-ink hover:bg-ink hover:text-chalk text-ink'
                    }`}
                  >
                    {partner.ctaText}
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
