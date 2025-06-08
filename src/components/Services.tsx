import React from 'react';
import { services } from '../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our comprehensive range of premium beauty services designed to enhance your natural beauty and provide a relaxing, luxurious experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={`Client receiving ${service.name} treatment at Tanu's Salon Dè Beautè, Bhopal`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-rose-600 font-medium inline-flex items-center transition hover:text-rose-700">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">Professional Beauty Training</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Take your passion for beauty to the next level with our professional certification programs:
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
            <div className="bg-rose-50 px-6 py-4 rounded-lg">
              <h4 className="font-medium text-rose-700 mb-2">Beautician Training Program</h4>
              <p className="text-gray-600">Comprehensive hands-on training for aspiring beauticians</p>
            </div>
            <div className="bg-rose-50 px-6 py-4 rounded-lg">
              <h4 className="font-medium text-rose-700 mb-2">Professional Beauty Certification</h4>
              <p className="text-gray-600">Industry-recognized certification for beauty professionals</p>
            </div>
            <div className="bg-rose-50 px-6 py-4 rounded-lg">
              <h4 className="font-medium text-rose-700 mb-2">Salon Entrepreneurship Training</h4>
              <p className="text-gray-600">Learn how to start and manage your own successful salon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;