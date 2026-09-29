"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioImages } from "@/lib/portfolio";
import Lightbox from "@/components/Lightbox";

export default function PortfolioGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
        {portfolioImages.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: (i % 8) * 0.04,
            }}
            className={`group relative overflow-hidden bg-ink-soft ${
              img.span === 2
                ? "col-span-2 aspect-[16/10]"
                : "aspect-[2/3]"
            }`}
            aria-label={`Open photo ${i + 1} of ${portfolioImages.length}`}
          >
            <Image
              src={img.src}
              alt=""
              fill
              loading={i < 6 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={portfolioImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={(next) => setActiveIndex(next)}
      />
    </>
  );
}
