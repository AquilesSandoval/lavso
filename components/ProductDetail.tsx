"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Tag, Package, CheckCircle, AlertCircle } from "lucide-react";
import { Product, ProductVariant, getBasePrice } from "@/data/products";
import VariantSelector from "@/components/VariantSelector";
import ReviewSection from "@/components/ReviewSection";
import PurchaseForm from "@/components/PurchaseForm";
import ProductCard from "@/components/ProductCard";

interface ProductDetailProps {
  product: Product;
  related: Product[];
}

const categoryColors: Record<string, string> = {
  Agitadores: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  Abatelenguas: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Balanzas: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

export default function ProductDetail({ product, related }: ProductDetailProps) {
  const [selection, setSelection] = useState<Record<string, string>>({});
  const [activeImage, setActiveImage] = useState(0);

  // Find exact variant match when all attributes are selected
  const selectedVariant: ProductVariant | null = useMemo(() => {
    if (Object.keys(selection).length < product.selectableAttributes.length) return null;
    return (
      product.variants.find((v) =>
        product.selectableAttributes.every((attrName) => {
          const attr = v.attributes.find((a) => a.name === attrName);
          return attr?.value === selection[attrName];
        })
      ) ?? null
    );
  }, [selection, product]);

  const displayImage = selectedVariant?.image ?? product.images[activeImage] ?? product.images[0];
  const missingAttrs = product.selectableAttributes.filter((a) => !selection[a]);
  const allSelected = missingAttrs.length === 0;

  return (
    <div className="pt-16 bg-surface dark:bg-surface-dark min-h-screen">
      <div className="container-custom py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted dark:text-muted-dark mb-6 flex-wrap">
          <Link href="/tienda" className="hover:text-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            Tienda
          </Link>
          <span>/</span>
          <Link
            href={`/tienda?categoria=${encodeURIComponent(product.category)}`}
            className="hover:text-accent transition-colors"
          >
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
                src={displayImage}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-300"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5 border-2 transition-colors ${
                      activeImage === i
                        ? "border-accent"
                        : "border-transparent hover:border-accent/40"
                    }`}
                  >
                    <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                  categoryColors[product.category] ?? "bg-gray-100 text-gray-700"
                }`}
              >
                {product.category}
              </span>
              <span className="text-xs text-muted dark:text-muted-dark font-medium">{product.brand}</span>
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
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300 dark:text-slate-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-primary dark:text-white">{product.rating}</span>
              <span className="text-sm text-muted dark:text-muted-dark">({product.reviewCount} reseñas)</span>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selectors */}
            {product.selectableAttributes.length > 0 && (
              <div className="mb-6">
                <h3 className="font-sans font-semibold text-sm text-primary dark:text-white mb-3 uppercase tracking-wide">
                  Selecciona la variante
                </h3>
                <VariantSelector
                  product={product}
                  selection={selection}
                  onSelectionChange={setSelection}
                />
              </div>
            )}

            {/* Price / variant result box */}
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              {!allSelected ? (
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Tag className="w-4 h-4 text-accent" />
                    <span className="font-sans font-bold text-accent text-lg">Solicitar cotización</span>
                  </div>
                  {missingAttrs.length > 0 && (
                    <p className="text-xs text-amber-600 dark:text-amber-400">
                      Por favor selecciona:{" "}
                      <span className="font-semibold">{missingAttrs.join(", ")}</span>
                    </p>
                  )}
                </div>
              ) : selectedVariant ? (
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Tag className="w-4 h-4 text-accent" />
                    <span className="font-sans font-bold text-accent text-lg">
                      {selectedVariant.price !== null
                        ? `$${selectedVariant.price.toLocaleString("es-MX")} MXN`
                        : "Solicitar cotización"}
                    </span>
                  </div>
                  <p className="text-xs text-muted dark:text-muted-dark mb-1.5">
                    SKU:{" "}
                    <span className="font-mono font-semibold text-primary dark:text-white">
                      {selectedVariant.sku}
                    </span>
                  </p>
                  {selectedVariant.inStock ? (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      En stock
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-red-500 dark:text-red-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Agotado — consulta disponibilidad
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Tag className="w-4 h-4 text-accent" />
                    <span className="font-sans font-bold text-accent text-lg">Solicitar cotización</span>
                  </div>
                  <p className="text-xs text-muted dark:text-muted-dark">
                    Precio especial según cantidad y aplicación.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Specs table */}
        {product.specs.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-accent" />
              <h2 className="font-sans font-bold text-xl text-primary dark:text-white">
                Especificaciones técnicas
              </h2>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 max-w-2xl">
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr
                      key={spec.key}
                      className={i % 2 === 0 ? "bg-gray-50 dark:bg-white/5" : "bg-white dark:bg-transparent"}
                    >
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
        )}

        {/* Purchase form + reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-3">
            <h2 className="font-sans font-bold text-xl text-primary dark:text-white mb-6">
              Reseñas y opiniones
            </h2>
            <ReviewSection
              reviews={product.reviews}
              rating={product.rating}
              reviewCount={product.reviewCount}
            />
          </div>
          <div className="lg:col-span-2">
            <PurchaseForm
              product={product}
              selectedVariant={selectedVariant}
              selectedAttributes={allSelected ? selection : {}}
            />
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="font-sans font-bold text-xl text-primary dark:text-white mb-6">
              Productos relacionados
            </h2>
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
