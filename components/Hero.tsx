"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FlaskConical, Wrench, Building2, Package } from "lucide-react";

const features = [
  { icon: FlaskConical, label: "Reactivos & Materiales" },
  { icon: Package, label: "Equipo Científico" },
  { icon: Wrench, label: "Mantenimiento" },
  { icon: Building2, label: "Diseño de Labs" },
];

const floatingBadges = [
  { text: "ISO Certificado", top: "20%", right: "8%", delay: 0.6 },
  { text: "Envío nacional", top: "55%", right: "5%", delay: 0.8 },
  { text: "+500 productos", top: "75%", left: "5%", delay: 1.0 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* ── Video de fondo ─────────────────────────────────── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay para legibilidad del texto */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Degradado en la parte inferior para transición suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/80 to-transparent" />

      {/* Gradient orbs decorativos */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 py-28 md:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/40 bg-accent/15 text-accent text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Proveedor líder en Michoacán
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
          >
            Soluciones integrales
            <br />
            <span className="text-accent">para tu laboratorio</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-200 leading-relaxed mb-8 max-w-xl drop-shadow"
          >
            Desde cristalería y reactivos hasta equipos de alta tecnología. LAVSO es tu socio estratégico para el equipamiento, mantenimiento y diseño de laboratorios científicos, industriales y académicos.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <Link
              href="/tienda"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors duration-200 text-sm"
            >
              Ver catálogo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacto"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/30 transition-colors duration-200 text-sm backdrop-blur-sm"
            >
              Solicitar cotización
            </Link>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-white/90 text-sm backdrop-blur-sm"
              >
                <Icon className="w-3.5 h-3.5 text-accent" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating badges */}
        {floatingBadges.map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: badge.delay, duration: 0.4 }}
            className="absolute hidden md:flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white text-xs font-medium"
            style={{ top: badge.top, right: badge.right, left: badge.left }}
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            {badge.text}
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
