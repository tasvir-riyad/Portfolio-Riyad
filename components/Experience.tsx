'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

/**
 * Experience Section:
 * This component is driven by the `experiences` array in `../data/portfolioData.ts`.
 * Adding entries to `portfolioData.experiences` will make them appear here
 * automatically, formatted in the exact same timeline style as the reference,
 * with no other changes needed.
 * When the array is empty (`experiences: []`), this component returns null,
 * ensuring no blank section or title is displayed.
 */
export function Experience() {
  const { experiences } = portfolioData;

  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-center w-full gap-6 section px-4 sm:px-8">
      <h1 className="section-title">Experience</h1>
      <div className="flex flex-col w-full max-w-4xl gap-8 mt-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row w-full justify-between items-start gap-3 md:gap-8 p-6 rounded-2xl bg-neutral-100/50 dark:bg-neutral-900/40 border border-neutral-300/30 dark:border-neutral-800/40 transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Timeline date range */}
            <div className="w-full md:w-[28%] shrink-0">
              <h2 className="text-sm md:text-base text-[var(--color-text)] font-quicksand font-bold opacity-75">
                {exp.period}
              </h2>
            </div>

            {/* Role, organization, description */}
            <div className="w-full md:w-[72%]">
              <h2 className="text-xl md:text-2xl text-[var(--color-text)] font-bold">
                {exp.role}
              </h2>
              <h3 className="text-base md:text-lg text-[var(--color-text)] font-quicksand opacity-90 font-medium">
                {exp.organization}
              </h3>
              <p className="mt-2 text-sm md:text-base text-[var(--color-text)] font-quicksand opacity-80 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
