"use client";

import { Compass, Mail, ShieldCheck, ArrowUp } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#20232C] text-[#EFE4D2] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-8 border-[#C86B1F]">
      {/* Editorial paper dots texture */}
      <div className="absolute inset-0 poster-texture pointer-events-none opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b-4 border-[#EFE4D2]/20">
          
          {/* Col 1: Brand & OSW Tagline */}
          <div className="md:col-span-6 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#C86B1F] border-3 border-[#EFE4D2] rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_#EFE4D2]">
                <Compass className="w-8 h-8 text-[#EFE4D2] animate-[spin_20s_linear_infinite]" />
              </div>
              <div>
                <h3 className="font-serif-heading text-4xl font-black tracking-tighter text-[#EFE4D2]">
                  BEACON
                </h3>
                <p className="text-[10px] font-black text-[#C86B1F] uppercase tracking-widest">
                  VIT Chennai • OSW Collaboration
                </p>
              </div>
            </div>

            <p className="text-sm text-[#EFE4D2]/80 max-w-md font-semibold leading-relaxed">
              BEACON is an official joint student initiative sanctioned by the Office of Students' Welfare, Vellore Institute of Technology, Chennai. Uniting 7 student-led communities into one collaborative ecosystem.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#EFE4D2]/10 border-2 border-[#EFE4D2]/20 rounded-xl text-xs font-extrabold text-[#EFE4D2]">
              <ShieldCheck className="w-4 h-4 text-[#C86B1F]" />
              <span>Office of Students' Welfare Endorsed</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#C86B1F] border-b-2 border-[#C86B1F]/30 pb-1">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-bold">
              <li>
                <a href="#clubs" className="hover:text-[#C86B1F] transition-colors flex items-center gap-1">
                  <span>→</span> <span>Seven Clubs Wheel</span>
                </a>
              </li>
              <li>
                <a href="#recruitments" className="hover:text-[#C86B1F] transition-colors flex items-center gap-1">
                  <span>→</span> <span>Recruitment Board</span>
                </a>
              </li>
              <li>
                <a href="https://vitchennai.ac.in" target="_blank" rel="noreferrer" className="hover:text-[#C86B1F] transition-colors flex items-center gap-1">
                  <span>→</span> <span>VIT Chennai</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#C86B1F] border-b-2 border-[#C86B1F]/30 pb-1">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 bg-[#EFE4D2] border-3 border-[#20232C] rounded-xl flex items-center justify-center hover:bg-[#C86B1F] text-[#20232C] hover:text-[#EFE4D2] shadow-[3px_3px_0px_0px_#C86B1F] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 stroke-[2.5]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 bg-[#EFE4D2] border-3 border-[#20232C] rounded-xl flex items-center justify-center hover:bg-[#C86B1F] text-[#20232C] hover:text-[#EFE4D2] shadow-[3px_3px_0px_0px_#C86B1F] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 stroke-[2.5]" />
              </a>
              <a
                href="mailto:beacon@vitchennai.ac.in"
                className="w-11 h-11 bg-[#EFE4D2] border-3 border-[#20232C] rounded-xl flex items-center justify-center hover:bg-[#C86B1F] text-[#20232C] hover:text-[#EFE4D2] shadow-[3px_3px_0px_0px_#C86B1F] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 stroke-[2.5]" />
              </a>
            </div>

            {/* Neo-brutalist graphic block decoration */}
            <div className="pt-2 flex gap-1.5 bg-[#EFE4D2]/5 p-2 rounded-xl border border-[#EFE4D2]/10 max-w-[120px] justify-center">
              <div className="w-3 h-3 bg-[#C86B1F] rounded-full" />
              <div className="w-3 h-3 bg-[#EFE4D2] rotate-45" />
              <div className="w-5 h-3 bg-[#EFE4D2]/30 rounded-sm" />
            </div>
          </div>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#EFE4D2]/60">
          <p>
            © {new Date().getFullYear()} BEACON Collaborative • Vellore Institute of Technology, Chennai.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-[#EFE4D2] text-[#20232C] border-2 border-[#20232C] px-4 py-2 rounded-xl hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#C86B1F] active:translate-y-0 active:shadow-none transition-all shadow-sm font-black uppercase text-[10px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
