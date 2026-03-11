import { Metadata } from "next";
import { CheckCircle, Wrench, Settings, ClipboardList, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios de Mantenimiento",
  description:
    "Servicio de mantenimiento preventivo y correctivo de equipos de laboratorio en Morelia, Michoacán.",
};

const preventiveSteps = [
  { step: "01", title: "Solicitud", desc: "Contacta a nuestro equipo indicando el equipo y la periodicidad deseada." },
  { step: "02", title: "Diagnóstico", desc: "Realizamos una inspección visual y funcional del equipo sin costo." },
  { step: "03", title: "Cotización", desc: "Te presentamos una cotización detallada con los trabajos a realizar." },
  { step: "04", title: "Mantenimiento", desc: "Nuestros técnicos certificados ejecutan el servicio in situ o en taller." },
  { step: "05", title: "Certificado", desc: "Entregamos bitácora de servicio y certificado de calibración si aplica." },
];

const correctiveSteps = [
  { step: "01", title: "Reporte de falla", desc: "Comunica la avería por teléfono, email o WhatsApp." },
  { step: "02", title: "Evaluación urgente", desc: "Respondemos en menos de 4 horas hábiles con evaluación inicial." },
  { step: "03", title: "Diagnóstico técnico", desc: "Identificamos la causa raíz y los componentes necesarios." },
  { step: "04", title: "Reparación", desc: "Realizamos la reparación in situ o trasladamos el equipo a nuestro taller." },
  { step: "05", title: "Prueba y entrega", desc: "Verificamos el correcto funcionamiento y entregamos reporte técnico." },
];

const equipmentTypes = [
  "Balanzas analíticas y de precisión",
  "Microscopios ópticos y electrónicos",
  "Centrífugas y microcentrífugas",
  "Incubadoras y estufas",
  "Autoclaves y esterilizadores",
  "Cámaras de bioseguridad",
  "Refrigeradores y ultracongeladores",
  "Espectrofotómetros y colorímetros",
  "pHmetros y conductímetros",
  "Agitadores y mezcladores",
  "Bombas de vacío y peristálticas",
  "Termómetros y termocicladores",
];

export default function ServiciosPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-primary py-20 px-4">
        <div className="container-custom text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            Servicios técnicos
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-4">
            Mantenimiento de Equipos
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Técnicos certificados para el mantenimiento preventivo y correctivo de todo tipo de equipos de laboratorio. Respuesta rápida, diagnóstico preciso.
          </p>
        </div>
      </div>

      {/* Service types */}
      <section className="py-20 bg-surface dark:bg-surface-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Preventivo */}
            <div className="p-8 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-sans font-bold text-xl text-primary dark:text-white">Mantenimiento Preventivo</h2>
                  <p className="text-xs text-muted dark:text-muted-dark">Prolonga la vida útil de tus equipos</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                El mantenimiento preventivo planificado reduce hasta un 70% los tiempos de inactividad no programados. Realizamos inspecciones periódicas, limpieza de componentes, lubricación, calibración y reemplazo de partes según el plan del fabricante.
              </p>
              <ul className="space-y-2 mb-6">
                {["Calibración certificada con trazabilidad", "Limpieza profunda y lubricación", "Revisión de componentes eléctricos", "Actualización de firmware/software", "Bitácora detallada de servicio"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="font-sans font-semibold text-primary dark:text-white mb-4 text-sm">Proceso paso a paso:</h3>
              <div className="space-y-3">
                {preventiveSteps.map((s) => (
                  <div key={s.step} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {s.step}
                    </span>
                    <div>
                      <span className="font-semibold text-xs text-primary dark:text-white">{s.title}: </span>
                      <span className="text-xs text-muted dark:text-muted-dark">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Correctivo */}
            <div className="p-8 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h2 className="font-sans font-bold text-xl text-primary dark:text-white">Mantenimiento Correctivo</h2>
                  <p className="text-xs text-muted dark:text-muted-dark">Reparación rápida cuando más lo necesitas</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                Cuando un equipo falla, cada hora cuenta. Nuestro equipo técnico responde en menos de 4 horas hábiles con diagnóstico inicial. Contamos con taller propio y stock de refacciones para los equipos más comunes.
              </p>
              <ul className="space-y-2 mb-6">
                {["Respuesta en menos de 4 horas hábiles", "Diagnóstico inicial sin costo", "Reparación in situ o en taller", "Refacciones originales y compatibles", "Garantía de 90 días en la reparación"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="font-sans font-semibold text-primary dark:text-white mb-4 text-sm">Proceso paso a paso:</h3>
              <div className="space-y-3">
                {correctiveSteps.map((s) => (
                  <div key={s.step} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {s.step}
                    </span>
                    <div>
                      <span className="font-semibold text-xs text-primary dark:text-white">{s.title}: </span>
                      <span className="text-xs text-muted dark:text-muted-dark">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment types */}
      <section className="py-16 bg-gray-50 dark:bg-primary/20">
        <div className="container-custom">
          <div className="text-center mb-10">
            <ClipboardList className="w-8 h-8 text-accent mx-auto mb-3" />
            <h2 className="font-sans font-bold text-2xl text-primary dark:text-white mb-2">Equipos que atendemos</h2>
            <p className="text-muted dark:text-muted-dark text-sm">Contamos con certificación para dar servicio a las principales marcas y modelos del mercado.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {equipmentTypes.map((eq) => (
              <div key={eq} className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                {eq}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
          <h2 className="font-sans font-bold text-2xl text-white mb-3">¿Necesitas servicio urgente?</h2>
          <p className="text-slate-400 mb-6">Llámanos directamente o escríbenos por WhatsApp para atención inmediata.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+524433205576" className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors text-sm">
              +52 443 320 5576
            </a>
            <Link href="/contacto" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors text-sm">
              Contactar por formulario
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
