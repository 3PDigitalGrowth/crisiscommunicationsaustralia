import { ClipboardCheck, Search, Shield, FileText } from "lucide-react";

import { siteConfig } from "@/config/site";

const serviceIcons = [FileText, Search, Shield, ClipboardCheck];

export function ReadinessPath() {
  return (
    <div
      id={siteConfig.readinessPath.id}
      className="flex h-full w-full flex-col border-t-4 border-brand-teal bg-white px-0 pt-8"
    >
      <p className="font-heading text-xs font-black tracking-[0.14em] text-brand-teal">
        {siteConfig.readinessPath.label}
      </p>
      <h2 className="heading-card mt-5 text-navy-dark">
        <span className="block">{siteConfig.readinessPath.heading[0]}</span>
        <span className="block">{siteConfig.readinessPath.heading[1]}</span>
      </h2>
      <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-charcoal">
        {siteConfig.readinessPath.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 space-y-5">
        {siteConfig.readinessPath.services.map((service, i) => {
          const Icon = serviceIcons[i];
          return (
            <div key={service.title} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-teal/10">
                <Icon aria-hidden="true" className="h-4 w-4 text-brand-teal" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-navy-dark">
                  {service.title}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-charcoal-mid">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-auto pt-8">
        <a
          href={siteConfig.links.crcPrCrisisUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-[4px] bg-brand-teal py-4 text-center font-heading text-sm font-black tracking-[0.02em] text-white transition-opacity hover:opacity-90"
        >
          {siteConfig.readinessPath.primaryCta}
        </a>
        <p className="mt-2 text-center text-xs leading-relaxed text-charcoal-mid">
          {siteConfig.readinessPath.primaryCtaSubtext}
        </p>

        <p className="mt-4 text-[11px] italic leading-relaxed text-charcoal-mid">
          {siteConfig.readinessPath.footer}
        </p>
      </div>
    </div>
  );
}
