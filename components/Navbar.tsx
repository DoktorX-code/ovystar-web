/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#discipliny", label: "Disciplíny" },
  { href: "#skupiny", label: "Skupiny" },
  { href: "#rozvrh", label: "Rozvrh" },
  { href: "#cenik", label: "Ceník" },
  { href: "#galerie", label: "Galerie" },
  { href: "#o-nas", label: "O nás" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Hlavní navigace"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#07060f]/90 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <a href="#hero" aria-label="Ovy Stars – domů" className="flex items-center gap-2 shrink-0">
          <img
            src="/logos/OVY%20stars_bi_le_.svg"
            alt="Ovy Stars"
            className="h-9 w-auto"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-[#6c63ff] to-[#01c7fc] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#prihlaseni"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#01c7fc] text-white text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#6c63ff]/40"
          >
            Přihlásit dítě
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Otevřít menu"
          className="lg:hidden flex flex-col gap-1.5 p-2 shrink-0"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#07060f]/98 backdrop-blur-xl border-b border-white/10 px-5 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#prihlaseni"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 bg-gradient-to-r from-[#6c63ff] to-[#01c7fc] text-white text-sm font-medium rounded-full text-center"
          >
            Přihlásit dítě
          </a>
        </div>
      )}
    </nav>
  );
}
