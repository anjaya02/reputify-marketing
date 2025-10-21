"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTABanner() {
  const handleStartTrial = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-white"
      style={{ backgroundColor: "var(--dark-forest-green)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
          Ready to Transform Your Business Reputation?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join 50+ Sri Lankan businesses already using Reputify to manage their online reputation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleStartTrial}
            size="lg"
            className="gap-2 transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: "white", color: "var(--dark-forest-green)" }}
          >
            Start Your Free Trial
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 bg-transparent transition-all"
          >
            Schedule a Demo
          </Button>
        </div>
        <p className="text-sm opacity-75 mt-6">No credit card required. 14-day free trial. Cancel anytime.</p>
      </div>
    </section>
  )
}
