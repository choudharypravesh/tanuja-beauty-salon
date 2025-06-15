"use client"; // This directive must be the very first line

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/images/TanuWatermark.png"
              alt="Tanu's Salon Logo"
              width={80}
              height={80}
              className="mr-3"
            />
            <span className="text-2xl font-cinzel font-semibold text-gray-800 tracking-wide">
              Tanu's Salon Dé Beauté
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} passHref legacyBehavior={false}>
                <span
                  className={`font-medium transition duration-300 cursor-pointer ${
                    isScrolled ? 'text-gray-700 hover:text-rose-600' : 'text-gray-700 hover:text-rose-500'
                  }`}
                  onClick={() => {
                    if (link.href.startsWith('/#')) {
                      scrollToSection(link.href.substring(2));
                    }
                    // No need to call setIsOpen(false) for desktop links
                  }}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-rose-600'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 transition-all duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} passHref legacyBehavior={false}>
                  <span
                    className="text-gray-700 hover:text-rose-600 font-medium transition duration-300 py-2 block text-center cursor-pointer"
                     onClick={() => {
                      if (link.href.startsWith('/#')) {
                        scrollToSection(link.href.substring(2));
                      }
                      setIsOpen(false); // Close mobile menu
                    }}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;