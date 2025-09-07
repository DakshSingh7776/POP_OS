import { Header } from '@/components/pop-replica/Header';
import { HeroSection } from '@/components/pop-replica/HeroSection';
import { EvolvingSection } from '@/components/pop-replica/EvolvingSection';
import { Footer } from '@/components/pop-replica/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <EvolvingSection />
      </main>
      <Footer />
    </div>
  );
}
