"use me";

export function NexusAiEmblem() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
      <rect x="10" y="10" width="80" height="80" rx="16" fill="#C86B1F" stroke="#20232C" strokeWidth="6" />
      <circle cx="50" cy="50" r="24" fill="#F5EAD8" stroke="#20232C" strokeWidth="6" />
      <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="#20232C" strokeWidth="6" strokeDasharray="4 4" />
    </svg>
  );
}

export function CyberForgeEmblem() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
      <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="#4D627D" stroke="#20232C" strokeWidth="6" />
      <circle cx="50" cy="50" r="18" fill="#D9A441" stroke="#20232C" strokeWidth="6" />
      <path d="M 50 32 L 50 68" stroke="#20232C" strokeWidth="6" />
    </svg>
  );
}

export function DesignCraftEmblem() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
      <rect x="15" y="15" width="70" height="70" rx="20" fill="#A74C22" stroke="#20232C" strokeWidth="6" />
      <circle cx="35" cy="35" r="14" fill="#F5EAD8" stroke="#20232C" strokeWidth="5" />
      <polygon points="50,85 85,50 85,85" fill="#D9A441" stroke="#20232C" strokeWidth="5" />
    </svg>
  );
}

export function CodeChefEmblem() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="40" fill="#1C2742" stroke="#20232C" strokeWidth="6" />
      <path d="M 30 40 L 45 50 L 30 60" stroke="#F5EAD8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="55" y1="62" x2="72" y2="62" stroke="#D9A441" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function BeaconMediaEmblem() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
      <rect x="12" y="20" width="76" height="60" rx="14" fill="#C86B1F" stroke="#20232C" strokeWidth="6" />
      <path d="M 30 35 L 70 35 M 30 50 L 70 50 M 30 65 L 55 65" stroke="#F5EAD8" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function VeloceEmblem() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
      <polygon points="50,10 90,85 10,85" fill="#8797A8" stroke="#20232C" strokeWidth="6" />
      <circle cx="50" cy="60" r="16" fill="#C86B1F" stroke="#20232C" strokeWidth="5" />
    </svg>
  );
}

export function CadenceEmblem() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
      <path d="M 20 20 C 50 10, 50 90, 80 80" stroke="#A74C22" strokeWidth="12" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="20" r="12" fill="#D9A441" stroke="#20232C" strokeWidth="5" />
      <circle cx="80" cy="80" r="12" fill="#4D627D" stroke="#20232C" strokeWidth="5" />
    </svg>
  );
}

export function getClubEmblem(id: string) {
  switch (id) {
    case "nexus-ai":
      return <NexusAiEmblem />;
    case "cyberforge":
      return <CyberForgeEmblem />;
    case "designcraft":
      return <DesignCraftEmblem />;
    case "codechef":
      return <CodeChefEmblem />;
    case "beacon-media":
      return <BeaconMediaEmblem />;
    case "veloce-ecell":
      return <VeloceEmblem />;
    case "cadence-literary":
      return <CadenceEmblem />;
    default:
      return <NexusAiEmblem />;
  }
}
