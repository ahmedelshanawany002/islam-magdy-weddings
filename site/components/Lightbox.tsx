"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { PortfolioImage } from "@/lib/portfolio";

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: PortfolioImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const touchStartX = useRef<number | null>(null);
  const open = index !== null;
  const current = open ? images[index!] : null;

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/97 px-4 py-10 sm:px-8"
          onClick={onClose}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (dx > 50) goPrev();
            if (dx < -50) goNext();
            touchStartX.current = null;
          }}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 font-sans text-2xl font-light text-paper/80 transition-colors hover:text-brass-soft sm:right-8 sm:top-7"
          >
            &times;
          </button>

          <button
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 px-3 py-6 font-sans text-3xl font-light text-paper/60 transition-colors hover:text-brass-soft sm:block"
          >
            &#8249;
          </button>
          <button
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 px-3 py-6 font-sans text-3xl font-light text-paper/60 transition-colors hover:text-brass-soft sm:block"
          >
            &#8250;
          </button>

          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            <Image
              src={current.src}
              alt=""
              width={current.width}
              height={current.height}
              sizes="92vw"
              className="h-auto max-h-[82svh] w-auto max-w-[92vw] rounded-sm object-contain"
              priority
            />
          </motion.div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-[0.75rem] font-light tracking-wide text-paper/50">
            {index! + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
