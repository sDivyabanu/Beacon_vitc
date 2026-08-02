"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles, Users, Award, Calendar, Layers } from "lucide-react";
import GeometricBackground from "./GeometricBackground";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F5EAD8] pt-12 pb-20 md:pt-20 md:pb-28 px-4 sm:px-6 lg:px-8 border-b-4 border-[#20232C] overflow-hidden">
      {/* Abstract Poster Geometric Background */}
      <GeometricBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Movement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E6D8C1] border-3 border-[#20232C] rounded-full neo-shadow-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#C86B1F]" />
          <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#1C2742]">
            VIT CHENNAI • OFFICE OF STUDENTS' WELFARE
          </span>
        </motion.div>

        {/* Hero Headline Stack */}
        <div className="flex flex-col gap-2 md:gap-4 mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#20232C] leading-[0.95]"
          >
            YOUR JOURNEY. <br />
            <span className="text-[#C86B1F]">YOUR CHOICES.</span>
          </motion.h1>

          {/* Large Serif Title "BEACON" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="my-4 flex flex-wrap items-center gap-4"
          >
            <div className="inline-block bg-[#EFE4D2] border-4 border-[#20232C] rounded-[24px] px-6 sm:px-10 py-2 sm:py-4 neo-shadow-lg -rotate-1">
              <span className="font-serif-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#1C2742] tracking-wider">
                BEACON
              </span>
            </div>
            <div className="bg-[#D9A441] border-3 border-[#20232C] rounded-2xl px-4 py-2 neo-shadow-sm rotate-2 hidden sm:block">
              <p className="font-extrabold text-xs text-[#20232C] uppercase tracking-widest">
                7 Clubs • 1 Vision
              </p>
            </div>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#4D627D] max-w-2xl mt-2 leading-relaxed"
          >
            Discover seven communities. <br />
            <span className="text-[#A74C22] underline decoration-[#D9A441] decoration-4 underline-offset-6">
              One place to begin.
            </span>
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 mb-16"
        >
          {/* Primary CTA */}
          <a
            href="#clubs"
            className="neo-btn bg-[#C86B1F] text-[#F5EAD8] px-8 py-4 text-lg uppercase tracking-wider hover:bg-[#A74C22]"
          >
            Explore Clubs <ArrowDownRight className="w-5 h-5 stroke-[3]" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#recruitments"
            className="neo-btn bg-[#E6D8C1] text-[#20232C] px-8 py-4 text-lg uppercase tracking-wider hover:bg-[#D9A441]"
          >
            Recruitments
          </a>
        </motion.div>

        {/* University Movement Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          <div className="bg-[#EFE4D2] border-3 border-[#20232C] rounded-2xl p-4 neo-shadow-sm -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 text-[#C86B1F] mb-1">
              <Layers className="w-5 h-5" />
              <span className="text-xs font-black uppercase">Communities</span>
            </div>
            <p className="text-3xl font-black text-[#20232C]">7 Active</p>
            <p className="text-xs font-bold text-[#607D9C] mt-1">Tech, Design & Culture</p>
          </div>

          <div className="bg-[#8797A8] border-3 border-[#20232C] rounded-2xl p-4 neo-shadow-sm rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 text-[#1C2742] mb-1">
              <Users className="w-5 h-5" />
              <span className="text-xs font-black uppercase">Members</span>
            </div>
            <p className="text-3xl font-black text-[#20232C]">1,000+</p>
            <p className="text-xs font-bold text-[#1C2742] mt-1">Student Builders</p>
          </div>

          <div className="bg-[#E6D8C1] border-3 border-[#20232C] rounded-2xl p-4 neo-shadow-sm -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 text-[#A74C22] mb-1">
              <Calendar className="w-5 h-5" />
              <span className="text-xs font-black uppercase">Flagships</span>
            </div>
            <p className="text-3xl font-black text-[#20232C]">140+ Annual</p>
            <p className="text-xs font-bold text-[#607D9C] mt-1">Workshops & Hackathons</p>
          </div>

          <div className="bg-[#D9A441] border-3 border-[#20232C] rounded-2xl p-4 neo-shadow-sm rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 text-[#20232C] mb-1">
              <Award className="w-5 h-5" />
              <span className="text-xs font-black uppercase">OSW Initiative</span>
            </div>
            <p className="text-3xl font-black text-[#20232C]">1 Vision</p>
            <p className="text-xs font-bold text-[#20232C] mt-1">VIT Chennai Campus</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
