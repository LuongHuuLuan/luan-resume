import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message?: string;
  error?: string;
};

export async function POST(request: Request) {
  try {
    const resBody = await request.json();
    const { name, email, message } = resBody;
    // Khởi tạo transporter với thông tin SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_EMAIL_HOST,
      port: Number(process.env.NEXT_EMAIL_PORT),
      secure: false, // false cho TLS, true cho SSL
      auth: {
        user: process.env.NEXT_EMAIL_USER,
        pass: process.env.NEXT_EMAIL_PASSWORD,
      },
    });

    try {
      // Gửi email
      const info = await transporter.sendMail({
        from: email || "your-email@example.com",
        to: process.env.NEXT_EMAIL || "recipient@example.com",
        subject: "New Message from Your Website",
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      return new Response("Email sent successfully.", {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 400,
      });
    }
    // Process the webhook payload
  } catch (error) {
    return new Response(`Webhook error: ${error}`, {
      status: 400,
    });
  }
}
