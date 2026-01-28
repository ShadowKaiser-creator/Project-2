"use client"

import { Crown, Plane, Building2, Heart, Mountain, Headphones } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Crown,
    title: "Bespoke Luxury Itineraries",
    shortDescription: "Journeys tailored to your desires",
    fullDescription:
      "Every itinerary is a masterpiece crafted from scratch. Our travel architects spend weeks researching hidden gems, securing exclusive access, and designing experiences that reflect your unique preferences, interests, and travel style.",
    features: [
      "Personalized consultation process",
      "Hand-selected accommodations",
      "Private guides and experiences",
      "Flexible, adaptive scheduling",
    ],
    image: "/santorini-luxury.jpg",
  },
  {
    icon: Plane,
    title: "Private Jets & Elite Transportation",
    shortDescription: "Seamless travel worldwide",
    fullDescription:
      "Travel on your terms with our fleet of private aircraft, luxury yachts, and chauffeured vehicles. From intercontinental journeys to island-hopping adventures, experience the freedom of private transportation without compromise.",
    features: [
      "Global private jet access",
      "Luxury yacht charters",
      "VIP airport services",
      "Armored vehicle options",
    ],
    image: "/private-jet.jpg",
  },
  {
    icon: Building2,
    title: "Palace, Villa & Private Island Stays",
    shortDescription: "The world's most exclusive residences",
    fullDescription:
      "Sleep where history was made. Our collection includes heritage palaces, cliff-top villas, private islands, and residences that never appear on booking platforms. Each property is vetted to meet our exacting standards of luxury, service, and authenticity.",
    features: [
      "Historic palace stays",
      "Private island rentals",
      "Ultra-luxury villa collection",
      "Royal suite experiences",
    ],
    image: "/rajasthan-palace.jpg",
  },
  {
    icon: Heart,
    title: "Medical & Wellness Concierge Travel",
    shortDescription: "World-class wellness with discretion",
    fullDescription:
      "Combine transformative wellness experiences with the highest levels of privacy and care. From exclusive retreat centers to medical tourism with top specialists, we coordinate every detail of your wellness journey.",
    features: [
      "Elite wellness retreats",
      "Medical tourism coordination",
      "Recovery & rejuvenation programs",
      "Confidential health travel",
    ],
    image: "/wellness-spa.jpg",
  },
  {
    icon: Mountain,
    title: "Adventure-Luxe Experiences",
    shortDescription: "Adrenaline meets refinement",
    fullDescription:
      "For those who seek extraordinary experiences, we curate adventures that push boundaries while maintaining the highest levels of comfort and safety. Helicopter skiing, private expeditions, and once-in-a-lifetime encounters await.",
    features: [
      "Helicopter expeditions",
      "Private wildlife encounters",
      "Extreme sports with elite guides",
      "Remote destination access",
    ],
    image: "/swiss-alps-chalet.jpg",
  },
  {
    icon: Headphones,
    title: "24/7 Personal Concierge",
    shortDescription: "Support around the clock",
    fullDescription:
      "Your dedicated concierge team is available every moment of your journey. From last-minute restaurant reservations to emergency travel changes, we handle every request with speed, discretion, and the personal touch you deserve.",
    features: [
      "Dedicated travel manager",
      "Real-time itinerary support",
      "Emergency assistance",
      "Post-travel follow-up",
    ],
    image: "/luxury-yacht.jpg",
  },
]

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Our Services</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance text-foreground">
            Sovereign-Level Service
          </h2>
          <p className="text-base text-muted-foreground text-balance leading-relaxed">
            Every journey is an expression of your unique vision, executed with precision and discretion
            by our team of travel architects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-background transition-all duration-500 cursor-pointer group ${
                expandedService === index ? "md:col-span-2 lg:col-span-3" : ""
              }`}
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              {expandedService === index ? (
                // Expanded View
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 lg:bg-gradient-to-r lg:from-transparent lg:to-background" />
                  </div>
                  <div className="p-12 flex flex-col justify-center">
                    <div className="text-primary mb-6">
                      <service.icon className="h-10 w-10" strokeWidth={1} />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-light mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 text-xs tracking-[0.15em] uppercase text-primary hover:text-primary/80 transition-colors self-start">
                      Click to collapse
                    </button>
                  </div>
                </div>
              ) : (
                // Collapsed View
                <div className="p-12 hover:bg-secondary/50 transition-colors duration-500 h-full">
                  <div className="text-primary mb-6">
                    <service.icon className="h-8 w-8" strokeWidth={1} />
                  </div>
                  <h3 className="font-serif text-xl font-light mb-4 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="text-xs tracking-[0.15em] uppercase text-primary/60 group-hover:text-primary transition-colors">
                    Learn more
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
