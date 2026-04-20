"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { galleryImages } from '../data/gallery';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const next = () =>
    setSelectedIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));
  const prev = () =>
    setSelectedIndex((i) =>
      i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length,
    );

  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedIndex]);

  // Varied aspect ratios create a lively masonry-ish feel while staying in a CSS grid
  const rowSpans = ['row-span-2', 'row-span-1', 'row-span-2', 'row-span-1', 'row-span-1', 'row-span-2'];

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-rose-50/60 to-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-plum-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-rose-600 mb-3">
            Our Work
          </span>
          <h2 className="section-heading font-serif font-bold text-4xl md:text-5xl text-gray-900 mb-8">
            Moments of <span className="text-gradient-rose">Beauty</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mt-4">
            A glimpse into our salon&apos;s elegant ambiance and the beautiful transformations
            we craft for every client.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {galleryImages.map((image, i) => (
            <div
              key={image.id}
              onClick={() => openLightbox(i)}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer shadow-soft hover-lift ${rowSpans[i % rowSpans.length]}`}
            >
              <Image
                src={image.imageUrl}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/70 via-rose-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-rose-600 shadow-glow transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <ZoomIn size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-3 md:left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            className="absolute right-3 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>

          <div className="relative max-w-5xl w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[85vh]">
              <Image
                src={galleryImages[selectedIndex].imageUrl}
                alt={galleryImages[selectedIndex].alt}
                fill
                className="object-contain animate-scale-in"
              />
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/90 text-sm glass-dark px-4 py-2 rounded-full">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
