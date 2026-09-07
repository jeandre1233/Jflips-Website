/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, FileText, Download } from 'lucide-react';
import partnershipImage from '../pictures/Image_3.jpeg';

interface OptionCard {
  id: string;
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
    title: 'Option A: School-Run Team',
    subtitle: 'Your school, our accredited coaching',
    description: 'The school takes full ownership of the team identity and administration. Registered under the national federation through the school, JFLIPS provides qualified coaches directly.',
    features: [
      'School owns team identity and registers for national competition',
      'Uses your school colors, name, and custom uniforms',
      'School handles parent billing and event permissions',
      'JFLIPS provides accredited coaches and choreography',
    ],
    ownership: 'School owned',
    branding: '[School Name] Cheer',
    administration: 'School managed',
    coaching: 'JFLIPS coaches',
    ctaText: 'Inquire about Option A',
  },
  {
    id: 'jflips-club',
    title: 'Option B: JFLIPS Club Partnership',
    subtitle: 'Turnkey program, zero admin load',
    description: 'JFLIPS handles everything end-to-end — administration, coaching staff, and parent billing. We utilize your facilities for practice with a co-branded team name.',
    features: [
      'JFLIPS handles administration, registration, and billing',
      'Zero administrative or financial burden on the school',
      'Co-branded team identity',
      'Uses school grounds or hall for practice sessions',
    ],
    ownership: 'JFLIPS managed',
    branding: 'Co-branded team',
    administration: 'JFLIPS managed',
    coaching: 'JFLIPS coaches',
    ctaText: 'Inquire about Option B',
  },
];

export default function Partnership({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="schools" className="py-20 md:py-28 bg-[#f1f5f9] text-ink scroll-mt-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-ink leading-tight">
              Bring competitive cheer &amp; tumbling to your school
            </h2>
            <p className="font-sans text-lg text-ink/75 mt-5 leading-relaxed">
              We offer two partnership models so your school can provide a high-energy, inclusive, nationally recognized sport with the level of involvement that suits your sports department.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/school_proposal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink hover:bg-mat text-white font-sans font-semibold text-xs px-5 py-3 transition-colors duration-150 rounded"
              >
                <FileText className="w-4 h-4 text-flame" />
                View school proposal PDF (7 pages)
                <Download className="w-3.5 h-3.5 ml-1 opacity-70" />
              </a>
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 border border-zinc-300 hover:bg-white text-ink font-sans font-semibold text-xs px-5 py-3 transition-colors duration-150 rounded cursor-pointer"
              >
                Request a school meeting
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden border border-zinc-300 rounded shadow-xs bg-white">
              <img 
                src={partnershipImage} 
                alt="School cheer partnership team" 
                className="w-full h-[240px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3.5 bg-white border-t border-zinc-200">
                <span className="text-xs text-mat font-semibold block">International cheerleading experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {PARTNERSHIPS.map((partner) => {
            const isClub = partner.id === 'jflips-club';
            return (
              <div
                key={partner.id}
                className={`relative flex flex-col justify-between p-8 md:p-10 rounded-lg border ${
                  isClub 
                    ? 'bg-[#0b132b] text-white border-slate-700' 
                    : 'bg-white text-ink border-zinc-200'
                }`}
              >
                <div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-2">
                    {partner.title}
                  </h3>
                  <p className={`font-sans text-sm mb-5 font-semibold ${isClub ? 'text-flame' : 'text-mat'}`}>
                    {partner.subtitle}
                  </p>

                  <p className={`font-sans text-sm leading-relaxed mb-6 ${isClub ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {partner.description}
                  </p>

                  <div className={`grid grid-cols-2 gap-4 mb-6 py-5 border-t border-b ${isClub ? 'border-white/10' : 'border-zinc-200'}`}>
                    <div>
                      <span className={`text-xs block mb-1 font-medium ${isClub ? 'text-zinc-400' : 'text-zinc-500'}`}>Ownership</span>
                      <span className="text-xs font-semibold">{partner.ownership}</span>
                    </div>
                    <div>
                      <span className={`text-xs block mb-1 font-medium ${isClub ? 'text-zinc-400' : 'text-zinc-500'}`}>Branding</span>
                      <span className="text-xs font-semibold">{partner.branding}</span>
                    </div>
                    <div>
                      <span className={`text-xs block mb-1 font-medium ${isClub ? 'text-zinc-400' : 'text-zinc-500'}`}>Admin &amp; Billing</span>
                      <span className="text-xs font-semibold">{partner.administration}</span>
                    </div>
                    <div>
                      <span className={`text-xs block mb-1 font-medium ${isClub ? 'text-zinc-400' : 'text-zinc-500'}`}>Coaching</span>
                      <span className="text-xs font-semibold">{partner.coaching}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {partner.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isClub ? 'text-flame' : 'text-mat'}`} />
                        <span className={`font-sans text-xs leading-relaxed ${isClub ? 'text-zinc-200' : 'text-zinc-700'}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={onContactClick}
                    className={`w-full font-sans font-semibold text-xs py-3.5 transition-colors duration-150 flex items-center justify-center rounded cursor-pointer ${
                      isClub 
                        ? 'bg-flame hover:bg-flame-deep text-white' 
                        : 'border border-zinc-300 hover:bg-zinc-50 text-ink'
                    }`}
                  >
                    {partner.ctaText}
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
