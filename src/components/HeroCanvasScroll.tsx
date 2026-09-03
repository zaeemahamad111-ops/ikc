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
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  // Preload frames
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, '0');
      img.src = `/frames/frame_${frameNum}.jpg`;

      img.onload = () => {
        count++;
        setLoadedCount(count);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Initialize Canvas & ScrollTrigger
  useEffect(() => {
    if (images.length < TOTAL_FRAMES || !canvasRef.current || !containerRef.current) return;

    // Smooth Scroll setup (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Render frame logic
    const frameObj = { frame: 0 };

    const render = () => {
      const currentImg = images[Math.floor(frameObj.frame)];
      if (!currentImg || !currentImg.complete) return;

      // Handle High DPI Canvas scaling
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      ctx.clearRect(0, 0, width, height);

      // Cover scaling math
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
    };

    // Draw initial frame
    render();

    // GSAP ScrollTrigger timeline - Pin hero section during frame sequence animation
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=3000', // 3000px scroll distance to complete full video animation
      pin: true,
      pinSpacing: true,
      scrub: 0.2,
      onUpdate: (self) => {
        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(self.progress * (TOTAL_FRAMES - 1))
        );
        frameObj.frame = frameIndex;
        render();
      },
    });

    window.addEventListener('resize', render);

    return () => {
      st.kill();
      lenis.destroy();
      window.removeEventListener('resize', render);
    };
  }, [images]);

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
