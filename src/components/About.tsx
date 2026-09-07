/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, Users } from 'lucide-react';
import aboutImage from '../pictures/Image_4.jpeg';

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-white text-ink relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading and Coaching Photo */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-ink leading-tight">
                Our passion for the sport
              </h2>
            </div>

            {/* Photo Slot */}
            <div className="overflow-hidden border border-zinc-200 rounded shadow-xs bg-zinc-100">
              <img 
                src={aboutImage} 
                alt="Head coach spotting young athlete" 
                className="w-full h-[300px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-zinc-100 text-mat shrink-0 rounded">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-ink text-sm">Structured progressions</h4>
                  <p className="font-sans text-xs text-zinc-600 leading-relaxed mt-0.5">
                    A clear, safety-first syllabus that scales with each athlete.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-zinc-100 text-mat shrink-0 rounded">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-ink text-sm">Direct mentorship</h4>
                  <p className="font-sans text-xs text-zinc-600 leading-relaxed mt-0.5">
                    Building confidence, teamwork, and active athletic habits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 font-sans text-zinc-700 text-base leading-relaxed">

            <p className="text-xl md:text-2xl font-medium text-ink font-display tracking-tight leading-relaxed">
              We built a space where athletes of any skill level can learn safely, trust their teammates, and develop real physical confidence.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              JFLIPS started from hands-on dedication to competitive cheerleading and gymnastics tumbling. Cheer is a demanding athletic discipline combining coordination, power, and team accountability.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              Our training puts safe progression, foundational mechanics, and conditioning first. Every skill on the mat is broken down into drills so athletes understand the body control behind what they perform.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              Whether preparing for national competitions or learning for the first time, we maintain standard safety protocols and dedicated coach supervision in every session.
            </p>

            <div className="mt-6 border-t border-zinc-200 pt-6 flex items-center justify-between text-sm">
              <div>
                <span className="text-xs text-zinc-500 font-medium block">Organization</span>
                <span className="font-display font-bold text-ink text-sm">JFLIPS Cheer &amp; Tumbling</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-zinc-500 font-medium block">Based in</span>
                <span className="font-display font-bold text-ink text-sm">Krugersdorp, South Africa</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
