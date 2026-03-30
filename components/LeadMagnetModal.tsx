'use client';

import { useEffect, useMemo, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Shield, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { submitLeadMagnet } from "@/lib/actions";
import { initialFormState } from "@/types";

import { useLeadMagnetModal } from "./LeadMagnetModalProvider";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="button-base w-full bg-brand-teal text-white hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "SENDING..." : siteConfig.leadMagnet.formFields.submitLabel}
    </button>
  );
}

export function LeadMagnetModal() {
  const { isOpen, closeModal, openModal, showToast, toastMessage } =
    useLeadMagnetModal();
  const [state, formAction] = useFormState(submitLeadMagnet, initialFormState);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const focusableSelector = useMemo(
    () =>
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
    [],
  );

  useEffect(() => {
    const startedAt = window.performance.now();

    const handleMouseLeave = (event: MouseEvent) => {
      if (
        sessionStorage.getItem("exitIntentShown") === "true" ||
        event.clientY > 16 ||
        window.performance.now() - startedAt < 10000
      ) {
        return;
      }

      sessionStorage.setItem("exitIntentShown", "true");
      openModal();
    };

    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, [openModal]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const nodes = modalRef.current?.querySelectorAll<HTMLElement>(
      focusableSelector,
    );

    nodes?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !nodes || nodes.length === 0) {
        return;
      }

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, focusableSelector, isOpen]);

  useEffect(() => {
    if (state.status === "success" && state.message) {
      showToast(state.message);
      closeModal();
    }
  }, [closeModal, showToast, state.message, state.status]);

  if (!isOpen && !toastMessage) {
    return null;
  }

  return (
    <>
      {isOpen ? (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={(event) => {
            if (event.target === overlayRef.current) {
              closeModal();
            }
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-magnet-title"
            className="relative w-full max-w-sm max-h-[90vh] overflow-y-auto rounded-lg bg-white p-8 shadow-panel"
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full p-2 text-charcoal-mid hover:bg-off-white"
              aria-label="Close checklist form"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>

            <p className="font-heading text-xs font-black uppercase tracking-[0.28em] text-brand-teal">
              {siteConfig.leadMagnet.eyebrow}
            </p>
            <h3
              id="lead-magnet-title"
              className="mt-4 font-heading text-[28px] font-black leading-tight text-navy-dark"
            >
              <span className="block">{siteConfig.leadMagnet.heading[0]}</span>
              <span className="block">{siteConfig.leadMagnet.heading[1]}</span>
            </h3>
            <div className="mt-4 space-y-4 text-[15px] leading-6 text-charcoal">
              {siteConfig.leadMagnet.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <form action={formAction} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-charcoal"
                >
                  {siteConfig.leadMagnet.formFields.firstName}
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full rounded-sm border border-border px-4 py-3"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-charcoal"
                >
                  {siteConfig.leadMagnet.formFields.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-sm border border-border px-4 py-3"
                />
              </div>
              <div>
                <label
                  htmlFor="lead-organisation"
                  className="mb-2 block text-sm font-medium text-charcoal"
                >
                  {siteConfig.leadMagnet.formFields.organisation}
                </label>
                <input
                  id="lead-organisation"
                  name="organisation"
                  required
                  className="w-full rounded-sm border border-border px-4 py-3"
                />
              </div>
              <SubmitButton />
              {state.status === "error" && state.message ? (
                <p className="text-sm text-red-700" role="alert">
                  {state.message}
                </p>
              ) : null}
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-center text-[13px] text-charcoal-mid">
              <Shield aria-hidden="true" className="h-4 w-4 text-brand-teal" />
              <span>{siteConfig.leadMagnet.trustSignal}</span>
            </div>
          </div>
        </div>
      ) : null}

      {toastMessage ? (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-md bg-navy-dark px-4 py-3 text-sm text-white shadow-panel">
          {toastMessage}
        </div>
      ) : null}
    </>
  );
}
