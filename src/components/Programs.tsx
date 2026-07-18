/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Activity, ChevronRight } from 'lucide-react';
import { ProgramItem } from '../types';

const PROGRAMS: ProgramItem[] = [
  {
    title: 'Cheerleading team training',
    description: 'Our flagship squad. Stunts, pyramids, basket tosses, jumps, and choreography, built into full competition routines.',
    ageGroup: 'Ages 6–18, grouped by skill',
    duration: '2–4 hrs / week',
    intensity: 'Intermediate',
    features: ['Stunting & pyramids', 'Team choreography', 'Annual showcase', 'Safety-first syllabus'],
  },
  {
    title: 'Precision tumbling class',
    description: 'Floor gymnastics only. Athletes progress from handstands and cartwheels to round-offs, back handsprings, and layouts.',
    ageGroup: 'Ages 5+, beginner to elite',
    duration: '1–2 hrs / week',
    intensity: 'All Levels',
    features: ['Spring-floor drills', 'Progression lines', 'Core strength & flexibility', 'Personal spotting'],
  },
  {
    title: 'Private stunt & tumbling',
    description: 'One-on-one sessions with a certified coach, built to break through mental blocks and sharpen specific skills fast.',
    ageGroup: 'All ages',
    duration: '45–60 min slots',
    intensity: 'Elite',
    features: ['Rapid skill progress', 'Video analysis', 'Mental-block coaching', 'Elite spotting'],
  },
  {
    title: 'Holiday clinics',
    description: 'Multi-day training camps over school holidays, for absolute beginners and returning athletes alike.',
    ageGroup: 'Ages 6–16',
    duration: '3–5 day camps',
    intensity: 'Introductory',
    features: ['Skill trial loops', 'New friendships', 'Routine showcase', 'Camp shirt & award'],
  },
  {
    title: 'School demonstrations',
    description: 'High-energy performances for assemblies and sports days that get students excited and asking how to sign up.',
    ageGroup: 'School assemblies',
    duration: '15–30 min show',
    intensity: 'All Levels',
    features: ['Live stunting', 'Student participation', 'School spirit', 'Safety Q&A'],
  },
];

export default function Programs({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="programs" className="py-24 md:py-32 bg-white text-ink border-t-2 border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-8">
          <div>
            <span className="tag">Programs</span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-4 text-ink">
              Every level, one squad
            </h2>
          </div>
          <p className="font-sans text-ink/70 max-w-lg leading-relaxed">
            Every programme is coached by accredited cheer specialists, with mechanics scaled so
            every athlete flies and tumbles under control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border-2 border-ink/10">
          {PROGRAMS.map((prog, idx) => {
            const isFlagship = idx === 0;
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
                      {isFlagship ? 'Flagship Stream' : prog.intensity}
                    </span>
                    <span className="font-mono text-[9px] text-ink/40 tracking-wider">
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

                <div className={`mt-8 pt-6 border-t-2 border-ink/10 ${isFlagship ? 'flex justify-end' : ''}`}>
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
