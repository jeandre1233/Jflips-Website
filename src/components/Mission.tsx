/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crown, HeartHandshake, Users, Dumbbell } from 'lucide-react';
import { ValueCard } from '../types';
import PhoneFrame from './PhoneFrame';

const VALUES: ValueCard[] = [
  {
    id: 'confidence',
    title: 'Real confidence',
    description: 'Nailing a new skill on the mat builds a kind of self-belief that carries into everyday life.',
    iconName: 'Crown',
  },
  {
    id: 'safety',
    title: 'Safety first',
    description: 'Every skill is taught through structured, age-appropriate progressions, always spotted.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'teamwork',
    title: 'Trust & teamwork',
    description: 'Stunting only works when athletes trust each other completely — bonds that last.',
    iconName: 'Users',
  },
  {
    id: 'discipline',
    title: 'Discipline & fitness',
    description: 'Real strength and focus, built through consistent, hard-working practice.',
    iconName: 'Dumbbell',
  },
];

const iconMap: Record<string, any> = { Crown, HeartHandshake, Users, Dumbbell };

export default function Mission() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white text-ink border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Phone Frame Video Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneFrame videoSrc="/phone.mp4" />
          </div>

          {/* Right Column: Heading, Narrative, and Value Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-ink leading-tight">
              Confidence, built on the mat
            </h2>

            <p className="font-sans text-lg text-ink/75 leading-relaxed mt-5">
              JFLIPS gives young athletes a safe, structured space to master stunting and tumbling,
              built on respect and good sportsmanship. Athletes gain real confidence,
              discipline, and teamwork that carries far beyond the gym.
            </p>

            {/* Core Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-zinc-200">
              {VALUES.map((val) => {
                const IconComp = iconMap[val.iconName] || Crown;
                return (
                  <div
                    key={val.id}
                    className="flex flex-col gap-2.5 p-5 bg-[#f8f9fa] border border-zinc-200 rounded"
                  >
                    <div className="w-8 h-8 bg-white border border-zinc-200 text-mat flex items-center justify-center rounded">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-ink tracking-tight">
                      {val.title}
                    </h3>
                    <p className="font-sans text-xs text-ink/70 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
