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
          <div
            key={highlight}
            className="flex items-start gap-3 text-[15px] font-medium text-charcoal"
          >
            <Check aria-hidden="true" className="mt-0.5 h-5 w-5 text-brand-teal" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      <div className="mb-4 mt-6 rounded-[6px] border border-brand-teal/20 bg-off-white p-4">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-brand-teal">
          {siteConfig.preparedPath.melissaLabel}
        </p>
        <p className="mb-1 text-[13px] font-heading font-black leading-tight text-navy-dark">
          {siteConfig.preparedPath.melissaHeading}
        </p>
        <p className="text-[12px] leading-relaxed text-charcoal">
          {siteConfig.preparedPath.melissaBody}
        </p>
      </div>

      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-gold px-4 py-2 text-[13px] font-medium text-brand-gold">
        <Shield aria-hidden="true" className="h-4 w-4" />
        <span>{siteConfig.preparedPath.badge}</span>
      </div>

      <a
        href={siteConfig.links.masterclassEnrolUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block w-full rounded-[4px] bg-brand-teal py-4 text-center font-heading text-sm font-black uppercase tracking-widest text-white transition-opacity hover:opacity-90"
      >
        {siteConfig.preparedPath.primaryCta}
      </a>
      <p className="mt-2 text-center text-xs leading-relaxed text-charcoal-mid">
        {siteConfig.preparedPath.primaryCtaSubtext}
      </p>

      <p className="mt-4 text-center text-[15px] text-charcoal-mid">
        {siteConfig.preparedPath.secondaryPrefix}{" "}
        <LeadMagnetTrigger
          label={siteConfig.preparedPath.secondaryLink}
          className="font-medium text-brand-teal underline underline-offset-4 hover:text-brand-teal/80"
        />
      </p>

      <p className="mt-4 text-[11px] italic leading-relaxed text-charcoal-mid">
        {siteConfig.preparedPath.footer}
      </p>
    </div>
  );
}
