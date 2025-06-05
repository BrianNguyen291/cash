"use client"

import React, { useEffect } from "react"

export function GoogleTag() {
  useEffect(() => {
    // Load Google Tag Manager script
    const script1 = document.createElement("script")
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-649643647"
    script1.async = true
    document.head.appendChild(script1)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", "AW-649643647")

    // Set up event listeners
    const handleClick = (e: MouseEvent) => {
      // Event snippet for line conversion page
      if ((e.target as Element).closest("a[href*='line.me']")) {
        gtag("event", "conversion", { send_to: "AW-649643647/7VGGCKjugNMaEP-M47UC" })
      }
      // Event snippet for Phone conversion page
      else if ((e.target as Element).closest("a[href*='tel:']")) {
        gtag("event", "conversion", { send_to: "AW-649643647/CJGUCKXugNMaEP-M47UC" })
      }

      const btn = (e.target as Element).closest('button[type="submit"]')
      if (btn === null) return
      const form = btn.closest("form")
      if (!form) return
      const phone = form.querySelector('input[id="phone"]')
      if (!phone) return

      if (form.checkValidity() === true) {
        const visibleID = setInterval(() => {
          const element = document.querySelector(
            "#contact > div > div > div:nth-child(3) > ol > li > div > div.text-sm.font-semibold"
          )
          if (element?.textContent?.indexOf("表單已送出") !== -1) {
            gtag("event", "conversion", { send_to: "AW-649643647/hwb3CKvugNMaEP-M47UC" })
            clearInterval(visibleID)
          }
        }, 1000)
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}

// Add this to make gtag available globally
declare global {
  interface Window {
    dataLayer: any[]
  }
} 