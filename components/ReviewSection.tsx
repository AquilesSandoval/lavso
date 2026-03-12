"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, User, ThumbsUp } from "lucide-react";
import { Review } from "@/data/products";

interface ReviewSectionProps {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

function StarRating({ value, onChange }: { value: number; onChange?: (v: number) => void }) {
  const [hover, setHover] = useState(0);
  const interactive = Boolean(onChange);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < (hover || value);
        return (
          <button
            key={i}
            type={interactive ? "button" : undefined}
            onClick={() => onChange?.(i + 1)}
            onMouseEnter={() => interactive && setHover(i + 1)}
            onMouseLeave={() => interactive && setHover(0)}
            className={interactive ? "cursor-pointer" : "cursor-default"}
            disabled={!interactive}
          >
            <Star
              className={`w-5 h-5 transition-colors ${
                filled ? "text-amber-400 fill-amber-400" : "text-gray-300 dark:text-slate-600"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

function RatingBar({ stars, count, total }: { stars: number; count: number; total: number }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-3 text-right text-muted dark:text-muted-dark">{stars}</span>
      <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
      <div className="flex-1 h-1.5 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-amber-400 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-4 text-muted dark:text-muted-dark">{count}</span>
    </div>
  );
}

export default function ReviewSection({ reviews: initialReviews, rating, reviewCount }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newAuthor, setNewAuthor] = useState("");
  const [newInstitution, setNewInstitution] = useState("");
  const [newComment, setNewComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const distribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((r) => r.rating === stars).length,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;
    const review: Review = {
      id: String(Date.now()),
      author: newAuthor,
      institution: newInstitution || "Usuario verificado",
      rating: newRating,
      date: new Date().toISOString().split("T")[0],
      comment: newComment,
    };
    setReviews((prev) => [review, ...prev]);
    setSubmitted(true);
    setNewAuthor("");
    setNewInstitution("");
    setNewComment("");
    setNewRating(5);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="flex flex-col sm:flex-row gap-8 p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
        <div className="text-center sm:w-32">
          <div className="font-sans text-5xl font-bold text-primary dark:text-white mb-1">
            {rating.toFixed(1)}
          </div>
          <StarRating value={Math.round(rating)} />
          <div className="text-xs text-muted dark:text-muted-dark mt-1">{reviewCount} reseñas</div>
        </div>
        <div className="flex-1 space-y-1.5">
          {distribution.map(({ stars, count }) => (
            <RatingBar key={stars} stars={stars} count={count} total={reviews.length} />
          ))}
        </div>
      </div>

      {/* Add review button */}
      <div className="flex justify-between items-center">
        <h3 className="font-sans font-semibold text-primary dark:text-white">
          {reviews.length} reseñas
        </h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors"
        >
          {showForm ? "Cancelar" : "Escribir reseña"}
        </button>
      </div>

      {/* Review form */}
      <AnimatePresence>
        {showForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="overflow-hidden"
          >
            <div className="p-6 rounded-2xl border-2 border-accent/30 bg-accent/5 dark:bg-accent/10 space-y-4">
              <h4 className="font-sans font-semibold text-primary dark:text-white">Tu opinión</h4>

              <div>
                <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1.5">Calificación</label>
                <StarRating value={newRating} onChange={setNewRating} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1">Nombre</label>
                  <input
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-primary dark:text-white text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1">Institución (opcional)</label>
                  <input
                    value={newInstitution}
                    onChange={(e) => setNewInstitution(e.target.value)}
                    placeholder="Universidad o empresa"
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-primary dark:text-white text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted dark:text-muted-dark mb-1">Comentario</label>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  required
                  rows={3}
                  placeholder="Comparte tu experiencia con este producto..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-primary dark:text-white text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                />
              </div>

              {submitted ? (
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <ThumbsUp className="w-4 h-4" />
                  ¡Gracias! Tu reseña ha sido publicada.
                </div>
              ) : (
                <button
                  type="submit"
                  className="px-5 py-2 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg text-sm transition-colors"
                >
                  Publicar reseña
                </button>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Reviews list */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <User className="w-4 h-4 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="font-semibold text-sm text-primary dark:text-white">{review.author}</span>
                  <span className="text-xs text-muted dark:text-muted-dark">·</span>
                  <span className="text-xs text-muted dark:text-muted-dark">{review.institution}</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <StarRating value={review.rating} />
                  <span className="text-xs text-muted dark:text-muted-dark">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{review.comment}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
