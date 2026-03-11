export type Category = "Materiales" | "Consumibles" | "Reactivos" | "Equipo Científico";

export interface Specification {
  key: string;
  value: string;
}

export interface Review {
  id: number;
  author: string;
  institution: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number | null;
  category: Category;
  specifications: Specification[];
  images: string[];
  rating: number;
  reviewCount: number;
  reviews: Review[];
  featured?: boolean;
  inStock?: boolean;
}

export const products: Product[] = [
  // ── MATERIALES ──────────────────────────────────────────────
  {
    id: 1,
    slug: "erlenmeyer-250ml",
    name: "Matraz Erlenmeyer 250 mL",
    shortDescription: "Cristalería borosilicato 3.3 de alta calidad para aplicaciones generales de laboratorio.",
    description: "El Matraz Erlenmeyer de 250 mL es una pieza fundamental en cualquier laboratorio. Fabricado en vidrio borosilicato 3.3, ofrece excelente resistencia química y térmica. Ideal para mezclas, titulaciones y reacciones en general. Su cuello cónico permite agitar sin derramamiento y facilita el uso con tapones y mangueras.",
    price: 280,
    category: "Materiales",
    specifications: [
      { key: "Capacidad", value: "250 mL" },
      { key: "Material", value: "Vidrio borosilicato 3.3" },
      { key: "Graduación", value: "Sí, cada 50 mL" },
      { key: "Tolerancia", value: "±5 mL" },
      { key: "Forma", value: "Cónica estándar" },
      { key: "Marca", value: "LAVSO / Pyrex" },
      { key: "Certificación", value: "ISO 1773" },
    ],
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=85",
      "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&q=85",
    ],
    rating: 4.8,
    reviewCount: 34,
    featured: true,
    inStock: true,
    reviews: [
      { id: 1, author: "Dr. Carlos Mendoza", institution: "UMSNH", rating: 5, date: "2025-02-10", comment: "Excelente calidad, vidrio uniforme y bien calibrado. Perfecto para nuestro laboratorio de química analítica." },
      { id: 2, author: "M.C. Laura Jiménez", institution: "CINVESTAV", rating: 5, date: "2025-01-20", comment: "Los mejores matraces que he comprado en México. Resistencia térmica comprobada." },
      { id: 3, author: "Ing. Roberto Flores", institution: "CICATA", rating: 4, date: "2024-12-15", comment: "Muy buena calidad. El embalaje llegó perfecto, sin roturas." },
    ],
  },
  {
    id: 2,
    slug: "guantes-nitrilo-talla-m",
    name: "Guantes de Nitrilo Azul Talla M (caja 100 pzas)",
    shortDescription: "Guantes de nitrilo sin polvo para máxima protección y sensibilidad táctil.",
    description: "Guantes de nitrilo de alta calidad, sin polvo y libre de látex. Ideales para el manejo de químicos, muestras biológicas y reactivos. Ofrecen excelente resistencia a perforaciones y agentes químicos. Su textura en los dedos mejora el agarre, especialmente en superficies húmedas. Cumplen con normas EN 374 y ASTM D6319.",
    price: 320,
    category: "Materiales",
    specifications: [
      { key: "Material", value: "Nitrilo sintético" },
      { key: "Talla", value: "M (Mediano)" },
      { key: "Color", value: "Azul" },
      { key: "Sin polvo", value: "Sí" },
      { key: "Sin látex", value: "Sí" },
      { key: "Cantidad", value: "100 piezas / caja" },
      { key: "Certificación", value: "EN 374, ASTM D6319" },
    ],
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=85",
      "https://images.unsplash.com/photo-1559575174-0da8d3c60a0c?w=800&q=85",
    ],
    rating: 4.7,
    reviewCount: 89,
    featured: false,
    inStock: true,
    reviews: [
      { id: 1, author: "Dra. Patricia Soto", institution: "Hospital General Morelia", rating: 5, date: "2025-03-01", comment: "Excelente calidad y precio. Los usamos diariamente en el laboratorio clínico." },
      { id: 2, author: "Q.F.B. Marco González", institution: "Laboratorio Privado", rating: 4, date: "2025-02-15", comment: "Buenos guantes, buena sensibilidad táctil. El precio es competitivo." },
    ],
  },
  {
    id: 3,
    slug: "papel-filtro-whatman-1",
    name: "Papel Filtro Whatman No. 1 (caja 100 hojas)",
    shortDescription: "Papel filtro de celulosa de uso general, retención de partículas ≥11 µm.",
    description: "El Papel Filtro Whatman No. 1 es el más utilizado en laboratorios de todo el mundo para filtraciones de uso general. Con una velocidad de filtración media y retención de partículas ≥11 µm, es ideal para análisis cualitativos, clarificación de precipitados y separación de sólidos. Disponible en presentación de 100 hojas de 11 cm de diámetro.",
    price: 450,
    category: "Materiales",
    specifications: [
      { key: "Marca", value: "Whatman / Cytiva" },
      { key: "Número", value: "1 (uso general)" },
      { key: "Diámetro", value: "11 cm" },
      { key: "Retención de partículas", value: "≥11 µm" },
      { key: "Velocidad de flujo", value: "Media" },
      { key: "Material", value: "Celulosa de alta pureza" },
      { key: "Cantidad", value: "100 hojas / caja" },
    ],
    images: [
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=85",
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=85",
    ],
    rating: 4.9,
    reviewCount: 61,
    featured: false,
    inStock: true,
    reviews: [
      { id: 1, author: "M.C. Alejandro Ramos", institution: "Facultad de Química UNAM", rating: 5, date: "2025-01-10", comment: "El clásico que nunca falla. Envío rápido y precio justo." },
      { id: 2, author: "Ing. Sofía Herrera", institution: "ININ", rating: 5, date: "2024-11-22", comment: "Imprescindible en cualquier laboratorio. Muy buena consistencia entre lotes." },
    ],
  },

  // ── CONSUMIBLES ─────────────────────────────────────────────
  {
    id: 4,
    slug: "puntas-amarillas-1000ul",
    name: "Puntas Amarillas para Micropipeta 1–1000 µL (rack 96 pzas)",
    shortDescription: "Puntas universales de polipropileno de bajo encaje para micropipetas de 200–1000 µL.",
    description: "Puntas de micropipeta fabricadas en polipropileno virgen de alta pureza, libres de DNasa, RNasa, pirógenos y metales pesados. Compatible con la mayoría de las marcas de micropipetas del mercado (Eppendorf, Gilson, Brand, LAVSO). Diseñadas para minimizar la retención de líquido. Presentadas en rack de 96 piezas listo para cargar.",
    price: 195,
    category: "Consumibles",
    specifications: [
      { key: "Rango de volumen", value: "1 – 1000 µL" },
      { key: "Material", value: "Polipropileno virgen" },
      { key: "Color", value: "Amarillo" },
      { key: "Sin DNasa / RNasa", value: "Sí" },
      { key: "Sin pirógenos", value: "Sí" },
      { key: "Presentación", value: "Rack de 96 piezas" },
      { key: "Compatibilidad", value: "Universal (Eppendorf, Gilson, LAVSO, Brand)" },
    ],
    images: [
      "https://res.cloudinary.com/djs27ftci/image/upload/v1773262948/puntas_amarillas_hzkol9.webp",
      "https://res.cloudinary.com/djs27ftci/image/upload/v1773262948/puntas_amarillas_hzkol9.webp",
    ],
    rating: 4.6,
    reviewCount: 112,
    featured: true,
    inStock: true,
    reviews: [
      { id: 1, author: "Dra. Elena Castro", institution: "IBt-UNAM", rating: 5, date: "2025-03-05", comment: "Ajuste perfecto en nuestras Eppendorf. Sin fugas. Las mejores puntas que hemos probado." },
      { id: 2, author: "M.C. Hugo Pérez", institution: "INMEGEN", rating: 4, date: "2025-02-20", comment: "Buena calidad general. Unas pocas llegaron deformadas pero LAVSO las reemplazó sin problema." },
      { id: 3, author: "Q.B. Isabel Vega", institution: "Lab. Clínico Puebla", rating: 5, date: "2025-01-18", comment: "Excelente encaje en nuestras micropipetas Gilson. Precio muy competitivo." },
    ],
  },
  {
    id: 5,
    slug: "tubos-microcentrifuga-1-5ml",
    name: "Tubos de Microcentrífuga 1.5 mL (bolsa 500 pzas)",
    shortDescription: "Microtubos con tapa snap-cap, certificados sin DNasa/RNasa para biología molecular.",
    description: "Tubos de microcentrífuga de 1.5 mL fabricados en polipropileno de calidad biológica. Tapa integrada tipo snap-cap con excelente cierre hermético. Resistentes a centrifugación hasta 25,000 × g. Superficie interior tratada para minimizar la adsorción de proteínas y ácidos nucleicos. Ideales para PCR, extracción de ADN, almacenamiento de muestras y separaciones cromatográficas.",
    price: 385,
    category: "Consumibles",
    specifications: [
      { key: "Capacidad", value: "1.5 mL" },
      { key: "Material", value: "Polipropileno grado biológico" },
      { key: "Tapa", value: "Snap-cap integrada" },
      { key: "Centrifugación máx.", value: "25,000 × g" },
      { key: "Temperatura", value: "-80 °C a +121 °C" },
      { key: "Sin DNasa/RNasa", value: "Sí" },
      { key: "Cantidad", value: "500 piezas / bolsa" },
    ],
    images: [
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=85",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=85",
    ],
    rating: 4.8,
    reviewCount: 77,
    featured: false,
    inStock: true,
    reviews: [
      { id: 1, author: "Dr. Fernando Luna", institution: "CIBNOR", rating: 5, date: "2025-02-25", comment: "Excelente calidad. Los hemos usado para almacenamiento a -80°C y funcionan perfecto." },
      { id: 2, author: "Lic. Andrea Torres", institution: "Tec de Monterrey", rating: 5, date: "2025-01-30", comment: "Nunca hemos tenido fugas. El precio por 500 pzas es muy bueno." },
    ],
  },
  {
    id: 6,
    slug: "membrana-ptfe-0-22um",
    name: "Membranas de Filtración PTFE 0.22 µm (paquete 50 pzas)",
    shortDescription: "Membranas de PTFE hidrofóbico 0.22 µm para filtración esterilizante de solventes.",
    description: "Membranas de filtración de politetrafluoroetileno (PTFE) con poro de 0.22 µm. Diseñadas para la filtración esterilizante de solventes orgánicos, aceites y líquidos agresivos. Alta resistencia química a ácidos fuertes, bases y solventes. Compatibles con porta-filtros estándar de 25 mm y 47 mm. Certificadas libre de extraíbles para HPLC.",
    price: 520,
    category: "Consumibles",
    specifications: [
      { key: "Material", value: "PTFE (Politetrafluoroetileno)" },
      { key: "Tamaño de poro", value: "0.22 µm" },
      { key: "Diámetro", value: "47 mm" },
      { key: "Hidrofilia", value: "Hidrofóbico" },
      { key: "Flujo de agua", value: ">70 mL/min/cm²" },
      { key: "Temperatura máx.", value: "260 °C" },
      { key: "Cantidad", value: "50 piezas / paquete" },
    ],
    images: [
      "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&q=85",
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=85",
    ],
    rating: 4.7,
    reviewCount: 43,
    featured: false,
    inStock: true,
    reviews: [
      { id: 1, author: "Dra. Mónica Salinas", institution: "CIAD", rating: 5, date: "2025-01-05", comment: "Perfectas para filtrar solventes HPLC. No hemos tenido problemas de compatibilidad." },
      { id: 2, author: "Ing. Raúl Núñez", institution: "Industria Farmacéutica", rating: 4, date: "2024-12-10", comment: "Buena calidad. Pedimos regularmente y siempre cumple expectativas." },
    ],
  },

  // ── REACTIVOS ───────────────────────────────────────────────
  {
    id: 7,
    slug: "acetonitrilo-hplc-grade",
    name: "Acetonitrilo Grado HPLC 2.5 L",
    shortDescription: "Acetonitrilo de alta pureza (≥99.9%) para cromatografía de alta resolución.",
    description: "Acetonitrilo grado HPLC con pureza ≥99.9%, ideal para cromatografía de alta resolución en análisis farmacéuticos, ambientales y de alimentos. Bajo contenido de agua (<50 ppm), bajas absorbancias UV y contaminantes de baja concentración. Certificado conforme a ACS y USP. Presentación de 2.5 L en botella de vidrio ámbar con tapa de seguridad.",
    price: 1850,
    category: "Reactivos",
    specifications: [
      { key: "Fórmula", value: "CH₃CN" },
      { key: "Pureza", value: "≥99.9% (GC)" },
      { key: "Grado", value: "HPLC / Espectroscópico" },
      { key: "Agua (Karl Fischer)", value: "≤50 ppm" },
      { key: "Punto de ebullición", value: "81–82 °C" },
      { key: "Absorvancia UV a 200 nm", value: "<1.0 AU" },
      { key: "Presentación", value: "2.5 L botella vidrio ámbar" },
      { key: "Marca", value: "Sigma-Aldrich / Honeywell Burdick & Jackson" },
    ],
    images: [
      "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&q=85",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=85",
    ],
    rating: 4.9,
    reviewCount: 28,
    featured: true,
    inStock: true,
    reviews: [
      { id: 1, author: "Dra. Claudia Ramírez", institution: "CIO-León", rating: 5, date: "2025-03-02", comment: "Pureza impecable. Exactamente lo que necesitamos para nuestros análisis de HPLC-MS." },
      { id: 2, author: "Q.I. Arturo Blanco", institution: "COFEPRIS", rating: 5, date: "2025-01-25", comment: "Lote consistente, certificado de análisis completo. Excelente proveedor." },
    ],
  },
  {
    id: 8,
    slug: "acido-sulfurico-95-98",
    name: "Ácido Sulfúrico 95–98% Grado ACS 2.5 L",
    shortDescription: "Ácido sulfúrico concentrado de alta pureza para digestiones y síntesis.",
    description: "Ácido sulfúrico concentrado (H₂SO₄) con pureza 95–98% grado ACS. Ampliamente utilizado en digestiones de muestras, síntesis orgánica, determinaciones electroquímicas y tratamiento de superficies. Presentado en botella de polipropileno de alta densidad con tapa de seguridad. Incluye hoja de seguridad (SDS) conforme a GHS.",
    price: 980,
    category: "Reactivos",
    specifications: [
      { key: "Fórmula", value: "H₂SO₄" },
      { key: "Concentración", value: "95–98%" },
      { key: "Grado", value: "ACS Reagent" },
      { key: "Densidad", value: "1.84 g/mL a 20°C" },
      { key: "Cloruros (Cl)", value: "≤0.0002%" },
      { key: "Metales pesados (Pb)", value: "≤0.0005%" },
      { key: "Presentación", value: "2.5 L botella HDPE" },
    ],
    images: [
      "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&q=85",
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=85",
    ],
    rating: 4.7,
    reviewCount: 19,
    featured: false,
    inStock: true,
    reviews: [
      { id: 1, author: "Dr. Ernesto Vargas", institution: "ENAP-UNAM", rating: 5, date: "2025-02-08", comment: "Calidad ACS garantizada. El embalaje de seguridad es excelente para el transporte." },
      { id: 2, author: "M.C. Valeria Mora", institution: "CICESE", rating: 4, date: "2024-12-20", comment: "Buen reactivo. El tiempo de entrega es razonable." },
    ],
  },
  {
    id: 9,
    slug: "tris-base-molecular-biology",
    name: "Tris Base Grado Biología Molecular 500 g",
    shortDescription: "Tris(hidroximetil)aminometano de alta pureza para preparación de buffers de electroforesis.",
    description: "Tris Base (Tris(hidroximetil)aminometano) con pureza ≥99.9% para aplicaciones de biología molecular. Fundamental en la preparación de buffers TE, TAE, TBE y SDS-PAGE. Bajo contenido de metales pesados y DNasas/RNasas. Compatible con cultivos celulares. Presentación de 500 g con certificado de análisis por lote.",
    price: 750,
    category: "Reactivos",
    specifications: [
      { key: "Nombre IUPAC", value: "2-Amino-2-(hidroximetil)-1,3-propanodiol" },
      { key: "Pureza", value: "≥99.9% (titulometría)" },
      { key: "Grado", value: "Biología Molecular / Electroforesis" },
      { key: "pH (0.1 M a 25°C)", value: "10.3 – 10.6" },
      { key: "Sin DNasa / RNasa", value: "Sí" },
      { key: "Metales pesados", value: "<5 ppm" },
      { key: "Presentación", value: "500 g frasco HDPE" },
    ],
    images: [
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=85",
      "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&q=85",
    ],
    rating: 4.8,
    reviewCount: 52,
    featured: false,
    inStock: true,
    reviews: [
      { id: 1, author: "Dra. Natalia Fuentes", institution: "Laboratorio de Genómica, UMSNH", rating: 5, date: "2025-03-10", comment: "Excelente Tris. Los geles de electroforesis quedan perfectos." },
      { id: 2, author: "M.C. Javier Ortega", institution: "Centro de Biología Experimental UAZ", rating: 5, date: "2025-02-01", comment: "Pureza comprobada, solubilidad perfecta. Seguiremos comprando aquí." },
    ],
  },

  // ── EQUIPO CIENTÍFICO ────────────────────────────────────────
  {
    id: 10,
    slug: "balanza-analitica-0-1mg",
    name: "Balanza Analítica 220 g / 0.1 mg",
    shortDescription: "Balanza de precisión con readabilidad de 0.1 mg, pantalla táctil y calibración automática.",
    description: "Balanza analítica de cuatro cifras decimales con capacidad de 220 g y readabilidad de 0.1 mg. Pantalla táctil a color de 4.3\". Calibración automática con pesas internas certificadas. Funciones de pesaje estadístico, formulación, conteo de piezas y factor de densidad. Cámara antivibraciones con puertas deslizantes. Interfaz USB y RS-232. Cumple con OIML R76 y NIST.",
    price: null,
    category: "Equipo Científico",
    specifications: [
      { key: "Capacidad máxima", value: "220 g" },
      { key: "Readabilidad", value: "0.1 mg (4 cifras)" },
      { key: "Repetibilidad", value: "0.1 mg" },
      { key: "Linealidad", value: "±0.2 mg" },
      { key: "Pantalla", value: "Táctil 4.3\" a color" },
      { key: "Calibración", value: "Automática interna (FACT)" },
      { key: "Interfaces", value: "USB, RS-232" },
      { key: "Dimensiones plato", value: "90 mm × 90 mm" },
      { key: "Marca", value: "Mettler Toledo / Radwag" },
      { key: "Certificación", value: "OIML R76, CE" },
    ],
    images: [
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=85",
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=85",
    ],
    rating: 4.9,
    reviewCount: 15,
    featured: true,
    inStock: false,
    reviews: [
      { id: 1, author: "Dr. Ricardo Estrada", institution: "Universidad Autónoma de Querétaro", rating: 5, date: "2025-02-28", comment: "Precisión impecable. La pantalla táctil es muy intuitiva y la calibración automática nos ahorra tiempo." },
      { id: 2, author: "Q.F.B. Carmen López", institution: "Laboratorio Control Calidad FEMSA", rating: 5, date: "2025-01-15", comment: "Excelente inversión. Ya llevamos 8 meses de uso intenso sin ningún problema." },
    ],
  },
  {
    id: 11,
    slug: "microscopio-biologico-binocular",
    name: "Microscopio Biológico Binocular 40x–1000x",
    shortDescription: "Microscopio óptico compuesto con sistema óptico infinito, LED de 3 W y campo visual amplio.",
    description: "Microscopio biológico binocular con sistema óptico de infinito, ideal para histología, microbiología, hematología y citología. Incluye cuatro objetivos plan acromáticos (4×, 10×, 40×, 100× con aceite). Iluminación LED de 3 W con ajuste de intensidad. Platina mecánica XY de doble capa. Revólver cuádruple. Enfoque coaxial con limites de protección. Incluye cubierta antipolvo y aceite de inmersión.",
    price: null,
    category: "Equipo Científico",
    specifications: [
      { key: "Sistema óptico", value: "Infinito, UIS2" },
      { key: "Oculares", value: "WF10× / 22 mm campo ancho" },
      { key: "Objetivos", value: "Plan acromáticos 4×, 10×, 40×, 100× (aceite)" },
      { key: "Magnificaciones", value: "40×, 100×, 400×, 1000×" },
      { key: "Iluminación", value: "LED 3 W, ajustable" },
      { key: "Platina", value: "Mecánica XY 152×152 mm" },
      { key: "Condensador", value: "Abbe N.A. 1.25 con diafragma iris" },
      { key: "Marca", value: "Olympus / Labomed" },
    ],
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=85",
      "https://images.unsplash.com/photo-1618015359417-bcc69b2a8cce?w=800&q=85",
    ],
    rating: 4.8,
    reviewCount: 22,
    featured: true,
    inStock: false,
    reviews: [
      { id: 1, author: "Dr. Gerardo Ibarra", institution: "Fac. Medicina UMSNH", rating: 5, date: "2025-03-08", comment: "Óptica excelente, imagen muy nítida incluso en 1000×. Recomendado para enseñanza e investigación." },
      { id: 2, author: "M.C. Sandra Ruiz", institution: "Lab. Fitopatología INIFAP", rating: 5, date: "2025-01-28", comment: "El mejor microscopio que hemos comprado para nuestra institución. La atención de LAVSO fue impecable." },
    ],
  },
  {
    id: 12,
    slug: "centrifuga-refrigerada-15000rpm",
    name: "Centrífuga Refrigerada de Alta Velocidad 15,000 RPM",
    shortDescription: "Centrífuga refrigerada con rotor de ángulo fijo, control de velocidad y temperatura.",
    description: "Centrífuga refrigerada de alta velocidad con velocidad máxima de 15,000 RPM y fuerza centrífuga relativa (RCF) de hasta 21,130 × g. Sistema de refrigeración integrado con control de temperatura de -10 °C a +40 °C. Rotor de ángulo fijo de 24 × 1.5/2.0 mL incluido. Panel táctil de 5\" con 9 programas almacenables. Sistema de seguridad automático: lid lock, desequilibrio, velocidad y temperatura. Ideal para biología molecular, microbiología y bioquímica.",
    price: null,
    category: "Equipo Científico",
    specifications: [
      { key: "Velocidad máxima", value: "15,000 RPM" },
      { key: "RCF máximo", value: "21,130 × g" },
      { key: "Rango de temperatura", value: "-10 °C a +40 °C" },
      { key: "Rotor incluido", value: "Ángulo fijo 24 × 1.5/2.0 mL" },
      { key: "Pantalla", value: "Táctil 5\"" },
      { key: "Programas", value: "9 programas almacenables" },
      { key: "Ruido", value: "<55 dB" },
      { key: "Alimentación", value: "110–220 V / 50–60 Hz" },
      { key: "Marca", value: "Eppendorf / Hermle" },
      { key: "Certificación", value: "CE, IVD" },
    ],
    images: [
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=85",
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=85",
    ],
    rating: 4.9,
    reviewCount: 11,
    featured: true,
    inStock: false,
    reviews: [
      { id: 1, author: "Dra. Adriana Méndez", institution: "Instituto de Investigaciones Biomédicas UNAM", rating: 5, date: "2025-02-20", comment: "Excelente equipo, muy silencioso para su capacidad. La refrigeración responde muy bien." },
      { id: 2, author: "M.C. Luis Castillo", institution: "IMSS Morelia", rating: 5, date: "2025-01-10", comment: "LAVSO nos apoyó con la instalación y capacitación. Equipo de primera." },
    ],
  },
  {
    id: 13,
    slug: "agitador-orbital-de-mesa",
    name: "Agitador Orbital de Mesa 50–250 RPM",
    shortDescription: "Agitador orbital con plataforma universal, velocidad variable y temporizador digital.",
    description: "Agitador orbital de mesa con movimiento circular suave, ideal para cultivos celulares, incubación de muestras, extracción y mezcla de soluciones. Velocidad ajustable de 50 a 250 RPM con control digital. Plataforma de agitación de acero inoxidable de 30 × 30 cm con clips universales incluidos. Temporizador de 1 a 9999 minutos o funcionamiento continuo. Diseño de bajo perfil para uso en incubadora o cámara de flujo laminar.",
    price: null,
    category: "Equipo Científico",
    specifications: [
      { key: "Tipo de movimiento", value: "Orbital circular" },
      { key: "Velocidad", value: "50–250 RPM" },
      { key: "Diámetro orbital", value: "19 mm" },
      { key: "Plataforma", value: "Acero inox. 30×30 cm" },
      { key: "Carga máxima", value: "4 kg" },
      { key: "Temporizador", value: "1–9999 min / continuo" },
      { key: "Dimensiones", value: "38×38×12 cm" },
      { key: "Marca", value: "IKA / Thermo Fisher" },
    ],
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=85",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=85",
    ],
    rating: 4.6,
    reviewCount: 8,
    featured: false,
    inStock: false,
    reviews: [
      { id: 1, author: "M.C. Beatriz Navarro", institution: "CIAD Mazatlán", rating: 5, date: "2025-03-01", comment: "Silencioso y estable incluso a 250 RPM. Perfecto para nuestro laboratorio de microbiología." },
    ],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export const categories: Category[] = [
  "Materiales",
  "Consumibles",
  "Reactivos",
  "Equipo Científico",
];
