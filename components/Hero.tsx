/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#07060f]">
      {/* Mesh gradient background */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#6c63ff]/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-[#01c7fc]/15 blur-[120px]" />
        <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-[#ff6b9d]/10 blur-[100px]" />
      </div>

      {/* Hero background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/f9255412-86ad-42c4-b18c-b2199850f657.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07060f]/70 via-[#07060f]/50 to-[#07060f]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6c63ff]/30 bg-[#6c63ff]/10 text-[#6c63ff] text-xs font-medium tracking-widest uppercase mb-8">
              ✦ Ostrava · děti 3–14 let
            </div>

            <h1
              className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
            >
              Pohyb,{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #6c63ff 0%, #01c7fc 50%, #ff6b9d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                který dává
              </span>{" "}
              křídla
            </h1>

            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-md">
              Kroužky gymnastiky, tance a fitness freestyle pro děti od 3 do 14 let
              v&nbsp;Ostravě. Profesionální přístup, přátelská atmosféra, výsledky.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10" aria-label="Naše disciplíny">
              {[
                { icon: "🤸", label: "Gymnastika" },
                { icon: "💃", label: "Tanec" },
                { icon: "⚡", label: "Fitness Freestyle" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 backdrop-blur-sm"
                >
                  {b.icon} {b.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#prihlaseni"
                className="px-8 py-4 rounded-full text-white font-medium text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#6c63ff]/40"
                style={{
                  background: "linear-gradient(135deg, #6c63ff, #01c7fc)",
                }}
              >
                Přihlásit dítě
              </a>
              <a
                href="#discipliny"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-base hover:border-[#6c63ff]/60 hover:text-[#6c63ff] transition-all duration-300 backdrop-blur-sm"
              >
                Zjistit více
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#6c63ff]/10">
              <img
                src="/images/198b43e2-7151-49c1-af94-8ee0ef7fd182.png"
                alt="Děti při gymnasice v Ovy Stars Ostrava"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07060f]/50 to-transparent" />
            </div>

            <div className="absolute -top-4 -left-6 px-4 py-2.5 bg-[#07060f]/90 backdrop-blur-xl border border-white/15 rounded-2xl text-sm font-medium shadow-xl whitespace-nowrap">
              🏆 Mistrovské výsledky
            </div>
            <div className="absolute -bottom-4 -right-6 px-4 py-2.5 bg-[#07060f]/90 backdrop-blur-xl border border-white/15 rounded-2xl text-sm font-medium shadow-xl whitespace-nowrap">
              ⭐ 200+ spokojených dětí
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 rounded-2xl overflow-hidden border border-white/10">
          {[
            { num: "200+", label: "Dětí v klubu" },
            { num: "5+", label: "Let zkušeností" },
            { num: "4", label: "Sporty" },
          ].map((s, i) => (
            <div
              key={s.num}
              className={`py-6 md:py-8 text-center bg-white/5 hover:bg-white/8 transition-colors ${
                i < 2 ? "border-r border-white/10" : ""
              }`}
            >
              <span
                className="block text-3xl md:text-4xl font-black"
                style={{
                  fontFamily: "var(--font-unbounded, sans-serif)",
                  background: "linear-gradient(135deg, #6c63ff, #01c7fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.num}
              </span>
              <span className="text-sm text-white/50 mt-1 block">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
