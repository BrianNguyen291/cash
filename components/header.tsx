"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">刷卡換現金</Link>
        <nav className="flex items-center gap-4">
          <Link href="/services" className="text-sm hover:text-primary">服務介紹</Link>
          <Link href="/faq" className="text-sm hover:text-primary">常見問題</Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:0907095632">0907095632</a>
            </Button>
            <Button variant="default" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              <a href="https://line.me/ti/p/5rb8ChOuei" target="_blank" rel="noopener noreferrer">
                LINE: bbgc6440
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

