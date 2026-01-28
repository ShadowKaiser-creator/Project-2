import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { PricingTiers } from "@/components/pricing-tiers"
import { DetailedPackages } from "@/components/detailed-packages"
import { Journey } from "@/components/journey"
import { Trust } from "@/components/trust"
import { Contact } from "@/components/contact"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <PricingTiers />
      <DetailedPackages />
      <Journey />
      <Trust />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  )
}
