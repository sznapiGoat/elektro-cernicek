"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Tv2, Cable, Sparkles, Check, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Tv2,
    title: "Prodej spotřebičů",
    tagline: "Prémiové značky, férové ceny",
    description:
      "Kompletní sortiment domácích spotřebičů s odborným poradenstvím. Pomůžeme vám vybrat přesně to, co potřebujete.",
    brands: ["AEG", "Bosch", "Whirlpool"],
    features: [
      "Pračky a sušičky",
      "Lednice a mrazáky",
      "Myčky nádobí",
      "Sporáky a trouby",
    ],
  },
  {
    icon: Cable,
    title: "Elektromateriál",
    tagline: "Vše pro elektroinstalace",
    description:
      "Široký sortiment elektroinstalačního materiálu pro profesionály i domácí kutily. Kabely, jističe, osvětlení.",
    brands: ["CYKY kabely", "Jističe OEZ", "Svítidla"],
    features: [
      "Kabely a vodiče CYKY",
      "Rozvaděče a jističe",
      "Osvětlení a LED",
      "Zásuvky a vypínače",
    ],
  },
  {
    icon: Sparkles,
    title: "Speciality",
    tagline: "Co jinde nenajdete",
    description:
      "Unikátní sortiment tradičních produktů. Motůčko a zavařovací hrnce Bielmeier — prověřené generacemi.",
    brands: ["Motůčko", "Bielmeier"],
    features: [
      "Motůčko — tradiční zpracování",
      "Zavařovací hrnce Bielmeier",
      "Příslušenství k zavařování",
      "Odborné poradenství",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow:
          "0 0 0 1px rgba(59,130,246,0.35), 0 24px 64px rgba(0,0,0,0.5), 0 0 48px rgba(59,130,246,0.14)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group relative flex flex-col p-7 lg:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] hover:border-blue-500/40 transition-colors duration-300 overflow-hidden will-change-transform"
    >
      {/* Top-right glow on hover */}
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-blue-500/0 group-hover:bg-blue-500/[0.06] blur-2xl transition-all duration-500 pointer-events-none" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 flex-shrink-0">
        <Icon className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
      </div>

      {/* Heading */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
        <p className="text-xs font-medium text-blue-400 uppercase tracking-wide">
          {service.tagline}
        </p>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Brand tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.brands.map((brand) => (
          <span
            key={brand}
            className="px-2.5 py-1 text-xs font-semibold text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
          >
            {brand}
          </span>
        ))}
      </div>

      {/* Feature list */}
      <ul className="space-y-2.5 mt-auto">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-400">
            <Check
              className="w-3.5 h-3.5 text-blue-400 flex-shrink-0"
              strokeWidth={2.5}
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* Bottom call to action */}
      <div className="mt-6 pt-5 border-t border-white/[0.05] flex items-center gap-1.5 text-xs font-medium text-slate-500 group-hover:text-blue-400 transition-colors duration-200">
        <span>Více informací</span>
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.article>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
  const isGridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section
      id="produkty"
      className="relative py-24 lg:py-32 bg-[#0f172a] overflow-hidden"
    >
      <span id="speciality" className="sr-only" />
      {/* Top separator line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Subtle background depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(30,41,59,0.8) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-sm font-medium mb-6">
            Naše nabídka
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Co pro vás{" "}
            <span className="text-blue-400">máme</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Komplexní elektro nabídka pod jednou střechou — od spotřebičů přes
            instalační materiál až po speciality.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isGridInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
