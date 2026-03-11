import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

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

    return NextResponse.json({ success: true, id: response.id })
  } catch (error) {
    console.error("Survey save error:", error)
    return NextResponse.json({ success: false, error: "Failed to save" }, { status: 500 })
  }
}
