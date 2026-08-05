/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, CheckCircle2, FileText, MapPin, Calendar, DollarSign } from 'lucide-react';
import { CHEER_REGISTRATION_URL, TUMBLING_REGISTRATION_URL } from '../lib/constants';
import cheerQrCode from '../pictures/C_REG.png';
import tumblingQrCode from '../pictures/T_REG.png';

export default function RegisterInterestForm() {
  return (
    <section id="register" className="py-24 md:py-32 bg-ink text-chalk relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 halftone-light opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="tag tag-flame self-start">Register</span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-chalk leading-none">
              Secure your athlete's slot
            </h2>
            <p className="font-sans text-chalk/60 text-base leading-relaxed">
              Register directly through the portals on the right for either our competitive
              cheerleading team or our precision tumbling classes.
            </p>

            <div className="p-6 bg-chalk/5 border border-chalk/10 mt-4 flex items-start gap-4">
              <div className="p-3 bg-mat/20 text-mat shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-chalk mb-1">What happens next</h4>
                <p className="text-xs text-chalk/60 leading-relaxed">
                  Once you register, you'll get our full schedule, kit requirements, and coaching
                  assignment by email.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-chalk/10 border-2 border-chalk/10">
            <div className="bg-ink p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-flame font-bold">Team</span>
                <h3 className="font-display font-extrabold text-2xl text-chalk mt-2 mb-3 tracking-tight">Cheerleading</h3>
                <p className="text-xs text-chalk/60 leading-relaxed mb-6">
                  Join South Africa's most exciting cheerleading and tumbling team. Open to ages 4–18+,
                  Level 1–4 stunting taught safely.
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-4">
                {/* QR Code Container */}
                <div className="flex items-center gap-4 p-3 bg-white/5 border border-white/10 rounded">
                  <div className="bg-white p-1 rounded shrink-0">
                    <img 
                      src={cheerQrCode} 
                      alt="Register for the Cheerleading Team QR Code" 
                      className="w-16 h-16 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-chalk">Scan to register</h4>
                    <p className="text-[10px] text-chalk/45 font-mono uppercase mt-0.5 tracking-wider">On mobile or tablet</p>
                  </div>
                </div>

                <a
                  href={CHEER_REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-mat hover:bg-mat-deep text-chalk font-sans font-bold text-[11px] uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 transition-colors duration-150"
                >
                  Register for the Cheerleading Team
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="bg-ink p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-flame font-bold">Class</span>
                <h3 className="font-display font-extrabold text-2xl text-chalk mt-2 mb-2 tracking-tight">Tumbling</h3>
                
                {/* Parent Info Sheet Quick Card */}
                <div className="my-4 p-3.5 bg-chalk/5 border border-chalk/10 rounded text-[11px] space-y-1.5">
                  <div className="flex items-center gap-2 text-chalk/80">
                    <MapPin className="w-3.5 h-3.5 text-flame shrink-0" />
                    <span>Laerskool Muldersdrift</span>
                  </div>
                  <div className="flex items-center gap-2 text-chalk/80">
                    <Calendar className="w-3.5 h-3.5 text-flame shrink-0" />
                    <span>Wed & Thu (2:00–3:00 PM) | Fri (4:00–5:00 PM)</span>
                  </div>
                  <div className="flex items-center gap-2 text-chalk/80">
                    <DollarSign className="w-3.5 h-3.5 text-flame shrink-0" />
                    <span>R200/session (or R350/session 1-on-1 private)</span>
                  </div>
                  <p className="text-[10px] text-chalk/60 italic pt-1 border-t border-chalk/10 leading-tight">
                    *Looking to add even more days as numbers grow!
                  </p>
                </div>

                <p className="text-xs text-chalk/60 leading-relaxed mb-4">
                  Master back handsprings, flips, and layouts in structured classes. Great for dancers,
                  cheerleaders, gymnasts, and total beginners.
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                {/* QR Code Container */}
                <div className="flex items-center gap-4 p-3 bg-white/5 border border-white/10 rounded">
                  <div className="bg-white p-1 rounded shrink-0">
                    <img 
                      src={tumblingQrCode} 
                      alt="Register for the Tumbling Team QR Code" 
                      className="w-16 h-16 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-chalk">Scan to register</h4>
                    <p className="text-[10px] text-chalk/45 font-mono uppercase mt-0.5 tracking-wider">On mobile or tablet</p>
                  </div>
                </div>

                <a
                  href={TUMBLING_REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-flame hover:bg-flame-deep text-chalk font-sans font-bold text-[11px] uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 transition-colors duration-150"
                >
                  Register for Tumbling
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="/tumbling_info.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center border border-chalk/20 hover:border-chalk/50 text-chalk/80 hover:text-chalk font-sans font-semibold text-[10px] uppercase tracking-wider py-2 transition-colors flex items-center justify-center gap-1.5 rounded"
                >
                  <FileText className="w-3.5 h-3.5 text-flame" />
                  View Tumbling Info Sheet PDF
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
