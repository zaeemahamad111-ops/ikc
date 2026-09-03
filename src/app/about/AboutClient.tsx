'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsSection from '@/components/StatsSection';
import { ArrowRight, ShieldCheck, Award, Users, Compass, Building, CheckCircle2 } from 'lucide-react';
import styles from './AboutClient.module.css';

export default function AboutClient() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <span className={styles.subTag}>ABOUT ITALIAN KITCHEN CONCEPT</span>
          <h1 className={styles.heroTitle}>
            Crafting the Heart <br />
            of <span className={styles.italicWord}>Culinary Excellence.</span>
          </h1>
          <p className={styles.heroDesc}>
            Italian Concept General Trading LLC brings world-class Italian craftsmanship, 
            cutting-edge thermal engineering, and end-to-end turnkey commercial kitchen execution 
            to hospitality brands across the UAE and GCC region.
          </p>
        </div>
      </section>

      {/* Story & Heritage Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyLeft}>
              <span className={styles.sectionLabel}>OUR HERITAGE</span>
              <h2 className={styles.sectionTitle}>
                Precision Engineering <br />
                Meets Italian Artistry.
              </h2>
              <p className={styles.bodyText}>
                Founded with a mission to elevate commercial culinary spaces, Italian Kitchen Concept (IKC) 
                combines decades of Italian manufacturing heritage with regional Middle Eastern installation expertise.
              </p>
              <p className={styles.bodyText}>
                We partner directly with Michelin-starred chefs, luxury hotel developers, and high-volume commercial 
                caterers to engineer custom kitchen environments that maximize workflow efficiency, safety, and longevity.
              </p>

              <div className={styles.highlightsGrid}>
                <div className={styles.highlightCard}>
                  <ShieldCheck size={24} className={styles.goldIcon} />
                  <h3>Marine-Grade Steel</h3>
                  <p>316L grade anti-corrosive stainless construction</p>
                </div>
                <div className={styles.highlightCard}>
                  <Award size={24} className={styles.goldIcon} />
                  <h3>Certified Safety</h3>
                  <p>Strict European HACCP & ANSUL compliance</p>
                </div>
              </div>
            </div>

            <div className={styles.storyRight}>
              <div className={styles.imageCard}>
                <img src="/section-2-dark-kitchen.png" alt="IKC Master Kitchen" className={styles.storyImg} />
                <div className={styles.badgeBox}>
                  <span className={styles.badgeNum}>100%</span>
                  <span className={styles.badgeLabel}>Italian Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <StatsSection />

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <span className={styles.sectionLabel}>CORE PRINCIPLES</span>
            <h2 className={styles.sectionTitle}>
              Built to Perform. <br />
              <span className={styles.italicWord}>Engineered to Endure.</span>
            </h2>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <Compass size={28} className={styles.valueIcon} />
              <h3>Custom Ergonomic Design</h3>
              <p>Every station is mapped to chef movement patterns to optimize speed and reduce kitchen staff fatigue.</p>
            </div>
            <div className={styles.valueCard}>
              <Building size={28} className={styles.valueIcon} />
              <h3>Turnkey Project Execution</h3>
              <p>From initial 3D layout CAD drawings to final MEP hookup, commissioning, and staff training.</p>
            </div>
            <div className={styles.valueCard}>
              <Users size={28} className={styles.valueIcon} />
              <h3>24/7 Dedicated Support</h3>
              <p>Our expert technicians provide round-the-clock maintenance, spare parts supply, and preventative care.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
