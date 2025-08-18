"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp, MessageCircle, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ContactForm } from "@/components/contact-form"

export function FloatingButtons() {
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

      {/* Contact Button */}
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
                <a href="tel:0907095632" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  立即撥打: 0907095632
                </a>
              </Button>
              <Button asChild size="lg" className="justify-start">
                <a 
                  href="https://line.me/ti/p/6FCezRNRX7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  LINE 諮詢: bbgc6440
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
    </div>
  )
} 