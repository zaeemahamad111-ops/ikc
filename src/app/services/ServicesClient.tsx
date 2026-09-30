'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, ChevronRight, CookingPot, Snowflake, Wrench, Wind, Sparkles, Layers } from 'lucide-react';
import styles from './ServicesClient.module.css';

const servicesData = [
  {
    id: 'project-management',
    num: '01',
    title: 'END-TO-END PROJECT MANAGEMENT',
    subtitle: 'Comprehensive turnkey project management from initial space planning and MEP engineering to equipment installation and final handover.',
    icon: Layers,
    image: '/pdf-images/company_page_9.jpg',
    badge: 'TURNKEY MANAGEMENT',
    isLight: true,
    details: [
      'Full space layout planning & HACCP compliance engineering',
      'MEP coordination & architectural shop drawing preparation',
      'Dedicated project managers overseeing site progress',
      'Final testing, commissioning & operational handover',
    ],
  },
  {
    id: 'fabrication',
    num: '02',
    title: 'CUSTOM STAINLESS FABRICATION',
    subtitle: 'Premium AISI 304/316L marine-grade stainless steel fabrication custom built for your exact kitchen dimensions and workflow requirements.',
    icon: Wrench,
    image: '/ikc-images/Bice Bahrain IC.jpeg',
    badge: 'BESPOKE FABRICATION',
    isLight: false,
    details: [
      'Seamless radius jointing & hygienic welded preparation counters',
      'Custom chef cooking suites, pass gantries & wall cladding',
      'Architectural cocktail bars, coffee stations & pastry benches',
      'Heavy load shelving, mobile cart gantries & exhaust canopies',
    ],
  },
  {
    id: 'equipment',
    num: '03',
    title: 'COMMERCIAL EQUIPMENT DISTRIBUTION',
    subtitle: 'Direct sourcing and regional distribution of premier Italian thermal cooking suites, refrigeration, and specialized catering machinery.',
    icon: CookingPot,
    image: '/ikc-images/Steak House IC.jpeg',
    badge: 'GLOBAL BRANDS & SUPPLY',
    isLight: true,
    details: [
      'Heavy-duty modular Italian thermal cooking lines & ranges',
      'Precision climate walk-in chillers & blast freezing rooms',
      'High-capacity conveyor dishwashers & sanitation suites',
      'Specialty pizza ovens, grills & bakery production equipment',
    ],
  },
  {
    id: 'installation',
    num: '04',
    title: 'INSTALLATION & TRAINING',
    subtitle: 'Certified technical installation, safety compliance verification, and hands-on staff training for optimal equipment operation.',
    icon: CheckCircle2,
    image: '/ikc-images/Staff Kithen IC , NCS ITALY.jpeg',
    badge: 'CERTIFIED TECHNICAL SERVICES',
    isLight: false,
    details: [
      'On-site positioning, leveling & MEP utility connection',
      'Certified gas, electrical & fire suppression safety checks',
      'Comprehensive operational & menu testing before launch',
      'Staff safety & routine equipment maintenance training',
    ],
  },
  {
    id: 'repairs',
    num: '05',
    title: 'SERVICE & REPAIRS',
    subtitle: '24/7 emergency repair support, preventative maintenance contracts, and genuine OEM spare parts availability across the region.',
    icon: Sparkles,
    image: '/ikc-images/20260121_152509000_iOS.jpg.jpeg',
    badge: '24/7 REGIONAL SUPPORT',
    isLight: true,
    details: [
      'Scheduled preventive maintenance (PPM) contracts',
      'Rapid response emergency technical repair teams',
      'Stocked inventory of original Italian OEM replacement parts',
      'HACCP compliance verification & calibration checks',
    ],
  },
  {
    id: 'hospitality',
    num: '06',
    title: 'HOSPITALITY & FOODSERVICE',
    subtitle: 'Tailored kitchen engineering solutions for luxury hotels, fine dining restaurants, central production facilities, and private villa estates.',
    icon: Snowflake,
    image: '/ikc-images/All day dining Ic.jpeg',
    badge: 'INDUSTRY SECTOR SOLUTIONS',
    isLight: false,
    details: [
      'High-capacity hotel resort all-day dining & banquet kitchens',
      'Open architectural show kitchens for fine dining venues',
      'Central production catering facilities & institutional canteens',
      'Bespoke residential villa chef suites & climate wine cellars',
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
