'use client';

import React from 'react';
import { Sun, Monitor, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Theme selector"
      className="relative flex w-fit items-center rounded-2xl bg-neutral-200/80 dark:bg-neutral-800/80 p-1 shadow-inner backdrop-blur-sm border border-neutral-300/40 dark:border-neutral-700/50"
    >
      {/* Light option */}
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        className={`relative z-10 flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 text-xs md:text-sm font-medium transition-colors rounded-xl ${
          theme === 'light'
            ? 'text-white'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
        }`}
      >
        <Sun className="w-3.5 h-3.5 md:w-4 md:h-4" />
        <span className="hidden sm:inline">Light</span>
        {theme === 'light' && (
          <span className="absolute inset-0 z-[-1] rounded-xl bg-[var(--color-accent)] shadow-sm animate-in fade-in zoom-in-95 duration-200" />
        )}
      </button>

      {/* System option */}
      <button
        type="button"
        onClick={() => setTheme('system')}
        aria-pressed={theme === 'system'}
        className={`relative z-10 flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 text-xs md:text-sm font-medium transition-colors rounded-xl ${
          theme === 'system'
            ? 'text-white'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
        }`}
      >
        <Monitor className="w-3.5 h-3.5 md:w-4 md:h-4" />
        <span className="hidden sm:inline">System</span>
        {theme === 'system' && (
          <span className="absolute inset-0 z-[-1] rounded-xl bg-[var(--color-accent)] shadow-sm animate-in fade-in zoom-in-95 duration-200" />
        )}
      </button>

      {/* Dark option */}
      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        className={`relative z-10 flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 text-xs md:text-sm font-medium transition-colors rounded-xl ${
          theme === 'dark'
            ? 'text-white'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
        }`}
      >
        <Moon className="w-3.5 h-3.5 md:w-4 md:h-4" />
        <span className="hidden sm:inline">Dark</span>
        {theme === 'dark' && (
          <span className="absolute inset-0 z-[-1] rounded-xl bg-[var(--color-accent)] shadow-sm animate-in fade-in zoom-in-95 duration-200" />
        )}
      </button>
    </div>
  );
}
