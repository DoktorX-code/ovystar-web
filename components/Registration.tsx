"use client";

import { useState, FormEvent } from "react";

const kroužky = [
  "Hvězdičky – Rekreační (3–5 let)",
  "Záříci – Gymnistika (6–9 let)",
  "Záříci – Tanec (6–9 let)",
  "Komety – Elite (10–14 let)",
  "Fitness Freestyle (6–14 let)",
  "Nevím – poraďte mi",
];

export default function Registration() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="prihlaseni" className="relative z-10 py-28 bg-[#07060f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#6c63ff]/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <header className="text-center mb-16">
          <span className="inline-block text-[11px] font-medium tracking-[2.5px] uppercase text-[#6c63ff] mb-4 px-3 py-1.5 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/20">
            Přihlášení
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
          >
            Přihlaste své dítě
          </h2>
          <p className="text-base text-white/50 max-w-lg mx-auto leading-relaxed">
            Vyplňte formulář a my se vám ozveme do 24 hodin s detaily nástupu.
          </p>
        </header>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Steps info */}
          <aside className="lg:col-span-2 space-y-4">
            <h3
              className="text-2xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
            >
              Jak to funguje?
            </h3>
            {[
              {
                step: "1",
                title: "Vyplňte formulář",
                desc: "Stačí základní informace o dítěti a vašem kontaktu.",
              },
              {
                step: "2",
                title: "Ozveme se do 24h",
                desc: "Domluvíme se na termínu zkušební hodiny zdarma.",
              },
              {
                step: "3",
                title: "Zkušební hodina",
                desc: "Dítě si to vyzkouší a rozhodne, zda chce pokračovat.",
              },
              {
                step: "4",
                title: "Nastoupí do skupiny",
                desc: "Vše zařídíme — rozvrh, platba, vybavení.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: "linear-gradient(135deg, #6c63ff, #01c7fc)" }}
                >
                  {s.step}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-0.5">{s.title}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 p-5 rounded-2xl bg-[#06ffa5]/8 border border-[#06ffa5]/20">
              <p className="text-sm text-[#06ffa5] font-semibold mb-1">
                🎉 Prvních 10 přihlášek — zkušební hodina zdarma!
              </p>
              <p className="text-xs text-white/50">Neváhejte a přihlaste se ještě dnes.</p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">🌟</div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
                >
                  Přihláška odeslána!
                </h3>
                <p className="text-white/55 leading-relaxed max-w-sm mx-auto">
                  Díky za zájem! Ozveme se do 24 hodin s termínem zkušební hodiny. 🤸
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2">
                      Jméno dítěte *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jana Nováková"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-[#6c63ff]/60 focus:ring-2 focus:ring-[#6c63ff]/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2">
                      Datum narození *
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm outline-none focus:border-[#6c63ff]/60 focus:ring-2 focus:ring-[#6c63ff]/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2">
                    Zájem o kroužek *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm outline-none focus:border-[#6c63ff]/60 focus:ring-2 focus:ring-[#6c63ff]/15 transition-all appearance-none"
                  >
                    <option value="" className="bg-[#07060f]">
                      Vyberte kroužek…
                    </option>
                    {kroužky.map((k) => (
                      <option key={k} value={k} className="bg-[#07060f]">
                        {k}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2">
                      Jméno rodiče / zákonného zástupce *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Petr Novák"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-[#6c63ff]/60 focus:ring-2 focus:ring-[#6c63ff]/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2">
                      Telefon *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+420 777 000 000"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-[#6c63ff]/60 focus:ring-2 focus:ring-[#6c63ff]/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2">
                    E-mail *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="petr.novak@email.cz"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-[#6c63ff]/60 focus:ring-2 focus:ring-[#6c63ff]/15 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2">
                    Zpráva (nepovinné)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Máte dotazy nebo speciální požadavky? Napište nám…"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-[#6c63ff]/60 focus:ring-2 focus:ring-[#6c63ff]/15 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-white font-medium text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#6c63ff]/40"
                  style={{ background: "linear-gradient(135deg, #6c63ff, #01c7fc)" }}
                >
                  Odeslat přihlášku
                </button>
                <p className="text-center text-xs text-white/30">
                  Odesláním souhlasíte se zpracováním osobních údajů dle GDPR.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
