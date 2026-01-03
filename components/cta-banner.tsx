"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FreeTrialModal from "@/components/free-trial-modal";

export default function CTABanner() {
  const [showTrialModal, setShowTrialModal] = useState(false);

  return (
    <>
      <section
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-white"
        style={{ backgroundColor: "var(--deep-purple)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready to Transform Your Business Reputation?
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Join 50+ Sri Lankan businesses already using Reputify to manage
            their online reputation
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() => setShowTrialModal(true)}
              size="lg"
              className="gap-2 transition-all duration-300 hover:shadow-lg bg-white hover:bg-white/90"
              style={{ color: "var(--deep-purple)" }}
            >
              Start Your Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No credit card required. 14-day free trial. Cancel anytime.
          </p>
        </div>
      </section>

      <FreeTrialModal
        open={showTrialModal}
        onClose={() => setShowTrialModal(false)}
      />
    </>
  );
}
