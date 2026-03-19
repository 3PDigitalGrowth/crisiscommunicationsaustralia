import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-navy-dark/95 backdrop-blur">
      <div className="section-shell flex h-14 items-center justify-between gap-4">
        <div className="font-heading text-[14px] font-black uppercase tracking-[0.22em] text-white">
          {siteConfig.brand.logoText}
        </div>
        <a
          href={siteConfig.phone.href}
          className="inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-2 font-heading text-[13px] font-black uppercase tracking-[0.08em] text-navy-dark hover:-translate-y-0.5 hover:shadow-lg"
          aria-label={siteConfig.phone.navLabel}
        >
          <span className="hidden sm:inline">{siteConfig.phone.navLabel}</span>
          <Phone aria-hidden="true" className="h-4 w-4 sm:hidden" />
        </a>
      </div>
    </header>
  );
}
