'use client';

import React from 'react';
import Link from 'next/link';
import { Maximize2 } from 'lucide-react';
import styles from './CraftsmanshipSection.module.css';

const detailsList = [
  {
    title: 'PRECISION FABRICATION',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'PREMIUM COMPONENTS',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'DURABLE HARDWARE',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'FLAWLESS FINISHES',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop',
  },
];

export default function CraftsmanshipSection() {
  return (
    <section id="craftsmanship" className={styles.section}>
      <div className={styles.container}>
        {/* Left Title Box */}
        <div className={styles.titleBox}>
          <span className={styles.subTitle}>CRAFTED TO PERFECTION</span>
          <h2 className={styles.title}>
            Every Detail <br />
            <span className={styles.italicWord}>Matters.</span>
          </h2>
        </div>

        {/* 4 Zoom Detail Cards Grid */}
        <div className={styles.cardsGrid}>
          {detailsList.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageBox}>
                <img src={item.image} alt={item.title} className={styles.cardImg} />
                <div className={styles.imgOverlay} />
              </div>
              <div className={styles.cardCaption}>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Expand Action */}
        <Link href="/services" className={styles.zoomButton} aria-label="Explore Services">
          <Maximize2 size={16} />
        </Link>
      </div>
    </section>
  );
}
