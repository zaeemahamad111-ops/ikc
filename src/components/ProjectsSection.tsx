'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    id: '01',
    title: 'LE MERIDIEN AL AQAH',
    category: 'HOTELS',
    clientName: 'Le Méridien / Marriott',
    location: 'Fujairah, UAE',
    year: '2024',
    capacity: '1,200 Meals/Day',
    image: '/ikc-images/All day dining Ic.jpeg',
    specs: ['All-Day Dining Thermal Suite', 'Walk-In Cold Rooms', 'HACCP Ventilation'],
    highlight: '5-Star Beachfront Resort Suite',
  },
  {
    id: '02',
    title: 'VOLANTE',
    category: 'RESIDENTIAL',
    clientName: 'Volante Executive Tower',
    location: 'Business Bay, Dubai, UAE',
    year: '2024',
    capacity: '35 Floors Club & Residences',
    image: '/ikc-images/volante 1 .jpeg',
    specs: ['Private Club Cooking Line', 'Outdoor Stainless BBQ', 'Wine Refrigeration'],
    highlight: 'Luxury Tower Club & BBQ Suite',
  },

  {
    id: '04',
    title: 'ROBERTO’S',
    category: 'HOSPITALITY',
    clientName: 'Roberto’s Hospitality Group',
    location: 'DIFC, Dubai, UAE',
    year: '2024',
    capacity: '550 Covers/Day',
    image: '/ikc-images/20260121_152509000_iOS.jpg.jpeg',
    specs: ['Executive Show Kitchen', 'Custom Wine Display Cellars', 'Bar Suite'],
    highlight: 'Award-Winning Fine Dining',
  },
  {
    id: '05',
    title: 'JW MARRIOTT MARQUIS',
    category: 'HOTELS',
    clientName: 'JW Marriott Group',
    location: 'Business Bay, Dubai, UAE',
    year: '2024',
    capacity: '1,500 Covers/Day',
    image: '/pdf-images/company_page_9.jpg',
    specs: ['Heavy Modular Thermal Ranges', 'Dual-Temp Cold Rooms', 'AISI 304 Steel'],
    highlight: 'Iconic 5-Star Hotel Kitchen',
  },
  {
    id: '06',
    title: 'MEYDAN',
    category: 'HOTELS',
    clientName: 'Meydan Group',
    location: 'Nad Al Sheba, Dubai, UAE',
    year: '2024',
    capacity: '2,000 Meals/Day',
    image: '/ikc-images/Staff Kithen IC , NCS ITALY.jpeg',
    specs: ['Banquet Thermal Lines', 'VIP Lounge Plating Counters', 'Blast Chillers'],
    highlight: 'Grandstand Banquet Facility',
  },
  {
    id: '07',
    title: 'LE ROYAL MERIDIEN BEACH RESORT AND SPA',
    category: 'HOTELS',
    clientName: 'Le Méridien / Marriott',
    location: 'JBR Dubai, UAE',
    year: '2024',
    capacity: '1,000 Meals/Day',
    image: '/ikc-images/All day dining Ic.jpeg',
    specs: ['Specialty Charcoal Grills', 'Show-Cooking Buffet', 'Induction Woks'],
    highlight: 'Luxury Beachfront Resort',
  },
  {
    id: '08',
    title: 'TORO TORO',
    category: 'HOSPITALITY',
    clientName: 'Grosvenor House Luxury Resort',
    location: 'Dubai Marina, UAE',
    year: '2025',
    capacity: '750 Covers/Day',
    image: '/ikc-images/Italia_kitchen_-torotoro-3.jpg.jpeg',
    specs: ['Open Display Show Kitchen', 'Latin Charcoal Grill', 'Brass & Steel Finish'],
    highlight: 'Architectural Open Kitchen',
  },
  {
    id: '09',
    title: 'BICE BAHRAIN',
    category: 'HOSPITALITY',
    clientName: 'BiCE Hospitality Group',
    location: 'Moda Mall, Manama, Bahrain',
    year: '2024',
    capacity: '450 Covers/Day',
    image: '/ikc-images/Bice Bahrain IC.jpeg',
    specs: ['Italian Thermal Suite', 'Custom Stainless Counter', 'HACCP Certified'],
    highlight: 'Luxury Fine Dining Suite',
  },
  {
    id: '10',
    title: 'ST REGIS MAURITIUS RESORT',
    category: 'HOTELS',
    clientName: 'Marriott International',
    location: 'Le Morne, Mauritius',
    year: '2024',
    capacity: '700 Guests/Day',
    image: '/ikc-images/All day dining IKC, NCS.jpeg',
    specs: ['316 Marine Grade Steel', 'Tropicalized Cold Storage', 'UV Extraction'],
    highlight: 'Tropical Oceanfront Resort',
  },
  {
    id: '11',
    title: 'PIZZA EXPRESS DPC',
    category: 'HOSPITALITY',
    clientName: 'PizzaExpress International',
    location: 'Dubai Design District, UAE',
    year: '2025',
    capacity: '500 Covers/Day',
    image: '/ikc-images/pizza-express.png',
    specs: ['Wood-Fired Thermal Oven Counter', 'Refrigerated Dough Station', 'Glasswasher'],
    highlight: 'Artisan Thermal Pizza Kitchen',
  },
  {
    id: '12',
    title: 'AL BARARI VILLA',
    category: 'RESIDENTIAL',
    clientName: 'Private Estate',
    location: 'Al Barari, Dubai, UAE',
    year: '2024',
    capacity: 'Private Estate Suite',
    image: '/ikc-images/al-barari.jpg',
    specs: ['Bespoke Italian Chef Line', 'Outdoor Stainless BBQ', 'Pantry Storage'],
    highlight: 'Bespoke Private Villa Kitchen',
  },
  {
    id: '13',
    title: 'WINE CHILLER DISTRICT ONE',
    category: 'RESIDENTIAL',
    clientName: 'District One Villa',
    location: 'MBR City, Dubai, UAE',
    year: '2025',
    capacity: 'Bespoke Cellar Suite',
    image: '/ikc-images/district-one-wine.jpg',
    specs: ['Walk-in Climate Cellar', 'Insulated Glass Enclosure', 'Stainless Racking'],
    highlight: 'Custom Precision Wine Chiller',
  },
  {
    id: '13',
    title: 'HARD ROCK CAFE MALDIVES (FOOD TRUCK)',
    category: 'HOSPITALITY',
    clientName: 'Hard Rock International',
    location: 'Emboodhoo Lagoon, Maldives',
    image: '/ikc-images/hard-rock.jpg',
    specs: ['Bespoke Mobile Food Truck Fabrication', 'Compact Cooking Suite', 'Tropicalized Refrigeration'],
    highlight: 'Custom Mobile Food Truck Kitchen',
  },
  {
    id: '15',
    title: 'BAWE RESORT',
    category: 'HOTELS',
    clientName: 'Bawe Zanzibar Luxury Resort',
    location: 'Zanzibar, Tanzania',
    year: '2025',
    capacity: '350 Resort Guests',
    image: '/ikc-images/bawe zanzibar.jpg.jpeg',
    specs: ['Marine Anti-Corrosion', 'Off-Grid Cold Storage', 'Solar Thermal Line'],
    highlight: 'Luxury Island Resort Complex',
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
