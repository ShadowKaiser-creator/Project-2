"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-primary">Stay Connected</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-balance text-foreground">
              Private Invitations
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Receive exclusive access to new experiences, limited offerings, and curated insights
              reserved for our inner circle. Delivered discreetly to your inbox.
            </p>
          </div>

          {isSubmitted ? (
            <div className="max-w-md mx-auto bg-card border border-border p-8 space-y-4">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <p className="text-foreground font-serif text-lg">Welcome to the Inner Circle</p>
              <p className="text-sm text-muted-foreground">
                You'll receive our exclusive communications shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 bg-card border-border px-6 text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 h-14 shrink-0"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </form>
          )}

          <p className="text-xs text-muted-foreground">
            Your privacy is sacred. We never share your information and you may unsubscribe at any
            time.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border max-w-3xl mx-auto">
            <div className="space-y-2">
              <p className="font-serif text-lg text-foreground">Early Access</p>
              <p className="text-sm text-muted-foreground">
                First look at new destinations and experiences
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-lg text-foreground">Exclusive Offers</p>
              <p className="text-sm text-muted-foreground">
                Member-only rates and complimentary upgrades
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-lg text-foreground">Curated Content</p>
              <p className="text-sm text-muted-foreground">
                Travel insights from our expert concierges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
