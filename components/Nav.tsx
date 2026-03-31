import Image from "next/image";
import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/80 bg-white/95 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-4 md:h-24">
        <div className="flex items-center">
          <Image
            src="/images/cca-logo-v5.png"
            alt={siteConfig.brand.name}
            width={420}
            height={126}
            priority
            className="h-12 w-auto md:h-24"
          />
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
