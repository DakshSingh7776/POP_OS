import Link from 'next/link';
import { Github, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const PopLogo = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM8 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a4 4 0 0 1 0 8H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4a4 4 0 1 1 0 8H8a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H8Z"
        fill="currentColor"
      />
    </svg>
  );

export function Footer() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: '#', name: 'GitHub' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', name: 'YouTube' },
  ];

  const linkSections = [
    {
      title: 'Pop!_OS',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Download', href: '#' },
        { label: 'Community', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Get Help', href: '#' },
        { label: 'Contact Us', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About System76', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <PopLogo />
              <span className="text-xl font-bold font-headline">Pop! Replica</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              An open-source operating system for STEM and creative professionals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} aria-label={social.name} className="text-muted-foreground hover:text-primary transition-colors">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          {linkSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold font-headline">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pop! Replica. A project for demonstration purposes.</p>
          <p>This is not the official Pop!_OS website. All trademarks are the property of their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}
