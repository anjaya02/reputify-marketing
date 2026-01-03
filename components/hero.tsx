"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FreeTrialModal from "@/components/free-trial-modal";

export default function Hero() {
  const [showTrialModal, setShowTrialModal] = useState(false);

  return (
    <>
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block mb-6 px-4 py-2 rounded-full border-2"
            style={{
              backgroundColor: "rgba(114, 14, 158, 0.2)",
              borderColor: "rgba(114, 14, 158, 0.4)",
            }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: "var(--light-purple)" }}
            >
              AI-Powered Reputation Management
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance"
            style={{ color: "var(--pure-white)" }}
          >
            Listen Smarter. Respond Faster.
          </h1>

          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-balance"
            style={{ color: "var(--light-gray)" }}
          >
            AI-powered reputation management for Sri Lankan businesses. Monitor
            reviews across 7 platforms in Sinhala, Tamil & English.
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={() => setShowTrialModal(true)}
              className="group text-white gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 hover:brightness-110 active:scale-95"
              style={{ backgroundColor: "var(--deep-purple)" }}
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <FreeTrialModal
        open={showTrialModal}
        onClose={() => setShowTrialModal(false)}
      />
    </>
  );
}
