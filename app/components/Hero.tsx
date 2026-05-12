"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { ArrowRight, Phone, MapPin, ChevronDown } from "lucide-react";

function MagneticButton() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    setPos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPos({ x: 0, y: 0 });
  }, []);

  return (
    <motion.a
      ref={ref}
      href="tel:577330485"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.6 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold text-base rounded-2xl transition-colors duration-200 shadow-2xl shadow-blue-500/30 select-none cursor-pointer"
    >
      <Phone className="w-5 h-5" />
      Zavolejte nám
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    </motion.a>
  );
}

const headingWords = [
  { text: "ELEKTRO,", highlight: false },
  { text: "KTERÉ", highlight: false },
  { text: "DÁVÁ", highlight: false },
  { text: "SMYSL", highlight: true },
];

const stats = [
  { value: "17+", label: "Roků zkušeností" },
  { value: "1 000+", label: "Spokojených zákazníků" },
  { value: "50+", label: "Značek v nabídce" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(ellipse, rgba(30,41,59,1) 0%, transparent 70%)",
          }}
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "64px 64px",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #0f172a 100%)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-sm font-medium mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          V Brumov-Bylnici od roku 2008 · Elektro Černíček s.r.o.
        </motion.div>

        {/* Heading — word-by-word blur reveal */}
        <div className="mb-6 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.4 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`text-6xl sm:text-8xl lg:text-[100px] font-black tracking-tight leading-none ${
                word.highlight ? "text-blue-400" : "text-white"
              }`}
            >
              {word.text}
            </motion.span>
          ))}
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: "easeOut" }}
          className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Prodej domácích spotřebičů, elektroinstalační materiál
          <br className="hidden sm:block" />
          a odborný servis s tradicí.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton />

          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-semibold text-base rounded-2xl transition-all duration-200 backdrop-blur-sm"
          >
            <MapPin className="w-5 h-5 text-slate-400" />
            Kde nás najdete
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 pt-12 border-t border-white/[0.06]"
        >
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + i * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-2xl sm:text-3xl font-black text-white">{stat.value}</span>
                <span className="text-xs sm:text-sm text-slate-500 text-center">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-[10px] text-slate-600 uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
