'use client';

import { AlertCircle, Shield } from "lucide-react";

type ScrollButtonProps = {
  label: string;
  targetId: string;
  variant?: "solid" | "outline" | "text-gold" | "text-teal";
  icon?: "alert" | "shield";
  className?: string;
};

const iconMap = {
  alert: AlertCircle,
  shield: Shield,
};

export function ScrollButton({
  label,
  targetId,
  variant = "solid",
  icon,
  className = "",
}: ScrollButtonProps) {
  const Icon = icon ? iconMap[icon] : null;

  const variantClassName = {
    solid:
      "button-base bg-brand-gold text-navy-dark hover:-translate-y-0.5 hover:shadow-lg",
    outline:
      "button-base border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white",
    "text-gold":
      "inline-flex items-center gap-2 text-left text-[15px] font-medium text-brand-gold underline decoration-transparent underline-offset-4 hover:decoration-current",
    "text-teal":
      "inline-flex items-center gap-2 text-left text-[15px] font-medium text-brand-teal underline decoration-transparent underline-offset-4 hover:decoration-current",
  }[variant];

  return (
    <button
      type="button"
      className={`${variantClassName} ${className}`.trim()}
      onClick={() =>
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    >
      {Icon ? <Icon aria-hidden="true" className="h-5 w-5" /> : null}
      <span>{label}</span>
    </button>
  );
}
