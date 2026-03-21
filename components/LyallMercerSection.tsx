import Image from "next/image";

import { siteConfig } from "@/config/site";

import { ScrollButton } from "./ScrollButton";

export function LyallMercerSection() {
  return (
    <section className="bg-navy-dark py-16 text-white md:py-24">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <div className="md:order-1">
            {siteConfig.assets.lyallMercerImage ? (
              <Image
                src={siteConfig.assets.lyallMercerImage}
                alt={siteConfig.lyall.imageAlt}
                width={800}
                height={1000}
                unoptimized
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-auto w-full rounded-lg shadow-panel"
              />
            ) : (
              <div className="flex min-h-[420px] items-center justify-center rounded-lg bg-[#24395F] shadow-panel">
                <span className="font-heading text-8xl font-black text-brand-teal">
                  {siteConfig.lyall.placeholderInitials}
                </span>
              </div>
            )}

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {siteConfig.lyall.statLabels.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-4xl font-black text-brand-teal">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[13px] uppercase tracking-[0.2em] text-off-white">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:order-2">
            <p className="section-eyebrow text-brand-teal">
              {siteConfig.lyall.eyebrow}
            </p>
            <h2 className="heading-section mt-5 text-white">
              <span className="block">{siteConfig.lyall.heading[0]}</span>
              <span className="block">{siteConfig.lyall.heading[1]}</span>
            </h2>
            <div className="mt-6 space-y-5 text-justify text-[17px] leading-[1.7] text-off-white">
              {siteConfig.lyall.paragraphs.slice(0, 4).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="my-6 border-l-[3px] border-brand-gold pl-4">
              <p className="text-base italic text-off-white/85">
                {siteConfig.lyall.quote}
              </p>
              <p className="mt-2 text-[13px] font-medium text-brand-gold">
                {siteConfig.lyall.attribution}
              </p>
            </div>

            <p className="text-justify text-[17px] leading-[1.7] text-off-white">
              {siteConfig.lyall.paragraphs[4]}
            </p>

            <div className="mt-8 flex flex-col items-start gap-3">
              <ScrollButton
                label={siteConfig.lyall.urgentLink}
                targetId={siteConfig.scrollTargets.urgent}
                variant="text-gold"
              />
              <ScrollButton
                label={siteConfig.lyall.preparedLink}
                targetId={siteConfig.scrollTargets.prepared}
                variant="text-teal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
