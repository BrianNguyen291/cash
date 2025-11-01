import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building2, CreditCard } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "房屋一胎貸款",
    description: "適合首次貸款購屋者，低利率高額度",
    features: ["利率優惠", "額度最高可達房價8成", "還款期限彈性"],
  },
  {
    icon: Building2,
    title: "房屋二胎貸款",
    description: "已有房貸者可再融資週轉，快速撥款",
    features: ["快速審核", "無需清償原貸款", "資金靈活運用"],
  },
  {
    icon: CreditCard,
    title: "信用貸款",
    description: "小額週轉靈活方便",
    features: ["免擔保品", "審核快速", "額度彈性"],
  },
]

export function MortgageServicesSection() {
  return (
    <section className="py-16 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">服務項目</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6 md:mb-8" />
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              提供多元化的貸款方案，滿足您不同的資金需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
