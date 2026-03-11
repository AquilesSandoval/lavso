"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Nombre demasiado corto"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Teléfono inválido"),
  category: z.string().min(1, "Selecciona una categoría"),
  message: z.string().min(10, "Mensaje demasiado corto"),
});

type FormData = z.infer<typeof schema>;

const consultCategories = [
  "Productos / Reactivos",
  "Equipo científico",
  "Mantenimiento de equipos",
  "Diseño de laboratorio",
  "Importaciones",
  "Cotización",
  "Otro",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    reset();
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-primary dark:text-white bg-white dark:bg-white/5 placeholder:text-muted dark:placeholder:text-muted-dark focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all ${
      hasError
        ? "border-red-400 focus:border-red-400"
        : "border-gray-200 dark:border-white/10 focus:border-accent"
    }`;

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-16 text-center"
        >
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h3 className="font-sans font-bold text-2xl text-primary dark:text-white mb-3">
            ¡Mensaje recibido!
          </h3>
          <p className="text-muted dark:text-muted-dark max-w-md mx-auto">
            Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá en menos de 24 horas hábiles.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-sm font-medium text-muted dark:text-muted-dark hover:border-accent hover:text-accent transition-colors"
          >
            Enviar otro mensaje
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
              Ocurrió un error. Por favor intenta de nuevo.
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1.5">Nombre completo *</label>
              <input {...register("name")} placeholder="Tu nombre" className={inputClass(!!errors.name)} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1.5">Correo electrónico *</label>
              <input {...register("email")} type="email" placeholder="correo@ejemplo.com" className={inputClass(!!errors.email)} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1.5">Teléfono *</label>
              <input {...register("phone")} placeholder="+52 443 000 0000" className={inputClass(!!errors.phone)} />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1.5">Categoría de consulta *</label>
              <select {...register("category")} className={inputClass(!!errors.category)}>
                <option value="">Seleccionar...</option>
                {consultCategories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1.5">Mensaje *</label>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Describe tu consulta, necesidad o solicitud..."
              className={`${inputClass(!!errors.message)} resize-none`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-semibold rounded-xl transition-colors duration-200"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Enviar mensaje
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
