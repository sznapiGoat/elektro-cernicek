import { Zap, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080f1c] border-t border-white/[0.05]">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex items-baseline">
                <span className="font-bold text-white text-base">Elektro</span>
                <span className="font-black text-blue-400 text-base ml-1">Černíček</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Váš spolehlivý partner pro domácí spotřebiče a
              elektroinstalační materiál v Brumov-Bylnici od roku 2008.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-semibold">
              Navigace
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Produkty", href: "#produkty" },
                { label: "Speciality", href: "#speciality" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-semibold">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Náměstí H. Synkové 1002
                  <br />
                  763 31 Brumov-Bylnice
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div>
                  <a
                    href="tel:577330485"
                    className="block text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    577 330 485
                  </a>
                  <a
                    href="tel:776330486"
                    className="block text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    776 330 486
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {year} Elektro Černíček s.r.o. Všechna práva vyhrazena.
          </p>
          <p className="text-xs text-slate-700">
            Brumov-Bylnice · IČO: registrováno v ČR
          </p>
        </div>
      </div>
    </footer>
  );
}
