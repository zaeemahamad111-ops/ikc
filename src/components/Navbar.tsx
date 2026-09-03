'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <Link href="/" className={styles.brand}>
          <div className={styles.logoMark}>IKC</div>
          <div className={styles.logoText}>
            <span>ITALIAN</span>
            <span>KITCHEN</span>
            <span>CONCEPT</span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className={styles.nav}>
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
          <button className={styles.menuButton} aria-label="Toggle Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
