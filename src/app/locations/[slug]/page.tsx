import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, MapPin, ShieldCheck, Cog } from 'lucide-react';
import styles from './LocationPage.module.css';

interface LocationData {
  name: string;
  country: string;
  description: string;
  structuredData: any;
  heroImage: string;
  projectsCompleted: number;
}

const locations: Record<string, LocationData> = {
  dubai: {
    name: 'Dubai',
    country: 'UAE',
    description: 'Delivering world-class commercial kitchen engineering and custom stainless steel fabrication across Dubai and the UAE. From luxury hotels in Downtown Dubai to beachfront resorts in Jumeirah, we provide complete Italian-designed thermal suites.',
    heroImage: '/ikc-images/Steak House IC.jpeg',
    projectsCompleted: 24,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Italian Kitchen Concept - Dubai",
      "image": "https://ikc.com/ikc-images/Steak House IC.jpeg",
      "url": "https://ikc.com/locations/dubai",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wadi Al-Safa 3, KOA Canvas",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "priceRange": "$$$"
    }
  },
  bahrain: {
    name: 'Manama',
    country: 'Bahrain',
    description: 'Expert commercial kitchen installation, heavy-duty ventilation, and bespoke preparation workstations tailored for Bahrain’s booming hospitality sector. Trusted by top restaurant groups for HACCP-compliant facilities.',
    heroImage: '/ikc-images/Bice Bahrain IC.jpeg',
    projectsCompleted: 8,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Italian Kitchen Concept - Bahrain",
      "image": "https://ikc.com/ikc-images/Bice Bahrain IC.jpeg",
      "url": "https://ikc.com/locations/bahrain",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Manama",
        "addressCountry": "BH"
      },
      "priceRange": "$$$"
    }
  },
  tanzania: {
    name: 'Zanzibar',
    country: 'Tanzania',
    description: 'Specialized marine-grade commercial kitchen solutions for East African island resorts. Our tropicalized refrigeration and anti-corrosive thermal suites are built for high-humidity, demanding environments.',
    heroImage: '/ikc-images/bawe zanzibar.jpg.jpeg',
    projectsCompleted: 4,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Italian Kitchen Concept - Tanzania",
      "image": "https://ikc.com/ikc-images/bawe zanzibar.jpg.jpeg",
      "url": "https://ikc.com/locations/tanzania",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Zanzibar",
        "addressCountry": "TZ"
      },
      "priceRange": "$$$"
    }
  }
};

export function generateMetadata({ params }: { params: { slug: string } }) {
  const loc = locations[params.slug.toLowerCase()];
  if (!loc) return { title: 'Location Not Found' };
  
  return {
    title: `Commercial Kitchen Equipment & Engineering in ${loc.name}, ${loc.country} | IKC`,
    description: loc.description,
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const loc = locations[params.slug.toLowerCase()];
  
  if (!loc) {
    notFound();
  }

  return (
    <div className={styles.pageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(loc.structuredData) }}
      />
      <Navbar />

      <section className={styles.heroSection} style={{ backgroundImage: `linear-gradient(to right, rgba(10,11,13,0.95), rgba(10,11,13,0.6)), url('${loc.heroImage}')` }}>
        <div className={styles.heroContainer}>
          <div className={styles.locationBadge}>
            <MapPin size={14} className={styles.badgeIcon} />
            <span>{loc.name}, {loc.country}</span>
          </div>
          <h1 className={styles.heroTitle}>
            Premium Commercial <br />
            Kitchens in <span className={styles.italicWord}>{loc.name}.</span>
          </h1>
          <p className={styles.heroDesc}>
            {loc.description}
          </p>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNum}>{loc.projectsCompleted}+</span>
              <span className={styles.statLabel}>Completed<br/>Projects</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>HACCP<br/>Compliant</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.contentTitle}>Engineered for {loc.name}</h2>
          <p className={styles.contentText}>
            The hospitality landscape in {loc.country} demands robust, reliable, and high-performance equipment. 
            At Italian Kitchen Concept, we don't just sell equipment; we provide end-to-end engineering solutions. 
            From initial AutoCAD blueprints and MEP drawings to custom stainless steel fabrication and final commissioning, 
            our local execution teams ensure your kitchen operates flawlessly under maximum service pressure.
          </p>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <ShieldCheck size={24} className={styles.featureIcon} />
              <h3>Local Compliance & Safety</h3>
              <p>Fully compliant with regional civil defense, municipal health, and HACCP standards.</p>
            </div>
            <div className={styles.featureCard}>
              <Cog size={24} className={styles.featureIcon} />
              <h3>After-Sales & Maintenance</h3>
              <p>Dedicated technical teams available for rapid response servicing and preventative maintenance.</p>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>Planning a project in {loc.name}?</h3>
            <Link href="/contact" className={styles.ctaLink}>
              <span>SPEAK TO OUR REGIONAL TEAM</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
