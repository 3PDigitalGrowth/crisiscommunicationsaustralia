import { siteConfig } from "@/config/site";

import HeroRings from "./HeroRings";
import { ScrollButton } from "./ScrollButton";

export function Hero() {
  return (
    <section className="relative flex min-h-[640px] flex-col items-center justify-center overflow-hidden bg-navy-dark px-6 py-24 text-center text-white">
      <HeroRings />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
        <div className="mb-5 inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold/25 bg-brand-gold/10 px-4 py-2">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-brand-gold" />
          <a
            href={siteConfig.phone.href}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold transition-colors hover:text-[#d8bc74]"
          >
            {siteConfig.phone.navLabel}
          </a>
        </div>

        <p className="section-eyebrow mb-8 text-brand-teal">
          {siteConfig.hero.eyebrow}
        </p>

        <h1 className="heading-display mb-8 text-white">
          {siteConfig.hero.heading[0]}
          <br />
          <span>{siteConfig.hero.heading[1]}</span>
        </h1>

        <div className="body-large mb-10 flex max-w-copy-lg flex-col items-center gap-2">
          {siteConfig.hero.subheading.map((line, index) => (
            <p
              key={line}
              className={
                index === 0
                  ? "text-off-white"
                  : "text-off-white/70"
              }
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mb-12 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
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
          <div className="mx-auto mb-4 h-px w-20 bg-brand-teal/30" />
          <p className="text-sm leading-6 text-off-white/70">
            {siteConfig.hero.authorityCopy}
          </p>
        </div>
      </div>
    </section>
  );
}
