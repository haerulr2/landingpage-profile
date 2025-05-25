'use client'

import { cn } from "@heroui/react";
import Reveal from "./RevealAnimation";

export default function AboutCard() {
  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-12 md:gap-0 max-w-7xl mx-auto justify-center",
      "bg-slate-100 dark:bg-zinc-800 w-full py-20 px-3 lg:py-34 text-center"
    )}>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h1 className="text-3xl font-semibold mb-3 text-black dark:text-white font-[Poppins]">
            Hi I&apos;m Haerul Fajar,
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-[openSans] text-justify mb-4">
            I&apos;m a frontend developer with <strong className="font-[Poppins]">5+ years of experience</strong>{' '}
            working on international-level projects inside a software house.
            I specialize in building scalable, clean, and maintainable UI — mostly using
            {' '}<strong className="font-[Poppins]">React/Next.js</strong>, <strong className="font-[Poppins]">TailwindCSS</strong>,
            {' '}and motion libraries.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-[openSans] text-justify mb-4">
            I&apos;ve worked on e-commerce platforms, internal dashboards, and SaaS admin tools, mostly as a silent builder behind the screen.
            Now I&apos;m building a public presence — <em>one commit at a time.</em>
          </p>

          <div className="text-sm font-[openSans] text-justify mb-4">
            <p className="mb-1 text-gray-700 dark:text-gray-300">
              <span className="font-medium text-gray-800 dark:text-gray-200">🛠️ Tech I love:</span>{' '}
              React, Next.js, Tailwind, Zustand, Framer Motion, Supabase
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium text-gray-800 dark:text-gray-200">📚 Currently learning:</span>{' '}
              AWS Back-End & Fullstack System Architecture
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
