'use client';

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export function Connect() {
  const { email, email2, phone, location, socials } = portfolioData.connect;
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section className="flex flex-col items-center justify-center section w-full px-3 sm:px-6 md:px-8 mt-8 sm:mt-12">
      <h1 className="section-title">Let&apos;s Connect!</h1>

      <div className="flex flex-row w-full max-w-xl mt-6 sm:mt-8 justify-between items-start gap-3 sm:gap-6 px-1 sm:px-4">
        {/* Left Column: Email 1, Email 2, Mobile Phone, Location */}
        <div className="flex flex-col items-start gap-4 sm:gap-6 min-w-0 flex-1 pr-2">
          {/* Row 1: 1st Email with '1' badge */}
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCopy(email, 'email1')}
            title={`Click to email (${email})`}
            className="flex flex-row gap-2 sm:gap-3 items-center justify-start cursor-pointer transition-all duration-300 hover:scale-[1.04] group no-underline min-h-[40px] min-w-0 w-full"
          >
            <div className="relative w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] shrink-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                className="fill-current text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)] sm:w-[40px] sm:h-[40px]"
              >
                <path
                  fillRule="evenodd"
                  d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                />
              </svg>
              <p className="absolute bottom-0 right-0 w-[42%] h-[42%] bg-[var(--color-background)] text-[var(--color-text)] text-[10px] sm:text-xs font-bold text-center justify-center rounded-full flex items-center shadow-xs">
                1
              </p>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-xs sm:text-sm md:text-base text-[var(--color-text)] font-quicksand font-medium group-hover:text-[var(--color-accent)] transition-colors break-all sm:break-normal">
                {email}
              </span>
              {copiedItem === 'email1' && (
                <span className="text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold animate-in fade-in leading-none mt-0.5">
                  Opening mail & copied!
                </span>
              )}
            </div>
          </a>

          {/* Row 2: 2nd Email with '2' badge */}
          {email2 && (
            <a
              href={`mailto:${email2}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCopy(email2, 'email2')}
              title={`Click to email (${email2})`}
              className="flex flex-row gap-2 sm:gap-3 items-center justify-start cursor-pointer transition-all duration-300 hover:scale-[1.04] group no-underline min-h-[40px] min-w-0 w-full"
            >
              <div className="relative w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] shrink-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  className="fill-current text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)] sm:w-[40px] sm:h-[40px]"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                  />
                </svg>
                <p className="absolute bottom-0 right-0 w-[42%] h-[42%] bg-[var(--color-background)] text-[var(--color-text)] text-[10px] sm:text-xs font-bold text-center justify-center rounded-full flex items-center shadow-xs">
                  2
                </p>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xs sm:text-sm md:text-base text-[var(--color-text)] font-quicksand font-medium group-hover:text-[var(--color-accent)] transition-colors break-all sm:break-normal">
                  {email2}
                </span>
                {copiedItem === 'email2' && (
                  <span className="text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold animate-in fade-in leading-none mt-0.5">
                    Opening mail & copied!
                  </span>
                )}
              </div>
            </a>
          )}

          {/* Row 3: Mobile Number (aligned with Instagram) */}
          {phone && (
            <a
              href={`tel:${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCopy(phone, 'phone')}
              title={`Click to call (${phone})`}
              className="flex flex-row gap-2 sm:gap-3 items-center justify-start cursor-pointer transition-all duration-300 hover:scale-[1.04] group no-underline min-h-[40px] min-w-0 w-full"
            >
              <div className="relative w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] shrink-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)] sm:w-[28px] sm:h-[28px]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xs sm:text-sm md:text-base text-[var(--color-text)] font-quicksand font-medium group-hover:text-[var(--color-accent)] transition-colors">
                  {phone}
                </span>
                {copiedItem === 'phone' && (
                  <span className="text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold animate-in fade-in leading-none mt-0.5">
                    Opening dialer & copied!
                  </span>
                )}
              </div>
            </a>
          )}

          {/* Row 4: Location (aligned with Facebook) */}
          <div className="flex flex-row gap-2 sm:gap-3 items-center justify-start transition-all duration-300 hover:scale-[1.04] min-h-[40px] min-w-0 w-full">
            <div className="relative w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] shrink-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34px"
                height="34px"
                viewBox="104 411 24 32"
                className="fill-current text-[var(--color-text)] sm:w-[38px] sm:h-[38px]"
              >
                <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-[var(--color-text)] font-quicksand font-medium truncate">
              {location}
            </p>
          </div>
        </div>

        {/* Right Column: Social Icons vertically aligned with matching rows */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 shrink-0">
          {socials.map((social) => (
            <div
              key={social.name}
              className="min-h-[40px] flex items-center justify-center"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="relative w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.15]"
              >
                <SocialIcon name={social.icon} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] rounded-[6px]">
          <path
            fill="#0A66C2"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"
          />
        </svg>
      );
    case 'github':
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] fill-current text-[var(--color-text)]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] rounded-[7px]">
          <defs>
            <radialGradient id="ig-grad-connect" cx="20%" cy="110%" r="130%">
              <stop offset="0%" stopColor="#FFDD55" />
              <stop offset="25%" stopColor="#FF5D3B" />
              <stop offset="50%" stopColor="#FF0066" />
              <stop offset="75%" stopColor="#CC0099" />
              <stop offset="100%" stopColor="#6600CC" />
            </radialGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill="url(#ig-grad-connect)" />
          <rect
            x="3.2"
            y="3.2"
            width="17.6"
            height="17.6"
            rx="4.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="12" r="4.2" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="#FFFFFF" />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px]">
          <circle cx="12" cy="12" r="12" fill="#1877F2" />
          <path
            fill="#FFFFFF"
            d="M15.5 12h-2.5v9h-3.5v-9H7.5v-3h2V7.2c0-2.3 1.3-3.7 3.7-3.7 1.1 0 2.1.1 2.3.1v2.7h-1.5c-1.1 0-1.5.6-1.5 1.4V9h3l-.5 3z"
          />
        </svg>
      );
    default:
      return null;
  }
}
