import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function CustomizationSection() {
  const requirements = [
    '2 GB RAM minimum / 4 GB RAM recommended',
    '20 GB storage minimum / 40 GB storage recommended',
    '64-bit x86 or ARM (RAS PI 4) architecture',
    'Bootable storage device',
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              Personalize
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              Make It Your Own
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              From the desktop background to the system theme, Pop!_OS gives you the power to customize your experience. Choose from a light or dark theme, select your accent color, and arrange your desktop to fit your workflow.
            </p>
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
          <div className="flex items-center justify-center">
            <Image
              src="https://picsum.photos/600/600"
              width={600}
              height={600}
              alt="Pop!_OS Customization"
              data-ai-hint="desktop interface"
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
