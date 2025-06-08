import type { Metadata } from 'next';
import { Montserrat, Cormorant_Garamond, Cinzel } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const cinzel = Cinzel({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tanu's Salon Dé Beauté | Top Beauty Parlour in Bhopal | Hoshangabad Road, Misrod, Katara Hills",
  description: "Tanu's Salon Dé Beauté: Bhopal's leading beauty parlour for bridal makeup, hair styling, skincare, and more. Serving Hoshangabad Road, Misrod, Katara Hills, Bag Mugaliya, Bag Sevaniya. Book your appointment!",
  keywords: "Beauty parlour Bhopal, beauty salon Bhopal, best salon Hoshangabad Road, makeup artist Misrod, bridal makeup Katara Hills, hair salon Bag Mugaliya, skincare Bag Sevaniya, beauty services Gulabi Nagar, Tanu's Salon Dé Beauté, ladies beauty parlour Bhopal, facial, waxing, haircut, manicure, pedicure",
  openGraph: {
    title: "Tanu's Salon Dé Beauté | Top Beauty Parlour in Bhopal",
    description: "Expert bridal makeup, hair, skin treatments in Bhopal. Serving Hoshangabad Rd, Misrod, Katara.",
    url: 'https://www.tanussalondebeaute.com',
    siteName: "Tanu's Salon Dé Beauté",
    images: [ { url: '/logo.png', width: 800, height: 600, alt: "Tanu's Salon Dé Beauté Logo" } ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tanu's Salon Dé Beauté | Top Beauty Parlour in Bhopal",
    description: "Bhopal's choice for bridal makeup, hair & skin. We serve Hoshangabad Rd, Misrod, Katara.",
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Tanu's Salon Dé Beauté",
    "description": "Bhopal's leading beauty parlour for bridal makeup, hair styling, skincare, and more. Serving Hoshangabad Road, Misrod, Katara Hills, Bag Mugaliya, Bag Sevaniya.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Phase-2, E-12, Bagsewaniya, Sant Ashram Nagar, BHEL Sangam Colony",
      "addressLocality": "Bhopal",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "462043",
      "addressCountry": "IN"
    },
    "telephone": "+91-9827340282",
    "url": "https://www.tanussalondebeaute.com",
    "logo": "https://www.tanussalondebeaute.com/logo.png",
    "image": "https://www.tanussalondebeaute.com/images/indian_women_going_through_bridal_makeup.jpeg",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "hasOffer": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Makeup" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Haircut & Styling" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facial Treatments" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Makeup Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Threading & Waxing" } }
    ],
    "sameAs": [
      "https://www.facebook.com/tanusalon",
      "https://www.instagram.com/makeup_artist_tanu_/"
    ]
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${cormorantGaramond.variable} ${cinzel.variable}`}>
      <body className="antialiased text-gray-800">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}