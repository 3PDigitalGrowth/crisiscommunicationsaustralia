import { siteConfig } from "@/config/site";

export function AuthorityBar() {
  return (
    <section className="border-b border-border bg-white py-10">
      <div className="section-shell text-center">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-charcoal-mid">
          {siteConfig.authorityBar.label}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {siteConfig.mediaOutlets.map((outlet) => (
            <span
              key={outlet}
              className="font-heading text-[14px] font-black tracking-wide text-charcoal/35 grayscale"
            >
              {outlet}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-charcoal-mid">
          {`${siteConfig.stats.professionalsTrained} Professionals Trained  ·  ${siteConfig.stats.industriesServed} Industries Served`}
        </p>
      </div>
    </section>
  );
}
