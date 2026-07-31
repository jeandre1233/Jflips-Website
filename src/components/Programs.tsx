/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Activity, ChevronRight, Calendar, Clock, MapPin, DollarSign, FileText, Download } from 'lucide-react';
import { ProgramItem } from '../types';

const PROGRAMS: ProgramItem[] = [
  {
    title: 'Cheerleading team training',
    description: 'Our flagship team. Stunts, pyramids, basket tosses, jumps, and choreography, built into full competition routines.',
    ageGroup: 'Ages 6–18, grouped by skill',
    duration: '2–4 hrs / week',
    intensity: 'Intermediate',
    features: ['Stunting & pyramids', 'Team choreography', 'Performance routines', 'Safety-first syllabus'],
  },
  {
    title: 'Precision tumbling class',
    description: 'Floor gymnastics & tumbling mechanics. Athletes progress safely from handstands and cartwheels to round-offs, back handsprings, and flips.',
    ageGroup: 'Ages 5+, beginner to elite',
    duration: 'Fridays: 4:00 PM – 5:00 PM',
    intensity: 'All Levels',
    features: [
      'Venue: Laerskool Muldersdrift',
      'Cost: R200 per session',
      'Air track & progression lines',
      'More days & times opening soon!',
    ],
  },
  {
    title: 'Private stunt & tumbling',
    description: 'One-on-one sessions with a certified coach (R350 / session), built to break through mental blocks and sharpen specific skills fast.',
    ageGroup: 'All ages',
    duration: 'Flexible scheduling',
    intensity: 'Elite',
    features: ['Rapid skill progress', 'One-on-one personalized classes', 'Mental-block coaching', 'Elite spotting'],
  },
  {
    title: 'Skill progression clinics',
    description: 'Focused two-day training camps over school holidays, for absolute beginners and returning athletes alike.',
    ageGroup: 'Ages 6–16',
    duration: '2-day camps',
    intensity: 'Introductory',
    features: ['Skill-focused trials', 'Technique & progressions', 'Accelerated skill drills', 'Safety & spotting'],
  },
  {
    title: 'School demonstrations',
    description: 'High-energy showcase for schools interested in launching a team, giving students a live preview before kickoff.',
    ageGroup: 'Schools starting a team',
    duration: '15–30 min show',
    intensity: 'All Levels',
    features: ['Pre-launch preview', 'Live stunting', 'Student participation', 'Safety Q&A'],
  },
];

export default function Programs({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="programs" className="py-24 md:py-32 bg-white text-ink border-t-2 border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="tag">Programs & Syllabi</span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-4 text-ink">
              From Foundations to Flight
            </h2>
          </div>
          <p className="font-sans text-ink/70 max-w-lg leading-relaxed">
            Every programme is coached by accredited cheer & tumbling specialists, with mechanics scaled so every athlete flies and tumbles safely under control.
          </p>
        </div>

        {/* Tumbling Parent Info Sheet Spotlight Banner */}
        <div className="mb-12 p-6 md:p-8 bg-[#f5f1fa] border-2 border-ink/15 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-mat text-chalk rounded shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest bg-flame/15 text-flame font-bold px-2 py-0.5 rounded">
                  Parent Info Sheet
                </span>
                <span className="text-xs text-ink/50 font-medium">Updated Details</span>
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-ink mt-1">
                Tumbling Class Schedule & Pricing
              </h3>
              <p className="font-sans text-xs md:text-sm text-ink/70 mt-1 max-w-2xl leading-relaxed">
                <strong className="text-ink">Laerskool Muldersdrift</strong> • Fridays 4:00 PM – 5:00 PM • R200/session (or R350/session for 1-on-1 private coaching).
                <br />
                <em className="text-mat font-medium">Note: Classes are currently on Fridays. As numbers grow, we are actively looking at expanding to more days and times!</em>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="/tumbling_info.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-ink hover:bg-mat text-chalk font-sans font-bold text-xs uppercase tracking-widest px-5 py-3 transition-colors rounded"
            >
              <Download className="w-4 h-4 text-flame" />
              Download Info Sheet PDF
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border-2 border-ink/10">
          {PROGRAMS.map((prog, idx) => {
            const isFlagship = idx === 0;
            const isTumbling = idx === 1;
            return (
              <div
                key={prog.title}
                className={`group relative flex flex-col justify-between bg-white p-8 hover:bg-chalk transition-all duration-200 ${
                  isFlagship ? 'md:col-span-2 lg:col-span-2 md:p-12' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-mono text-[9px] uppercase tracking-widest font-bold px-2 py-1 bg-chalk text-ink/70 border border-ink/10">
                      {isFlagship ? 'Flagship Stream' : isTumbling ? 'Tumbling Focus' : prog.intensity}
                    </span>
                    <span className="font-mono text-[9px] text-ink/60 tracking-wider font-semibold">
                      {prog.duration}
                    </span>
                  </div>

                  {isFlagship ? (
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h3 className="font-display font-extrabold text-3xl md:text-4xl text-ink group-hover:text-mat transition-colors duration-200 tracking-tight mb-4">
                          {prog.title}
                        </h3>
                        <p className="font-sans text-sm md:text-base text-ink/70 leading-relaxed">
                          {prog.description}
                        </p>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="border-l-4 border-mat pl-4 mb-6">
                          <span className="font-mono text-[8px] uppercase tracking-widest text-ink/40 block mb-1">Who it's for</span>
                          <span className="text-xs md:text-sm font-semibold text-ink">{prog.ageGroup}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {prog.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-xs text-ink/70">
                              <Activity className="w-3.5 h-3.5 text-mat shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-display font-bold text-2xl text-ink group-hover:text-mat transition-colors duration-200 tracking-tight mb-4">
                        {prog.title}
                      </h3>

                      <p className="font-sans text-sm text-ink/60 leading-relaxed mb-6">
                        {prog.description}
                      </p>

                      <div className="border-l-4 border-mat pl-4 mb-6">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-ink/40 block mb-1">Who it's for</span>
                        <span className="text-xs font-semibold text-ink">{prog.ageGroup}</span>
                      </div>

                      <div className="flex flex-col gap-3">
                        {prog.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-ink/70">
                            <Activity className="w-3.5 h-3.5 text-mat shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className={`mt-8 pt-6 border-t-2 border-ink/10 flex items-center ${isFlagship ? 'justify-end' : 'justify-between'}`}>
                  {isTumbling && (
                    <a
                      href="/tumbling_info.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-bold text-[10px] uppercase tracking-widest text-ink/60 hover:text-ink transition-colors underline"
                    >
                      PDF Info Sheet
                    </a>
                  )}
                  <button
                    onClick={onContactClick}
                    className="group/btn inline-flex items-center gap-1.5 font-sans font-bold text-[10px] uppercase tracking-widest text-mat hover:text-mat-deep transition-colors cursor-pointer"
                  >
                    Ask about this program
                    <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
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
