import { Check, Shield } from "lucide-react";

import { siteConfig } from "@/config/site";

import { LeadMagnetTrigger } from "./LeadMagnetTrigger";

export function PreparedPath() {
  return (
    <div
      id={siteConfig.preparedPath.id}
      className="border-t-4 border-brand-teal bg-white px-0 pt-8"
    >
      <p className="font-heading text-xs font-black uppercase tracking-[0.28em] text-brand-teal">
        {siteConfig.preparedPath.label}
      </p>
      <h2 className="heading-card mt-5 text-navy-dark">
        <span className="block">{siteConfig.preparedPath.heading[0]}</span>
        <span className="block">{siteConfig.preparedPath.heading[1]}</span>
      </h2>
      <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-charcoal">
        {siteConfig.preparedPath.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {siteConfig.preparedPath.highlights.map((highlight) => (
          <div key={highlight} className="flex items-start gap-3 text-[15px] font-medium text-charcoal">
            <Check aria-hidden="true" className="mt-0.5 h-5 w-5 text-brand-teal" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-gold px-4 py-2 text-[13px] font-medium text-brand-gold">
        <Shield aria-hidden="true" className="h-4 w-4" />
        <span>{siteConfig.preparedPath.badge}</span>
      </div>

      <a
        href={siteConfig.links.masterclassUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="button-base mt-8 w-full bg-brand-teal text-white hover:-translate-y-0.5 hover:shadow-lg"
      >
        {siteConfig.preparedPath.primaryCta}
      </a>

      <p className="mt-4 text-center text-[15px] text-charcoal-mid">
        {siteConfig.preparedPath.secondaryPrefix}{" "}
        <LeadMagnetTrigger
          label={siteConfig.preparedPath.secondaryLink}
          className="font-medium text-brand-teal underline underline-offset-4 hover:text-brand-teal/80"
        />
      </p>

      <p className="mt-4 text-sm italic text-charcoal-mid">
        {siteConfig.preparedPath.footer}
      </p>
    </div>
  );
}
