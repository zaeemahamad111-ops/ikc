import type { Metadata } from 'next';
import Preloader from '@/components/Preloader';
import SmoothScroll from '@/components/SmoothScroll';
import './globals.css';

export const metadata: Metadata = {
  title: 'Italian Kitchen Concept (IKC) | Commercial Kitchen Design UAE, Bahrain & Tanzania',
  description: 'Premier Italian commercial kitchen engineering, custom stainless steel fabrication, thermal cooking lines & ventilation systems in Dubai, Abu Dhabi, Bahrain, and Zanzibar Tanzania.',
  keywords: [
    'Commercial Kitchen Design Dubai',
    'Commercial Kitchen Equipment UAE',
    'Restaurant Kitchen Engineering Bahrain',
    'Hotel Kitchen Contractor Zanzibar',
    'Custom Stainless Steel Fabrication UAE',
    'HACCP Commercial Kitchen Design',
    'Thermal Cooking Equipment GCC',
    'Italian Kitchen Concept IKC',
  ],
  authors: [{ name: 'Italian Kitchen Concept' }],
  openGraph: {
    title: 'Italian Kitchen Concept (IKC) | Commercial Kitchen Systems UAE & GCC',
    description: 'Turnkey commercial kitchen design, Italian thermal equipment, and marine stainless steel fabrication for hotels and restaurants across Dubai, Bahrain, and East Africa.',
    url: 'https://italiankitchenconcept.com',
    siteName: 'Italian Kitchen Concept',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Italian Kitchen Concept (IKC)',
  url: 'https://italiankitchenconcept.com',
  logo: 'https://italiankitchenconcept.com/logo.png',
  description: 'Turnkey commercial kitchen design, Italian thermal equipment, and stainless steel fabrication across the Middle East & Africa.',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Dubai Marina & Business Bay',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Seef District',
      addressLocality: 'Manama',
      addressCountry: 'BH',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Stone Town',
      addressLocality: 'Zanzibar',
      addressCountry: 'TZ',
    },
  ],
  areaServed: ['United Arab Emirates', 'Bahrain', 'Tanzania', 'GCC'],
  serviceType: [
    'Commercial Kitchen Design',
    'Thermal Cooking Line Installation',
    'Custom Stainless Steel Fabrication',
    'Walk-in Cold Storage Rooms',
    'Kitchen Exhaust Ventilation & UV Scrubbing',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        <Preloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

