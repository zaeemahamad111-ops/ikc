'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsSection from '@/components/StatsSection';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Users, 
  Compass, 
  Building, 
  CheckCircle2,
  FileText,
  Wrench,
  Headphones,
  Layout,
  Truck
} from 'lucide-react';
import styles from './AboutClient.module.css';

const processSteps = [
  {
    step: '01',
    title: 'Consultation & Concept',
    desc: 'We analyze your menu, daily cover capacity, floorplan constraints, and operational goals.',
    icon: Compass,
  },
  {
    step: '02',
    title: '3D Kitchen CAD Design',
    desc: 'Our engineers draft ergonomic 2D/3D layouts, MEP hookup schematics, and HACCP flow maps.',
    icon: Layout,
  },
  {
    step: '03',
    title: 'Italian Equipment Supply',
    desc: 'We supply high-performance thermal cooking lines, walk-in cold rooms, and custom stainless steel.',
    icon: Truck,
  },
  {
    step: '04',
    title: 'On-Site Fitting & Commissioning',
    desc: 'Our certified technical team completes mechanical fitting, ANSUL fire testing, and staff training.',
    icon: Wrench,
  },
  {
    step: '05',
    title: '24/7 After-Sales Support',
    desc: 'We provide round-the-clock emergency maintenance, preventative care, and direct spare parts supply.',
    icon: Headphones,
  },
];

export default function AboutClient() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <span className={styles.subTag}>ABOUT ITALIAN KITCHEN CONCEPT</span>
          <h1 className={styles.heroTitle}>
            Turnkey Commercial Kitchens. <br />
            <span className={styles.italicWord}>Italian Craftsmanship & Complete Support.</span>
          </h1>
          <p className={styles.heroDesc}>
            From initial concept consultation and 3D CAD design to premium Italian equipment supply, 
            certified installation, and 24/7 after-sales maintenance—we deliver complete kitchen solutions built for performance.
          </p>

          <div className={styles.heroCtaRow}>
            <Link href="/contact" className={styles.primaryCtaBtn}>
              <span>REQUEST A FREE QUOTE</span>
              <ArrowRight size={14} />
            </Link>
            <Link href="/services" className={styles.secondaryCtaBtn}>
              <span>EXPLORE OUR SERVICES</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Story & Heritage Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyLeft}>
              <span className={styles.sectionLabel}>WHO WE ARE</span>
              <h2 className={styles.sectionTitle}>
                Your Complete Partner for <br />
                Commercial Culinary Spaces.
              </h2>
              <p className={styles.bodyText}>
                Italian Kitchen Concept (IKC) is a premier commercial kitchen engineering contractor operating across the UAE, Bahrain, and Tanzania. 
                We remove the hassle of working with multiple vendors by providing complete end-to-end support under one roof.
              </p>
              <p className={styles.bodyText}>
                Whether you are launching a fine dining restaurant, equipping a luxury hotel resort, or building a central production catering facility, 
                our team guarantees 100% Italian engineering standards, HACCP safety compliance, and maximum workflow efficiency.
              </p>

              <div className={styles.highlightsGrid}>
                <div className={styles.highlightCard}>
                  <ShieldCheck size={22} className={styles.goldIcon} />
                  <h3>100% Italian Engineering</h3>
                  <p>Heavy-duty, energy-efficient thermal ranges and refrigeration.</p>
                </div>
                <div className={styles.highlightCard}>
                  <Award size={22} className={styles.goldIcon} />
                  <h3>Full HACCP & Safety Compliance</h3>
                  <p>Integrated ANSUL fire protection and UV air scrubbing.</p>
                </div>
              </div>
            </div>

            <div className={styles.storyRight}>
              <div className={styles.imageCard}>
                <img src="/section-2-dark-kitchen.png" alt="IKC Commercial Kitchen Suite" className={styles.storyImg} />
                <div className={styles.badgeBox}>
                  <span className={styles.badgeNum}>40+</span>
                  <span className={styles.badgeLabel}>Turnkey Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete 5-Step Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <span className={styles.sectionLabel}>OUR END-TO-END PROCESS</span>
            <h2 className={styles.sectionTitle}>
              From Concept to Commissioning. <br />
              <span className={styles.italicWord}>How We Work With You.</span>
            </h2>
            <p className={styles.sectionDesc}>
              We manage every stage of your kitchen development to ensure zero downtime, transparent costs, and seamless execution.
            </p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.step} className={styles.stepCard}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNum}>{step.step}</span>
                    <div className={styles.stepIconBox}>
                      <StepIcon size={20} />
                    </div>
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats & Credibility */}
      <StatsSection />

      {/* Why Choose Us Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <span className={styles.sectionLabel}>WHY CHOOSE IKC</span>
            <h2 className={styles.sectionTitle}>
              Built for Intensity. <br />
              <span className={styles.italicWord}>Engineered to Last.</span>
            </h2>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <Compass size={26} className={styles.valueIcon} />
              <h3>Custom Ergonomic Layouts</h3>
              <p>Every station is tailored to chef movement patterns to maximize speed, safety, and operational flow.</p>
            </div>
            <div className={styles.valueCard}>
              <Building size={26} className={styles.valueIcon} />
              <h3>Single Point of Responsibility</h3>
              <p>From 3D CAD design to MEP hookups and equipment supply, you deal with one dedicated partner.</p>
            </div>
            <div className={styles.valueCard}>
              <Users size={26} className={styles.valueIcon} />
              <h3>24/7 Regional Maintenance</h3>
              <p>Our local technical teams in UAE, Bahrain, and Tanzania provide rapid spare parts and 24/7 care.</p>
            </div>
          </div>

          {/* Bottom Conversion Banner */}
          <div className={styles.bottomCtaBanner}>
            <div>
              <h3 className={styles.bottomCtaTitle}>Ready to Discuss Your Kitchen Project?</h3>
              <p className={styles.bottomCtaDesc}>Get in touch with our commercial kitchen engineers for a free consultation and project estimate.</p>
            </div>
            <Link href="/contact" className={styles.bottomCtaBtn}>
              <span>REQUEST A QUOTE</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

