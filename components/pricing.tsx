"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "3,000",
    description: "Google + Facebook, Basic AI, Email alerts, 1 user",
    features: [
      "Google & Facebook monitoring",
      "Basic AI sentiment analysis",
      "Email alerts",
      "1 user account",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "9,000",
    description: "+YouTube, SMS alerts, 2 users, 90-day retention",
    features: [
      "All Starter features",
      "+ YouTube monitoring",
      "SMS & Email alerts",
      "2 user accounts",
      "90-day data retention",
      "Response suggestions",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "24,000",
    description:
      "All platforms, Multi-user, Priority support, 180-day retention",
    features: [
      "All Professional features",
      "+ LinkedIn & Reddit monitoring",
      "Unlimited user accounts",
      "180-day data retention",
      "Priority support",
      "Custom integrations",
    ],
    highlighted: false,
  },
];

const comparisonFeatures = [
  {
    name: "Google Monitoring",
    starter: true,
    professional: true,
    business: true,
  },
  {
    name: "Facebook Monitoring",
    starter: true,
    professional: true,
    business: true,
  },
  {
    name: "YouTube Monitoring",
    starter: false,
    professional: true,
    business: true,
  },
  {
    name: "LinkedIn Monitoring",
    starter: false,
    professional: false,
    business: true,
  },
  {
    name: "Reddit Monitoring",
    starter: false,
    professional: false,
    business: true,
  },
  {
    name: "AI Sentiment Analysis",
    starter: "Basic",
    professional: "Advanced",
    business: "Advanced",
  },
  { name: "Email Alerts", starter: true, professional: true, business: true },
  { name: "SMS Alerts", starter: false, professional: true, business: true },
  {
    name: "Response Suggestions",
    starter: false,
    professional: true,
    business: true,
  },
  {
    name: "Data Retention",
    starter: "30 days",
    professional: "90 days",
    business: "180 days",
  },
  {
    name: "User Accounts",
    starter: "1",
    professional: "2",
    business: "Unlimited",
  },
  {
    name: "Priority Support",
    starter: false,
    professional: false,
    business: true,
  },
];

export default function Pricing() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section
      id="pricing"
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ color: "var(--pure-black)" }}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--charcoal)" }}
          >
            All plans include free 14-day trial, no credit card required, and
            cancel anytime
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border-2 transition-all duration-300 p-8 ${
                plan.highlighted ? "scale-105 shadow-lg" : "hover:shadow-md"
              }`}
              style={{
                borderColor: plan.highlighted ? "var(--navy-blue)" : "#E5E7EB",
                backgroundColor: plan.highlighted
                  ? "rgba(30, 58, 138, 0.05)"
                  : "white",
              }}
            >
              {plan.highlighted && (
                <div
                  className="inline-block mb-4 px-3 py-1 text-xs font-bold rounded-full text-white"
                  style={{ backgroundColor: "var(--navy-blue)" }}
                >
                  MOST POPULAR
                </div>
              )}
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--pure-black)" }}
              >
                {plan.name}
              </h3>
              <p className="text-sm mb-6" style={{ color: "var(--charcoal)" }}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span
                  className="text-4xl font-bold"
                  style={{ color: "var(--pure-black)" }}
                >
                  LKR {plan.price}
                </span>
                <span style={{ color: "var(--charcoal)" }}>/month</span>
              </div>

              <Button
                className={`w-full mb-8 text-white transition-all ${
                  plan.highlighted ? "" : "border-2"
                }`}
                style={{
                  backgroundColor: plan.highlighted
                    ? "var(--navy-blue)"
                    : "transparent",
                  borderColor: plan.highlighted
                    ? "transparent"
                    : "var(--navy-blue)",
                  color: plan.highlighted ? "white" : "var(--navy-blue)",
                }}
              >
                Start Free Trial
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--success)" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "var(--pure-black)" }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trial Info */}
        <div className="text-center mb-12">
          <p style={{ color: "var(--charcoal)" }}>
            Free 14-day trial • No credit card required • Cancel anytime • Full
            access to all features
          </p>
        </div>

        {/* Comparison Table Toggle */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="font-medium transition-colors hover:opacity-80 px-4 py-2 border rounded-lg hover:bg-gray-50 cursor-pointer"
            style={{
              color: "var(--navy-blue)",
              borderColor: "var(--navy-blue)",
            }}
            type="button"
          >
            {showComparison ? "Hide" : "Show"} Detailed Comparison
          </button>
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <div
            className="overflow-x-auto rounded-lg border-2"
            style={{ borderColor: "#E5E7EB" }}
          >
            <table className="w-full">
              <thead>
                <tr
                  className="border-b-2 border-gray-200"
                  style={{ backgroundColor: "#F9FAFB" }}
                >
                  <th
                    className="px-6 py-4 text-left font-bold"
                    style={{ color: "var(--pure-black)" }}
                  >
                    Feature
                  </th>
                  <th
                    className="px-6 py-4 text-center font-bold"
                    style={{ color: "var(--pure-black)" }}
                  >
                    Starter
                  </th>
                  <th
                    className="px-6 py-4 text-center font-bold"
                    style={{ color: "var(--pure-black)" }}
                  >
                    Professional
                  </th>
                  <th
                    className="px-6 py-4 text-center font-bold"
                    style={{ color: "var(--pure-black)" }}
                  >
                    Business
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:opacity-80 transition-opacity"
                  >
                    <td
                      className="px-6 py-4 font-medium"
                      style={{ color: "var(--pure-black)" }}
                    >
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <Check
                            className="w-5 h-5 mx-auto"
                            style={{ color: "var(--success)" }}
                          />
                        ) : (
                          <X
                            className="w-5 h-5 mx-auto"
                            style={{ color: "var(--charcoal)" }}
                          />
                        )
                      ) : (
                        <span style={{ color: "var(--charcoal)" }}>
                          {feature.starter}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.professional === "boolean" ? (
                        feature.professional ? (
                          <Check
                            className="w-5 h-5 mx-auto"
                            style={{ color: "var(--success)" }}
                          />
                        ) : (
                          <X
                            className="w-5 h-5 mx-auto"
                            style={{ color: "var(--charcoal)" }}
                          />
                        )
                      ) : (
                        <span style={{ color: "var(--charcoal)" }}>
                          {feature.professional}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.business === "boolean" ? (
                        feature.business ? (
                          <Check
                            className="w-5 h-5 mx-auto"
                            style={{ color: "var(--success)" }}
                          />
                        ) : (
                          <X
                            className="w-5 h-5 mx-auto"
                            style={{ color: "var(--charcoal)" }}
                          />
                        )
                      ) : (
                        <span style={{ color: "var(--charcoal)" }}>
                          {feature.business}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
