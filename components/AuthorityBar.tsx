import { siteConfig } from "@/config/site";

export function AuthorityBar() {
  return (
    <section className="border-b border-border bg-white py-10">
      <div className="section-shell text-center">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-charcoal-mid">
          {siteConfig.authorityBar.label}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:justify-between">
          {siteConfig.mediaLinks.map((outlet) => (
            <a
              key={outlet.name}
              href={outlet.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-[15px] font-black uppercase tracking-wide text-charcoal/30 no-underline transition-colors hover:text-charcoal/50"
              aria-label={`Lyall Mercer featured in ${outlet.name}`}
            >
              {outlet.name}
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-charcoal-mid">
          {`${siteConfig.stats.professionalsTrained} Professionals Trained  ·  ${siteConfig.stats.industriesServed} Industries Served`}
        </p>
      </div>
    </section>
  );
}
