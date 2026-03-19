import { siteConfig } from "@/config/site";

import { LeadMagnetTrigger } from "./LeadMagnetTrigger";
import { ScrollButton } from "./ScrollButton";

export function FinalCTA() {
  return (
    <section className="bg-navy-dark py-16 text-white md:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow text-brand-teal">
            {siteConfig.finalCta.eyebrow}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-black leading-none text-white md:text-[52px]">
            {siteConfig.finalCta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[32rem] text-lg leading-[1.7] text-off-white">
            {siteConfig.finalCta.body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <ScrollButton
              label={siteConfig.finalCta.urgentLabel}
              targetId={siteConfig.scrollTargets.urgent}
              icon="alert"
            />
            <ScrollButton
              label={siteConfig.finalCta.preparedLabel}
              targetId={siteConfig.scrollTargets.prepared}
              icon="shield"
              variant="outline"
            />
          </div>
          <p className="mt-8 text-[15px] text-off-white/70">
            {siteConfig.finalCta.leadPrefix}{" "}
            <LeadMagnetTrigger
              label={siteConfig.finalCta.leadLink}
              className="font-medium text-brand-teal underline underline-offset-4 hover:text-brand-teal/80"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
