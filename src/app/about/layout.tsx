import type { Metadata } from 'next';

const BASE_URL = 'https://tanussalondebeaute.com';

export const metadata: Metadata = {
  title: "About Us – Beauty Parlour in Bag Mugaliya, Bhopal | Tanu's Salon Dé Beauté",
  description: "Meet Tanu – 15+ years of beauty expertise in Bhopal. Tanu's Salon Dé Beauté in Bag Mugaliya offers premium bridal makeup, facials, hair styling, waxing & threading. Serving Bagsewaniya, BHEL Colony, Karond, Gulabi Nagar & all of Bhopal. Visit us today!",
  keywords: "about Tanu's Salon Bhopal, beauty parlour Bag Mugaliya Bhopal, expert beautician Bhopal 15 years, Tanu makeup artist Bhopal, salon Bagsewaniya BHEL Colony, beauty parlour Karond Bhopal, ladies parlour Gulabi Nagar Bhopal, best beauty salon Bhopal MP",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Tanu's Salon Dé Beauté | Beauty Parlour in Bag Mugaliya, Bhopal",
    description: "15+ years of beauty expertise in Bhopal. Tanu's Salon in Bag Mugaliya – your destination for bridal makeup, facials, hair & skin care. Serving BHEL Colony, Karond, Gulabi Nagar & all of Bhopal.",
    url: `${BASE_URL}/about`,
    type: 'website',
    images: [
      {
        url: '/images/indian_women_going_through_bridal_makeup.jpeg',
        width: 1200,
        height: 630,
        alt: "Tanu's Salon Dé Beauté – Beauty Parlour in Bag Mugaliya, Bhopal",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
