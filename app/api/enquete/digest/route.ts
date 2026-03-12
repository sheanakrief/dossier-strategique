import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendWeeklyDigest } from "@/lib/email"

export async function GET(request: Request) {
  // Protection : Vercel Cron envoie le header Authorization, sinon on check le query param
  const authHeader = request.headers.get("authorization")
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get("secret")
  const cronSecret = process.env.CRON_SECRET

  if (cronSecret && authHeader !== `Bearer ${cronSecret}` && secret !== cronSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

    const [weekResponses, totalAllTime] = await Promise.all([
      prisma.surveyResponse.findMany({
        where: { createdAt: { gte: oneWeekAgo } },
        orderBy: { createdAt: "desc" },
      }),
      prisma.surveyResponse.count(),
    ])

    await sendWeeklyDigest(weekResponses, totalAllTime)

    return NextResponse.json({
      success: true,
      sent: true,
      weekCount: weekResponses.length,
      totalAllTime,
    })
  } catch (error) {
    console.error("Digest error:", error)
    return NextResponse.json({ success: false, error: "Failed to send digest" }, { status: 500 })
  }
}
