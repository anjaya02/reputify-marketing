"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";

export default function Hero() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const handleStartTrial = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={handleStartTrial}
              className="text-white gap-2 transition-all duration-300 hover:shadow-lg hover:opacity-90"
              style={{ backgroundColor: "var(--royal-blue)" }}
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowDemoModal(true)}
              className="gap-2 bg-white border-2 transition-all duration-300 hover:bg-royal-blue/5"
              style={{
                borderColor: "var(--royal-blue)",
                color: "var(--royal-blue)",
              }}
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Image Placeholder */}
          <div
            className="relative rounded-lg overflow-hidden border-2 bg-gray-50 aspect-video flex items-center justify-center transition-colors"
            style={{ borderColor: "var(--navy-blue)" }}
          >
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "rgba(30, 58, 138, 0.2)" }}
              >
                <Play
                  className="w-8 h-8"
                  style={{ color: "var(--navy-blue)" }}
                />
              </div>
              <p style={{ color: "var(--charcoal)" }}>Dashboard Mockup</p>
            </div>
          </div>
        </div>
      </section>

      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--pure-black)" }}
              >
                Reputify Demo
              </h2>
              <button
                onClick={() => setShowDemoModal(false)}
                className="p-2 rounded-lg transition-colors hover:opacity-80"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Play
                    className="w-16 h-16 mx-auto mb-4 opacity-50"
                    style={{ color: "var(--navy-blue)" }}
                  />
                  <p style={{ color: "var(--charcoal)" }}>
                    Demo video placeholder
                  </p>
                  <p
                    className="text-sm mt-2"
                    style={{ color: "var(--charcoal)" }}
                  >
                    In a real implementation, this would embed a YouTube or
                    Vimeo video
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--pure-black)" }}
                >
                  What You'll See in the Demo:
                </h3>
                <ul className="space-y-2" style={{ color: "var(--charcoal)" }}>
                  <li className="flex gap-2">
                    <span
                      className="font-bold"
                      style={{ color: "var(--navy-blue)" }}
                    >
                      •
                    </span>
                    <span>Real-time dashboard with sentiment analytics</span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="font-bold"
                      style={{ color: "var(--navy-blue)" }}
                    >
                      •
                    </span>
                    <span>Multi-platform review monitoring</span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="font-bold"
                      style={{ color: "var(--navy-blue)" }}
                    >
                      •
                    </span>
                    <span>AI-generated response suggestions</span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="font-bold"
                      style={{ color: "var(--navy-blue)" }}
                    >
                      •
                    </span>
                    <span>Alert system and notifications</span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="font-bold"
                      style={{ color: "var(--navy-blue)" }}
                    >
                      •
                    </span>
                    <span>Predictive analytics and insights</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex gap-3">
                <Button
                  onClick={() => setShowDemoModal(false)}
                  variant="outline"
                  className="flex-1 border-gray-300"
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    setShowDemoModal(false);
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 text-white"
                  style={{ backgroundColor: "var(--navy-blue)" }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
