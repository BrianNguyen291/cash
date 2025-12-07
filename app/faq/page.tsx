import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-teal-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">常見問題</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">了解關於刷卡換現金服務的常見問題與解答</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>刷卡換現金常見問題</CardTitle>
              <CardDescription>以下是客戶最常詢問的問題與解答</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium">刷卡換現金是否合法？</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">是的，我們的服務完全合法。</p>
                    <p className="mb-2 font-semibold bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-lg border-l-4 border-amber-500">
                      刷卡購物，是指陪同去指定商家購買商品，再販售給我們，折數高價回收，合法收購。
                    </p>
                    <p>
                      我們絕不直接刷卡換現金，而是透過實體商品交易，確保每筆交易合法有保障。每次交易都會有完整的購物憑證和商品交易記錄，保障您的權益。
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium">手續費怎麼計算？</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      手續費會根據交易金額大小而有所不同。請直接與我們的專員聯繫，我們會根據您的需求提供最優惠的方案。一般而言，金額越大，手續費率越優惠。
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium">多久可以拿到現金？</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      刷完卡並販售商品給我們後，您可以立即拿到現金！整個過程快速高效，無需等待。我們理解客戶對於資金週轉的急迫性，因此確保交易流程簡便快速。
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium">跟信用卡預借現金有什麼差別？</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      信用卡預借現金通常需要較長的處理時間，且手續費率較高（一般為3-5%）。此外，預借現金會立即產生利息，且會影響您的信用評分。
                    </p>
                    <p className="mt-2">
                      而我們的服務提供更優惠的費率，並且可以立即拿到現金，無需等待處理時間。同時，因為是正常的刷卡消費，不會對您的信用評分產生負面影響。
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-medium">需要準備哪些文件？</AccordionTrigger>
                  <AccordionContent>
                    <p>您只需要準備：</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>有效的信用卡</li>
                      <li>身分證明文件</li>
                    </ul>
                    <p className="mt-2">我們的流程簡單便捷，無需繁複的文件準備。</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-medium">可以使用哪些銀行的信用卡？</AccordionTrigger>
                  <AccordionContent>
                    <p>我們接受各大銀行發行的信用卡，包括：</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>國內主要銀行（如國泰世華、台新、中信、玉山等）</li>
                      <li>外商銀行（如花旗、匯豐等）</li>
                      <li>各類聯名卡</li>
                    </ul>
                    <p className="mt-2">只要您的信用卡有足夠額度，基本上都可以使用我們的服務。</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-bold mb-4">還有其他問題？</h2>
            <p className="text-gray-600 mb-4">
              如果您有任何其他問題或需要更詳細的解釋，請隨時聯繫我們的客服團隊。我們很樂意為您提供協助。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-500 hover:bg-green-600">
                <Link href="https://lin.ee/CBrjtvjX" target="_blank" className="flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  LINE諮詢
                </Link>
              </Button>
              <Button variant="outline">
                <Link href="/#contact" className="flex items-center">
                  聯絡我們
                </Link>
              </Button>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">準備好開始了嗎？</h2>
            <p className="text-gray-600 mb-6">立即申請我們的刷卡換現金服務，快速解決您的資金需求。</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/#contact">立即申請</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

