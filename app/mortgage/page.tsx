import { MortgageHeroSection } from "@/components/mortgage/hero-section"
import { MortgageAboutSection } from "@/components/mortgage/about-section"
import { MortgageServicesSection } from "@/components/mortgage/services-section"
import { MortgageCaseStudiesSection } from "@/components/mortgage/case-studies-section"
import { MortgageQASection } from "@/components/mortgage/qa-section"

export default function MortgagePage() {
  return (
    <main className="min-h-screen">
      <MortgageHeroSection />
      <MortgageAboutSection />
      <MortgageServicesSection />
      <MortgageCaseStudiesSection />
      <MortgageQASection />
    </main>
  )
}
