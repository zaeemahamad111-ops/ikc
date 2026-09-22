'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  MapPin, 
  Building2, 
  Users, 
  X, 
  CheckCircle2,
  FileText,
  Search,
  Download
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
    title: 'JW MARRIOTT MARQUIS DUBAI',
    category: 'Hotels',
    clientName: 'JW Marriott Group',
    year: '2024',
    capacity: '1,500 Covers / Day',
    location: 'Business Bay, Dubai, UAE',
    image: '/pdf-images/company_page_9.jpg',
    description: 'Turnkey culinary execution for signature dining venues at the award-winning JW Marriott Marquis Dubai, featuring refined high-output Italian thermal suites, cold rooms, and stainless steel pass counters.',
    scope: [
      'Heavy-Duty Modular Italian Thermal Ranges',
      'Dual-Temperature Walk-In Cold Storage Complex',
      'Bespoke AISI 304 Hygienic Pass Counters',
      'HACCP Certified Air Filtration & UV Hood Canopies',
    ],
  },
  {
    id: '02',
    title: 'AMITY UNIVERSITY CAMPUS',
    category: 'Institutional',
    clientName: 'Amity Education Group',
    year: '2024',
    capacity: '3,000+ Meals / Day',
    location: 'Academic City, Dubai, UAE',
    image: '/pdf-images/company_page_10.jpg',
    description: 'High-capacity central production kitchen and dining hall installation engineered for Amity University’s global benchmarked campus serving thousands of students and faculty daily.',
    scope: [
      'High-Volume Steam Boiling Pans & Tilting Bratt Pans',
      'Continuous Flight-Type Conveyor Dishwashing Line',
      'Walk-In Deep Freezing & Cold Storage Suites',
      'Central Chemical Dosing & Hygiene Stations',
    ],
  },
  {
    id: '03',
    title: 'VOLANTE LUXURY PENTHOUSE CHEF SUITE',
    category: 'Residential',
    clientName: 'Volante Executive Tower',
    year: '2024',
    capacity: 'Private Luxury Suite',
    location: 'Business Bay, Dubai, UAE',
    image: '/pdf-images/company_page_11.jpg',
    description: 'Bespoke private luxury penthouse chef kitchen featuring custom burnished brass trims, dual-zone climate wine cellar, central island cooking block, and whisper-quiet ventilation.',
    scope: [
      'Bespoke Italian Residential Chef Line',
      'Custom Climate-Controlled Wine Cellar Unit',
      'Whisper-Quiet Acoustic Canopy Extraction',
      'Custom Burnished Brass & Stainless Fabrication',
    ],
  },
  {
    id: '04',
    title: 'POLICLINICO GEMELLI HOSPITAL',
    category: 'Institutional',
    clientName: 'Gemelli University Hospital',
    year: '2023',
    capacity: '4,000 Patients / Day',
    location: 'Rome, Italy',
    image: '/pdf-images/company_page_12.jpg',
    description: 'Industrial healthcare dietary kitchen and automated sanitizing suite engineered for high-volume dietary compliance, sterile tray assembly, and precise thermal retention.',
    scope: [
      'Automated Meal Tray Assembly & Conveyor Line',
      'Thermal Disinfection Rinse & Sanitization Units',
      'Stainless Steel Hygienic Radius Jointing Workstations',
      'HACCP Continuous Temperature Tracking System',
    ],
  },
  {
    id: '05',
    title: 'TORO TORO & BUDDHA BAR - GROSVENOR HOUSE',
    category: 'Hospitality',
    clientName: 'Grosvenor House Luxury Resort',
    year: '2025',
    capacity: '850 Covers / Day',
    location: 'Dubai Marina, UAE',
    image: '/pdf-images/company_page_13.jpg',
    description: 'Architectural open display kitchen with polished brass trims, central island cooking block with gantry pass, and high-efficiency UV grease destruction hoods.',
    scope: [
      'Polished Brass & Stainless Open Display Suite',
      'Central Cooking Island with Gantry Pass',
      'Automated Fire Suppression Systems',
      'Silent Acoustic Canopy Extraction',
    ],
  },
  {
    id: '06',
    title: 'BICE RESTAURANT & SAPORI DI BICE',
    category: 'Hospitality',
    clientName: 'BiCE Hospitality Group',
    year: '2024',
    capacity: '500 Covers / Day',
    location: 'Manama, Bahrain & City Walk, Dubai',
    image: '/ikc-images/Bice Bahrain IC.jpeg',
    description: 'Turnkey luxury Italian restaurant kitchen installation with custom stainless steel counters, thermal cooking blocks, pasta boilers, and HACCP safety certification.',
    scope: [
      'Heavy-Duty Italian Thermal Range Suite',
      'Bespoke AISI 304 Stainless Steel Pass Counter',
      'Walk-In Dual Temperature Cold Rooms',
      'HACCP Certified Sanitation Systems',
    ],
  },
  {
    id: '07',
    title: 'EMIRATES AIRLINE FIRST CLASS LOUNGE & HQ',
    category: 'Institutional',
    clientName: 'Emirates Group',
    year: '2024',
    capacity: '5,000+ Meals / Day',
    location: 'Terminal 3 & Airport Road, Dubai, UAE',
    image: '/ikc-images/Staff Kithen IC , NCS ITALY.jpeg',
    description: 'High-throughput culinary prep facilities, Emirates Flight Training catering kitchen, and Emirates First Class Lounge food service suites engineered for intense continuous service.',
    scope: [
      'High-Output Induction & Boiling Kettle Suites',
      'Industrial Rapid Blast Chilling Chambers',
      'Automated Flight Type Conveyor Washers',
      'Stainless Steel Mobile Cart Roll-In Gantries',
    ],
  },
  {
    id: '08',
    title: 'ARMANI CAFÉ & ATELIER DES ARTISTES',
    category: 'Hospitality',
    clientName: 'Armani Group & Ginza',
    year: '2024',
    capacity: '400 Covers / Day',
    location: 'Dubai Mall & Mall of the Emirates, UAE',
    image: '/ikc-images/20260121_152509000_iOS.jpg.jpeg',
    description: 'Bespoke open display culinary workstations, espresso bar gantries, and pastry prep lines engineered to Armani luxury brand specifications.',
    scope: [
      'Polished Mirror Stainless Steel Prep Counters',
      'Precision Under-Counter Beverage Refrigeration',
      'High-Speed Sanitizing Glasswashing Stations',
      'Custom Architectural Brass Over-Counter Gantries',
    ],
  },
  {
    id: '09',
    title: 'BAWE ISLAND LUXURY RESORT',
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
    id: '10',
    title: 'LE ROYAL MÉRIDIEN & MAYA MEXICAN RESTAURANT',
    category: 'Hotels',
    clientName: 'Le Méridien Hotel & Resorts',
    year: '2024',
    capacity: '1,000 Meals / Day',
    location: 'Jumeirah Beach, Dubai, UAE',
    image: '/ikc-images/All day dining Ic.jpeg',
    description: 'High-capacity hotel resort cooking suites, specialty charcoal grill stations, and open show-kitchen installations for fine dining resort venues.',
    scope: [
      'Specialty Charcoal & Lava Stone Grill Stations',
      'Live Show-Cooking Buffet Counters',
      'Multi-Zone Induction Wok Modules',
      'Walk-In Cold Storage & Deep Freezing Complex',
    ],
  },
  {
    id: '11',
    title: 'ST. REGIS RESORT & WESTIN LUXURY SUITES',
    category: 'Hotels',
    clientName: 'Marriott International',
    year: '2024',
    capacity: '700 Guests / Day',
    location: 'Le Morne, Mauritius',
    image: '/ikc-images/All day dining Ic.jpeg',
    description: 'Tropicalized luxury resort kitchen facilities featuring coastal anti-corrosion stainless steel, high-capacity prep counters, and central dishwashing suites.',
    scope: [
      'Coastal Marine Grade 316 Stainless Steel Suites',
      'Tropicalized Dual-Chiller Cold Storage',
      'UV Canopy Exhaust Ventilation',
      'Automated Pot & Dishwashing Lines',
    ],
  },
  {
    id: '12',
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
    id: '13',
    title: 'ROBERTO’S & MERCATO DIFC',
    category: 'Hospitality',
    clientName: 'Roberto’s Hospitality',
    year: '2024',
    capacity: '550 Covers / Day',
    location: 'The Galleria Abu Dhabi & DIFC Dubai, UAE',
    image: '/ikc-images/wine bar IC ncs.jpeg',
    description: 'Fine dining Italian culinary suites, wine display cellars, cocktail bar modules, and custom prep workstations for award-winning venues.',
    scope: [
      'Ergonomic Cocktail & Wine Station Modules',
      'Dual-Zone Wine & Beverage Drawers',
      'Rapid 90-Second Glass Sanitizing Suite',
      'LED Ambient Backlit Gantry Racks',
    ],
  },
  {
    id: '14',
    title: 'BOULANGERIE & ARTISAN BAKERY',
    category: 'Catering',
    clientName: 'Artisan Bakery Co.',
    year: '2023',
    capacity: '1,500 Pastries / Day',
    location: 'Abu Dhabi, UAE',
    image: '/ikc-images/Buolangerie ICK.jpeg',
    description: 'Artisan bakery production layout with deck ovens, climate-controlled proofing cabinets, and granite-top pastry prep tables.',
    scope: [
      'Multi-Deck Electric Steam Ovens',
      'Humidity-Controlled Proofing Chambers',
      'Flour Dusting & Heavy Kneading Stations',
      'Granite Top Pastry Worktables',
    ],
  },
  {
    id: '15',
    title: 'COMMERCIAL CATERING & CENTRAL PRODUCTION FACILITY',
    category: 'Catering',
    clientName: 'Emirates Catering Group',
    year: '2024',
    capacity: '2,500 Meals / Day',
    location: 'Sharjah, UAE',
    image: '/ikc-images/Staff Kithen IC , NCS ITALY.jpeg',
    description: 'High-throughput central production kitchen capable of 2,500+ meals per day with continuous flight-type dishwashing and blast chilling.',
    scope: [
      'Industrial Tilting Boiling Pans & Bratt Pans',
      'Continuous Flight Dishwashing System',
      'Blast Chilling & Cart Roll-In Chambers',
      'Central Chemical Dosing & HACCP Logs',
    ],
  },
];

const referenceClientsFromPDF = [
  'JW Marriott Marquis - Dubai, UAE',
  'Grosvenor House I & II - Dubai, UAE',
  'Buddha Bar - Grosvenor House, Dubai, UAE',
  'Toro Toro - Grosvenor House, Dubai, UAE',
  'Armani Cafè - Dubai Mall & MOE, UAE',
  'Emirates Flight Training & HQ - Dubai, UAE',
  'Emirates First Class Lounge T3 - Dubai, UAE',
  'Amity University - Dubai Academic City, UAE',
  'Volante - Business Bay, Dubai, UAE',
  'BiCE Restaurant & Sapori Di Bice - Bahrain & Dubai',
  'Le Méridien Hotel & Conference Centre - Dubai, UAE',
  'Meydan Hotel - Dubai, UAE',
  'Mövenpick - Palm Jumeirah, Dubai, UAE',
  'St. Regis Resort - Mauritius',
  'Dusit Thani - Sheikh Zayed Road, Dubai, UAE',
  'Crowne Plaza - Manama, Bahrain',
  'The Diplomat Radisson Blu Hotel - Bahrain',
  'Regency Intercontinental - Manama, Bahrain',
  'Gulf Hotel - Manama, Bahrain',
  'Arjaan Hotel by Rotana - Manama, Bahrain',
  'Baker and Spice - Souk Al Bahar, Dubai, UAE',
  'Roberto’s - DIFC Dubai & Galleria Abu Dhabi',
  'Grand Hyatt Beach Resort - Abu Dhabi, UAE',
  'Bawe Island Resort - Zanzibar, Tanzania',
  'Policlinico Gemelli Hospital - Rome, Italy',
  'Al Maha Desert Resort & Spa - Dubai, UAE',
  'Jamie’s Italian - Dubai, UAE',
  'Maya Mexican Restaurant - Le Royal Méridien, Dubai',
];

const categories = ['All', 'Hotels', 'Hospitality', 'Residential', 'Catering', 'Institutional'];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
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
    
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const filteredProjects = allProjectsList.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <span className={styles.subTag}>OFFICIAL PORTFOLIO & REFERENCE LIST</span>
          <h1 className={styles.heroTitle}>
            The Kitchens Behind <br />
            <span className={styles.italicWord}>Great Experiences.</span>
          </h1>
          <p className={styles.heroDesc}>
            Explore our portfolio of completed turnkey commercial kitchens, luxury hotel dining suites, 
            institutional dining halls, and high-performance catering installations across the UAE, GCC & East Africa.
          </p>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="/Company-profile_V2_NERO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className={styles.pdfDownloadHeaderBtn}
            >
              <Download size={15} />
              <span>DOWNLOAD COMPANY PROFILE PDF (12.4 MB)</span>
            </a>
            <a
              href="/Villa-IC_V2_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className={styles.pdfDownloadHeaderBtnOutline}
            >
              <Download size={15} />
              <span>PRIVATE VILLA SOLUTIONS PDF (4.8 MB)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          {/* Category Filter Pills & Search Bar */}
          <div className={styles.filterBar}>
            <div className={styles.pillsRow}>
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

            <div className={styles.searchBox}>
              <Search size={14} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search project, hotel, client, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
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
                      <span style={{ fontSize: '0.65rem', marginLeft: '4px' }}>SPECS</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Verified Reference List from PDF */}
          <div className={styles.referencesContainer}>
            <span className={styles.subTag}>COMPLETE CLIENT REFERENCE LIST</span>
            <h2 className={styles.referencesTitle}>Delivered Projects & Hotel References</h2>
            <p className={styles.referencesDesc}>
              With over 30 years of combined engineering excellence, Italian Concept (IC) has delivered major culinary projects for world-renowned brands.
            </p>

            <div className={styles.referencesGrid}>
              {referenceClientsFromPDF.map((client, idx) => (
                <div key={idx} className={styles.referenceItem}>
                  <CheckCircle2 size={14} className={styles.refCheckIcon} />
                  <span>{client}</span>
                </div>
              ))}
            </div>
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
