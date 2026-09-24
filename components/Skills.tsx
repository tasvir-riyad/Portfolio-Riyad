'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SkillIcon } from './SkillIcons';

export function Skills() {
  const { marqueeSkills, softSkills } = portfolioData.skills;
  const [pulseKey, setPulseKey] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);
  const [clickedChip, setClickedChip] = useState<string | null>(null);

  const handleTitleClick = () => {
    setPulseKey((prev) => prev + 1);
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 900);
  };

  const handleChipClick = (skill: string) => {
    setClickedChip(skill);
    setTimeout(() => setClickedChip(null), 500);
  };

  // Duplicate items for continuous seamless infinite marquee animation
  const duplicatedSkills = [...marqueeSkills, ...marqueeSkills];

  return (
    <section className="flex flex-col items-center section w-full px-3 sm:px-6">
      <h1 className="section-title">Skills</h1>

      {/* Auto-scrolling infinite marquee */}
      <div className="relative w-full max-w-5xl h-[105px] sm:h-[120px] flex items-center overflow-hidden py-2 sm:py-4 my-2 sm:my-3 mask-fade">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="inline-flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center shrink-0 group cursor-default"
            >
              {skill.iconType ? (
                <div className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                  <SkillIcon type={skill.iconType} className="h-7 sm:h-8 md:h-9 w-auto mx-auto drop-shadow-sm" />
                </div>
              ) : (
                <div className="h-9 w-9 sm:h-10 sm:w-10 px-3 py-1.5 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <span className="text-xs font-bold font-quicksand text-[var(--color-accent)]">
                    ★
                  </span>
                </div>
              )}
              <p className="text-[11px] sm:text-xs md:text-sm text-[var(--color-text)] font-quicksand font-semibold mt-2 opacity-90 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills & Problem Solving chip row with interactive click effect */}
      <div className="flex flex-col items-center mt-4 sm:mt-6 w-full max-w-3xl px-2">
        <button
          type="button"
          onClick={handleTitleClick}
          title="Click to trigger effect!"
          className={`group inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-audiowide uppercase tracking-wider text-[var(--color-secondary)] opacity-75 hover:opacity-100 hover:text-[var(--color-accent)] transition-all duration-300 mb-3 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full hover:bg-[var(--color-accent)]/10 cursor-pointer select-none active:scale-95 text-center ${
            isPulsing ? 'animate-title-wiggle text-[var(--color-accent)] opacity-100' : ''
          }`}
        >
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[var(--color-accent)] shrink-0 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
          <span>Core Competencies & Soft Skills</span>
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[var(--color-accent)] shrink-0 transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-110" />
        </button>

        <div key={pulseKey} className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
          {/* Problem Solving featured chip */}
          <span
            onClick={() => handleChipClick('Problem Solving')}
            style={isPulsing ? { animationDelay: '0ms' } : undefined}
            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-quicksand font-bold px-3.5 sm:px-4 py-1.5 rounded-full bg-[var(--color-accent)] text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none ${
              isPulsing ? 'animate-skill-pulse' : ''
            } ${clickedChip === 'Problem Solving' ? 'scale-110 shadow-lg ring-2 ring-[var(--color-accent)]' : ''}`}
          >
            <span>🧩</span> Problem Solving
          </span>

          {/* Soft skills plain text pills */}
          {softSkills.map((skill, idx) => (
            <span
              key={skill}
              onClick={() => handleChipClick(skill)}
              style={isPulsing ? { animationDelay: `${(idx + 1) * 55}ms` } : undefined}
              className={`text-xs sm:text-sm font-quicksand font-medium px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-neutral-200/70 dark:bg-neutral-800/70 text-[var(--color-text)] border border-neutral-300/50 dark:border-neutral-700/50 shadow-sm hover:scale-105 hover:border-[var(--color-accent)] active:scale-95 transition-all duration-200 cursor-pointer select-none ${
                isPulsing ? 'animate-skill-pulse' : ''
              } ${clickedChip === skill ? 'scale-110 border-[var(--color-accent)] bg-[var(--color-accent)]/20 shadow-md' : ''}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
