import { AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface LegalNoticeProps {
  className?: string
}

export function LegalNotice({ className }: LegalNoticeProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-lg"></div>
      <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-lg border-2 border-yellow-300/50">
        <div className="flex items-start gap-4">
          <div className="hidden sm:block">
            <AlertTriangle className="h-8 w-8 text-yellow-300" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-3">重要服務說明</h3>
            <div className="space-y-2 text-white/90">
              <p className="text-lg sm:text-xl font-medium">
                刷卡購物，是指陪同去指定商家購買商品，再販售給我們，折數高價回收，合法收購。
              </p>
              <p className="text-sm sm:text-base opacity-90">
                我們絕不直接刷卡換現金，而是透過實體商品交易，確保每筆交易合法有保障。每次交易都會有完整的購物憑證和商品交易記錄。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

