"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const PopLogo = () => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
    >
        <path d="M12,2A10,10,0,0,0,5.12,4.36a.5.5,0,0,1-.62.75,10,10,0,1,1,15,0,.5.5,0,0,1-.62-.75A10,10,0,0,0,12,2Z" fill="currentColor" />
        <path d="M12,5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,1,0V5.5A.5.5,0,0,0,12,5Z" fill="currentColor"/>
        <path d="M12,18a4,4,0,1,0,4,4A4,4,0,0,0,12,18Zm0,7a3,3,0,1,1,3-3A3,3,0,0,1,12,25Z" fill="currentColor"/>
    </svg>
  );

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const navLinks = [
    { href: "#", label: "Features" },
    { href: "#", label: "Community" },
    { href: "#", label: "Support" },
    { href: "https://system76.com/", label: "System76" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="mr-auto flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <PopLogo />
            <span className="font-bold font-headline text-2xl">Pop!_OS</span>
          </Link>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
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
                    <span className="font-bold font-headline text-xl">Pop!_OS</span>
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
              <div className="p-4 mt-auto">
                 <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="hidden lg:flex flex-1 items-center justify-end space-x-6">
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
    </header>
  );
}
