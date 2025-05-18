'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/utils/animations';

export default function Home() {
  useEffect(() => {
    document.title = "Tanu's Salon Dè Beautè | Beauty Salon in Bhopal";
  }, []);

  useScrollAnimation();

  return (
    <div className="antialiased text-gray-800">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <div className="animate-on-scroll">
          <Services />
        </div>
        
        <div className="animate-on-scroll">
          <Gallery />
        </div>
        
        <div className="animate-on-scroll">
          <Testimonials />
        </div>
        
        <div className="animate-on-scroll">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}