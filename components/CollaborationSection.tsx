"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CLUBS_DATA } from "@/data/clubs";
import { getClubEmblem } from "./ClubEmblems";
import { Compass, Sparkles, Layers, RefreshCw } from "lucide-react";

export default function CollaborationSection() {
  const [activeClub, setActiveClub] = useState<string | null>(null);

  return (
    <section id="collaboration" className="relative bg-[#EFE4D2] py-20 lg:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-[#20232C] overflow-hidden">
      {/* Large Geometric Divider / Poster Rays SVG Header */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        {/* Geometric Poster Arch Divider */}
        <div className="flex justify-center mb-6">
          <svg className="w-48 h-16 text-[#20232C]" viewBox="0 0 200 60" fill="none">
            <path d="M 10 50 A 90 90 0 0 1 190 50" stroke="currentColor" strokeWidth="6" />
            <path d="M 30 50 A 70 70 0 0 1 170 50" stroke="#C86B1F" strokeWidth="6" />
            <path d="M 50 50 A 50 50 0 0 1 150 50" stroke="#4D627D" strokeWidth="6" />
            <circle cx="100" cy="50" r="10" fill="#D9A441" stroke="currentColor" strokeWidth="4" />
          </svg>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D9A441] border-3 border-[#20232C] rounded-full neo-shadow-sm mb-4">
          <Sparkles className="w-4 h-4 text-[#20232C]" />
          <span className="text-xs font-black uppercase text-[#20232C] tracking-wider">
            INTER-CLUB SYNTHESIS
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-serif-heading font-black text-[#20232C] tracking-tight leading-tight mb-4">
          One Collective Ecosystem. <br />
          <span className="text-[#C86B1F]">Seven Connected Pillars.</span>
        </h2>
        <p className="text-base sm:text-xl font-bold text-[#4D627D] max-w-2xl mx-auto">
          BEACON bridges technology, artificial intelligence, ethical security, editorial journalism, creative motion, startups, and public oratory.
        </p>
      </div>

      {/* Interactive Poster Bauhaus Architectural Node Diagram */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative bg-[#F5EAD8] border-4 border-[#20232C] rounded-[32px] p-6 sm:p-12 neo-shadow-xl min-h-[500px] flex items-center justify-center overflow-hidden">
          
          {/* Abstract Geometric Lines & Concentric Poster Circles */}
          <svg className="absolute inset-0 w-full h-full text-[#20232C] opacity-20 pointer-events-none" viewBox="0 0 800 600" fill="none">
            {/* Concentric Architectural Rings */}
            <circle cx="400" cy="300" r="220" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" />
            <circle cx="400" cy="300" r="140" stroke="#C86B1F" strokeWidth="4" />
            <circle cx="400" cy="300" r="60" stroke="#4D627D" strokeWidth="4" />

            {/* Connecting Diagonal Lines from Center to Nodes */}
            <line x1="400" y1="300" x2="400" y2="80" stroke="currentColor" strokeWidth="4" />
            <line x1="400" y1="300" x2="620" y2="170" stroke="currentColor" strokeWidth="4" />
            <line x1="400" y1="300" x2="650" y2="390" stroke="currentColor" strokeWidth="4" />
            <line x1="400" y1="300" x2="510" y2="520" stroke="currentColor" strokeWidth="4" />
            <line x1="400" y1="300" x2="290" y2="520" stroke="currentColor" strokeWidth="4" />
            <line x1="400" y1="300" x2="150" y2="390" stroke="currentColor" strokeWidth="4" />
            <line x1="400" y1="300" x2="180" y2="170" stroke="currentColor" strokeWidth="4" />
          </svg>

          {/* Central BEACON Hub Seal */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-28 h-28 sm:w-36 sm:h-36 bg-[#C86B1F] border-4 border-[#20232C] rounded-full flex flex-col items-center justify-center neo-shadow-lg z-20"
          >
            <Compass className="w-10 h-10 text-[#F5EAD8]" />
            <span className="font-serif-heading font-black text-sm text-[#F5EAD8] mt-1 tracking-wider">
              BEACON
            </span>
          </motion.div>

          {/* 7 Orbiting Club Emblem Cards */}
          <div className="absolute inset-0 pointer-events-auto">
            {CLUBS_DATA.map((club, idx) => {
              // Angles around circle
              const angle = (idx * 360) / 7 - 90;
              const radius = 35; // percentage radius
              const rad = (angle * Math.PI) / 180;

              // Compute CSS left and top percentages
              const left = 50 + radius * Math.cos(rad);
              const top = 50 + radius * Math.sin(rad);

              const isHovered = activeClub === club.id;

              return (
                <div
                  key={club.id}
                  style={{ left: `${left}%`, top: `${top}%` }}
                  onMouseEnter={() => setActiveClub(club.id)}
                  onMouseLeave={() => setActiveClub(null)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    className={`p-3 border-3 border-[#20232C] rounded-2xl neo-shadow-sm transition-all duration-200 ${
                      isHovered ? "bg-[#D9A441] neo-shadow-lg" : "bg-[#EFE4D2]"
                    }`}
                  >
                    {getClubEmblem(club.id)}
                  </motion.div>

                  {/* Club Badge Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-40">
                    <div className="bg-[#20232C] text-[#F5EAD8] text-xs font-black px-3 py-1.5 rounded-xl border-2 border-[#F5EAD8] neo-shadow-sm flex items-center gap-1.5">
                      <span>{club.shortName}</span>
                      <span className="text-[#D9A441]">• {club.domain}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Club Synthesis Highlight Bar */}
        <div className="mt-8 bg-[#E6D8C1] border-3 border-[#20232C] rounded-2xl p-6 neo-shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Layers className="w-6 h-6 text-[#A74C22] shrink-0" />
            <div>
              <p className="text-xs font-black uppercase text-[#4D627D]">
                COLLABORATIVE INITIATIVES
              </p>
              <p className="text-base font-extrabold text-[#20232C]">
                {activeClub
                  ? `Hovering: ${CLUBS_DATA.find((c) => c.id === activeClub)?.name} — Cross-Domain Synergy Track`
                  : "Hover over any club emblem above to explore inter-club collaborations."}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-extrabold px-3 py-1.5 bg-[#D9A441] border-2 border-[#20232C] rounded-xl text-[#20232C] neo-shadow-sm">
              Annual Hackathon & Summit
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
