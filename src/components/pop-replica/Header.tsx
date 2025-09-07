"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const PopLogo = () => (
    <svg
      width="24"
      height="24"
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

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const navLinks = [
    { href: "#", label: "Pop!_OS" },
    { href: "#", label: "System76" },
    { href: "#", label: "Support" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <PopLogo />
            <span className="font-bold font-headline">Pop! Replica</span>
          </Link>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
             <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                 <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <PopLogo />
                    <span className="font-bold font-headline">Pop! Replica</span>
                  </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-center">
          <Link href="/" className="flex items-center gap-2 md:hidden">
            <PopLogo />
            <span className="font-bold font-headline">Pop! Replica</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end">
            <Button variant="outline">Get Support</Button>
        </div>
      </div>
    </header>
  );
}
