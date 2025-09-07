import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AppWindow, BatteryCharging, LayoutGrid, Layers, Lock, ShoppingBag } from 'lucide-react';

const features = [
  {
    icon: <LayoutGrid className="w-8 h-8 text-primary" />,
    title: 'Auto-tiling with Pop!_Shell',
    description: 'Pop!_Shell auto-tiles windows to help you multi-task, no manual arrangement necessary. It’s the programmer’s massage for your fingers.',
  },
  {
    icon: <AppWindow className="w-8 h-8 text-primary" />,
    title: 'Workspaces',
    description: 'Keep relevant work together and clutter out of sight. Workspaces organize your windows, apps, and browser tabs by what you’re currently working on.',
  },
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: 'Stacking',
    description: 'Stack application windows on top of one another, like tabs in a web browser. It’s perfect for juggling multiple full-screen remote desktops.',
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-primary" />,
    title: 'App Center (Pop!_Shop)',
    description: 'The Pop!_Shop is your one-stop-shop for a universe of apps, tools, and games, including curated selections from the Pop!_OS team.',
  },
  {
    icon: <Lock className="w-8 h-8 text-primary" />,
    title: 'Encryption Out of the Box',
    description: 'Pop!_OS encrypts your installation by default, protecting your data and privacy. Security should be simple, and we’ve made it so.',
  },
  {
    icon: <BatteryCharging className="w-8 h-8 text-primary" />,
    title: 'Advanced Power Management',
    description: 'Get the most out of your laptop’s battery with advanced power management features and integrated graphics switching.',
  },
];

export function FeatureShowcase() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Your OS, Your Rules.</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Pop!_OS is designed to have a minimal amount of clutter on your desktop so you can focus on what you’re doing. Here’s what makes it special.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-start p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0 mb-4">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                    {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
