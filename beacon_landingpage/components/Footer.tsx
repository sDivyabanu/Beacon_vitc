"use me";

import { Compass, Mail, ShieldCheck, Heart, ArrowUp } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="relative bg-[#1C2742] text-[#F5EAD8] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-4 border-[#20232C]">
      <div className="max-w-6xl mx-auto">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b-2 border-[#8797A8]/30">
          {/* Col 1: Brand & OSW Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#C86B1F] border-3 border-[#20232C] rounded-2xl flex items-center justify-center neo-shadow-sm">
                <Compass className="w-7 h-7 text-[#F5EAD8]" />
              </div>
              <div>
                <h3 className="font-serif-heading text-3xl font-black tracking-wider text-[#F5EAD8]">
                  BEACON
                </h3>
                <p className="text-xs font-bold text-[#D9A441] tracking-wide">
                  VIT CHENNAI • OSW COLLABORATION
                </p>
              </div>
            </div>

            <p className="text-sm text-[#8797A8] max-w-md font-semibold leading-relaxed">
              BEACON is an official joint student initiative sanctioned by the Office of Students' Welfare, Vellore Institute of Technology, Chennai. Uniting 7 student-led communities into one collaborative ecosystem.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4D627D]/40 border-2 border-[#8797A8]/40 rounded-xl text-xs font-extrabold text-[#F5EAD8]">
              <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
              <span>Office of Students' Welfare (OSW) Endorsed</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#D9A441]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm font-bold">
              <li>
                <a href="#clubs" className="hover:text-[#C86B1F] transition-colors">
                  Seven Clubs Directory
                </a>
              </li>
              <li>
                <a href="#recruitments" className="hover:text-[#C86B1F] transition-colors">
                  Recruitment Timeline
                </a>
              </li>
              <li>
                <a href="#collaboration" className="hover:text-[#C86B1F] transition-colors">
                  Inter-Club Synthesis
                </a>
              </li>
              <li>
                <a href="https://vitchennai.ac.in" target="_blank" rel="noreferrer" className="hover:text-[#C86B1F] transition-colors">
                  VIT Chennai Official Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#D9A441]">
              Connect With BEACON
            </h4>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-[#20232C] border-2 border-[#8797A8] rounded-xl flex items-center justify-center hover:bg-[#C86B1F] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 text-[#F5EAD8]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-[#20232C] border-2 border-[#8797A8] rounded-xl flex items-center justify-center hover:bg-[#C86B1F] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 text-[#F5EAD8]" />
              </a>
              <a
                href="mailto:beacon@vitchennai.ac.in"
                className="w-10 h-10 bg-[#20232C] border-2 border-[#8797A8] rounded-xl flex items-center justify-center hover:bg-[#C86B1F] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-[#F5EAD8]" />
              </a>
            </div>

            {/* Geometric Decoration graphic */}
            <div className="pt-2">
              <svg className="w-32 h-8 text-[#C86B1F]" viewBox="0 0 120 30" fill="none">
                <circle cx="15" cy="15" r="10" fill="currentColor" />
                <rect x="35" y="5" width="20" height="20" rx="4" fill="#D9A441" />
                <polygon points="75,5 90,25 60,25" fill="#4D627D" />
                <line x1="95" y1="15" x2="115" y2="15" stroke="#F5EAD8" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#8797A8]">
          <p>
            © {new Date().getFullYear()} BEACON Collaborative • Vellore Institute of Technology, Chennai.
          </p>
          <a
            href="#"
            className="flex items-center gap-1 text-[#F5EAD8] hover:text-[#C86B1F] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
