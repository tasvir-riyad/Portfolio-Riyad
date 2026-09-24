'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const { copyright } = portfolioData.footer;

  return (
    <div className="w-full relative mt-20 select-none">
      <div className="relative w-full h-44 sm:h-52 md:h-64 overflow-hidden">
        {/* 3-layer decorative wave matching reference */}
        <svg
          className="absolute inset-0 w-full h-full fill-[var(--color-wave)] transition-colors duration-500"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fillOpacity="0.35"
            d="M0,200 C480,250 960,50 1440,200 L1440,320 L0,320 Z"
          />
          <path
            fillOpacity="0.6"
            d="M0,220 C480,100 960,270 1440,220 L1440,320 L0,320 Z"
          />
          <path
            fillOpacity="1"
            d="M0,240 C360,350 1080,140 1440,260 L1440,320 L0,320 Z"
          />
        </svg>

        {/* Centered copyright notice */}
        <footer className="absolute bottom-4 sm:bottom-6 z-20 w-full text-center text-white/95 text-xs sm:text-sm font-quicksand font-medium tracking-wide px-4 drop-shadow">
          {copyright}
        </footer>
      </div>
    </div>
  );
}
