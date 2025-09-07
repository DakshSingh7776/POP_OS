"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const System76Logo = () => (
    <div className="flex flex-col items-center">
        <svg 
            width="200" 
            height="45" 
            viewBox="0 0 200 45" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-800"
        >
            <path d="M78.6 19.3c0-3-1.3-5.3-3.8-6.9-2.5-1.6-5.8-2.5-9.8-2.5h-10v25h11c4.5 0 8-1 10.5-3s3.8-5.3 3.8-9.6v-3zm-6.2 3.2c0 2.2-1 3.8-2.8 4.8s-4.3 1.5-7.2 1.5h-4.2V16.7h5c2.7 0 5 .4 6.7 1.3 1.8.8 2.7 2.3 2.7 4.3v1.2zM96.7 28.5c2.3 0 4.3-.6 6-1.8v-1.2c0-3-1.6-5.2-4.8-6.7-3.2-1.5-7-2.2-11.4-2.2-2.7 0-5.3.3-7.6.8V10h-6v25h5v-6.7c1 .3 2.2.6 3.7.7 1.5.2 3 .3 4.5.3 3.3 0 6.2-.5 8.7-1.5 2.5-1 4.2-2.7 4.2-5v-1.3c-1.8 1.5-4 2.2-6.5 2.2zm-22-10c0-1.2 0-2.3-.2-3.3.7-.1 1.4-.2 2.2-.2 2.7 0 5.2.3 7.5.8 2.3.5 4.2 1.3 5.7 2.3 1.5 1 2.3 2.5 2.3 4.3 0 2.2-.8 3.8-2.5 5-1.7 1.2-4 1.8-7 1.8-2.5 0-4.8-.3-7-1v-10zM102.5 35h6V10h-6v25zM128.5 22.4c2.5-1.7 3.8-4 3.8-7 0-3-1.2-5.3-3.7-6.9-2.5-1.6-5.8-2.5-9.8-2.5h-10v25h6v-9.5h3.2l5.8 9.5h6.8l-6.4-10.2c2-.8 3.5-2 4.5-3.4zM113 16.7h5c2.7 0 5 .4 6.7 1.3s2.5 2.3 2.5 4.3-1 3.2-2.7 4-4 1.3-6.7 1.3h-4.8V16.7zM151 30.5c-3.3 3-7.5 4.5-12.5 4.5s-9.2-1.5-12.5-4.5-5-7-5-11.8 1.7-8.8 5-11.8 7.5-4.5 12.5-4.5 9.2 1.5 12.5 4.5 5 7 5 11.8-1.7 8.8-5 11.8zm-20-11.8c0 3.3 1 6 3 8s4.5 3 7.5 3 5.5-1 7.5-3 3-4.7 3-8-1-6-3-8-4.5-3-7.5-3-5.5 1-7.5 3-3 4.7-3 8zM172.5 31.7c4.7 0 8.3-1.5 11-4.5L181 30c-2.3 2.3-5.3 3.5-9 3.5-5.2 0-8.8-2.3-10.8-7L155 26.3c3.7 3.3 8.3 5 14 5h1.5V10h-6v10.3c-2.3-.7-4.8-1-7.5-1-5.3 0-9.5 2-12.5 6s-4.5 9.2-4.5 15.5c0 6 1.7 10.5 5 13.5s7.7 4.5 13.2 4.5c4.7 0 8.8-1.3 12.3-4L173 40c-3 2.3-6.5 3.5-10.5 3.5-8.5 0-14.3-3.8-17.3-11.3S142 18.3 142 12c0-5.5 2-9.7 6-12.7s9.2-4.5 15.5-4.5c5.7 0 10.3 1.5 14 4.5L175 2c-3.3-2-7.3-3-12-3s-8.7 1-12 3-5.8 5-7.5 8.8-2.5 8.5-2.5 14S143 36 146.3 40c3.2 4 7.5 6 12.7 6s9.3-1.5 12.8-4.5L174.3 39c-3 2.5-6.5 3.7-10.5 3.7s-7.2-1-10-3-4-5-4-9c0-3.3 1-6 3-8s4.5-3 7.5-3c2.7 0 5.2.5 7.5 1.5v-1.8z" fill="currentColor"/>
            <path d="M2.5 28.5h6v-10h-6v10zm3-23C2 5.5 0 7.5 0 10.3v1c0 3 2 5 5.5 5s5.5-2 5.5-5v-1c0-2.8-2-5.3-5.5-5.3zM18.8 35h6V2h-6v33zM35.3 35h6V16.8h5V35h6V16.8h5V35h6V10h-28v6.8h-5V10h-6v25h11z" fill="currentColor"/>
        </svg>
        <p className="text-xs text-gray-500 mt-1">Powerful Linux Computers</p>
    </div>
);


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const topNavLinks = [
    { href: "#search", label: "search" },
    { href: "#contact", label: "contact" },
    { href: "#login", label: "log in" },
    { href: "#register", label: "register" },
    { href: "#cart", label: "cart" },
  ];

  const mainNavLinks = [
    { href: "#laptops", label: "laptops" },
    { href: "#desktops", label: "desktops" },
    { href: "#workstations", label: "workstations" },
    { href: "#mini", label: "mini" },
    { href: "#servers", label: "servers" },
    { href: "#keyboards", label: "keyboards" },
    { href: "#components", label: "components" },
    { href: "#pop_os", label: "pop!_os" },
    { href: "#merch", label: "merch" },
    { href: "#specials", label: "specials" },
  ];

  return (
    <header className="w-full bg-background border-b z-50">
      <div className="container mx-auto px-4">
        {/* Top Nav */}
        <div className="hidden md:flex justify-end items-center h-10 text-sm space-x-4 text-gray-600">
          {topNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="uppercase text-xs font-bold text-gray-500 hover:text-primary transition-colors tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between md:justify-center py-4 relative">
           <div className="absolute left-1/2 -translate-x-1/2">
             <Link href="/">
                <System76Logo />
             </Link>
           </div>
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full">
                <div className="flex flex-col h-full py-6">
                  <nav className="flex flex-col gap-4 px-4">
                    {mainNavLinks.map((link) => (
                      <Link
                        key={`${link.label}-mobile`}
                        href={link.href}
                        className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors uppercase"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <hr className="my-4"/>
                  <nav className="flex flex-col gap-4 px-4">
                     {topNavLinks.map((link) => (
                        <Link
                            key={`${link.label}-mobile-top`}
                            href={link.href}
                            className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors uppercase"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                        ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="hidden md:flex justify-center items-center h-16 space-x-8">
          {mainNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-500 hover:text-primary transition-colors uppercase text-sm font-bold tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
