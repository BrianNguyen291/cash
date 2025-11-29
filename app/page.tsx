"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Shield, Phone, ArrowRight, Check, Zap, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { TrustBadges } from "@/components/trust-badges"
import { FAQSection } from "@/components/faq-section"
import { ServiceSteps } from "@/components/service-steps"
import { LegalNotice } from "@/components/legal-notice"
import { PartnershipSection } from "@/components/partnership-section"
import Image from "next/image"
import { contactConfig } from "@/lib/config"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Split Screen Design */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        {/* Background Image - All Screens */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/business-1.jpeg"
            alt="服務展示"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/60 lg:from-white/40 lg:via-transparent lg:to-transparent"></div>
        </div>

        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 relative z-10 px-6 py-20 lg:py-32">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-sm font-semibold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  專業合法 · 快速到帳
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="block text-gray-900">刷卡換現金</span>
                <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  快速安全
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                專業合法的現金週轉服務，陪同購物、高價回收、立即付現
              </p>
            </div>

            <LegalNotice className="mb-8" />

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white text-lg px-8 py-6 rounded-xl shadow-xl shadow-violet-500/30 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                立即申請
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href={contactConfig.lineUrl} target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-violet-600 text-violet-600 hover:bg-violet-50 text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  免費諮詢
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-violet-600 mb-1">24hr</div>
                <div className="text-sm text-gray-600">快速到帳</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">合法安全</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-fuchsia-600 mb-1">0</div>
                <div className="text-sm text-gray-600">隱藏費用</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Additional Image for Desktop */}
        <div className="hidden lg:block w-1/2 relative z-0">
          <div className="relative h-full">
            <Image
              src="/images/transaction-1.jpeg"
              alt="服務展示"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/30"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Asymmetric Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-violet-50/30 to-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">為什麼選擇</span>
              <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">我們的服務？</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">專業團隊，合法流程，快速到帳</p>
          </div>

          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Large Card */}
            <Card className="md:col-span-2 lg:col-span-1 relative overflow-hidden group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-violet-600 to-purple-600 text-white">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">快速到帳</h3>
                <p className="text-white/90 mb-6 text-lg leading-relaxed">
                  刷完卡並完成商品回收後，立即支付現金，無需等待，快速解決您的資金需求。
                </p>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-center text-white/90">
                    <Check className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span>當場交易完成</span>
                  </li>
                  <li className="flex items-center text-white/90">
                    <Check className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span>立即現金支付</span>
                  </li>
                  <li className="flex items-center text-white/90">
                    <Check className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span>無需等待審核</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Medium Cards */}
            <Card className="relative overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-violet-100 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">完全合法</h3>
                <p className="text-gray-600 mb-6">
                  實體商家購物，完整購物憑證，每筆交易都合法有保障。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                    合法商家消費
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                    完整交易憑證
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-100 to-pink-100 flex items-center justify-center mb-6">
                  <TrendingUp className="h-7 w-7 text-fuchsia-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">高價回收</h3>
                <p className="text-gray-600 mb-6">
                  提供最優惠的回收價格，讓您獲得更多現金。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-fuchsia-600 mr-2 flex-shrink-0" />
                    優惠折數
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-fuchsia-600 mr-2 flex-shrink-0" />
                    透明價格
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Process Section - Vertical Timeline Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">服務</span>
              <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">流程</span>
            </h2>
            <p className="text-lg text-gray-600">簡單五步驟，快速取得現金</p>
          </div>
          <ServiceSteps />
        </div>
      </section>

      {/* Image Showcase - Masonry Style */}
      <section className="py-20 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2 lg:row-span-2 relative h-[400px] lg:h-[600px] group overflow-hidden rounded-2xl">
              <Image
                src="/images/shopping-1.jpeg"
                alt="實體商家購物"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <h3 className="text-3xl font-bold text-white mb-3">實體商家購物</h3>
                  <p className="text-white/90 text-lg">在合法登記的實體商家進行交易</p>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] group overflow-hidden rounded-2xl">
              <Image
                src="/images/transaction-1.jpeg"
                alt="高價回收"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">高價回收</h3>
                  <p className="text-white/90">最優惠的回收價格</p>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] group overflow-hidden rounded-2xl">
              <Image
                src="/images/security-1.jpeg"
                alt="安全保障"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">安全保障</h3>
                  <p className="text-white/90">合法安全的交易</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 relative h-[300px] group overflow-hidden rounded-2xl">
              <Image
                src="/images/business-1.jpeg"
                alt="專業服務"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">專業服務團隊</h3>
                  <p className="text-white/90">經驗豐富，值得信賴</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Form - Split Layout */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50/30 to-fuchsia-50/30" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-900">立即</span>
                <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">申請服務</span>
              </h2>
              <p className="text-lg text-gray-600">填寫表單或直接聯繫我們，專人將立即為您服務</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Contact Info Card */}
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">聯絡方式</h3>
                    <div className="space-y-4">
                      <Link href={contactConfig.lineUrl} target="_blank" className="block">
                        <Button className="w-full justify-start h-auto py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl shadow-lg">
                          <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                          </svg>
                          <div className="text-left">
                            <div className="font-semibold">加入LINE諮詢</div>
                            <div className="text-sm opacity-90">免費通話、免費傳訊</div>
                          </div>
                        </Button>
                      </Link>

                      <Link href={`tel:${contactConfig.phone}`} className="block">
                        <Button className="w-full justify-start h-auto py-4 px-6 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-xl shadow-lg">
                          <Phone className="w-6 h-6 mr-3" />
                          <div className="text-left">
                            <div className="font-semibold">立即來電</div>
                            <div className="text-sm opacity-90">{contactConfig.phone}</div>
                          </div>
                        </Button>
                      </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">服務時間</h4>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex justify-between">
                          <span>週一至週五</span>
                          <span className="font-medium">09:00 - 21:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>週六、週日</span>
                          <span className="font-medium">10:00 - 20:00</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <PartnershipSection />

      {/* Floating CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 border-t border-violet-400/30 p-4 transform transition-transform duration-300 z-50 shadow-2xl ${isScrolled ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:block">
            <p className="font-semibold text-white">需要現金週轉嗎？</p>
            <p className="text-sm text-white/90">立即諮詢，快速安全有保障</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Link href={contactConfig.lineUrl} target="_blank" className="flex-1 md:flex-none">
              <Button className="w-full bg-white text-violet-600 hover:bg-white/90 font-semibold shadow-lg rounded-xl">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                加入LINE
              </Button>
            </Link>
            <Link href={`tel:${contactConfig.phone}`} className="flex-1 md:flex-none">
              <Button className="w-full bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 rounded-xl">
                <Phone className="w-5 h-5 mr-2" />
                立即來電
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
