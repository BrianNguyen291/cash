import { Shield, Clock, Award } from "lucide-react"

export function MortgageAboutSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">關於我們</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                我們專注於房屋貸款整合與金融顧問服務，提供一胎、二胎貸款解決方案，幫助客戶快速取得資金。
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                所有貸款皆依法規定，安全可靠。我們致力於為客戶提供最專業的金融諮詢服務，協助您實現財務目標。
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold">合法安全</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold">快速審核</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold">專業服務</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/images/mortgage-1.jpeg" 
                alt="專業顧問服務" 
                className="rounded-lg shadow-2xl w-full" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
