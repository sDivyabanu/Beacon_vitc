"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLUBS_DATA, RecruitmentStatus } from "@/data/clubs";
import { Clock, ArrowUpRight, CheckCircle, AlertCircle, HelpCircle, Calendar } from "lucide-react";
import { getClubEmblem } from "./ClubEmblems";

export default function RecruitmentSection() {
  const [filter, setFilter] = useState<"All" | RecruitmentStatus>("All");
  const [expandedClubId, setExpandedClubId] = useState<string | null>(null);

  const filteredClubs = CLUBS_DATA.filter((club) => {
    if (filter === "All") return true;
    return club.status === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedClubId(prev => prev === id ? null : id);
  };

  return (
    <section id="recruitments" className="relative bg-[#F5EAD8] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#20232C]">
      {/* Background Poster Dots */}
      <div className="absolute inset-0 poster-texture pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C86B1F] text-[#F5EAD8] border-2 border-[#20232C] rounded-lg neo-shadow-sm mb-4">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-wider">
                JOIN THE MOVEMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-black text-[#20232C] tracking-tight leading-tight">
              Recruitment Board
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#EFE4D2] border-3 border-[#20232C] rounded-2xl p-1.5 neo-shadow-sm">
            {(["All", "Open", "Coming Soon", "Closed"] as const).map((status) => {
              const count =
                status === "All"
                  ? CLUBS_DATA.length
                  : CLUBS_DATA.filter((c) => c.status === status).length;

              return (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-3 py-1.5 text-[10px] md:text-xs font-black uppercase rounded-xl border-2 border-[#20232C] transition-all ${
                    filter === status
                      ? "bg-[#20232C] text-[#F5EAD8] neo-shadow-sm"
                      : "bg-[#F5EAD8] text-[#20232C] hover:bg-[#D9A441]"
                  }`}
                >
                  {status} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Recruitment Board Container */}
        <div className="border-4 border-[#20232C] bg-[#EFE4D2] rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_#20232C]">
          <div className="divide-y-3 divide-[#20232C]">
            {filteredClubs.map((club) => {
              const isExpanded = expandedClubId === club.id;
              
              // Status Styling mapping
              let statusBg = "#C86B1F";
              let statusText = "#F5EAD8";
              let statusIcon = <CheckCircle className="w-3.5 h-3.5" />;
              
              if (club.status === "Closed") {
                statusBg = "#4D627D";
                statusIcon = <AlertCircle className="w-3.5 h-3.5" />;
              } else if (club.status === "Coming Soon") {
                statusBg = "#8797A8";
                statusText = "#20232C";
                statusIcon = <HelpCircle className="w-3.5 h-3.5" />;
              }

              return (
                <div key={club.id} className="relative group transition-all duration-300">
                  {/* Row content */}
                  <div 
                    onClick={() => toggleExpand(club.id)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-6 gap-4 cursor-pointer hover:bg-[#F5EAD8]/50 transition-colors"
                  >
                    
                    {/* Left Side: Emblem + Club details */}
                    <div className="flex items-center gap-4">
                      <div className="p-1.5 bg-white border-2 border-[#20232C] rounded-xl neo-shadow-sm shrink-0 scale-90 md:scale-100">
                        {getClubEmblem(club.id)}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-serif-heading font-black text-[#20232C] leading-none mb-1">
                          {club.name}
                        </h3>
                        <p className="text-[10px] md:text-xs font-bold text-[#607D9C] uppercase tracking-wider">
                          {club.domain}
                        </p>
                      </div>
                    </div>

                    {/* Right Side: Status Badge + Toggle */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 sm:w-auto ml-auto">
                      <span
                        className="text-[10px] font-black uppercase px-3 py-1.5 rounded-lg border-2 border-[#20232C] flex items-center gap-1 neo-shadow-sm"
                        style={{ backgroundColor: statusBg, color: statusText }}
                      >
                        {statusIcon}
                        <span>{club.status}</span>
                      </span>
                      
                      <div className="text-[#20232C] font-black text-sm uppercase hidden sm:block">
                        {isExpanded ? "[ Hide ]" : "[ View ]"}
                      </div>
                    </div>

                  </div>

                  {/* Expandable detailed drawer */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden bg-[#F5EAD8]/40 border-t-2 border-dashed border-[#20232C]/30"
                      >
                        <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                          
                          {/* Left drawer: tracks list & deadline */}
                          <div className="flex-1 space-y-3">
                            {club.openRoles && club.openRoles.length > 0 && (
                              <div className="space-y-1.5">
                                <span className="text-[10px] font-black uppercase text-[#20232C] tracking-wide block">
                                  Available Recruitment Tracks:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {club.openRoles.map((role) => (
                                    <span
                                      key={role}
                                      className="text-[10px] font-extrabold px-3 py-1 bg-white border-2 border-[#20232C] rounded-lg text-[#20232C] neo-shadow-sm"
                                    >
                                      {role}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {club.recruitmentDeadline && (
                              <div className="flex items-center gap-1.5 text-xs font-bold text-[#A74C22]">
                                <Calendar className="w-4 h-4" />
                                <span>Deadline: {club.recruitmentDeadline}</span>
                              </div>
                            )}
                          </div>

                          {/* Right drawer: CTA buttons */}
                          <div className="shrink-0 flex items-center gap-3 w-full md:w-auto">
                            {club.status === "Open" ? (
                              <a
                                href={club.recruitmentFormUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full md:w-auto neo-btn bg-[#20232C] text-[#F5EAD8] px-5 py-2.5 text-xs font-black uppercase tracking-wider hover:bg-[#C86B1F] flex items-center justify-center gap-1"
                              >
                                Apply Now <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                              </a>
                            ) : (
                              <span className="w-full md:w-auto text-center bg-[#E6D8C1] text-[#20232C]/50 border-2 border-[#20232C]/30 rounded-lg px-5 py-2.5 text-xs font-black uppercase tracking-wider cursor-not-allowed">
                                Registrations Closed
                              </span>
                            )}
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
