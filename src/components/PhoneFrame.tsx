/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, DragEvent } from 'react';

interface PhoneFrameProps {
  videoSrc?: string;
  className?: string;
}

export default function PhoneFrame({
  videoSrc = '/phone.mp4',
  className = '',
}: PhoneFrameProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentSrc, setCurrentSrc] = useState(videoSrc);

  useEffect(() => {
    setCurrentSrc(videoSrc);
  }, [videoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure audio is muted so browser autoplay policies are fully satisfied
    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Silently catch autoplay restrictions
      });
    }

    // Play when in view, pause when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [currentSrc]);

  // Support local drag and drop or file replacement
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('video/')) {
        const localUrl = URL.createObjectURL(file);
        setCurrentSrc(localUrl);
      }
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* Outer Phone Chassis: Minimalist Titanium Frame */}
      <div className="relative w-full max-w-[280px] sm:max-w-[310px] md:max-w-[325px] rounded-[48px] p-[8px] bg-gradient-to-b from-[#2b2b2e] via-[#1a1a1c] to-[#0e0e10] shadow-[0_25px_60px_-15px_rgba(0,12,38,0.35),0_0_0_1px_rgba(255,255,255,0.08)]">
        
        {/* Subtle hardware button accents on the chassis rim */}
        {/* Volume Up */}
        <div className="absolute -left-[2px] top-[115px] w-[3px] h-[34px] bg-[#3a3a3e] rounded-l-sm" />
        {/* Volume Down */}
        <div className="absolute -left-[2px] top-[160px] w-[3px] h-[34px] bg-[#3a3a3e] rounded-l-sm" />
        {/* Power Button */}
        <div className="absolute -right-[2px] top-[135px] w-[3px] h-[52px] bg-[#3a3a3e] rounded-r-sm" />

        {/* Screen Bezel & Container */}
        <div className="relative w-full aspect-[9/19.5] rounded-[40px] overflow-hidden bg-black select-none">
          
          {/* Dynamic Island Pill */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-24 h-5 bg-black rounded-full flex items-center justify-end pr-2.5 pointer-events-none shadow-sm">
            {/* Front Camera Lens Specular Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#0d1624] border border-[#1f2d42]/70 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#1b3558]/80" />
            </div>
          </div>

          {/* Screen Glass Specular Highlight (Subtle Anti-Glare Sheen) */}
          <div 
            className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08]" 
            aria-hidden="true"
          />

          {/* Media Player: Auto-playing Video from /phone.mp4 */}
          <video
            ref={videoRef}
            key={currentSrc}
            src={currentSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />

          {/* Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 w-28 h-1 bg-white/50 rounded-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
