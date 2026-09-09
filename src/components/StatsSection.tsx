'use client';

import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Building2, ShieldCheck, Award } from 'lucide-react';
import styles from './StatsSection.module.css';

const stats = [
  {
    value: '40+',
    label: 'Projects Completed Across UAE & GCC',
  },
  {
    value: '100%',
    label: 'Italian Design & Thermal Engineering',
  },
  {
    value: 'Turnkey',
    label: 'End-to-End Kitchen Solutions',
  },
  {
    value: '24/7',
    label: 'Reliable Regional After-Sales Support',
  },
];

const clientLogos = [
  { name: 'BiCE Ristorante', location: 'Hilton JBR / Manama' },
  { name: 'Toro Toro', location: 'Grosvenor House Dubai' },
  { name: 'Bawe Island Resort', location: 'Zanzibar, Tanzania' },
  { name: 'Jumeirah Golf Estates', location: 'Dubai, UAE' },
  { name: 'Marriott Marquis', location: 'Dar es Salaam' },
  { name: 'Grand Hyatt', location: 'Abu Dhabi, UAE' },
  { name: 'Volante Tower', location: 'Business Bay Dubai' },
];

const testimonials = [
  {
    quote: "Italian Kitchen Concept delivered our high-volume cooking line and refrigeration with surgical precision. Their custom stainless fabrication handles 500+ covers daily without missing a beat.",
    author: "Executive Chef Marco V.",
    role: "Culinary Director",
    venue: "BiCE Ristorante Dubai & Bahrain",
    rating: 5,
    location: "UAE & Bahrain",
  },
  {
    quote: "The heavy-duty island suite and UV extraction hood installed at Bawe Resort are true masterpieces of thermal engineering. Outstanding reliability in high-humidity island environments.",
    author: "Chef Antoine B.",
    role: "Head Chef",
    venue: "Bawe Tropical Island Resort",
    rating: 5,
    location: "Zanzibar, Tanzania",
  },
  {
    quote: "From 3D CAD blueprint layout to final HACCP commissioning, IKC provided flawless execution for our open display kitchen. Truly top-tier Italian craftsmanship.",
    author: "Tariq Al-Mansoor",
    role: "Operations Manager",
    venue: "Luxury Fine Dining Group",
    rating: 5,
    location: "Manama, Bahrain",
  },
];

export default function StatsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeTestimonial];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Top 4 Key Performance Stats */}
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos Marquee / Grid */}
        <div className={styles.logosWrapper}>
          <span className={styles.logosTagline}>TRUSTED BY PREMIERE HOSPITALITY BRANDS</span>
          <div className={styles.logosRow}>
            {clientLogos.map((client, i) => (
              <div key={i} className={styles.logoPill}>
                <Building2 size={13} className={styles.buildingIcon} />
                <span className={styles.clientName}>{client.name}</span>
                <span className={styles.clientLoc}>{client.location}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Chef Testimonial Carousel */}
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIconBg}>
              <Quote size={40} className={styles.quoteSvg} />
            </div>

            <div className={styles.ratingStars}>
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={14} fill="#C5A059" color="#C5A059" />
              ))}
              <span className={styles.verifiedBadge}>
                <ShieldCheck size={12} />
                Verified Commercial Client
              </span>
            </div>

            <p className={styles.quoteText}>“{current.quote}”</p>

            <div className={styles.authorFooter}>
              <div>
                <h4 className={styles.authorName}>{current.author}</h4>
                <p className={styles.authorRole}>{current.role} — <span className={styles.goldVenue}>{current.venue}</span> ({current.location})</p>
              </div>

              <div className={styles.navControls}>
                <button onClick={prevTestimonial} className={styles.navBtn} aria-label="Previous Testimonial">
                  <ChevronLeft size={16} />
                </button>
                <span className={styles.counterText}>{activeTestimonial + 1} / {testimonials.length}</span>
                <button onClick={nextTestimonial} className={styles.navBtn} aria-label="Next Testimonial">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

