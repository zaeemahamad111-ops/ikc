'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Maximize2 } from 'lucide-react';
import styles from './SolutionsSection.module.css';

const solutionsList = [
  {
    id: '01',
    title: 'COOKING',
    desc: 'High-performance cooking equipment built for intensity.',
    top: '32%',
    left: '26%',
  },
  {
    id: '02',
    title: 'REFRIGERATION',
    desc: 'Reliable cold storage solutions for every kitchen need.',
    top: '20%',
    left: '60%',
  },
  {
    id: '03',
    title: 'PREPARATION',
    desc: 'Ergonomic workstations designed for efficiency and flow.',
    top: '42%',
    left: '42%',
  },
  {
    id: '04',
    title: 'EXTRACTION',
    desc: 'Advanced ventilation systems for a safe and clean environment.',
    top: '55%',
    left: '60%',
  },
  {
    id: '05',
    title: 'DISHWASHING',
    desc: 'Professional cleaning systems for hygiene and speed.',
    top: '72%',
    left: '46%',
  },
  {
    id: '06',
    title: 'FABRICATION',
    desc: 'Custom stainless-steel fabrication tailored to your space.',
    top: '64%',
    left: '72%',
  },
];

export default function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <section id="solutions" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>
              Integrated Solutions. <br />
              Complete <span className={styles.italicWord}>Performance.</span>
            </h2>
          </div>
          <Link href="/services" className={styles.viewAllBtn}>
            <ArrowRight size={14} />
            <span>VIEW ALL SOLUTIONS</span>
          </Link>
        </div>

        {/* 3D Blueprint & Hotspots Section */}
        <div className={styles.blueprintWrapper}>
          {/* SVG Connecting Leader Lines Overlay */}
          <svg className={styles.svgOverlay}>
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#DFBF7A" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Left side connections (01, 02, 03) */}
            {solutionsList.slice(0, 3).map((item, idx) => {
              const cardY = `${(idx * 33) + 16}%`;
              const isActive = activeSolution === idx;
              return (
                <g key={`left-line-${item.id}`}>
                  <line
                    x1="0%"
                    y1={cardY}
                    x2={item.left}
                    y2={item.top}
                    className={`${styles.connectLine} ${isActive ? styles.activeConnectLine : ''}`}
                  />
                  {isActive && (
                    <circle cx={item.left} cy={item.top} r="4" fill="#C5A059" />
                  )}
                </g>
              );
            })}

            {/* Right side connections (04, 05, 06) */}
            {solutionsList.slice(3, 6).map((item, idx) => {
              const realIdx = idx + 3;
              const cardY = `${(idx * 33) + 16}%`;
              const isActive = activeSolution === realIdx;
              return (
                <g key={`right-line-${item.id}`}>
                  <line
                    x1="100%"
                    y1={cardY}
                    x2={item.left}
                    y2={item.top}
                    className={`${styles.connectLine} ${isActive ? styles.activeConnectLine : ''}`}
                  />
                  {isActive && (
                    <circle cx={item.left} cy={item.top} r="4" fill="#C5A059" />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Left Column Solutions List (01 - 03) */}
          <div className={styles.leftSolutionsList}>
            {solutionsList.slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                className={`${styles.solutionCard} ${
                  activeSolution === idx ? styles.activeCard : ''
                }`}
                onMouseEnter={() => setActiveSolution(idx)}
                onClick={() => setActiveSolution(idx)}
              >
                <span className={styles.num}>{item.id}</span>
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center 3D Kitchen Floorplan Hotspot Interactive Canvas */}
          <div className={styles.floorplanContainer}>
            <div className={styles.floorplanBg} />

            {/* Render Pins */}
            {solutionsList.map((item, idx) => (
              <div
                key={item.id}
                className={`${styles.pinMark} ${
                  activeSolution === idx ? styles.activePin : ''
                }`}
                style={{ top: item.top, left: item.left }}
                onClick={() => setActiveSolution(idx)}
                onMouseEnter={() => setActiveSolution(idx)}
              >
                <div className={styles.pinBadge}>{item.id}</div>
                <div className={styles.pinDot} />
                <div className={styles.pinRipple} />
              </div>
            ))}

            <button className={styles.expandBtn} aria-label="Expand Layout">
              <Maximize2 size={16} />
            </button>
          </div>

          {/* Right Column Solutions List (04 - 06) */}
          <div className={styles.rightSolutionsList}>
            {solutionsList.slice(3, 6).map((item, idx) => {
              const realIdx = idx + 3;
              return (
                <div
                  key={item.id}
                  className={`${styles.solutionCard} ${
                    activeSolution === realIdx ? styles.activeCard : ''
                  }`}
                  onMouseEnter={() => setActiveSolution(realIdx)}
                  onClick={() => setActiveSolution(realIdx)}
                >
                  <span className={styles.num}>{item.id}</span>
                  <div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDesc}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
