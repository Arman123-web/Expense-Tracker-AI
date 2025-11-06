'use server';

import nodemailer from 'nodemailer';

export async function sendEmailNotification(to: string, subject: string, message: string) {
  try {
    // Configure transport (use Gmail, SMTP, or another provider)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // you can also use: host, port, secure, auth
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: `"Expense Tracker AI" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: `<div style="font-family: Arial, sans-serif; line-height:1.5;">
              <h2>${subject}</h2>
              <p>${message}</p>
              <br/>
              <p style="font-size:12px;color:#555;">This is an automated email from Expense Tracker AI.</p>
            </div>`,
    });

    console.log('Email sent:', info.messageId);
    return { success: true };
  } catch (error: any) {
    console.error('Email send error:', error);
    return { success: false, error: error.message };
  }
}
