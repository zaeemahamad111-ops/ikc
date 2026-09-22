'use client';

import React from 'react';
import styles from './BrandLogosMarquee.module.css';

const lane1Logos = [
  { name: 'Angelo Po', file: 'angelo_po.png' },
  { name: 'Bonnet', file: 'bonnet.png' },
  { name: 'Rational', file: 'rational.png' },
  { name: 'Electrolux Professional', file: 'electrolux_professional.png' },
  { name: 'Hoshizaki', file: 'hoshizaki.png' },
  { name: 'Winterhalter', file: 'winterhalter.png' },
  { name: 'Meiko', file: 'meiko.png' },
  { name: 'MKN', file: 'mkn.png' },
  { name: 'Frymaster', file: 'frymaster.png' },
  { name: 'Hatco', file: 'hatco.png' },
  { name: 'Scotsman', file: 'scotsman.png' },
  { name: 'Fagor', file: 'fagor.png' },
  { name: 'Tecnoinox', file: 'tecnoinox.png' },
  { name: 'Tecnodom', file: 'tecnodom.png' },
  { name: 'Infrico', file: 'infrico.png' },
  { name: 'Sagi', file: 'sagi.png' },
  { name: 'Elframo', file: 'elframo.png' },
  { name: 'Emainox', file: 'emainox.png' },
];

const lane2Logos = [
  { name: 'Valoriani', file: 'valoriani.png' },
  { name: 'Roller Grill', file: 'roller_grill.png' },
  { name: 'Winefit', file: 'winefit.png' },
  { name: 'Nemox', file: 'nemox.png' },
  { name: 'Metalcarrelli', file: 'metalcarrelli.png' },
  { name: 'Kromo', file: 'kromo.png' },
  { name: 'Menumaster', file: 'menumaster.png' },
  { name: 'Camurri', file: 'camurri.png' },
  { name: 'Heko', file: 'heko.png' },
  { name: 'NTF', file: 'ntf.png' },
  { name: 'Planeta Grill', file: 'planetagrill.png' },
  { name: 'Renzacci', file: 'renzacci.png' },
  { name: 'Ristopro', file: 'ristopro.png' },
  { name: 'Tomato', file: 'tomato.png' },
  { name: 'Vital', file: 'vital.png' },
  { name: 'Walo Professional', file: 'walo_professional.png' },
  { name: 'YPT', file: 'ypt.png' },
  { name: 'N Logo', file: 'n_logo.png' },
];

export default function BrandLogosMarquee() {
  // Duplicate arrays for infinite seamless loop animation
  const doubleLane1 = [...lane1Logos, ...lane1Logos];
  const doubleLane2 = [...lane2Logos, ...lane2Logos];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subTag}>GLOBAL BRAND PARTNERS</span>
          <h2 className={styles.title}>
            World-Class Equipment <br />
            <span className={styles.goldItalic}>Brands We Supply &amp; Engineer.</span>
          </h2>
          <p className={styles.desc}>
            We partner with Europe and Italy&apos;s most prestigious commercial culinary equipment manufacturers to deliver high-performance kitchens across the UAE and GCC.
          </p>
        </div>

        {/* 2-Lane Marquee Train Container */}
        <div className={styles.marqueeContainer}>
          {/* Gradient Edge Masks */}
          <div className={styles.gradientLeft} />
          <div className={styles.gradientRight} />

          {/* Lane 1: Right-to-Left Train Animation */}
          <div className={styles.laneWrapper}>
            <div className={styles.trackLeft}>
              {doubleLane1.map((logo, idx) => (
                <div key={`lane1-${idx}`} className={styles.logoCard}>
                  <img
                    src={`/brand-logos/${logo.file}`}
                    alt={`${logo.name} logo`}
                    className={styles.logoImg}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Lane 2: Left-to-Right Train Animation (Opposite Direction) */}
          <div className={styles.laneWrapper}>
            <div className={styles.trackRight}>
              {doubleLane2.map((logo, idx) => (
                <div key={`lane2-${idx}`} className={styles.logoCard}>
                  <img
                    src={`/brand-logos/${logo.file}`}
                    alt={`${logo.name} logo`}
                    className={styles.logoImg}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
