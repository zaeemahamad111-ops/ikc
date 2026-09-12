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

  // Preload all 150 frame images into memory with async decoding
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, '0');
      img.src = `/frames/frame_${frameNum}.jpg`;
      img.decoding = 'async'; // Critical for preventing main thread lockups
      if (i === 1) {
        img.onload = () => {
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d', { alpha: false });
            if (ctx && img.complete) {
              const width = canvasRef.current.width;
              const height = canvasRef.current.height;
              const hRatio = width / img.width;
              const vRatio = height / img.height;
              const ratio = Math.max(hRatio, vRatio);
              const centerShift_x = (width - img.width * ratio) / 2;
              const centerShift_y = (height - img.height * ratio) / 2;
              ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
            }
          }
        };
      }
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

    // Set canvas dimensions on resize
    const updateCanvasSize = () => {
      // Hardcode DPR to 1. Canvas doesn't need retina resolution for fast-moving video sequences,
      // and drawing 4K frames at 60fps causes massive GPU/CPU lag.
      const dpr = 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      renderFrame();
    };

    const renderFrame = () => {
      const currentImg = imagesRef.current[frameIndexRef.current];
      if (!currentImg || !currentImg.complete) return;

      const dpr = 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);
      // We don't need clearRect because we draw the image with 'cover', completely filling the canvas
      // ctx.clearRect(0, 0, width, height);

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

    // Ensure the first frame draws as soon as it loads
    const firstImg = imagesRef.current[0];
    if (firstImg) {
      if (firstImg.complete) {
        renderFrame();
      } else {
        firstImg.addEventListener('load', renderFrame);
      }
    }

    // GSAP ScrollTrigger timeline - Pin hero section during frame sequence animation
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=2500', // 2500px scroll distance to complete full video animation
      pin: true,
      pinSpacing: true,
      scrub: 0.15, // Small scrub for smoothing out mouse wheel increments
      onUpdate: (self) => {
        const nextIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(self.progress * (TOTAL_FRAMES - 1))
        );
        if (frameIndexRef.current !== nextIndex) {
          frameIndexRef.current = nextIndex;
          // Render synchronously because GSAP's onUpdate is already inside its optimized rAF ticker
          renderFrame();
        }
      },
    });

    window.addEventListener('resize', updateCanvasSize);

    return () => {
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
        
        {/* High Visibility Text Overlay - Removed as requested by user */}

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
