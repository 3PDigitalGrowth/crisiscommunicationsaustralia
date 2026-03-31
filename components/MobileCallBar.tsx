'use client';

import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";

export default function MobileCallBar() {
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    setIsDismissed(sessionStorage.getItem("mobileCallBarDismissed") === "true");
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("mobileCallBarDismissed", "true");
    setIsDismissed(true);
  };

  if (isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-gold md:hidden">
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 font-heading text-sm font-black tracking-[0.02em] text-white"
        aria-label="Close call bar"
      >
        X
      </button>
      <a
        href={siteConfig.phone.href}
        className="flex items-center justify-center gap-3 px-6 py-4 pr-14 font-heading text-sm font-black tracking-[0.04em] text-navy-dark transition-opacity hover:opacity-95"
        aria-label={`Call CRC Public Relations on ${siteConfig.phone.display}`}
      >
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81 a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27 a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
        Call now - {siteConfig.phone.display}
      </a>
    </div>
  );
}
