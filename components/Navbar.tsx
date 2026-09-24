'use client';

import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { portfolioData } from '../data/portfolioData';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-3 sm:px-8 py-2.5 sm:py-3 bg-[var(--color-background)]/85 backdrop-blur-md text-[var(--color-secondary)] min-h-[58px] sm:min-h-[64px] w-full border-b border-neutral-300/30 dark:border-neutral-800/50 transition-colors duration-300">
      <a
        href="#"
        className="text-base sm:text-2xl md:text-3xl font-bold font-audiowide text-[var(--color-text)] tracking-tight hover:opacity-85 transition-opacity truncate max-w-[45vw] sm:max-w-none"
      >
        <span className="hidden sm:inline">{portfolioData.personal.name}</span>
        <span className="sm:hidden">Riyad</span>
      </a>

      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
        <ThemeToggle />
        <a
          href={portfolioData.personal.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button type="button" className="homebutton text-xs sm:text-sm md:text-base py-1.5 px-2.5 sm:py-2 sm:px-4">
            Resume
          </button>
        </a>
      </div>
    </nav>
  );
}
