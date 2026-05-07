/* eslint-disable @next/next/no-img-element */
const footerLinks = {
  Disciplíny: [
    { label: "Gymnastika", href: "#discipliny" },
    { label: "Tanec", href: "#discipliny" },
    { label: "Fitness Freestyle", href: "#discipliny" },
  ],
  Skupiny: [
    { label: "Hvězdičky (3–5 let)", href: "#skupiny" },
    { label: "Záříci (6–9 let)", href: "#skupiny" },
    { label: "Komety (10–14 let)", href: "#skupiny" },
  ],
  Klub: [
    { label: "O nás", href: "#o-nas" },
    { label: "Rozvrh", href: "#rozvrh" },
    { label: "Ceník", href: "#cenik" },
    { label: "Galerie", href: "#galerie" },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

const socials = [
  { icon: "📸", label: "Instagram", href: "https://instagram.com/ovystars" },
  { icon: "👥", label: "Facebook", href: "https://facebook.com/ovystars" },
  { icon: "▶️", label: "YouTube", href: "https://youtube.com/@ovystars" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0a091a] border-t border-white/10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6c63ff]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/logos/OVY%20stars_bi_le_.svg"
              alt="Ovy Stars"
              className="h-10 w-auto mb-5"
            />
            <p className="text-sm text-white/45 leading-relaxed max-w-[220px]">
              Kroužky gymnastiky, tance a fitness freestyle pro děti od 3 do 14 let v Ostravě.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-sm hover:bg-[#6c63ff]/20 hover:border-[#6c63ff]/40 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, items]) => (
            <div key={col}>
              <h4 className="text-xs font-semibold uppercase tracking-[2px] text-white/40 mb-4">
                {col}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Ovy Stars. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Ochrana osobních údajů
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Obchodní podmínky
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
