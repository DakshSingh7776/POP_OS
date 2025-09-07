import { Header } from '@/components/pop-replica/Header';
import { HeroSection } from '@/components/pop-replica/HeroSection';
import { FeatureShowcase } from '@/components/pop-replica/FeatureShowcase';
import { CustomizationSection } from '@/components/pop-replica/CustomizationSection';
import { ThemeGenerator } from '@/components/pop-replica/ThemeGenerator';
import { DownloadSection } from '@/components/pop-replica/DownloadSection';
import { Footer } from '@/components/pop-replica/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeatureShowcase />
        <CustomizationSection />
        <ThemeGenerator />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
