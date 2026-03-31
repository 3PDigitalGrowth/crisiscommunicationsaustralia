import { siteConfig } from "@/config/site";

const mediaLogos = [
  {
    name: "ABC",
    svg: `
      <svg width="48" height="28" viewBox="0 0 48 28" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ABC">
        <rect width="48" height="28" rx="2" fill="none" stroke="#2C2C2C" stroke-width="1"/>
        <text x="24" y="20" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="14" fill="#2C2C2C" text-anchor="middle">ABC</text>
      </svg>
    `,
  },
  {
    name: "Sky Business",
    svg: `
      <svg width="108" height="22" viewBox="0 0 108 22" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sky Business">
        <text x="0" y="15" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="13" fill="#2C2C2C" letter-spacing="-0.3">SKY</text>
        <text x="40" y="15" font-family="Arial, sans-serif" font-weight="400" font-size="13" fill="#2C2C2C">BUSINESS</text>
      </svg>
    `,
  },
  {
    name: "4BC",
    svg: `
      <svg width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="4BC">
        <text x="22" y="18" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="18" fill="#2C2C2C" text-anchor="middle" letter-spacing="-1">4BC</text>
      </svg>
    `,
  },
  {
    name: "The Australian",
    svg: `
      <svg width="120" height="22" viewBox="0 0 120 22" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The Australian">
        <text x="0" y="10" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="9" fill="#2C2C2C" letter-spacing="1.5">THE</text>
        <text x="0" y="21" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="14" fill="#2C2C2C" letter-spacing="1">AUSTRALIAN</text>
      </svg>
    `,
  },
  {
    name: "Daily Mail",
    svg: `
      <svg width="82" height="22" viewBox="0 0 82 22" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Daily Mail">
        <text x="41" y="17" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="15" fill="#2C2C2C" text-anchor="middle" letter-spacing="0.5">Daily Mail</text>
      </svg>
    `,
  },
  {
    name: "Associated Press",
    svg: `
      <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Associated Press">
        <rect width="38" height="38" rx="3" fill="none" stroke="#2C2C2C" stroke-width="1"/>
        <text x="19" y="16" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="11" fill="#2C2C2C" text-anchor="middle">AP</text>
        <text x="19" y="27" font-family="Arial, sans-serif" font-size="6" fill="#2C2C2C" text-anchor="middle" letter-spacing="0.5">ASSOCIATED</text>
        <text x="19" y="34" font-family="Arial, sans-serif" font-size="6" fill="#2C2C2C" text-anchor="middle" letter-spacing="0.5">PRESS</text>
      </svg>
    `,
  },
  {
    name: "Australian Associated Press",
    svg: `
      <svg width="44" height="38" viewBox="0 0 44 38" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Australian Associated Press">
        <rect width="44" height="38" rx="3" fill="none" stroke="#2C2C2C" stroke-width="1"/>
        <text x="22" y="16" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="11" fill="#2C2C2C" text-anchor="middle">AAP</text>
        <text x="22" y="26" font-family="Arial, sans-serif" font-size="5.5" fill="#2C2C2C" text-anchor="middle" letter-spacing="0.3">AUSTRALIAN</text>
        <text x="22" y="33" font-family="Arial, sans-serif" font-size="5.5" fill="#2C2C2C" text-anchor="middle" letter-spacing="0.3">ASSOCIATED PRESS</text>
      </svg>
    `,
  },
  {
    name: "Fox News",
    svg: `
      <svg width="84" height="24" viewBox="0 0 84 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fox News">
        <text x="0" y="18" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="18" fill="#2C2C2C" letter-spacing="-0.5">FOX</text>
        <text x="48" y="18" font-family="Arial, sans-serif" font-weight="700" font-size="18" fill="#2C2C2C">News</text>
      </svg>
    `,
  },
  {
    name: "CBS News USA",
    svg: `
      <svg width="100" height="24" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CBS News USA">
        <circle cx="10" cy="12" r="9" fill="none" stroke="#2C2C2C" stroke-width="1.5"/>
        <circle cx="10" cy="12" r="4" fill="#2C2C2C"/>
        <text x="25" y="17" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="13" fill="#2C2C2C" letter-spacing="-0.3">CBS</text>
        <text x="60" y="17" font-family="Arial, sans-serif" font-weight="400" font-size="13" fill="#2C2C2C">News</text>
      </svg>
    `,
  },
  {
    name: "Daily Telegraph",
    svg: `
      <svg width="128" height="22" viewBox="0 0 128 22" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Daily Telegraph">
        <text x="64" y="21" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="13" fill="#2C2C2C" text-anchor="middle" letter-spacing="1">DAILY TELEGRAPH</text>
      </svg>
    `,
  },
];

export function AuthorityBar() {
  return (
    <section className="border-b border-border bg-white py-6 md:py-7">
      <div className="section-shell text-center">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-charcoal-mid">
          {siteConfig.authorityBar.label}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-8">
          {mediaLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-8 items-center justify-center opacity-55 grayscale transition-opacity hover:opacity-80 md:h-9"
              dangerouslySetInnerHTML={{ __html: logo.svg }}
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-charcoal-mid">
          {`${siteConfig.stats.professionalsTrained} Professionals Trained  ·  ${siteConfig.stats.industriesServed} Industries Served`}
        </p>
      </div>
    </section>
  );
}
