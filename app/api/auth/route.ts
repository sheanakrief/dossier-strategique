import { NextRequest, NextResponse } from "next/server"

// Password → role + cookie mapping
const AUTH_MAP: Record<string, { role: string; cookie: string }> = {
  "Sk@Kp4rK2026!": { role: "admin", cookie: "dossier_auth_admin" },
  "inv826": { role: "investisseur", cookie: "dossier_auth_investor" },
  "par347": { role: "partenaire", cookie: "dossier_auth_partner" },
  "dev951": { role: "dev", cookie: "dossier_auth_dev" },
}

export async function POST(req: NextRequest) {
  const { password } = await req.json()

  const match = AUTH_MAP[password]

  if (match) {
    const res = NextResponse.json({ ok: true, role: match.role })
    res.cookies.set(match.cookie, "1", {
      httpOnly: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    })
    return res
  }

  return NextResponse.json({ error: "invalid" }, { status: 401 })
}
