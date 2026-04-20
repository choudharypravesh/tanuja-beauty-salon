"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  const quickLinks = ['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'];
  const servicesList = [
    'Bridal Services',
    'Haircut & Styling',
    'Facial Treatments',
    'Makeup Services',
    'Threading & Waxing',
    'Beauty Training',
  ];
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1a0510] via-[#2b0a20] to-[#1a0510] text-white">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-plum-500/10 rounded-full blur-3xl" />
      </div>
      {/* Top gradient border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-400/60 to-transparent" />
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-radiant blur-md opacity-50" />
                <Image
                  src="/images/TanuWatermark.png"
                  alt="Tanu's Salon Dé Beauté"
                  width={70}
                  height={70}
                  className="relative"
                />
              </div>
              <div>
                <div className="font-display font-semibold text-xl tracking-wider text-gradient-gold">
                  Tanu&apos;s Salon
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-rose-200/80">
                  Dé Beauté
                </div>
              </div>
            </div>
            <p className="text-rose-100/70 text-sm leading-relaxed mb-6">
              Elevating beauty through expert care, personalized service, and premium treatments in the heart of Bhopal.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/tanusalon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-gradient-radiant hover:border-transparent flex items-center justify-center transition-all duration-500 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/makeup_artist_tanu_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-gradient-radiant hover:border-transparent flex items-center justify-center transition-all duration-500 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-5 text-rose-50">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const isRoute = link === 'About';
                const href = link === 'Home' ? '/' : isRoute ? '/about' : `#${link.toLowerCase()}`;
                return (
                  <li key={link}>
                    {isRoute || link === 'Home' ? (
                      <Link
                        href={href}
                        className="group inline-flex items-center gap-2 text-rose-100/70 hover:text-rose-300 transition-colors duration-300"
                      >
                        <span className="w-0 h-px bg-rose-300 group-hover:w-4 transition-all duration-500" />
                        <span>{link}</span>
                      </Link>
                    ) : (
                      <a
                        href={href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.toLowerCase());
                        }}
                        className="group inline-flex items-center gap-2 text-rose-100/70 hover:text-rose-300 transition-colors duration-300"
                      >
                        <span className="w-0 h-px bg-rose-300 group-hover:w-4 transition-all duration-500" />
                        <span>{link}</span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-5 text-rose-50">Our Services</h4>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                    className="group inline-flex items-center gap-2 text-rose-100/70 hover:text-rose-300 transition-colors duration-300"
                  >
                    <span className="w-0 h-px bg-rose-300 group-hover:w-4 transition-all duration-500" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-5 text-rose-50">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-rose-100/70">
              <li className="flex gap-3">
                <MapPin size={18} className="text-rose-300 mt-0.5 flex-shrink-0" />
                <span>
                  Phase-2, E-12, Bagsewaniya, Sant Ashram Nagar, BHEL Sangam Colony, Bhopal, MP 462043
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-rose-300 flex-shrink-0" />
                <a href="tel:+919827340282" className="hover:text-rose-300 transition-colors">
                  +91-9827340282
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-rose-300 flex-shrink-0" />
                <a href="mailto:info@tanussalon.com" className="hover:text-rose-300 transition-colors">
                  info@tanussalon.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-rose-100/60">
          <p>© {currentYear} Tanu&apos;s Salon Dé Beauté. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart size={14} className="text-rose-400 fill-rose-400 animate-pulse-soft" /> in Bhopal
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;