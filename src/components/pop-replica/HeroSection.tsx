import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1200"
          alt="Pop!_OS Desktop"
          data-ai-hint="desktop interface"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter text-foreground mb-4">
            For a fast, open source OS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Pop!_OS is an operating system for STEM and creative professionals who use their computer as a tool to discover and create.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg py-7 px-8">
              <Download className="mr-2 h-5 w-5" />
              Download Pop!_OS
            </Button>
            <Button size="lg" variant="secondary" className="text-lg py-7 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
