"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Globe, Calendar, Users, Award, CheckCircle2 } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { Club } from "@/data/clubs";
import { getClubEmblem } from "./ClubEmblems";

interface ClubModalProps {
  club: Club | null;
  onClose: () => void;
}

export default function ClubModal({ club, onClose }: ClubModalProps) {
  if (!club) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#20232C]/70 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#F5EAD8] border-4 border-[#20232C] rounded-[24px] neo-shadow-xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 bg-[#EFE4D2] border-3 border-[#20232C] rounded-xl flex items-center justify-center neo-shadow-sm hover:bg-[#C86B1F] hover:text-[#F5EAD8] transition-colors"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>

          {/* Modal Header */}
          <div className="flex items-start gap-4 mb-6 pr-10">
            <div className="p-2 bg-[#EFE4D2] border-3 border-[#20232C] rounded-2xl neo-shadow-sm shrink-0">
              {getClubEmblem(club.id)}
            </div>
            <div>
              <span className="text-xs font-black uppercase px-3 py-1 bg-[#D9A441] border-2 border-[#20232C] rounded-lg text-[#20232C] neo-shadow-sm inline-block mb-2">
                {club.domain}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif-heading font-black text-[#20232C]">
                {club.name}
              </h3>
              <p className="text-sm font-bold text-[#A74C22] mt-1">{club.tagline}</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-[#EFE4D2] border-3 border-[#20232C] rounded-2xl p-4 mb-6 neo-shadow-sm">
            <p className="text-base text-[#20232C] font-semibold leading-relaxed">
              {club.description}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-[#E6D8C1] border-2 border-[#20232C] rounded-xl p-3 text-center neo-shadow-sm">
              <Users className="w-4 h-4 mx-auto text-[#C86B1F] mb-1" />
              <span className="block text-xl font-black text-[#20232C]">{club.stats.members}</span>
              <span className="text-[10px] font-extrabold uppercase text-[#4D627D]">Active Members</span>
            </div>
            <div className="bg-[#8797A8]/30 border-2 border-[#20232C] rounded-xl p-3 text-center neo-shadow-sm">
              <Award className="w-4 h-4 mx-auto text-[#1C2742] mb-1" />
              <span className="block text-xl font-black text-[#20232C]">{club.stats.events}</span>
              <span className="text-[10px] font-extrabold uppercase text-[#1C2742]">Annual Events</span>
            </div>
            <div className="bg-[#D9A441]/40 border-2 border-[#20232C] rounded-xl p-3 text-center neo-shadow-sm">
              <Calendar className="w-4 h-4 mx-auto text-[#A74C22] mb-1" />
              <span className="block text-xl font-black text-[#20232C]">{club.stats.founded}</span>
              <span className="text-[10px] font-extrabold uppercase text-[#20232C]">Founded</span>
            </div>
          </div>

          {/* Open Roles & Recruitment Section */}
          {club.openRoles && club.openRoles.length > 0 && (
            <div className="mb-6 bg-[#E6D8C1] border-3 border-[#20232C] rounded-2xl p-4 neo-shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase text-[#20232C]">
                  Currently Recruiting Roles
                </span>
                <span
                  className="text-xs font-extrabold px-2.5 py-0.5 rounded-md border border-[#20232C]"
                  style={{ backgroundColor: club.statusBg, color: club.statusText }}
                >
                  Deadline: {club.recruitmentDeadline}
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {club.openRoles.map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-2 bg-[#F5EAD8] border-2 border-[#20232C] rounded-xl px-3 py-2 text-xs font-bold text-[#20232C]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C86B1F] shrink-0" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social Links & Action Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t-3 border-[#20232C]">
            <div className="flex items-center gap-2">
              <a
                href={club.website}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-[#EFE4D2] border-2 border-[#20232C] rounded-xl flex items-center justify-center neo-shadow-sm hover:bg-[#C86B1F] hover:text-[#F5EAD8] transition-colors"
                title="Official Website"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href={club.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-[#EFE4D2] border-2 border-[#20232C] rounded-xl flex items-center justify-center neo-shadow-sm hover:bg-[#C86B1F] hover:text-[#F5EAD8] transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={club.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-[#EFE4D2] border-2 border-[#20232C] rounded-xl flex items-center justify-center neo-shadow-sm hover:bg-[#C86B1F] hover:text-[#F5EAD8] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            {club.status === "Open" ? (
              <a
                href={club.recruitmentFormUrl}
                target="_blank"
                rel="noreferrer"
                className="neo-btn bg-[#C86B1F] text-[#F5EAD8] px-6 py-2.5 text-sm uppercase tracking-wide"
              >
                Apply Now <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                disabled
                className="px-5 py-2 bg-[#8797A8] border-2 border-[#20232C] rounded-xl text-xs font-black uppercase text-[#20232C] cursor-not-allowed"
              >
                {club.status === "Closed" ? "Recruitment Closed" : "Coming Soon"}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
