'use client';

export default function HeroRings() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full select-none"
      viewBox="0 0 900 340"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes ring-pulse {
            0%, 100% { opacity: var(--ring-opacity); }
            50% { opacity: calc(var(--ring-opacity) * 0.6); }
          }

          .cca-ring {
            animation: ring-pulse 4s ease-in-out infinite;
          }

          .cca-ring-1 { --ring-opacity: 0.35; }
          .cca-ring-2 { --ring-opacity: 0.20; }
          .cca-ring-3 { --ring-opacity: 0.12; }
          .cca-ring-4 { --ring-opacity: 0.07; }
          .cca-ring-5 { --ring-opacity: 0.04; }
          .cca-ring-6 { --ring-opacity: 0.025; }
          .cca-ring-7 { --ring-opacity: 0.015; }

          @keyframes dot-pulse {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }

          @keyframes halo-pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.45; }
          }

          .cca-origin-dot { animation: dot-pulse 1.5s ease-in-out infinite; }
          .cca-origin-h1 { animation: halo-pulse 1.5s ease-in-out infinite; }
          .cca-origin-h2 { animation: halo-pulse 1.5s ease-in-out infinite; animation-delay: 0.3s; }

          .cca-crosshair { opacity: 0.025; }
        `}</style>
      </defs>

      <circle className="cca-ring cca-ring-1" cx="450" cy="170" r="40" fill="none" stroke="#07AFBB" strokeWidth="1" />
      <circle className="cca-ring cca-ring-2" cx="450" cy="170" r="90" fill="none" stroke="#07AFBB" strokeWidth="0.8" />
      <circle className="cca-ring cca-ring-3" cx="450" cy="170" r="150" fill="none" stroke="#07AFBB" strokeWidth="0.7" />
      <circle className="cca-ring cca-ring-4" cx="450" cy="170" r="220" fill="none" stroke="#07AFBB" strokeWidth="0.6" />
      <circle className="cca-ring cca-ring-5" cx="450" cy="170" r="300" fill="none" stroke="#07AFBB" strokeWidth="0.5" />
      <circle className="cca-ring cca-ring-6" cx="450" cy="170" r="390" fill="none" stroke="#07AFBB" strokeWidth="0.5" />
      <circle className="cca-ring cca-ring-7" cx="450" cy="170" r="490" fill="none" stroke="#07AFBB" strokeWidth="0.5" />

      <line className="cca-crosshair" x1="450" y1="0" x2="450" y2="340" stroke="white" strokeWidth="0.5" strokeDasharray="3 8" />
      <line className="cca-crosshair" x1="0" y1="170" x2="900" y2="170" stroke="white" strokeWidth="0.5" strokeDasharray="3 8" />

    </svg>
  );
}
