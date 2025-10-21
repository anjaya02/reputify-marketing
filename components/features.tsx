"use client";

import { Search, BarChart3, MessageSquare, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Monitor",
    description:
      "Track mentions across Google, Facebook, LinkedIn, YouTube, Reddit",
  },
  {
    icon: BarChart3,
    title: "Analyze",
    description:
      "AI sentiment analysis in Sinhala, Tamil & English with predictive insights",
  },
  {
    icon: MessageSquare,
    title: "Engage",
    description: "Human-approved AI response suggestions for customer feedback",
  },
  {
    icon: TrendingUp,
    title: "Improve",
    description:
      "Trend prediction and issue extraction to prevent reputation crises",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ color: "var(--pure-black)" }}
          >
            Powerful Features for Your Business
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--charcoal)" }}
          >
            Everything you need to manage and improve your online reputation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-lg border-2 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "var(--navy-blue)" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: "var(--royal-blue)" }}
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--pure-black)" }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "var(--charcoal)" }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
