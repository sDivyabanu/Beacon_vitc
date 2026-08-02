"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, ArrowUpRight, Sparkles, Eye } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { CLUBS_DATA, Club } from "@/data/clubs";
import { getClubEmblem } from "./ClubEmblems";
import ClubModal from "./ClubModal";

export default function ClubsSection() {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  return (
    <section id="clubs" className="relative bg-[#EFE4D2] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-[#20232C]">
      {/* Background Poster Dots */}
      <div className="absolute inset-0 poster-texture pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9A441] border-2 border-[#20232C] rounded-lg neo-shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-[#20232C]" />
              <span className="text-xs font-black uppercase text-[#20232C] tracking-wider">
                COMMUNITY DIRECTORY
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif-heading font-black text-[#20232C] tracking-tight leading-tight">
              Seven Clubs. <br />
              <span className="text-[#C86B1F]">Infinite Possibilities.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg font-bold text-[#4D627D] max-w-md">
            Each club brings a distinct discipline to the BEACON collective. Explore their domains, flagships, and active recruitment tracks.
          </p>
        </div>

        {/* 7 Neo-Brutalist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLUBS_DATA.map((club, index) => {
            const rotationClass =
              index % 3 === 0
                ? "-rotate-1"
                : index % 3 === 1
                ? "rotate-1"
                : "-rotate-[0.5deg]";

            return (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                style={{ backgroundColor: club.bgCard }}
                className={`neo-card flex flex-col justify-between p-6 sm:p-7 ${rotationClass} hover:rotate-0 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#20232C] transition-all duration-200 group`}
              >
                <div>
                  {/* Card Header: Emblem & Domain Tag */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="p-2.5 bg-[#F5EAD8] border-3 border-[#20232C] rounded-2xl neo-shadow-sm group-hover:scale-105 transition-transform duration-200">
                      {getClubEmblem(club.id)}
                    </div>
                    <span
                      className="text-[11px] font-black uppercase px-3 py-1 rounded-lg border-2 border-[#20232C] neo-shadow-sm"
                      style={{ backgroundColor: club.badgeBg, color: club.badgeText }}
                    >
                      {club.domain}
                    </span>
                  </div>

                  {/* Club Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-serif-heading font-black text-[#20232C] mb-2 leading-tight">
                    {club.name}
                  </h3>
                  <p className="text-sm font-bold text-[#A74C22] mb-3">
                    {club.tagline}
                  </p>

                  {/* One-Line Description */}
                  <p className="text-sm font-semibold text-[#20232C]/90 leading-relaxed mb-6">
                    {club.description}
                  </p>
                </div>

                <div>
                  {/* Stats Pill Ticker */}
                  <div className="flex items-center justify-between text-xs font-extrabold px-3 py-2 bg-[#F5EAD8]/80 border-2 border-[#20232C] rounded-xl mb-5 neo-shadow-sm">
                    <span className="text-[#20232C]">{club.stats.members} Members</span>
                    <span className="text-[#4D627D]">•</span>
                    <span className="text-[#20232C]">{club.stats.events} Events</span>
                    <span className="text-[#4D627D]">•</span>
                    <span className="text-[#A74C22]">Est. {club.stats.founded}</span>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="flex items-center justify-between gap-2 pt-2 border-t-3 border-[#20232C]/30">
                    {/* Social Buttons */}
                    <div className="flex items-center gap-1.5">
                      <a
                        href={club.website}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 bg-[#F5EAD8] border-2 border-[#20232C] rounded-xl flex items-center justify-center neo-shadow-sm hover:bg-[#C86B1F] hover:text-[#F5EAD8] transition-colors"
                        title="Official Website"
                        aria-label={`${club.name} Website`}
                      >
                        <Globe className="w-4 h-4 stroke-[2.5]" />
                      </a>
                      <a
                        href={club.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 bg-[#F5EAD8] border-2 border-[#20232C] rounded-xl flex items-center justify-center neo-shadow-sm hover:bg-[#C86B1F] hover:text-[#F5EAD8] transition-colors"
                        title="Instagram"
                        aria-label={`${club.name} Instagram`}
                      >
                        <InstagramIcon className="w-4 h-4 stroke-[2.5]" />
                      </a>
                      <a
                        href={club.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 bg-[#F5EAD8] border-2 border-[#20232C] rounded-xl flex items-center justify-center neo-shadow-sm hover:bg-[#C86B1F] hover:text-[#F5EAD8] transition-colors"
                        title="LinkedIn"
                        aria-label={`${club.name} LinkedIn`}
                      >
                        <LinkedinIcon className="w-4 h-4 stroke-[2.5]" />
                      </a>
                    </div>

                    {/* View Details Modal Trigger */}
                    <button
                      onClick={() => setSelectedClub(club)}
                      className="neo-btn bg-[#F5EAD8] text-[#20232C] px-3.5 py-1.5 text-xs uppercase tracking-wide hover:bg-[#C86B1F] hover:text-[#F5EAD8]"
                    >
                      <Eye className="w-3.5 h-3.5" /> Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal View */}
      <ClubModal club={selectedClub} onClose={() => setSelectedClub(null)} />
    </section>
  );
}
