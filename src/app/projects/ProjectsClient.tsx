'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, MapPin, Plus, ChevronRight } from 'lucide-react';
import styles from './ProjectsClient.module.css';

const allProjectsList = [
  {
    id: '01',
    title: 'BICE BAHRAIN RESTAURANT',
    category: 'Hospitality',
    location: 'Manama, Bahrain',
    image: '/ikc-images/Bice Bahrain IC.jpeg',
    description: 'Turnkey luxury Italian restaurant kitchen installation with custom stainless steel counters and HACCP safety certification.',
  },
  {
    id: '02',
    title: 'STEAKHOUSE CHEF SUITE',
    category: 'Hospitality',
    location: 'Dubai Downtown, UAE',
    image: '/ikc-images/Steak House IC.jpeg',
    description: 'Heavy-duty charcoal grill suites, high-output gas burners, and 316L marine-grade stainless steel preparation counters.',
  },
  {
    id: '03',
    title: 'TORO TORO ITALIAN KITCHEN',
    category: 'Hospitality',
    location: 'Dubai Marina, UAE',
    image: '/ikc-images/Italia_kitchen_-torotoro-3.jpg.jpeg',
    description: 'Architectural open display kitchen with polished brass trims, custom cooking island, and UV grease extraction canopy hoods.',
  },
  {
    id: '04',
    title: 'ALL-DAY RESORT DINING',
    category: 'Hotels',
    location: 'Abu Dhabi, UAE',
    image: '/ikc-images/All day dining Ic.jpeg',
    description: 'Live buffet cooking counters, induction wok stations, walk-in cold storage rooms, and automated conveyor dishwashers.',
  },
  {
    id: '05',
    title: 'BAWE ISLAND RESORT',
    category: 'Hotels',
    location: 'Zanzibar, Tanzania',
    image: '/ikc-images/bawe zanzibar.jpg.jpeg',
    description: 'Complete island resort kitchen facility engineered with anti-corrosive marine steel and ANSUL automated fire suppression.',
  },
  {
    id: '06',
    title: 'LEBANESE CUISINE KITCHEN',
    category: 'Hospitality',
    location: 'Dubai, UAE',
    image: '/ikc-images/Lebanese Restaurant.jpeg',
    description: 'High-volume regional cuisine kitchen with custom wood-fired oven integration, prep stations, and sanitizing suites.',
  },
  {
    id: '07',
    title: 'VOLANTE LUXURY RESIDENTIAL',
    category: 'Residential',
    location: 'Business Bay, Dubai',
    image: '/ikc-images/volante 1 .jpeg',
    description: 'Bespoke private villa chef kitchen with custom brass accents, wine refrigeration cellar, and whisper-quiet ventilation.',
  },
  {
    id: '08',
    title: 'WINE BAR & TAPAS LOUNGE',
    category: 'Hospitality',
    location: 'Dubai, UAE',
    image: '/ikc-images/wine bar IC ncs.jpeg',
    description: 'Architectural stainless steel cocktail bar modules, under-counter refrigeration drawers, and rapid glasswashing units.',
  },
  {
    id: '09',
    title: 'BOULANGERIE & ARTISAN BAKERY',
    category: 'Catering',
    location: 'Abu Dhabi, UAE',
    image: '/ikc-images/Buolangerie ICK.jpeg',
    description: 'Artisan bakery production layout with deck ovens, climate-controlled proofing cabinets, and stainless steel prep sinks.',
  },
  {
    id: '10',
    title: 'COMMERCIAL CATERING FACILITY',
    category: 'Catering',
    location: 'Sharjah, UAE',
    image: '/ikc-images/Staff Kithen IC , NCS ITALY.jpeg',
    description: 'High-throughput central production kitchen capable of 2,000+ meals per day with continuous flight-type dishwashing.',
  },
];

const categories = ['All', 'Hospitality', 'Hotels', 'Residential', 'Catering'];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? allProjectsList
    : allProjectsList.filter(p => p.category === activeCategory);

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <span className={styles.subTag}>PORTFOLIO SHOWCASE</span>
          <h1 className={styles.heroTitle}>
            Spaces We’ve <br />
            <span className={styles.italicWord}>Engineered & Delivered.</span>
          </h1>
          <p className={styles.heroDesc}>
            Explore our portfolio of completed turnkey commercial kitchens, luxury hotel dining suites, 
            and high-performance catering installations across the UAE & GCC.
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          {/* Category Filter Pills */}
          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.imageBox}>
                  <img src={project.image} alt={project.title} className={styles.cardImg} />
                  <span className={styles.cardNum}>{project.id}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.locationTag}>
                    <MapPin size={12} className={styles.pinIcon} />
                    <span>{project.location}</span>
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.categoryBadge}>{project.category}</span>
                    <button className={styles.detailBtn} aria-label="View Project Details">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
