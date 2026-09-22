'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroFinished, setHeroFinished] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Smart navbar reveal on scroll-up / hide on scroll-down
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY + 5) {
          // Scrolling down -> hide navbar
          setVisible(false);
        } else if (currentScrollY < lastScrollY - 5) {
          // Scrolling up -> reveal navbar!
          setVisible(true);
        }
      } else {
        // Near top of page -> always visible
        setVisible(true);
      }

      lastScrollY = currentScrollY;

      // Check if hero animation is finished on homepage (2400px scroll)
      if (pathname === '/') {
        if (currentScrollY > 2400) {
          setHeroFinished(true);
        } else {
          setHeroFinished(false);
        }
      }
    };

    // Initial check
    if (pathname !== '/') {
      setHeroFinished(true);
    } else {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${!visible ? styles.hidden : ''}`}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <Link href="/" className={styles.brand}>
          <img src="/logo.png" alt="Italian Kitchen Concept Logo" className={styles.brandLogoImg} />
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className={`${styles.nav} ${heroFinished ? styles.visible : ''}`}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>HOME</Link>
          <Link href="/about" className={pathname === '/about' ? styles.active : ''}>ABOUT US</Link>
          <Link href="/services" className={pathname === '/services' ? styles.active : ''}>SERVICES</Link>
          <Link href="/projects" className={pathname === '/projects' ? styles.active : ''}>PROJECTS</Link>
          <Link href="/resources" className={pathname === '/resources' ? styles.active : ''}>RESOURCES</Link>
          <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>CONTACT</Link>
        </nav>

        {/* Right CTA */}
        <div className={styles.actions}>
          <Link href="/contact" className={styles.ctaButton}>
            <span>START A PROJECT</span>
          </Link>
          <button
            className={styles.menuButton}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileOpen : ''}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className={styles.mobileDrawerHeader}>
          <button 
            className={styles.mobileBackBtn}
            onClick={() => setMobileOpen(false)}
            aria-label="Back to Screen"
          >
            <X size={18} />
            <span>CLOSE &bull; BACK TO PAGE</span>
          </button>
        </div>

        <div className={styles.mobileNavLinks} onClick={(e) => e.stopPropagation()}>
          <Link href="/" className={pathname === '/' ? styles.mobileActive : ''} onClick={() => setMobileOpen(false)}>HOME</Link>
          <Link href="/about" className={pathname === '/about' ? styles.mobileActive : ''} onClick={() => setMobileOpen(false)}>ABOUT US</Link>
          <Link href="/services" className={pathname === '/services' ? styles.mobileActive : ''} onClick={() => setMobileOpen(false)}>SERVICES</Link>
          <Link href="/projects" className={pathname === '/projects' ? styles.mobileActive : ''} onClick={() => setMobileOpen(false)}>PROJECTS</Link>
          <Link href="/resources" className={pathname === '/resources' ? styles.mobileActive : ''} onClick={() => setMobileOpen(false)}>RESOURCES</Link>
          <Link href="/contact" className={pathname === '/contact' ? styles.mobileActive : ''} onClick={() => setMobileOpen(false)}>CONTACT</Link>
          <Link href="/contact" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>START A PROJECT</Link>
        </div>
      </div>
    </header>
  );
}
