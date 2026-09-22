'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Download, Eye, FileText, BookOpen, Wrench, HelpCircle, ArrowRight, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import styles from './ResourcesClient.module.css';

interface ProfileDoc {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  size: string;
  pages: number;
  desc: string;
  fileUrl: string;
  coverImg: string;
  badge: string;
  pageImages: string[];
}

const companyProfiles: ProfileDoc[] = [
  {
    id: 'commercial',
    title: 'Commercial Kitchen & Laundry Solutions',
    subtitle: 'Official Company Profile & Turnkey Engineering Portfolio',
    category: 'COMPANY PROFILE V2',
    size: '12.4 MB PDF',
    pages: 16,
    desc: 'Complete company profile detailing our 100% Italian commercial kitchen engineering, thermal cooking lines, HACCP cold storage, UV extraction, custom stainless steel, and industrial laundry suites.',
    fileUrl: '/Company-profile_V2_NERO.pdf',
    coverImg: '/company-profile-cover.jpg',
    badge: 'COMMERCIAL & LAUNDRY',
    pageImages: Array.from({ length: 16 }, (_, i) => `/pdf-images/company_page_${i + 1}.jpg`),
  },
  {
    id: 'villa',
    title: 'Private Villa Kitchen Solutions',
    subtitle: 'Bespoke Private Villa Culinary Suites & Chef Ranges',
    category: 'VILLA BROCHURE V2',
    size: '4.8 MB PDF',
    pages: 7,
    desc: 'Specialized luxury residential kitchen brochure featuring architectural chef suites, custom burnished brass trims, dual-zone wine cellars, custom island ranges, and whisper-quiet ventilation.',
    fileUrl: '/Villa-IC_V2_.pdf',
    coverImg: '/villa-profile-cover.jpg',
    badge: 'PRIVATE VILLA SUITES',
    pageImages: Array.from({ length: 7 }, (_, i) => `/pdf-images/villa_page_${i + 1}.jpg`),
  },
];

const technicalDownloads = [
  {
    title: 'Thermal Cooking Suite Specifications',
    category: 'Technical Specs',
    size: '5.8 MB PDF',
    desc: 'Gas, electric, and induction heavy-duty modular cooking ranges for commercial culinary operations.',
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
    category: 'Maintenance Manual',
    size: '8.1 MB PDF',
    desc: 'Scheduled servicing routines, genuine Italian spare parts lookup, and warranty terms.',
    icon: Wrench,
  },
  {
    title: 'Custom Stainless Steel Fabrication Guide',
    category: 'Fabrication Catalog',
    size: '4.2 MB PDF',
    desc: 'Bespoke welded 316L/304 marine grade counter dimensions and gantries.',
    icon: BookOpen,
  },
];

const faqs = [
  {
    q: 'What is included in your Commercial Kitchen & Laundry Solutions profile?',
    a: 'Our Commercial & Laundry profile details our turnkey engineering capabilities, custom modular thermal ranges, HACCP walk-in cold rooms, UV air purification ventilation, and high-throughput laundry suites.',
  },
  {
    q: 'Do you design custom kitchens for luxury private villas in the UAE?',
    a: 'Yes. Our Private Villa Kitchen Solutions division designs bespoke residential chef lines, climate-controlled wine cellars, and custom brass-finished island suites tailored for luxury estates.',
  },
  {
    q: 'What is the standard lead time for a custom kitchen installation?',
    a: 'Typical turnkey commercial projects take 6 to 12 weeks, depending on site conditions, from initial 3D CAD design approval to final MEP commissioning on site.',
  },
  {
    q: 'Do you offer after-sales maintenance in Dubai, Abu Dhabi, and GCC?',
    a: 'We provide 24/7 emergency repair support, preventative maintenance contracts, and genuine spare parts across the UAE, Bahrain, and East Africa.',
  },
];

export default function ResourcesClient() {
  const [activePreviewDoc, setActivePreviewDoc] = useState<ProfileDoc | null>(null);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);

  const openPreview = (doc: ProfileDoc) => {
    setActivePreviewDoc(doc);
    setActivePageIndex(0);
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <span className={styles.subTag}>RESOURCES & BROCHURES</span>
          <h1 className={styles.heroTitle}>
            Company Profiles <br />
            & <span className={styles.italicWord}>Technical Catalogs.</span>
          </h1>
          <p className={styles.heroDesc}>
            Download official company profiles, private villa culinary brochures, product specification sheets, and HACCP engineering guides.
          </p>
        </div>
      </section>

      {/* Official Company Profiles Section with PDF Covers */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <span className={styles.sectionTag}>OFFICIAL COMPANY PROFILES</span>
          <h2 className={styles.sectionTitle}>Turnkey Brochures & Solutions</h2>

          <div className={styles.profilesGrid}>
            {companyProfiles.map((doc) => (
              <div key={doc.id} className={styles.profileCard}>
                <div className={styles.coverBox} onClick={() => openPreview(doc)}>
                  <img src={doc.coverImg} alt={doc.title} className={styles.coverImg} />
                  <div className={styles.coverBadge}>{doc.badge}</div>
                  <div className={styles.hoverOverlay}>
                    <div className={styles.previewIconBtn}>
                      <Eye size={20} />
                      <span>PREVIEW BROCHURE</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.metaRow}>
                    <span className={styles.categoryBadge}>{doc.category}</span>
                    <span className={styles.pageCount}>{doc.pages} Pages • {doc.size}</span>
                  </div>

                  <h3 className={styles.profileTitle}>{doc.title}</h3>
                  <p className={styles.profileSubtitle}>{doc.subtitle}</p>
                  <p className={styles.profileDesc}>{doc.desc}</p>

                  <div className={styles.cardActionRow}>
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className={styles.downloadPrimaryBtn}
                    >
                      <Download size={15} />
                      <span>DOWNLOAD PDF</span>
                    </a>
                    <button
                      onClick={() => openPreview(doc)}
                      className={styles.previewSecondaryBtn}
                    >
                      <Eye size={15} />
                      <span>PREVIEW PAGES</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Technical Specification Catalogs */}
      <section className={styles.technicalSection}>
        <div className={styles.container}>
          <span className={styles.sectionTag}>TECHNICAL SPECIFICATIONS</span>
          <h2 className={styles.sectionTitle}>Equipment & Service Catalogs</h2>

          <div className={styles.downloadsGrid}>
            {technicalDownloads.map((item, idx) => {
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
                    <a
                      href="/Company-profile_V2_NERO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.downloadBtn}
                    >
                      <Download size={14} />
                      <span>DOWNLOAD</span>
                    </a>
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

      {/* Interactive PDF Page Preview Modal */}
      {activePreviewDoc && (
        <div className={styles.modalOverlay} onClick={() => setActivePreviewDoc(null)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalSubTag}>{activePreviewDoc.category}</span>
                <h3 className={styles.modalTitle}>{activePreviewDoc.title}</h3>
              </div>
              <div className={styles.modalControlsRight}>
                <a
                  href={activePreviewDoc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className={styles.modalDownloadBtn}
                >
                  <Download size={14} />
                  <span>DOWNLOAD FULL PDF ({activePreviewDoc.size})</span>
                </a>
                <button className={styles.closeBtn} onClick={() => setActivePreviewDoc(null)}>
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className={styles.modalBody}>
              {/* PDF Page Viewer Screen */}
              <div className={styles.viewerContainer}>
                <button
                  className={styles.navPageBtn}
                  disabled={activePageIndex === 0}
                  onClick={() => setActivePageIndex((prev) => Math.max(0, prev - 1))}
                >
                  <ChevronLeft size={24} />
                </button>

                <div className={styles.activePageFrame}>
                  <img
                    src={activePreviewDoc.pageImages[activePageIndex]}
                    alt={`Page ${activePageIndex + 1} of ${activePreviewDoc.title}`}
                    className={styles.activePageImg}
                  />
                  <div className={styles.pageIndicatorBadge}>
                    Page {activePageIndex + 1} of {activePreviewDoc.pages}
                  </div>
                </div>

                <button
                  className={styles.navPageBtn}
                  disabled={activePageIndex === activePreviewDoc.pages - 1}
                  onClick={() => setActivePageIndex((prev) => Math.min(activePreviewDoc.pages - 1, prev + 1))}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Page Thumbnails Bar */}
              <div className={styles.thumbnailsBar}>
                {activePreviewDoc.pageImages.map((imgSrc, pIdx) => (
                  <button
                    key={pIdx}
                    className={`${styles.thumbBtn} ${activePageIndex === pIdx ? styles.thumbActive : ''}`}
                    onClick={() => setActivePageIndex(pIdx)}
                  >
                    <img src={imgSrc} alt={`Thumb ${pIdx + 1}`} className={styles.thumbImg} />
                    <span className={styles.thumbLabel}>{pIdx + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
