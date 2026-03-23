'use client';

import { siteConfig } from "@/config/site";

export default function MobileCallBar() {
  return (
    <a
      href={siteConfig.phone.href}
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-3 bg-brand-gold px-6 py-4 font-heading text-sm font-black uppercase tracking-widest text-navy-dark transition-opacity hover:opacity-95 md:hidden"
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
      CALL NOW - {siteConfig.phone.display}
    </a>
  );
}
