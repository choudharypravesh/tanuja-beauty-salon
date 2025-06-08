'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/utils/animations';

export default function Home() {
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