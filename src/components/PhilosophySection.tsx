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
            <span className={styles.subHeading}>WHY CHOOSE US</span>
            <h2 className={styles.sketchTitle}>
              Why Leading Chefs & Developers <br />
              <span className={styles.italicWord}>Trust Italian Kitchen Concept.</span>
            </h2>
            <p className={styles.sketchDesc}>
              We simplify your kitchen project. Instead of dealing with multiple suppliers, IKC provides complete turnkey support—from CAD design to Italian equipment supply, certified installation, and 24/7 maintenance.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="/about" className={styles.primaryCta}>
                <span>OUR PROCESS</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className={styles.secondaryCta}>
                <span>REQUEST A QUOTE</span>
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



