const steps = [
  {
    number: "01",
    title: "Private Discovery Call",
    description:
      "Begin with an intimate 30-minute consultation where we understand your vision, preferences, travel history, and aspirations. We listen first, then craft solutions tailored to your unique desires.",
    details: ["Video or phone consultation", "Preference profiling", "Vision development"],
  },
  {
    number: "02",
    title: "Curated Proposal",
    description:
      "Within 48-72 hours, receive a bespoke itinerary crafted by our expert travel architects. Every detail is researched, every experience vetted, every moment designed to exceed expectations.",
    details: ["Detailed day-by-day itinerary", "Accommodation options", "Experience recommendations"],
  },
  {
    number: "03",
    title: "Refinement & Booking",
    description:
      "Collaborate with your dedicated concierge to perfect every detail. We refine until the experience matches your exact vision, then handle all bookings and logistics seamlessly.",
    details: ["Unlimited revisions", "Full concierge booking", "Secure payment processing"],
  },
  {
    number: "04",
    title: "Seamless Journey",
    description:
      "Embark on your journey with complete peace of mind. Your dedicated concierge remains available 24/7, handling any requests, changes, or special moments throughout your travels.",
    details: ["24/7 support hotline", "Real-time assistance", "Local concierge coordination"],
  },
]

export function Journey() {
  return (
    <section id="journey" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">The Process</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance text-foreground">
            From Vision to
            <span className="italic"> Reality</span>
          </h2>
          <p className="text-base text-muted-foreground text-balance leading-relaxed">
            A seamless four-step process designed to transform your travel aspirations into
            extraordinary experiences. Every journey begins with a conversation.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number Circle */}
                <div className="relative z-10 mb-8">
                  <div className="w-16 h-16 mx-auto lg:mx-0 border border-border bg-background flex items-center justify-center group-hover:border-primary transition-colors duration-500">
                    <span className="font-serif text-2xl font-light text-primary">{step.number}</span>
                  </div>
                </div>

                <div className="space-y-4 text-center lg:text-left">
                  <h3 className="font-serif text-xl font-light text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                  {/* Details */}
                  <ul className="pt-4 space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-foreground/60 justify-center lg:justify-start">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">Ready to begin your journey?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-primary hover:text-primary/80 transition-colors border-b border-primary pb-1"
          >
            Schedule Your Discovery Call
          </a>
        </div>
      </div>
    </section>
  )
}
