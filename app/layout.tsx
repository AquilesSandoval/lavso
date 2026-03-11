import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LAVSO — Soluciones integrales para laboratorio",
    template: "%s | LAVSO",
  },
  description:
    "Proveedor líder de materiales, reactivos, consumibles y equipo científico para laboratorios en Morelia, Michoacán y toda la República Mexicana.",
  keywords: [
    "laboratorio",
    "reactivos",
    "equipo científico",
    "cristalería",
    "Morelia",
    "Michoacán",
    "proveedora laboratorio México",
  ],
  openGraph: {
    title: "LAVSO — Soluciones integrales para laboratorio",
    description:
      "Proveedor integral de insumos, reactivos y equipo científico para laboratorios científicos, industriales y académicos.",
    type: "website",
    locale: "es_MX",
    siteName: "LAVSO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${jakartaSans.variable} ${dmSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
