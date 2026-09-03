'use client';

import React from 'react';
import styles from './StatsSection.module.css';

const stats = [
  {
    value: '40+',
    label: 'Projects Completed Across UAE & GCC',
  },
  {
    value: '100%',
    label: 'Italian Design & Engineering',
  },
  {
    value: 'Turnkey',
    label: 'End-to-End Kitchen Solutions',
  },
  {
    value: '24/7',
    label: 'Reliable After-Sales Support',
  },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
