import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, DollarSign, Target } from "lucide-react"

const cases = [
  {
    name: "張小姐",
    location: "桃園市",
    amount: "300萬",
    purpose: "用於裝修與創業",
    image: "https://images.pexels.com/photos/5824909/pexels-photo-5824909.jpeg",
  },
  {
    name: "李先生",
    location: "新北市",
    amount: "200萬",
    purpose: "用於子女教育",
    image: "https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg",
  },
  {
    name: "陳先生",
    location: "台北市",
    amount: "500萬",
    purpose: "企業融資週轉",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
  },
]

export function MortgageCaseStudiesSection() {
  return (
    <section id="cases" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">成功案例</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">真實客戶見證，值得信賴的專業服務</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseStudy, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={`${caseStudy.name}案例`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-2xl font-bold">{caseStudy.name}</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{caseStudy.location}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{caseStudy.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-2 text-accent" />
                    <span className="text-sm font-semibold">成功貸款 {caseStudy.amount}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Target className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{caseStudy.purpose}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
