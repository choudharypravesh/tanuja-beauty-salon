"use client";

import Image from 'next/image';
import { ChevronDown, Sparkles, Star, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-blush">
      {/* Soft animated blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[480px] h-[480px] bg-rose-300/40 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-32 w-[520px] h-[520px] bg-plum-300/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-gold-200/40 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Sparkle accents */}
      <Sparkles className="absolute top-28 left-[15%] text-rose-400/70 animate-sparkle" size={22} />
      <Sparkles className="absolute top-44 right-[18%] text-gold-400/80 animate-sparkle" style={{ animationDelay: '0.6s' }} size={18} />
      <Star className="absolute bottom-32 left-[8%] text-plum-400/70 animate-sparkle" style={{ animationDelay: '1.2s' }} size={20} />
      <Heart className="absolute bottom-44 right-[10%] text-rose-400/80 animate-sparkle" style={{ animationDelay: '0.3s' }} size={22} />

      <div className="container mx-auto px-4 md:px-6 pt-32 md:pt-36 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-rose-700 text-xs md:text-sm font-medium mb-6 shadow-glow">
              <Sparkles size={14} className="text-gold-500" />
              <span className="tracking-wider uppercase">Bhopal&apos;s Premier Beauty Destination</span>
            </div>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-gray-900 mb-6">
              Where Your{' '}
              <span className="relative inline-block">
                <span className="text-gradient-rose animate-gradient-x">Beauty</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,5 Q50,0 100,5 T200,5"
                    stroke="url(#heroStroke)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="heroStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#e11d48" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              Story Begins
            </h1>

            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Step into <span className="font-semibold text-rose-700">Tanu&apos;s Salon Dé Beauté</span> —
              a sanctuary of bridal artistry, glowing skin, and personalized luxury in the heart of Bhopal. Over 15 years of expertise, delivered with love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                <Sparkles size={18} />
                <span>Book Appointment</span>
              </button>
              <button onClick={() => scrollToSection('services')} className="btn-outline">
                Explore Services
              </button>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-6 border-t border-rose-200/60">
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-gradient-rose">15+</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-gradient-rose">5K+</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-gradient-rose">16+</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">Services</div>
              </div>
            </div>
          </div>

          {/* Right - Layered Image Collage */}
          <div className="relative h-[520px] md:h-[600px] lg:h-[640px] animate-fade-in">
            {/* Decorative ring */}
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full border-2 border-dashed border-rose-300/70 animate-spin-slow" />
            <div className="absolute top-6 right-10 w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-plum-500 animate-pulse-soft" />

            {/* Primary image */}
            <div className="absolute top-0 right-0 w-[72%] h-[70%] rounded-[2.5rem] overflow-hidden shadow-card ring-1 ring-white/60">
              <Image
                src="/images/indian_women_going_through_bridal_makeup.jpeg"
                alt="Bridal makeup at Tanu's Salon Dé Beauté"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 via-transparent to-transparent" />
            </div>

            {/* Secondary image */}
            <div className="absolute bottom-0 left-0 w-[58%] h-[52%] rounded-[2rem] overflow-hidden shadow-card ring-4 ring-white animate-float">
              <Image
                src="/images/indian_women_getting_facial_treatment_in_beauty.jpeg"
                alt="Facial treatment service"
                fill
                className="object-cover"
              />
            </div>

            {/* Accent badge */}
            <div className="absolute bottom-10 right-6 glass rounded-2xl px-5 py-3 shadow-glow animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-plum-500 ring-2 ring-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {['P', 'A', 'N'][n - 1]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">500+ 5-star reviews</div>
                </div>
              </div>
            </div>

            {/* Floating watermark */}
            <div className="absolute top-4 left-4 w-20 h-20 rounded-full glass p-2 shadow-glow animate-float">
              <Image
                src="/images/TanuWatermark.png"
                alt=""
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about-salon-summary')}
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-6 flex-col items-center gap-2 text-rose-600/80 hover:text-rose-600 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-medium">Scroll</span>
          <ChevronDown size={22} className="animate-bounce" />
        </button>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path
            fill="#fffaf7"
            d="M0,48 C240,96 480,0 720,32 C960,64 1200,80 1440,48 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
