/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Trophy, ShieldAlert, Heart, Compass, Users, Zap } from 'lucide-react';

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: any;
}

const BENEFITS: Benefit[] = [
  {
    id: 'confidence',
    title: 'Unshakeable confidence',
    description: 'Nailing a stunt or a full routine in front of a crowd builds a kind of self-belief that is hard to get anywhere else.',
    icon: Compass,
  },
  {
    id: 'leadership',
    title: 'Natural leadership',
    description: 'Cheerleading demands clear communication under pressure. Athletes learn to lead, and to be leaned on.',
    icon: Trophy,
  },
  {
    id: 'fitness',
    title: 'Real physical fitness',
    description: 'Gymnastics, tumbling, core strength, and endurance, fused into one sport. Our athletes get properly fit.',
    icon: Zap,
  },
  {
    id: 'discipline',
    title: 'Elite discipline',
    description: 'Stunts and pyramids run on split-second timing. Athletes learn focus, consistency, and self-control fast.',
    icon: ShieldAlert,
  },
  {
    id: 'friendships',
    title: 'Bonds that last',
    description: 'When you are literally holding a teammate in the air, the trust you build becomes a lifelong friendship.',
    icon: Users,
  },
  {
    id: 'spirit',
    title: 'School spirit',
    description: 'Cheer teams are the heartbeat of school pride. Our squads bring energy that carries through the whole school.',
    icon: Heart,
  },
];

export default function WhyCheerleading() {
  const [activeTab, setActiveTab] = useState(BENEFITS[0].id);

  return (
    <section id="parents" className="py-24 md:py-32 bg-[#f0f4f8] text-ink border-t border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="tag">Beyond the mat</span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-ink leading-tight">
              Why parents choose cheer
            </h2>
            <p className="font-sans text-lg text-ink/70 leading-relaxed mt-4">
              Cheerleading is more than choreography. It builds character, courage, and real conditioning,
              and prepares kids to handle pressure in any arena.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden border border-ink/10 shadow-md rounded group">
              <img 
                src="/src/pictures/Image_5.jpeg" 
                alt="Cheerleading team training session" 
                className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">

          <div className="lg:col-span-5 flex flex-col gap-6">

            <div className="bg-white p-8 border-l-4 border-mat shadow-sm">
              <span className="font-mono text-xs text-mat uppercase tracking-widest font-semibold block mb-2">Confidence</span>
              <div className="flex items-baseline gap-2">
                <span className="score-num text-5xl md:text-6xl text-ink">94%</span>
                <span className="font-sans text-sm text-ink/60 font-medium">report a boost</span>
              </div>
              <p className="text-ink/60 text-xs mt-3 leading-relaxed">
                Parents report a real lift in social confidence and classroom leadership within six months.
              </p>
            </div>

            <div className="bg-ink p-8 text-chalk border-l-4 border-flame shadow-md">
              <span className="font-mono text-xs text-flame uppercase tracking-widest font-bold block mb-2">Safety</span>
              <div className="flex items-baseline gap-2">
                <span className="score-num text-5xl md:text-6xl text-chalk">100%</span>
                <span className="font-sans text-sm text-chalk/50 font-semibold">progression-based</span>
              </div>
              <p className="text-chalk/60 text-xs mt-3 leading-relaxed">
                Every stunt follows a strict progression. Nobody skips a level before it is safe to move on.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-mat shadow-sm">
              <span className="font-mono text-xs text-mat uppercase tracking-widest font-semibold block mb-2">School impact</span>
              <div className="flex items-baseline gap-2">
                <span className="score-num text-5xl md:text-6xl text-ink">5x</span>
                <span className="font-sans text-sm text-ink/60 font-medium">pep rally energy</span>
              </div>
              <p className="text-ink/60 text-xs mt-3 leading-relaxed">
                Our teams multiply school pride and peer engagement at every assembly and demonstration.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-3">
            {BENEFITS.map((benefit) => {
              const IconComp = benefit.icon;
              const isActive = activeTab === benefit.id;

              return (
                <div
                  key={benefit.id}
                  onClick={() => setActiveTab(benefit.id)}
                  className={`p-6 border-2 cursor-pointer transition-all duration-150 ${
                    isActive ? 'bg-white border-mat shadow-md' : 'bg-white/60 border-ink/5 hover:border-ink/20 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 shrink-0 transition-colors duration-150 ${
                      isActive ? 'bg-mat text-chalk' : 'bg-chalk text-ink/60'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-lg text-ink">
                        {benefit.title}
                      </h4>
                      <div className={`mt-2 font-sans text-sm leading-relaxed overflow-hidden transition-all duration-200 ${
                        isActive ? 'max-h-24 text-ink/70' : 'max-h-0 opacity-0'
                      }`}>
                        {benefit.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
