/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import webLogo from '../pictures/weblogo.png';

interface JFlipsLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function JFlipsLogo({ className = '', showText = true, size = 'md' }: JFlipsLogoProps) {
  const dimensions = {
    sm: { width: 'w-[52px]', height: 'h-[52px]' },
    md: { width: 'w-24', height: 'h-24' },
    lg: { width: 'w-56', height: 'h-56' },
    xl: { width: 'w-72 md:w-96 lg:w-[420px]', height: 'h-72 md:h-96 lg:h-[420px]' },
  };

  const dim = dimensions[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${dim.width} ${dim.height} flex items-center justify-center shrink-0`}>
        <img
          src={webLogo}
          alt="JFlips Logo"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-extrabold text-2xl tracking-tight text-ink">
            JFLIPS
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50 font-semibold mt-1">
            Cheer &amp; Tumbling
          </span>
        </div>
      )}
    </div>
  );
}
