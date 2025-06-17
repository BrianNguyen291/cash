import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { FloatingButtons } from "@/components/floating-buttons"
import GoogleTag from "@/components/google-tag"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "台北、新北、桃園刷卡換現金｜快速到帳、安全合法，立即申請",
  description:
    "台北、新北、桃園提供安全合法的刷卡換現金服務，快速到帳，手續費優惠，多家銀行信用卡皆可使用。陪同去指定商家購買商品，再販售給我們，折數高價回收，合法收購。",
  manifest: "/manifest.json",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <GoogleTag />
        <Header />
        {children}
        <FloatingButtons />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}