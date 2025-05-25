'use client'

import { cn } from "@heroui/react";
import Reveal from "./RevealAnimation";

export default function AboutCard() {
  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-12 md:gap-0 max-w-7xl mx-auto justify-center",
      "bg-slate-100 dark:bg-zinc-800 w-full py-20 px-3 lg:py-34 sm:pl-10 lg:pl-30 text-center"
    )}>
      <div className="w-full sm:pr-15">
        <Reveal>
          <h1 className="text-3xl font-semibold mb-3 text-black dark:text-white font-[Poppins]">
            Hi I&apos;m Haerul Fajar,
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-base text-default-700 leading-[1.6] font-[openSans] text-justify">
            I&apos;m a frontend developer with 5+ years of experience working on international-level projects inside a software house.
            I specialize in building scalable, clean, and maintainable UI — mostly using React/Next.js, Angular, PrimeNG, TailwindCSS, Heroui, and the occasional sprinkle of motion.
            <br />
            <br />
            I&apos;ve worked on e-commerce platforms, internal dashboards, and SaaS admin tools, mostly as a silent builder behind the screen.
            Now I&apos;m building a public presence — one commit at a time.
            <br />
            <br />
            <strong className="font-[Poppins]">Tech I love:</strong> React, Next.js, Tailwind, Zustand, Framer Motion, Supabase
            <br />
            <strong className="font-[Poppins]">Currently learning:</strong> AWS back-end fundamentals & fullstack system architecture.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
