"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Sparkles, Eye, ArrowLeft, ArrowRight } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { CLUBS_DATA, Club } from "@/data/clubs";
import { getClubEmblem } from "./ClubEmblems";
import ClubModal from "./ClubModal";

const TOTAL_CLUBS = CLUBS_DATA.length;
const ANGLE_STEP = 360 / TOTAL_CLUBS;

const BACKGROUND_COLORS: Record<string, string> = {
  "nexus-ai": "#E3ECF5",          // Light Blue
  "cyberforge": "#E7DBEC",        // Dark Purple / Cyber
  "designcraft": "#FCE6EC",       // Soft Pink
  "codechef": "#FCEBDC",          // Orange Vibe
  "beacon-media": "#EFE4D2",      // Cream (Default)
  "veloce-ecell": "#E6ECDC",      // Muted Sage
  "cadence-literary": "#ECE7FC",   // Soft Violet
};

export default function ClubsSection() {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [modalClub, setModalClub] = useState<Club | null>(null);
  const [rotationOffset, setRotationOffset] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const dragStartAngle = useRef(0);
  const dragStartRotation = useRef(0);
  const lastScrollTime = useRef(0);
  const dragHasMoved = useRef(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSelectedIdx = () => {
    if (!selectedClub) return 0;
    return CLUBS_DATA.findIndex((c) => c.id === selectedClub.id);
  };

  const selectIndex = (index: number) => {
    const safeIndex = (index + TOTAL_CLUBS) % TOTAL_CLUBS;
    const club = CLUBS_DATA[safeIndex];
    setSelectedClub(club);
    
    // Shortest path to top focal point (0 degrees)
    const targetRotation = -safeIndex * ANGLE_STEP;
    const currentNormalized = ((rotationOffset % 360) + 360) % 360;
    const targetNormalized = ((targetRotation % 360) + 360) % 360;
    
    let diff = targetNormalized - currentNormalized;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    
    setRotationOffset((prev) => prev + diff);
  };

  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 650) {
      e.preventDefault();
      return;
    }
    
    if (Math.abs(e.deltaY) > 8) {
      e.preventDefault();
      lastScrollTime.current = now;
      const currentIdx = getSelectedIdx();
      if (e.deltaY > 0) {
        selectIndex(currentIdx + 1);
      } else {
        selectIndex(currentIdx - 1);
      }
    }
  };

  const getAngle = (clientX: number, clientY: number) => {
    if (!wheelRef.current) return 0;
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = clientX - centerX;
    const y = clientY - centerY;
    return Math.atan2(y, x) * (180 / Math.PI);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    dragHasMoved.current = false;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    dragStartAngle.current = getAngle(clientX, clientY);
    dragStartRotation.current = rotationOffset;
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const currentAngle = getAngle(clientX, clientY);
    const angleDiff = currentAngle - dragStartAngle.current;
    
    if (Math.abs(angleDiff) > 3) {
      dragHasMoved.current = true;
    }
    
    setRotationOffset(dragStartRotation.current + angleDiff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragHasMoved.current) {
      const anglePerClub = 360 / TOTAL_CLUBS;
      const normalizedRotation = -rotationOffset;
      const estimatedIndex = Math.round(normalizedRotation / anglePerClub);
      selectIndex(estimatedIndex);
    }
  };

  const bgColor = selectedClub ? (BACKGROUND_COLORS[selectedClub.id] || selectedClub.bgCard) : "#EFE4D2";
  const radius = isMobile ? 150 : 290;

  return (
    <section
      id="clubs"
      ref={sectionRef}
      onWheel={handleWheel}
      className="relative min-h-screen py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#20232C] overflow-hidden transition-colors duration-700 ease-in-out select-none"
      style={{ backgroundColor: bgColor }}
    >
      <div className="absolute inset-0 poster-texture pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-[85vh] gap-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9A441] border-2 border-[#20232C] rounded-lg neo-shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-[#20232C]" />
            <span className="text-xs font-black uppercase text-[#20232C] tracking-wider">
              COMMUNITY DIRECTORY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-heading font-black text-[#20232C] tracking-tight leading-tight mb-2">
            Choose Your Community
          </h2>
          {/* Subtle instruction helper text placed right under the main heading */}
          <p className="text-[10px] md:text-xs font-bold text-[#A74C22]/70 uppercase tracking-widest pointer-events-none">
            Drag to Rotate • Scroll to Cycle
          </p>
        </div>

        {/* Wheel & Center Interactive Arena */}
        <div 
          ref={wheelRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          className="relative flex items-center justify-center w-full max-w-[750px] aspect-square cursor-grab active:cursor-grabbing"
        >
          {/* Dashed Orbit Ring */}
          <motion.div
            style={{ width: radius * 2, height: radius * 2 }}
            animate={{ rotate: isDragging ? rotationOffset : rotationOffset + 360 }}
            transition={isDragging ? { type: "spring", damping: 30 } : { repeat: Infinity, duration: 80, ease: "linear" }}
            className="absolute rounded-full border-[3.5px] border-dashed border-[#20232C]/30 pointer-events-none"
          />

          {/* Wheel Orbit containing the clubs */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: rotationOffset }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}
          >
            {CLUBS_DATA.map((club, index) => {
              const angle = index * ANGLE_STEP;
              const angleRad = (angle * Math.PI) / 180;
              
              const x = radius * Math.sin(angleRad);
              const y = -radius * Math.cos(angleRad);

              const isSelected = selectedClub?.id === club.id;
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              let opacity = 1;
              if (isAnyHovered && !isHovered) opacity = 0.4;

              return (
                <motion.div
                  key={club.id}
                  className="absolute"
                  style={{ x, y }}
                >
                  <motion.div
                    animate={{ 
                      rotate: -rotationOffset, // Counter-rotate node content to stay upright
                      scale: isHovered ? 1.4 : isSelected ? 1.15 : 1,
                      z: isHovered ? 50 : 0
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="relative pointer-events-auto"
                    onMouseEnter={() => !isDragging && setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ opacity }}
                  >
                    <button
                      onClick={() => selectIndex(index)}
                      className={`
                        flex flex-col items-center justify-center gap-1.5 
                        w-20 h-20 md:w-28 md:h-28 rounded-full 
                        border-[3px] border-[#20232C] bg-[#F5EAD8]
                        transition-all duration-300
                        ${isSelected ? 'shadow-[8px_8px_0px_0px_#20232C] border-b-4' : 'neo-shadow-sm'}
                      `}
                      style={{
                        backgroundColor: isSelected ? club.badgeBg : "#F5EAD8",
                      }}
                    >
                      {/* Emblem */}
                      <div className="scale-75 md:scale-95 flex items-center justify-center transition-transform">
                        {getClubEmblem(club.id)}
                      </div>

                      {/* Dot symbol indicator & label */}
                      <span className={`
                        text-[8px] md:text-[10px] font-black uppercase px-2 py-0.5 rounded border-2 flex items-center gap-1
                        ${isSelected ? 'border-transparent text-[#F5EAD8] bg-[#20232C]' : 'border-[#20232C] text-[#20232C] bg-white'}
                      `}>
                        <span>{isHovered || isSelected ? '◉' : '○'}</span>
                        <span>{club.name.split(' ')[0]}</span>
                      </span>
                    </button>

                    {/* Continuous outline rotation when hovered */}
                    {isHovered && (
                      <motion.div 
                        className="absolute inset-[-6px] rounded-full border-2 border-dashed border-[#C86B1F]"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Central Hub Area */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-[260px] h-[260px] md:w-[410px] md:h-[410px] rounded-full flex flex-col items-center justify-center text-center p-6 md:p-10 bg-[#F5EAD8] border-4 border-[#20232C] shadow-[12px_12px_0px_0px_#20232C] pointer-events-auto overflow-hidden relative">
              
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-dotted border-[#20232C]/10 pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              />

              <AnimatePresence mode="wait">
                {!selectedClub ? (
                  <motion.div
                    key="default-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#20232C] text-[#EFE4D2] rounded-2xl rotate-3 flex items-center justify-center font-serif-heading font-black text-3xl md:text-5xl border-4 border-[#C86B1F] shadow-[4px_4px_0px_0px_#A74C22]">
                      B
                    </div>
                    <div>
                      <h3 className="text-xl md:text-3xl font-black text-[#20232C] font-serif-heading tracking-tight uppercase leading-tight">
                        One Community.
                      </h3>
                      <p className="text-sm md:text-lg font-bold text-[#A74C22]">
                        Seven Paths.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={selectedClub.id}
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -15 }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    className="flex flex-col items-center w-full h-full justify-between py-2"
                  >
                    <div className="flex flex-col items-center">
                      <div className="scale-75 md:scale-95 -mb-2 md:mb-1.5">
                        {getClubEmblem(selectedClub.id)}
                      </div>
                      <h3 className="text-lg md:text-2xl font-black text-[#20232C] font-serif-heading leading-tight mb-1 text-balance">
                        {selectedClub.name}
                      </h3>
                      <p className="text-[10px] md:text-xs font-bold text-[#A74C22] uppercase tracking-wide">
                        {selectedClub.tagline}
                      </p>
                    </div>

                    <p className="text-[9.5px] md:text-sm font-semibold text-[#20232C]/90 line-clamp-2 md:line-clamp-3 px-4 leading-relaxed">
                      {selectedClub.description}
                    </p>

                    <div className="flex gap-2 text-[8px] md:text-[10px] font-black uppercase bg-[#F5EAD8] border-2 border-[#20232C] text-[#20232C] px-3 py-1 rounded-lg neo-shadow-sm">
                      <span>{selectedClub.stats.members} Mem</span>
                      <span className="text-[#C86B1F]">•</span>
                      <span>{selectedClub.stats.events} Evt</span>
                      <span className="text-[#C86B1F]">•</span>
                      <span>{selectedClub.stats.founded}</span>
                    </div>

                    <div className="flex items-center gap-2 w-full justify-center px-2 md:px-4">
                      <div className="flex gap-1">
                        <a href={selectedClub.website} target="_blank" rel="noreferrer" className="w-7 h-7 bg-white border-2 border-[#20232C] rounded-lg flex items-center justify-center neo-shadow-sm hover:bg-[#C86B1F] hover:text-white transition-colors">
                          <Globe className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </a>
                        <a href={selectedClub.instagram} target="_blank" rel="noreferrer" className="w-7 h-7 bg-white border-2 border-[#20232C] rounded-lg flex items-center justify-center neo-shadow-sm hover:bg-[#C86B1F] hover:text-white transition-colors">
                          <InstagramIcon className="w-3.5 h-3.5" />
                        </a>
                        <a href={selectedClub.linkedin} target="_blank" rel="noreferrer" className="w-7 h-7 bg-white border-2 border-[#20232C] rounded-lg flex items-center justify-center neo-shadow-sm hover:bg-[#C86B1F] hover:text-white transition-colors">
                          <LinkedinIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <button
                        onClick={() => setModalClub(selectedClub)}
                        className="flex-1 bg-[#20232C] text-[#F5EAD8] border-2 border-[#20232C] font-black uppercase text-[9px] md:text-[10px] py-1.5 rounded-lg hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C86B1F] transition-all flex items-center justify-center gap-1"
                      >
                        <Eye className="w-3 h-3" /> Details
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer Navigation Dots & Prev/Next */}
        <div className="flex flex-col items-center gap-4 z-20">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => selectIndex(getSelectedIdx() - 1)}
              className="w-10 h-10 bg-white border-2 border-[#20232C] rounded-xl flex items-center justify-center neo-shadow-sm hover:-translate-y-1 hover:bg-[#C86B1F] hover:text-white transition-all active:translate-y-0"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            <div className="flex gap-2.5">
              {CLUBS_DATA.map((_, idx) => {
                const isActive = getSelectedIdx() === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => selectIndex(idx)}
                    className={`w-3.5 h-3.5 rounded-full border-2 border-[#20232C] transition-all duration-300 ${
                      isActive ? 'bg-[#C86B1F] scale-125 shadow-sm' : 'bg-white hover:bg-[#C86B1F]/30'
                    }`}
                  />
                );
              })}
            </div>

            <button 
              onClick={() => selectIndex(getSelectedIdx() + 1)}
              className="w-10 h-10 bg-white border-2 border-[#20232C] rounded-xl flex items-center justify-center neo-shadow-sm hover:-translate-y-1 hover:bg-[#C86B1F] hover:text-white transition-all active:translate-y-0"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>

      <ClubModal club={modalClub} onClose={() => setModalClub(null)} />
    </section>
  );
}
