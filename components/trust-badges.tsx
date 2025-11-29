import { CheckCircle, Clock, Shield, ShoppingBag } from "lucide-react"
import Image from "next/image"

export function TrustBadges() {
  return (
    <section className="py-12 bg-gradient-to-b from-white via-purple-50/20 to-indigo-50/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">我們的服務保障</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300 hover:-translate-y-1">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/shopping-1.jpeg"
                alt="實體商家"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20"></div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">實體商家</h3>
            <p className="text-sm text-gray-600">在合法登記的實體商家進行交易，確保每筆消費都有完整憑證</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-teal-100 hover:border-teal-300 hover:-translate-y-1">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/transaction-1.jpeg"
                alt="快速付現"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-cyan-600/20"></div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">快速付現</h3>
            <p className="text-sm text-gray-600">商品回收後立即支付現金，讓您快速解決資金需求</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-100 hover:border-amber-300 hover:-translate-y-1">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/security-1.jpeg"
                alt="安全合法"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20"></div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">安全合法</h3>
            <p className="text-sm text-gray-600">嚴格遵守法規，確保交易安全有保障</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-indigo-100 hover:border-indigo-300 hover:-translate-y-1">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/business-1.jpeg"
                alt="專業服務"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">專業服務</h3>
            <p className="text-sm text-gray-600">經驗豐富的專業團隊，提供最優質的服務</p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl mx-auto bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border-2 border-purple-200 shadow-lg">
          <h3 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">我們的服務流程</h3>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center text-center mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center mb-2 shadow-lg">
                1
              </div>
              <p className="text-sm">
                告知專員
                <br />
                刷卡金額
              </p>
            </div>
            <div className="hidden md:block">→</div>
            <div className="flex flex-col items-center text-center mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center mb-2 shadow-lg">
                2
              </div>
              <p className="text-sm">
                洽談
                <br />
                手續費
              </p>
            </div>
            <div className="hidden md:block">→</div>
            <div className="flex flex-col items-center text-center mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center mb-2 shadow-lg">
                3
              </div>
              <p className="text-sm">
                陪同至
                <br />
                指定商家
              </p>
            </div>
            <div className="hidden md:block">→</div>
            <div className="flex flex-col items-center text-center mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center mb-2 shadow-lg">
                4
              </div>
              <p className="text-sm">
                購買
                <br />
                實體商品
              </p>
            </div>
            <div className="hidden md:block">→</div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center mb-2 shadow-lg">
                5
              </div>
              <p className="text-sm">
                商品回收
                <br />
                立即付現
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

