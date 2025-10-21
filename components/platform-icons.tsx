export default function PlatformIcons() {
  const platforms = [
    { name: "Google", color: "bg-blue-50 border-blue-200" },
    { name: "Facebook", color: "bg-blue-50 border-blue-200" },
    { name: "LinkedIn", color: "bg-blue-50 border-blue-200" },
    { name: "YouTube", color: "bg-red-50 border-red-200" },
    { name: "Reddit", color: "bg-orange-50 border-orange-200" },
  ]

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "var(--pure-black)" }}>
            One Dashboard. All Platforms. Complete Visibility.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--charcoal)" }}>
            Monitor all your reviews and mentions across the platforms your customers use most
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border-2 ${platform.color} flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <span className="font-bold text-center" style={{ color: "var(--pure-black)" }}>
                {platform.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg border-2 border-gray-200 bg-white">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--pure-black)" }}>
            Why Monitor Multiple Platforms?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="font-bold text-xl" style={{ color: "var(--dark-forest-green)" }}>
                1
              </span>
              <div>
                <p className="font-medium" style={{ color: "var(--pure-black)" }}>
                  Customers are everywhere
                </p>
                <p className="text-sm" style={{ color: "var(--charcoal)" }}>
                  Your customers leave reviews on different platforms
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-xl" style={{ color: "var(--dark-forest-green)" }}>
                2
              </span>
              <div>
                <p className="font-medium" style={{ color: "var(--pure-black)" }}>
                  Don't miss feedback
                </p>
                <p className="text-sm" style={{ color: "var(--charcoal)" }}>
                  Unified dashboard means no reviews slip through the cracks
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-xl" style={{ color: "var(--dark-forest-green)" }}>
                3
              </span>
              <div>
                <p className="font-medium" style={{ color: "var(--pure-black)" }}>
                  Respond faster
                </p>
                <p className="text-sm" style={{ color: "var(--charcoal)" }}>
                  Centralized alerts help you respond to feedback immediately
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-xl" style={{ color: "var(--dark-forest-green)" }}>
                4
              </span>
              <div>
                <p className="font-medium" style={{ color: "var(--pure-black)" }}>
                  Better insights
                </p>
                <p className="text-sm" style={{ color: "var(--charcoal)" }}>
                  Cross-platform analytics reveal trends and patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
