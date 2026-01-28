"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Phone, Mail, MapPin, Check } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelStyle: "",
    budget: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Check className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
                Thank You
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                Your inquiry has been received. A member of our concierge team will be in touch within
                24 hours to begin crafting your bespoke journey.
              </p>
            </div>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="px-8 py-6 text-xs tracking-[0.15em] uppercase border-foreground/20 text-foreground hover:bg-foreground/5 bg-transparent"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - Info */}
          <div className="space-y-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Begin Your Journey</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance text-foreground">
                Request Your
                <span className="italic"> Private Consultation</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every journey begins with a conversation. Share your vision with us, and our travel
                architects will craft a bespoke proposal tailored exclusively to your desires.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Concierge Line</h3>
                  <p className="text-muted-foreground">+91 89792 01444</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Private Inquiries</h3>
                  <p className="text-muted-foreground">concierge@noirsovereign.com</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Private Offices</h3>
                  <p className="text-muted-foreground">New York • London • Dubai • Singapore</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">By appointment only</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 overflow-hidden border border-border">
              <img
                src="/luxury-yacht.jpg"
                alt="Luxury travel experience"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs tracking-[0.15em] uppercase text-primary mb-2">
                  Response Time
                </p>
                <p className="font-serif text-2xl text-foreground">Within 24 Hours</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="h-14 bg-secondary border-border px-4 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="h-14 bg-secondary border-border px-4 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-14 bg-secondary border-border px-4 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-14 bg-secondary border-border px-4 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Travel Style & Budget */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="travelStyle"
                    className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                  >
                    Travel Style
                  </label>
                  <select
                    id="travelStyle"
                    name="travelStyle"
                    value={formData.travelStyle}
                    onChange={handleChange}
                    className="w-full h-14 bg-secondary border border-border px-4 text-foreground appearance-none cursor-pointer"
                  >
                    <option value="">Select style...</option>
                    <option value="adventure">Adventure-Luxe</option>
                    <option value="wellness">Wellness & Retreat</option>
                    <option value="cultural">Cultural Immersion</option>
                    <option value="romantic">Romantic Escape</option>
                    <option value="family">Family Journey</option>
                    <option value="celebration">Celebration & Events</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="budget"
                    className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full h-14 bg-secondary border border-border px-4 text-foreground appearance-none cursor-pointer"
                  >
                    <option value="">Select range...</option>
                    <option value="50k-2L">₹50,000 - ₹2,00,000 (Essential)</option>
                    <option value="2L-5L">₹2,00,000 - ₹5,00,000 (Premium)</option>
                    <option value="5L-10L">₹5,00,000 - ₹10,00,000 (Premium+)</option>
                    <option value="10L-25L">₹10,00,000 - ₹25,00,000 (Sovereign)</option>
                    <option value="25L+">₹25,00,000+ (Ultra Sovereign)</option>
                    <option value="unlimited">No Budget Constraints</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                >
                  Tell Us About Your Dream Journey
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your ideal travel experience, destinations of interest, special occasions, or any specific requirements..."
                  className="bg-secondary border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground">
                Your information is protected by our strict privacy policy. We never share client data
                with third parties.
              </p>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-xs tracking-[0.15em] uppercase group"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Request Private Consultation
                    <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
