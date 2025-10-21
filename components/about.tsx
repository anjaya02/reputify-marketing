import { Award, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div>
            <div
              className="inline-block mb-4 px-3 py-1 text-xs font-bold rounded-full"
              style={{
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                color: "var(--light-blue)",
              }}
            >
              OUR STORY
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-balance"
              style={{ color: "var(--pure-white)" }}
            >
              Founded by Team Y3-05
            </h2>
            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: "var(--light-gray)" }}
            >
              Reputify was born from a simple observation: Sri Lankan businesses
              struggle with managing their online reputation across multiple
              platforms. Our team at University of Westminster identified this
              as the #1 challenge facing SMEs in the region.
            </p>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "var(--light-gray)" }}
            >
              We built Reputify to empower businesses with AI-driven reputation
              intelligence, combining cutting-edge technology with deep
              understanding of the local market.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                >
                  <Award
                    className="w-6 h-6"
                    style={{ color: "var(--light-blue)" }}
                  />
                </div>
                <div>
                  <h3
                    className="font-bold mb-1"
                    style={{ color: "var(--pure-white)" }}
                  >
                    University of Westminster Collaboration
                  </h3>
                  <p className="text-sm" style={{ color: "var(--light-gray)" }}>
                    Backed by academic research and industry expertise
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                >
                  <Users
                    className="w-6 h-6"
                    style={{ color: "var(--light-blue)" }}
                  />
                </div>
                <div>
                  <h3
                    className="font-bold mb-1"
                    style={{ color: "var(--pure-white)" }}
                  >
                    Local Market Expertise
                  </h3>
                  <p className="text-sm" style={{ color: "var(--light-gray)" }}>
                    Deep understanding of Sri Lankan business landscape
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                >
                  <Zap
                    className="w-6 h-6"
                    style={{ color: "var(--light-blue)" }}
                  />
                </div>
                <div>
                  <h3
                    className="font-bold mb-1"
                    style={{ color: "var(--pure-white)" }}
                  >
                    AI-Powered Innovation
                  </h3>
                  <p className="text-sm" style={{ color: "var(--light-gray)" }}>
                    Cutting-edge technology for real-time insights
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Mission */}
          <div className="bg-gray-900/50 backdrop-blur rounded-lg border-2 border-blue-600/50 p-8 md:p-12">
            <div className="mb-8">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--pure-white)" }}
              >
                Our Mission
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--light-gray)" }}
              >
                Empowering SMEs with AI-driven reputation intelligence to build
                trust, engage customers, and grow stronger in the digital age.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4
                  className="font-bold mb-2"
                  style={{ color: "var(--pure-white)" }}
                >
                  Why Reputify?
                </h4>
                <ul
                  className="space-y-2 text-sm"
                  style={{ color: "var(--light-gray)" }}
                >
                  <li className="flex gap-2">
                    <span
                      className="font-bold"
                      style={{ color: "var(--light-blue)" }}
                    >
                      •
                    </span>
                    <span>Multilingual support: Sinhala, Tamil, English</span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="font-bold"
                      style={{ color: "var(--light-blue)" }}
                    >
                      •
                    </span>
                    <span>
                      5 platform integration: Google, Facebook, LinkedIn,
                      YouTube, Reddit
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="font-bold"
                      style={{ color: "var(--light-blue)" }}
                    >
                      •
                    </span>
                    <span>Real-time alerts via WhatsApp and Email</span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="font-bold"
                      style={{ color: "var(--light-blue)" }}
                    >
                      •
                    </span>
                    <span>Predictive analytics to prevent crises</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
