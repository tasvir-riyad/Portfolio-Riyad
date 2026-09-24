'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="flex flex-col items-center section w-full px-3 sm:px-6 md:px-8">
      <h1 className="section-title">Projects</h1>

      <div className="flex flex-col md:flex-row w-full max-w-5xl justify-center items-stretch gap-6 sm:gap-8 mt-6 sm:mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col w-full md:w-[48%] p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-[var(--color-secondary)]/50 bg-neutral-100/40 dark:bg-neutral-900/40 hover:scale-[1.02] transition-all duration-300 shadow-lg justify-between"
          >
            {/* Project Thumbnail */}
            <div>
              <div className="relative w-full aspect-[16/10] max-h-[240px] rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-300/40 dark:border-neutral-800 shadow-inner bg-neutral-200 dark:bg-neutral-800">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Title & Date */}
              <div className="mt-4 sm:mt-5">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-[var(--color-text)] font-bold font-quicksand leading-snug break-words">
                  {project.title}
                </h2>
                {project.date && (
                  <p className="text-xs sm:text-sm text-[var(--color-accent)] font-quicksand font-bold mt-1 tracking-wide">
                    {project.date}
                  </p>
                )}
                <p className="text-xs sm:text-sm md:text-base text-[var(--color-text)] opacity-85 mt-2.5 sm:mt-3 font-quicksand leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* View Repository Button & Tech Tags */}
            <div className="mt-5 sm:mt-6 pt-4 border-t border-neutral-300/30 dark:border-neutral-800/50">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-3 sm:mb-4"
              >
                <button
                  type="button"
                  className="homebutton text-xs sm:text-sm md:text-base py-1.5 px-4 sm:py-2 sm:px-5 shadow-sm"
                >
                  View Repository
                </button>
              </a>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] sm:text-xs md:text-sm text-white font-quicksand bg-[var(--color-accent)]/85 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-medium shadow-sm transition-transform hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
