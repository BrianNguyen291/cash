# 刷卡換現金服務網站

提供安全合法的刷卡換現金服務，快速到帳，手續費優惠。

## 部署說明

### Vercel 部署步驟

1. Fork 或直接使用此 GitHub 倉庫
2. 前往 [Vercel](https://vercel.com)
3. 點擊 "New Project"
4. 選擇此 GitHub 倉庫
5. 設定環境變數:
   - `EMAIL_PASSWORD`: Yahoo 郵箱應用密碼

### 環境變數設定

在 Vercel 專案設定中，添加以下環境變數：

| 變數名稱 | 說明 | 範例 |
|---------|------|------|
| EMAIL_PASSWORD | Yahoo 郵箱應用密碼 | xxxx-xxxx-xxxx-xxxx |

### 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 啟動生產伺服器
npm run start
```

## 功能特點

- 首頁：服務介紹、優惠資訊
- 服務流程說明
- 線上諮詢表單
- LINE/電話直接聯繫
- 常見問題解答

## 技術棧

- Next.js 14
- React 18
- Tailwind CSS
- Shadcn/ui
- Node.js
- Nodemailer 