"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowUp, MessageCircle, Phone, Mail } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ContactForm } from "@/components/contact-form"

export function FloatingButtons() {
  const pathname = usePathname()
  const isMortgagePage = pathname?.startsWith("/mortgage")
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      {/* TOP Button */}
      <Button
        variant="default"
        size="icon"
        className={`rounded-full shadow-lg transition-all duration-300 ${
          showTopButton ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      {/* Contact Button - Different for Mortgage vs Cash */}
      {isMortgagePage ? (
        // Mortgage Page: Ringing Phone Icon with Collaboration Content
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 animate-pulse"
            >
              <Phone className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[90vw] sm:w-[540px] overflow-y-auto">
            <div className="py-6">
              <h2 className="text-2xl font-bold mb-6">合作洽談</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold mb-4">歡迎廠商配合與團購合作</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    如果您需要合作或配合，歡迎透過以下方式聯繫我們。我們將為您提供最適合的金融解決方案。
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="justify-start">
                    <a 
                      href="mailto:ilove265615@yahoo.com.tw" 
                      className="flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Email 聯繫: ilove265615@yahoo.com.tw
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        // Cash Page: Original MessageCircle with Contact Form
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="rounded-full shadow-lg bg-blue-500 hover:bg-blue-600"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[90vw] sm:w-[540px] overflow-y-auto">
            <div className="py-6">
              <h2 className="text-2xl font-bold mb-6">聯絡我們</h2>
              
              {/* Quick Contact Buttons */}
              <div className="flex flex-col gap-3 mb-8">
                <Button asChild variant="outline" size="lg" className="justify-start">
                  <a href="tel:0933118656" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    立即撥打: 0933118656
                  </a>
                </Button>
                <Button asChild size="lg" className="justify-start">
                  <a 
                    href="https://line.me/ti/p/JOfQlDWkEp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    LINE 諮詢: as63300
                  </a>
                </Button>
              </div>

              {/* Contact Form */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">填寫諮詢表單</h3>
                <ContactForm />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  )
} 