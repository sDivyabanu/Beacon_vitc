"use client";

export function CodeChefEmblem() {
  return (
    <img 
      src="images/codecheflogo.png" 
      alt="CodeChef Logo" 
      className="w-12 h-12 object-contain" 
    />
  );
}

export function MicEmblem() {
  return (
    <img 
      src="images/miclogo.png" 
      alt="MIC Logo" 
      className="w-12 h-12 object-contain" 
    />
  );
}

export function DaoEmblem() {
  return (
    <img 
      src="images/daologo.png" 
      alt="DAO Logo" 
      className="w-12 h-12 object-contain" 
    />
  );
}

export function CyscomEmblem() {
  return (
    <img 
      src="images/cyscomlogo.png" 
      alt="CYSCOM Logo" 
      className="w-12 h-12 object-contain" 
    />
  );
}

export function AndroidEmblem() {
  return (
    <img 
      src="images/Androidlogo.png" 
      alt="Android Logo" 
      className="w-12 h-12 object-contain" 
    />
  );
}

export function BicEmblem() {
  return (
    <img 
      src="images/biclogo.png" 
      alt="BIC Logo" 
      className="w-12 h-12 object-contain" 
    />
  );
}

export function EnactusEmblem() {
  return (
    <img 
      src="images/enactuslogo.png" 
      alt="Enactus Logo" 
      className="w-12 h-12 object-contain" 
    />
  );
}

export function getClubEmblem(id: string) {
  switch (id) {
    case "codechef":
      return <CodeChefEmblem />;
    case "mic":
      return <MicEmblem />;
    case "dao":
      return <DaoEmblem />;
    case "cyscom":
      return <CyscomEmblem />;
    case "android-club":
      return <AndroidEmblem />;
    case "bic":
      return <BicEmblem />;
    case "enactus":
      return <EnactusEmblem />;
    default:
      return <CodeChefEmblem />;
  }
}
