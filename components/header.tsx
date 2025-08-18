"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl shrink-0">刷卡換現金</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/services" className="text-sm hover:text-primary">服務介紹</Link>
          <Link href="/faq" className="text-sm hover:text-primary">常見問題</Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:0907095632" className="hidden sm:inline">0907095632</a>
            </Button>
            <Button variant="default" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              <a href="https://line.me/ti/p/6FCezRNRX7" target="_blank" rel="noopener noreferrer" className="hidden sm:inline">
                LINE: bbgc6440
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="shrink-0">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] sm:w-[385px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link 
                href="/services" 
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                服務介紹
              </Link>
              <Link 
                href="/faq" 
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                常見問題
              </Link>
              <div className="flex flex-col gap-3 mt-4">
                <Button asChild variant="outline" size="lg" className="justify-start">
                  <a href="tel:0907095632" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    0907095632
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
                    LINE: bbgc6440
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

