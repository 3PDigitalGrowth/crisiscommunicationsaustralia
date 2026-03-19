import { siteConfig } from "@/config/site";
import { FAQItem } from "./FAQItem";

export default function FAQSection() {
  const items = siteConfig.faqs.items;
  const midpoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midpoint);
  const rightColumn = items.slice(midpoint);

  return (
    <section className="border-t border-border bg-off-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-brand-teal">
            {siteConfig.faqs.eyebrow}
          </p>
          <h2 className="font-heading text-[32px] font-black leading-tight text-navy-dark md:text-[38px]">
            {siteConfig.faqs.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
          <div>
            {leftColumn.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div>
            {rightColumn.map((faq, i) => (
              <FAQItem key={i + midpoint} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
