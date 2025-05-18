import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen bg-gradient-to-r from-pink-50 to-rose-50">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Background"
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
        <div className="animate-fadeIn">
          <Image 
            src="/images/TanuWatermark.png"
            alt="Tanu's Salon Dè Beautè"
            width={360}
            height={360}
            className="mb-8 mx-auto"
          />
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            Elevating beauty through expert care, personalized service, and premium treatments in the heart of Bhopal.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-8 py-3 rounded-full bg-rose-600 text-white font-medium transition duration-300 hover:bg-rose-700 hover:shadow-lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book Appointment
            </button>
            <button 
              className="px-8 py-3 rounded-full bg-transparent border-2 border-rose-600 text-rose-600 font-medium transition duration-300 hover:bg-rose-50 hover:shadow-lg"
              onClick={scrollToServices}
            >
              Explore Services
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
          <button 
            onClick={scrollToServices}
            className="text-rose-600 focus:outline-none"
            aria-label="Scroll down"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;