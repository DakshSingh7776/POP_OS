import Link from 'next/link';

export function Footer() {

  const linkSections = [
    {
      title: 'Products',
      links: [
        { label: 'Laptops', href: '#' },
        { label: 'Desktops', href: '#' },
        { label: 'Servers', href: '#' },
        { label: 'All Products', href: '#' },
      ],
    },
    {
      title: 'Pop!_OS',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Download', href: '#' },
        { label: 'Support', href: '#' },
        { label: 'Community', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
        title: 'Social',
        links: [
          { label: 'Twitter', href: '#' },
          { label: 'YouTube', href: '#' },
          { label: 'Instagram', href: '#' },
          { label: 'Facebook', href: '#' },
          { label: 'LinkedIn', href: '#' },
          { label: 'GitHub', href: '#' },
        ],
      },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12 px-4 md:px-6 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {linkSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold font-headline uppercase tracking-wider">{section.title}</h4>
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
          <p>&copy; {new Date().getFullYear()} System76. All rights reserved.</p>
          <p>This is not the official System76 website. All trademarks are the property of their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}
