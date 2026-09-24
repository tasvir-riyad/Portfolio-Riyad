'use client';

import React, { useState } from 'react';
import { SplashSignature } from '../components/SplashSignature';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Education } from '../components/Education';
import { Connect } from '../components/Connect';
import { Footer } from '../components/Footer';

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <>
      {/* Signature Splash Screen Animation matching Ryan Chen's portfolio */}
      <SplashSignature
        onFadeStart={() => setIsRevealed(true)}
        onComplete={() => setIsRevealed(true)}
      />

      {/* Main Portfolio Content */}
      <div
        className={`min-h-screen flex flex-col justify-between items-center w-full overflow-x-hidden transition-opacity duration-700 ${
          isRevealed ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Top Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex flex-col items-center w-full max-w-7xl mx-auto flex-grow">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Experience Section: Positioned between Hero and Skills (auto-renders when items added) */}
          <Experience />

          {/* 3. Skills Section: Auto-scrolling marquee and soft skill chips */}
          <Skills />

          {/* 4. Projects Section */}
          <Projects />

          {/* 5. Education Section */}
          <Education />

          {/* 6. Let's Connect Section */}
          <Connect />
        </main>

        {/* Bottom Wave & Copyright Footer */}
        <Footer />
      </div>
    </>
  );
}
