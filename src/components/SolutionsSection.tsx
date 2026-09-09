'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Maximize2, 
  Flame, 
  Snowflake, 
  Utensils, 
  Wind, 
  Sparkles, 
  Wrench,
  CheckCircle2
} from 'lucide-react';
import styles from './SolutionsSection.module.css';

const solutionsList = [
  {
    id: '01',
    title: 'COOKING SYSTEMS',
    desc: 'High-performance thermal cooking suites, modular ranges, and induction blocks built for intense service.',
    specs: ['Heavy-Duty Ranges', 'Induction Suites', 'Charcoal & Gas Grills'],
    icon: Flame,
    top: '32%',
    left: '26%',
    anchorId: 'cooking',
  },
  {
    id: '02',
    title: 'COLD STORAGE & REFRIGERATION',
    desc: 'Precision climate-controlled walk-in cold rooms, rapid blast freezers, and under-counter refrigerated passes.',
    specs: ['Walk-in Cold Rooms', 'Rapid Blast Freezers', 'Dual-Temp Drawers'],
    icon: Snowflake,
    top: '20%',
    left: '60%',
    anchorId: 'refrigeration',
  },
  {
    id: '03',
    title: 'FOOD PREPARATION',
    desc: 'Ergonomic AISI 304 stainless steel prep stations, food processors, and HACCP hygiene wash units.',
    specs: ['AISI 304 Worktables', 'Automated Processors', 'HACCP Wash Units'],
    icon: Utensils,
    top: '42%',
    left: '42%',
    anchorId: 'preparation',
  },
  {
    id: '04',
    title: 'VENTILATION & EXTRACTION',
    desc: 'High-efficiency UV canopy hoods, active odor scrubbing systems, and integrated ANSUL fire suppression.',
    specs: ['UV Canopy Hoods', 'Odor Scrubbing', 'ANSUL Fire Protection'],
    icon: Wind,
    top: '55%',
    left: '60%',
    anchorId: 'extraction',
  },
  {
    id: '05',
    title: 'SANITATION & DISHWASHING',
    desc: 'High-capacity flight-type continuous dishwashers, pot washers, and energy-saving heat recovery systems.',
    specs: ['Flight-Type Washers', 'Pot & Pan Sanitizers', 'Heat Recovery'],
    icon: Sparkles,
    top: '72%',
    left: '46%',
    anchorId: 'dishwashing',
  },
  {
    id: '06',
    title: 'CUSTOM FABRICATION',
    desc: 'Precision laser-cut stainless steel chef islands, gantry passes, and seamless welded wall cladding.',
    specs: ['Bespoke Chef Islands', '3D CAD Tailoring', 'Seamless Hygienic Welds'],
    icon: Wrench,
    top: '64%',
    left: '72%',
    anchorId: 'fabrication',
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pinRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateLineCoords = useCallback(() => {
    if (!wrapperRef.current) return;
    const wrapperRect = wrapperRef.current.getBoundingClientRect();

    const newCoords = solutionsList.map((_, idx) => {
      const cardEl = cardRefs.current[idx];
      const pinEl = pinRefs.current[idx];

      if (!cardEl || !pinEl) return null;

      const cardRect = cardEl.getBoundingClientRect();
      const pinRect = pinEl.getBoundingClientRect();

      const isLeft = idx < 3;
      // Connect from card inner edge to exact center of pin dot
      const x1 = isLeft
        ? cardRect.right - wrapperRect.left
        : cardRect.left - wrapperRect.left;
      const y1 = cardRect.top + cardRect.height / 2 - wrapperRect.top;

      const x2 = pinRect.left + pinRect.width / 2 - wrapperRect.left;
      const y2 = pinRect.top + pinRect.height / 2 - wrapperRect.top;

      return { x1, y1, x2, y2 };
    });

    setCoords(newCoords);
  }, []);

  useEffect(() => {
    updateLineCoords();

    const handleResize = () => updateLineCoords();
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(updateLineCoords, 300);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [updateLineCoords]);

  return (
    <section id="solutions" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionBadge}>INTEGRATED ENGINEERING</span>
            <h2 className={styles.title}>
              Integrated Solutions. <br />
              Complete <span className={styles.italicWord}>Performance.</span>
            </h2>
          </div>
          <Link href="/services" className={styles.viewAllBtn}>
            <ArrowRight size={14} />
            <span>EXPLORE ALL SERVICES</span>
          </Link>
        </div>

        {/* 3D Blueprint & Hotspots Section */}
        <div ref={wrapperRef} className={styles.blueprintWrapper}>
          {/* SVG Connecting Leader Lines Overlay */}
          <svg className={styles.svgOverlay}>
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
                    <circle cx={c.x2} cy={c.y2} r="5" fill="#C5A059" className={styles.glowingDot} />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Left Column Solutions List (01 - 03) */}
          <div className={styles.leftSolutionsList}>
            {solutionsList.slice(0, 3).map((item, idx) => {
              const IconComponent = item.icon;
              const isActive = activeSolution === idx;
              return (
                <div
                  key={item.id}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  className={`${styles.solutionCard} ${isActive ? styles.activeCard : ''}`}
                  onMouseEnter={() => setActiveSolution(idx)}
                  onClick={() => setActiveSolution(idx)}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox}>
                      <IconComponent size={18} />
                    </div>
                    <span className={styles.num}>{item.id}</span>
                  </div>
                  <div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDesc}>{item.desc}</p>
                    
                    <div className={styles.specPillsGroup}>
                      {item.specs.map((spec, i) => (
                        <span key={i} className={styles.specTag}>
                          <CheckCircle2 size={10} className={styles.checkIcon} />
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href={`/services#${item.anchorId}`} 
                      className={styles.cardLink}
                    >
                      <span>VIEW SERVICE SPECS</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center 3D Kitchen Floorplan Hotspot Interactive Canvas */}
          <div className={styles.floorplanContainer}>
            <div className={styles.floorplanBg} />

            {/* Render Pins */}
            {solutionsList.map((item, idx) => {
              const isActive = activeSolution === idx;
              return (
                <div
                  key={item.id}
                  ref={(el) => { pinRefs.current[idx] = el; }}
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
              const IconComponent = item.icon;
              const isActive = activeSolution === realIdx;
              return (
                <div
                  key={item.id}
                  ref={(el) => { cardRefs.current[realIdx] = el; }}
                  className={`${styles.solutionCard} ${isActive ? styles.activeCard : ''}`}
                  onMouseEnter={() => setActiveSolution(realIdx)}
                  onClick={() => setActiveSolution(realIdx)}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox}>
                      <IconComponent size={18} />
                    </div>
                    <span className={styles.num}>{item.id}</span>
                  </div>
                  <div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDesc}>{item.desc}</p>

                    <div className={styles.specPillsGroup}>
                      {item.specs.map((spec, i) => (
                        <span key={i} className={styles.specTag}>
                          <CheckCircle2 size={10} className={styles.checkIcon} />
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href={`/services#${item.anchorId}`} 
                      className={styles.cardLink}
                    >
                      <span>VIEW SERVICE SPECS</span>
                      <ArrowRight size={11} />
                    </Link>
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

