import { ShoppingBag, CreditCard, Store, Package, Banknote } from "lucide-react"
import { Check, Clock, Shield } from "lucide-react"
import Image from "next/image"

export function ServiceSteps() {
  const steps = [
    {
      icon: CreditCard,
      title: "確認額度",
      description: "告知專員您需要的金額，確認信用卡可用額度",
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg",
    },
    {
      icon: Store,
      title: "指定商家",
      description: "由專員陪同前往指定合法商家",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg",
    },
    {
      icon: ShoppingBag,
      title: "實體購物",
      description: "在商家購買實體商品，取得完整購物憑證",
      image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg",
    },
    {
      icon: Package,
      title: "商品回收",
      description: "我們以最優惠的價格回收您的商品",
      image: "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg",
    },
    {
      icon: Banknote,
      title: "立即付現",
      description: "當場支付現金，快速解決您的資金需求",
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center mx-auto">
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-[30%] left-full w-full h-0.5 bg-blue-100">
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 rotate-45 border-t-2 border-r-2 border-blue-300"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 relative overflow-hidden rounded-xl">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/90"></div>
        </div>

        <div className="relative p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">為什麼選擇我們？</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-white">完全合法</h4>
                <p className="text-sm text-white/80">實體商品交易，有完整憑證</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-white">快速到帳</h4>
                <p className="text-sm text-white/80">當場交易，立即拿現金</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-white">安全保障</h4>
                <p className="text-sm text-white/80">專業團隊，交易有保障</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

