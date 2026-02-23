import { Building2, Phone, Mail, MapPin, Clock, Calculator, Percent } from "lucide-react"
import Link from "next/link"

export function GlobalFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Company Info */}
            <div className="space-y-4">
              <h4 className="text-white text-lg font-bold flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-400" />
                耀躍科技有限公司
              </h4>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-gray-500 shrink-0">統一編號</span>
                  <span>50858529</span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-500 shrink-0 mt-0.5" />
                  <span>新北市三重區安慶街133號1F</span>
                </p>
                <p className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-gray-500 shrink-0 mt-0.5" />
                  <Link href="tel:0984123232" className="hover:text-white transition-colors">
                    0984-123-232
                  </Link>
                </p>
                <p className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-gray-500 shrink-0 mt-0.5" />
                  <Link href="mailto:ilove265615@yahoo.com.tw" className="hover:text-white transition-colors">
                    ilove265615@yahoo.com.tw
                  </Link>
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h4 className="text-white text-lg font-bold flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-400" />
                營業時間
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-gray-400">週一至週五</span>
                  <br />
                  <span>下午 2:00 至 晚上 8:00</span>
                </p>
                <p>
                  <span className="text-gray-400">週六</span>
                  <br />
                  <span>中午 12:00 至 晚上 6:00</span>
                </p>
                <p>
                  <span className="text-gray-400">週日</span>
                  <br />
                  <span>固定公休</span>
                </p>
                <p className="text-yellow-400 font-medium mt-2">
                  ※ 其餘時間採預約制
                </p>
              </div>
            </div>

            {/* Fee Rate */}
            <div className="space-y-4">
              <h4 className="text-white text-lg font-bold flex items-center gap-2">
                <Percent className="h-5 w-5 text-blue-400" />
                手續費利率範圍
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-2xl font-bold text-white">9％ ~ 15％</p>
                <p className="text-gray-400">依個案評估，提供最優惠費率</p>
                <p className="text-gray-400">最低承作金額：<span className="text-white font-semibold">50,000 元</span></p>
                <p className="text-gray-400">手續費評估額度計算：<span className="text-white font-semibold">最低 9 折起</span></p>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="space-y-4">
              <h4 className="text-white text-lg font-bold flex items-center gap-2">
                <Calculator className="h-5 w-5 text-blue-400" />
                試算範例
              </h4>
              <div className="bg-gray-800 rounded-lg p-4 text-sm space-y-2">
                <p>
                  王先生於特約商店刷卡購買了
                  <span className="text-white font-semibold"> 50,000 元</span>商品，
                  本公司以<span className="text-white font-semibold"> 9 折</span>（手續費 10%）的價格向王先生購買該商品，
                  王先生實際獲得現金
                  <span className="text-green-400 font-bold"> 45,000 元</span>。
                </p>
                <div className="border-t border-gray-700 pt-2 mt-2 space-y-1 text-gray-400">
                  <p>刷卡金額：50,000 元</p>
                  <p>手續費（10%）：5,000 元</p>
                  <p className="text-green-400 font-semibold">實拿現金：45,000 元</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} 耀躍科技有限公司 版權所有｜統一編號：50858529</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
