"use client";

import { Category, categories } from "@/data/products";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface ProductFiltersProps {
  selectedCategory: Category | "Todos";
  onCategoryChange: (cat: Category | "Todos") => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const allCategories: (Category | "Todos")[] = ["Todos", ...categories];

const sortOptions = [
  { value: "relevancia", label: "Relevancia" },
  { value: "precio-asc", label: "Precio: menor a mayor" },
  { value: "precio-desc", label: "Precio: mayor a menor" },
  { value: "rating", label: "Mejor valorados" },
];

const categoryColors: Record<string, string> = {
  Todos: "bg-primary text-white dark:bg-white dark:text-primary",
  Materiales: "bg-blue-600 text-white",
  Consumibles: "bg-purple-600 text-white",
  Reactivos: "bg-amber-500 text-white",
  "Equipo Científico": "bg-teal-600 text-white",
};

const categoryDefault: Record<string, string> = {
  Todos: "border-gray-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-primary/40 dark:hover:border-white/30",
  Materiales: "border-gray-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-blue-400",
  Consumibles: "border-gray-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-purple-400",
  Reactivos: "border-gray-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-amber-400",
  "Equipo Científico": "border-gray-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-teal-400",
};

export default function ProductFilters({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: ProductFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted dark:text-muted-dark" />
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-primary dark:text-white placeholder:text-muted dark:placeholder:text-muted-dark text-sm focus:outline-none focus:border-accent dark:focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="w-4 h-4 text-muted hover:text-primary dark:hover:text-white transition-colors" />
          </button>
        )}
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {allCategories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                isSelected
                  ? categoryColors[cat]
                  : `bg-transparent ${categoryDefault[cat]}`
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Sort & count row */}
      <div className="flex items-center gap-3">
        <SlidersHorizontal className="w-4 h-4 text-muted dark:text-muted-dark shrink-0" />
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="flex-1 py-2 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-primary dark:text-white text-xs focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
