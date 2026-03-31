export default function HeroArcs() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hero-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(255,255,255,0.035)" />
        </pattern>
        <linearGradient id="hero-arcs-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(10,21,32,0)" />
          <stop offset="38%" stopColor="rgba(10,21,32,0.08)" />
          <stop offset="100%" stopColor="rgba(10,21,32,0.18)" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="900" height="600" fill="url(#hero-dots)" />
      <rect x="0" y="0" width="900" height="600" fill="url(#hero-arcs-fade)" />

      <line x1="0" y1="150" x2="900" y2="150" stroke="rgba(7,175,187,0.07)" strokeWidth="0.5" />
      <line x1="0" y1="300" x2="900" y2="300" stroke="rgba(7,175,187,0.07)" strokeWidth="0.5" />
      <line x1="0" y1="450" x2="900" y2="450" stroke="rgba(7,175,187,0.07)" strokeWidth="0.5" />

      <path
        opacity="0.65"
        d="M730,680 Q730,460 610,270 Q730,460 850,270"
        fill="none" stroke="#07AFBB" strokeWidth="1.8" strokeLinecap="round"
      />
      <path
        opacity="0.42"
        d="M730,680 Q730,390 560,120 Q730,390 900,120"
        fill="none" stroke="#07AFBB" strokeWidth="1.4" strokeLinecap="round"
      />
      <path
        opacity="0.25"
        d="M730,680 Q730,310 500,-30 Q730,310 960,-30"
        fill="none" stroke="#07AFBB" strokeWidth="1.1" strokeLinecap="round"
      />
      <path
        opacity="0.13"
        d="M730,680 Q730,230 450,-160 Q730,230 1010,-160"
        fill="none" stroke="#07AFBB" strokeWidth="0.8" strokeLinecap="round"
      />
      <path
        opacity="0.07"
        d="M730,680 Q730,160 390,-280 Q730,160 1070,-280"
        fill="none" stroke="#07AFBB" strokeWidth="0.6" strokeLinecap="round"
      />

      <circle cx="730" cy="600" r="32" fill="none" stroke="rgba(7,175,187,0.18)" strokeWidth="0.8" />
      <circle cx="730" cy="600" r="20" fill="none" stroke="rgba(7,175,187,0.26)" strokeWidth="0.9" />
      <circle cx="730" cy="600" r="11" fill="none" stroke="rgba(7,175,187,0.38)" strokeWidth="1.0" />
      <circle cx="730" cy="600" r="4" fill="rgba(7,175,187,0.75)" />

      <line
        x1="0" y1="600" x2="730" y2="600"
        stroke="rgba(224,82,82,0.18)"
        strokeWidth="1"
        strokeDasharray="6 10"
      />
    </svg>
  );
}
