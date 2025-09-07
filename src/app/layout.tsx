import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Pop!_OS by System76',
  description: 'Pop!_OS is an operating system for STEM and creative professionals who use their computer as a tool to discover and create.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Fira+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-[#f2f2f2]">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
