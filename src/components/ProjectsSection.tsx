'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Plus, ArrowRight, Sparkles, MapPin, Calendar, Users, Building2 } from 'lucide-react';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    id: '01',
    title: 'BICE BAHRAIN RESTAURANT',
    category: 'HOSPITALITY',
    clientName: 'BiCE Hospitality Group',
    location: 'Manama, Bahrain',
    year: '2024',
    capacity: '450 Covers/Day',
    image: '/ikc-images/Bice Bahrain IC.jpeg',
    specs: ['Turnkey Italian Suite', 'Custom Stainless Counter', 'HACCP Certified'],
    highlight: 'Luxury Fine Dining Suite',
  },
  {
    id: '02',
    title: 'STEAKHOUSE CHEF SUITE',
    category: 'HOSPITALITY',
    clientName: 'Downtown Prime Steaks',
    location: 'Dubai Downtown, UAE',
    year: '2024',
    capacity: '600 Covers/Day',
    image: '/ikc-images/Steak House IC.jpeg',
    specs: ['Charcoal Grill Stations', 'High-Output Burners', '316L Marine Steel'],
    highlight: 'Heavy Duty Thermal Range',
  },
  {
    id: '03',
    title: 'TORO TORO KITCHEN',
    category: 'HOSPITALITY',
    clientName: 'Grosvenor House Luxury Resort',
    location: 'Dubai Marina, UAE',
    year: '2025',
    capacity: '750 Covers/Day',
    image: '/ikc-images/Italia_kitchen_-torotoro-3.jpg.jpeg',
    specs: ['Open Display Kitchen', 'Brass & Steel Finish', 'UV Canopy Hoods'],
    highlight: 'Architectural Open Kitchen',
  },
  {
    id: '04',
    title: 'ALL-DAY RESORT DINING',
    category: 'HOTELS',
    clientName: 'Grand Hyatt Beach Resort',
    location: 'Abu Dhabi, UAE',
    year: '2024',
    capacity: '1,200 Meals/Day',
    image: '/ikc-images/All day dining Ic.jpeg',
    specs: ['Live Buffet Counters', 'Induction Wok Stations', 'Cold Room Pass'],
    highlight: 'Hotel Resort Buffet Suite',
  },
  {
    id: '05',
    title: 'BAWE ISLAND RESORT',
    category: 'HOTELS',
    clientName: 'Bawe Zanzibar Luxury Villas',
    location: 'Zanzibar, Tanzania',
    year: '2025',
    capacity: '350 Resort Guests',
    image: '/ikc-images/bawe zanzibar.jpg.jpeg',
    specs: ['Island Resort Suite', 'Marine Anti-Corrosion', 'ANSUL Fire System'],
    highlight: 'Luxury Island Resort Complex',
  },
  {
    id: '06',
    title: 'LEBANESE CUISINE SUITE',
    category: 'HOSPITALITY',
    clientName: 'Al Hamra Hospitality',
    location: 'Dubai, UAE',
    year: '2024',
    capacity: '500 Covers/Day',
    image: '/ikc-images/Lebanese Restaurant.jpeg',
    specs: ['Specialty Wood Oven', 'Preparation Stations', 'Sanitation Suites'],
    highlight: 'High Volume Specialty Kitchen',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        {/* Section Top Header */}
        <div className={styles.topHeader}>
          <div>
            <span className={styles.subTitle}>
              <Sparkles size={12} className={styles.titleSparkle} />
              FEATURED PORTFOLIO
            </span>
            <h2 className={styles.title}>
              Spaces We’ve <span className={styles.italicWord}>Engineered.</span>
            </h2>
          </div>

          <Link href="/projects" className={styles.viewAllProjectsLink}>
            <div className={styles.plusCircle}>
              <Plus size={14} />
            </div>
            <span>EXPLORE ALL PROJECTS</span>
          </Link>
        </div>

        {/* 6 Cards Grid (3 Columns x 2 Rows) */}
        <div className={styles.allProjectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              {/* Card Image Container with Hover Reveal */}
              <div className={styles.cardImageWrapper}>
                <img src={project.image} alt={project.title} className={styles.cardImage} />
                <span className={styles.cardBadge}>{project.id}</span>
                <span className={styles.categoryTag}>{project.category}</span>

                {/* Rich Hover Glassmorphism Overlay */}
                <div className={styles.hoverOverlay}>
                  <span className={styles.hoverHighlight}>{project.highlight}</span>
                  <div className={styles.specsList}>
                    {project.specs.map((spec, i) => (
                      <span key={i} className={styles.specPill}>{spec}</span>
                    ))}
                  </div>

                  {/* Deep link directly to the target project on /projects page */}
                  <Link href={`/projects#project-${project.id}`} className={styles.exploreLink}>
                    <span>VIEW FULL SPECS</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Enriched Card Content Footer */}
              <div className={styles.cardContent}>
                <div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.metaRow}>
                    <span className={styles.projectLocation}>
                      <MapPin size={11} className={styles.inlineIcon} />
                      {project.location}
                    </span>
                    <span className={styles.projectYear}>
                      <Calendar size={11} className={styles.inlineIcon} />
                      {project.year}
                    </span>
                  </div>
                  <div className={styles.clientCapacityRow}>
                    <span className={styles.clientTag}>
                      <Building2 size={11} className={styles.inlineIcon} />
                      {project.clientName}
                    </span>
                  </div>
                </div>

                <Link 
                  href={`/projects#project-${project.id}`} 
                  className={styles.actionBtn} 
                  aria-label={`View ${project.title} Details`}
                >
                  <Plus size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

