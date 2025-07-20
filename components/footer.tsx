import React from 'react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 公司資訊 */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">公司資訊</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">公司全名：</span>耀躍科技有限公司</p>
              <p><span className="font-medium">統一編號：</span>50858529</p>
              <p><span className="font-medium">公司地址：</span>新北市三重區安慶街133號1F</p>
            </div>
          </div>

          {/* 聯絡資訊 */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">聯絡資訊</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">聯絡電話：</span>
                <a href="tel:0984123232" className="text-blue-300 hover:text-blue-200 transition-colors">
                  0984123232
                </a>
              </p>
              <p><span className="font-medium">電子信箱：</span>
                <a href="mailto:ilove265615@yahoo.com.tw" className="text-blue-300 hover:text-blue-200 transition-colors">
                  ilove265615@yahoo.com.tw
                </a>
              </p>
            </div>
          </div>

          {/* 營業時間 */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">營業時間</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">週一至週五：</span>下午2點至晚上8點</p>
              <p><span className="font-medium">週六：</span>早上12點至晚上6點</p>
              <p><span className="font-medium">週日：</span>固定公休</p>
              <p className="text-yellow-300 font-medium">其餘時間採預約制</p>
            </div>
          </div>
        </div>

        {/* 手續費資訊與試算範例 */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 手續費利率 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">手續費利率範圍</h3>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-xl font-bold text-green-400">最低 9% - 15%</p>
                <p className="text-sm text-gray-300 mt-2">實際利率依個人條件而定</p>
              </div>
            </div>

            {/* 試算範例 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">試算範例</h3>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-300 mb-2">
                  王先生於特約商店購買了 <span className="text-yellow-300 font-semibold">10,000元</span> 商品
                </p>
                <p className="text-sm text-gray-300 mb-2">
                  然後實拿 <span className="text-blue-300 font-semibold">9折</span> 的價格向王先生購買該商品
                </p>
                <p className="text-lg font-bold text-green-400">
                  王先生獲得現金：<span className="text-xl">9,000元</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 版權資訊 */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © 2024 耀躍科技有限公司 版權所有 | 統一編號：50858529
          </p>
          <p className="text-xs text-gray-500 mt-2">
            本服務為合法商品買賣，請理性消費，量力而為
          </p>
        </div>
      </div>
    </footer>
  )
}
