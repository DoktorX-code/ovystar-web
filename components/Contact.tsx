const contactItems = [
  {
    icon: "📍",
    label: "Adresa",
    value: "Ostrava, Česká republika",
    sub: "Přesné místo tréninků sdělíme po přihlášení",
    href: null,
  },
  {
    icon: "📞",
    label: "Telefon",
    value: "+420 777 OVY STAR",
    sub: "Po–Pá: 9:00–18:00",
    href: "tel:+420777000000",
  },
  {
    icon: "✉️",
    label: "E-mail",
    value: "info@ovystars.cz",
    sub: "Odpovídáme do 24 hodin",
    href: "mailto:info@ovystars.cz",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@ovystars",
    sub: "Fotky, videa, novinky",
    href: "https://instagram.com/ovystars",
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="relative z-10 py-28 bg-[#0a091a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <header className="text-center mb-16">
          <span className="inline-block text-[11px] font-medium tracking-[2.5px] uppercase text-[#6c63ff] mb-4 px-3 py-1.5 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/20">
            Kontakt
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
          >
            Kde nás najdete
          </h2>
          <p className="text-base text-white/50 max-w-lg mx-auto leading-relaxed">
            Máte otázky? Neváhejte nás kontaktovat — jsme tu pro vás a vaše děti.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact cards */}
          <div className="space-y-4">
            {contactItems.map((c) => {
              const inner = (
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#6c63ff]/10 flex items-center justify-center text-xl shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-base font-medium text-white">{c.value}</p>
                    {c.sub && <p className="text-sm text-white/40 mt-0.5">{c.sub}</p>}
                  </div>
                </div>
              );

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-[#6c63ff]/30 hover:bg-white/8 transition-all duration-200 hover:translate-x-1"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={c.label}
                  className="p-5 rounded-2xl border border-white/10 bg-white/5"
                >
                  {inner}
                </div>
              );
            })}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/20 bg-white/5 min-h-[360px] flex flex-col items-center justify-center gap-5 p-10">
            <div className="text-5xl">📍</div>
            <div className="text-center">
              <p
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-unbounded, sans-serif)" }}
              >
                Ostrava
              </p>
              <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                Trénujeme ve sportovních halách v Ostravě. Přesné místo sdělíme
                každé rodině individuálně po přihlášení.
              </p>
            </div>
            <a
              href="#prihlaseni"
              className="px-6 py-3 rounded-full text-white text-sm font-medium"
              style={{ background: "linear-gradient(135deg, #6c63ff, #01c7fc)" }}
            >
              Přihlásit dítě
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
