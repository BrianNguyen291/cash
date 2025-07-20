"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="py-16 bg-gray-100" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">常見問題</h2>

          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">刷卡換現金是否合法？</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="mb-2">是的，我們的服務完全合法。</p>
                <p className="mb-2 font-semibold bg-yellow-50 p-2 border-l-4 border-yellow-500">
                  刷卡購物，是指陪同去指定商家購買商品，再販售給我們，折數高價回收，合法收購。
                </p>
                <p>
                  我們絕不直接刷卡換現金，而是透過實體商品交易，確保每筆交易合法有保障。每次交易都會有完整的購物憑證和商品交易記錄，保障您的權益。
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">手續費怎麼計算？</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                手續費會根據交易金額大小而有所不同。請直接與我們的專員聯繫，我們會根據您的需求提供最優惠的方案。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">多久可以拿到現金？</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                刷完卡並販售商品給我們後，您可以立即拿到現金！整個過程快速高效，無需等待。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">需要準備哪些文件？</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p>您只需要準備：</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>有效的信用卡</li>
                  <li>身分證明文件</li>
                </ul>
                <p className="mt-2">我們的流程簡單便捷，無需繁複的文件準備。</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

