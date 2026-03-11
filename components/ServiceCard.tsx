"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export default function ServiceCard({ icon, title, description, href, delay = 0 }: ServiceCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        href={href}
        className="group block p-6 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-white/10 hover:border-accent/30 dark:hover:border-accent/40 shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
          {icon}
        </div>
        <h3 className="font-sans font-semibold text-base text-primary dark:text-white mb-2">{title}</h3>
        <p className="text-muted dark:text-muted-dark text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex items-center gap-1 text-accent text-sm font-medium">
          Ver más
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </Link>
    </motion.div>
  );
}
