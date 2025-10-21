"use client"

import { Globe, Bell, Zap, CheckCircle } from "lucide-react"

const techs = [
  {
    icon: Globe,
    title: "Multilingual AI",
    description: "Sinhala, Tamil & English support",
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "WhatsApp & Email notifications",
  },
  {
    icon: Zap,
    title: "Predictive Analytics",
    description: "Anticipate reputation trends",
  },
  {
    icon: CheckCircle,
    title: "Human-Approved AI",
    description: "Smart response suggestions",
  },
]

export default function Technology() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Advanced Technology Stack</h2>
          <p className="text-lg text-muted-foreground">
            Built with cutting-edge AI and real-time monitoring capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, index) => {
            const Icon = tech.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
