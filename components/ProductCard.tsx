"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Product, getBasePrice, hasStock } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  delay?: number;
}

const categoryColors: Record<string, string> = {
  Materiales: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Consumibles: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  Reactivos: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  "Equipo Científico": "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  Agitadores: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  Abatelenguas: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Balanzas: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

export default function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
    >
      <Link href={`/tienda/${product.id}`} className="group block h-full">
        <div className="h-full flex flex-col rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-white/10 overflow-hidden hover:border-accent/30 dark:hover:border-accent/40 hover:shadow-xl dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1">
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-white/5">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {!hasStock(product) && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="px-2 py-1 bg-white/90 text-primary text-xs font-semibold rounded">
                  Solicitar cotización
                </span>
              </div>
            )}
            <div className="absolute top-3 left-3">
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${categoryColors[product.category]}`}>
                {product.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-4">
            <h3 className="font-sans font-semibold text-sm text-primary dark:text-white mb-1.5 line-clamp-2 group-hover:text-accent transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-muted dark:text-muted-dark leading-relaxed mb-3 line-clamp-2 flex-1">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.round(product.rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300 dark:text-slate-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted dark:text-muted-dark">
                {product.rating} ({product.reviewCount})
              </span>
            </div>

            {/* Price & CTA */}
            <div className="flex items-center justify-between">
              <span className={`font-sans font-bold text-sm ${
                getBasePrice(product) === null
                  ? "text-accent text-xs"
                  : "text-primary dark:text-white"
              }`}>
                {formatPrice(getBasePrice(product))}
              </span>
              <div className="w-8 h-8 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-200">
                <ShoppingCart className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-200" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
