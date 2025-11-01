import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "一胎和二胎房貸差別？",
    answer:
      "一胎：房子沒貸款要向銀行申請，貸款成數一般可達房屋價值的7-8成。二胎：已有房貸者可再融資週轉，無需清償原貸款，快速撥款，資金靈活運用。",
  },
  {
    question: "申請房屋貸款需要準備什麼文件？",
    answer:
      "基本文件包括：身分證正反面影本、收入證明（薪資單或扣繳憑單）、房屋所有權狀、戶籍謄本、近6個月銀行存摺往來紀錄。我們的專員會協助您準備完整的申請文件。",
  },
  {
    question: "貸款審核需要多久時間？",
    answer:
      "一般而言，文件齊全後約3-5個工作天即可完成審核。若是緊急需求，我們也提供快速審核服務，最快24小時內可知道審核結果。",
  },
  {
    question: "我的信用狀況不佳，還能申請貸款嗎？",
    answer:
      "可以的！我們提供多元化的貸款方案，即使信用狀況不理想，仍有機會申請。我們會根據您的實際情況，為您量身規劃最適合的貸款方案。建議先與我們的專員諮詢，了解您的選擇。",
  },
  {
    question: "貸款利率大約是多少？",
    answer:
      "利率會依據貸款類型、額度、年限及個人信用狀況而有所不同。一胎房貸利率通常較低，約1.5%-3%；二胎房貸約2.5%-8%。實際利率需經過評估後才能確定，歡迎聯繫我們取得專屬報價。",
  },
  {
    question: "可以提前還款嗎？會有違約金嗎？",
    answer:
      "大部分貸款方案都允許提前還款。違約金的規定依各銀行及貸款方案而異，通常在貸款初期（1-3年內）提前還款會有違約金，之後則免收。詳細規定我們會在簽約前向您說明清楚。",
  },
]

export function MortgageQASection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">常見問題</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-base md:text-lg text-muted-foreground">為您解答房屋貸款相關疑問</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-4 md:px-6 bg-card hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary py-4 md:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">還有其他問題？</p>
            <a
              href="mailto:ilove265615@yahoo.com.tw"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 md:px-8"
            >
              Email 聯繫我們
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
