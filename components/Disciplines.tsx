/* eslint-disable @next/next/no-img-element */
const disciplines = [
  {
    id: "gym",
    icon: "🤸",
    name: "Gymnastika",
    age: "3–14 let",
    gradient: "from-[#6c63ff] to-[#ff6b9d]",
    topBar: "linear-gradient(90deg, #6c63ff, #ff6b9d)",
    iconBg: "rgba(108,99,255,0.12)",
    ageBg: "rgba(108,99,255,0.10)",
    ageColor: "#6c63ff",
    description:
      "Základy koordinace, rovnováhy a síly pro nejmenší, postupná akrobacie a artistická gymnastika pro pokročilé. Rozvíjíme disciplínu i sebevědomí.",
    logo: "/logos/gymnastka_zdroj.svg",
  },
  {
    id: "dance",
    icon: "💃",
    name: "Tanec",
    age: "4–14 let",
    gradient: "from-[#ff6b9d] to-[#ffd166]",
    topBar: "linear-gradient(90deg, #ff6b9d, #ffd166)",
    iconBg: "rgba(255,107,157,0.12)",
    ageBg: "rgba(255,107,157,0.10)",
    ageColor: "#ff6b9d",
    description:
      "Street dance, moderní choreografie a rytmika. Rozvíjíme kreativitu, hudební cit a radost z pohybu v bezpečné a inspirativní atmosféře.",
    logo: "/logos/tanec_nice_zdroj.svg",
  },
];

const freestyleFeatures = [
  { icon: "🔄", text: "Akrobacie" },
  { icon: "🏃", text: "Parkour elementy" },
  { icon: "💪", text: "Funkční síla" },
  { icon: "🤝", text: "Týmová spolupráce" },
];

function SectionEyebrow({ text }: { text: string }) {
  return (
    <span className="inline-block text-[11px] font-medium tracking-[2.5px] uppercase text-[#6c63ff] mb-4 px-3 py-1.5 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/20">
      {text}
    </span>
  );
}

export default function Disciplines() {
  return (
    <section id="discipliny" className="relative z-10 py-28 bg-[#07060f]">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <header className="text-center mb-16">
          <SectionEyebrow text="Naše sporty" />
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
          >
            Co u nás děti dělají?
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            Nabízíme tři hlavní disciplíny, které rozvíjejí tělo i mysl — vhodné pro
            začátečníky i pokročilé.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {disciplines.map((d) => (
            <article
              key={d.id}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6c63ff]/10 group"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: d.topBar }}
              />
              <div className="p-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: d.iconBg }}
                >
                  {d.icon}
                </div>
                <span
                  className="inline-block text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-3"
                  style={{ background: d.ageBg, color: d.ageColor }}
                >
                  {d.age}
                </span>
                <h3
                  className="text-2xl font-bold tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
                >
                  {d.name}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">{d.description}</p>
              </div>
              <div className="px-8 pb-6 flex items-end justify-between">
                <a
                  href="#prihlaseni"
                  className="text-sm font-medium transition-colors"
                  style={{ color: d.ageColor }}
                >
                  Přihlásit dítě →
                </a>
                <img src={d.logo} alt="" className="h-12 w-auto opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
            </article>
          ))}

          {/* Wide freestyle card */}
          <article className="md:col-span-3 relative rounded-2xl border border-[#01c7fc]/20 bg-gradient-to-br from-[#01c7fc]/8 to-[#06ffa5]/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#01c7fc]/10">
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(90deg, #01c7fc, #06ffa5)" }}
            />
            <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 items-center">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#01c7fc]/12 flex items-center justify-center text-2xl mb-5">
                  ⚡
                </div>
                <span className="inline-block text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-3 bg-[#01c7fc]/10 text-[#01c7fc]">
                  6–14 let
                </span>
                <h3
                  className="text-3xl font-bold tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
                >
                  Fitness Freestyle
                </h3>
                <p className="text-sm text-white/55 leading-relaxed mb-6">
                  Kombinace akrobacie, parkour elementů a pohybových výzev. Trénujeme odvahu,
                  explozivní sílu a kreativitu. Ideální pro děti, které chtějí víc než
                  klasický sport.
                </p>
                <a
                  href="#prihlaseni"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#01c7fc]"
                >
                  Přihlásit dítě →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {freestyleFeatures.map((f) => (
                  <div
                    key={f.text}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#01c7fc]/10 flex items-center justify-center text-base shrink-0">
                      {f.icon}
                    </div>
                    <span className="text-sm text-white/70 leading-snug pt-0.5">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
