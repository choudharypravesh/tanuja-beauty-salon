import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const businessHours = [
    { day: 'Monday', hours: '11 am–7 pm' },
    { day: 'Tuesday', hours: '11 am–7 pm' },
    { day: 'Wednesday', hours: '11 am–7 pm' },
    { day: 'Thursday', hours: '11 am–7 pm' },
    { day: 'Friday', hours: '11 am–7 pm' },
    { day: 'Saturday', hours: '11 am–7 pm' },
    { day: 'Sunday', hours: '11 am–7 pm' },
  ];

  return (
    <section id="contact" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book your appointment or reach out to us with any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">Visit Our Salon</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-rose-600 mt-1 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Phase-2, E-12, Bagsewaniya, Sant Ashram Nagar,<br />
                      BHEL Sangam Colony, Bagmugaliya,<br />
                      Bhopal, Madhya Pradesh 462043, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-rose-600 mt-1 mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Business Hours</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-600">
                      {businessHours.map((item, index) => (
                        <React.Fragment key={index}>
                          <span>{item.day}</span>
                          <span>{item.hours}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-rose-600 mt-1 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91-9827340282</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-rose-600 mt-1 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@tanussalon.com</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.905071907394!2d77.42!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA2JzM2LjAiTiA3N8KwMjUnMTIuMCJF!5e0!3m2!1sen!2sin!4v1626876600000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Salon location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">Book an Appointment</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="bridal">Bridal Services</option>
                      <option value="haircut">Haircut & Styling</option>
                      <option value="facial">Facial Treatments</option>
                      <option value="makeup">Makeup Services</option>
                      <option value="threading">Threading & Waxing</option>
                      <option value="training">Beauty Training</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-rose-600 text-white font-medium rounded-md transition duration-300 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
                    >
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;