"use client"

import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { Suspense, useEffect } from "react"

const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

function GoogleTag() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      pageview(pathname)
    }
  }, [pathname, searchParams])

  if (!GTM_ID) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleTagEvents />
      </Suspense>
    </>
  )
}

export function GoogleTagEvents() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Event snippet for line conversion page
      if ((e.target as Element).closest("a[href*='line.me']")) {
        event({
          action: "conversion",
          params: {
            send_to: process.env.NEXT_PUBLIC_LINE_CONVERSION_LABEL,
          },
        })
        console.log(
          "✅ LINE conversion event triggered",
          process.env.NEXT_PUBLIC_LINE_CONVERSION_LABEL
        )
      }
      // Event snippet for Phone conversion page
      else if ((e.target as Element).closest("a[href*='tel:']")) {
        event({
          action: "conversion",
          params: {
            send_to: process.env.NEXT_PUBLIC_PHONE_CONVERSION_LABEL,
          },
        })
        console.log(
          "✅ Phone conversion event triggered",
          process.env.NEXT_PUBLIC_PHONE_CONVERSION_LABEL
        )
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
          const toastTitles = document.querySelectorAll(
            '[role="status"] [data-radix-toast-title], [role="status"] div > div:first-child'
          )
          let formSubmitted = false

          toastTitles.forEach((element) => {
            if (element.textContent?.includes("表單已送出")) {
              formSubmitted = true
            }
          })

          if (formSubmitted) {
            event({
              action: "conversion",
              params: {
                send_to: process.env.NEXT_PUBLIC_FORM_CONVERSION_LABEL,
              },
            })
            console.log(
              "✅ Form submission conversion event triggered",
              process.env.NEXT_PUBLIC_FORM_CONVERSION_LABEL
            )
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

export function pageview(url: string) {
  if (typeof window.gtag !== "function") {
    return
  }
  window.gtag("config", GTM_ID as string, {
    page_path: url,
  })
}

type GTagEvent = {
  action: string
  params: {
    [key: string]: any
  }
}

export const event = ({ action, params }: GTagEvent) => {
  if (typeof window.gtag !== "function") {
    return
  }
  window.gtag("event", action, params)
}

export default GoogleTag

declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void
  }
} 