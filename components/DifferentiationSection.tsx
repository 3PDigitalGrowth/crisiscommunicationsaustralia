import { Building2, DollarSign, Globe, Users } from "lucide-react";

import { siteConfig } from "@/config/site";

const iconMap = {
  building: Building2,
  users: Users,
  dollar: DollarSign,
  globe: Globe,
};

export function DifferentiationSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow text-brand-teal">
            {siteConfig.differentiation.eyebrow}
          </p>
          <h2 className="heading-section mt-5 text-navy-dark">
            <span className="block">{siteConfig.differentiation.heading[0]}</span>
            <span className="block">{siteConfig.differentiation.heading[1]}</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {siteConfig.differentiation.cards.map((card) => {
            const Icon = iconMap[card.icon];

            return (
              <article
                key={card.title}
                className="rounded-lg border-l-[3px] border-brand-teal bg-off-white p-6"
              >
                <Icon aria-hidden="true" className="h-7 w-7 text-brand-teal" />
                <h3 className="mt-4 font-heading text-xl font-black text-navy-dark">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-charcoal">
                  {card.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
