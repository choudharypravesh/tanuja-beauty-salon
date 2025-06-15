import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const AboutSalon: React.FC = () => {
  return (
    <section id="about-salon-summary" className="py-16 md:py-20 bg-rose-50"> {/* Changed background for differentiation, can be adjusted */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-8">
            Welcome to Tanu’s Salon Dé Beauté
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Step into Tanu’s Salon Dé Beauté, a haven where beauty is not just enhanced but celebrated. With over 15 years of expertise, Tanu offers a bespoke experience, renowned for artistry, warmth, and meticulous attention to detail. Our salon is a beacon of quality, trust, and transformation, recognized as a top beauty parlour in Bhopal for premier services including bridal makeup and expert skin treatments.
          </p>
          <p className="text-lg text-gray-700 mb-10">
            From the moment you enter, an inviting ambiance soothes and uplifts, blending modern elegance with calming touches for your privacy and comfort. Let the hustle of daily life melt away in an atmosphere of relaxation and rejuvenation.
          </p>

          <Link
            href="/about"
            className="inline-block px-8 py-3 rounded-full bg-rose-600 text-white font-medium transition duration-300 hover:bg-rose-700 hover:shadow-lg"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSalon;
