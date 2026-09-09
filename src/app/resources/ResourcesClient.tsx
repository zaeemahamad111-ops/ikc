'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Download, FileText, BookOpen, Wrench, HelpCircle, ArrowRight } from 'lucide-react';
import styles from './ResourcesClient.module.css';

const downloads = [
  {
    title: 'IKC Commercial Kitchen Master Catalog 2026',
    category: 'Product Catalog',
    size: '14.2 MB PDF',
    desc: 'Complete technical specifications, modular cooking suite dimensions, and MEP connection layouts.',
    icon: BookOpen,
  },
  {
    title: 'Thermal Cooking Equipment Specifications',
    category: 'Technical Brochure',
    size: '5.8 MB PDF',
    desc: 'Gas, electric, and induction heavy-duty cooking ranges for commercial culinary operations.',
    icon: FileText,
  },
  {
    title: 'HACCP & Hygiene Engineering Standards',
    category: 'Compliance Guide',
    size: '3.4 MB PDF',
    desc: 'Guidelines for European food safety, radius jointing, and station sanitation protocols.',
    icon: FileText,
  },
  {
    title: 'Preventative Maintenance & Spare Parts Manual',
    category: 'Maintenance Guide',
    size: '8.1 MB PDF',
    desc: 'Scheduled servicing routines, genuine Italian spare parts lookup, and warranty terms.',
    icon: Wrench,
  },
];

const faqs = [
  {
    q: 'What is the standard lead time for a custom commercial kitchen installation?',
    a: 'Typical turnkey projects take 6 to 12 weeks, depending on site conditions, from initial 3D CAD design approval to final MEP commissioning on site.',
  },
  {
    q: 'Do you manufacture custom stainless steel fabrication in Italian standards?',
    a: 'Yes. All our stainless steel units use 316L marine-grade stainless steel with laser-welded seamless hygienic radius jointing.',
  },
  {
    q: 'Do you offer after-sales maintenance in Dubai and Abu Dhabi?',
    a: 'We provide 24/7 emergency repair support, preventative maintenance contracts, and genuine spare parts across the UAE.',
  },
];

export default function ResourcesClient() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <span className={styles.subTag}>RESOURCES & DOWNLOADS</span>
          <h1 className={styles.heroTitle}>
            Technical Catalogs <br />
            & <span className={styles.italicWord}>Engineering Documentation.</span>
          </h1>
          <p className={styles.heroDesc}>
            Access official brochures, product specification sheets, HACCP compliance guides, 
            and preventative maintenance documentation.
          </p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <span className={styles.sectionTag}>OFFICIAL BROCHURES</span>
          <h2 className={styles.sectionTitle}>Download Product Catalogs</h2>

          <div className={styles.downloadsGrid}>
            {downloads.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className={styles.downloadCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox}>
                      <IconComp size={22} className={styles.goldIcon} />
                    </div>
                    <span className={styles.categoryBadge}>{item.category}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.fileSize}>{item.size}</span>
                    <button className={styles.downloadBtn} aria-label="Download Document">
                      <Download size={14} />
                      <span>DOWNLOAD</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <span className={styles.sectionTag}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 className={styles.sectionTitle}>Got Questions? We Have Answers.</h2>

          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={styles.faqItem}>
                <div className={styles.faqHeader}>
                  <HelpCircle size={18} className={styles.goldIcon} />
                  <h3>{faq.q}</h3>
                </div>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
