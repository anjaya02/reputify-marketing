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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md supports-[backdrop-filter]:bg-black/70 border-b border-purple-900/20 shadow-lg shadow-purple-900/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 font-bold text-xl transition-all duration-300 hover:opacity-80 hover:scale-105 cursor-pointer"
          style={{ color: "var(--pure-white)" }}
        >
          {/* TODO: Replace with the new logo component or image */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            onClick={(e) => handleNavClick(e, "#features")}
            className="font-medium transition-colors hover:opacity-80 cursor-pointer"
            style={{ color: "var(--pure-white)" }}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            onClick={(e) => handleNavClick(e, "#pricing")}
            className="font-medium transition-colors hover:opacity-80 cursor-pointer"
            style={{ color: "var(--pure-white)" }}
          >
            Pricing
          </Link>
          <Link
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="font-medium transition-colors hover:opacity-80 cursor-pointer"
            style={{ color: "var(--pure-white)" }}
          >
            About
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="font-medium transition-colors hover:opacity-80 cursor-pointer"
            style={{ color: "var(--pure-white)" }}
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            onClick={handleLogin}
            className="transition-all duration-300 hover:bg-purple-700/10 hover:shadow-md hover:scale-105"
            style={{
              borderColor: "var(--deep-purple)",
              color: "var(--pure-white)",
              backgroundColor: "transparent",
            }}
          >
            Log In
          </Button>
          <Button
            onClick={handleStartTrial}
            className="text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 hover:brightness-110 active:scale-95"
            style={{ backgroundColor: "var(--deep-purple)" }}
          >
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-purple-900/20 bg-black/90 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="#features"
              onClick={(e) => handleNavClick(e, "#features")}
              className="block font-medium transition-colors hover:opacity-80 cursor-pointer"
              style={{ color: "var(--pure-white)" }}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="block font-medium transition-colors hover:opacity-80 cursor-pointer"
              style={{ color: "var(--pure-white)" }}
            >
              Pricing
            </Link>
            <Link
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="block font-medium transition-colors hover:opacity-80 cursor-pointer"
              style={{ color: "var(--pure-white)" }}
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block font-medium transition-colors hover:opacity-80 cursor-pointer"
              style={{ color: "var(--pure-white)" }}
            >
              Contact
            </Link>
            <div className="pt-3 space-y-2 border-t border-purple-900/20">
              <Button
                variant="outline"
                className="w-full bg-transparent border-2 transition-all duration-300 hover:bg-purple-700/10 hover:shadow-md"
                style={{
                  borderColor: "var(--deep-purple)",
                  color: "var(--pure-white)",
                }}
              >
                Log In
              </Button>
              <Button
                onClick={handleStartTrial}
                className="w-full text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 hover:brightness-110 active:scale-95"
                style={{ backgroundColor: "var(--deep-purple)" }}
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
