import { Card, CardContent } from '@/components/ui/card';
import { AppWindow, Cpu, Bot, Settings, Search, Code } from 'lucide-react';

const features = [
  {
    icon: <AppWindow className="w-10 h-10 text-primary" />,
    title: 'Workspaces',
    description: 'Keep relevant work grouped together and clutter out of sight. Workspaces organize your windows on your screen to help you focus and stay productive.',
  },
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: 'Auto-tiling',
    description: 'Pop!_Shell auto-tiles windows to help you multi-task without manual window arrangement. New windows will automatically tile on your screen for you.',
  },
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: 'AI Native',
    description: 'The COSMIC desktop will feature configurable AI capabilities, such as asking questions related to the content on your screen or generating commands in the terminal.',
  },
  {
    icon: <Settings className="w-10 h-10 text-primary" />,
    title: 'Customization',
    description: 'The app library, workspace, and panel will have a wide range of custom options in Settings, from colors to sizes to what information is displayed.',
  },
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: 'Universal Search',
    description: 'Perform calculations, search for files, or run commands from anywhere in the OS. No need to disrupt your workflow to open a new window.',
  },
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: 'Development',
    description: 'Pop!_OS is designed for software developers, makers, and computer science professionals who use their computer as a tool to discover and create.',
  },
];

export function FeatureShowcase() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Your OS. Your Workflow. Your own.</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Pop!_OS is designed to have a minimal amount of clutter on your desktop so you can focus on what you’re doing. Here’s what makes it special.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8 border-none shadow-none bg-transparent">
              <div className="mb-4">
                  {feature.icon}
              </div>
              <CardContent className="p-0 space-y-2">
                <h3 className="font-headline text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
