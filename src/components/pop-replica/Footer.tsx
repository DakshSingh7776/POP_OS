import Link from 'next/link';

const System76Logo = () => (
    <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
    >
        <path d="M41.92,33.09,24.23,46.12a.5.5,0,0,1-.46,0L6.08,33.09a.5.5,0,0,1,0-.88l.3-.18a.51.51,0,0,1,.46,0l17.15,9.9,17.16-9.9a.51.51,0,0,1,.46,0l.3.18A.5.5,0,0,1,41.92,33.09Z" fill="currentColor"/>
        <path d="M41.92,24.5l.3.18a.5.5,0,0,1,0,.88L24.23,38.59a.5.5,0,0,1-.46,0L5.78,25.56a.5.5,0,0,1,0-.88l.3-.18a.51.51,0,0,1,.46,0L24,34.4,41.16,24.5a.51.51,0,0,1,.46,0Z" fill="currentColor"/>
        <path d="M24,25.8,6.84,15.9a.51.51,0,0,1-.46,0l-.3-.18a.5.5,0,0,1,0-.88L23.77,1.81a.5.5,0,0,1,.46,0L42.22,14.84a.5.5,0,0,1,0,.88l-.3.18a.51.51,0,0,1-.46,0Z" fill="currentColor"/>
    </svg>
);


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
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <System76Logo />
            </Link>
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
          <p>&copy; {new Date().getFullYear()} System76. All rights reserved.</p>
          <p>This is not the official Pop!_OS website. All trademarks are the property of their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}
