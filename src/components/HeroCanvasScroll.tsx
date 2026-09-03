'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { ArrowRight, Play } from 'lucide-react';
import styles from './HeroCanvasScroll.module.css';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 150;

export default function HeroCanvasScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const requestRef = useRef<number | null>(null);

  // Preload all 150 frame images into memory
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, '0');
      img.src = `/frames/frame_${frameNum}.jpg`;

      img.onload = () => {
        count++;
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  // Initialize Canvas & ScrollTrigger
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Set canvas dimensions on resize (not inside render loop!)
    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      renderFrame();
    };

    const renderFrame = () => {
      const currentImg = imagesRef.current[frameIndexRef.current];
      if (!currentImg || !currentImg.complete) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Cover scaling calculation
      const imgRatio = currentImg.width / currentImg.height;
      const screenRatio = width / height;

      let drawWidth = width;
      let drawHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      if (screenRatio > imgRatio) {
        drawHeight = width / imgRatio;
        offsetY = (height - drawHeight) / 2;
      } else {
        drawWidth = height * imgRatio;
        offsetX = (width - drawWidth) / 2;
      }

      ctx.drawImage(currentImg, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
    };

    updateCanvasSize();

    // GSAP ScrollTrigger timeline - Pin hero section during frame sequence animation
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=2500', // 2500px scroll distance to complete full video animation
      pin: true,
      pinSpacing: true,
      scrub: 0.15,
      onUpdate: (self) => {
        const nextIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(self.progress * (TOTAL_FRAMES - 1))
        );
        if (frameIndexRef.current !== nextIndex) {
          frameIndexRef.current = nextIndex;
          if (requestRef.current) cancelAnimationFrame(requestRef.current);
          requestRef.current = requestAnimationFrame(renderFrame);
        }
      },
    });

    window.addEventListener('resize', updateCanvasSize);

    return () => {
      st.kill();
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.heroSectionWrapper}>
      <div className={styles.stickyCanvasContainer}>
        {/* HTML5 Canvas render layer */}
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* Content Layer */}
        <div className={styles.contentContainer}>
          {/* Main Hero Header Info */}
          <div className={styles.heroMain}>
            <div className={styles.tagline}>PROFESSIONAL KITCHEN SYSTEMS</div>
            <h1 className={styles.headline}>
              Engineered <br />
              to <span className={styles.italicWord}>Perform.</span>
            </h1>
            <p className={styles.description}>
              We design, build and deliver complete commercial kitchen solutions where
              precision meets performance.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="/services" className={styles.primaryBtn}>
                <span>EXPLORE OUR EXPERTISE</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Scroll Prompt Right Indicator */}
          <div className={styles.scrollIndicator}>
            <span>SCROLL TO EXPLORE</span>
            <div className={styles.scrollDotContainer}>
              <div className={styles.scrollDot} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
