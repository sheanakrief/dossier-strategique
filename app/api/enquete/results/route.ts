import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization")
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const responses = await prisma.surveyResponse.findMany({
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json({
      total: responses.length,
      responses: responses.map(r => ({
        ...r,
        answers: JSON.parse(r.answers),
      })),
    })
  } catch (error) {
    console.error("Results fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { count } = await prisma.surveyResponse.deleteMany()
    return NextResponse.json({ success: true, deleted: count })
  } catch (error) {
    console.error("Purge error:", error)
    return NextResponse.json({ error: "Failed to purge" }, { status: 500 })
  }
}
