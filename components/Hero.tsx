import Image from "next/image";

import { siteConfig } from "@/config/site";

import { ScrollButton } from "./ScrollButton";

export function Hero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-navy-dark text-white md:min-h-[78vh]">
      <div className="relative z-[10] mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 py-20 md:w-[58%] md:py-24">
        <div
          className="pointer-events-none absolute bottom-12 left-6 z-[3] h-px w-12 bg-brand-gold opacity-30"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-[-60px] left-[-60px] z-[3] h-64 w-64 rounded-full"
          aria-hidden="true"
          style={{ background: "rgba(7,175,187,0.05)" }}
        />

        <div className="relative z-[10] max-w-copy-lg">
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
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ScrollButton
              label={siteConfig.hero.urgentCta}
              targetId={siteConfig.scrollTargets.urgent}
              icon="alert"
            />
            <ScrollButton
              label={siteConfig.hero.preparedCta}
              targetId={siteConfig.scrollTargets.prepared}
              icon="shield"
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
      </div>

      <div className="absolute right-0 top-0 bottom-0 z-[1] hidden w-[42%] md:block">
        <Image
          src="/images/lyall-mercer.jpg"
          alt="Lyall Mercer — founder of CRC PR and Australasia's leading crisis communications advisor"
          fill
          priority
          sizes="42vw"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(to right, #1A2B4A 0%, rgba(26,43,74,0.85) 25%, rgba(26,43,74,0.2) 60%, rgba(26,43,74,0) 100%)",
          }}
        />
      </div>
    </section>
  );
}
