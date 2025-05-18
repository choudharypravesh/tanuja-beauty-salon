import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/images/TanuWatermark.png"
                alt="Tanu's Salon Dè Beautè Logo"
                width={120}
                height={120}
                className="mr-2"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Elevating beauty through expert care, personalized service, and premium treatments in the heart of Bhopal.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/tanusalon" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/makeup_artist_tanu_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById(link.toLowerCase());
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Bridal Services', 
                'Haircut & Styling', 
                'Facial Treatments', 
                'Makeup Services', 
                'Threading & Waxing', 
                'Beauty Training'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById('services');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">
                Phase-2, E-12, Bagsewaniya,<br />
                Sant Ashram Nagar, BHEL Sangam Colony,<br />
                Bhopal, Madhya Pradesh 462043
              </p>
              <p className="mb-2">Phone: +91-9827340282</p>
              <p>Email: info@tanussalon.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Tanu's Salon Dè Beautè. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;