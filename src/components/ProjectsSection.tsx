'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollPosition = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.offsetWidth * 0.85;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex !== activeMobileIndex && newIndex >= 0 && newIndex < projects.length) {
      setActiveMobileIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.offsetWidth * 0.85;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveMobileIndex(index);
  };

  return (
    <section id="projects" className={styles.section}>
      {/* Background Image Layer (Desktop) */}
      <div className={styles.backgroundLayer}>
        {projects.map((project) => (
          <img
            key={`bg-${project.id}`}
            src={project.image}
            alt={project.title}
            className={`${styles.bgImage} ${hoveredProject === project.id ? styles.activeBg : ''}`}
          />
        ))}
        <div className={styles.bgOverlay}></div>
      </div>

      <div className={styles.container}>
        
        {/* Top Header Row */}
        <div className={styles.topHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.titleRow}>
              <h2 className={styles.title}>
                SPACES THAT <br/>
                <span className={styles.titleGoldItalic}>PERFORM.</span>
              </h2>
              <div className={styles.titleLine}></div>
            </div>
          </div>
          
          <div className={styles.headerCenter}>
            <p className={styles.headerDesc}>
              From restaurants to resorts, we design and deliver world-class commercial kitchen spaces for the UAE's most ambitious hospitality brands.
            </p>
          </div>
        </div>

        {/* DESKTOP: Hover-Reveal Architectural List */}
        <div className={styles.desktopListContainer}>
          <div className={styles.projectListWrapper}>
            {projects.map((project) => (
              <Link
                href={`/projects#project-${project.id}`}
                key={project.id}
                className={`${styles.listItem} ${hoveredProject === project.id ? styles.itemHovered : ''} ${hoveredProject && hoveredProject !== project.id ? styles.itemFaded : ''}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={styles.itemLeft}>
                  <span className={styles.itemNum}>{project.id}</span>
                  <h3 className={styles.itemTitle}>{project.title}</h3>
                </div>
                
                <div className={styles.itemRight}>
                  <div className={styles.metaInfo}>
                    <span className={styles.metaItem}><MapPin size={12} className={styles.metaIcon} /> {project.location}</span>
                    <span className={styles.metaItem}><Building2 size={12} className={styles.metaIcon} /> {project.clientName}</span>
                  </div>
                  <div className={styles.arrowCircle}>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* MOBILE: Touch Swipeable Snap Gallery */}
        <div className={styles.mobileGalleryContainer}>
          <div 
            className={styles.mobileCarousel} 
            ref={carouselRef}
            onScroll={handleScroll}
          >
            {projects.map((project, idx) => (
              <div key={`mobile-${project.id}`} className={styles.mobileCard}>
                <div className={styles.mobileCardMedia}>
                  <img src={project.image} alt={project.title} className={styles.mobileCardImg} />
                  <div className={styles.mobileCardBadge}>
                    <span>{project.id}</span> / <span>06</span>
                  </div>
                  <div className={styles.mobileCardGradient}></div>
                </div>

                <div className={styles.mobileCardContent}>
                  <div className={styles.mobileMetaRow}>
                    <span className={styles.mobileCategory}>{project.category}</span>
                    <span className={styles.mobileLocation}>
                      <MapPin size={10} /> {project.location}
                    </span>
                  </div>

                  <h3 className={styles.mobileCardTitle}>{project.title}</h3>
                  <p className={styles.mobileClientName}>{project.clientName}</p>

                  <div className={styles.mobileCardFooter}>
                    <Link href={`/projects#project-${project.id}`} className={styles.mobileCardBtn}>
                      <span>VIEW SPECS</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Indicators & Arrows */}
          <div className={styles.mobileControls}>
            <div className={styles.mobileDots}>
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${activeMobileIndex === idx ? styles.activeDot : ''}`}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            <div className={styles.mobileArrows}>
              <button 
                className={styles.arrowBtn}
                onClick={() => scrollToIndex(Math.max(0, activeMobileIndex - 1))}
                disabled={activeMobileIndex === 0}
                aria-label="Previous Project"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                className={styles.arrowBtn}
                onClick={() => scrollToIndex(Math.min(projects.length - 1, activeMobileIndex + 1))}
                disabled={activeMobileIndex === projects.length - 1}
                aria-label="Next Project"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className={styles.sectionFooter}>
          <div className={styles.footerLeft}>
            <div className={styles.footerBars}>
              <span></span><span></span><span></span><span></span>
            </div>
            <span className={styles.footerText}>
              GLOBAL KITCHENS<br/>LOCAL IMPACT
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
