import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function CustomizationSection() {
  const requirements = [
    '4 GB RAM',
    '20 GB of storage',
    '64-bit processor',
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl text-center lg:text-left">
              Your computer should work the way you do.
            </h2>
            <div className="flex justify-center lg:justify-start">
              <Image
                src="https://picsum.photos/600/400"
                width={600}
                height={400}
                alt="Pop!_OS desktop showing customization"
                data-ai-hint="desktop interface"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto lg:mx-0">
            Pop!_OS is designed for a fast, efficient, and organized workflow. It’s a blast to use for any purpose, but we’ve also built helpful features for developers, makers, and computer scientists. This includes:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
                <li>Auto-tiling</li>
                <li>Workspaces</li>
                <li>Keyboard navigation</li>
                <li>Package management</li>
            </ul>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">System Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
