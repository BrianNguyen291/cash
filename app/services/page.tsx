import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, DollarSign, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-teal-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">服務介紹</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">了解我們的刷卡換現金服務流程與合法性</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Service Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">刷卡換現金流程</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4 shadow-lg">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <CardTitle>1. 實體購物</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  我們陪同您到指定的實體商家（如百貨公司、電子產品店等）進行購物，使用您的信用卡購買實體商品。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <CardTitle>2. 商品回收</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  購物完成後，我們以高折數回收您購買的商品，並立即支付現金給您，讓您快速取得所需資金。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>3. 安全合法</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  整個過程完全透明且合法，因為我們是透過實際的商品交易進行，而非直接將信用卡額度轉換為現金。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Legal Explanation */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">法規合規性說明</h2>

          <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 p-6 rounded-xl border-2 border-purple-100 max-w-4xl mx-auto shadow-lg">
            <div className="flex items-start mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">重要法規說明</h3>
                <p className="text-gray-700 mb-4">
                  刷卡換現金廠商若使用私人POS機雙卡卻沒有實際商品交易/販售，會觸犯稅捐稽徵法第41、43條，可能面臨嚴重處五年以下有期徒刑，併科新臺幣一千萬元以下罰金的罪責。
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
              <p className="text-purple-800 font-semibold">我們的服務確保：</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                <li>只在合法登記的商家進行刷卡</li>
                <li>每筆交易都有實際的商品購買</li>
                <li>提供完整的購買商品明細</li>
                <li>交易過程透明且合法</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg">
              <p className="text-gray-700">
                在辦理刷卡換現金時，我們堅持「刷卡是用來買實質商品的」原則，只會刷商場的POS機，並確認購買的商品明細，保障交易的合法性。您也可以到各縣市服務據點預約現場服務，讓我們在您指定的大賣場現買現換，保障雙方交易安全。
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">準備好開始了嗎？</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            如果您需要快速取得現金，我們的刷卡換現金服務是您的最佳選擇。流程簡單、快速到帳、完全合法。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg">
              <Link href="/#contact">立即申請</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/faq">了解更多</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

