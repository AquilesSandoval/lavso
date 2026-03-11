import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Building2, Ruler, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobiliario y Diseño de Laboratorios",
  description:
    "Diseño, adecuación y mobiliario especializado para laboratorios científicos, industriales y académicos en México.",
};

const projects = [
  {
    title: "Lab. de Química Analítica",
    type: "Diseño completo",
    institution: "UMSNH Morelia",
    img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80",
  },
  {
    title: "Centro de Investigación",
    type: "Remodelación",
    institution: "CINVESTAV",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
  },
  {
    title: "Laboratorio Microbiológico",
    type: "Equipamiento",
    institution: "Hospital IMSS",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
  },
  {
    title: "Planta de Control de Calidad",
    type: "Diseño industrial",
    institution: "Industria privada",
    img: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=80",
  },
];

const features = [
  { icon: Ruler, title: "Diseño a medida", desc: "Proyectamos cada espacio considerando flujos de trabajo, normativas de bioseguridad y requerimientos específicos de cada área." },
  { icon: Building2, title: "Mobiliario especializado", desc: "Mesas de trabajo, campanas extractoras, gabinetes de almacenamiento, estantes técnicos y sistemas modulares." },
  { icon: Zap, title: "Instalaciones técnicas", desc: "Sistemas de extracción, plomería de laboratorio, instalaciones eléctricas especializadas y gases." },
];

export default function MobiliarioPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-primary py-20 px-4">
        <div className="container-custom text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            Diseño y mobiliario
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-4">
            Diseño de Laboratorios
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Transformamos cualquier espacio en un laboratorio funcional, seguro y estético. Desde el concepto hasta la entrega llave en mano.
          </p>
        </div>
      </div>

      {/* Features */}
      <section className="py-20 bg-surface dark:bg-surface-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="p-6 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-sans font-semibold text-primary dark:text-white mb-2">{feat.title}</h3>
                  <p className="text-sm text-muted dark:text-muted-dark leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Process */}
          <div className="text-center mb-10">
            <h2 className="font-sans font-bold text-2xl text-primary dark:text-white mb-2">Proceso de trabajo</h2>
            <p className="text-muted dark:text-muted-dark text-sm">De la idea al laboratorio en 5 pasos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-16">
            {[
              { n: 1, title: "Consultoría inicial", desc: "Entendemos tus necesidades y requerimientos" },
              { n: 2, title: "Diseño 3D", desc: "Presentamos planos y renders del espacio" },
              { n: 3, title: "Aprobación", desc: "Revisamos y ajustamos el diseño contigo" },
              { n: 4, title: "Fabricación", desc: "Producimos el mobiliario en nuestro taller" },
              { n: 5, title: "Instalación", desc: "Montaje, conexiones y entrega funcional" },
            ].map((step) => (
              <div key={step.n} className="text-center p-4 rounded-xl bg-white dark:bg-card-dark border border-gray-100 dark:border-white/10">
                <div className="w-10 h-10 rounded-full bg-accent text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  {step.n}
                </div>
                <h4 className="font-sans font-semibold text-sm text-primary dark:text-white mb-1">{step.title}</h4>
                <p className="text-xs text-muted dark:text-muted-dark">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="text-center mb-8">
            <h2 className="font-sans font-bold text-2xl text-primary dark:text-white mb-2">Proyectos realizados</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {projects.map((project) => (
              <div key={project.title} className="group rounded-2xl overflow-hidden bg-white dark:bg-card-dark border border-gray-100 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image src={project.img} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-0.5 rounded-full bg-accent text-white text-xs font-semibold">{project.type}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-sans font-semibold text-sm text-primary dark:text-white mb-0.5">{project.title}</h3>
                  <p className="text-xs text-muted dark:text-muted-dark">{project.institution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center p-10 rounded-2xl bg-primary">
            <h3 className="font-sans font-bold text-2xl text-white mb-3">¿Tienes un proyecto en mente?</h3>
            <p className="text-slate-400 mb-6">Cuéntanos tu idea y te ayudamos a materializarla con calidad y presupuesto justos.</p>
            <Link href="/contacto" className="inline-flex px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors text-sm">
              Iniciar mi proyecto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
