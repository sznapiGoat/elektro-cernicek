"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";

const phones = [
  { number: "577 330 485", href: "tel:577330485", label: "Pevná linka" },
  { number: "776 330 486", href: "tel:776330486", label: "Mobil" },
];

const openingHours = [
  { day: "Pondělí", time: "08:00 – 12:00 / 13:00 – 17:00", closed: false },
  { day: "Úterý", time: "08:00 – 12:00 / 13:00 – 17:00", closed: false },
  { day: "Středa", time: "08:00 – 12:00 / 13:00 – 17:00", closed: false },
  { day: "Čtvrtek", time: "08:00 – 12:00 / 13:00 – 17:00", closed: false },
  { day: "Pátek", time: "08:00 – 12:00 / 13:00 – 16:00", closed: false },
  { day: "Sobota", time: "08:00 – 12:00", closed: false },
  { day: "Neděle", time: "Zavřeno", closed: true },
];

function isCurrentlyOpen(): boolean {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour * 60 + minute;

  if (day === 0) return false; // Sunday
  if (day === 6) return time >= 480 && time < 720; // Saturday 8–12
  // Monday–Friday
  return (time >= 480 && time < 720) || (time >= 780 && time < (day === 5 ? 960 : 1020));
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const open = isCurrentlyOpen();

  return (
    <section
      id="kontakt"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1526 100%)" }}
    >
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Background accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(59,130,246,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-sm font-medium mb-6">
            Kontakt
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Kde nás{" "}
            <span className="text-blue-400">najdete</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Přijďte k nám osobně nebo zavolejte. Rádi poradíme.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left — Contact info + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Open/closed badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold w-fit ${
                open
                  ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                  : "bg-red-500/10 border border-red-500/25 text-red-400"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${open ? "bg-emerald-400 animate-pulse" : "bg-red-400"}`}
              />
              {open ? "Nyní otevřeno" : "Nyní zavřeno"}
            </div>

            {/* Address card */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Adresa</p>
                  <p className="text-white font-semibold text-base leading-snug">
                    Náměstí H. Synkové 1002
                  </p>
                  <p className="text-slate-400 text-sm">763 31 Brumov-Bylnice</p>
                  <a
                    href="https://maps.google.com/?q=Náměstí+H.+Synkové+1002,+763+31+Brumov-Bylnice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    Otevřít v Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone cards */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Telefon</p>
                  <div className="space-y-3">
                    {phones.map((phone) => (
                      <div key={phone.number} className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-slate-500 mb-0.5">{phone.label}</p>
                          <a
                            href={phone.href}
                            className="text-white font-bold text-lg hover:text-blue-400 transition-colors duration-200 tabular-nums"
                          >
                            {phone.number}
                          </a>
                        </div>
                        <motion.a
                          href={phone.href}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/25 rounded-lg hover:bg-blue-500/20 transition-all duration-200"
                        >
                          <Phone className="w-3 h-3" />
                          Zavolat
                        </motion.a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <motion.a
              href="tel:577330485"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-2xl transition-colors duration-200 shadow-2xl shadow-blue-500/25 text-base"
            >
              <Phone className="w-5 h-5" />
              Zavolejte: 577 330 485
            </motion.a>
          </motion.div>

          {/* Right — Opening hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-3 p-7 lg:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Otevírací doba</h3>
                <p className="text-slate-500 text-xs">* Může se lišit ve svátky</p>
              </div>
            </div>

            {/* Hours table */}
            <div className="space-y-2">
              {openingHours.map((row, i) => {
                const isToday = new Date().getDay() === (i === 6 ? 0 : i + 1);
                return (
                  <div
                    key={row.day}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                      row.closed
                        ? "text-slate-600 bg-slate-800/30"
                        : isToday
                        ? "bg-blue-500/10 border border-blue-500/20"
                        : "bg-white/[0.02] hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {isToday && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          row.closed
                            ? "text-slate-600"
                            : isToday
                            ? "text-white font-semibold"
                            : "text-slate-300"
                        }`}
                      >
                        {row.day}
                        {isToday && (
                          <span className="ml-2 text-[10px] font-bold text-blue-400 uppercase tracking-wide">
                            dnes
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-bold tabular-nums ${
                        row.closed
                          ? "text-slate-700"
                          : isToday
                          ? "text-blue-400"
                          : "text-slate-300"
                      }`}
                    >
                      {row.time}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Note */}
            <p className="mt-5 text-xs text-slate-600 leading-relaxed">
              Otevírací doba se může v období svátků a prázdnin lišit.
              V případě pochybností nás kontaktujte telefonicky před návštěvou.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
