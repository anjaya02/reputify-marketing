"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const scrollToId = (e: React.MouseEvent, id: string) => {
    if (!id.startsWith("#")) return;
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 text-white bg-gradient-to-br from-[#0f0f23] to-[#1a0b2e]">
      <div className="max-w-7xl mx-auto">
        {/* Logo & CTA Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative mb-8">
            <div className="absolute inset-0 blur-3xl bg-purple-600 opacity-25"></div>
            <img
              src="/Logo-04.png"
              alt="Reputify Logo"
              className="relative h-40 sm:h-48 lg:h-56 w-auto object-contain"
              loading="lazy"
            />
          </div>

          <p className="text-lg lg:text-xl text-white/80 max-w-2xl mb-8">
            Smarter reputation management for Sri Lankan businesses — powered by
            AI.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="#pricing"
              onClick={(e) => scrollToId(e, "#pricing")}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 rounded-md transition-all duration-300 font-medium text-center"
            >
              Request Demo
            </Link>
            <Link
              href="#contact"
              onClick={(e) => scrollToId(e, "#contact")}
              className="px-6 py-3 border border-white/20 hover:border-purple-400 hover:bg-purple-600/10 hover:scale-105 rounded-md transition-all duration-300 font-medium text-center"
            >
              Contact Us
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <Link
              href="/"
              className="hover:text-purple-400 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-7 h-7" />
            </Link>
            <Link
              href="/"
              className="hover:text-purple-400 hover:scale-110 transition-all duration-300"
            >
              <Facebook className="w-7 h-7" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12"></div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12 text-sm">
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  href="#features"
                  onClick={(e) => scrollToId(e, "#features")}
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  onClick={(e) => scrollToId(e, "#pricing")}
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Status
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex gap-2 items-start">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@reputify.lk"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  info@reputify.lk
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+94711687980"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  +94 711 687 980
                </a>
              </li>
              <li className="text-xs text-white/60">Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © 2025 Reputify — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
