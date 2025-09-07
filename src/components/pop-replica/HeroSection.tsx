import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full h-[60dvh] md:h-[80dvh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Abstract background"
          data-ai-hint="futuristic tech"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter text-foreground mb-4">
          For a fast, open source OS
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl mb-8">
          Pop!_OS is an operating system for STEM and creative professionals who use their computer as a tool to discover and create.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Download Pop!_OS
          </Button>
          <Button size="lg" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
