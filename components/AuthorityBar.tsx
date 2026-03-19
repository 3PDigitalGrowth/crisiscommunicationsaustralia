import { siteConfig } from "@/config/site";

export function AuthorityBar() {
  return (
    <section className="border-b border-border bg-white py-10">
      <div className="section-shell text-center">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-charcoal-mid">
          {siteConfig.authorityBar.label}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:justify-between">
          {siteConfig.mediaOutlets.map((outlet) => (
            <span
              key={outlet}
              className="font-heading text-lg font-black uppercase tracking-[0.06em] text-charcoal-mid opacity-50 grayscale"
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
