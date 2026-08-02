"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CLUBS_DATA, RecruitmentStatus } from "@/data/clubs";
import { Clock, ArrowUpRight, CheckCircle, AlertCircle, HelpCircle, Filter } from "lucide-react";
import { getClubEmblem } from "./ClubEmblems";

export default function RecruitmentSection() {
  const [filter, setFilter] = useState<"All" | RecruitmentStatus>("All");

  const filteredClubs = CLUBS_DATA.filter((club) => {
    if (filter === "All") return true;
    return club.status === filter;
  });

  return (
    <section id="recruitments" className="relative bg-[#F5EAD8] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-[#20232C]">
      {/* Background Poster Dots */}
      <div className="absolute inset-0 poster-texture pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C86B1F] text-[#F5EAD8] border-2 border-[#20232C] rounded-lg neo-shadow-sm mb-4">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-wider">
                JOIN THE MOVEMENT
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif-heading font-black text-[#20232C] tracking-tight leading-tight">
              Recruitment Timeline. <br />
              <span className="text-[#A74C22]">Find Your Track.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#EFE4D2] border-3 border-[#20232C] rounded-2xl p-2 neo-shadow-sm">
            <span className="text-xs font-black uppercase text-[#20232C] px-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {(["All", "Open", "Coming Soon", "Closed"] as const).map((status) => {
              const count =
                status === "All"
                  ? CLUBS_DATA.length
                  : CLUBS_DATA.filter((c) => c.status === status).length;

              return (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-3 py-1.5 text-xs font-black rounded-xl border-2 border-[#20232C] transition-all ${
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

        {/* Timeline Layout */}
        <div className="relative pl-6 md:pl-10 border-l-4 border-[#20232C] space-y-8">
          {filteredClubs.map((club, idx) => {
            // Status Colors according to rules
            // Open -> Burnt Orange (#C86B1F)
            // Closed -> Slate Blue (#4D627D)
            // Coming Soon -> Gray (#8797A8)
            let badgeBg = "#C86B1F";
            let statusIcon = <CheckCircle className="w-4 h-4 stroke-[3]" />;
            if (club.status === "Closed") {
              badgeBg = "#4D627D";
              statusIcon = <AlertCircle className="w-4 h-4 stroke-[3]" />;
            } else if (club.status === "Coming Soon") {
              badgeBg = "#8797A8";
              statusIcon = <HelpCircle className="w-4 h-4 stroke-[3]" />;
            }

            return (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Timeline Circle Bullet */}
                <div
                  className="absolute -left-[35px] md:-left-[51px] top-6 w-8 h-8 rounded-full border-3 border-[#20232C] flex items-center justify-center neo-shadow-sm"
                  style={{ backgroundColor: badgeBg }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5EAD8]" />
                </div>

                {/* Timeline Card */}
                <div className="bg-[#EFE4D2] border-4 border-[#20232C] rounded-[24px] p-6 sm:p-7 neo-shadow-lg group-hover:-translate-y-1.5 transition-transform duration-200">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Left: Club Emblem & Basic Info */}
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="p-2 bg-[#F5EAD8] border-2 border-[#20232C] rounded-2xl neo-shadow-sm shrink-0">
                        {getClubEmblem(club.id)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-2xl font-serif-heading font-black text-[#20232C]">
                            {club.name}
                          </h3>
                        </div>
                        <p className="text-xs font-bold text-[#607D9C] uppercase tracking-wider">
                          {club.domain}
                        </p>
                      </div>
                    </div>

                    {/* Right: Status Badge & Application Action */}
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Status Badge */}
                      <span
                        className="neo-btn text-xs font-black uppercase px-4 py-2 flex items-center gap-1.5 border-3"
                        style={{ backgroundColor: badgeBg, color: "#F5EAD8" }}
                      >
                        {statusIcon}
                        <span>{club.status}</span>
                      </span>

                      {/* Recruitment Button or TBA */}
                      {club.status === "Open" ? (
                        <a
                          href={club.recruitmentFormUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="neo-btn bg-[#20232C] text-[#F5EAD8] px-5 py-2 text-xs uppercase tracking-wider hover:bg-[#C86B1F]"
                        >
                          Apply Now <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                        </a>
                      ) : (
                        <span className="neo-btn bg-[#E6D8C1] text-[#20232C] px-5 py-2 text-xs uppercase tracking-wider cursor-not-allowed">
                          TBA
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Open Roles Preview */}
                  {club.openRoles && club.openRoles.length > 0 && (
                    <div className="mt-5 pt-4 border-t-2 border-[#20232C]/20 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-black uppercase text-[#20232C] mr-2">
                        Open Tracks:
                      </span>
                      {club.openRoles.map((role) => (
                        <span
                          key={role}
                          className="text-[11px] font-extrabold px-3 py-1 bg-[#F5EAD8] border-2 border-[#20232C] rounded-lg text-[#20232C] neo-shadow-sm"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
