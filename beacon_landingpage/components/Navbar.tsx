"use client";

import { useState } from "react";
import { Compass, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Clubs", href: "#clubs" },
    { name: "Recruitments", href: "#recruitments" },
    { name: "Collaboration", href: "#collaboration" },
    { name: "Office of Students' Welfare", href: "#osw" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#EFE4D2] border-b-4 border-[#20232C] px-4 lg:px-8 py-3.5 shadow-[0_4px_0_0_#20232C]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & University Tag */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-[#C86B1F] border-3 border-[#20232C] rounded-xl flex items-center justify-center neo-shadow-sm group-hover:rotate-6 transition-transform duration-200">
            <Compass className="w-6 h-6 text-[#F5EAD8]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif-heading text-2xl font-black tracking-wider text-[#20232C]">
                BEACON
              </span>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-[#D9A441] border-2 border-[#20232C] rounded-md text-[#20232C] neo-shadow-sm hidden sm:inline-block">
                VIT Chennai
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#4D627D] tracking-tight -mt-0.5 hidden md:block">
              Collaborative Student Initiative
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F5EAD8] border-3 border-[#20232C] rounded-2xl px-3 py-1.5 neo-shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 font-bold text-sm text-[#20232C] hover:bg-[#C86B1F] hover:text-[#F5EAD8] rounded-xl transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action & OSW Endorsement */}
        <div className="hidden md:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 bg-[#8797A8]/20 border-2 border-[#20232C] rounded-xl text-xs font-bold text-[#1C2742]">
            <ShieldCheck className="w-4 h-4 text-[#A74C22]" />
            <span>OSW Approved</span>
          </div>
          <a
            href="#recruitments"
            className="neo-btn bg-[#C86B1F] text-[#F5EAD8] px-5 py-2 text-sm uppercase tracking-wide hover:bg-[#A74C22]"
          >
            Apply Now <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-11 h-11 bg-[#F5EAD8] border-3 border-[#20232C] rounded-xl flex items-center justify-center neo-shadow-sm active:translate-y-0.5"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#20232C]" />
          ) : (
            <Menu className="w-6 h-6 text-[#20232C]" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 pb-4 border-t-3 border-[#20232C] flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 font-extrabold text-base text-[#20232C] bg-[#F5EAD8] border-2 border-[#20232C] rounded-xl neo-shadow-sm hover:bg-[#C86B1F] hover:text-[#F5EAD8]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#recruitments"
            onClick={() => setMobileMenuOpen(false)}
            className="neo-btn bg-[#C86B1F] text-[#F5EAD8] py-3 text-center text-sm uppercase tracking-wide mt-2"
          >
            Apply for Recruitments
          </a>
        </div>
      )}
    </header>
  );
}
