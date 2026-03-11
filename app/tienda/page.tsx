"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import { products, Category } from "@/data/products";

function TiendaContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("categoria") as Category) || "Todos";

  const [selectedCategory, setSelectedCategory] = useState<Category | "Todos">(
    initialCategory as Category | "Todos"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("relevancia");

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "Todos") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "precio-asc":
        result.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
        break;
      case "precio-desc":
        result.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-primary py-16 px-4">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
              Tienda en línea
            </span>
            <h1 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-3">
              Catálogo de productos
            </h1>
            <p className="text-slate-400 text-sm">
              Explora nuestro catálogo y solicita cotización en tiempo real. Enviamos a toda la República Mexicana.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-10 bg-surface dark:bg-surface-dark min-h-screen">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-8">
            <ProductFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted dark:text-muted-dark">
              <span className="font-semibold text-primary dark:text-white">{filtered.length}</span> productos
              {selectedCategory !== "Todos" && ` en ${selectedCategory}`}
              {searchQuery && ` para "${searchQuery}"`}
            </p>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="font-sans font-semibold text-primary dark:text-white mb-2">
                No se encontraron productos
              </h3>
              <p className="text-muted dark:text-muted-dark text-sm">
                Intenta con otros términos de búsqueda o cambia los filtros.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} delay={i * 0.04} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function TiendaPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-muted">Cargando...</div>}>
      <TiendaContent />
    </Suspense>
  );
}
