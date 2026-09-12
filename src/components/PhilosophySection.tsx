'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './PhilosophySection.module.css';

export default function PhilosophySection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        {/* Left Card: Cream sketch illustration panel */}
        <div className={styles.leftSketchCard}>
          <div className={styles.stampBadge}>
            <span>IKC</span>
            <small>ITALIA</small>
          </div>

          <div className={styles.sketchHeader}>
            <span className={styles.subHeading}>ABOUT IKC</span>
            <h2 className={styles.sketchTitle}>
              Italian Kitchen Expertise. <br />
              <span className={styles.italicWord}>Complete Local Support.</span>
            </h2>
            <p className={styles.sketchDesc}>
              With decades of experience in the UAE, we simplify your project by managing everything under one roof. We offer complete support—from initial consultation and custom kitchen design to equipment supply, certified installation, and dedicated after-sales service.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="/about" className={styles.primaryCta}>
                <span>OUR PROCESS</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className={styles.secondaryCta}>
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>

          {/* Architectural Kitchen Sketch Illustration */}
          <div className={styles.sketchImageWrapper}>
            <img
              src="/section-2-sketch.png"
              alt="Italian Kitchen Architectural Sketch"
              className={styles.sketchImg}
            />
          </div>
        </div>

        {/* Right Card: Clean Dark Luxury Kitchen Showcase Image */}
        <div className={styles.rightShowcaseCard}>
          <div className={styles.showcaseImageBg} />
          <div className={styles.showcaseOverlay} />
          <div className={styles.showcaseBadge}>
            <span className={styles.badgeTag}>PREMIERE INSTALLATION</span>
            <h3 className={styles.badgeTitle}>Master Italian Thermal Kitchen Suite</h3>
          </div>
        </div>
      </div>
    </section>
  );
}



