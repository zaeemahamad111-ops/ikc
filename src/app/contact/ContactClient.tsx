'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import styles from './ContactClient.module.css';

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <span className={styles.subTag}>GET IN TOUCH</span>
          <h1 className={styles.heroTitle}>
            Start Your <br />
            <span className={styles.italicWord}>Kitchen Project.</span>
          </h1>
          <p className={styles.heroDesc}>
            Connect with our Italian engineering team in Dubai to discuss commercial kitchen layout CAD designs, 
            equipment specifications, or scheduled site visits.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Info Cards */}
            <div className={styles.infoCol}>
              <span className={styles.sectionLabel}>CONTACT DETAILS</span>
              <h2 className={styles.sectionTitle}>Dubai Headquarters</h2>
              <p className={styles.infoText}>
                Our team of kitchen planners and technical engineers are available for consultations 
                and site measurements across the UAE and GCC.
              </p>

              <div className={styles.contactCards}>
                <div className={styles.cardItem}>
                  <Phone size={20} className={styles.goldIcon} />
                  <div>
                    <h4>Phone & WhatsApp</h4>
                    <p>+971 4 123 4567</p>
                  </div>
                </div>

                <div className={styles.cardItem}>
                  <Mail size={20} className={styles.goldIcon} />
                  <div>
                    <h4>Email Inquiry</h4>
                    <p>info@italiankitchenconcept.com</p>
                  </div>
                </div>

                <div className={styles.cardItem}>
                  <MapPin size={20} className={styles.goldIcon} />
                  <div>
                    <h4>Office Address</h4>
                    <p>Italian Concept General Trading LLC, Dubai, United Arab Emirates</p>
                  </div>
                </div>

                <div className={styles.cardItem}>
                  <Clock size={20} className={styles.goldIcon} />
                  <div>
                    <h4>Working Hours</h4>
                    <p>Monday - Saturday: 8:30 AM - 6:30 PM (GST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Inquiry Form */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Send Us a Message</h3>

                {submitted ? (
                  <div className={styles.successBox}>
                    <CheckCircle2 size={48} className={styles.successIcon} />
                    <h3>Thank You!</h3>
                    <p>Your inquiry has been received. One of our Senior Kitchen Engineers will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.fieldRow}>
                      <div className={styles.field}>
                        <label>FULL NAME *</label>
                        <input type="text" placeholder="John Doe" required />
                      </div>
                      <div className={styles.field}>
                        <label>COMPANY NAME *</label>
                        <input type="text" placeholder="Hotel / Restaurant Group" required />
                      </div>
                    </div>

                    <div className={styles.fieldRow}>
                      <div className={styles.field}>
                        <label>EMAIL ADDRESS *</label>
                        <input type="email" placeholder="john@example.com" required />
                      </div>
                      <div className={styles.field}>
                        <label>PHONE NUMBER *</label>
                        <input type="tel" placeholder="+971 50 000 0000" required />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label>PROJECT CATEGORY *</label>
                      <select required>
                        <option value="">Select Project Type</option>
                        <option value="restaurant">Restaurant / Fine Dining</option>
                        <option value="hotel">Hotel / Resort Kitchen</option>
                        <option value="catering">Central Catering Facility</option>
                        <option value="residential">Private Luxury Villa</option>
                        <option value="maintenance">Spare Parts & Maintenance</option>
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label>PROJECT DETAILS & REQUIREMENTS *</label>
                      <textarea rows={4} placeholder="Describe your kitchen space, floorplan dimensions, or timeline..." required></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      <span>SUBMIT INQUIRY</span>
                      <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
