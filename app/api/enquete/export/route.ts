import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const responses = await prisma.surveyResponse.findMany({
      orderBy: { createdAt: "desc" },
    })

    const headers = ["id", "profile", "age", "profession", "email", "freeText", "duration", "createdAt", "answers"]
    const rows = responses.map(r => [
      r.id,
      r.profile,
      r.age || "",
      r.profession || "",
      r.email || "",
      (r.freeText || "").replace(/"/g, '""'),
      String(r.duration || ""),
      r.createdAt.toISOString(),
      r.answers.replace(/"/g, '""'),
    ])

    const csv = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(",")),
    ].join("\n")

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename=enquete-${new Date().toISOString().split("T")[0]}.csv`,
      },
    })
  } catch (error) {
    console.error("Export error:", error)
    return NextResponse.json({ error: "Failed to export" }, { status: 500 })
  }
}
