'use client';

import React, { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 3-second progress loader animation
    const startTime = Date.now();
    const duration = 2800; // 2.8 seconds progress + 0.2s finish

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setFadeOut(true);
        setTimeout(() => {
          setLoading(false);
        }, 500); // fade out duration
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
          <div className={styles.logoMark}>IKC</div>
          <div className={styles.logoText}>
            <span>ITALIAN</span>
            <span>KITCHEN</span>
            <span>CONCEPT</span>
          </div>
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
