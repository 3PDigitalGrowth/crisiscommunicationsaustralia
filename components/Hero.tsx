'use client';

import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";

import HeroArcs from "./HeroArcs";
import { ScrollButton } from "./ScrollButton";

export function Hero() {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveLine((current) => (current + 1) % siteConfig.hero.subheading.length);
    }, 1500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100svh-13rem)] flex-col items-center justify-center overflow-hidden bg-navy-dark px-6 pb-16 pt-28 text-center text-white md:min-h-[calc(100svh-10.5rem)] md:py-20 md:text-left">
      <HeroArcs />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center md:items-start">
        <p className="section-eyebrow mb-6 text-brand-teal md:mb-8">
          {siteConfig.hero.eyebrow}
        </p>

        <h1 className="heading-display mb-6 text-white md:mb-8">
          {siteConfig.hero.heading[0]}
          <br />
          <span>{siteConfig.hero.heading[1]}</span>
        </h1>

        <div className="body-large mb-8 flex max-w-copy-lg flex-col items-center gap-1.5 md:mb-10 md:items-start md:gap-2">
          {siteConfig.hero.subheading.map((line, index) => (
            <p
              key={line}
              className={
                index === activeLine
                  ? "text-white transition-colors duration-500"
                  : "text-off-white/45 transition-colors duration-500"
              }
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mb-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row md:mb-10 md:items-start md:justify-start md:gap-4">
          <ScrollButton
            label={siteConfig.hero.urgentCta}
            targetId={siteConfig.scrollTargets.urgent}
            icon="alert"
            className="w-full sm:w-auto"
          />
          <ScrollButton
            label={siteConfig.hero.readinessCta}
            targetId={siteConfig.scrollTargets.readiness}
            icon="shield"
            variant="outline"
            className="w-full sm:w-auto"
          />
          <ScrollButton
            label={siteConfig.hero.masterclassCta}
            targetId={siteConfig.scrollTargets.masterclass}
            icon="book"
            variant="outline"
            className="w-full sm:w-auto"
          />
        </div>

        <div className="max-w-copy-md">
          <div className="mx-auto mb-4 h-px w-20 bg-brand-teal/30 md:mx-0" />
          <p className="text-sm leading-6 text-off-white/70">
            {siteConfig.hero.authorityCopy}
          </p>
        </div>
      </div>
    </section>
  );
}
