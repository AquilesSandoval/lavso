import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { FlaskConical, Package, Beaker, Microscope, Scale, Layers } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Catálogo de materiales, consumibles, reactivos y equipo científico de laboratorio de LAVSO.",
};

const categoryIcons: Record<string, LucideIcon> = {
  Materiales: Package,
  Consumibles: FlaskConical,
  Reactivos: Beaker,
  "Equipo Científico": Microscope,
  Agitadores: Layers,
  Abatelenguas: Package,
  Balanzas: Scale,
};

const categoryDescriptions: Record<string, string> = {
  Materiales: "Cristalería, material plástico, viales, papel filtro, tamices, guantes, mascarillas, goggles y equipo de seguridad.",
  Consumibles: "Puntas, microtubos, membranas, filtros y otros consumibles de alta calidad para todas las aplicaciones.",
  Reactivos: "Distribuidor autorizado de marcas líderes: Sigma-Aldrich, Merck, J.T. Baker, Honeywell, Thermo Fisher y más.",
  "Equipo Científico": "Balanzas, microscopios, centrífugas, agitadores, autoclaves, ultracongeladores, refrigeradores y más.",
  Agitadores: "Agitadores vortex, mecánicos y de varilla para laboratorio. Marcas IKA, KIMAX, Poly Lab y más.",
  Abatelenguas: "Abatelenguas de madera desechables para exploración médica y diagnóstico general.",
  Balanzas: "Balanzas de precisión semi-micro y analíticas con calibración automática y pantallas táctiles.",
};

const fallbackIcon = FlaskConical;

export default function ProductosPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-primary py-20 px-4">
        <div className="container-custom text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            Catálogo LAVSO
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-4">
            Nuestros Productos
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Materiales de alta calidad para laboratorios científicos, industriales y académicos. Contamos con más de 2,000 referencias disponibles.
          </p>
        </div>
      </div>

      {/* Categories overview */}
      <section className="py-16 bg-surface dark:bg-surface-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat] ?? fallbackIcon;
              const catProducts = products.filter((p) => p.category === cat);
              return (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group p-5 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-white/10 hover:border-accent/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-3 group-hover:bg-accent transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-sans font-semibold text-primary dark:text-white mb-1">{cat}</h3>
                  <p className="text-xs text-muted dark:text-muted-dark line-clamp-2 mb-2">
                    {categoryDescriptions[cat] ?? "Productos de laboratorio de alta calidad."}
                  </p>
                  <span className="text-xs font-semibold text-accent">{catProducts.length} productos</span>
                </a>
              );
            })}
          </div>

          {/* Products by category */}
          {categories.map((cat) => {
            const catProducts = products.filter((p) => p.category === cat);
            const Icon = categoryIcons[cat] ?? fallbackIcon;
            return (
              <div
                key={cat}
                id={cat.toLowerCase().replace(/\s+/g, "-")}
                className="mb-16 scroll-mt-20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-sans font-bold text-xl text-primary dark:text-white">{cat}</h2>
                    <p className="text-xs text-muted dark:text-muted-dark">{catProducts.length} productos disponibles</p>
                  </div>
                  <Link
                    href={`/tienda?categoria=${encodeURIComponent(cat)}`}
                    className="ml-auto text-xs font-semibold text-accent hover:underline"
                  >
                    Ver todos en tienda →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {catProducts.map((product, i) => (
                    <ProductCard key={product.id} product={product} delay={i * 0.05} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
