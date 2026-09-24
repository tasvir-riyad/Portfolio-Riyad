'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Education() {
  const { education } = portfolioData;

  return (
    <section className="flex flex-col items-center justify-center w-full gap-5 sm:gap-6 section px-3 sm:px-6 md:px-8">
      <h1 className="section-title">Education</h1>

      <div className="flex flex-col w-full max-w-3xl gap-4 sm:gap-6 mt-3 sm:mt-4">
        {education.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-start sm:items-center gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-neutral-100/40 dark:bg-neutral-900/40 border border-neutral-300/40 dark:border-neutral-800/40 transition-all duration-300 hover:scale-[1.02] shadow-sm group"
          >
            {/* Institution Logo with clean background container */}
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-white dark:bg-neutral-800/90 border border-neutral-300/50 dark:border-neutral-700/60 p-1.5 sm:p-2 shrink-0 flex items-center justify-center shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  width={72}
                  height={72}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              ) : (
                <div className="p-1.5 sm:p-2 rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              )}
            </div>

            {/* Institution heading & Degree subheading */}
            <div className="flex flex-col items-start w-full min-w-0">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-xl md:text-2xl lg:text-3xl text-[var(--color-text)] font-bold hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1.5 sm:gap-2 group/link text-left break-words"
              >
                <span className="break-words">{item.institution}</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>

              <h3 className="text-xs sm:text-base md:text-lg lg:text-xl text-[var(--color-text)] font-quicksand font-semibold mt-1 opacity-90 text-left break-words">
                {item.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] sm:text-xs md:text-sm text-[var(--color-text)] font-quicksand opacity-75 mt-1 text-left">
                {item.details.map((detail, idx) => (
                  <React.Fragment key={idx}>
                    <span>{detail}</span>
                    {idx < item.details.length - 1 && <span className="opacity-50">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
