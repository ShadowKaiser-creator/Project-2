import { Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Bespoke Itineraries", href: "#services" },
    { label: "Private Jets", href: "#services" },
    { label: "Luxury Stays", href: "#services" },
    { label: "Wellness Travel", href: "#services" },
    { label: "24/7 Concierge", href: "#services" },
  ],
  destinations: [
    { label: "Europe", href: "#destinations" },
    { label: "Asia Pacific", href: "#destinations" },
    { label: "Middle East", href: "#destinations" },
    { label: "Africa", href: "#destinations" },
    { label: "Americas", href: "#destinations" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Partners", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-serif text-2xl tracking-[0.15em] uppercase text-foreground">
              Noir Sovereign
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Crafting extraordinary journeys for discerning travelers since 2008. Where luxury meets
              authenticity, and every detail is elevated to art.
            </p>
            <p className="font-serif text-lg text-foreground/80 italic">Travel, Elevated.</p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground mb-6">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border" />

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Noir Sovereign. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
