'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Globe, Phone, Mail, MapPin, Share2, MessageSquare } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      {/* Top CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaContainer}>
          <span className={styles.ctaTag}>START A CONVERSATION</span>
          <h2 className={styles.ctaTitle}>
            Ready for your new <br />
            commercial <span className={styles.italicWord}>kitchen?</span>
          </h2>

          <div className={styles.ctaBtnGroup}>
            {/* Primary CTA: Solid Gold Metallic Button */}
            <Link href="/contact" className={styles.primaryCta}>
              <span>REQUEST A QUOTE</span>
              <ArrowRight size={16} />
            </Link>

            {/* Secondary CTA: Glassmorphic Outlined Button */}
            <Link href="/contact" className={styles.secondaryCta}>
              <div className={styles.iconCircle}>
                <MessageSquare size={14} className={styles.calIcon} />
              </div>
              <span>CONTACT US</span>
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
            <img src="/logo.png" alt="Italian Kitchen Concept Logo" className={styles.brandLogoImg} />
            </Link>
            <p className={styles.brandDesc}>
              Delivering professional kitchen solutions that combine Italian craftsmanship,
              innovative thermal engineering and seamless regional execution across UAE, GCC & East Africa.
            </p>
            <div className={styles.socialIcons}>
              {/* Instagram */}
              <a href="https://www.instagram.com/italianconceptdubai/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=100089129486488" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/italianconceptdubai/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
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

          {/* Nav Column: Services Deep Links */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>SERVICES</h3>
            <ul>
              <li><Link href="/services#cooking">Cooking Systems</Link></li>
              <li><Link href="/services#refrigeration">Cold Storage & Refrigeration</Link></li>
              <li><Link href="/services#preparation">Food Preparation Workstations</Link></li>
              <li><Link href="/services#extraction">Ventilation & Extraction</Link></li>
              <li><Link href="/services#dishwashing">Sanitation & Dishwashing</Link></li>
              <li><Link href="/services#fabrication">Custom Stainless Fabrication</Link></li>
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
            <h3 className={styles.colTitle}>OUR OFFICES</h3>
            <ul className={styles.contactList}>
              <li style={{ alignItems: 'flex-start' }}>
                <MapPin size={16} className={styles.goldIcon} style={{ marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontWeight: 600, color: '#FFFFFF' }}>Front Office:</span>
                  <span>Wadi Al-Safa 3, KOA Canvas - Dubai</span>
                </div>
              </li>
              <li style={{ alignItems: 'flex-start', marginTop: '0.5rem' }}>
                <MapPin size={16} className={styles.goldIcon} style={{ marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontWeight: 600, color: '#FFFFFF' }}>Back Office:</span>
                  <span>1 16 St - Al Twar Fifth - Al Twar 5 - Dubai</span>
                </div>
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                <Phone size={14} className={styles.goldIcon} />
                <span>+971 4 123 4567</span>
              </li>
              <li>
                <Mail size={14} className={styles.goldIcon} />
                <span>info@italiankitchenconcept.com</span>
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

