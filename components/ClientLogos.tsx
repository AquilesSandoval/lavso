"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Client {
  name: string;
  /** URL de la imagen del logo. null = mostrar texto */
  logo: string | null;
  /** Aspect ratio aproximado para reservar espacio correcto */
  wide?: boolean;
}

const clients: Client[] = [
  {
    name: "UNAM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/UNAM_Escudo.svg/120px-UNAM_Escudo.svg.png",
  },
  {
    name: "IPN",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/IPN_LOGO.svg/150px-IPN_LOGO.svg.png",
  },
  {
    name: "Tec de Monterrey",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Tecnologico_de_Monterrey_Logo.svg/200px-Tecnologico_de_Monterrey_Logo.svg.png",
    wide: true,
  },
  {
    name: "UMSNH",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Escudo_de_la_UMSNH.svg/120px-Escudo_de_la_UMSNH.svg.png",
  },
  {
    name: "IMSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Instituto_Mexicano_del_Seguro_Social_logo.svg/200px-Instituto_Mexicano_del_Seguro_Social_logo.svg.png",
    wide: true,
  },
  {
    name: "CINVESTAV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cinvestav-logo.svg/220px-Cinvestav-logo.svg.png",
    wide: true,
  },
  {
    name: "INIFAP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Logo-inifap.svg/200px-Logo-inifap.svg.png",
    wide: true,
  },
  {
    name: "CICESE",
    logo: null,
  },
  {
    name: "CIAD",
    logo: null,
  },
  {
    name: "CICATA",
    logo: null,
  },
];

function LogoItem({ client, hovered, onEnter, onLeave }: {
  client: Client;
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const showLogo = client.logo && !imgError;

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        transform: hovered ? "scale(1.25)" : "scale(1)",
        transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease",
        boxShadow: hovered ? "0 8px 32px rgba(13,148,136,0.18)" : "none",
        zIndex: hovered ? 10 : 1,
        position: "relative",
      }}
      className={`
        flex items-center justify-center shrink-0
        px-5 py-3 rounded-xl
        bg-white dark:bg-white/5
        border
        ${hovered
          ? "border-accent/60 dark:border-accent/60"
          : "border-gray-200 dark:border-white/10"
        }
        cursor-default select-none
      `}
    >
      {showLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={client.logo!}
          alt={client.name}
          onError={() => setImgError(true)}
          style={{ height: 44, width: client.wide ? 120 : 44, objectFit: "contain" }}
        />
      ) : (
        <span className="text-sm font-bold text-muted dark:text-slate-300 whitespace-nowrap px-1">
          {client.name}
        </span>
      )}
    </div>
  );
}

export default function ClientLogos() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [paused, setPaused] = useState(false);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  /* Duplicar para loop infinito sin cortes */
  const doubled = [...clients, ...clients];

  return (
    <section ref={ref} className="py-16 border-t border-gray-100 dark:border-white/10 overflow-hidden">
      <div className="container-custom mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-muted dark:text-muted-dark"
        >
          Instituciones que confían en nosotros
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        /* wrapper sin overflow-hidden para que el scale no se corte */
        className="relative py-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setHoveredName(null); }}
      >
        {/* Gradientes izquierda / derecha para fade suave */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10
          bg-gradient-to-r from-white dark:from-surface-dark to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10
          bg-gradient-to-l from-white dark:from-surface-dark to-transparent" />

        {/* Pista de logos */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            width: "max-content",
            animation: "logo-scroll 35s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {doubled.map((client, i) => (
            <LogoItem
              key={`${client.name}-${i}`}
              client={client}
              hovered={hoveredName === client.name}
              onEnter={() => setHoveredName(client.name)}
              onLeave={() => setHoveredName(null)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
