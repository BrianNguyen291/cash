import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export function MortgageHeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/mortgage-hero.jpeg"
          alt="Beautiful home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            專業房屋貸款服務
            <br />
            <span className="text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">一胎、二胎皆可辦理</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            快速審核・合法安全・立即諮詢
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-4 max-w-md sm:max-w-none mx-auto">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto shadow-xl w-full sm:w-auto"
              asChild
            >
              <Link href="https://lin.ee/CBrjtvjX" target="_blank">
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                立即諮詢
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto backdrop-blur-sm shadow-xl w-full sm:w-auto"
              asChild
            >
              <Link href="#cases">
                查看案例
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:flex">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
