export interface VariantAttribute {
  name: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  sku: string;
  attributes: VariantAttribute[];
  price: number | null;
  inStock: boolean;
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  institution: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  images: string[];
  selectableAttributes: string[];
  variants: ProductVariant[];
  specs: { key: string; value: string }[];
  rating: number;
  reviewCount: number;
  reviews: Review[];
  featured?: boolean;
}

export const products: Product[] = [
  // ── IKA MS 3 ─────────────────────────────────────────────────
  {
    id: "ika-ms3",
    name: "IKA Agitador Vortex Modelo MS 3",
    brand: "IKA",
    category: "Agitadores",
    description:
      "Agitador vortex de tamaño compacto, versátil para múltiples usos en laboratorio. Ideal para mezclar muestras en tubos de ensayo, viales y recipientes pequeños. Operación continua o por contacto.",
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=85",
      "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&q=85",
    ],
    selectableAttributes: ["Modelo", "Pantalla", "Timer"],
    variants: [
      {
        id: "ika-ms3-basic",
        sku: "IKA-0003617000",
        attributes: [
          { name: "Modelo", value: "MS 3 basic" },
          { name: "Pantalla", value: "Sin pantalla" },
          { name: "Timer", value: "Sin timer" },
        ],
        price: null,
        inStock: true,
      },
      {
        id: "ika-ms3-digital",
        sku: "IKA-0003319000",
        attributes: [
          { name: "Modelo", value: "MS 3 digital" },
          { name: "Pantalla", value: "LED" },
          { name: "Timer", value: "999 min" },
        ],
        price: null,
        inStock: true,
      },
      {
        id: "ika-ms3-control",
        sku: "IKA-0020016017",
        attributes: [
          { name: "Modelo", value: "MS 3 control" },
          { name: "Pantalla", value: "LCD" },
          { name: "Timer", value: "3,599 min" },
        ],
        price: null,
        inStock: true,
      },
    ],
    specs: [
      { key: "Material", value: "Plástico ABS" },
      { key: "Velocidad", value: "0 - 3,000 rpm" },
      { key: "Tipo de movimiento", value: "Orbital" },
      { key: "Voltaje", value: "100-240 V" },
      { key: "Peso", value: "~1 kg" },
    ],
    rating: 4.8,
    reviewCount: 34,
    featured: true,
    reviews: [
      {
        id: "r1",
        author: "Dr. Carlos Mendoza",
        institution: "UMSNH",
        rating: 5,
        date: "2025-02-10",
        comment:
          "Excelente agitador, muy silencioso y confiable. El modelo digital es perfecto para nuestro laboratorio.",
      },
      {
        id: "r2",
        author: "M.C. Laura Jiménez",
        institution: "CINVESTAV",
        rating: 5,
        date: "2025-01-20",
        comment: "Compacto pero muy potente. Lo usamos a diario sin problemas.",
      },
      {
        id: "r3",
        author: "Ing. Roberto Flores",
        institution: "CICATA",
        rating: 4,
        date: "2024-12-15",
        comment: "Muy buena calidad. El embalaje llegó perfecto.",
      },
    ],
  },

  // ── LANCETAHG Abatelenguas ────────────────────────────────────
  {
    id: "lancetahg-abatelenguas",
    name: "Abatelenguas de madera LANCETAHG",
    brand: "LANCETAHG",
    category: "Abatelenguas",
    description:
      "Abatelenguas de madera desechable para exploración médica con puntas redondas. Uso clínico y de diagnóstico general. Fabricados en madera de abedul de grado médico.",
    images: [
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=85",
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=85",
    ],
    selectableAttributes: ["Calidad", "Presentación"],
    variants: [
      {
        id: "lan-estandar-500",
        sku: "LAN-085-003",
        attributes: [
          { name: "Calidad", value: "Estándar (No estéril)" },
          { name: "Presentación", value: "500 piezas" },
        ],
        price: null,
        inStock: true,
      },
      {
        id: "lan-premium-500",
        sku: "LAN-031-015",
        attributes: [
          { name: "Calidad", value: "Premium (encerado sin astillas)" },
          { name: "Presentación", value: "500 piezas" },
        ],
        price: null,
        inStock: true,
      },
    ],
    specs: [
      { key: "Material", value: "Madera de abedul" },
      { key: "Largo", value: "15 cm" },
      { key: "Ancho", value: "1.8 cm" },
      { key: "Puntas", value: "Redondas" },
      { key: "Uso", value: "Desechable" },
    ],
    rating: 4.6,
    reviewCount: 89,
    featured: false,
    reviews: [
      {
        id: "r1",
        author: "Dra. Patricia Soto",
        institution: "Hospital General Morelia",
        rating: 5,
        date: "2025-03-01",
        comment:
          "Excelente calidad y precio. Los premium son notablemente mejores, sin astillas.",
      },
      {
        id: "r2",
        author: "Q.F.B. Marco González",
        institution: "Laboratorio Privado",
        rating: 4,
        date: "2025-02-15",
        comment: "Buena calidad general. Precio competitivo.",
      },
    ],
  },

  // ── KIMAX Varilla ─────────────────────────────────────────────
  {
    id: "kimax-varilla",
    name: "Agitador de varilla sólida KIMAX",
    brand: "KIMAX",
    category: "Agitadores",
    description:
      "Agitador de varilla sólida en vidrio de borosilicato con puntas redondeadas en forma de gota. Alta resistencia química y térmica. Ideal para agitar soluciones en vasos de precipitados y matraces.",
    images: [
      "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&q=85",
      "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&q=85",
    ],
    selectableAttributes: ["Diámetro", "Largo"],
    variants: [
      {
        id: "kx-4mm-125mm",
        sku: "KX-40500-125",
        attributes: [
          { name: "Diámetro", value: "4 mm" },
          { name: "Largo", value: "125 mm" },
        ],
        price: null,
        inStock: true,
      },
      {
        id: "kx-6mm-250mm",
        sku: "KX-40500-250",
        attributes: [
          { name: "Diámetro", value: "6 mm" },
          { name: "Largo", value: "250 mm" },
        ],
        price: null,
        inStock: true,
      },
      {
        id: "kx-7mm-300mm",
        sku: "KX-40500-300",
        attributes: [
          { name: "Diámetro", value: "7 mm" },
          { name: "Largo", value: "300 mm" },
        ],
        price: null,
        inStock: true,
      },
      {
        id: "kx-8mm-350mm",
        sku: "KX-40500-350",
        attributes: [
          { name: "Diámetro", value: "8 mm" },
          { name: "Largo", value: "350 mm" },
        ],
        price: null,
        inStock: false,
      },
      {
        id: "kx-10mm-400mm",
        sku: "KX-40500-400",
        attributes: [
          { name: "Diámetro", value: "10 mm" },
          { name: "Largo", value: "400 mm" },
        ],
        price: null,
        inStock: true,
      },
      {
        id: "kx-12mm-450mm",
        sku: "KX-40500-450",
        attributes: [
          { name: "Diámetro", value: "12 mm" },
          { name: "Largo", value: "450 mm" },
        ],
        price: null,
        inStock: true,
      },
    ],
    specs: [
      { key: "Material", value: "Vidrio borosilicato" },
      { key: "Forma de punta", value: "Gota redondeada" },
      { key: "Tipo", value: "Varilla sólida" },
      { key: "Resistencia térmica", value: "Hasta 500°C" },
      { key: "Autoclavable", value: "Sí" },
    ],
    rating: 4.7,
    reviewCount: 61,
    featured: false,
    reviews: [
      {
        id: "r1",
        author: "M.C. Alejandro Ramos",
        institution: "Facultad de Química UNAM",
        rating: 5,
        date: "2025-01-10",
        comment: "Vidrio de excelente calidad. Las puntas redondeadas son perfectas.",
      },
      {
        id: "r2",
        author: "Ing. Sofía Herrera",
        institution: "ININ",
        rating: 5,
        date: "2024-11-22",
        comment: "Resistencia química y térmica comprobadas. Muy consistentes entre lotes.",
      },
    ],
  },

  // ── Poly Lab Agitador ─────────────────────────────────────────
  {
    id: "polylab-agitador",
    name: "Agitador de plástico Poly Lab",
    brand: "Poly Lab",
    category: "Agitadores",
    description:
      "Agitador de plástico con puntas redondas en forma de gota, fabricado en polipropileno. Autoclavable y reutilizable. Alternativa económica y segura a las varillas de vidrio.",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=85",
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=85",
    ],
    selectableAttributes: ["Diámetro", "Largo"],
    variants: [
      {
        id: "pl-10mm-250mm",
        sku: "PL-81401",
        attributes: [
          { name: "Diámetro", value: "10 mm" },
          { name: "Largo", value: "250 mm" },
        ],
        price: null,
        inStock: true,
      },
      {
        id: "pl-6mm-150mm",
        sku: "PL-81404",
        attributes: [
          { name: "Diámetro", value: "6 mm" },
          { name: "Largo", value: "150 mm" },
        ],
        price: null,
        inStock: true,
      },
      {
        id: "pl-8mm-200mm",
        sku: "PL-81402",
        attributes: [
          { name: "Diámetro", value: "8 mm" },
          { name: "Largo", value: "200 mm" },
        ],
        price: null,
        inStock: true,
      },
      {
        id: "pl-7mm-175mm",
        sku: "PL-81403",
        attributes: [
          { name: "Diámetro", value: "7 mm" },
          { name: "Largo", value: "175 mm" },
        ],
        price: null,
        inStock: false,
      },
      {
        id: "pl-5mm-125mm",
        sku: "PL-81405",
        attributes: [
          { name: "Diámetro", value: "5 mm" },
          { name: "Largo", value: "125 mm" },
        ],
        price: null,
        inStock: true,
      },
    ],
    specs: [
      { key: "Material", value: "Polipropileno (PP)" },
      { key: "Forma de punta", value: "Gota redondeada" },
      { key: "Autoclavable", value: "Sí (121°C)" },
      { key: "Reutilizable", value: "Sí" },
      { key: "Color", value: "Translúcido" },
    ],
    rating: 4.5,
    reviewCount: 43,
    featured: false,
    reviews: [
      {
        id: "r1",
        author: "Dra. Elena Castro",
        institution: "IBt-UNAM",
        rating: 5,
        date: "2025-03-05",
        comment:
          "Excelente alternativa a las varillas de vidrio. Ligeros, duraderos y económicos.",
      },
      {
        id: "r2",
        author: "M.C. Hugo Pérez",
        institution: "INMEGEN",
        rating: 4,
        date: "2025-02-20",
        comment: "Buena calidad. Se autoclaván perfectamente sin deformarse.",
      },
    ],
  },

  // ── OHAUS Explorer ───────────────────────────────────────────
  {
    id: "ohaus-explorer",
    name: "Balanza OHAUS Serie Explorer (Semi-Micro)",
    brand: "OHAUS",
    category: "Balanzas",
    description:
      "Balanzas de precisión semi-micro con pantalla gráfica a color tipo VGA, 4 sensores infrarrojos para operación sin contacto y sistema de calibración interno AutoCal. Diseñadas para laboratorios de investigación, control de calidad y entornos regulados.",
    images: [
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=85",
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=85",
    ],
    selectableAttributes: ["Modelo", "Capacidad", "Sensibilidad"],
    variants: [
      {
        id: "ohs-ex125d",
        sku: "OHS-30139510",
        attributes: [
          { name: "Modelo", value: "EX125D" },
          { name: "Capacidad", value: "52g / 120g" },
          { name: "Sensibilidad", value: "0.01 mg / 0.1 mg" },
        ],
        price: null,
        inStock: true,
      },
      {
        id: "ohs-ex225d",
        sku: "OHS-30139512",
        attributes: [
          { name: "Modelo", value: "EX225D/AD" },
          { name: "Capacidad", value: "120g / 220g" },
          { name: "Sensibilidad", value: "0.01 mg" },
        ],
        price: null,
        inStock: true,
      },
    ],
    specs: [
      { key: "Pantalla", value: "VGA color táctil" },
      { key: "Calibración", value: "AutoCal interno" },
      { key: "Sensores", value: "4 IR (sin contacto)" },
      { key: "Interfaz", value: "USB, RS232, Ethernet" },
      { key: "Cámara de pesaje", value: "Incluida" },
      { key: "Certificación", value: "GLP/GMP compatible" },
    ],
    rating: 4.9,
    reviewCount: 15,
    featured: true,
    reviews: [
      {
        id: "r1",
        author: "Dr. Ricardo Estrada",
        institution: "Universidad Autónoma de Querétaro",
        rating: 5,
        date: "2025-02-28",
        comment:
          "Precisión impecable. Los 4 sensores IR hacen la operación muy cómoda. Pantalla táctil excelente.",
      },
      {
        id: "r2",
        author: "Q.F.B. Carmen López",
        institution: "Laboratorio Control Calidad FEMSA",
        rating: 5,
        date: "2025-01-15",
        comment:
          "La calibración AutoCal es perfecta para ambientes GMP. Llevamos 8 meses sin problemas.",
      },
    ],
  },
];

/** Devuelve el precio base (el mínimo no nulo entre variantes, o null si todos son null) */
export function getBasePrice(product: Product): number | null {
  const prices = product.variants
    .filter((v) => v.price !== null)
    .map((v) => v.price as number);
  if (prices.length === 0) return null;
  return Math.min(...prices);
}

/** True si al menos una variante tiene stock */
export function hasStock(product: Product): boolean {
  return product.variants.some((v) => v.inStock);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export const categories: string[] = [
  ...new Set(products.map((p) => p.category)),
];
