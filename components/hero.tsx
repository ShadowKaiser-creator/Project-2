"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-luxury-maldives.jpg"
          alt="Luxury overwater villas in the Maldives at sunset"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-10">
          {/* Tagline */}
          <p className="text-xs tracking-[0.3em] uppercase text-primary">
            Exclusive Travel Concierge Since 2008
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance text-foreground">
            Luxury, Curated
            <span className="block mt-2 italic">Without Compromise</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Bespoke journeys to the world's most extraordinary destinations. Private access, sovereign
            experiences, and meticulous attention to every detail—crafted exclusively for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-14 text-xs tracking-[0.15em] uppercase group"
            >
              Request a Private Itinerary
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsVideoModalOpen(true)}
              className="px-10 h-14 text-xs tracking-[0.15em] uppercase border-foreground/20 text-foreground hover:bg-foreground/5 bg-transparent"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Our Story
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-24 bg-border mx-auto mt-24" />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto mt-12">
          <div className="space-y-2">
            <div className="font-serif text-4xl md:text-5xl font-light text-foreground">50+</div>
            <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
              Private Destinations
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-serif text-4xl md:text-5xl font-light text-foreground">2,500+</div>
            <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
              Journeys Crafted
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-serif text-4xl md:text-5xl font-light text-foreground">100%</div>
            <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
              Bespoke Itineraries
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-serif text-4xl md:text-5xl font-light text-foreground">24/7</div>
            <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
              Concierge Support
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-foreground/60 hover:text-foreground text-xs tracking-[0.15em] uppercase"
            >
              Close
            </button>
            <div className="aspect-video bg-card border border-border flex items-center justify-center">
              <div className="text-center space-y-4">
                <Play className="h-16 w-16 text-primary mx-auto" />
                <p className="text-muted-foreground">Video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("services")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-[0.15em] uppercase">Explore</span>
          <div className="w-px h-8 bg-border animate-pulse" />
        </button>
      </div>
    </section>
  )
}
