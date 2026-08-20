import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";
import twilio from "twilio";

export async function POST(request: NextRequest) {
  let emailSent = false;
  let whatsappSent = false;

  let emailError = "";
  let whatsappError = "";

  try {
    const {
      fullName,
      email,
      phoneNumber,
      country,
      service,
      date,
      message,
    } = await request.json();

    // ==============================
    // VALIDATION
    // ==============================

    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !phoneNumber?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // ==============================
    // ENVIRONMENT VARIABLES
    // ==============================

    const emailHost =
      process.env.EMAIL_HOST || "smtp.gmail.com";

    const emailPort =
      Number(process.env.EMAIL_PORT) || 587;

    const emailUser =
      process.env.EMAIL_USER;

    const emailPass =
      process.env.EMAIL_PASS;

    const receiverEmail =
      process.env.RECEIVER_EMAIL ||
      "classicjourneynepal2007@gmail.com";

    const twilioSid =
      process.env.TWILIO_SID;

    const twilioToken =
      process.env.TWILIO_TOKEN;

    const twilioFrom =
      process.env.TWILIO_WHATSAPP_FROM;

    const receiverWhatsApp =
      process.env.RECEIVER_WHATSAPP ||
      "+9779851005029";

    // ==============================
    // EMAIL
    // ==============================

    try {
      console.log("========== EMAIL TEST ==========");
      console.log("EMAIL_HOST:", emailHost);
      console.log("EMAIL_PORT:", emailPort);
      console.log(
        "EMAIL_USER:",
        emailUser ? "FOUND" : "MISSING"
      );
      console.log(
        "EMAIL_PASS:",
        emailPass ? "FOUND" : "MISSING"
      );
      console.log(
        "RECEIVER_EMAIL:",
        receiverEmail
      );

      if (!emailUser || !emailPass) {
        throw new Error(
          "EMAIL_USER or EMAIL_PASS is missing in .env.local"
        );
      }

      const transporter =
        nodemailer.createTransport({
          host: emailHost,
          port: emailPort,
          secure: emailPort === 465,

          auth: {
            user: emailUser,
            pass: emailPass,
          },

          connectionTimeout: 15000,
          greetingTimeout: 15000,
          socketTimeout: 15000,
        });

      console.log("Checking SMTP connection...");

      await transporter.verify();

      console.log("SMTP connection successful.");

      await transporter.sendMail({
        from: `"Classic Journey Nepal" <${emailUser}>`,
        to: receiverEmail,
        replyTo: email,
        subject:
          "New Inquiry - Classic Journey Nepal",

        text: `\nNew Inquiry from Classic Journey Nepal\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}\nCountry: ${country || "N/A"}\nService: ${service || "N/A"}\nPreferred Date: ${date || "N/A"}\n\nMessage:\n${message}\n        `,
      });

      emailSent = true;

      console.log("✅ EMAIL SENT SUCCESSFULLY");
    } catch (error: any) {
      emailError =
        error?.message ||
        "Unknown email error";

      console.error(
        "❌ EMAIL FAILED:",
        error
      );
    }

    // ==============================
    // WHATSAPP
    // ==============================

    try {
      console.log("========== WHATSAPP TEST ==========");

      console.log(
        "TWILIO_SID:",
        twilioSid ? "FOUND" : "MISSING"
      );

      console.log(
        "TWILIO_TOKEN:",
        twilioToken ? "FOUND" : "MISSING"
      );

      console.log(
        "TWILIO_WHATSAPP_FROM:",
        twilioFrom || "MISSING"
      );

      console.log(
        "RECEIVER_WHATSAPP:",
        receiverWhatsApp
      );

      if (
        !twilioSid ||
        !twilioToken ||
        !twilioFrom
      ) {
        throw new Error(
          "Twilio environment variables are missing."
        );
      }

      const client = twilio(
        twilioSid,
        twilioToken
      );

      const whatsappMessage = `New Inquiry - Classic Journey Nepal

Name: ${fullName}
Email: ${email}
Phone: ${phoneNumber}
Country: ${country || "N/A"}
Service: ${service || "N/A"}
Preferred Date: ${date || "N/A"}

Message:
${message}`;

      await client.messages.create({
        body: whatsappMessage,

        from: twilioFrom,

        to: `whatsapp:${receiverWhatsApp}`,
      });

      whatsappSent = true;

      console.log(
        "✅ WHATSAPP SENT SUCCESSFULLY"
      );
    } catch (error: any) {
      whatsappError =
        error?.message ||
        "Unknown WhatsApp error";

      console.error(
        "❌ WHATSAPP FAILED:",
        error
      );
    }

    // ==============================
    // RESULT
    // ==============================

    console.log("=================================");
    console.log("EMAIL SENT:", emailSent);
    console.log(
      "WHATSAPP SENT:",
      whatsappSent
    );
    console.log("=================================");

    if (emailSent && whatsappSent) {
      return NextResponse.json({
        success: true,
        message:
          "Inquiry sent successfully.",
        emailSent: true,
        whatsappSent: true,
      });
    }

    return NextResponse.json(
      {
        success: false,

        message:
          "Inquiry could not be sent completely.",

        emailSent,
        whatsappSent,

        // These are useful during testing
        emailError,
        whatsappError,
      },
      { status: 500 }
    );
  } catch (error: any) {
    console.error(
      "CONTACT API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ||
          "Internal server error.",
      },
      { status: 500 }
    );
  }
}