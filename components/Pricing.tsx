const plans = [
  {
    tag: "Základní",
    name: "Rekreační",
    desc: "Ideální pro začátečníky a děti, které chtějí pohyb jako zábavu.",
    price: "800",
    period: "/ měsíc",
    note: "1× trénink týdně",
    features: [
      "1 lekce týdně (60 min)",
      "Přístup na vybavení",
      "Výukové materiály",
      "Základní pojištění",
    ],
    cta: "Přihlásit dítě",
    featured: false,
    gradient: null,
  },
  {
    tag: "Doporučeno",
    name: "Výkonnostní",
    desc: "Pro děti, které to myslí vážně a chtějí rychle progresovat.",
    price: "1 100",
    period: "/ měsíc",
    note: "2× trénink týdně",
    features: [
      "2 lekce týdně (60 min)",
      "Prioritní přihlašování",
      "Přístup na vybavení",
      "Soustředění se slevou",
      "Výukové materiály",
      "Závodní pojištění",
    ],
    cta: "Přihlásit dítě",
    featured: true,
    gradient: "linear-gradient(135deg, #6c63ff, #01c7fc)",
  },
  {
    tag: "Pro elitu",
    name: "Elite",
    desc: "Komplexní příprava pro ambiciózní sportovce se závodními ambicemi.",
    price: "1 500",
    period: "/ měsíc",
    note: "3× trénink týdně",
    features: [
      "3 lekce týdně (75 min)",
      "Individuální konzultace",
      "Závodní příprava",
      "Prioritní přihlašování",
      "Soustředění zdarma",
      "Závodní pojištění",
      "Dres Ovy Stars",
    ],
    cta: "Přihlásit dítě",
    featured: false,
    gradient: null,
  },
];

export default function Pricing() {
  return (
    <section id="cenik" className="relative z-10 py-28 bg-[#07060f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <header className="text-center mb-16">
          <span className="inline-block text-[11px] font-medium tracking-[2.5px] uppercase text-[#6c63ff] mb-4 px-3 py-1.5 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/20">
            Ceník
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
          >
            Transparentní ceník
          </h2>
          <p className="text-base text-white/50 max-w-lg mx-auto leading-relaxed">
            Žádné skryté poplatky. Platba vždy za měsíc dopředu. Při delším závazku sleva.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p) => (
            <article
              key={p.name}
              className="relative rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                border: p.featured
                  ? "1px solid rgba(108,99,255,0.40)"
                  : "1px solid rgba(255,255,255,0.08)",
                background: p.featured
                  ? "linear-gradient(160deg, rgba(108,99,255,0.12), rgba(1,199,252,0.06))"
                  : "rgba(255,255,255,0.04)",
                transform: p.featured ? "scale(1.03)" : undefined,
                boxShadow: p.featured ? "0 0 60px rgba(108,99,255,0.12)" : undefined,
              }}
            >
              <div className="p-8">
                <span
                  className="inline-block text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5 text-white"
                  style={{
                    background: p.featured
                      ? "linear-gradient(135deg, #6c63ff, #01c7fc)"
                      : "rgba(255,255,255,0.10)",
                  }}
                >
                  {p.tag}
                </span>

                <h3
                  className="text-xl font-bold tracking-tight mb-2"
                  style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
                >
                  {p.name}
                </h3>
                <p className="text-sm text-white/50 mb-6 leading-relaxed">{p.desc}</p>

                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      color: p.featured ? "#6c63ff" : "#f0eeff",
                      fontFamily: "var(--font-dm-sans, sans-serif)",
                    }}
                  >
                    {p.price}
                  </span>
                  <span className="text-lg font-semibold text-white/40">Kč</span>
                  <span className="text-sm text-white/40 ml-1">{p.period}</span>
                </div>
                <p className="text-xs text-white/35 mb-8">{p.note}</p>

                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] mt-0.5"
                        style={{
                          background: p.featured
                            ? "rgba(108,99,255,0.15)"
                            : "rgba(255,255,255,0.08)",
                          color: p.featured ? "#6c63ff" : "#f0eeff",
                        }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#prihlaseni"
                  className="block w-full text-center py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: p.featured
                      ? "linear-gradient(135deg, #6c63ff, #01c7fc)"
                      : "transparent",
                    color: p.featured ? "#fff" : "#6c63ff",
                    border: p.featured ? "none" : "1.5px solid rgba(108,99,255,0.40)",
                    boxShadow: p.featured ? "0 4px 20px rgba(108,99,255,0.35)" : undefined,
                  }}
                >
                  {p.cta}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 p-6 md:p-8 rounded-2xl border border-[#ff6b9d]/20 bg-gradient-to-br from-[#ff6b9d]/8 to-[#ffd166]/5 flex items-center gap-6 flex-wrap">
          <div className="text-4xl shrink-0">👕</div>
          <div>
            <h4
              className="text-lg font-bold mb-1"
              style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
            >
              Merch Ovy Stars
            </h4>
            <p className="text-sm text-white/55 leading-relaxed">
              Dresy, trička a sportovní vybavení s logem Ovy Stars. Dostupné při přihlášení nebo
              na tréninku. Ceny od 350 Kč.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
