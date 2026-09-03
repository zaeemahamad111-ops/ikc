'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck, Cpu, Award } from 'lucide-react';
import styles from './PhilosophySection.module.css';

const features = [
  {
    id: '01',
    icon: Compass,
    title: 'ITALIAN CRAFTSMANSHIP',
    desc: 'Deep rooted traditions blended with high tech manufacturing.',
  },
  {
    id: '02',
    icon: ShieldCheck,
    title: 'PREMIUM MATERIALS',
    desc: '316L Marine-grade stainless steel engineered for lifetime durability.',
  },
  {
    id: '03',
    icon: Cpu,
    title: 'CUSTOM ENGINEERING',
    desc: 'Tailor-made ergonomic station workflows optimized for chef output.',
  },
  {
    id: '04',
    icon: Award,
    title: 'PROFESSIONAL STANDARDS',
    desc: 'Strict compliance with European safety and hygienic certifications.',
  },
];

export default function PhilosophySection() {
  const [activeFeature, setActiveFeature] = useState(0);

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
            <span className={styles.subHeading}>OUR PHILOSOPHY</span>
            <h2 className={styles.sketchTitle}>
              More than equipment. <br />
              We build the <span className={styles.italicWord}>heart</span> <br />
              of your kitchen.
            </h2>
            <p className={styles.sketchDesc}>
              Blending Italian craftsmanship with innovative engineering, we create kitchens that are
              efficient, durable and beautiful to work in.
            </p>

            <Link href="/about" className={styles.storyLink}>
              <span>OUR STORY</span>
              <ArrowRight size={14} />
            </Link>
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

        {/* Right Card: Dark Luxury Kitchen Showcase */}
        <div className={styles.rightShowcaseCard}>
          <div className={styles.showcaseImageBg} />
          <div className={styles.showcaseOverlay} />
        </div>
      </div>
    </section>
  );
}
