import Image from "next/image";
import { siteConfig } from "@/config/site";

import { FooterContactForm } from "./FooterContactForm";
import { LeadMagnetTrigger } from "./LeadMagnetTrigger";
import { ScrollButton } from "./ScrollButton";

export function Footer() {
  const copyrightLine = siteConfig.legal.abn
    ? `© ${siteConfig.legal.copyrightYear} CRC Public Relations. All rights reserved. ABN: ${siteConfig.legal.abn}`
    : `© ${siteConfig.legal.copyrightYear} CRC Public Relations. All rights reserved.`;

  return (
    <footer className="bg-[#111827] py-16 text-white">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="inline-block">
              <Image
                src="/images/cca-logo-v5.png"
                alt={siteConfig.brand.name}
                width={495}
                height={140}
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-3 max-w-[15rem] text-sm leading-6 text-off-white/60">
              {siteConfig.footer.description}
            </p>
            <a
              href={siteConfig.phone.href}
              className="mt-4 inline-block text-[15px] font-medium text-brand-gold"
            >
              {siteConfig.phone.display}
            </a>
            <p className="mt-1 text-[13px] italic text-off-white/40">
              Urgent crisis and issue support by phone.
            </p>
          </div>

          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-white">
              {siteConfig.footer.ecosystemLabel}
            </p>
            <div className="mt-4 space-y-3">
              {siteConfig.footer.ecosystemLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-off-white/70 hover:text-white"
                  >
                    {link.label}
                  </a>
                  {"note" in link ? (
                    <span className="mt-0.5 block text-[11px] text-off-white/40">
                      {link.note}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.22em] text-white">
              {siteConfig.footer.quickActionsLabel}
            </p>
            <div className="mt-4 flex flex-col items-start gap-3">
              <ScrollButton
                label={siteConfig.footer.quickActions.urgent}
                targetId={siteConfig.scrollTargets.urgent}
                variant="text-gold"
              />
              <ScrollButton
                label={siteConfig.footer.quickActions.readiness}
                targetId={siteConfig.scrollTargets.readiness}
                variant="text-teal"
              />
              <LeadMagnetTrigger
                label={siteConfig.footer.quickActions.leadMagnet}
                className="text-left text-sm text-brand-teal underline underline-offset-4 hover:text-brand-teal/80"
              />
              <a
                href={siteConfig.links.masterclassUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-off-white/70 hover:text-white"
              >
                {siteConfig.footer.quickActions.masterclass}
              </a>
            </div>
          </div>

          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-white">
              {siteConfig.footer.contactLabel}
            </p>
            <FooterContactForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] md:flex-row md:items-center md:justify-between">
          <p className="text-off-white/40">{copyrightLine}</p>
          <div className="flex flex-wrap gap-4 text-off-white/60">
            <a href={siteConfig.links.disclaimerUrl} className="hover:text-white">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
