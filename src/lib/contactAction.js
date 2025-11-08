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
      subject: `New Contact Inquiry - ${name}`,
      html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333333; max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #00629B 0%, #0077B5 100%); padding: 30px 20px; text-align: center;">
          <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">IEEE Student Branch NIT Patna</h1>
          <p style="margin: 8px 0 0 0; color: #e8f4f8; font-size: 14px;">Contact Form Submission</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px 25px;">
          <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #555555;">
            A new inquiry has been received through the IEEE SB NITP website contact form.
          </p>
          
          <!-- Sender Information -->
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px; border-left: 4px solid #0077B5;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 14px; color: #666666; width: 80px; vertical-align: top;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; font-size: 14px; color: #333333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 14px; color: #666666; vertical-align: top;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; font-size: 14px; color: #333333;"><a href="mailto:${email}" style="color: #0077B5; text-decoration: none;">${email}</a></td>
              </tr>
            </table>
          </div>
          
          <!-- Message Content -->
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: 600; color: #666666;">MESSAGE:</p>
            <div style="background-color: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #e0e0e0; font-size: 14px; line-height: 1.7; color: #333333; white-space: pre-wrap; word-wrap: break-word;">
            ${message}
            </div>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 20px 25px; border-top: 1px solid #e0e0e0;">
          <p style="margin: 0; font-size: 12px; color: #888888; line-height: 1.5;">
            This is an automated message from the IEEE Student Branch NIT Patna website contact form.<br>
            Please respond to the sender directly at <a href="mailto:${email}" style="color: #0077B5; text-decoration: none;">${email}</a>
          </p>
          <p style="margin: 10px 0 0 0; font-size: 11px; color: #aaaaaa;">
            © ${new Date().getFullYear()} IEEE Student Branch NIT Patna. All rights reserved.
          </p>
        </div>
        
      </div>
    </body>
    </html>
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
