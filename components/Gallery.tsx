/* eslint-disable @next/next/no-img-element */
const photos = [
  {
    src: "/images/198b43e2-7151-49c1-af94-8ee0ef7fd182.png",
    alt: "Děti na tréninku gymnastiky Ovy Stars Ostrava",
    tall: true,
  },
  {
    src: "/images/b9d20a3d-1ab3-4014-a3d0-da40d9c08c30.png",
    alt: "Tanec v Ovy Stars",
    tall: false,
  },
  {
    src: "/images/f9255412-86ad-42c4-b18c-b2199850f657.png",
    alt: "Fitness freestyle tréning",
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="relative z-10 py-28 bg-[#0a091a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <header className="text-center mb-16">
          <span className="inline-block text-[11px] font-medium tracking-[2.5px] uppercase text-[#6c63ff] mb-4 px-3 py-1.5 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/20">
            Galerie
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
          >
            Naši záříci v akci
          </h2>
          <p className="text-base text-white/50 max-w-lg mx-auto leading-relaxed">
            Nahlédněte do světa Ovy Stars — tréninky, závody a radost z pohybu.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[240px] md:auto-rows-[280px]">
          {/* Tall main photo */}
          <div className="row-span-2 rounded-2xl overflow-hidden border border-white/10 relative group cursor-pointer">
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-sm text-white font-medium">{photos[0].alt}</span>
            </div>
          </div>

          {/* Remaining photos */}
          {photos.slice(1).map((p) => (
            <div
              key={p.src}
              className="rounded-2xl overflow-hidden border border-white/10 relative group cursor-pointer"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-sm text-white font-medium">{p.alt}</span>
              </div>
            </div>
          ))}

          {/* Logo display card */}
          <div className="rounded-2xl border-2 border-dashed border-[#6c63ff]/30 bg-[#6c63ff]/5 flex flex-col items-center justify-center gap-4 p-6">
            <img
              src="/logos/OVY%20stars_zdroj.svg"
              alt="Ovy Stars logo"
              className="h-16 w-auto"
            />
            <p className="text-sm text-white/40 text-center leading-snug">
              Sleduj nás na Instagramu pro víc fotek
            </p>
            <a
              href="#kontakt"
              className="text-xs font-medium text-[#6c63ff] hover:text-[#01c7fc] transition-colors"
            >
              @ovystars →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
