'use client';

import { useFormState, useFormStatus } from "react-dom";
import { Clock3, Lock, Phone } from "lucide-react";

import { submitContactForm } from "@/lib/actions";
import { siteConfig } from "@/config/site";
import { initialFormState } from "@/types";

const trustIconMap = {
  clock: Clock3,
  lock: Lock,
  phone: Phone,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-brand-gold text-navy-dark font-heading font-black
                 text-xs tracking-widest uppercase py-4 rounded-[4px]
                 hover:opacity-90 transition-opacity mt-1
                 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "SENDING..." : siteConfig.urgentPath.formFields.submitLabel}
    </button>
  );
}

export function UrgentPath() {
  const [state, formAction] = useFormState(submitContactForm, initialFormState);

  return (
    <div
      id={siteConfig.urgentPath.id}
      className="flex h-full w-full flex-col border-t-4 border-brand-gold bg-white px-0 pt-8"
    >
      <p className="font-heading text-xs font-black uppercase tracking-[0.28em] text-brand-gold">
        {siteConfig.urgentPath.label}
      </p>
      <h2 className="heading-card mt-5 text-navy-dark">
        <span className="block">{siteConfig.urgentPath.heading[0]}</span>
        <span className="block">{siteConfig.urgentPath.heading[1]}</span>
      </h2>
      <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-charcoal">
        {siteConfig.urgentPath.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        {siteConfig.urgentPath.trustSignals.map((signal) => {
          const Icon = trustIconMap[signal.icon];

          return (
            <div
              key={signal.label}
              className="inline-flex items-center gap-2 text-sm font-medium text-charcoal"
            >
              <Icon aria-hidden="true" className="h-4 w-4 text-brand-gold" />
              <span>{signal.label}</span>
            </div>
          );
        })}
      </div>

      <p className="mb-4 mt-4 text-[11px] leading-relaxed text-charcoal-mid">
        {siteConfig.urgentPath.servicesCopy}{" "}
        <a
          href={siteConfig.links.crcPrServicesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-gold underline hover:opacity-80"
        >
          {siteConfig.urgentPath.servicesLinkLabel}
        </a>
      </p>

      <div className="mt-auto pt-8">
        <div>
          <p className="text-sm text-charcoal-mid">
            {siteConfig.urgentPath.phoneLabel}
          </p>
          <a
            href={siteConfig.phone.href}
            className="mt-2 inline-block font-heading text-4xl font-black text-brand-gold hover:text-brand-gold/80 sm:text-[42px]"
          >
            {siteConfig.phone.display}
          </a>
          <p className="mt-1 text-sm text-charcoal-mid">
            {siteConfig.phone.availability}
          </p>
          <p className="mt-0.5 text-[11px] font-medium text-brand-gold">
            {siteConfig.phone.responseCommitment}
          </p>
        </div>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm text-charcoal-mid">OR</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="rounded-md bg-off-white p-6">
          <h3 className="font-heading text-2xl font-black text-navy-dark">
            {siteConfig.urgentPath.formHeading}
          </h3>

          {state.status === "success" ? (
            <div className="mt-6 rounded-[6px] border border-border bg-off-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal/10">
                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="#07AFBB" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="mb-2 font-heading text-[17px] font-black text-navy-dark">
                {siteConfig.urgentPath.successState.heading}
              </p>
              <p className="mb-4 text-[13px] leading-relaxed text-charcoal">
                {siteConfig.urgentPath.successState.body}
              </p>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center gap-2 rounded-[4px] bg-brand-gold px-6 py-3 font-heading text-xs font-black uppercase tracking-widest text-navy-dark transition-opacity hover:opacity-90"
              >
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81 a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27 a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {siteConfig.urgentPath.successState.ctaLabel}
              </a>
            </div>
          ) : (
            <form action={formAction} className="mt-6">
              <div className="flex flex-col gap-3">
                <div>
                  <label htmlFor="urgent-name" className="sr-only">Full Name</label>
                  <input
                    id="urgent-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-sm border border-border bg-off-white px-3 py-2.5 text-sm text-charcoal focus:border-brand-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="urgent-phone" className="sr-only">Phone Number</label>
                  <input
                    id="urgent-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full rounded-sm border border-border bg-off-white px-3 py-2.5 text-sm text-charcoal focus:border-brand-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="urgent-message" className="sr-only">
                    Brief description (optional)
                  </label>
                  <textarea
                    id="urgent-message"
                    name="message"
                    rows={2}
                    placeholder="Brief description - optional. We will call you to discuss."
                    className="w-full resize-none rounded-sm border border-border bg-off-white px-3 py-2.5 text-sm text-charcoal focus:border-brand-gold focus:outline-none"
                  />
                </div>
                <SubmitButton />
              </div>
              {state.status === "error" && state.message ? (
                <p className="mt-3 text-sm text-red-700" role="alert">
                  {state.message}
                </p>
              ) : null}
            </form>
          )}
        </div>

        <p className="mt-4 text-[11px] italic leading-relaxed text-charcoal-mid">
          {siteConfig.urgentPath.confidentialityNote}
        </p>

        <p className="mt-4 text-sm italic text-charcoal-mid">
          {siteConfig.urgentPath.footer}
        </p>
      </div>
    </div>
  );
}
