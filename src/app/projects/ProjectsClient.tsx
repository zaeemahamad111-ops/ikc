'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  MapPin, 
  Plus, 
  ChevronRight, 
  Building2, 
  Calendar, 
  Users, 
  X, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import styles from './ProjectsClient.module.css';

interface Project {
  id: string;
  title: string;
  category: string;
  clientName: string;
  year: string;
  capacity: string;
  location: string;
  image: string;
  description: string;
  scope: string[];
}

const allProjectsList: Project[] = [
  {
    id: '01',
    title: 'BICE BAHRAIN RESTAURANT',
    category: 'Hospitality',
    clientName: 'BiCE Hospitality Group',
    year: '2024',
    capacity: '450 Covers / Day',
    location: 'Manama, Bahrain',
    image: '/ikc-images/Bice Bahrain IC.jpeg',
    description: 'Turnkey luxury Italian restaurant kitchen installation with custom stainless steel counters, thermal cooking blocks, and HACCP safety certification.',
    scope: [
      'Heavy-Duty Italian Thermal Range Suite',
      'Bespoke AISI 304 Stainless Steel Pass Counter',
      'Walk-In Dual Temperature Cold Rooms',
      'HACCP Certified Sanitation Systems',
    ],
  },
  {
    id: '02',
    title: 'STEAKHOUSE CHEF SUITE',
    category: 'Hospitality',
    clientName: 'Downtown Prime Steaks',
    year: '2024',
    capacity: '600 Covers / Day',
    location: 'Dubai Downtown, UAE',
    image: '/ikc-images/Steak House IC.jpeg',
    description: 'Heavy-duty charcoal grill suites, high-output gas burners, and 316L marine-grade stainless steel preparation counters designed for continuous intense fire service.',
    scope: [
      'Custom Lava Stone & Charcoal Grill Lines',
      'High-Output 32kW Gas Burner Modules',
      '316L Marine Stainless Preparation Counter',
      'Heavy Exhaust UV Hood Extraction',
    ],
  },
  {
    id: '03',
    title: 'TORO TORO ITALIAN KITCHEN',
    category: 'Hospitality',
    clientName: 'Grosvenor House Luxury Resort',
    year: '2025',
    capacity: '750 Covers / Day',
    location: 'Dubai Marina, UAE',
    image: '/ikc-images/Italia_kitchen_-torotoro-3.jpg.jpeg',
    description: 'Architectural open display kitchen with polished brass trims, custom island cooking suite, and UV grease extraction canopy hoods.',
    scope: [
      'Polished Brass & Stainless Open Display Suite',
      'Central Cooking Island with Gantry Pass',
      'Automated Fire Suppression Systems',
      'Silent Acoustic Canopy Extraction',
    ],
  },
  {
    id: '04',
    title: 'ALL-DAY RESORT DINING',
    category: 'Hotels',
    clientName: 'Grand Hyatt Beach Resort',
    year: '2024',
    capacity: '1,200 Meals / Day',
    location: 'Abu Dhabi, UAE',
    image: '/ikc-images/All day dining Ic.jpeg',
    description: 'Live buffet cooking counters, induction wok stations, walk-in cold storage rooms, and automated continuous conveyor dishwashers.',
    scope: [
      'Live Show-Cooking Buffet Counters',
      'Multi-Zone Induction Wok Modules',
      'Walk-In Cold Storage & Deep Freezing Complex',
      'High-Capacity Flight Type Conveyor Washers',
    ],
  },
  {
    id: '05',
    title: 'BAWE ISLAND RESORT',
    category: 'Hotels',
    clientName: 'Bawe Zanzibar Luxury Resort',
    year: '2025',
    capacity: '350 Resort Guests',
    location: 'Zanzibar, Tanzania',
    image: '/ikc-images/bawe zanzibar.jpg.jpeg',
    description: 'Complete island resort kitchen facility engineered with anti-corrosive marine steel and automated fire suppression for high humidity island climates.',
    scope: [
      'Anti-Corrosive Marine-Grade Stainless Construction',
      'Tropicalized Refrigeration Compressors',
      'Automated Fire Protection & Scrubbing',
      'Off-Grid Energy Efficient Thermal Suite',
    ],
  },
  {
    id: '06',
    title: 'LEBANESE CUISINE KITCHEN',
    category: 'Hospitality',
    clientName: 'Al Hamra Hospitality',
    year: '2024',
    capacity: '500 Covers / Day',
    location: 'Dubai, UAE',
    image: '/ikc-images/Lebanese Restaurant.jpeg',
    description: 'High-volume regional cuisine kitchen with custom wood-fired oven integration, prep stations, and sanitizing suites.',
    scope: [
      'Custom Wood & Charcoal Oven Integration',
      'Mezze Cold Prep Stainless Workstations',
      'High-Speed Sanitizing Pot Washers',
      'Automated Greasetrap Separation',
    ],
  },
  {
    id: '07',
    title: 'VOLANTE LUXURY RESIDENTIAL',
    category: 'Residential',
    clientName: 'Volante Executive Tower',
    year: '2024',
    capacity: 'Private Penthouse Suite',
    location: 'Business Bay, Dubai',
    image: '/ikc-images/volante 1 .jpeg',
    description: 'Bespoke private villa chef kitchen with custom brass accents, wine refrigeration cellar, and whisper-quiet ventilation.',
    scope: [
      'Bespoke Italian Residential Chef Line',
      'Custom Climate Wine Cellar Unit',
      'Whisper-Quiet 38dB Extraction Canopy',
      'Custom Burnished Brass Fabrication',
    ],
  },
  {
    id: '08',
    title: 'WINE BAR & TAPAS LOUNGE',
    category: 'Hospitality',
    clientName: 'Marriott Marquis Lounge',
    year: '2024',
    capacity: '300 Guests',
    location: 'Dubai, UAE',
    image: '/ikc-images/wine bar IC ncs.jpeg',
    description: 'Architectural stainless steel cocktail bar modules, under-counter refrigeration drawers, and rapid glasswashing units.',
    scope: [
      'Ergonomic Cocktail Station Modules',
      'Dual-Zone Wine & Beverage Drawers',
      'Rapid 90-Second Glass Sanitizing Suite',
      'LED Ambient Backlit Gantry Racks',
    ],
  },
  {
    id: '09',
    title: 'BOULANGERIE & ARTISAN BAKERY',
    category: 'Catering',
    clientName: 'Artisan Bakery Co.',
    year: '2023',
    capacity: '1,500 Pastries / Day',
    location: 'Abu Dhabi, UAE',
    image: '/ikc-images/Buolangerie ICK.jpeg',
    description: 'Artisan bakery production layout with deck ovens, climate-controlled proofing cabinets, and stainless steel prep sinks.',
    scope: [
      'Multi-Deck Electric Steam Ovens',
      'Humidity-Controlled Proofing Chambers',
      'Flour Dusting & Heavy Kneading Stations',
      'Granite Top Pastry Worktables',
    ],
  },
  {
    id: '10',
    title: 'COMMERCIAL CATERING FACILITY',
    category: 'Catering',
    clientName: 'Emirates Catering Group',
    year: '2024',
    capacity: '2,500 Meals / Day',
    location: 'Sharjah, UAE',
    image: '/ikc-images/Staff Kithen IC , NCS ITALY.jpeg',
    description: 'High-throughput central production kitchen capable of 2,500+ meals per day with continuous flight-type dishwashing.',
    scope: [
      'Industrial Tilting Boiling Pans & Bratt Pans',
      'Continuous Flight Dishwashing System',
      'Blast Chilling & Cart Roll-In Chambers',
      'Central Chemical Dosing & HACCP Logs',
    ],
  },
];

const categories = ['All', 'Hospitality', 'Hotels', 'Residential', 'Catering'];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const targetId = window.location.hash.replace('#project-', '').replace('#', '');
        const found = allProjectsList.find((p) => p.id === targetId || p.id === String(targetId).padStart(2, '0'));
        if (found) {
          setSelectedProject(found);
          setTimeout(() => {
            const el = document.getElementById(`project-${found.id}`);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      }
    };
    
    // Check on mount
    handleHash();

    // Check on hashchange
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

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
            The Kitchens Behind <br />
            <span className={styles.italicWord}>Great Experiences.</span>
          </h1>
          <p className={styles.heroDesc}>
            Explore our portfolio of completed turnkey commercial kitchens, luxury hotel dining suites, 
            and high-performance catering installations across the UAE, Bahrain & Tanzania.
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
              <div 
                key={project.id} 
                id={`project-${project.id}`}
                className={styles.projectCard}
                onClick={() => setSelectedProject(project)}
              >
                <div className={styles.imageBox}>
                  <img src={project.image} alt={project.title} className={styles.cardImg} />
                  <span className={styles.cardNum}>{project.id}</span>
                  <span className={styles.yearBadge}>{project.year}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.metaRow}>
                    <div className={styles.locationTag}>
                      <MapPin size={12} className={styles.pinIcon} />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <h3 className={styles.projectTitle}>{project.title}</h3>

                  <div className={styles.detailTagsRow}>
                    <span className={styles.clientBadge}>
                      <Building2 size={11} />
                      {project.clientName}
                    </span>
                    <span className={styles.capacityBadge}>
                      <Users size={11} />
                      {project.capacity}
                    </span>
                  </div>

                  <p className={styles.projectDesc}>{project.description}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.categoryBadge}>{project.category}</span>
                    <button 
                      className={styles.detailBtn} 
                      aria-label="View Technical Specifications"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <FileText size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Technical Spec Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeBtn} 
              onClick={() => setSelectedProject(null)}
              aria-label="Close Specification Sheet"
            >
              <X size={20} />
            </button>

            <div className={styles.modalGrid}>
              <div className={styles.modalImageCol}>
                <img src={selectedProject.image} alt={selectedProject.title} className={styles.modalImg} />
                <div className={styles.modalBadgeRow}>
                  <span>{selectedProject.category}</span>
                  <span>{selectedProject.year}</span>
                </div>
              </div>

              <div className={styles.modalContentCol}>
                <span className={styles.modalSubTag}>PROJECT SPECIFICATION SHEET #{selectedProject.id}</span>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>

                <div className={styles.modalMetaGroup}>
                  <div className={styles.modalMetaItem}>
                    <Building2 size={14} className={styles.modalIcon} />
                    <div>
                      <span className={styles.metaLabel}>Client</span>
                      <strong className={styles.metaVal}>{selectedProject.clientName}</strong>
                    </div>
                  </div>

                  <div className={styles.modalMetaItem}>
                    <MapPin size={14} className={styles.modalIcon} />
                    <div>
                      <span className={styles.metaLabel}>Location</span>
                      <strong className={styles.metaVal}>{selectedProject.location}</strong>
                    </div>
                  </div>

                  <div className={styles.modalMetaItem}>
                    <Users size={14} className={styles.modalIcon} />
                    <div>
                      <span className={styles.metaLabel}>Capacity / Volume</span>
                      <strong className={styles.metaVal}>{selectedProject.capacity}</strong>
                    </div>
                  </div>
                </div>

                <p className={styles.modalDesc}>{selectedProject.description}</p>

                <div className={styles.scopeBox}>
                  <h4 className={styles.scopeHeading}>Engineering Scope & Equipment Suite</h4>
                  <div className={styles.scopeList}>
                    {selectedProject.scope.map((item, idx) => (
                      <div key={idx} className={styles.scopeItem}>
                        <CheckCircle2 size={14} className={styles.checkIcon} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.modalActionGroup}>
                  <a href="/contact" className={styles.modalPrimaryBtn}>
                    <span>REQUEST SIMILAR KITCHEN QUOTE</span>
                    <ArrowRight size={14} />
                  </a>
                  <button onClick={() => setSelectedProject(null)} className={styles.modalCloseLink}>
                    Back to Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

