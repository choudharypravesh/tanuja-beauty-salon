"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-[0_8px_32px_rgba(159,18,57,0.08)] py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-400 to-plum-500 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
              <Image
                src="/images/TanuWatermark.png"
                alt="Tanu's Salon Logo"
                width={70}
                height={70}
                className="relative mr-3 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl md:text-2xl font-display font-semibold tracking-wider text-gradient-rose">
                Tanu&apos;s Salon
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                Dé Beauté
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors duration-300"
                onClick={() => {
                  if (link.href.startsWith('/#')) {
                    scrollToSection(link.href.substring(2));
                  }
                }}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-rose-500 to-plum-500 group-hover:w-[70%] transition-all duration-500 rounded-full" />
              </Link>
            ))}
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="btn-primary ml-3 !py-2.5 !px-5 text-sm"
            >
              <Sparkles size={16} />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
              isScrolled
                ? 'text-rose-600 hover:bg-rose-50'
                : 'text-rose-600 hover:bg-white/40'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass rounded-2xl p-4 shadow-glow">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-rose-500 hover:to-plum-500 font-medium rounded-xl transition-all duration-300 text-center"
                  style={{ animationDelay: `${i * 60}ms` }}
                  onClick={() => {
                    if (link.href.startsWith('/#')) {
                      scrollToSection(link.href.substring(2));
                    }
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="btn-primary mt-2 w-full"
              >
                <Sparkles size={16} />
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
