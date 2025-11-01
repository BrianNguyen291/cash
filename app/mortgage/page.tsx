import { MortgageHeroSection } from "@/components/mortgage/hero-section"
import { MortgageAboutSection } from "@/components/mortgage/about-section"
import { MortgageServicesSection } from "@/components/mortgage/services-section"
import { MortgageCaseStudiesSection } from "@/components/mortgage/case-studies-section"
import { MortgageQASection } from "@/components/mortgage/qa-section"
import { MortgagePartnershipSection } from "@/components/mortgage/partnership-section"
import { MortgageContactFooter } from "@/components/mortgage/contact-footer"

export default function MortgagePage() {
  return (
    <main className="min-h-screen">
      <MortgageHeroSection />
      <MortgageAboutSection />
      <MortgageServicesSection />
      <MortgageCaseStudiesSection />
      <MortgageQASection />
      <MortgagePartnershipSection />
      <MortgageContactFooter />
    </main>
  )
}
