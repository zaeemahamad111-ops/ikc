'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Globe, Phone, Mail, MapPin, Share2 } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      {/* Top CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaContainer}>
          <span className={styles.ctaTag}>READY TO BUILD?</span>
          <h2 className={styles.ctaTitle}>
            Let’s Build the Kitchen <br />
            Behind Your <span className={styles.italicWord}>Success.</span>
          </h2>

          <div className={styles.ctaBtnGroup}>
            <Link href="/contact" className={styles.primaryCta}>
              <span>START YOUR PROJECT</span>
              <ArrowRight size={16} />
            </Link>

            <Link href="/contact" className={styles.secondaryCta}>
              <div className={styles.playIconBox}>
                <Play size={12} fill="#FFFFFF" />
              </div>
              <span>DISCUSS YOUR VISION</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={styles.mainFooter}>
        <div className={styles.footerContainer}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLogo}>
              <div className={styles.logoMark}>IKC</div>
              <div className={styles.logoText}>
                <span>ITALIAN</span>
                <span>KITCHEN</span>
                <span>CONCEPT</span>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              Delivering professional kitchen solutions that combine Italian craftsmanship,
              innovative engineering and seamless execution.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Share"><Share2 size={16} /></a>
              <a href="#" aria-label="Website"><Globe size={16} /></a>
            </div>
          </div>

          {/* Nav Column: Explore */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>EXPLORE</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Nav Column: Services */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>SERVICES</h3>
            <ul>
              <li><Link href="/services">Cooking Systems</Link></li>
              <li><Link href="/services">Refrigeration</Link></li>
              <li><Link href="/services">Preparation</Link></li>
              <li><Link href="/services">Extraction</Link></li>
              <li><Link href="/services">Dishwashing</Link></li>
              <li><Link href="/services">Fabrication</Link></li>
            </ul>
          </div>

          {/* Nav Column: Resources */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>RESOURCES</h3>
            <ul>
              <li><Link href="/resources">Brochures</Link></li>
              <li><Link href="/resources">Catalogs</Link></li>
              <li><Link href="/resources">Maintenance</Link></li>
              <li><Link href="/resources">Spare Parts</Link></li>
              <li><Link href="/resources">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>CONTACT</h3>
            <ul className={styles.contactList}>
              <li>
                <Phone size={14} className={styles.goldIcon} />
                <span>+971 4 123 4567</span>
              </li>
              <li>
                <Mail size={14} className={styles.goldIcon} />
                <span>info@italiankitchenconcept.com</span>
              </li>
              <li>
                <MapPin size={14} className={styles.goldIcon} />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className={styles.bottomBar}>
          <span>© 2026 Italian Kitchen Concept. All Rights Reserved.</span>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
