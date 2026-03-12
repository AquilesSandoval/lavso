"use client";

import { Product, ProductVariant } from "@/data/products";

interface VariantSelectorProps {
  product: Product;
  selection: Record<string, string>;
  onSelectionChange: (selection: Record<string, string>) => void;
}

type ValueStatus = "available" | "out_of_stock" | "incompatible";

function getCompatibleVariants(
  variants: ProductVariant[],
  selection: Record<string, string>
): ProductVariant[] {
  return variants.filter((variant) =>
    Object.entries(selection).every(([name, val]) => {
      const attr = variant.attributes.find((a) => a.name === name);
      return attr?.value === val;
    })
  );
}

function getValueStatus(
  variants: ProductVariant[],
  selection: Record<string, string>,
  attrName: string,
  attrValue: string
): ValueStatus {
  // Check compatibility using all selected attributes EXCEPT the one we're testing
  const selectionWithoutAttr = Object.fromEntries(
    Object.entries(selection).filter(([k]) => k !== attrName)
  );
  const testSelection = { ...selectionWithoutAttr, [attrName]: attrValue };
  const compatible = getCompatibleVariants(variants, testSelection);
  if (compatible.length === 0) return "incompatible";
  if (compatible.every((v) => !v.inStock)) return "out_of_stock";
  return "available";
}

export default function VariantSelector({
  product,
  selection,
  onSelectionChange,
}: VariantSelectorProps) {
  // Build ordered unique values per attribute from the variants
  const attributeValues: Record<string, string[]> = {};
  for (const attrName of product.selectableAttributes) {
    const seen = new Set<string>();
    const vals: string[] = [];
    for (const variant of product.variants) {
      const attr = variant.attributes.find((a) => a.name === attrName);
      if (attr && !seen.has(attr.value)) {
        seen.add(attr.value);
        vals.push(attr.value);
      }
    }
    attributeValues[attrName] = vals;
  }

  const handleSelect = (attrName: string, attrValue: string) => {
    if (selection[attrName] === attrValue) {
      // Deselect
      const next = { ...selection };
      delete next[attrName];
      onSelectionChange(next);
    } else {
      onSelectionChange({ ...selection, [attrName]: attrValue });
    }
  };

  return (
    <div className="space-y-5">
      {product.selectableAttributes.map((attrName) => {
        const values = attributeValues[attrName] ?? [];
        const selectedValue = selection[attrName];

        return (
          <div key={attrName}>
            <p className="text-sm font-semibold text-primary dark:text-white mb-2.5">
              {attrName}
              {selectedValue && (
                <>
                  {": "}
                  <span className="text-accent">{selectedValue}</span>
                </>
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => {
                const status = getValueStatus(product.variants, selection, attrName, value);
                const isSelected = selectedValue === value;
                const isIncompatible = status === "incompatible";
                const isOutOfStock = status === "out_of_stock";

                return (
                  <button
                    key={value}
                    type="button"
                    disabled={isIncompatible}
                    onClick={() => !isIncompatible && handleSelect(attrName, value)}
                    className={[
                      "relative inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm transition-all duration-150 select-none focus:outline-none",
                      isIncompatible
                        ? "border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                        : isSelected
                          ? "border-2 border-teal-600 bg-teal-50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 font-bold cursor-pointer ring-2 ring-teal-600/20"
                          : isOutOfStock
                            ? "border border-dashed border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-gray-500 dark:text-gray-400 cursor-pointer hover:border-teal-500 dark:hover:border-teal-500"
                            : "border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-gray-700 dark:text-white cursor-pointer hover:border-teal-500 dark:hover:border-teal-500",
                    ].join(" ")}
                  >
                    {value}
                    {isOutOfStock && (
                      <span className="text-[10px] font-bold text-red-500 dark:text-red-400 uppercase tracking-wide leading-none">
                        Agotado
                      </span>
                    )}

                    {/* Diagonal line for incompatible options */}
                    {isIncompatible && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          preserveAspectRatio="none"
                          viewBox="0 0 100 100"
                        >
                          <line
                            x1="0"
                            y1="100"
                            x2="100"
                            y2="0"
                            stroke="#d1d5db"
                            strokeWidth="1.5"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
