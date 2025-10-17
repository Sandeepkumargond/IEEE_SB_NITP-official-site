"use server";
import nodemailer from "nodemailer";

export async function sendEmail(prevState, formData) {
  const { name, email, message } = Object.fromEntries(formData.entries());
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "ieeeclub@nitp.ac.in",
      subject: `📩 New Contact Form Submission — ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 6px; background-color: #fafafa;">
      <h2 style="color: #2C3E50; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">New Contact Form Submission</h2>
      
      <p style="margin: 8px 0; font-size: 15px;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 8px 0; font-size: 15px;"><strong>Email:</strong> ${email}</p>
      
      <p style="margin: 8px 0; font-size: 15px;"><strong>Message:</strong></p>
      <div style="background-color: #fff; padding: 12px; border-radius: 4px; border: 1px solid #ddd; font-size: 14px; line-height: 1.5;">
        ${message}
      </div>
      
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ccc;" />
      <p style="color: #888; font-size: 13px;">This message was sent via your website's contact form.</p>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, message: "Failed to send email." };
  }
}
