import { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ClientLogos from "@/components/ClientLogos";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import {
  FlaskConical,
  Wrench,
  Building2,
  Package,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LAVSO — Soluciones integrales para laboratorio",
};

const services = [
  {
    icon: <Package className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />,
    title: "Productos de laboratorio",
    description:
      "Cristalería, materiales, reactivos y consumibles de alta calidad de las principales marcas internacionales.",
    href: "/productos",
  },
  {
    icon: <Wrench className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />,
    title: "Mantenimiento de equipos",
    description:
      "Servicio preventivo y correctivo para toda clase de equipos de laboratorio. Diagnóstico, reparación in situ o en taller.",
    href: "/servicios",
  },
  {
    icon: <Building2 className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />,
    title: "Diseño de laboratorios",
    description:
      "Diseñamos y equipamos espacios de laboratorio a medida: mobiliario especializado, sistemas de ventilación y distribución.",
    href: "/mobiliario",
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />,
    title: "Importaciones",
    description:
      "Importamos equipos y reactivos directamente del fabricante. Gestionamos la logística completa hasta tu puerta.",
    href: "/importaciones",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Hero />

      {/* Services section */}
      <section className="py-20 bg-surface dark:bg-surface-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
              Nuestros servicios
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-3">
              Todo lo que tu laboratorio necesita
            </h2>
            <p className="text-muted dark:text-muted-dark max-w-xl mx-auto">
              Desde la adquisición de insumos hasta el diseño completo del espacio. Somos tu socio integral.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Featured products */}
      <section className="py-20 bg-surface dark:bg-surface-dark">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
                Productos destacados
              </span>
              <h2 className="font-sans text-3xl font-bold text-primary dark:text-white">
                Los más solicitados
              </h2>
            </div>
            <Link
              href="/tienda"
              className="hidden sm:flex items-center gap-1.5 text-accent text-sm font-semibold hover:gap-2.5 transition-all"
            >
              Ver catálogo completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featured.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 0.08} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/tienda"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-white transition-colors"
            >
              Ver catálogo completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* CTA section */}
      <section className="py-20 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para equipar tu laboratorio?
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8">
            Contáctanos hoy y recibe una cotización personalizada sin costo. Nuestro equipo de expertos está listo para asesorarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contacto"
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors text-sm"
            >
              Solicitar cotización gratuita
            </Link>
            <a
              href="tel:+524433205576"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors text-sm"
            >
              +52 443 320 5576
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
