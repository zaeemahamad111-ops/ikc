import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './TermsClient.module.css';

export const metadata = {
  title: 'Terms & Conditions | Italian Kitchen Concept (IKC)',
  description: 'Terms and Conditions governing the engineering services, equipment supply, and website usage for Italian Kitchen Concept (IKC).',
};

export default function TermsPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <section className={styles.heroSection}>
        <span className={styles.subTag}>LEGAL AGREEMENT</span>
        <h1 className={styles.title}>Terms &amp; Conditions</h1>
        <p className={styles.lastUpdated}>Effective Date: January 1, 2026</p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>1. Acceptance of Terms</h2>
            <p className={styles.text}>
              By accessing the Italian Kitchen Concept (IKC) website or engaging our commercial kitchen design, equipment supply, and installation services, you agree to be bound by these Terms and Conditions.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>2. Commercial Proposals &amp; Engineering Services</h2>
            <p className={styles.text}>
              All architectural layouts, equipment specifications, 3D renders, and commercial proposals provided by IKC remain the intellectual property of Italian Kitchen Concept until formal contract execution and payment completion.
            </p>
            <ul className={styles.list}>
              <li>Quotations remain valid for 30 days from issuance unless specified otherwise.</li>
              <li>Equipment installation schedules are subject to site readiness, civil works completion, and MEP approval.</li>
              <li>Custom stainless steel fabrications are manufactured according to approved shop drawings.</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>3. Warranty &amp; After-Sales Maintenance</h2>
            <p className={styles.text}>
              All thermal equipment, refrigeration units, and custom fabrications supplied by IKC carry manufacturer warranties supplemented by IKC regional technical support in the UAE, GCC, and East Africa.
            </p>
            <p className={styles.text}>
              Warranty coverage is subject to proper operational use, adherence to HACCP guidelines, and scheduled preventive maintenance by certified technicians.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>4. Limitation of Liability</h2>
            <p className={styles.text}>
              IKC shall not be liable for indirect, incidental, or consequential damages arising from site delays caused by third-party civil/MEP contractors, unauthorized equipment modifications, or force majeure events.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>5. Governing Law</h2>
            <p className={styles.text}>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates and applicable GCC regulations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
