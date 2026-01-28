"use client"

import { useState } from "react"
import { Shield, Eye, Users, Lock, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const trustPoints = [
  {
    icon: Shield,
    title: "Vetted Partners",
    description:
      "Every property, guide, and service provider undergoes our rigorous vetting process. We maintain relationships spanning decades with the world's finest establishments.",
  },
  {
    icon: Eye,
    title: "Complete Discretion",
    description:
      "Your privacy is paramount. From anonymous bookings to confidential itineraries, every interaction is handled with the utmost discretion.",
  },
  {
    icon: Users,
    title: "Concierge-Only Access",
    description:
      "Unlock experiences unavailable through any other channel. Private viewings, closed-door events, and introductions that money alone cannot buy.",
  },
  {
    icon: Lock,
    title: "Secure & Confidential",
    description:
      "Enterprise-grade encryption protects your information. We never share client data, and all communications are secured end-to-end.",
  },
]

const testimonials = [
  {
    quote:
      "An experience that redefined what travel could be. Every moment was orchestrated to perfection, yet felt entirely spontaneous. Noir Sovereign understands that true luxury lies in the details others overlook.",
    author: "Jonathan M.",
    title: "Chairman, Private Equity",
    location: "New York",
    trip: "Mediterranean Yacht Charter",
  },
  {
    quote:
      "The level of discretion and attention to detail is unmatched. From securing impossible dinner reservations to arranging private museum viewings, they delivered experiences I didn't know were possible.",
    author: "Sofia R.",
    title: "Art Collector",
    location: "Geneva",
    trip: "European Art Tour",
  },
  {
    quote:
      "My family's safety and privacy are non-negotiable. Noir Sovereign handled every aspect of our month-long journey with the precision and confidentiality we require. Truly exceptional service.",
    author: "Ahmed K.",
    title: "Family Office Principal",
    location: "Dubai",
    trip: "Global Family Journey",
  },
  {
    quote:
      "From impossible reservations to private access at heritage sites, they deliver what others cannot. After years with other concierge services, Noir Sovereign is in a league of its own.",
    author: "Alexandra P.",
    title: "CEO, Tech Startup",
    location: "San Francisco",
    trip: "Japanese Cultural Immersion",
  },
]

export function Trust() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[currentTestimonial]

  return (
    <section className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Content */}
          <div className="space-y-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
                Trust & Authority
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance text-foreground">
                Trusted by the
                <span className="italic"> Discerning Few</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                For over 15 years, we've served executives, dignitaries, and private families who
                demand excellence without exception. Our commitment to discretion and quality has made
                us the trusted choice for those who expect nothing less than extraordinary.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-border">
              <div>
                <div className="font-serif text-3xl md:text-4xl font-light text-foreground">15+</div>
                <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-2">
                  Years of Excellence
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-light text-foreground">98%</div>
                <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-2">
                  Client Retention
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-light text-foreground">NDA</div>
                <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-2">
                  Protected Clients
                </div>
              </div>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {trustPoints.map((point, index) => (
                <div key={index} className="space-y-3">
                  <point.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-foreground">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-card border border-border p-10 md:p-12 space-y-8">
              <Quote className="h-10 w-10 text-primary/30" />

              <p className="font-serif text-xl md:text-2xl italic text-foreground/90 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="space-y-4">
                <div className="w-12 h-px bg-primary" />
                <div>
                  <p className="font-serif text-lg text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    {testimonial.location} — {testimonial.trip}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-primary" : "bg-border hover:bg-muted-foreground"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4 text-foreground" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4 text-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
