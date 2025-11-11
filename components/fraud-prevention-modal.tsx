"use client"

import { useState, useEffect } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export function FraudPreventionModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Show modal after a short delay on page load
    const timer = setTimeout(() => {
      setOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        {/* Custom Blurred Overlay */}
        <DialogOverlay className="backdrop-blur-md bg-black/70" />
        {/* Custom Dialog Content */}
        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 w-[calc(100%-2rem)] sm:w-full max-w-2xl max-h-[90vh] overflow-y-auto",
            "translate-x-[-50%] translate-y-[-50%]",
            "bg-white rounded-xl shadow-2xl p-6 md:p-8",
            "border-0",
            "duration-200",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
            "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
          )}
        >
          {/* Custom Close Button - White X in Black Circle */}
          <DialogPrimitive.Close
            className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="關閉"
          >
            <X className="h-5 w-5" />
          </DialogPrimitive.Close>

          <div className="space-y-6 text-left pr-4">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              防詐提醒
            </h2>

            {/* Introduction Paragraphs */}
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                好好刷的業務模式是簡單明瞭的：消費者使用信用卡購買商品後，可以將商品出售給我們，並獲得現金。
              </p>
              <p>
                <span className="font-bold text-red-600">
                  強烈建議消費者不要聽信他人的指示或介紹
                </span>
                ，尤其是那些聲稱與我們有合作關係的個人或公司，避免財務損失。
              </p>
              <p>
                在這裡，好好刷提供幾個保護自己的建議：
              </p>
            </div>

            {/* Numbered List */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">確認來源：</p>
                  <p className="text-gray-800">
                    進行任何交易前，請務必查證對方身份與業務背景。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">保持警覺：</p>
                  <p className="text-gray-800">
                    謹慎面對任何要求提供個人資訊或付款的請求。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">尋求專業意見：</p>
                  <p className="text-gray-800">
                    不確定時，請諮詢專業人士，以辨別真偽。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">報告可疑行為：</p>
                  <p className="text-gray-800">
                    發現詐騙請立即向相關機構檢舉。
                  </p>
                </div>
              </div>
            </div>

            {/* Concluding Paragraph */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-gray-800 leading-relaxed">
                本公司始終秉持誠信經營原則，致力提供安全交易環境，請保持理智，避免成為詐騙受害者。
              </p>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  )
}

