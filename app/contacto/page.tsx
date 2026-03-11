import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para cotizaciones, mantenimiento de equipos, diseño de laboratorios o cualquier consulta.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    lines: ["Retorno de Framboyán 33", "Amp. Las Margaritas, Morelia", "Michoacán, México CP 58160"],
  },
  {
    icon: Phone,
    title: "Teléfonos",
    lines: ["+52 443 320 5576", "+52 443 327 7120"],
    links: ["tel:+524433205576", "tel:+524433277120"],
  },
  {
    icon: Mail,
    title: "Correo electrónico",
    lines: ["ventas@lavso.mx"],
    links: ["mailto:ventas@lavso.mx"],
  },
  {
    icon: Clock,
    title: "Horario de atención",
    lines: ["Lunes a Viernes", "8:00 – 15:00 hrs | 16:00 – 18:00 hrs", "(Cerrado de 15:00 a 16:00)"],
  },
];

export default function ContactoPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-primary py-20 px-4">
        <div className="container-custom text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            Contáctanos
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-4">
            ¿En qué podemos ayudarte?
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Nuestro equipo está disponible para atender tus consultas, cotizaciones y solicitudes de servicio.
          </p>
        </div>
      </div>

      <section className="py-20 bg-surface dark:bg-surface-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-5">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-sm text-primary dark:text-white mb-1">{info.title}</p>
                      {info.lines.map((line, i) => (
                        info.links ? (
                          <a key={i} href={info.links[i]} className="block text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors">
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-sm text-muted dark:text-muted-dark">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/524433205576"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.534 5.846L0 24l6.334-1.512A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.004-1.366l-.36-.214-3.724.888.935-3.616-.234-.372A9.793 9.793 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                Chatear por WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 p-8 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-white/10">
              <h2 className="font-sans font-bold text-xl text-primary dark:text-white mb-1">
                Envíanos un mensaje
              </h2>
              <p className="text-muted dark:text-muted-dark text-sm mb-6">
                Respondemos en menos de 24 horas hábiles.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 h-80">
            <iframe
              title="Ubicación LAVSO"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.3!2d-101.19!3d19.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRetorno+de+Framboyán+33%2C+Morelia%2C+Michoacán!5e0!3m2!1ses!2smx!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
