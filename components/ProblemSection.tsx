import { siteConfig } from "@/config/site";

import { ScrollButton } from "./ScrollButton";

export function ProblemSection() {
  return (
    <section className="bg-off-white py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <h2 className="heading-section text-charcoal">
              <span className="block">{siteConfig.problem.heading[0]}</span>
              <span className="block">{siteConfig.problem.heading[1]}</span>
            </h2>
            <div className="body-large mt-8 max-w-copy-lg space-y-6 text-charcoal">
              {siteConfig.problem.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-navy-dark p-8 text-off-white shadow-panel">
            <p className="section-eyebrow text-brand-teal">
              {siteConfig.problem.crisisClock.label}
            </p>
            <div className="mt-6 space-y-5">
              {siteConfig.problem.crisisClock.scenarios.map((scenario) => (
                <div
                  key={scenario.time}
                  className="border-l-[3px] border-brand-gold pl-4"
                >
                  <p className="font-heading text-xl font-black text-brand-gold">
                    {scenario.time}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-off-white">
                    {scenario.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm italic text-brand-teal">
              {siteConfig.problem.crisisClock.quote}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="mb-4 font-heading text-[20px] font-black text-charcoal">
            {siteConfig.problem.managementHeading}
          </h3>
          <p className="text-base font-medium text-charcoal">
            {siteConfig.problem.prompt}
          </p>
          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ScrollButton
              label={siteConfig.problem.links.urgent}
              targetId={siteConfig.scrollTargets.urgent}
              variant="solid"
              icon="alert"
              className="w-full sm:w-auto"
            />
            <ScrollButton
              label={siteConfig.problem.links.readiness}
              targetId={siteConfig.scrollTargets.readiness}
              variant="outline"
              icon="shield"
              className="w-full sm:w-auto"
            />
            <ScrollButton
              label={siteConfig.problem.links.masterclass}
              targetId={siteConfig.scrollTargets.masterclass}
              variant="text-teal"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
