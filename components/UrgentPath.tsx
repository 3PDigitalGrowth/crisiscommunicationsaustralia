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
      className="button-base w-full bg-brand-gold text-navy-dark hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
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
      className="border-t-4 border-brand-gold bg-white px-0 pt-8"
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

      <div className="mt-8">
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
        <form action={formAction} className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-charcoal" htmlFor="name">
              {siteConfig.urgentPath.formFields.name}
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-sm border border-border bg-white px-4 py-3 text-charcoal"
            />
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-medium text-charcoal"
              htmlFor="organisation"
            >
              {siteConfig.urgentPath.formFields.organisation}
            </label>
            <input
              id="organisation"
              name="organisation"
              required
              className="w-full rounded-sm border border-border bg-white px-4 py-3 text-charcoal"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-charcoal" htmlFor="phone">
              {siteConfig.urgentPath.formFields.phone}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-sm border border-border bg-white px-4 py-3 text-charcoal"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-charcoal" htmlFor="message">
              {siteConfig.urgentPath.formFields.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              placeholder={siteConfig.urgentPath.formFields.messagePlaceholder}
              className="w-full rounded-sm border border-border bg-white px-4 py-3 text-charcoal placeholder:text-charcoal-mid/70"
            />
          </div>
          <SubmitButton />
          {state.message ? (
            <p
              className={`text-sm ${state.status === "error" ? "text-red-700" : "text-brand-teal"}`}
              role={state.status === "error" ? "alert" : "status"}
            >
              {state.message}
            </p>
          ) : null}
        </form>
      </div>

      <p className="mt-4 text-sm italic text-charcoal-mid">
        {siteConfig.urgentPath.footer}
      </p>
    </div>
  );
}
