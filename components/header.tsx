"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { contactConfig } from "@/lib/config"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl shrink-0 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">刷卡換現金</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${contactConfig.phone}`} className="hidden sm:inline">{contactConfig.phone}</a>
            </Button>
            <Button variant="default" size="sm" className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
              <MessageCircle className="h-4 w-4" />
              <a href={contactConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:inline">
                加入LINE
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
              <div className="flex flex-col gap-3">
                <Button asChild variant="outline" size="lg" className="justify-start">
                  <a href={`tel:${contactConfig.phone}`} className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {contactConfig.phone}
                  </a>
                </Button>
                <Button asChild size="lg" className="justify-start bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                  <a 
                    href={contactConfig.lineUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    加入LINE
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

