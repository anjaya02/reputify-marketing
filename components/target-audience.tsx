"use client"

import { Coffee, UtensilsCrossed, Hotel, ShoppingBag, Stethoscope } from "lucide-react"

const audiences = [
  { icon: Coffee, name: "Cafes" },
  { icon: UtensilsCrossed, name: "Restaurants" },
  { icon: Hotel, name: "Hotels" },
  { icon: ShoppingBag, name: "Retail Stores" },
  { icon: Stethoscope, name: "Healthcare" },
]

export default function TargetAudience() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perfect for Your Business</h2>
          <p className="text-lg text-muted-foreground">Trusted by small and medium businesses across Sri Lanka</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors"
              >
                <Icon className="w-10 h-10 text-accent mb-3" />
                <p className="font-medium text-foreground text-center">{audience.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
