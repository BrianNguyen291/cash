import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "姓名和電話為必填欄位" },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailContent = {
      to: "ilove265615@yahoo.com.tw",
      subject: "新的刷卡換現金諮詢請求",
      html: `
        <h1>新的刷卡換現金諮詢請求</h1>
        <p><strong>姓名:</strong> ${data.name}</p>
        <p><strong>電話:</strong> ${data.phone}</p>
        <p><strong>金額:</strong> ${data.amount || "未指定"}</p>
        <p><strong>偏好聯絡方式:</strong> ${data.preferredContact === "line" ? "LINE" : "電話"}</p>
        <p><strong>留言:</strong> ${data.message || "無"}</p>
        <p><strong>提交時間:</strong> ${new Date().toLocaleString("zh-TW", { timeZone: "Asia/Taipei" })}</p>
      `,
    }

    // Send email
    const result = await sendEmail(
      emailContent.to,
      emailContent.subject,
      emailContent.html
    )

    // Log success for monitoring
    console.log("Form submission successful:", {
      name: data.name,
      phone: data.phone,
      messageId: result.messageId
    })

    return NextResponse.json({
      success: true,
      message: "表單已成功送出，我們會盡快與您聯繫"
    })
  } catch (error) {
    // Log error for debugging
    console.error("Form submission error:", error)
    
    return NextResponse.json(
      { error: "表單送出失敗，請稍後再試或直接聯繫我們" },
      { status: 500 }
    )
  }
}

