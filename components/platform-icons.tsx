"use client";

import { FaGoogle, FaFacebook, FaLinkedin, FaYoutube, FaReddit, FaInstagram, FaTiktok } from "react-icons/fa";

export default function PlatformIcons() {
  const platforms = [
    { 
      name: "Google", 
      icon: FaGoogle, 
      gradient: "from-blue-500 to-green-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-green-500/10",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500"
    },
    { 
      name: "Facebook", 
      icon: FaFacebook, 
      gradient: "from-blue-600 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-600/10 to-blue-700/10",
      borderColor: "border-blue-600/30",
      iconColor: "text-blue-600"
    },
    { 
      name: "LinkedIn", 
      icon: FaLinkedin, 
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-700/10",
      borderColor: "border-blue-600/30",
      iconColor: "text-blue-600"
    },
    { 
      name: "YouTube", 
      icon: FaYoutube, 
      gradient: "from-red-500 to-red-700",
      bgColor: "bg-gradient-to-br from-red-500/10 to-red-700/10",
      borderColor: "border-red-500/30",
      iconColor: "text-red-500"
    },
    { 
      name: "Reddit", 
      icon: FaReddit, 
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-500"
    },
    { 
      name: "Instagram", 
      icon: FaInstagram, 
      gradient: "from-purple-500 via-pink-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10",
      borderColor: "border-pink-500/30",
      iconColor: "text-pink-500"
    },
    { 
      name: "TikTok", 
      icon: FaTiktok, 
      gradient: "from-cyan-400 to-pink-600",
      bgColor: "bg-gradient-to-br from-cyan-400/10 to-pink-600/10",
      borderColor: "border-cyan-400/30",
      iconColor: "text-cyan-400"
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ color: "var(--pure-white)" }}
          >
            One Dashboard. All Platforms. Complete Visibility.
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--light-gray)" }}
          >
            Monitor all your reviews and mentions across the platforms your
            customers use most
          </p>
        </div>

        <div className="relative flex flex-wrap items-center justify-center gap-12 md:gap-16 py-12">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col items-center gap-4 transition-all duration-500 hover:scale-110 cursor-pointer"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Subtle glowing circle background */}
                <div 
                  className={`absolute inset-0 rounded-full blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${platform.gradient}`}
                  style={{ transform: 'scale(1.8)' }}
                />
                
                {/* Icon container with subtle border */}
                <div className="relative">
                  {/* Subtle gradient border */}
                  <div 
                    className={`absolute -inset-1 rounded-full bg-gradient-to-br ${platform.gradient} opacity-20 group-hover:opacity-40 transition-all duration-500`}
                    style={{
                      animation: 'spin 10s linear infinite',
                      filter: 'blur(4px)'
                    }}
                  />
                  
                  {/* Icon circle */}
                  <div className="relative w-20 h-20 rounded-full bg-gray-900/90 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500">
                    <Icon 
                      className={`w-10 h-10 ${platform.iconColor} group-hover:scale-110 transition-transform duration-500`}
                      style={{
                        filter: 'drop-shadow(0 0 4px currentColor)'
                      }}
                    />
                  </div>
                </div>
                
                {/* Platform name with fade-in effect */}
                <span
                  className="font-semibold text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ color: "var(--pure-white)" }}
                >
                  {platform.name}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Add floating animation keyframes */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>

        <div className="mt-16 p-8 rounded-lg border-2 border-purple-600/50 bg-gray-900/50 backdrop-blur">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--pure-white)" }}
          >
            Why Monitor Multiple Platforms?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span
                className="font-bold text-xl"
                style={{ color: "var(--light-purple)" }}
              >
                1
              </span>
              <div>
                <p
                  className="font-medium"
                  style={{ color: "var(--pure-white)" }}
                >
                  Customers are everywhere
                </p>
                <p className="text-sm" style={{ color: "var(--light-gray)" }}>
                  Your customers leave reviews on different platforms
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span
                className="font-bold text-xl"
                style={{ color: "var(--light-purple)" }}
              >
                2
              </span>
              <div>
                <p
                  className="font-medium"
                  style={{ color: "var(--pure-white)" }}
                >
                  Don't miss feedback
                </p>
                <p className="text-sm" style={{ color: "var(--light-gray)" }}>
                  Unified dashboard means no reviews slip through the cracks
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span
                className="font-bold text-xl"
                style={{ color: "var(--light-purple)" }}
              >
                3
              </span>
              <div>
                <p
                  className="font-medium"
                  style={{ color: "var(--pure-white)" }}
                >
                  Respond faster
                </p>
                <p className="text-sm" style={{ color: "var(--light-gray)" }}>
                  Centralized alerts help you respond to feedback immediately
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span
                className="font-bold text-xl"
                style={{ color: "var(--light-purple)" }}
              >
                4
              </span>
              <div>
                <p
                  className="font-medium"
                  style={{ color: "var(--pure-white)" }}
                >
                  Better insights
                </p>
                <p className="text-sm" style={{ color: "var(--light-gray)" }}>
                  Cross-platform analytics reveal trends and patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
