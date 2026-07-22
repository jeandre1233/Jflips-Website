/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote, Award, Sparkles } from 'lucide-react';
import aboutImage from '../pictures/Image_4.jpeg';

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-white text-ink relative border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* Left Column: Heading and High-Quality Coaching Photo */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-28">
            <div>
              <span className="tag self-start">The JFLIPS story</span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-ink mt-4 leading-tight">
                Our passion for the sport
              </h2>
            </div>

            {/* Premium Photo Slot */}
            <div className="relative overflow-hidden border border-ink/10 shadow-md rounded group">
              <img 
                src={aboutImage} 
                alt="Head coach spotting young athlete" 
                className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col gap-6 mt-2">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-chalk text-mat shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-ink text-sm">Structured progressions</h4>
                  <p className="font-sans text-xs text-ink/60 leading-relaxed mt-1">
                    A clear, safety-first syllabus that scales with each athlete.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-chalk text-mat shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-ink text-sm">Real mentorship</h4>
                  <p className="font-sans text-xs text-ink/60 leading-relaxed mt-1">
                    Helping kids build confidence, teamwork, and active habits that stick.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 font-sans text-ink/70 text-base md:text-lg leading-relaxed">

            <p className="text-xl md:text-2xl font-medium text-ink font-display tracking-tight leading-relaxed">
              We wanted a space where young athletes of any skill level could push themselves,
              learn to trust each other, and grow into confident people.
            </p>

            <p className="text-sm md:text-base">
              JFLIPS started from a genuine love of competitive cheerleading and tumbling. It's a
              demanding sport that teaches trust, coordination, and strength, yet there weren't
              enough structured, safe opportunities for kids in our local schools to learn it properly.
            </p>

            <p className="text-sm md:text-base">
              So we built a coaching programme that puts correct technique, safe progressions, and
              individual growth first. Focused stunting and tumbling drills, paired with real
              mentorship, help our athletes succeed as teammates on the mat and as leaders elsewhere.
            </p>

            <p className="text-sm md:text-base">
              Cheerleading and tumbling have a real power to bring school communities together and
              build lifelong habits. As we grow JFLIPS across Krugersdorp and the West Rand, our
              commitment stays the same: help kids learn safely, support their teammates, and step
              onto the mat with pride.
            </p>

            <div className="mt-8 border-t border-ink/10 pt-8 flex items-center justify-between text-sm">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 block">Organization</span>
                <span className="font-display font-bold text-ink text-sm">JFLIPS</span>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 block">Based in</span>
                <span className="font-display font-bold text-ink text-sm">Krugersdorp, South Africa</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
