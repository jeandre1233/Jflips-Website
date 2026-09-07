/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MessageCircle, 
  ChevronLeft, 
  ChevronRight, 
  Camera 
} from 'lucide-react';
import { CONTACT_INFO } from '../lib/constants';

// When ready to launch the merchandise with live photos, toggle this to true
const LAUNCH_MERCH_IMAGES = false;

interface ProductImage {
  label: string;
  sublabel: string;
  src?: string;
  isPlaceholder: boolean;
}

interface ProductItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  status: 'preorder' | 'coming_soon';
  statusLabel: string;
  sizes: string;
  description: string;
  whatsappMessage: string;
  images: ProductImage[];
}

export default function Merchandise() {
  const [imageErrorMap, setImageErrorMap] = useState<{ [src: string]: boolean }>({});

  // Track active photo index per product (used when images are live)
  const [cardPhotoIndex, setCardPhotoIndex] = useState<{ [productId: string]: number }>({
    shirt: 0,
    hoodie: 0,
    socks: 0,
  });

  const rawNumber = CONTACT_INFO.phone.startsWith('0') 
    ? `27${CONTACT_INFO.phone.slice(1)}` 
    : CONTACT_INFO.phone;

  const PRODUCTS: ProductItem[] = [
    {
      id: 'shirt',
      name: 'Official JFLIPS Athletic Tee',
      category: 'Team apparel',
      badge: 'Official team',
      status: 'coming_soon',
      statusLabel: 'Coming soon',
      sizes: 'Kids 4–14, Adult XS–3XL',
      description: 'Lightweight performance shirt with front chest crest and "Flip Fearless, Live Limitless" back motto.',
      whatsappMessage: 'Hi Coach Jeandré, I am interested in the upcoming JFLIPS Athletic Tee. Please let me know when pre-orders open.',
      images: [
        {
          label: 'Front View',
          sublabel: 'Official Team Crest',
          src: '/Merch/Front.jpeg',
          isPlaceholder: false,
        },
        {
          label: 'Back View',
          sublabel: 'Flip Fearless Motto',
          src: '/Merch/Back.jpeg',
          isPlaceholder: false,
        },
        {
          label: 'Athlete Photo',
          sublabel: 'In-action photo',
          isPlaceholder: true,
        },
      ],
    },
    {
      id: 'hoodie',
      name: 'JFLIPS Team Pullover Hoodie',
      category: 'Warm-up gear',
      badge: 'Upcoming',
      status: 'coming_soon',
      statusLabel: 'Coming soon',
      sizes: 'Kids and adult unisex sizes',
      description: 'Heavyweight fleece pullover with double-lined hood and JFLIPS team graphics.',
      whatsappMessage: 'Hi Coach Jeandré, I am interested in the upcoming JFLIPS Team Pullover Hoodie. Please let me know when pre-orders open.',
      images: [
        {
          label: 'Product Design',
          sublabel: 'Design preview',
          isPlaceholder: true,
        },
        {
          label: 'Athlete Standing',
          sublabel: 'Fit preview',
          isPlaceholder: true,
        },
        {
          label: 'Athlete Stunting',
          sublabel: 'Training photo',
          isPlaceholder: true,
        },
      ],
    },
    {
      id: 'socks',
      name: 'Stunt & Tumbling Grip Socks',
      category: 'Accessories',
      badge: 'Training gear',
      status: 'coming_soon',
      statusLabel: 'Coming soon',
      sizes: 'Junior and adult sizes',
      description: 'High-traction silicone grip socks designed for air tracks, tumbling mats, and flyer stability.',
      whatsappMessage: 'Hi Coach Jeandré, I am interested in the upcoming JFLIPS Stunt & Tumbling Grip Socks. Please let me know when stock arrives.',
      images: [
        {
          label: 'Grip Socks',
          sublabel: 'Official JFLIPS Grip Socks',
          src: '/Merch/socks.png',
          isPlaceholder: false,
        },
        {
          label: 'Athlete Standing',
          sublabel: 'Grip design',
          isPlaceholder: true,
        },
        {
          label: 'Mat Traction',
          sublabel: 'Training photo',
          isPlaceholder: true,
        },
      ],
    },
  ];

  const handlePrev = (e: React.MouseEvent, productId: string, totalImages: number) => {
    e.stopPropagation();
    e.preventDefault();
    setCardPhotoIndex((prev) => {
      const current = prev[productId] || 0;
      return {
        ...prev,
        [productId]: current === 0 ? totalImages - 1 : current - 1,
      };
    });
  };

  const handleNext = (e: React.MouseEvent, productId: string, totalImages: number) => {
    e.stopPropagation();
    e.preventDefault();
    setCardPhotoIndex((prev) => {
      const current = prev[productId] || 0;
      return {
        ...prev,
        [productId]: (current + 1) % totalImages,
      };
    });
  };

  const handleSetIndex = (e: React.MouseEvent, productId: string, index: number) => {
    e.stopPropagation();
    e.preventDefault();
    setCardPhotoIndex((prev) => ({
      ...prev,
      [productId]: index,
    }));
  };

  return (
    <section id="merch" className="py-20 md:py-28 bg-white text-ink scroll-mt-20 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="pb-6 mb-12 border-b border-zinc-200">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-ink">
            Official team apparel &amp; gear
          </h2>
          <p className="font-sans text-sm text-zinc-600 mt-2">
            Athlete training apparel and team merchandise. Coming soon — chat directly with Coach Jeandré on WhatsApp for launch inquiries.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRODUCTS.map((product) => {
            const activeIdx = cardPhotoIndex[product.id] || 0;
            const currentImg = product.images[activeIdx] || product.images[0];
            const whatsAppUrl = `https://wa.me/${rawNumber}?text=${encodeURIComponent(product.whatsappMessage)}`;

            return (
              <div
                key={product.id}
                className="group bg-white border border-zinc-200 rounded-lg overflow-hidden flex flex-col justify-between shadow-xs"
              >
                {/* Image Stage Container with Fixed Aspect Ratio */}
                <div 
                  className="relative aspect-[3/4] bg-zinc-100 overflow-hidden cursor-pointer select-none"
                  onClick={() => window.open(whatsAppUrl, '_blank', 'noopener,noreferrer')}
                >
                  {/* When merch is live, show images with navigation. Otherwise, show Coming Soon placeholder */}
                  {LAUNCH_MERCH_IMAGES ? (
                    <>
                      {!currentImg.isPlaceholder && currentImg.src && !imageErrorMap[currentImg.src] ? (
                        <img
                          src={currentImg.src}
                          alt={`${product.name} - ${currentImg.label}`}
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                          onError={() => {
                            setImageErrorMap((prev) => ({
                              ...prev,
                              [currentImg.src!]: true,
                            }));
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-50">
                          <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-3 text-zinc-400">
                            <Camera className="w-5 h-5 text-mat" />
                          </div>
                          <span className="text-xs font-semibold px-2.5 py-0.5 bg-zinc-200 text-zinc-700 rounded mb-1.5">
                            Photo preview
                          </span>
                          <h4 className="font-display font-bold text-sm text-ink">
                            {currentImg.label}
                          </h4>
                          <p className="font-sans text-xs text-zinc-500 max-w-[200px] mt-1">
                            Upcoming photo ({activeIdx + 1} of {product.images.length})
                          </p>
                        </div>
                      )}

                      {/* Top-Left Category Badge */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
                        <span className="text-xs font-medium px-2 py-0.5 bg-zinc-900/90 text-white rounded">
                          {product.statusLabel}
                        </span>
                      </div>

                      {/* Image Navigation Arrows */}
                      <button
                        type="button"
                        onClick={(e) => handlePrev(e, product.id, product.images.length)}
                        aria-label="Previous photo"
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-900/80 hover:bg-zinc-900 text-white flex items-center justify-center z-20 cursor-pointer shadow-xs"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleNext(e, product.id, product.images.length)}
                        aria-label="Next photo"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-900/80 hover:bg-zinc-900 text-white flex items-center justify-center z-20 cursor-pointer shadow-xs"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Pagination Dots Indicator */}
                      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5 z-20">
                        {product.images.map((img, dotIdx) => (
                          <button
                            key={dotIdx}
                            type="button"
                            onClick={(e) => handleSetIndex(e, product.id, dotIdx)}
                            aria-label={`View photo ${dotIdx + 1} - ${img.label}`}
                            className={`h-1.5 rounded-full transition-all duration-150 cursor-pointer ${
                              dotIdx === activeIdx
                                ? 'w-5 bg-white shadow-xs ring-1 ring-black/20'
                                : 'w-1.5 bg-white/60 hover:bg-white/90'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Photo Title Overlay on bottom right */}
                      <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                        <span className="text-[10px] bg-black/70 text-white px-2 py-0.5 rounded font-medium">
                          {activeIdx + 1} of {product.images.length} — {currentImg.label}
                        </span>
                      </div>
                    </>
                  ) : (
                    /* Clean Coming Soon Placeholder for Pre-launch */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-50 border-b border-zinc-200">
                      <div className="w-14 h-14 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-3.5 shadow-xs">
                        <ShoppingBag className="w-6 h-6 text-mat" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-zinc-200 text-zinc-800 rounded-full mb-2">
                        Coming soon
                      </span>
                      <h4 className="font-display font-bold text-base text-ink tracking-tight">
                        {product.name}
                      </h4>
                      <p className="font-sans text-xs text-zinc-500 max-w-[220px] mt-1.5 leading-relaxed">
                        Official product photos and pre-orders will be available at launch.
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Information & Action Area */}
                <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs text-zinc-500 font-medium">
                        {product.category}
                      </span>
                      <span className="text-xs font-semibold text-mat">
                        {product.sizes}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-ink tracking-tight">
                      {product.name}
                    </h3>

                    <p className="font-sans text-xs text-zinc-600 mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* CTA Action Button: Send to WhatsApp */}
                  <div className="mt-5 pt-4 border-t border-zinc-100">
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-ink hover:bg-mat text-white font-sans font-semibold text-xs py-2.5 px-4 rounded transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="font-sans text-xs text-zinc-500">
            For custom team batch orders or athlete sizes, chat with Coach Jeandré directly on WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
}
