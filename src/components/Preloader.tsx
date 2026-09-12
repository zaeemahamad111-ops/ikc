'use client';

import React, { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if preloader has already been displayed during this session
    if (typeof window !== 'undefined') {
      const hasSeen = sessionStorage.getItem('ikc_preloader_seen');
      if (hasSeen === 'true') {
        setLoading(false);
        return;
      }
    }

    // 5-second progress loader animation for initial entrance & 3D canvas preloading
    const startTime = Date.now();
    const duration = 5000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setFadeOut(true);
        setTimeout(() => {
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('ikc_preloader_seen', 'true');
          }
          setLoading(false);
        }, 400); // fade out duration
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.preloaderWrapper} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.loaderContent}>
        {/* Animated Brand Logo */}
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Italian Kitchen Concept Logo" className={styles.brandLogoImg} />
        </div>

        <p className={styles.tagline}>ITALIAN DESIGN & THERMAL ENGINEERING</p>

        {/* 3-Second Loading Bar */}
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBarFill} style={{ width: `${progress}%` }} />
        </div>

        {/* Percentage Counter */}
        <div className={styles.percentageText}>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}

