import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full bg-[#1e2a4a] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop"
          alt="Starry space background"
          data-ai-hint="starry space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold font-headline mb-4">
                Welcome to Pop!_OS
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto md:mx-0">
                Unleash your potential on Pop!_OS: an operating system for STEM and creative professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                <Button size="lg" className="bg-[#46d1c8] hover:bg-[#3bc4bb] text-[#0b3c48] font-bold text-sm py-3 px-8 rounded-none uppercase tracking-wider">
                  Download
                </Button>
                <Button size="lg" variant="secondary" className="bg-[#fdb813] hover:bg-[#e9a802] text-[#634310] font-bold text-sm py-3 px-8 rounded-none uppercase tracking-wider">
                  Donate to Pop
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96 flex items-center justify-center">
              {/* Images removed as per user request */}
            </div>
          </div>
        </div>
        <div className="w-full h-32 md:h-48">
          <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full text-[#c95a43]">
            <path d="M0,20 L100,20 L100,10 C 80,15, 60,0, 40,5 C 20,10, 10,20, 0,20 z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
