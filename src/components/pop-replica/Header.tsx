"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const System76Logo = () => (
    <svg
      width="250"
      height="50"
      viewBox="0 0 250 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-800"
    >
      <text
        x="0"
        y="30"
        fontFamily="Fira Sans, sans-serif"
        fontSize="32"
        fontWeight="500"
        fill="currentColor"
      >
        system
      </text>
      <g transform="skewX(-15)">
        <text
          x="145"
          y="30"
          fontFamily="Fira Sans, sans-serif"
          fontSize="40"
          fontWeight="300"
          fill="currentColor"
        >
          7
        </text>
        <text
          x="165"
          y="30"
          fontFamily="Fira Sans, sans-serif"
          fontSize="40"
          fontWeight="300"
          fill="currentColor"
        >
          6
        </text>
      </g>
      <rect x="172" y="35" width="45" height="4" fill="#fdb813" transform="skewX(-15)" />

      <text
        x="30"
        y="48"
        fontFamily="Lato, sans-serif"
        fontSize="12"
        fill="#555"
      >
        Powerful Linux Computers
      </text>
    </svg>
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
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="uppercase text-xs font-bold text-gray-500 hover:text-primary transition-colors tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Main Header Container */}
        <div className="flex flex-col items-center">
            {/* Main Header */}
            <div className="flex items-center justify-between md:justify-center py-4 relative w-full">
               <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
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
      </div>
    </header>
  );
}
