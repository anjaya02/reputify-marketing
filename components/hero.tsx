"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleStartTrial = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: "var(--light-blue)" }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: "var(--navy-blue)" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block mb-6 px-4 py-2 rounded-full border-2"
            style={{
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              borderColor: "rgba(59, 130, 246, 0.3)",
            }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: "var(--royal-blue)" }}
            >
              AI-Powered Reputation Management
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance"
            style={{ color: "var(--pure-black)" }}
          >
            Listen Smarter. Respond Faster.
          </h1>

          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-balance"
            style={{ color: "var(--charcoal)" }}
          >
            AI-powered reputation management for Sri Lankan businesses. Monitor
            reviews across 5 platforms in Sinhala, Tamil & English.
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleStartTrial}
              className="text-white gap-2 transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: "var(--navy-blue)" }}
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
