import Link from "next/link";
import { FlaskConical, MapPin, Phone, Mail, Clock } from "lucide-react";

const productLinks = [
  { href: "/productos#materiales", label: "Materiales" },
  { href: "/productos#consumibles", label: "Consumibles" },
  { href: "/productos#reactivos", label: "Reactivos" },
  { href: "/productos#equipo", label: "Equipo Científico" },
];

const serviceLinks = [
  { href: "/servicios", label: "Mantenimiento Preventivo" },
  { href: "/servicios", label: "Mantenimiento Correctivo" },
  { href: "/mobiliario", label: "Diseño de Laboratorios" },
  { href: "/importaciones", label: "Importaciones" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <span className="font-sans font-bold text-xl tracking-tight">LAVSO</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Proveedor integral de insumos, reactivos y equipo científico para laboratorios en México. Más de 15 años siendo el socio estratégico de la comunidad científica de Michoacán.
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/524433205576"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.534 5.846L0 24l6.334-1.512A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.004-1.366l-.36-.214-3.724.888.935-3.616-.234-.372A9.793 9.793 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">
              Productos
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>Retorno de Framboyán 33, Amp. Las Margaritas, Morelia, Mich. CP 58160</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <div>
                  <a href="tel:+524433205576" className="hover:text-accent block">+52 443 320 5576</a>
                  <a href="tel:+524433277120" className="hover:text-accent block">+52 443 327 7120</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-300">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:ventas@lavso.mx" className="hover:text-accent">ventas@lavso.mx</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-300">
                <Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>Lun–Vie: 8:00 – 15:00 y 16:00 – 18:00 hrs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© LAVSO 2025. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/contacto" className="hover:text-accent transition-colors">Aviso de privacidad</Link>
            <Link href="/contacto" className="hover:text-accent transition-colors">Términos de uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
