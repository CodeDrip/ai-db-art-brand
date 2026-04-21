import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { DiagonalShapesMarquee } from '@/components/DiagonalShapesMarquee';
import { ProgramsSection } from '@/sections/ProgramsSection';
import { CommunitySection } from '@/sections/CommunitySection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/sections/Footer';

export default function App() {
  return (
    <div className="bg-charcoal min-h-screen">
      <Navigation />

      <main>
        <HeroSection />
        <DiagonalShapesMarquee />
        <AboutSection />
        <DiagonalShapesMarquee />
        <ProgramsSection />
        <DiagonalShapesMarquee />
        <CommunitySection />
        <DiagonalShapesMarquee />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
