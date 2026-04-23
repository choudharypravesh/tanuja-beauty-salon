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

const BASE_URL = 'https://tanussalondebeaute.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Tanu's Salon Dé Beauté | Best Beauty Parlour in Bag Mugaliya, Bhopal",
    template: "%s | Tanu's Salon Dé Beauté, Bhopal",
  },
  description: "Tanu's Salon Dé Beauté – Bhopal's top-rated beauty parlour in Bag Mugaliya. Expert bridal makeup, facials, hair styling, waxing & threading. 15+ years experience. Serving Bagsewaniya, BHEL Colony, Karond, Gulabi Nagar & all of Bhopal. Book now: +91-9827340282.",
  keywords: "beauty parlour Bag Mugaliya Bhopal, beauty salon Bagsewaniya, best salon BHEL Sangam Colony, bridal makeup artist Bhopal, ladies parlour Karond Bhopal, makeup artist Bhopal, facial Bhopal, waxing threading Bhopal, hair salon Bag Mugaliya, beauty parlour near BHEL Bhopal, Gulabi Nagar beauty salon, Sant Ashram Nagar parlour, beauty services Bhopal MP, Tanu's Salon Dé Beauté, top beauty parlour Bhopal, bridal makeup Bhopal, pre-bridal packages Bhopal, skin treatment Bhopal, Nishatpura beauty parlour, Hoshangabad Road salon, Katara Hills beauty parlour, Kolar Road salon Bhopal, ladies beauty parlour Bhopal, mehndi artist Bhopal",
  applicationName: "Tanu's Salon Dé Beauté",
  openGraph: {
    title: "Tanu's Salon Dé Beauté | Best Beauty Parlour in Bag Mugaliya, Bhopal",
    description: "Bhopal's top-rated beauty parlour in Bag Mugaliya. Expert bridal makeup, facials, hair & skin treatments. 15+ years experience. Serving BHEL Colony, Karond, Gulabi Nagar & all of Bhopal.",
    url: BASE_URL,
    siteName: "Tanu's Salon Dé Beauté",
    images: [
      {
        url: '/images/indian_women_going_through_bridal_makeup.jpeg',
        width: 1200,
        height: 630,
        alt: "Bridal makeup at Tanu's Salon Dé Beauté, Bag Mugaliya, Bhopal",
      },
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: "Tanu's Salon Dé Beauté Logo",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tanu's Salon Dé Beauté | Best Beauty Parlour in Bag Mugaliya, Bhopal",
    description: "Top-rated beauty parlour in Bag Mugaliya, Bhopal. Bridal makeup, facials, hair & skin. 15+ years experience. Call +91-9827340282.",
    images: ['/images/indian_women_going_through_bridal_makeup.jpeg'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "BeautySalon"],
    "name": "Tanu's Salon Dé Beauté",
    "alternateName": ["Tanu's Salon", "Tanu Salon Bhopal", "Tanu Beauty Parlour Bhopal"],
    "description": "Bhopal's premier beauty parlour in Bag Mugaliya offering bridal makeup, facials, hair styling, waxing, threading, mehndi and beauty training. Over 15 years of expertise under head beautician Tanu.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Phase-2, E-12, Bagsewaniya, Sant Ashram Nagar, BHEL Sangam Colony",
      "addressLocality": "Bhopal",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "462043",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.2837",
      "longitude": "77.4159"
    },
    "telephone": "+91-9827340282",
    "email": "info@tanussalon.com",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "image": [
      `${BASE_URL}/images/indian_women_going_through_bridal_makeup.jpeg`,
      `${BASE_URL}/images/indian_women_getting_facial_treatment_in_beauty_parlour.jpeg`,
    ],
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
    "hasMap": "https://maps.google.com/?q=Tanu's+Salon+De+Beaute,+Phase-2,+E-12,+Bagsewaniya,+Sant+Ashram+Nagar,+BHEL+Sangam+Colony,+Bhopal",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
        ],
        "opens": "11:00",
        "closes": "19:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "Bhopal" },
      { "@type": "Neighborhood", "name": "Bag Mugaliya" },
      { "@type": "Neighborhood", "name": "Bag Sewaniya" },
      { "@type": "Neighborhood", "name": "Bagsewaniya" },
      { "@type": "Neighborhood", "name": "Sant Ashram Nagar" },
      { "@type": "Neighborhood", "name": "BHEL Sangam Colony" },
      { "@type": "Neighborhood", "name": "Karond" },
      { "@type": "Neighborhood", "name": "Gulabi Nagar" },
      { "@type": "Neighborhood", "name": "Nishatpura" },
      { "@type": "Neighborhood", "name": "Misrod" },
      { "@type": "Neighborhood", "name": "Hoshangabad Road" },
      { "@type": "Neighborhood", "name": "Katara Hills" },
      { "@type": "Neighborhood", "name": "Kolar Road" },
      { "@type": "Neighborhood", "name": "Berasia Road" }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9827340282",
      "contactType": "appointment booking",
      "availableLanguage": ["Hindi", "English"],
      "areaServed": "IN"
    },
    "hasOffer": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Makeup", "description": "Complete bridal makeup packages including HD makeup, airbrush, and pre-bridal treatments in Bhopal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Party and Occasion Makeup" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Everyday and Natural Makeup" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Classic Cleansing Facial" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hydrating and Moisturising Facial" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Anti-Aging and Firming Facial" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brightening and De-Tan Facial" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Acne and Blemish Control Facial" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sensitive Skin Treatment" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Luxury Spa Facial" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Eyebrow Threading and Shaping" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Waxing Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bleaching and De-Tan Treatment" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hair Styling and Treatments" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mehndi and Henna Art" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personal Grooming Package" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Beauty Training Course" } }
    ],
    "sameAs": [
      "https://www.facebook.com/tanusalon",
      "https://www.instagram.com/makeup_artist_tanu_/"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Tanu's Salon located in Bhopal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tanu's Salon Dé Beauté is located at Phase-2, E-12, Bagsewaniya, Sant Ashram Nagar, BHEL Sangam Colony, Bag Mugaliya, Bhopal, Madhya Pradesh 462043. We are easily reachable from Bag Mugaliya, Bag Sewaniya, Karond, Gulabi Nagar, BHEL Colony, and all nearby areas of Bhopal."
        }
      },
      {
        "@type": "Question",
        "name": "What are the timings of Tanu's Salon Dé Beauté?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tanu's Salon Dé Beauté is open every day from 11 AM to 7 PM, including Sundays. We recommend booking an appointment in advance for bridal makeup and special occasion services by calling +91-9827340282."
        }
      },
      {
        "@type": "Question",
        "name": "What beauty services does Tanu's Salon offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tanu's Salon Dé Beauté offers a full range of beauty services: bridal makeup, party and occasion makeup, hair styling and treatments, classic and luxury facials, waxing, threading, bleaching, de-tan treatments, mehndi/henna art, personal grooming packages, and professional beauty training courses."
        }
      },
      {
        "@type": "Question",
        "name": "Does Tanu's Salon offer bridal makeup packages in Bhopal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Tanu's Salon Dé Beauté specialises in bridal makeup in Bhopal. With 15+ years of experience, head beautician Tanu offers complete bridal packages including pre-bridal skin treatments, HD bridal makeup, airbrush makeup, saree draping, mehndi, and on-location bridal services anywhere in Bhopal."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book an appointment at Tanu's Salon in Bhopal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book an appointment at Tanu's Salon Dé Beauté by calling +91-9827340282, emailing info@tanussalon.com, or filling out the contact form on our website. We serve clients from Bag Mugaliya, Bagsewaniya, BHEL Colony, Karond, Gulabi Nagar, Misrod, Hoshangabad Road, and all across Bhopal."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas near Bag Mugaliya does Tanu's Salon serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tanu's Salon Dé Beauté proudly serves clients from Bag Mugaliya, Bag Sewaniya, Sant Ashram Nagar, BHEL Sangam Colony, Karond, Gulabi Nagar, Nishatpura, Misrod, Hoshangabad Road, Katara Hills, Kolar Road, Berasia Road, and all surrounding areas of Bhopal, Madhya Pradesh."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best beauty parlour near BHEL Bhopal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tanu's Salon Dé Beauté is one of the most trusted beauty parlours near BHEL Bhopal, located in BHEL Sangam Colony, Bag Mugaliya. With 15+ years of expertise and 5000+ happy clients, it is the top choice for bridal makeup, facials, hair treatments, and all beauty services in the BHEL and Bag Mugaliya area."
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${cormorantGaramond.variable} ${cinzel.variable}`}>
      <body className="antialiased text-gray-800 font-sans bg-[#fffaf7] selection:bg-rose-200 selection:text-rose-900">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
