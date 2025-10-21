"use client";

import {
  Chrome,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

const platforms = [
  { icon: Chrome, name: "Google Business", color: "text-blue-500" },
  { icon: Facebook, name: "Facebook", color: "text-blue-600" },
  { icon: Linkedin, name: "LinkedIn", color: "text-blue-700" },
  { icon: Youtube, name: "YouTube", color: "text-red-500" },
  { icon: MessageCircle, name: "Reddit", color: "text-orange-500" },
];

export default function Platforms() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Platform Coverage
          </h2>
          <p className="text-lg text-muted-foreground">
            Monitor reviews across 5 major platforms in one unified dashboard
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors"
              >
                <Icon className={`w-8 h-8 mb-3 ${platform.color}`} />
                <p className="text-sm font-medium text-foreground text-center">
                  {platform.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
