import { siteConfig } from "@/config/site";

import { ScrollButton } from "./ScrollButton";

export function Hero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-navy-dark text-white md:min-h-[78vh]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-[10] mx-auto grid h-full w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-24">
        <div className="relative z-[10] max-w-[56rem]">
          <p className="section-eyebrow text-brand-teal">
            {siteConfig.hero.eyebrow}
          </p>
          <h1 className="heading-display mt-6 text-white">
            <span className="block">{siteConfig.hero.heading[0]}</span>
            <span className="block">{siteConfig.hero.heading[1]}</span>
          </h1>
          <div className="body-large mt-8 max-w-copy-md space-y-2 text-off-white">
            {siteConfig.hero.subheading.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row md:flex-nowrap">
            <ScrollButton
              label={siteConfig.hero.urgentCta}
              targetId={siteConfig.scrollTargets.urgent}
              icon="alert"
            />
            <ScrollButton
              label={siteConfig.hero.readinessCta}
              targetId={siteConfig.scrollTargets.readiness}
              icon="shield"
              variant="outline"
            />
            <ScrollButton
              label={siteConfig.hero.masterclassCta}
              targetId={siteConfig.scrollTargets.masterclass}
              variant="outline"
            />
          </div>
          <div className="mt-10 max-w-copy-md">
            <div className="mb-4 h-px w-20 bg-brand-teal/30" />
            <p className="text-sm leading-6 text-off-white/70">
              {siteConfig.hero.authorityCopy}
            </p>
          </div>
        </div>

        <div className="relative hidden h-[420px] md:block" aria-hidden="true">
          <svg
            viewBox="0 0 520 520"
            className="absolute inset-0 h-full w-full text-brand-teal/40"
            fill="none"
          >
            <circle cx="320" cy="260" r="190" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="320" cy="260" r="145" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="320" cy="260" r="100" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="320" cy="260" r="55" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="absolute inset-y-10 right-12 w-px bg-brand-gold/30" />
        </div>
      </div>
    </section>
  );
}
