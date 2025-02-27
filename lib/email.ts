import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Yahoo',
  auth: {
    user: 'ilove265615@yahoo.com.tw',
    pass: process.env.EMAIL_PASSWORD // This should be an app-specific password
  }
});

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"刷卡換現金服務" <ilove265615@yahoo.com.tw>',
      to,
      subject,
      html,
    });

    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
} 