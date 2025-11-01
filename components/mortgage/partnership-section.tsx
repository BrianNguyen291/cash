import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Handshake, Mail } from "lucide-react"
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
              <CardTitle className="text-2xl text-white">廠商配合團購合作</CardTitle>
              <CardDescription className="text-white/80 text-base">
                歡迎廠商及團體與我們合作，共同開創更多商機
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 space-y-6">
              <div className="pt-4">
                <p className="text-white/90 mb-4 text-center">聯絡信箱</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Mail className="h-5 w-5 text-white/80" />
                  <a 
                    href="mailto:ilove265615@yahoo.com.tw" 
                    className="text-white text-lg font-medium hover:text-blue-300 transition-colors"
                  >
                    ilove265615@yahoo.com.tw
                  </a>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 h-auto py-4 w-full"
                  asChild
                >
                  <Link href="mailto:ilove265615@yahoo.com.tw">
                    <Mail className="mr-2 h-5 w-5" />
                    Email 聯繫我們
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
