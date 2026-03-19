'use client';

import { useRef } from "react";

import { useLeadMagnetModal } from "./LeadMagnetModalProvider";

type LeadMagnetTriggerProps = {
  label: string;
  className?: string;
};

export function LeadMagnetTrigger({
  label,
  className = "",
}: LeadMagnetTriggerProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { openModal } = useLeadMagnetModal();

  return (
    <button
      ref={triggerRef}
      type="button"
      className={className}
      onClick={() => openModal(triggerRef.current)}
    >
      {label}
    </button>
  );
}
