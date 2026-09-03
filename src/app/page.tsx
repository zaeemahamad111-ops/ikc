import Navbar from '@/components/Navbar';
import HeroCanvasScroll from '@/components/HeroCanvasScroll';
import PhilosophySection from '@/components/PhilosophySection';
import SolutionsSection from '@/components/SolutionsSection';
import ProjectsSection from '@/components/ProjectsSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ position: 'relative', width: '100%' }}>
      <Navbar />
      <HeroCanvasScroll />
      <PhilosophySection />
      <SolutionsSection />
      <ProjectsSection />
      <StatsSection />
      <Footer />
    </main>
  );
}
