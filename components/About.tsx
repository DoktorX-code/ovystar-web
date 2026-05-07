/* eslint-disable @next/next/no-img-element */
const values = [
  {
    icon: "🌟",
    title: "Radost z pohybu",
    desc: "Věříme, že sport musí být radost. Každá lekce je dobrodružství.",
  },
  {
    icon: "🛡️",
    title: "Bezpečné prostředí",
    desc: "Kvalitní vybavení, zkušení trenéři a péče o každé dítě.",
  },
  {
    icon: "💡",
    title: "Rozvoj sebevědomí",
    desc: "Pohyb mění děti. Pomáháme jim věřit sami sobě.",
  },
  {
    icon: "🤝",
    title: "Týmový duch",
    desc: "Přátelství v klubu jsou na celý život. Jsme rodina.",
  },
];

export default function About() {
  return (
    <section id="o-nas" className="relative z-10 py-28 bg-[#07060f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img
                src="/images/b9d20a3d-1ab3-4014-a3d0-da40d9c08c30.png"
                alt="Trenér Ovy Stars s dětmi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07060f]/70 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-[#07060f]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-5 text-center shadow-2xl min-w-[140px]">
              <span
                className="block text-3xl font-black"
                style={{
                  fontFamily: "var(--font-unbounded, sans-serif)",
                  background: "linear-gradient(135deg, #6c63ff, #01c7fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                5+
              </span>
              <span className="block text-xs text-white/50 mt-1">let zkušeností</span>
            </div>

            <div className="absolute -top-6 -left-6">
              <img
                src="/logos/OVY%20stars_zdroj.svg"
                alt="Ovy Stars"
                className="h-20 w-auto opacity-70"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-block text-[11px] font-medium tracking-[2.5px] uppercase text-[#6c63ff] mb-4 px-3 py-1.5 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/20">
              O nás
            </span>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
            >
              Příběh
              <br />
              Ovy Stars
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-5">
              Ovy Stars vznikl ze snu — vytvořit místo, kde se každé dítě cítí jako hvězda.
              Od roku 2019 cvičíme v Ostravě a za tu dobu jsme vychovali stovky malých
              sportovců, kteří dnes září na závodech i v životě.
            </p>
            <p className="text-base text-white/60 leading-relaxed mb-10">
              Naši trenéři jsou nejen odborníci ve svém oboru, ale především lidé, kteří
              milují práci s dětmi. Vytváříme prostředí, kde je pohyb radostí — ne povinností.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-4 rounded-2xl bg-white/5 border border-white/8 hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <p className="text-sm font-semibold text-white mb-1">{v.title}</p>
                  <p className="text-xs text-white/45 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
