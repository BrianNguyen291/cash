"use client"

import React, { useEffect } from "react"

export function GoogleTag() {
  useEffect(() => {
    // Load Google Tag Manager script
    const script1 = document.createElement("script")
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-649643647"
    script1.async = true
    document.head.appendChild(script1)

    // Initialize gtag using Google's official implementation
    window.dataLayer = window.dataLayer || []
    // @ts-ignore - gtag function is defined by Google's script
    window.gtag = function() { window.dataLayer.push(arguments) }
    // @ts-ignore - gtag is called with arguments from Google's script
    window.gtag('js', new Date())
    // @ts-ignore - gtag is called with arguments from Google's script
    window.gtag('config', 'AW-649643647')
    
    console.log("✅ Google Tag Manager script loaded successfully")

    // Set up event listeners
    const handleClick = (e: MouseEvent) => {
      // Event snippet for line conversion page
      if ((e.target as Element).closest("a[href*='line.me']")) {
        // @ts-ignore - gtag is called with arguments from Google's script
        window.gtag("event", "conversion", { send_to: "AW-649643647/7VGGCKjugNMaEP-M47UC" })
        console.log("✅ LINE conversion event triggered - AW-649643647/7VGGCKjugNMaEP-M47UC")
      }
      // Event snippet for Phone conversion page
      else if ((e.target as Element).closest("a[href*='tel:']")) {
        // @ts-ignore - gtag is called with arguments from Google's script
        window.gtag("event", "conversion", { send_to: "AW-649643647/CJGUCKXugNMaEP-M47UC" })
        console.log("✅ Phone conversion event triggered - AW-649643647/CJGUCKXugNMaEP-M47UC")
      }

      const btn = (e.target as Element).closest('button[type="submit"]')
      if (btn === null) return
      const form = btn.closest("form")
      if (!form) return
      const phone = form.querySelector('input[id="phone"]')
      if (!phone) return

      if (form.checkValidity() === true) {
        console.log("🔍 Form submitted, waiting for success message...")
        const visibleID = setInterval(() => {
          // Look for Radix UI Toast title elements with "表單已送出" text
          const toastTitles = document.querySelectorAll('[role="status"] [data-radix-toast-title], [role="status"] div > div:first-child')
          let formSubmitted = false
          
          toastTitles.forEach(element => {
            if (element.textContent?.includes("表單已送出")) {
              formSubmitted = true
            }
          })
          
          if (formSubmitted) {
            // @ts-ignore - gtag is called with arguments from Google's script
            window.gtag("event", "conversion", { send_to: "AW-649643647/hwb3CKvugNMaEP-M47UC" })
            console.log("✅ Form submission conversion event triggered - AW-649643647/hwb3CKvugNMaEP-M47UC")
            clearInterval(visibleID)
          }
        }, 1000)
      }
    }

    document.addEventListener("click", handleClick)
    console.log("✅ Google Tag click event listeners initialized")

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
    gtag: any
  }
} 