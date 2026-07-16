import { DynamicBackground } from "@/components/dynamic-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutPilates } from "@/components/about-pilates"
import { Differentials } from "@/components/differentials"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <DynamicBackground />
      <Navigation />
      <HeroSection />
      <AboutPilates />
      <Differentials />
      <Gallery />
      <Testimonials />
      <Faq />
      <ContactSection />
      <SiteFooter />
      <WhatsappFloat />
    </main>
  )
}
