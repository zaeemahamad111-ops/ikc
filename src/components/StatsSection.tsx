'use client';

import React from 'react';
import { Quote, ChevronRight, Award, ShieldCheck, Wrench, Globe2 } from 'lucide-react';
import styles from './StatsSection.module.css';

const stats = [
  {
    value: '40+',
    title: 'Projects Completed',
    subtitle: 'Across UAE & GCC Region',
    icon: Globe2,
    badge: 'ESTABLISHED LEGACY'
  },
  {
    value: '100%',
    title: 'Italian Engineering',
    subtitle: 'Thermal & Spatial Mastery',
    icon: Award,
    badge: 'CERTIFIED SUITES'
  },
  {
    value: 'Turnkey',
    title: 'End-to-End Delivery',
    subtitle: 'Design to Final Handover',
    icon: ShieldCheck,
    badge: 'FULL SCOPE'
  },
  {
    value: '24/7',
    title: 'Regional Support',
    subtitle: 'Rapid Response Maintenance',
    icon: Wrench,
    badge: 'ALWAYS ON'
  },
];

const clientLogos = [
  "BiCE RISTORANTE", "TORO TORO", "BAWE ISLAND", "JUMEIRAH RESORTS", "MARRIOTT HOTEL", "GRAND HYATT", "VOLANTE TOWER"
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Top Editorial Header */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <div className={styles.goldBadge}>
              <span className={styles.goldDot}></span>
              <span>BUILT FOR A HIGHER STANDARD</span>
            </div>
            <h2 className={styles.mainTitle}>
              Global Experience. <br/>
              Lasting <span className={styles.goldItalic}>Impact.</span>
            </h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.headerDesc}>
              From iconic Michelin-starred restaurants to world-class luxury resorts, our kitchens power some of the most ambitious hospitality spaces across the UAE and GCC.
            </p>
          </div>
        </div>

        {/* Asymmetrical Metric Cards Grid */}
        <div className={styles.metricsGrid}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={`${styles.metricCard} ${idx === 0 ? styles.featuredCard : ''}`}>
                <div className={styles.cardTop}>
                  <span className={styles.cardBadge}>{stat.badge}</span>
                  <div className={styles.iconCircle}>
                    <Icon size={16} />
                  </div>
                </div>
                <div className={styles.cardMiddle}>
                  <span className={styles.statNumber}>{stat.value}</span>
                </div>
                <div className={styles.cardBottom}>
                  <h3 className={styles.statTitle}>{stat.title}</h3>
                  <p className={styles.statSubtitle}>{stat.subtitle}</p>
                </div>
                <div className={styles.hoverLine}></div>
              </div>
            );
          })}
        </div>

        {/* Partners Showcase Band */}
        <div className={styles.partnersContainer}>
          <div className={styles.partnersHeader}>
            <span className={styles.partnersTag}>TRUSTED BY PREMIERE HOSPITALITY BRANDS</span>
            <div className={styles.dividerLine}></div>
          </div>
          
          <div className={styles.logosRow}>
            <div className={styles.logosMarquee}>
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
                <div key={idx} className={styles.logoCard}>
                  <span className={styles.logoText}>{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Luxury Testimonial Showcase */}
        <div className={styles.testimonialWrapper}>
          <div className={styles.quoteCard}>
            <div className={styles.quoteHeader}>
              <Quote size={28} className={styles.quoteIcon} />
              <span className={styles.quoteLabel}>CLIENT TESTIMONIAL</span>
            </div>
            
            <p className={styles.quoteBody}>
              &ldquo;Italian Kitchen Concept delivered our high-volume cooking suite with surgical precision. Their custom thermal fabrication handles 500+ covers daily without compromise.&rdquo;
            </p>
            
            <div className={styles.quoteAuthor}>
              <span className={styles.authorName}>OPERATIONS DIRECTOR</span>
              <span className={styles.authorLocation}>BiCE RISTORANTE &bull; MANAMA, BAHRAIN</span>
            </div>
          </div>

          <div className={styles.imageCard}>
            <img src="/ikc-images/Bice Bahrain IC.jpeg" alt="BiCE Ristorante Kitchen" className={styles.kitchenPhoto} />
            <div className={styles.imageOverlay}>
              <span className={styles.overlayTag}>FEATURED INSTALLATION</span>
              <h4 className={styles.overlayTitle}>BiCE RISTORANTE SUITE</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
