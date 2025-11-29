import { AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface LegalNoticeProps {
  className?: string
}

export function LegalNotice({ className }: LegalNoticeProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl"></div>
      <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl border-2 border-amber-400 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="hidden sm:block">
            <AlertTriangle className="h-8 w-8 text-amber-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-700 mb-3">重要服務說明</h3>
            <div className="space-y-2 text-gray-700">
              <p className="text-lg sm:text-xl font-medium">
                刷卡購物，是指陪同去指定商家購買商品，再販售給我們，折數高價回收，合法收購。
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                我們絕不直接刷卡換現金，而是透過實體商品交易，確保每筆交易合法有保障。每次交易都會有完整的購物憑證和商品交易記錄。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

