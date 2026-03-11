"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { Product } from "@/data/products";

const schema = z.object({
  fullName: z.string().min(2, "Nombre demasiado corto"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Teléfono inválido"),
  company: z.string().min(2, "Campo requerido"),
  quantity: z.number().min(1, "Mínimo 1 unidad").max(9999),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface PurchaseFormProps {
  product: Product;
}

export default function PurchaseForm({ product }: PurchaseFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/solicitud-compra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          productId: product.id,
          productName: product.name,
          productCategory: product.category,
        }),
      });
      if (!response.ok) throw new Error("Error al enviar");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-2xl border-2 border-accent/20 bg-white dark:bg-card-dark overflow-hidden">
      <div className="bg-gradient-to-br from-primary to-primary-light p-5">
        <h3 className="font-sans font-bold text-white text-lg mb-1">Solicitar este producto</h3>
        <p className="text-slate-400 text-sm">Completa el formulario y te contactaremos en menos de 24 horas.</p>
      </div>

      <div className="p-5">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-10 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-sans font-bold text-primary dark:text-white text-lg mb-2">
                ¡Solicitud enviada!
              </h4>
              <p className="text-muted dark:text-muted-dark text-sm">
                Recibimos tu solicitud para <strong className="text-primary dark:text-white">{product.name}</strong>. Nuestro equipo te contactará pronto.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-5 px-4 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-sm font-medium text-muted dark:text-muted-dark hover:border-accent hover:text-accent transition-colors"
              >
                Enviar otra solicitud
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3"
            >
              {status === "error" && (
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                  Ocurrió un error. Por favor intenta de nuevo.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1">
                    Nombre completo *
                  </label>
                  <input
                    {...register("fullName")}
                    placeholder="Dr. Juan Pérez"
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm text-primary dark:text-white bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all ${
                      errors.fullName
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 dark:border-white/10 focus:border-accent"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="correo@institución.edu.mx"
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm text-primary dark:text-white bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all ${
                      errors.email
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 dark:border-white/10 focus:border-accent"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1">
                    Teléfono *
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="+52 443 000 0000"
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm text-primary dark:text-white bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all ${
                      errors.phone
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 dark:border-white/10 focus:border-accent"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1">
                    Empresa / Institución *
                  </label>
                  <input
                    {...register("company")}
                    placeholder="Universidad / Laboratorio"
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm text-primary dark:text-white bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all ${
                      errors.company
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 dark:border-white/10 focus:border-accent"
                    }`}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1">
                  Cantidad deseada *
                </label>
                <input
                  {...register("quantity", { valueAsNumber: true })}
                  type="number"
                  min="1"
                  defaultValue={1}
                  className={`w-full px-3 py-2.5 rounded-lg border text-sm text-primary dark:text-white bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all ${
                    errors.quantity
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 dark:border-white/10 focus:border-accent"
                  }`}
                />
                {errors.quantity && (
                  <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1">
                  Mensaje adicional
                </label>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Especificaciones adicionales, urgencia, entrega, etc."
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 text-sm text-primary dark:text-white bg-white dark:bg-white/5 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-semibold rounded-xl text-sm transition-colors duration-200"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Solicitar compra
                  </>
                )}
              </button>

              <p className="text-xs text-muted dark:text-muted-dark text-center">
                Al enviar aceptas que LAVSO procese tu información para atender tu solicitud.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
