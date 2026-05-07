"use client";

import { useState } from "react";

const tabs = [
  { key: "po", label: "Pondělí" },
  { key: "st", label: "Středa" },
  { key: "pa", label: "Pátek" },
  { key: "so", label: "Sobota" },
];

type Badge = "rec" | "adv" | "elite";

interface ClassEntry {
  time: string;
  name: string;
  sub: string;
  badge: Badge;
}

const schedule: Record<string, ClassEntry[]> = {
  po: [
    { time: "15:30", name: "Hvězdičky", sub: "3–5 let · Rekreační", badge: "rec" },
    { time: "17:00", name: "Záříci – Tanec", sub: "6–9 let · Výkonnostní", badge: "adv" },
  ],
  st: [
    { time: "15:30", name: "Tanec Beginners", sub: "4–8 let · Rekreační", badge: "rec" },
    { time: "17:00", name: "Komety – Gym", sub: "10–14 let · Elite", badge: "elite" },
    { time: "18:30", name: "Fitness Freestyle", sub: "6–14 let · Výkonnostní", badge: "adv" },
  ],
  pa: [
    { time: "16:00", name: "Záříci – Gym", sub: "6–9 let · Rekreační", badge: "rec" },
    { time: "17:30", name: "Akrobacie & Parkour", sub: "8–14 let · Elite", badge: "elite" },
  ],
  so: [
    { time: "10:00", name: "Hvězdičky – Sobotní", sub: "3–5 let · Rekreační", badge: "rec" },
    { time: "11:30", name: "Otevřený trénink", sub: "6–14 let · Všechny skupiny", badge: "adv" },
  ],
};

const badgeStyle: Record<Badge, { bg: string; color: string; label: string }> = {
  rec: { bg: "rgba(6,255,165,0.10)", color: "#06ffa5", label: "Rekreační" },
  adv: { bg: "rgba(255,209,102,0.12)", color: "#ffd166", label: "Výkonnostní" },
  elite: { bg: "rgba(108,99,255,0.12)", color: "#6c63ff", label: "Elite" },
};

export default function Schedule() {
  const [active, setActive] = useState("po");
  const entries = schedule[active];

  return (
    <section id="rozvrh" className="relative z-10 py-28 bg-[#0a091a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <header className="text-center mb-16">
          <span className="inline-block text-[11px] font-medium tracking-[2.5px] uppercase text-[#6c63ff] mb-4 px-3 py-1.5 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/20">
            Časy tréninků
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
          >
            Tréninkový rozvrh
          </h2>
          <p className="text-base text-white/50 max-w-lg mx-auto leading-relaxed">
            Vyberte si den a zjistěte, které tréninky vašemu dítěti nejlépe vyhovují.
          </p>
        </header>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-white/10 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className="px-7 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2"
                style={{
                  color: active === t.key ? "#6c63ff" : "rgba(255,255,255,0.45)",
                  borderBottomColor: active === t.key ? "#6c63ff" : "transparent",
                  background: active === t.key ? "rgba(108,99,255,0.06)" : "transparent",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Entries */}
          <div className="p-6 md:p-8 space-y-2">
            {entries.map((e, i) => (
              <div
                key={i}
                className="grid grid-cols-[90px_1fr_auto] md:grid-cols-[120px_1fr_auto] items-center gap-4 md:gap-6 px-4 py-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors"
              >
                <span
                  className="text-sm font-bold"
                  style={{ fontFamily: "var(--font-unbounded, sans-serif)", color: "#6c63ff" }}
                >
                  {e.time}
                </span>
                <div>
                  <p className="text-base font-medium text-white mb-0.5">{e.name}</p>
                  <p className="text-sm text-white/45">{e.sub}</p>
                </div>
                <span
                  className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap"
                  style={{
                    background: badgeStyle[e.badge].bg,
                    color: badgeStyle[e.badge].color,
                  }}
                >
                  {badgeStyle[e.badge].label}
                </span>
              </div>
            ))}
          </div>

          <div className="px-6 md:px-8 pb-6">
            <p className="text-sm text-white/35">
              * Rozvrh platný od září 2025. Změna vyhrazena. Přesné místo tréninků sdělíme po přihlášení.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
