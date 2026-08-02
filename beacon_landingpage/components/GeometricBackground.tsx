"use me";

export default function GeometricBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Paper texture noise dot pattern */}
      <div className="absolute inset-0 poster-texture" />

      {/* Abstract Poster-inspired Bauhaus shapes (opacity < 10%) */}
      <svg
        className="absolute top-0 right-0 w-[600px] h-[600px] text-[#20232C] opacity-[0.06] transform translate-x-1/4 -translate-y-1/4"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Concentric Arches */}
        <path
          d="M 50 250 A 200 200 0 0 1 450 250"
          stroke="currentColor"
          strokeWidth="16"
        />
        <path
          d="M 100 250 A 150 150 0 0 1 400 250"
          stroke="currentColor"
          strokeWidth="16"
        />
        <path
          d="M 150 250 A 100 100 0 0 1 350 250"
          stroke="currentColor"
          strokeWidth="16"
        />
        {/* Ray Lines */}
        <line x1="250" y1="250" x2="250" y2="480" stroke="currentColor" strokeWidth="12" />
        <line x1="250" y1="250" x2="410" y2="410" stroke="currentColor" strokeWidth="12" />
        <line x1="250" y1="250" x2="90" y2="410" stroke="currentColor" strokeWidth="12" />
      </svg>

      {/* Geometric diagonal block & triangle left side */}
      <svg
        className="absolute top-1/3 left-0 w-[450px] h-[550px] text-[#C86B1F] opacity-[0.05] transform -translate-x-1/3"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 350,250 0,500" fill="currentColor" />
        <circle cx="200" cy="250" r="120" stroke="#20232C" strokeWidth="14" fill="none" />
      </svg>

      {/* Bottom Right Arch & Circle Stack */}
      <svg
        className="absolute bottom-10 right-10 w-[400px] h-[400px] text-[#4D627D] opacity-[0.06]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="50" y="50" width="300" height="300" rx="40" stroke="currentColor" strokeWidth="16" />
        <circle cx="200" cy="200" r="100" fill="currentColor" />
      </svg>
    </div>
  );
}
