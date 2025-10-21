"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleStartTrial = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogin = () => {
    // TODO: Implement login functionality
    console.log("Login clicked");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl transition-colors"
          style={{ color: "var(--navy-blue)" }}
        >
          <Shield className="w-6 h-6" />
          Reputify
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            onClick={(e) => handleNavClick(e, "#features")}
            className="font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--charcoal)" }}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            onClick={(e) => handleNavClick(e, "#pricing")}
            className="font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--charcoal)" }}
          >
            Pricing
          </Link>
          <Link
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--charcoal)" }}
          >
            About
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--charcoal)" }}
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            onClick={handleLogin}
            className="transition-all duration-300"
            style={{
              borderColor: "var(--navy-blue)",
              color: "var(--navy-blue)",
            }}
          >
            Log In
          </Button>
          <Button
            onClick={handleStartTrial}
            className="text-white transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: "var(--navy-blue)" }}
          >
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="#features"
              onClick={(e) => handleNavClick(e, "#features")}
              className="block font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--charcoal)" }}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="block font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--charcoal)" }}
            >
              Pricing
            </Link>
            <Link
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="block font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--charcoal)" }}
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--charcoal)" }}
            >
              Contact
            </Link>
            <div className="pt-3 space-y-2 border-t border-gray-200">
              <Button
                variant="outline"
                className="w-full bg-transparent border-2 transition-colors"
                style={{
                  borderColor: "var(--navy-blue)",
                  color: "var(--navy-blue)",
                }}
              >
                Log In
              </Button>
              <Button
                onClick={handleStartTrial}
                className="w-full text-white transition-colors"
                style={{ backgroundColor: "var(--navy-blue)" }}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
