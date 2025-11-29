"use client";

import React, { useState } from "react";
import { Globe, Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Features", href: "#features" },
  { name: "Locations", href: "#locations" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50
        bg-(--color-background)
        border-b-(--color-border)
        backdrop-blur-md
      "
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">

        {/* Brand */}
        <a
          href="#"
          className="
            flex items-center gap-2
            text-3xl font-extrabold
            text-(--color-text)
            hover:text-(--color-primary)
            transition
          "
        >
          <Globe className="w-7 h-7 text-(--color-primary)" />
          <span>VelloStay</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-(--color-text-muted)
                hover:text-(--color-primary)
                transition
                text-lg font-medium
              "
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="
              bg-(--color-primary)
              text-black font-bold
              py-3 px-6 rounded-xl
              hover:bg-(--color-primary-dark)
              transition
            "
          >
            Book Your Studio
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-(--color-primary)"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-(--color-surface)">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  py-3
                  text-(--color-text-muted)
                  border-b-(--color-border)
                  hover:text-(--color-primary)
                "
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="
                mt-3 py-3 text-center rounded-lg
                bg-(--color-primary)
                text-black font-bold
                hover:bg-(--color-primary-dark)
                transition
              "
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
