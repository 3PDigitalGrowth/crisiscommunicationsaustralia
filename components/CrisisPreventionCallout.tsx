'use client';

import { siteConfig } from "@/config/site";

export default function CrisisPreventionCallout() {
  return (
    <section className="border-t border-border bg-white py-16">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-widest text-brand-teal">
            {siteConfig.crisisPreventionCallout.eyebrow}
          </p>
          <h2 className="mb-4 font-heading text-[28px] font-black leading-tight text-navy-dark md:text-[36px]">
            {siteConfig.crisisPreventionCallout.heading}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-[16px] leading-relaxed text-charcoal-mid">
            {siteConfig.crisisPreventionCallout.body}
          </p>
          <a
            href={siteConfig.links.crcPrServicesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-brand-gold underline transition-opacity hover:opacity-80"
          >
            {siteConfig.crisisPreventionCallout.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
