import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './PrivacyClient.module.css';

export const metadata = {
  title: 'Privacy Policy | Italian Kitchen Concept (IKC)',
  description: 'Privacy Policy and data protection standards for Italian Kitchen Concept (IKC) commercial kitchen engineering in UAE & GCC.',
};

export default function PrivacyPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <section className={styles.heroSection}>
        <span className={styles.subTag}>LEGAL INFORMATION</span>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Effective Date: January 1, 2026</p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>1. Overview</h2>
            <p className={styles.text}>
              Italian Kitchen Concept (IKC), operating across the United Arab Emirates, Bahrain, Tanzania, and the wider GCC &amp; East Africa region, is committed to safeguarding your privacy and ensuring the security of your personal information.
            </p>
            <p className={styles.text}>
              This Privacy Policy details how we collect, use, store, and protect the data you provide when visiting our website or submitting project inquiries.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>2. Information We Collect</h2>
            <p className={styles.text}>We may collect personal and commercial project information including, but not limited to:</p>
            <ul className={styles.list}>
              <li>Full Name, Company Name, and Job Title</li>
              <li>Email address, phone number, and physical office/site location</li>
              <li>Commercial kitchen equipment specifications, architectural drawings, and RFP documentation submitted via inquiry forms</li>
              <li>Technical usage data (IP address, browser type, device information) via essential cookies</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>3. How We Use Your Information</h2>
            <p className={styles.text}>Your data is utilized strictly for professional business purposes:</p>
            <ul className={styles.list}>
              <li>Processing commercial kitchen design requests, quotation preparation, and engineering consultations</li>
              <li>Communicating project updates, site visit schedules, and after-sales maintenance support</li>
              <li>Fulfilling legal, regulatory, and HACCP compliance requirements across operating jurisdictions</li>
              <li>Improving website performance and technical user experience</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>4. Data Protection &amp; Confidentiality</h2>
            <p className={styles.text}>
              We implement industry-standard administrative, physical, and technical safeguards to protect your personal and architectural data against unauthorized access, loss, or misuse.
            </p>
            <p className={styles.text}>
              IKC does not sell, rent, or trade your personal data to third parties. Information is only shared with authorized partners (e.g., equipment manufacturers, shipping logistics, certified installation teams) directly involved in delivering your project.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>5. Contact &amp; Data Rights</h2>
            <p className={styles.text}>
              You have the right to request access to, correction of, or deletion of your personal information stored in our systems.
            </p>
            <p className={styles.text}>
              For privacy requests or inquiries regarding your data, please contact our legal team at <a href="mailto:info@italiankitchenconcept.com" style={{ color: 'var(--gold-primary)' }}>info@italiankitchenconcept.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
