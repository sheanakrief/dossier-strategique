import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendSurveyNotification } from "@/lib/email"

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

    // Fire-and-forget : envoie la notification sans bloquer la reponse
    sendSurveyNotification({
      id: response.id,
      profile: body.profile,
      age: body.age || null,
      profession: body.profession || null,
      email: body.email || null,
      freeText: body.freeText || null,
      duration: body.duration || null,
    }).catch((err) => console.error("Email notification error:", err))

    return NextResponse.json({ success: true, id: response.id })
  } catch (error) {
    console.error("Survey save error:", error)
    return NextResponse.json({ success: false, error: "Failed to save" }, { status: 500 })
  }
}
