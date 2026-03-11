import { Metadata } from "next";
import Link from "next/link";
import { Globe, Package, FileText, Truck, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Importaciones",
  description:
    "Importación de equipos y reactivos de laboratorio directamente del fabricante a México.",
};

const steps = [
  {
    icon: FileText,
    title: "Identificación del producto",
    desc: "Nos proporcionas las especificaciones técnicas del equipo o reactivo que necesitas: marca, modelo, fichas técnicas o alternativas.",
  },
  {
    icon: Globe,
    title: "Búsqueda del proveedor",
    desc: "Contactamos a los fabricantes o distribuidores autorizados en EUA, Europa o Asia para obtener precios y disponibilidad.",
  },
  {
    icon: FileText,
    title: "Cotización y propuesta",
    desc: "Te presentamos una cotización completa: precio CIF, impuestos estimados, tiempos de entrega y opciones de garantía.",
  },
  {
    icon: Package,
    title: "Pedido y trámites aduanales",
    desc: "Gestionamos el pedido, los permisos COFEPRIS si aplica, y todos los trámites de importación ante la aduana mexicana.",
  },
  {
    icon: Truck,
    title: "Logística y transporte",
    desc: "Coordinamos el flete internacional, seguro de carga y la última milla hasta tu institución o laboratorio.",
  },
  {
    icon: CheckCircle,
    title: "Entrega e instalación",
    desc: "Entregamos el equipo, verificamos su funcionamiento y realizamos la capacitación inicial si es necesario.",
  },
];

const advantages = [
  "Acceso a marcas internacionales no disponibles en México",
  "Precios directos del fabricante sin intermediarios adicionales",
  "Gestión completa de trámites aduanales y fiscales",
  "Coordinación de garantías internacionales",
  "Asesoría técnica para seleccionar el equipo correcto",
  "Seguimiento en tiempo real del estado del pedido",
];

const brands = [
  "Mettler Toledo", "Eppendorf", "Olympus", "Thermo Fisher",
  "Sigma-Aldrich", "Merck KGaA", "Hermle", "IKA",
  "Radwag", "Labomed", "Cytiva (GE)", "Waters Corporation",
];

export default function ImportacionesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-primary py-20 px-4">
        <div className="container-custom text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            Importaciones
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-4">
            Importación de Equipos
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Gestionamos la importación de cualquier equipo o reactivo de laboratorio, del fabricante a tu puerta, con todos los trámites incluidos.
          </p>
        </div>
      </div>

      {/* Process timeline */}
      <section className="py-20 bg-surface dark:bg-surface-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl text-primary dark:text-white mb-3">
              ¿Cómo funciona?
            </h2>
            <p className="text-muted dark:text-muted-dark max-w-lg mx-auto">
              Nuestro proceso de importación es transparente y sin sorpresas. De principio a fin, estamos contigo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative p-6 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-white/10">
                  <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 dark:text-white/5 select-none font-sans">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-sans font-semibold text-primary dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-muted dark:text-muted-dark leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Advantages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-primary">
              <ShieldCheck className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-sans font-bold text-xl text-white mb-5">Ventajas de importar con LAVSO</h3>
              <ul className="space-y-3">
                {advantages.map((adv) => (
                  <li key={adv} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {adv}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-white/10">
              <Globe className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-sans font-bold text-xl text-primary dark:text-white mb-5">
                Marcas con las que trabajamos
              </h3>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span key={brand} className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/10 text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {brand}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted dark:text-muted-dark mt-4">
                ¿No ves la marca que buscas? Podemos gestionar prácticamente cualquier fabricante a nivel mundial.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-10 rounded-2xl bg-accent/10 dark:bg-accent/20 border border-accent/20">
            <h3 className="font-sans font-bold text-2xl text-primary dark:text-white mb-3">
              ¿Necesitas importar un equipo?
            </h3>
            <p className="text-muted dark:text-muted-dark mb-6">
              Cuéntanos qué necesitas. Haremos la búsqueda, la cotización y todos los trámites por ti.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors text-sm"
            >
              Iniciar importación
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
