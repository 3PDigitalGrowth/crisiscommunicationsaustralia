'use client';

import { useState } from "react";

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  const firstSentenceEnd = answer.indexOf(". ");
  const preview =
    firstSentenceEnd > 0 ? answer.slice(0, firstSentenceEnd + 1) : answer;
  const rest =
    firstSentenceEnd > 0 ? answer.slice(firstSentenceEnd + 2) : "";

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <div className="min-w-0">
          <span className="block font-heading text-[15px] font-black leading-snug text-navy-dark transition-colors group-hover:text-brand-teal">
            {question}
          </span>
          <span className="mt-1.5 block text-[13px] leading-relaxed text-charcoal-mid">
            {preview}
            {rest && !open && (
              <span className="ml-1 text-brand-teal">Read more</span>
            )}
          </span>
        </div>
        <span
          className={`mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-charcoal-mid transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </span>
      </button>
      {open && rest && (
        <div className="pb-5">
          <p className="text-[14px] leading-relaxed text-charcoal">
            {rest}
          </p>
        </div>
      )}
    </div>
  );
}
