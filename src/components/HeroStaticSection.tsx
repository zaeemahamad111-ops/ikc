'use client';

import React from 'react';
import styles from './HeroStaticSection.module.css';

export default function HeroStaticSection() {
  const scrollToSection2 = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.heroWrapper}>
      {/* Background Image Container */}
      <div className={styles.bgContainer}>
        <img
          src="/hero-bg.jpg"
          alt="Italian Commercial Kitchen Concept"
          className={styles.bgImage}
        />
      </div>

      {/* Main Overlay Content */}
      <div className={styles.contentContainer}>
        {/* Left Hero Main Block */}
        <div className={styles.leftContent}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowText}>ITALIAN KITCHEN CONCEPT</span>
            <span className={styles.eyebrowLine} />
          </div>

          <h1 className={styles.mainTitle}>
            <span className={styles.titleWord}>Spaces</span>
            <span className={styles.titleWord}>That</span>
            <span className={styles.titleItalic}>Perform.</span>
          </h1>
        </div>

        {/* Bottom Left Scroll Indicator */}
        <button
          className={styles.scrollIndicator}
          onClick={scrollToSection2}
          aria-label="Scroll to next section"
        >
          <div className={styles.scrollLineContainer}>
            <div className={styles.scrollDot} />
          </div>
          <span className={styles.scrollLabel}>SCROLL</span>
        </button>

        {/* Right Side Vertical Tagline */}
        <div className={styles.rightTagline}>
          <div className={styles.verticalWords}>
            <span>FROM</span>
            <span>CONCEPT</span>
            <span>TO</span>
            <span>COMPLETION</span>
          </div>
          <div className={styles.rightTaglineLine} />
        </div>
      </div>
    </section>
  );
}
