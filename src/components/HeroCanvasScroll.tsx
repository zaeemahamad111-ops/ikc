'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HeroCanvasScroll.module.css';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 150;

export default function HeroCanvasScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);
  const isLoadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));

  // 1. Preload and pre-decode all 150 frames into memory
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, '0');
      img.src = `/frames/frame_${frameNum}.jpg`;
      img.decoding = 'async';

      const idx = i - 1;
      const markLoaded = () => {
        isLoadedRef.current[idx] = true;
      };

      if (img.complete) {
        markLoaded();
      } else {
        img.onload = markLoaded;
      }

      if (img.decode) {
        img.decode().then(markLoaded).catch(() => {
          if (img.complete) markLoaded();
        });
      }

      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  // 2. Initialize Canvas, Smooth Lerp Loop & GSAP ScrollTrigger
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return;

    // Responsive Canvas Resizing with DPR control (dpr = 1 for max frame performance)
    let lastWidth = 0;
    let lastHeight = 0;

    const updateCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Avoid canvas reset on small mobile address bar toggles if width didn't change
      if (width === lastWidth && Math.abs(height - lastHeight) < 60) {
        return;
      }
      
      lastWidth = width;
      lastHeight = height;

      canvas.width = width;
      canvas.height = height;

      // Force redrawing current frame on resize
      lastDrawnFrameRef.current = -1;
      drawFrame(Math.round(currentFrameRef.current));
    };

    // Helper: Find the nearest loaded frame if target frame isn't decoded yet
    const getNearestLoadedImage = (targetIndex: number): HTMLImageElement | null => {
      const images = imagesRef.current;
      if (!images.length) return null;

      // First check exact target frame
      if (images[targetIndex] && isLoadedRef.current[targetIndex] && images[targetIndex].complete) {
        return images[targetIndex];
      }

      // Search outwards for closest available frame
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = targetIndex - offset;
        const next = targetIndex + offset;

        if (prev >= 0 && images[prev] && isLoadedRef.current[prev] && images[prev].complete) {
          return images[prev];
        }
        if (next < TOTAL_FRAMES && images[next] && isLoadedRef.current[next] && images[next].complete) {
          return images[next];
        }
      }

      // Fallback to first image if available
      return images[0] || null;
    };

    // Ultra-optimized Frame Drawer with Object-Fit Cover scaling
    const drawFrame = (frameIndex: number) => {
      const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex));
      const img = getNearestLoadedImage(clampedIndex);
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const width = canvas.width;
      const height = canvas.height;
      if (width === 0 || height === 0) return;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'medium';

      const imgRatio = img.naturalWidth / img.naturalHeight;
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

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    updateCanvasSize();

    // Draw initial frame as soon as first image is ready
    const firstImg = imagesRef.current[0];
    if (firstImg) {
      if (firstImg.complete) {
        drawFrame(0);
      } else {
        firstImg.addEventListener('load', () => drawFrame(0));
      }
    }

    // GSAP ScrollTrigger setup
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=2800', // Smooth comfortable scroll distance
      pin: true,
      pinSpacing: true,
      scrub: 0.4, // Smooth physics easing on scroll
      onUpdate: (self) => {
        // Set target frame float value based on scroll progress
        targetFrameRef.current = self.progress * (TOTAL_FRAMES - 1);
      },
    });

    // High-performance Lerp Ticker Loop for silky continuous 60fps frame transitions
    const onTickerUpdate = () => {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.001) {
        // Exponential spring ease for fluid responsiveness without lag
        currentFrameRef.current += diff * 0.22;
        const intFrame = Math.round(currentFrameRef.current);

        if (intFrame !== lastDrawnFrameRef.current) {
          drawFrame(intFrame);
          lastDrawnFrameRef.current = intFrame;
        }
      }
    };

    gsap.ticker.add(onTickerUpdate);

    window.addEventListener('resize', updateCanvasSize);

    return () => {
      gsap.ticker.remove(onTickerUpdate);
      st.kill();
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.heroSectionWrapper}>
      <div className={styles.stickyCanvasContainer}>
        {/* Full-bleed HTML5 Canvas Scroll Animation Layer */}
        <canvas 
          ref={canvasRef} 
          className={styles.canvas} 
          style={{ 
            backgroundImage: "url('/frames/frame_0001.jpg')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }} 
        />
        
        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span>SCROLL</span>
          <div className={styles.scrollDotContainer}>
            <div className={styles.scrollDot} />
          </div>
        </div>
      </div>
    </div>
  );
}
