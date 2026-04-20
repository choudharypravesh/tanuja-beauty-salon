"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, Gem, ArrowRight } from 'lucide-react';
const AboutSalon: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: '15+ Years',
      text: 'of hands-on artistry & bridal expertise',
      color: 'from-rose-400 to-rose-600',
    },
    {
      icon: Heart,
      title: 'Personal Care',
      text: 'bespoke services, tailored to every client',
      color: 'from-plum-400 to-plum-600',
    },
    {
      icon: Gem,
      title: 'Premium Quality',
      text: 'luxury products & impeccable hygiene',
      color: 'from-gold-400 to-gold-600',
    },
  ];
  return (
    <section
      id="about-salon-summary"
      className="relative py-20 md:py-28 overflow-hidden bg-white"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-plum-100/60 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-[500px] md:h-[560px]">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-3">
              <div className="col-span-4 row-span-4 relative rounded-3xl overflow-hidden shadow-card group">
                <Image
                  src="/images/closeup_images_of_indian_women_in_makeup-3.jpg"
                  alt="Flawless makeup artistry at Tanu's Salon"
                  fill
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
              </div>
              <div className="col-span-2 row-span-3 relative rounded-3xl overflow-hidden shadow-card group animate-float">
                <Image
                  src="/images/closeup_images_of_indian_women_in_makeup-5.jpg"
                  alt="Elegant makeup close-up"
                  fill
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
              </div>
              <div className="col-span-2 row-span-3 relative rounded-3xl overflow-hidden shadow-card group animate-float-delayed">
                <Image
                  src="/images/indian_women_going_through_bridal_makeup (3).jpeg"
                  alt="Bridal preparation"
                  fill
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
              </div>
              <div className="col-span-4 row-span-2 relative rounded-3xl overflow-hidden shadow-card group">
                <Image
                  src="/images/indian_women_getting_facial_treatment_in_beauty (1).jpeg"
                  alt="Luxury facial treatment"
                  fill
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/30 to-transparent" />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-2 md:-right-6 bg-gradient-radiant text-white rounded-2xl px-5 py-4 shadow-glow-plum rotate-[-3deg] animate-float">
              <div className="font-serif text-2xl font-bold leading-none">15+</div>
              <div className="text-xs uppercase tracking-widest mt-1">Years of Passion</div>
            </div>
          </div>
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-rose-600 mb-4">
              About the Salon
            </span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
              A Sanctuary Where{' '}
              <span className="text-gradient-rose">Beauty is Celebrated</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-5 leading-relaxed">
              Step into Tanu&apos;s Salon Dé Beauté, a haven where beauty is not
              just enhanced but celebrated. With over <strong className="text-rose-700">15 years of expertise</strong>,
              Tanu offers a bespoke experience, renowned for artistry, warmth, and meticulous attention to detail.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              From the moment you enter, an inviting ambiance soothes and uplifts,
              blending modern elegance with calming touches for your privacy and comfort.
            </p>
            {/* Pillars */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="group relative p-5 rounded-2xl bg-white border border-rose-100 hover-lift shadow-soft"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white mb-3 shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                  >
                    <p.icon size={20} />
                  </div>
                  <div className="font-serif font-bold text-lg text-gray-900">{p.title}</div>
                  <div className="text-sm text-gray-500 mt-1">{p.text}</div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary">
              <span>Learn More About Us</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSalon;