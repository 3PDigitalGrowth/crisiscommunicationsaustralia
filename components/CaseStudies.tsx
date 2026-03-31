import { siteConfig } from "@/config/site";

export default function CaseStudies() {
  return (
    <section className="border-t border-border bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-3 text-[11px] font-medium tracking-[0.14em] text-brand-teal">
            {siteConfig.caseStudies.eyebrow}
          </p>
          <h2 className="max-w-xl font-heading text-[36px] font-black leading-tight text-navy-dark md:text-[42px]">
            {siteConfig.caseStudies.heading[0]}
            <br />
            {siteConfig.caseStudies.heading[1]}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-charcoal-mid">
            {siteConfig.caseStudies.body}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {siteConfig.caseStudies.cards.map((c, i) => (
            <div
              key={i}
              className="flex flex-col rounded-[8px] border border-border bg-off-white p-6"
            >
              <div className="mb-4">
                <span className="text-[10px] font-medium tracking-[0.12em] text-charcoal-mid">
                  {c.context}
                </span>
                <p className="mt-1 text-[13px] font-medium text-navy-dark">
                  Challenge: {c.challenge}
                </p>
              </div>
              <p className="mb-5 flex-1 text-[13px] leading-relaxed text-charcoal">
                {c.description}
              </p>
              <div className="border-t border-border pt-4">
                <span className="mb-1 block text-[10px] font-medium tracking-[0.12em] text-charcoal-mid">
                  Outcome
                </span>
                <span className="inline-block rounded-[3px] bg-brand-gold/10 px-3 py-1 font-heading text-[13px] font-black text-navy-dark">
                  {c.outcomeBadge}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[12px] italic text-charcoal-mid">
          {siteConfig.caseStudies.confidentialityNote}
        </p>
      </div>
    </section>
  );
}
