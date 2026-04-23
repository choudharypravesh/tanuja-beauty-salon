"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, GraduationCap, Award, Briefcase } from 'lucide-react';
import { services } from '../data/services';

const trainingPrograms = [
  {
    icon: GraduationCap,
    title: 'Beautician Training',
    text: 'Comprehensive hands-on training for aspiring beauticians.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Award,
    title: 'Professional Certification',
    text: 'Industry-recognized certification for beauty professionals.',
    gradient: 'from-plum-500 to-fuchsia-500',
  },
  {
    icon: Briefcase,
    title: 'Salon Entrepreneurship',
    text: 'Learn how to start and manage your own successful salon.',
    gradient: 'from-gold-500 to-amber-500',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-plum-100/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-rose-600 mb-3">
            What We Offer
          </span>
          <h2 className="section-heading font-serif font-bold text-4xl md:text-5xl text-gray-900 mb-8">
            Signature <span className="text-gradient-rose">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mt-4">
            A curated menu of premium beauty experiences — designed to enhance your natural glow
            and leave you feeling confident, radiant, and renewed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative card-gradient-border bg-white rounded-3xl overflow-hidden shadow-soft hover-lift"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={`${service.name} at Tanu's Salon Dé Beauté, Bhopal`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/70 via-rose-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-rose-800 bg-white/90 backdrop-blur-sm shadow-sm">
                  0{service.id}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif font-bold text-2xl drop-shadow-md">{service.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 min-h-[4.5rem]">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-rose-600 font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  <span>Book this service</span>
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-plum-500 text-white flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
                    <ArrowUpRight size={14} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Training Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <div className="divider-ornate mb-4">✦</div>
            <h3 className="font-serif font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Professional Beauty <span className="text-gradient-rose">Training</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take your passion to the next level with our certification programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainingPrograms.map((program, i) => (
              <div
                key={program.title}
                className="group relative p-8 rounded-3xl bg-white border border-rose-100/60 shadow-soft hover-lift overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${program.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.gradient} text-white flex items-center justify-center mb-5 shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                  <program.icon size={24} />
                </div>
                <h4 className="font-serif font-bold text-xl text-gray-900 mb-2">{program.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{program.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
