import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Tanu's Salon Dé Beauté",
  description: "Learn more about Tanu's Salon Dé Beauté in Bhopal, our philosophy, expertise, Tanu's 15+ years of experience, and our commitment to quality in beauty services like bridal makeup, facials, and more.",
  keywords: "About Tanu's Salon Dé Beauté, Bhopal beauty parlour, Tanu beautician, salon philosophy, expert makeup artist Bhopal, quality beauty services",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}