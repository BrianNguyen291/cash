import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Handshake, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export function MortgagePartnershipSection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake className="h-8 w-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">廠商配合與團購合作</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">誠摯歡迎合作夥伴</CardTitle>
              <CardDescription className="text-white/80 text-base">
                我們誠摯歡迎廠商或團體合作，共同推廣金融方案
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-white/90 leading-relaxed">
                可提供配合專案、客製化貸款服務。無論您是企業主、團購主揪，或是想為員工提供福利的公司，我們都能為您量身打造最適合的金融解決方案。
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-auto py-4" asChild>
                  <Link href="https://line.me/ti/p/JOfQlDWkEp" target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    加入 LINE 洽談
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 h-auto py-4"
                  asChild
                >
                  <Link href="mailto:ilove265615@yahoo.com.tw">
                    <Mail className="mr-2 h-5 w-5" />
                    Email 聯繫
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
