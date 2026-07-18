/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimelineStep } from '../types';

const STEPS: TimelineStep[] = [
  {
    step: '01',
    title: 'Register interest',
    badge: 'Parents',
    description: "Fill in the online expression-of-interest form. Tell us your athlete's age, school, and any experience so far.",
  },
  {
    step: '02',
    title: 'Join the list',
    badge: 'Region',
    description: 'Your family joins the regional JFLIPS list. This lets us line up coach schedules with real, local demand.',
  },
  {
    step: '03',
    title: 'Confirm your spot',
    badge: 'Enroll',
    description: 'Once enough families in your area or school have registered, we confirm your class slot and schedule — no trial class, straight into full training.',
  },
  {
    step: '04',
    title: 'Become a JFLIPS athlete',
    badge: 'Team',
    description: 'Complete full registration, get your uniform sorted, and step onto the blue mat as a JFLIPS athlete.',
  },
];

export default function HowItWorks({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <>
      {/* 1. White Steps Section */}
      <section className="py-24 md:py-32 bg-white text-ink border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="max-w-2xl mb-20">
            <span className="tag">How it works</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mt-4 text-ink">
              From sign-up to the mat
            </h2>
            <p className="font-sans text-ink/60 mt-4 leading-relaxed">
              We only launch teams where there's real local demand. Here's the straightforward
              path from registering interest to competing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border-2 border-ink/10">
            {STEPS.map((step) => (
              <div key={step.step} className="bg-white p-7 flex flex-col gap-4 hover:bg-chalk transition-colors duration-150">
                <div className="flex items-center justify-between">
                  <span className="score-num text-4xl text-mat">{step.step}</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-ink/40 border border-ink/20 px-2 py-0.5">
                    {step.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-ink tracking-tight">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-ink/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Full-Width Blue Section: Is J-Flips at your school yet? */}
      <section className="py-24 md:py-32 bg-mat text-chalk relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-[100px] -bottom-20 -right-20 pointer-events-none" />
        <div className="absolute w-64 h-64 bg-flame/10 rounded-full blur-[80px] -top-20 -left-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="tag tag-flame mb-4 inline-block">
              School minimum
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6 text-white leading-tight">
              Is JFLIPS at your school yet?
            </h2>
            <p className="font-sans text-chalk/90 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              We need at least <span className="font-bold text-white">15 registered families</span> from
              the same school or neighbourhood before we can arrange school permissions and a venue.
              Share JFLIPS with other parents to help us get there.
            </p>
            <button
              onClick={onRegisterClick}
              className="bg-flame hover:bg-[#00a8ff] text-chalk font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors duration-150 cursor-pointer shadow-lg inline-block"
            >
              Register your interest
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
