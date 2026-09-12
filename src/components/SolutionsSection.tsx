'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Maximize2, Flame, Snowflake, ChefHat, Wind, Droplets, Hammer } from 'lucide-react';
import styles from './SolutionsSection.module.css';

const solutionsList = [
  {
    id: '01',
    title: 'COOKING SUITES',
    icon: Flame,
    desc: 'High-performance thermal cooking equipment built for extreme service intensity. From custom island suites to heavy-duty charcoal grills, we engineer reliable heat solutions for any cuisine.',
    top: '42%',
    left: '38%',
  },
  {
    id: '02',
    title: 'REFRIGERATION',
    icon: Snowflake,
    desc: 'Reliable cold storage solutions critical for food safety and operational flow. We provide tropicalized compressors, blast chillers, and custom walk-in cold rooms designed for the GCC climate.',
    top: '32%',
    left: '62%',
  },
  {
    id: '03',
    title: 'PREPARATION',
    icon: ChefHat,
    desc: 'Ergonomic workstations designed to maximize culinary efficiency. Our stainless steel prep counters integrate sinks, waste management, and under-counter storage for a seamless workflow.',
    top: '54%',
    left: '46%',
  },
  {
    id: '04',
    title: 'EXTRACTION',
    icon: Wind,
    desc: 'Advanced ventilation canopy systems for a safe, clean, and comfortable kitchen environment. Features include UV grease destruction, acoustic silencing, and smart variable speed controls.',
    top: '26%',
    left: '42%',
  },
  {
    id: '05',
    title: 'DISHWASHING',
    icon: Droplets,
    desc: 'Professional cleaning and sanitizing systems engineered for speed and hygiene. We integrate high-capacity flight-type conveyors and rapid glasswashers to keep the service moving.',
    top: '68%',
    left: '52%',
  },
  {
    id: '06',
    title: 'FABRICATION',
    icon: Hammer,
    desc: 'Custom stainless-steel fabrication tailored precisely to your unique space. Manufactured using marine-grade 316L or 304 steel for lifetime durability in demanding commercial environments.',
    top: '60%',
    left: '70%',
  },
];

interface LineCoord {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export default function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [coords, setCoords] = useState<(LineCoord | null)[]>([]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const floorplanRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 });

  const [mobileProgress, setMobileProgress] = useState(0);

  const updateLineCoords = useCallback(() => {
    if (!wrapperRef.current || !floorplanRef.current) return;
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const floorplanRect = floorplanRef.current.getBoundingClientRect();
    
    setSvgSize({ w: wrapperRect.width, h: wrapperRect.height });

    const newCoords = solutionsList.map((item, idx) => {
      const cardEl = cardRefs.current[idx];
      if (!cardEl) return null;

      const cardRect = cardEl.getBoundingClientRect();

      const isLeft = idx < 3; // 0, 1, 2 are left
      
      const x1 = isLeft
        ? cardRect.right - wrapperRect.left
        : cardRect.left - wrapperRect.left;
      const y1 = cardRect.top + cardRect.height / 2 - wrapperRect.top;

      // Calculate pin exact center purely via relative math to prevent DOM bounding box errors
      const x2 = floorplanRect.left + (parseFloat(item.left) / 100) * floorplanRect.width - wrapperRect.left;
      const y2 = floorplanRect.top + (parseFloat(item.top) / 100) * floorplanRect.height - wrapperRect.top;

      return { x1, y1, x2, y2 };
    });

    setCoords(newCoords);
  }, []);

  useEffect(() => {
    updateLineCoords();

    // Give images time to load and adjust aspect ratio
    const imgTimer = setTimeout(updateLineCoords, 500);
    const handleResize = () => updateLineCoords();
    
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const currentScroll = windowHeight - rect.top;
      const progress = Math.min(Math.max((currentScroll - 100) / (totalHeight), 0), 1) * 100;
      setMobileProgress(progress);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(imgTimer);
    };
  }, [updateLineCoords]);

  // Recalculate on active state change to ensure lines snap instantly if layouts shift
  useEffect(() => {
    updateLineCoords();
  }, [activeSolution, updateLineCoords]);

  return (
    <section id="solutions" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionBadge}>INTEGRATED ENGINEERING</span>
            <h2 className={styles.title}>
              Our Services & <span className={styles.italicWord}>Products.</span>
            </h2>
            <p className={styles.headerDesc} style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', maxWidth: '400px', lineHeight: '1.6' }}>
              Everything you need for a professional commercial kitchen, engineered for high-volume performance and reliability.
            </p>
          </div>
          <Link href="/services" className={styles.viewAllBtn}>
            <ArrowRight size={14} />
            <span>VIEW ALL SOLUTIONS</span>
          </Link>
        </div>

        {/* 3D Blueprint & Hotspots Section */}
        <div ref={wrapperRef} className={styles.blueprintWrapper}>
          {/* Mobile Vertical Timeline Track */}
          <div className={styles.mobileTimelineContainer}>
            <div className={styles.mobileTimelineTrack} />
            <div 
              className={styles.mobileTimelineProgress} 
              style={{ height: `${mobileProgress}%` }}
            >
              <div className={styles.mobileTimelineDot} />
            </div>
          </div>

          {/* SVG Connecting Leader Lines Overlay */}
          <svg className={styles.svgOverlay} viewBox={`0 0 ${svgSize.w} ${svgSize.h}`} preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C5A059" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#DFBF7A" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {solutionsList.map((item, idx) => {
              const c = coords[idx];
              if (!c) return null;
              const isActive = activeSolution === idx;

              return (
                <g key={`line-${item.id}`}>
                  <line
                    x1={c.x1}
                    y1={c.y1}
                    x2={c.x2}
                    y2={c.y2}
                    className={`${styles.connectLine} ${isActive ? styles.activeConnectLine : ''}`}
                  />
                  {isActive && (
                    <circle cx={c.x2} cy={c.y2} r="4" fill="#C5A059" className={styles.glowingDot} />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Left Column Solutions List (01 - 03) */}
          <div className={styles.leftSolutionsList}>
            {solutionsList.slice(0, 3).map((item, idx) => {
              const isActive = activeSolution === idx;
              return (
                <div
                  key={item.id}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  className={`${styles.solutionCard} ${isActive ? styles.activeCard : ''}`}
                  onMouseEnter={() => setActiveSolution(idx)}
                  onClick={() => setActiveSolution(idx)}
                >
                  <div className={styles.cardGlow} />
                  <div className={styles.cardTopRow}>
                    <div className={styles.iconWrapper}>
                      <item.icon size={18} className={styles.cardIcon} />
                      <span className={styles.num}>{item.id}</span>
                    </div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Center 3D Kitchen Floorplan Hotspot Interactive Canvas */}
          <div className={styles.floorplanContainer} ref={floorplanRef}>
            <img src="/room-mock.png" alt="3D Kitchen Layout" className={styles.floorplanImg} onLoad={updateLineCoords} />

            {/* Render Pins */}
            {solutionsList.map((item, idx) => {
              const isActive = activeSolution === idx;
              return (
                <div
                  key={item.id}
                  className={`${styles.pinMark} ${isActive ? styles.activePin : ''}`}
                  style={{ top: item.top, left: item.left }}
                  onClick={() => setActiveSolution(idx)}
                  onMouseEnter={() => setActiveSolution(idx)}
                >
                  <div className={styles.pinBadge}>{item.id}</div>
                  <div className={styles.pinDot} />
                  <div className={styles.pinRipple} />
                </div>
              );
            })}

            <button className={styles.expandBtn} aria-label="Expand Blueprint View">
              <Maximize2 size={16} />
            </button>
          </div>

          {/* Right Column Solutions List (04 - 06) */}
          <div className={styles.rightSolutionsList}>
            {solutionsList.slice(3, 6).map((item, idx) => {
              const realIdx = idx + 3;
              const isActive = activeSolution === realIdx;
              return (
                <div
                  key={item.id}
                  ref={(el) => { cardRefs.current[realIdx] = el; }}
                  className={`${styles.solutionCard} ${isActive ? styles.activeCard : ''}`}
                  onMouseEnter={() => setActiveSolution(realIdx)}
                  onClick={() => setActiveSolution(realIdx)}
                >
                  <div className={styles.cardGlow} />
                  <div className={styles.cardTopRow}>
                    <div className={styles.iconWrapper}>
                      <item.icon size={18} className={styles.cardIcon} />
                      <span className={styles.num}>{item.id}</span>
                    </div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
