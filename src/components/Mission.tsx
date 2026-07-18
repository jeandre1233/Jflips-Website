/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Target, Crown, HeartHandshake, Users, Dumbbell } from 'lucide-react';
import { ValueCard } from '../types';
import missionImage from '../pictures/Image_1.jpeg';

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
    <section id="about" className="py-20 md:py-28 bg-white text-ink border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 text-mat">
              <Target className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Our mission</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-ink leading-tight">
              Confidence, built on the mat
            </h2>
            <p className="font-sans text-lg text-ink/70 leading-relaxed">
              JFLIPS gives young athletes a safe, structured space to master stunting and tumbling,
              built on respect and good sportsmanship — and they walk away with real confidence,
              discipline, and teamwork that carries far beyond the gym.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden border border-ink/10 shadow-lg group">
              <img
                src={missionImage}
                alt="JFLIPS athletes training"
                className="w-full h-[320px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val) => {
            const IconComp = iconMap[val.iconName] || Crown;
            return (
              <div
                key={val.id}
                className="group p-6 bg-chalk border border-ink/10 hover:border-mat transition-all duration-200"
              >
                <div className="w-10 h-10 bg-white border border-ink/10 text-mat flex items-center justify-center mb-4 group-hover:bg-mat group-hover:text-chalk transition-all duration-200">
                  <IconComp className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-display font-bold text-base text-ink mb-2 tracking-tight">
                  {val.title}
                </h4>
                <p className="font-sans text-xs text-ink/60 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
