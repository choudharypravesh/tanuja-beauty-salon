"use client";

import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, Sparkles, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const businessHours = [
    { day: 'Monday', hours: '11 am – 7 pm' },
    { day: 'Tuesday', hours: '11 am – 7 pm' },
    { day: 'Wednesday', hours: '11 am – 7 pm' },
    { day: 'Thursday', hours: '11 am – 7 pm' },
    { day: 'Friday', hours: '11 am – 7 pm' },
    { day: 'Saturday', hours: '11 am – 7 pm' },
    { day: 'Sunday', hours: '11 am – 7 pm' },
  ];

  const infoCards = [
    {
      icon: MapPin,
      title: 'Visit Us',
      lines: [
        'Phase-2, E-12, Bagsewaniya,',
        'Sant Ashram Nagar, BHEL Sangam Colony',
        'Bagmugaliya, Bhopal, MP 462043',
      ],
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: ['+91-9827340282'],
      gradient: 'from-plum-500 to-fuchsia-500',
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['info@tanussalon.com'],
      gradient: 'from-gold-500 to-amber-500',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-rose-50/50 to-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-plum-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-rose-600 mb-3">
            Get In Touch
          </span>
          <h2 className="section-heading font-serif font-bold text-4xl md:text-5xl text-gray-900 mb-8">
            Let&apos;s Make You <span className="text-gradient-rose">Glow</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mt-4">
            Book your appointment or reach out to us with any questions about our services.
            We can&apos;t wait to meet you.
          </p>
        </div>

        {/* Info cards row */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {infoCards.map((c, i) => (
            <div
              key={c.title}
              className="group p-6 rounded-2xl bg-white border border-rose-100/80 shadow-soft hover-lift text-center sm:text-left"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${c.gradient} text-white items-center justify-center mb-4 shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                <c.icon size={20} />
              </div>
              <h4 className="font-serif font-bold text-lg text-gray-900 mb-2">{c.title}</h4>
              {c.lines.map((line, idx) => (
                <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Hours + map */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-rose-100/80 shadow-soft">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500 to-plum-500 text-white flex items-center justify-center shadow-glow">
                  <Clock size={20} />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900">Business Hours</h3>
              </div>
              <ul className="divide-y divide-rose-100">
                {businessHours.map((item) => (
                  <li key={item.day} className="flex justify-between py-2.5 text-sm">
                    <span className="text-gray-700 font-medium">{item.day}</span>
                    <span className="text-rose-600 font-semibold">{item.hours}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-rose-100">
                <span className="text-sm text-gray-500">Follow us:</span>
                <a
                  href="https://www.instagram.com/makeup_artist_tanu_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-plum-500 text-white flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.facebook.com/tanusalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-plum-500 to-fuchsia-500 text-white flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft border border-rose-100/80 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.905071907394!2d77.42!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA2JzM2LjAiTiA3N8KwMjUnMTIuMCJF!5e0!3m2!1sen!2sin!4v1626876600000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Salon location"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="relative p-7 md:p-9 rounded-3xl bg-white border border-rose-100/80 shadow-card overflow-hidden">
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-gradient-radiant opacity-10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500 to-plum-500 text-white flex items-center justify-center shadow-glow">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-gray-900">Book an Appointment</h3>
                </div>

                <form
                  onSubmit={handleSubmit}
                  data-netlify="true"
                  name="contact"
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-rose-50/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                      placeholder="Your beautiful name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-rose-50/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-rose-50/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                        placeholder="+91 ..."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-rose-50/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="bridal">Bridal Services</option>
                      <option value="haircut">Haircut &amp; Styling</option>
                      <option value="facial">Facial Treatments</option>
                      <option value="makeup">Makeup Services</option>
                      <option value="threading">Threading &amp; Waxing</option>
                      <option value="training">Beauty Training</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-rose-50/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition resize-none"
                      placeholder="Tell us a little about what you're hoping for..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full mt-2">
                    <Send size={18} />
                    <span>Send Request</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
