"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown, Gem, ArrowRight } from "lucide-react"

const tiers = [
  {
    name: "Essential",
    tagline: "Middle Class Families",
    planningFee: "₹2,000 – ₹5,000",
    icon: Star,
    featured: false,
    description:
      "Perfect for families seeking well-organized travel without the hassle. We handle the essentials so you can focus on creating memories.",
    services: [
      "Detailed day-by-day itinerary",
      "Visa assistance & documentation",
      "Flight booking optimization",
      "Hotel recommendations & booking",
      "Local transport arrangements",
      "Emergency contact support",
      "Travel insurance guidance",
      "Packing checklist & tips",
    ],
    tripBudget: "₹50,000 – ₹2,00,000",
    idealFor: "Weekend getaways, domestic trips, budget-conscious international travel",
  },
  {
    name: "Premium",
    tagline: "Upper Middle Class",
    planningFee: "₹10,000 – ₹25,000",
    icon: Crown,
    featured: true,
    description:
      "Elevated travel planning with personalized attention and curated experiences. Your journey, thoughtfully designed by experts.",
    services: [
      "Custom day-by-day itineraries",
      "Handpicked boutique hotels & resorts",
      "Curated restaurant reservations",
      "24/7 WhatsApp support during trip",
      "Private airport transfers",
      "Skip-the-line attraction passes",
      "Local guide arrangements",
      "Special occasion arrangements",
      "Travel concierge on-call",
      "Post-trip photo book curation",
    ],
    tripBudget: "₹2,00,000 – ₹10,00,000",
    idealFor: "Anniversary trips, family vacations, milestone celebrations, honeymoons",
  },
  {
    name: "Sovereign",
    tagline: "Elite Class",
    planningFee: "₹50,000 – ₹2,00,000+",
    icon: Gem,
    featured: false,
    description:
      "Bespoke lifestyle management for those who demand the extraordinary. No request too bold, no experience out of reach.",
    services: [
      "Dedicated travel architect",
      "Private jet & yacht coordination",
      "Palace & private island access",
      "Exclusive venue bookings",
      "Celebrity chef experiences",
      "After-hours museum access",
      "Security & privacy arrangements",
      "Personal shopping assistance",
      "Medical travel coordination",
      "Multi-generational trip planning",
      "Event & celebration management",
      "Lifestyle management services",
    ],
    tripBudget: "₹10,00,000+",
    idealFor: "Ultra-luxury experiences, private celebrations, corporate retreats, legacy trips",
  },
]

export function PricingTiers() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Investment Tiers</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance text-foreground">
            Tailored to Your
            <span className="italic"> Journey</span>
          </h2>
          <p className="text-base text-muted-foreground text-balance leading-relaxed">
            From thoughtfully planned family vacations to extraordinary bespoke experiences, 
            we offer service tiers designed to match your travel aspirations and investment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-card border transition-all duration-500 ${
                tier.featured
                  ? "border-primary/50 md:-mt-4 md:mb-4"
                  : "border-border hover:border-primary/30"
              }`}
              onMouseEnter={() => setHoveredTier(index)}
              onMouseLeave={() => setHoveredTier(null)}
            >
              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1.5">
                  <span className="text-xs tracking-[0.2em] uppercase font-medium">Most Popular</span>
                </div>
              )}

              <div className="p-8 lg:p-10">
                {/* Icon & Name */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 flex items-center justify-center ${
                      tier.featured ? "bg-primary/20" : "bg-secondary"
                    }`}
                  >
                    <tier.icon
                      className={`h-6 w-6 ${tier.featured ? "text-primary" : "text-foreground/70"}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground">{tier.name}</h3>
                    <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground">
                      {tier.tagline}
                    </p>
                  </div>
                </div>

                {/* Planning Fee */}
                <div className="mb-6 pb-6 border-b border-border">
                  <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2">
                    Planning Fee
                  </p>
                  <p className="font-serif text-2xl lg:text-3xl text-foreground">{tier.planningFee}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Trip Budget: {tier.tripBudget}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Services List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs tracking-[0.1em] uppercase text-foreground/70 mb-4">
                    What&apos;s Included
                  </p>
                  {tier.services.map((service, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{service}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="mb-8 p-4 bg-secondary/50">
                  <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2">
                    Ideal For
                  </p>
                  <p className="text-sm text-foreground/80">{tier.idealFor}</p>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={scrollToContact}
                  className={`w-full h-14 text-xs tracking-[0.15em] uppercase group ${
                    tier.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-transparent border border-foreground/20 text-foreground hover:bg-foreground/5"
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Planning fees are one-time charges for our curation and coordination services. 
            Actual trip costs (flights, hotels, experiences) are additional and vary based on your preferences.
            <span className="block mt-2 text-foreground/70">
              All tiers include complimentary consultation to understand your vision.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
