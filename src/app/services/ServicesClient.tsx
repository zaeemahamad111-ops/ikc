'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, ChevronRight, CookingPot, Snowflake, Wrench, Wind, Sparkles, Layers } from 'lucide-react';
import styles from './ServicesClient.module.css';

const servicesData = [
  {
    id: 'cooking',
    num: '01',
    title: 'COOKING SYSTEMS',
    subtitle: 'High-performance heavy-duty cooking suites built for extreme culinary performance.',
    icon: CookingPot,
    image: '/ikc-images/Steak House IC.jpeg',
    badge: 'THERMAL RANGE',
    isLight: true,
    details: [
      'Custom modular heavy-duty thermal cooking ranges',
      'High-capacity induction & gas burner suites',
      'Integrated salamanders, fryers & charcoal grills',
      'Energy efficient rapid thermal recovery engineering',
    ],
  },
  {
    id: 'refrigeration',
    num: '02',
    title: 'REFRIGERATION & COLD STORAGE',
    subtitle: 'Precision climate-controlled storage solutions for flawless ingredient freshness.',
    icon: Snowflake,
    image: '/ikc-images/All day dining Ic.jpeg',
    badge: 'CLIMATE CONTROL',
    isLight: false,
    details: [
      'Custom walk-in chillers & deep freezing rooms',
      'Under-counter rapid access refrigerated drawers',
      'HACCP temperature monitoring & alarm automation',
      'Marine-grade 316L anti-corrosive stainless construction',
    ],
  },
  {
    id: 'preparation',
    num: '03',
    title: 'PREPARATION WORKSTATIONS',
    subtitle: 'Ergonomically optimized prep stations designed for chef workflow efficiency.',
    icon: Wrench,
    image: '/ikc-images/20260121_152509000_iOS.jpg.jpeg',
    badge: 'WORKFLOW ERGONOMICS',
    isLight: true,
    details: [
      'Seamless welded stainless steel prep benches & sinks',
      'Integrated waste chutes & sanitizing basin stations',
      'Heavy-duty slicing, mixing & vacuum packing zones',
      'Vibration-damped cutting surfaces & shelf storage',
    ],
  },
  {
    id: 'extraction',
    num: '04',
    title: 'EXTRACTION & VENTILATION',
    subtitle: 'Advanced air filtration & canopy hood systems for clean, safe kitchen environments.',
    icon: Wind,
    image: '/ikc-images/Italia_kitchen_-torotoro-3.jpg.jpeg',
    badge: 'UV AIR PURIFICATION',
    isLight: false,
    details: [
      'UV-C grease destruction & aerosol filter hood canopies',
      'Demand-controlled intelligent ventilation airflow (DCKV)',
      'Fire suppression system integration (ANSUL certified)',
      'Low-noise variable speed exhaust centrifuges',
    ],
  },
  {
    id: 'dishwashing',
    num: '05',
    title: 'DISHWASHING & SANITATION',
    subtitle: 'Ultra-fast automated dishwashing suites engineered for high-throughput hygiene.',
    icon: Sparkles,
    image: '/ikc-images/Staff Kithen IC , NCS ITALY.jpeg',
    badge: 'AUTOMATED HYGIENE',
    isLight: true,
    details: [
      'Continuous flight-type & rack conveyor dishwashers',
      'Thermal disinfection rinse & heat recovery systems',
      'Automated chemical dosing & water softening units',
      'Ergonomic sorting, pre-rinse & drying zones',
    ],
  },
  {
    id: 'fabrication',
    num: '06',
    title: 'CUSTOM STAINLESS FABRICATION',
    subtitle: 'Bespoke Italian stainless steel craftsmanship engineered for your exact floorplan.',
    icon: Layers,
    image: '/ikc-images/Bice Bahrain IC.jpeg',
    badge: 'ITALIAN FABRICATION',
    isLight: false,
    details: [
      'Laser-cut seamless hygienic radius jointing',
      'Custom wall cladding, pass-through gantries & warming shelves',
      'Architectural stainless steel cocktail bars & chef tables',
      'Heavy load capacity shelving & mobile trolley units',
    ],
  },
];

export default function ServicesClient() {
  React.useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const targetId = window.location.hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    };
    
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <span className={styles.subTag}>INTEGRATED SOLUTIONS</span>
          <h1 className={styles.heroTitle}>
            Engineering Excellence <br />
            for <span className={styles.italicWord}>Commercial Kitchens.</span>
          </h1>
          <p className={styles.heroDesc}>
            From heavy-duty cooking suites to custom stainless steel fabrication, we deliver complete 
            turnkey solutions engineered to Italian standards of precision and safety.
          </p>
        </div>
      </section>

      {/* Stacked All 6 Services Showcase */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.servicesStack}>
            {servicesData.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`${styles.detailCard} ${service.isLight ? styles.lightCard : styles.darkCard}`}
                >
                  <div className={styles.detailLeft}>
                    <div className={styles.headerMeta}>
                      <span className={styles.detailNum}>{service.num}</span>
                      <IconComp size={24} className={styles.serviceHeaderIcon} />
                    </div>

                    <h2 className={styles.detailTitle}>{service.title}</h2>
                    <p className={styles.detailSubtitle}>{service.subtitle}</p>

                    <div className={styles.featureList}>
                      {service.details.map((feat, idx) => (
                        <div key={idx} className={styles.featureRow}>
                          <CheckCircle2 size={16} className={styles.checkIcon} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <a href="/contact" className={styles.ctaBtn}>
                      <span>REQUEST CUSTOM QUOTE</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>

                  <div className={styles.detailRight}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className={styles.detailImg}
                    />
                    <div className={styles.imgBadge}>
                      <span>{service.badge}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
