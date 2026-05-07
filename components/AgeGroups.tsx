const groups = [
  {
    icon: "⭐",
    name: "Hvězdičky",
    age: "3–5 let",
    color: "#ffd166",
    bg: "rgba(255,209,102,0.08)",
    border: "rgba(255,209,102,0.20)",
    description: "První krůčky ve světě pohybu. Hravé lekce plné her, rytmiky a základů koordinace pro nejmenší.",
    features: [
      "Hravá výuka pohybu",
      "Rozvoj koordinace",
      "Rytmika a tanec",
      "Socializace v kolektivu",
    ],
  },
  {
    icon: "✨",
    name: "Záříci",
    age: "6–9 let",
    color: "#6c63ff",
    bg: "rgba(108,99,255,0.10)",
    border: "rgba(108,99,255,0.25)",
    description: "Systematický rozvoj sportovních dovedností. Základy akrobacie, tance a fyzické kondice.",
    features: [
      "Základy akrobacie",
      "Sportovní kondice",
      "Choreografie a tanec",
      "Soutěžní příprava",
    ],
    featured: true,
  },
  {
    icon: "🌟",
    name: "Komety",
    age: "10–14 let",
    color: "#01c7fc",
    bg: "rgba(1,199,252,0.08)",
    border: "rgba(1,199,252,0.20)",
    description: "Pokročilý trénink pro ambiciózní sportovce. Komplexní příprava včetně závodní činnosti.",
    features: [
      "Pokročilá akrobacie",
      "Závodní příprava",
      "Fitness a kondice",
      "Mentální trénink",
    ],
  },
];

export default function AgeGroups() {
  return (
    <section id="skupiny" className="relative z-10 py-28 bg-[#07060f]">
      {/* subtle divider gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <header className="text-center mb-16">
          <span className="inline-block text-[11px] font-medium tracking-[2.5px] uppercase text-[#6c63ff] mb-4 px-3 py-1.5 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/20">
            Věkové skupiny
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
          >
            Pro každý věk
            <br />
            ta správná skupina
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            Každá skupina má svůj vlastní program přizpůsobený věku, zkušenostem a cílům dětí.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <article
              key={g.name}
              className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: g.featured
                  ? `linear-gradient(160deg, ${g.bg}, rgba(108,99,255,0.04))`
                  : g.bg,
                border: `1px solid ${g.border}`,
                boxShadow: g.featured ? "0 0 40px rgba(108,99,255,0.08)" : undefined,
              }}
            >
              {g.featured && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase text-white"
                  style={{ background: "linear-gradient(135deg, #6c63ff, #01c7fc)" }}
                >
                  Nejoblíbenější
                </div>
              )}
              <div className="p-8">
                <div className="text-4xl mb-4">{g.icon}</div>
                <div
                  className="text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-3"
                  style={{ background: `${g.color}18`, color: g.color }}
                >
                  {g.age}
                </div>
                <h3
                  className="text-2xl font-bold tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
                >
                  {g.name}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed mb-6">{g.description}</p>
                <ul className="space-y-2.5">
                  {g.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/65">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: g.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <a
                  href="#prihlaseni"
                  className="block text-center py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{
                    background: g.featured
                      ? "linear-gradient(135deg, #6c63ff, #01c7fc)"
                      : "rgba(255,255,255,0.06)",
                    color: g.featured ? "#fff" : g.color,
                    border: g.featured ? "none" : `1px solid ${g.color}30`,
                  }}
                >
                  Přihlásit do skupiny {g.name}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
