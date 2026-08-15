'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/assets/hero-main.jpg',
    alt: 'Connected real estate environment with telecom and smart technology infrastructure',
    fit: 'cover' as const,
    className: 'brightness-[0.92] contrast-[1.06] saturate-[0.88] sepia-[0.12]'
  },
  {
    src: '/assets/project-telecom-collage.jpg',
    alt: 'DeKoy telecommunications engineering project collage',
    fit: 'contain' as const,
    className: 'bg-white p-2'
  },
  {
    src: '/assets/project-dtt-comfort.jpg',
    alt: 'DeKoy residential development project at Forthright Estate',
    fit: 'cover' as const,
    className: 'brightness-[0.98] contrast-[1.04] saturate-[1.02]'
  }
];

export function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const activeSlide = slides[activeIndex];

  return (
    <div
      className="relative h-[456px] rounded-2xl bg-transparent sm:h-[540px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute inset-[8px] rounded-[14px] border-[1.5px] border-gold/80" />
      <div className="absolute inset-[18px] overflow-hidden rounded-[14px] bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.src}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.65, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              priority={activeIndex === 0}
              className={
                activeSlide.fit === 'cover'
                  ? `object-cover ${activeSlide.className}`
                  : `object-contain ${activeSlide.className}`
              }
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/18 via-transparent to-accent/16 mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(240,90,0,0.18),transparent_42%)]" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-navyDeep/70 px-3 py-2 backdrop-blur">
          {slides.map((slide, index) => {
            const active = index === activeIndex;
            return (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={active}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition ${active ? 'w-8 bg-accent' : 'w-2.5 bg-white/65 hover:bg-white'}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
