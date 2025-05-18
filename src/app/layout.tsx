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
  title: "Tanu's Salon Dè Beautè | Beauty Salon in Bhopal",
  description: 'Elevating beauty through expert care, personalized service, and premium treatments in the heart of Bhopal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorantGaramond.variable} ${cinzel.variable}`}>
      <body className="antialiased text-gray-800">{children}</body>
    </html>
  );
}