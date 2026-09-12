'use client';

import React, { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 5.0-second precision progress loader animation
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
          setLoading(false);
        }, 500); // smooth fade out duration
      }
    }, 20);

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

        <p className={styles.tagline}>ITALIAN DESIGN &amp; THERMAL ENGINEERING</p>

        {/* 5-Second Glowing Gold Loading Bar */}
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
