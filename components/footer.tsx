"use client";

import type React from "react";

import Link from "next/link";
import { Shield, Mail, Phone, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-16 px-4 sm:px-6 lg:px-8 text-white"
      style={{
        background: "linear-gradient(135deg, #0f0f23, var(--deep-purple))",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2 font-bold text-xl mb-4 hover:text-accent transition-all duration-300 hover:scale-105 text-white cursor-pointer"
            >
              {/* TODO: Replace with the new logo component or image */}
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              AI-powered reputation management for Sri Lankan businesses. Built
              by Team Y3-05 with University of Westminster.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  href="#features"
                  onClick={(e) => handleNavClick(e, "#features")}
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  onClick={(e) => handleNavClick(e, "#pricing")}
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  href="#about"
                  onClick={(e) => handleNavClick(e, "#about")}
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Status Page
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:info@reputify.lk"
                  className="hover:text-accent transition-colors break-all"
                >
                  info@reputify.lk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+94711687980"
                  className="hover:text-accent transition-colors"
                >
                  +94 711 687 980
                </a>
              </div>
              <p className="text-xs pt-2">Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-sm text-white/70">
              © 2025 Reputify - Team Y3-05. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-sm text-white/70">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
