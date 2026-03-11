import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { prisma } from "@/lib/prisma"

function isAuthorized(request: Request): boolean {
  // Bearer token (legacy)
  const authHeader = request.headers.get("authorization")
  if (authHeader === `Bearer ${process.env.ADMIN_PASSWORD}`) return true
  // Dossier auth cookies
  const cookieStore = cookies()
  if (cookieStore.get("dossier_auth_admin")?.value === "1") return true
  if (cookieStore.get("dossier_auth_investor")?.value === "1") return true
  return false
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
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
  if (!isAuthorized(request)) {
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
