import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Tag, Package } from "lucide-react";
import { products, getProductById } from "@/data/products";
import ReviewSection from "@/components/ReviewSection";
import PurchaseForm from "@/components/PurchaseForm";
import ProductCard from "@/components/ProductCard";
import { formatPrice } from "@/lib/utils";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(Number(id));
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

const categoryColors: Record<string, string> = {
  Materiales: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Consumibles: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  Reactivos: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  "Equipo Científico": "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
};

export default async function ProductoDetallePage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(Number(id));
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-16 bg-surface dark:bg-surface-dark min-h-screen">
      <div className="container-custom py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted dark:text-muted-dark mb-6">
          <Link href="/tienda" className="hover:text-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            Tienda
          </Link>
          <span>/</span>
          <Link href={`/tienda?categoria=${encodeURIComponent(product.category)}`} className="hover:text-accent transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-primary dark:text-white line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/5">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5 cursor-pointer border-2 border-transparent hover:border-accent transition-colors">
                    <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[product.category]}`}>
                {product.category}
              </span>
              {product.inStock ? (
                <span className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  En stock
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Bajo pedido
                </span>
              )}
            </div>

            <h1 className="font-sans text-2xl sm:text-3xl font-bold text-primary dark:text-white mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-300 dark:text-slate-600"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-primary dark:text-white">{product.rating}</span>
              <span className="text-sm text-muted dark:text-muted-dark">({product.reviewCount} reseñas)</span>
            </div>

            {/* Price */}
            <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              {product.price !== null ? (
                <div>
                  <span className="text-3xl font-bold font-sans text-primary dark:text-white">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-xs text-muted dark:text-muted-dark ml-2">MXN + IVA</span>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Tag className="w-4 h-4 text-accent" />
                    <span className="font-sans font-bold text-accent text-lg">Solicitar cotización</span>
                  </div>
                  <p className="text-xs text-muted dark:text-muted-dark">
                    Precio especial según cantidad y aplicación. Llena el formulario y te contactamos hoy.
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-4 h-4 text-accent" />
                <h3 className="font-sans font-semibold text-primary dark:text-white text-sm">Especificaciones técnicas</h3>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr key={spec.key} className={i % 2 === 0 ? "bg-gray-50 dark:bg-white/5" : "bg-white dark:bg-transparent"}>
                        <td className="px-4 py-2.5 font-medium text-muted dark:text-muted-dark whitespace-nowrap w-1/3">
                          {spec.key}
                        </td>
                        <td className="px-4 py-2.5 text-primary dark:text-white">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Purchase form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-3">
            <h2 className="font-sans font-bold text-xl text-primary dark:text-white mb-6">Reseñas y opiniones</h2>
            <ReviewSection
              reviews={product.reviews}
              rating={product.rating}
              reviewCount={product.reviewCount}
            />
          </div>
          <div className="lg:col-span-2">
            <PurchaseForm product={product} />
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="font-sans font-bold text-xl text-primary dark:text-white mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} delay={i * 0.06} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
