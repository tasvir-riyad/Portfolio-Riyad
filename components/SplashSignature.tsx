'use client';

import React, { useEffect, useRef, useState } from 'react';
import { RIYAD_SIGNATURE_PATHS } from './signatureData';

interface SplashSignatureProps {
  onFadeStart?: () => void;
  onComplete?: () => void;
}

export function SplashSignature({ onFadeStart, onComplete }: SplashSignatureProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock scroll during splash screen
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Calculate total length of all paths and trigger drawing animation
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll<SVGPathElement>('path');
      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        // Trigger reflow before adding animate class
        path.getBoundingClientRect();
        path.classList.add('animate');
      });
    }

    // After drawing (2s) and fillIn (0.5s), start fading out the splash screen
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
      if (onFadeStart) onFadeStart();
    }, 2500);

    // After fade transition (0.6s), complete and unmount
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = originalOverflow;
      if (onComplete) onComplete();
    }, 3100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [onFadeStart, onComplete]);

  // Handle immediate skip on click or key press
  const handleSkip = () => {
    setIsFadingOut(true);
    if (onFadeStart) onFadeStart();
    setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 300);
  };

  if (isFinished) {
    return null;
  }

  return (
    <div
      onClick={handleSkip}
      title="Click anywhere to skip"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-background)] transition-opacity duration-600 select-none cursor-pointer ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transitionDuration: '600ms' }}
    >
      <div className="relative w-full max-w-[480px] px-8 sm:px-12 flex flex-col items-center">
        {/* Animated Signature SVG */}
        <svg
          ref={svgRef}
          viewBox={RIYAD_SIGNATURE_PATHS.viewBox}
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto filter drop-shadow-[0_2px_12px_rgba(99,21,122,0.25)]"
        >
          <g>
            {/* Capital R */}
            <path
              className="animated-signature"
              d={RIYAD_SIGNATURE_PATHS.rPath}
            />
            {/* Lowercase iyad */}
            <path
              className="animated-signature"
              d={RIYAD_SIGNATURE_PATHS.iyadPath}
            />
            {/* Sweeping Flourish Underline */}
            <path
              className="animated-signature-flourish"
              d={RIYAD_SIGNATURE_PATHS.flourishPath}
            />
          </g>
        </svg>

        {/* Subtle skip prompt */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleSkip();
          }}
          className="mt-8 text-xs font-quicksand text-[var(--color-text)] opacity-40 hover:opacity-90 transition-opacity tracking-widest uppercase"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
