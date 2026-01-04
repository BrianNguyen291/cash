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
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl shrink-0">刷卡換現金</Link>
          <Link href="/mortgage" className="text-lg font-semibold hover:text-primary">房屋貸款</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:0933118656" className="hidden sm:inline">0933118656</a>
            </Button>
            <Button variant="default" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              <a href="https://lin.ee/b9s8rmG" target="_blank" rel="noopener noreferrer" className="hidden sm:inline">
                LINE: 309rgssv
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
                href="/mortgage"
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                房屋貸款
              </Link>
              <div className="flex flex-col gap-3 mt-4">
                <Button asChild variant="outline" size="lg" className="justify-start">
                  <a href="tel:0933118656" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    0933118656
                  </a>
                </Button>
                <Button asChild size="lg" className="justify-start">
                  <a
                    href="https://lin.ee/b9s8rmG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    LINE: 309rgssv
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

