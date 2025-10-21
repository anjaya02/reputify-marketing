import { Award, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div>
            <div
              className="inline-block mb-4 px-3 py-1 text-xs font-bold rounded-full"
              style={{
                backgroundColor: "rgba(27, 77, 62, 0.1)",
                color: "var(--dark-forest-green)",
              }}
            >
              OUR STORY
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-balance"
              style={{ color: "var(--pure-black)" }}
            >
              Founded by Team Y3-05
            </h2>
            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: "var(--charcoal)" }}
            >
              Reputify was born from a simple observation: Sri Lankan businesses
              struggle with managing their online reputation across multiple
              platforms. Our team at University of Westminster identified this
              as the #1 challenge facing SMEs in the region.
            </p>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "var(--charcoal)" }}
            >
              We built Reputify to empower businesses with AI-driven reputation
              intelligence, combining cutting-edge technology with deep
              understanding of the local market.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(27, 77, 62, 0.1)" }}
                >
                  <Award
                    className="w-6 h-6"
                    style={{ color: "var(--dark-forest-green)" }}
                  />
                </div>
                <div>
                  <h3
                    className="font-bold mb-1"
                    style={{ color: "var(--pure-black)" }}
                  >
                    University of Westminster Collaboration
                  </h3>
                  <p className="text-sm" style={{ color: "var(--charcoal)" }}>
                    Backed by academic research and industry expertise
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(5, 150, 105, 0.1)" }}
                >
                  <Users
                    className="w-6 h-6"
                    style={{ color: "var(--emerald-accent)" }}
                  />
                </div>
                <div>
                  <h3
                    className="font-bold mb-1"
                    style={{ color: "var(--pure-black)" }}
                  >
                    Local Market Expertise
                  </h3>
                  <p className="text-sm" style={{ color: "var(--charcoal)" }}>
                    Deep understanding of Sri Lankan business landscape
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(110, 231, 183, 0.1)" }}
                >
                  <Zap
                    className="w-6 h-6"
                    style={{ color: "var(--sage-green)" }}
                  />
                </div>
                <div>
                  <h3
                    className="font-bold mb-1"
                    style={{ color: "var(--pure-black)" }}
                  >
                    AI-Powered Innovation
                  </h3>
                  <p className="text-sm" style={{ color: "var(--charcoal)" }}>
                    Cutting-edge technology for real-time insights
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Mission */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 md:p-12">
            <div className="mb-8">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--pure-black)" }}
              >
                Our Mission
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--charcoal)" }}
              >
                Empowering SMEs with AI-driven reputation intelligence to build
                trust, engage customers, and grow stronger in the digital age.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4
                  className="font-bold mb-2"
                  style={{ color: "var(--pure-black)" }}
                >
                  Why Reputify?
                </h4>
                <ul
                  className="space-y-2 text-sm"
                  style={{ color: "var(--charcoal)" }}
                >
                  <li className="flex gap-2">
                    <span
                      className="font-bold"
                      style={{ color: "var(--dark-forest-green)" }}
                    >
                      •
                    </span>
                    <span>Multilingual support: Sinhala, Tamil, English</span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="font-bold"
                      style={{ color: "var(--dark-forest-green)" }}
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
                      style={{ color: "var(--dark-forest-green)" }}
                    >
                      •
                    </span>
                    <span>Real-time alerts via WhatsApp and Email</span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="font-bold"
                      style={{ color: "var(--dark-forest-green)" }}
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
