import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, MapPin } from "lucide-react"
import Link from "next/link"

export function MortgageContactFooter() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <p className="text-background/70 text-lg">專業房屋貸款服務</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-background/80">服務地區：台北・新北・桃園</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <Link
                    href="mailto:ilove265615@yahoo.com.tw"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    ilove265615@yahoo.com.tw
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-bold mb-4">立即聯繫我們</h4>
                <p className="text-background/70 leading-relaxed mb-6">專業團隊隨時為您服務，提供最適合的貸款方案</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="https://line.me/ti/p/7Gm6J31NKY" target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    LINE 諮詢
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/10 hover:bg-background/20 text-background border-background/30"
                  asChild
                >
                  <Link href="mailto:ilove265615@yahoo.com.tw">
                    <Mail className="mr-2 h-5 w-5" />
                    Email
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
