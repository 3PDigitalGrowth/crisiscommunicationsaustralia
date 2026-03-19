import { Star } from "lucide-react";

import { siteConfig } from "@/config/site";

export function Testimonials() {
  return (
    <section className="bg-off-white py-16 md:py-24">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {siteConfig.testimonials.cards.map((card, index) => (
            <article
              key={card.quote}
              className={`rounded-lg border-l-[3px] bg-white p-8 shadow-sm ${
                card.accent === "gold"
                  ? "border-brand-gold"
                  : "border-brand-teal"
              }`}
            >
              <div className="flex gap-1 text-brand-gold">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={`${index}-${starIndex}`}
                    aria-hidden="true"
                    className="h-4 w-4 fill-current"
                  />
                ))}
              </div>
              <p className="mt-4 text-[17px] italic leading-[1.7] text-charcoal">
                {card.quote}
              </p>
              <p className="mt-6 text-[15px] font-medium text-charcoal">
                {card.name}
              </p>
              <p className="mt-1 text-[13px] text-charcoal-mid">{card.role}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-[15px] italic text-charcoal-mid">
          {siteConfig.testimonials.footer}
        </p>
      </div>
    </section>
  );
}
