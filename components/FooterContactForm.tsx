'use client';

import { useFormState, useFormStatus } from "react-dom";

import { siteConfig } from "@/config/site";
import { submitFooterContactRequest } from "@/lib/actions";
import { initialFormState } from "@/types";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-[4px] bg-brand-teal px-5 py-3 font-heading text-xs font-black uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : siteConfig.footer.contactForm.submitLabel}
    </button>
  );
}

export function FooterContactForm() {
  const [state, formAction] = useFormState(
    submitFooterContactRequest,
    initialFormState,
  );

  return (
    <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-5">
      <p className="text-sm text-off-white/70">
        {siteConfig.footer.contactForm.intro}
      </p>

      <form action={formAction} className="mt-4 space-y-4">
        <div>
          <label
            htmlFor="footer-email"
            className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-off-white/55"
          >
            {siteConfig.footer.contactForm.emailLabel}
          </label>
          <input
            id="footer-email"
            name="email"
            type="email"
            required
            className="w-full rounded-[4px] border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-off-white/35"
          />
        </div>

        <div>
          <label
            htmlFor="footer-request"
            className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-off-white/55"
          >
            {siteConfig.footer.contactForm.requestLabel}
          </label>
          <textarea
            id="footer-request"
            name="request"
            required
            rows={4}
            placeholder={siteConfig.footer.contactForm.requestPlaceholder}
            className="w-full rounded-[4px] border border-white/15 bg-transparent px-4 py-3 text-sm leading-relaxed text-white placeholder:text-off-white/35"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <SubmitButton />
          {state.status === "success" ? (
            <p className="text-right text-xs text-brand-teal">{state.message}</p>
          ) : null}
        </div>

        {state.status === "error" ? (
          <p className="text-xs text-red-300">{state.message}</p>
        ) : null}
      </form>
    </div>
  );
}
