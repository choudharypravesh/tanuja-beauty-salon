"use client";
import React from 'react';
import Image from 'next/image';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '../data/testimonials';
const Testimonials: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-rose-50 via-white to-plum-50"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-plum-200/40 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-rose-600 mb-3">
            Kind Words
          </span>
          <h2 className="section-heading font-serif font-bold text-4xl md:text-5xl text-gray-900 mb-8">
            Loved by Our <span className="text-gradient-rose">Clients</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mt-4">
            Real experiences from the incredible women who trust us with their beauty.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-white shadow-card hover-lift"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Gradient top border accent */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-plum-500 rounded-b-full" />
              {/* Big quote mark */}
              <Quote
                className="absolute top-5 right-5 text-rose-100 group-hover:text-rose-200 transition-colors duration-500"
                size={56}
                strokeWidth={1}
              />
              <div className="relative">
                <div className="flex items-center gap-1 text-gold-500 mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={18} fill="currentColor" className="animate-pulse-soft" style={{ animationDelay: `${idx * 100}ms` }} />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6 text-[15px] md:text-base min-h-[7rem]">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-rose-100">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-radiant blur-md opacity-40" />
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white">
                      <Image
                        src={t.imageUrl}
                        alt={t.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-gray-900">{t.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-rose-500 font-semibold">
                      Happy Client
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button onClick={scrollToContact} className="btn-primary">
            <Sparkles size={18} />
            <span>Schedule Your Appointment</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;