import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/email"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const response = await prisma.surveyResponse.create({
      data: {
        profile: body.profile,
        age: body.age || null,
        profession: body.profession || null,
        answers: JSON.stringify(body.answers),
        email: body.email || null,
        freeText: body.freeText || null,
        userAgent: body.userAgent || null,
        duration: body.duration || null,
      },
    })

    // Send emails in background — don't block the response
    const submittedAt = body.submittedAt || new Date().toISOString()
    const emailPromises: Promise<void>[] = []

    if (process.env.RESEND_API_KEY) {
      emailPromises.push(
        sendNotificationEmail({
          profile: body.profile,
          email: body.email || null,
          answers: body.answers,
          freeText: body.freeText || null,
          submittedAt,
        }).catch((err) => console.error("Notification email error:", err))
      )

      if (body.email) {
        emailPromises.push(
          sendConfirmationEmail({
            email: body.email,
            profile: body.profile,
          }).catch((err) => console.error("Confirmation email error:", err))
        )
      }
    }

    // Fire-and-forget: don't await emails to keep response fast
    Promise.allSettled(emailPromises).catch(() => {})

    return NextResponse.json({ success: true, id: response.id })
  } catch (error) {
    console.error("Survey save error:", error)
    return NextResponse.json({ success: false, error: "Failed to save" }, { status: 500 })
  }
}
