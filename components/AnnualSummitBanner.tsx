import { siteConfig } from "@/config/site";

export default function AnnualSummitBanner() {
  return (
    <section className="bg-navy-dark py-14">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-widest text-brand-teal">
              {siteConfig.annualSummit.eyebrow}
            </p>
            <h2 className="font-heading text-[28px] font-black leading-tight text-white md:text-[34px]">
              {siteConfig.annualSummit.heading[0]}
              <br />
              {siteConfig.annualSummit.heading[1]}
            </h2>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-off-white/60">
              {siteConfig.annualSummit.body}
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={siteConfig.links.masterclassUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-[4px] border-2 border-brand-teal px-8 py-4 font-heading text-[12px] font-black uppercase tracking-widest text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
            >
              {siteConfig.annualSummit.cta}
            </a>
            <p className="mt-2 text-center text-[11px] text-off-white/40">
              {siteConfig.annualSummit.trialNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
