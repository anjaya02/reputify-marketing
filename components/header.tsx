"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-900/20 shadow-lg shadow-purple-900/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/Logo-05.png"
            alt="Reputify Logo"
            className="h-16 sm:h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {["features", "pricing", "about", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              onClick={(e) => handleNavClick(e, `#${item}`)}
              className="relative font-medium transition-colors hover:text-purple-300 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-purple-500 after:w-0 after:transition-all after:rounded-full hover:after:w-full"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => console.log("Login clicked")}
            className="border-purple-700 text-white bg-transparent hover:bg-purple-800/30 hover:shadow-md transition"
          >
            Log In
          </Button>

          <Button
            onClick={handleStartTrial}
            className="bg-purple-700 text-white hover:shadow-purple-500/40 hover:brightness-110 hover:scale-105 active:scale-95 transition-all"
          >
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-purple-900/20 bg-black/90 backdrop-blur-md">
          <div className="px-4 py-4 space-y-4 text-white">
            {["features", "pricing", "about", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={(e) => handleNavClick(e, `#${item}`)}
                className="block font-medium hover:text-purple-300 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}

            <div className="pt-4 space-y-3 border-t border-purple-900/20">
              <Button
                variant="outline"
                className="w-full border-purple-700 bg-transparent text-white hover:bg-purple-800/20"
              >
                Log In
              </Button>

              <Button
                onClick={handleStartTrial}
                className="w-full bg-purple-700 text-white hover:brightness-110"
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
