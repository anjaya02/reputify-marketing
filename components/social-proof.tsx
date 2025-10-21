import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kavindu Denuwan",
    business: "Colombo Cafe",
    role: "Owner",
    content:
      "Reputify helped us respond to customer feedback 10x faster. Our Google rating improved from 3.8 to 4.7 stars in just 3 months!",
    rating: 5,
  },
  {
    name: "Ravi Perera",
    business: "Perera's Restaurant",
    role: "Manager",
    content:
      "The AI-generated responses in Sinhala are incredibly accurate. Our customers feel heard and valued. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amara Jayasinghe",
    business: "Jayasinghe Retail",
    role: "Owner",
    content:
      "The predictive analytics feature helped us identify and fix issues before they became major problems. Game changer for our business.",
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ color: "var(--pure-black)" }}
          >
            Trusted by 50+ Sri Lankan Businesses
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--charcoal)" }}
          >
            See how businesses across different industries are transforming
            their reputation management
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg border-2 border-gray-200 bg-white">
            <div
              className="text-4xl font-bold mb-2"
              style={{ color: "var(--dark-forest-green)" }}
            >
              50+
            </div>
            <p style={{ color: "var(--charcoal)" }}>Active Businesses</p>
          </div>
          <div className="text-center p-6 rounded-lg border-2 border-gray-200 bg-white">
            <div
              className="text-4xl font-bold mb-2"
              style={{ color: "var(--emerald-accent)" }}
            >
              30%
            </div>
            <p style={{ color: "var(--charcoal)" }}>
              Avg. Satisfaction Improvement
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border-2 border-gray-200 bg-white">
            <div
              className="text-4xl font-bold mb-2"
              style={{ color: "var(--sage-green)" }}
            >
              4.8/5
            </div>
            <p style={{ color: "var(--charcoal)" }}>Average Rating</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border-2 border-gray-200 bg-white hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p
                className="mb-6 leading-relaxed"
                style={{ color: "var(--pure-black)" }}
              >
                {testimonial.content}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold" style={{ color: "var(--pure-black)" }}>
                  {testimonial.name}
                </p>
                <p className="text-sm" style={{ color: "var(--charcoal)" }}>
                  {testimonial.business}
                </p>
                <p className="text-xs" style={{ color: "var(--charcoal)" }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
