import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  businessType: z.string().min(1, "Business type is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log("Received form data:", body);

    // Validate the form data
    const validatedData = contactFormSchema.parse(body);

    const { name, businessType, email, phone, message } = validatedData;

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #8b5cf6;">New Contact Form Submission - Reputify</h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Business Type:</strong> ${businessType}</p>
        </div>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="background-color: #ede9fe; padding: 15px; border-radius: 8px; margin-top: 20px;">
          <p style="margin: 0; font-size: 14px; color: #6b46c1;">
            This email was sent from the Reputify contact form on ${new Date().toLocaleString(
              "en-US",
              {
                timeZone: "Asia/Colombo",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              }
            )}.
          </p>
        </div>
      </div>
    `;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL || "info@reputify.lk",
      replyTo: email, // Allow replying directly to the customer
      subject: `New Contact Form Submission from ${name} - ${businessType}`,
      html: emailContent,
    });

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      return NextResponse.json(
        {
          error:
            "Failed to send email. Please try again or contact us directly.",
        },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    const confirmationEmailContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="text-align: center; padding: 20px; background-color: #8b5cf6; color: white; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">Thank You!</h1>
        </div>
        
        <div style="padding: 30px; background-color: #f9fafb; border-radius: 0 0 8px 8px;">
          <p>Hi ${name},</p>
          
          <p>Thank you for contacting <strong>Reputify</strong>! We've received your message and our team will get back to you within 24 hours.</p>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #8b5cf6;">What happens next?</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Our team will review your inquiry</li>
              <li>We'll prepare a personalized response based on your business type (${businessType})</li>
              <li>You'll hear back from us within 24 hours</li>
            </ul>
          </div>
          
          <p>In the meantime, feel free to explore more about our reputation management solutions on our website.</p>
          
          <div style="background-color: #ede9fe; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; font-size: 14px; color: #6b46c1;">
              <strong>Need immediate assistance?</strong><br>
              WhatsApp: +94 711687980<br>
              Email: info@reputify.lk
            </p>
          </div>
          
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>The Reputify Team</strong>
          </p>
        </div>
      </div>
    `;

    // Send confirmation email
    try {
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
        to: email,
        replyTo: process.env.CONTACT_TO_EMAIL || "info@reputify.lk",
        subject: "Thank you for contacting Reputify - We'll be in touch soon!",
        html: confirmationEmailContent,
      });
    } catch (confirmationError) {
      // Don't fail the whole request if confirmation email fails
      console.error("Failed to send confirmation email:", confirmationError);
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Message sent successfully! Check your email for confirmation.",
        id: emailResponse.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      console.log("Validation errors:", error.errors);
      return NextResponse.json(
        {
          error: "Please check your form fields",
          details: error.errors.map(
            (err) => `${err.path.join(".")}: ${err.message}`
          ),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again or contact us directly at info@reputify.lk",
      },
      { status: 500 }
    );
  }
}
