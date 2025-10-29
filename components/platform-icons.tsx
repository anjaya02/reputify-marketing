export default function PlatformIcons() {
  const platforms = [
    { name: "Google", color: "bg-gray-900/40 border-purple-500/50" },
    { name: "Facebook", color: "bg-gray-900/40 border-purple-500/50" },
    { name: "LinkedIn", color: "bg-gray-900/40 border-purple-500/50" },
    { name: "YouTube", color: "bg-gray-900/40 border-purple-500/50" },
    { name: "Reddit", color: "bg-gray-900/40 border-purple-500/50" },
    { name: "Instagram", color: "bg-gray-900/40 border-purple-500/50" },
    { name: "TikTok", color: "bg-gray-900/40 border-purple-500/50" },
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

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border-2 ${platform.color} backdrop-blur flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <span
                className="font-bold text-center"
                style={{ color: "var(--pure-white)" }}
              >
                {platform.name}
              </span>
            </div>
          ))}
        </div>

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
