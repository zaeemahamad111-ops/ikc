'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  MapPin, 
  Building2, 
  X, 
  CheckCircle2,
  FileText,
  Search,
  Download,
  Camera
} from 'lucide-react';
import styles from './ProjectsClient.module.css';

interface Project {
  id: string;
  title: string;
  category: string;
  clientName: string;
  location: string;
  image: string;
  gallery: string[];
  description: string;
  scope: string[];
}

const allProjectsList: Project[] = [
  {
    id: '01',
    title: 'LE MERIDIEN AL AQAH',
    category: 'Hotels',
    clientName: 'Le Méridien / Marriott',
    location: 'Fujairah, UAE',
    image: '/ikc-images/All day dining Ic.jpeg',
    gallery: [
      '/ikc-images/All day dining Ic.jpeg',
      '/ikc-images/All day dining IKC, NCS.jpeg',
      '/ikc-images/main kitchen.jpeg'
    ],
    description: 'Complete commercial kitchen installation for Le Méridien Al Aqah Beach Resort, including all-day dining thermal suites, high-capacity cold rooms, and custom stainless steel prep stations.',
    scope: [
      'Heavy-Duty Modular Italian Thermal Ranges',
      'Dual-Temperature Walk-In Cold Storage Suites',
      'AISI 304 Hygienic Prep & Buffet Counters',
      'HACCP Ventilation & Fire Suppression Canopies',
    ],
  },
  {
    id: '02',
    title: 'VOLANTE',
    category: 'Residential',
    clientName: 'Volante Executive Tower',
    location: 'Business Bay, Dubai, UAE',
    image: '/ikc-images/volante 1 .jpeg',
    gallery: [
      '/ikc-images/volante 1 .jpeg',
      '/ikc-images/wine bar IC ncs.jpeg',
      '/pdf-images/company_page_11.jpg'
    ],
    description: 'Kitchen equipment and turnkey installation for the 35-floor residential tower private Club kitchen, bar area, and outdoor stainless steel BBQ station.',
    scope: [
      'Private Club Commercial Cooking Line',
      'Custom Outdoor Heavy-Duty Stainless Steel BBQ Suite',
      'Dual-Zone Beverage & Wine Refrigeration',
      'Whisper-Quiet Acoustic Hood Extraction',
    ],
  },
  {
    id: '03',
    title: 'ROBERTO’S',
    category: 'Hospitality',
    clientName: 'Roberto’s Hospitality Group',
    location: 'DIFC, Dubai, UAE',
    image: '/ikc-images/20260121_152509000_iOS.jpg.jpeg',
    gallery: [
      '/ikc-images/20260121_152509000_iOS.jpg.jpeg',
      '/ikc-images/wine bar IC ncs.jpeg',
      '/ikc-images/20260121_152512000_iOS.jpg.jpeg'
    ],
    description: 'Award-winning Italian fine dining culinary suite featuring an open executive show kitchen, custom cooking suite, wine display cellars, and cocktail modules.',
    scope: [
      'Bespoke Italian Thermal Suite & Pasta Boilers',
      'Custom Dual-Zone Wine Display Cellars',
      'Polished Stainless Steel Cocktail Stations',
      'HACCP Sanitation & Rapid Glasswasher Lines',
    ],
  },
  {
    id: '04',
    title: 'JW MARRIOTT MARQUIS',
    category: 'Hotels',
    clientName: 'JW Marriott Group',
    location: 'Business Bay, Dubai, UAE',
    image: '/pdf-images/company_page_9.jpg',
    gallery: [
      '/pdf-images/company_page_9.jpg',
      '/ikc-images/Staff Kithen IC , NCS ITALY.jpeg',
      '/ikc-images/main kitchen.jpeg'
    ],
    description: 'Turnkey culinary execution for signature dining venues at the iconic JW Marriott Marquis Dubai, featuring high-output thermal suites and banquet kitchens.',
    scope: [
      'Heavy-Duty Italian Modular Thermal Ranges',
      'Dual-Temperature Cold Rooms & Deep Freezers',
      'Bespoke AISI 304 Hygienic Pass Counters',
      'HACCP Air Filtration & Fire Suppression',
    ],
  },
  {
    id: '05',
    title: 'MEYDAN',
    category: 'Hotels',
    clientName: 'Meydan Group',
    location: 'Nad Al Sheba, Dubai, UAE',
    image: '/ikc-images/Staff Kithen IC , NCS ITALY.jpeg',
    gallery: [
      '/ikc-images/Staff Kithen IC , NCS ITALY.jpeg',
      '/ikc-images/main kitchen.jpeg',
      '/ikc-images/All day dining Ic.jpeg'
    ],
    description: 'High-volume banquet kitchen infrastructure, trackside catering suites, and VIP lounge food service facilities for the Meydan Grandstand & Hotel.',
    scope: [
      'Heavy Banquet Thermal Lines & Tilting Pans',
      'VIP Lounge Prep & Plating Countertops',
      'High-Volume Roll-In Blast Chillers',
      'Custom Exhaust Hood Scrubbing Systems',
    ],
  },
  {
    id: '06',
    title: 'LE ROYAL MERIDIEN BEACH RESORT AND SPA',
    category: 'Hotels',
    clientName: 'Le Méridien / Marriott',
    location: 'JBR Dubai, UAE',
    image: '/ikc-images/All day dining Ic.jpeg',
    gallery: [
      '/ikc-images/All day dining Ic.jpeg',
      '/ikc-images/Steak House IC.jpeg',
      '/ikc-images/main kitchen.jpeg'
    ],
    description: 'Turnkey resort kitchen facilities, live beachfront cooking suites, specialty charcoal grills, and main all-day dining production kitchen.',
    scope: [
      'Specialty Charcoal & Lava Stone Grills',
      'Live Show-Cooking Buffet Counters',
      'Multi-Zone Induction Wok Modules',
      'Walk-In Cold Storage & Deep Freezers',
    ],
  },
  {
    id: '07',
    title: 'TORO TORO',
    category: 'Hospitality',
    clientName: 'Grosvenor House Luxury Resort',
    location: 'Dubai Marina, UAE',
    image: '/ikc-images/Italia_kitchen_-torotoro-3.jpg.jpeg',
    gallery: [
      '/ikc-images/Italia_kitchen_-torotoro-3.jpg.jpeg',
      '/pdf-images/company_page_13.jpg',
      '/ikc-images/Steak House IC.jpeg'
    ],
    description: 'Pan-Latin signature restaurant with open display cooking kitchen, custom brass and stainless steel finishes, high-output charcoal grill line, and UV grease hoods.',
    scope: [
      'Open Display Show Kitchen Suite',
      'Heavy-Duty Latin Charcoal Grill Station',
      'Polished Stainless Steel & Brass Finish',
      'UV Grease Destruction Extraction Canopy',
    ],
  },
  {
    id: '08',
    title: 'BICE BAHRAIN',
    category: 'Hospitality',
    clientName: 'BiCE Hospitality Group',
    location: 'Moda Mall, Manama, Bahrain',
    image: '/ikc-images/Bice Bahrain IC.jpeg',
    gallery: [
      '/ikc-images/Bice Bahrain IC.jpeg',
      '/ikc-images/Bice Bahrain Italian concept.jpeg',
      '/ikc-images/wine bar IC ncs.jpeg'
    ],
    description: 'Turnkey Italian fine dining kitchen installation located in Moda Mall, featuring heavy-duty Italian thermal cooking blocks, pasta preparation lines, and bar counters.',
    scope: [
      'Italian Heavy-Duty Thermal Cooking Block',
      'Bespoke Stainless Steel Prep Countertops',
      'Dual-Temperature Cold Rooms',
      'HACCP Certified Air Filtration System',
    ],
  },
  {
    id: '09',
    title: 'ST REGIS MAURITIUS RESORT',
    category: 'Hotels',
    clientName: 'Marriott International',
    location: 'Le Morne, Mauritius',
    image: '/ikc-images/All day dining IKC, NCS.jpeg',
    gallery: [
      '/ikc-images/All day dining IKC, NCS.jpeg',
      '/ikc-images/All day dining Ic.jpeg',
      '/ikc-images/main kitchen.jpeg'
    ],
    description: 'Turnkey luxury oceanfront resort kitchen facility constructed with anti-corrosive marine-grade steel to withstand humid island coastal environments.',
    scope: [
      'Coastal Marine 316 Grade Stainless Steel',
      'Tropicalized Dual-Compressor Cold Rooms',
      'UV Canopy Exhaust Ventilation',
      'Automated Warewashing & Pot Washer Line',
    ],
  },
  {
    id: '10',
    title: 'PIZZA EXPRESS DPC',
    category: 'Hospitality',
    clientName: 'PizzaExpress International',
    location: 'Dubai Design District / DPC, Dubai, UAE',
    image: '/ikc-images/pizza-express.png',
    gallery: [
      '/ikc-images/pizza-express.png',
      '/ikc-images/Pizza oven.jpeg',
      '/ikc-images/20260121_152509000_iOS.jpg.jpeg'
    ],
    description: 'Contemporary Italian pizza concept featuring custom heavy-duty wood-fired thermal oven counter, refrigerated dough prep workstations, and high-speed sanitation.',
    scope: [
      'Custom Wood-Fired Thermal Pizza Station',
      'Granite-Top Refrigerated Dough Prep Counters',
      'High-Volume Under-Counter Refrigeration',
      'Rapid Pass-Through Glasswasher Suite',
    ],
  },
  {
    id: '11',
    title: 'AL BARARI VILLA',
    category: 'Residential',
    clientName: 'Private Estate',
    location: 'Al Barari, Dubai, UAE',
    image: '/ikc-images/al-barari.jpg',
    gallery: [
      '/ikc-images/al-barari.jpg',
      '/pdf-images/company_page_11.jpg',
      '/ikc-images/wine bar IC ncs.jpeg'
    ],
    description: 'Ultra-luxury private villa chef kitchen with bespoke Italian thermal range, custom outdoor stainless steel barbecue suite, and temperature-controlled pantry.',
    scope: [
      'Bespoke Italian Residential Chef Line',
      'Custom Outdoor Heavy-Duty Stainless BBQ',
      'Integrated Stainless Pantry & Cold Storage',
      'Silent Acoustic Canopy Extraction',
    ],
  },
  {
    id: '12',
    title: 'WINE CHILLER DISTRICT ONE',
    category: 'Residential',
    clientName: 'District One Private Villa',
    location: 'District 1, MBR City, Dubai, UAE',
    image: '/ikc-images/district-one-wine.jpg',
    gallery: [
      '/ikc-images/district-one-wine.jpg',
      '/ikc-images/wine bar IC ncs.jpeg',
      '/pdf-images/company_page_11.jpg'
    ],
    description: 'Custom engineered walk-in precision climate wine chiller and glass display cellar for an exclusive private villa estate in District One.',
    scope: [
      'Precision Multi-Zone Temperature Control',
      'Thermal Insulated UV-Filtered Glass Enclosure',
      'Bespoke Stainless & Teak Wine Racking',
      'Humidification & Digital Climate Monitoring',
    ],
  },
  {
    id: '13',
    title: 'HARD ROCK CAFE MALDIVES (FOOD TRUCK)',
    category: 'Hospitality',
    clientName: 'Hard Rock International',
    location: 'Emboodhoo Lagoon, Maldives',
    image: '/ikc-images/hard-rock.jpg',
    gallery: [
      '/ikc-images/hard-rock.jpg',
      '/ikc-images/Steak House IC.jpeg',
      '/ikc-images/main kitchen.jpeg'
    ],
    description: 'Custom engineered stainless steel food truck mobile kitchen solution, equipped with compact heavy-duty thermal cooking appliances, stainless prep workstations, and tropicalized refrigeration for Hard Rock Cafe Maldives.',
    scope: [
      'Bespoke Stainless Steel Mobile Food Truck Kitchen Fabrication',
      'Compact Heavy-Duty Thermal Cooking Line & Grills',
      'Tropicalized Under-Counter Refrigerated Prep Drawers',
      'Custom Compact Canopy Hood Ventilation System',
    ],
  },
  {
    id: '14',
    title: 'BAWE RESORT',
    category: 'Hotels',
    clientName: 'Bawe Zanzibar Luxury Resort',
    location: 'Bawe Island, Zanzibar, Tanzania',
    image: '/ikc-images/bawe zanzibar.jpg.jpeg',
    gallery: [
      '/ikc-images/bawe zanzibar.jpg.jpeg',
      '/ikc-images/All day dining Ic.jpeg',
      '/ikc-images/main kitchen.jpeg'
    ],
    description: 'Complete island resort kitchen facility engineered with anti-corrosive marine steel and automated fire suppression for off-grid tropical island conditions.',
    scope: [
      'Anti-Corrosive Marine-Grade 316 Stainless',
      'Tropicalized Off-Grid Cold Storage Rooms',
      'Automated Fire Suppression & Scrubbing',
      'Energy Efficient Solar-Compatible Thermal Suite',
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

const categories = ['All', 'Hotels', 'Hospitality', 'Residential'];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const targetId = window.location.hash.replace('#project-', '').replace('#', '');
        const found = allProjectsList.find((p) => p.id === targetId || p.id === String(targetId).padStart(2, '0'));
        if (found) {
          setSelectedProject(found);
          setActiveModalImage(found.gallery ? found.gallery[0] : found.image);
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

  const openProjectModal = (proj: Project) => {
    setSelectedProject(proj);
    setActiveModalImage(proj.gallery && proj.gallery.length > 0 ? proj.gallery[0] : proj.image);
  };

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
            and high-performance catering installations across the UAE, GCC & East Africa. Click any project to view kitchen photos and engineering specs.
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
                onClick={() => openProjectModal(project)}
              >
                <div className={styles.imageBox}>
                  <img src={project.image} alt={project.title} className={styles.cardImg} />
                  <span className={styles.cardNum}>{project.id}</span>
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
                  </div>

                  <p className={styles.projectDesc}>{project.description}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.categoryBadge}>{project.category}</span>
                    <button 
                      className={styles.detailBtn} 
                      aria-label="View Kitchen Photos & Specifications"
                      onClick={(e) => {
                        e.stopPropagation();
                        openProjectModal(project);
                      }}
                    >
                      <Camera size={13} />
                      <span style={{ fontSize: '0.65rem', marginLeft: '4px' }}>PHOTOS & SPECS</span>
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

      {/* Interactive Technical Spec & Kitchen Photo Modal */}
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
                <img 
                  src={activeModalImage || selectedProject.image} 
                  alt={selectedProject.title} 
                  className={styles.modalImg} 
                />
                
                <div className={styles.modalBadgeRow}>
                  <span>{selectedProject.category}</span>
                </div>

                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                  <div className={styles.galleryThumbnailsRow}>
                    {selectedProject.gallery.map((imgUrl, gIdx) => (
                      <button
                        key={gIdx}
                        className={`${styles.galleryThumb} ${(activeModalImage || selectedProject.image) === imgUrl ? styles.activeThumb : ''}`}
                        onClick={() => setActiveModalImage(imgUrl)}
                        aria-label={`View photo ${gIdx + 1}`}
                      >
                        <img src={imgUrl} alt={`Kitchen view ${gIdx + 1}`} className={styles.galleryThumbImg} />
                      </button>
                    ))}
                  </div>
                )}
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
