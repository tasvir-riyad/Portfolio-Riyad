'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';

export function Hero() {
  const { name, intro, profilePhoto, resumePdf } = portfolioData.personal;

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[75vh] sm:min-h-[85vh] px-4 sm:px-8 md:px-12 py-8 sm:py-12">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-6 sm:gap-8 md:gap-14">
        {/* Profile Image with subtle ring and hover zoom matching reference */}
        <div className="relative shrink-0">
          <div className="relative w-48 h-48 sm:w-68 sm:h-68 md:w-80 md:h-80 lg:w-90 lg:h-90 max-w-[72vw] max-h-[72vw] rounded-full border-4 sm:border-8 border-[var(--color-secondary)]/70 shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.04] bg-neutral-200 dark:bg-neutral-800">
            <Image
              src={profilePhoto}
              alt={`${name} Profile Photo`}
              fill
              priority
              sizes="(max-width: 640px) 200px, (max-width: 768px) 270px, 360px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Text Details */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left px-2 sm:px-0">
          <h1 className="text-5xl sm:text-7xl md:text-8xl text-[var(--color-text)] font-bold font-italianno select-none leading-none tracking-normal py-1">
            {name}
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--color-text)] font-quicksand mt-3 md:pr-8 select-none leading-relaxed max-w-2xl font-medium opacity-90">
            {intro}
          </p>

          <div className="flex flex-row gap-4 mt-5 sm:mt-6">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                type="button"
                className="homebutton select-none text-sm sm:text-base md:text-lg px-5 py-2 sm:px-6 sm:py-2.5 shadow-md"
              >
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
