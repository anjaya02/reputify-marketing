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
    <footer className="py-16 px-4 sm:px-6 lg:px-8 text-white bg-gradient-to-br from-[#0f0f23] to-[#1a0b2e]">
      <div className="max-w-5xl mx-auto">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-12 text-sm">
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
                  href="#about"
                  onClick={(e) => scrollToId(e, "#about")}
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Terms of Service
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
              <li className="text-xs text-white/60">
                Reputify HQ, Homagama, Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-5">
            <Link
              href="/"
              className="text-white/60 hover:text-purple-400 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="text-white/60 hover:text-purple-400 hover:scale-110 transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-xs text-white/60">
            © 2026 Reputify — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
