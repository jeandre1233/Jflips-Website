/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ShoppingBag, 
  MessageCircle, 
  Mail, 
  Sparkles, 
  Check, 
  Ruler, 
  CreditCard, 
  Truck,
  ArrowUpRight,
  ShieldCheck,
  PackageCheck
} from 'lucide-react';
import { CONTACT_INFO } from '../lib/constants';
import generatedShirtImg from '../assets/images/jflips_team_shirt_1788446999155.jpg';

export default function Merchandise() {
  // Use user-uploaded official shirt in public/Merch/official_shirt.jpeg with fallback to generated asset
  const [imgSrc, setImgSrc] = useState<string>('/Merch/official_shirt.jpeg');

  const rawNumber = CONTACT_INFO.phone.startsWith('0') 
    ? `27${CONTACT_INFO.phone.slice(1)}` 
    : CONTACT_INFO.phone;

  const whatsAppMessage = `Hi JFLIPS! I would like to enquire about ordering the official JFLIPS "Flip Fearless. Live Limitless." shirt. What sizes and pricing do you have available?`;
  const whatsAppLink = `https://wa.me/${rawNumber}?text=${encodeURIComponent(whatsAppMessage)}`;

  const handleInquireViaForm = () => {
    window.dispatchEvent(
      new CustomEvent('jflips:prefill-contact', {
        detail: {
          subject: 'Merchandise Order - Official Shirt',
          message: `Hi JFLIPS Team,\n\nI would like to enquire about ordering the Official JFLIPS "Flip Fearless. Live Limitless." Shirt.\n• Athlete / Supporter Name:\n• Size needed (Kids 4–14 or Adult XS–3XL):\n• Quantity:\n\nPlease send me availability, pricing, and payment info. Thank you!`,
        },
      })
    );

    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      const headerOffset = 80;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="merch" className="py-24 md:py-32 bg-[#faf7fc] text-ink scroll-mt-20 border-t-2 border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-flame mb-2">
              <ShoppingBag className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Official Team Merch</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-ink leading-tight">
              JFLIPS Official Merchandise
            </h2>
            <p className="font-sans text-base md:text-lg text-ink/70 mt-3 leading-relaxed">
              Official athlete training and supporter apparel. High-performance, breathable moisture-wicking gear built for tumbling, cheer practice, and game days.
            </p>
          </div>

          {/* Quick Badges */}
          <div className="flex flex-wrap gap-4 text-xs font-sans text-ink/80 bg-white p-4 border border-ink/10 rounded shadow-sm">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-flame shrink-0" />
              <span>Collect at Muldersdrift practice or local delivery</span>
            </div>
            <div className="hidden sm:block text-ink/20">|</div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-mat shrink-0" />
              <span>EFT & Direct Payment</span>
            </div>
          </div>
        </div>

        {/* Featured Product Card */}
        <div className="bg-white border-2 border-ink/15 rounded shadow-sm overflow-hidden mb-12">
          <div className="grid lg:grid-cols-12 gap-0">

            {/* Left: Product Image Showcase */}
            <div className="lg:col-span-7 bg-[#f3f0f7] border-b lg:border-b-0 lg:border-r border-ink/10 p-6 md:p-8 flex flex-col justify-center items-center">
              <div className="w-full relative rounded overflow-hidden border border-ink/10 bg-white shadow-sm">
                <img
                  src={imgSrc}
                  alt="Official JFLIPS Athletic Shirt - Front and Back"
                  className="w-full h-auto object-cover max-h-[460px] mx-auto transition-transform duration-300 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    // If custom upload isn't there yet, keep generated shirt image
                    if (imgSrc !== generatedShirtImg) {
                      setImgSrc(generatedShirtImg);
                    }
                  }}
                />
                <div className="absolute top-3 left-3 bg-ink/90 backdrop-blur-sm text-chalk px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest font-bold">
                  Official Team Jersey
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-ink px-3 py-1 rounded text-[10px] font-sans font-semibold border border-ink/10">
                  Front & Back Views
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between w-full text-xs text-ink/60 font-sans">
                <span>Front: JFlips Crest • Back: "Flip Fearless. Live Limitless."</span>
                <span className="text-mat font-semibold">Sublimated Athletic Print</span>
              </div>
            </div>

            {/* Right: Product Details & Order Actions */}
            <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-flame font-bold">
                    Official Apparel
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded bg-mat/10 text-mat">
                    Available for Pre-Order
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-ink tracking-tight mb-2">
                  Official JFLIPS Training & Supporter Shirt
                </h3>

                <div className="mb-6 p-3 bg-chalk rounded border border-ink/10">
                  <div className="text-xs font-sans text-ink/70">
                    <strong className="text-ink font-semibold">Pricing & Sizing:</strong> Inquire directly with our team to confirm child or adult sizing and reserve your piece from the next batch.
                  </div>
                </div>

                <p className="font-sans text-sm text-ink/75 leading-relaxed mb-6">
                  Engineered with breathable, lightweight athletic fabric. Features our signature royal blue splash pattern, high-contrast JFlips chest insignia, and the team motto across the shoulders: <strong className="text-ink font-semibold">"FLIP FEARLESS. LIVE LIMITLESS."</strong>
                </p>

                {/* Specs List */}
                <div className="space-y-3 pt-4 border-t border-ink/10 text-xs">
                  <div className="flex items-start gap-2.5 text-ink/80">
                    <Ruler className="w-4 h-4 text-flame shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ink font-semibold">Available Sizes:</strong> Kids (4–14 years) and Adult (XS through 3XL).
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-ink/80">
                    <Sparkles className="w-4 h-4 text-mat shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ink font-semibold">Design & Color:</strong> Crisp White base with royal blue splash sublimation and royal blue neck trim.
                    </div>
                  </div>

                  <div className="bg-[#f5f1fa] p-3.5 rounded text-[11px] text-ink/80 space-y-1.5 mt-2 border border-ink/5">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Breathable, moisture-wicking dry-fit performance fabric</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Fade-resistant sublimation printing that won't crack or peel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Tailored unisex athletic fit suitable for stunts, tumbling, or casual wear</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 border-t border-ink/10 mt-8 space-y-3">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded flex items-center justify-center gap-2 transition-colors duration-150 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire / Order via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleInquireViaForm}
                  className="w-full bg-ink hover:bg-mat text-chalk font-sans font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-flame" />
                  <span>Enquire via Website Form</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* How To Order & Upcoming Merch Banner */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 bg-white rounded border border-ink/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-flame mb-2">
                <PackageCheck className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">How Ordering Works</span>
              </div>
              <h4 className="font-display font-bold text-xl text-ink mb-3">
                Direct & Personalised Ordering
              </h4>
              <p className="font-sans text-xs md:text-sm text-ink/70 leading-relaxed mb-4">
                Because exact sizing is crucial for comfortable training, we confirm all orders directly with athletes and parents. Tell us your size and required quantity via WhatsApp or our contact form.
              </p>
              <div className="space-y-2 text-xs text-ink/80">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-flame/15 text-flame font-bold flex items-center justify-center text-[10px]">1</div>
                  <span>Send your size and quantity via WhatsApp or form</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-mat/15 text-mat font-bold flex items-center justify-center text-[10px]">2</div>
                  <span>Receive confirmation & easy EFT invoice</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-[10px]">3</div>
                  <span>Collect directly at your next Muldersdrift practice session</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-ink text-chalk rounded border-2 border-ink shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-flame mb-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Coming Soon</span>
              </div>
              <h4 className="font-display font-bold text-xl text-chalk mb-3">
                More Team Merch In The Works
              </h4>
              <p className="font-sans text-xs md:text-sm text-chalk/70 leading-relaxed mb-6">
                We are currently preparing more official JFLIPS gear including team hoodies, athlete accessories, and squad uniforms. Stay tuned as new items and pricing are added!
              </p>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(
                  new CustomEvent('jflips:prefill-contact', {
                    detail: {
                      subject: 'Merchandise Order',
                      message: 'Hi JFLIPS, I would like to enquire about upcoming merchandise and custom team gear.',
                    },
                  })
                );
                const contactElem = document.querySelector('#contact');
                if (contactElem) {
                  const headerOffset = 80;
                  const elementPosition = contactElem.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="w-full bg-chalk/10 hover:bg-chalk/20 text-chalk font-sans font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors border border-chalk/20"
            >
              <span>Have a Custom Request? Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
