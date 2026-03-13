import { resend } from "./resend"

const FROM = process.env.RESEND_FROM_EMAIL || "enquete@parkimmo.io"
const TO = process.env.RESEND_NOTIFY_EMAIL || "sheana@parkimmo.io"

const PROFILE_LABELS: Record<string, string> = {
  A: "Futur proprietaire",
  B: "Proprietaire 1-3 biens",
  C: "Patrimoine 4+ biens",
  D: "Professionnel immo",
}

/* ─── NOTIFICATION IMMÉDIATE ─── */

interface SurveyData {
  id: string
  profile: string
  age?: string | null
  profession?: string | null
  email?: string | null
  freeText?: string | null
  duration?: number | null
  answers?: string | null
}

export async function sendSurveyNotification(data: SurveyData) {
  const label = PROFILE_LABELS[data.profile] || data.profile
  const date = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })

  const rows: string[] = []
  rows.push(row("Profil", `<strong>${label}</strong> (${data.profile})`))
  if (data.age) rows.push(row("Age", data.age))
  if (data.profession) rows.push(row("Profession", data.profession))
  if (data.email) rows.push(row("Email", `<a href="mailto:${data.email}">${data.email}</a>`))
  if (data.freeText) rows.push(row("Texte libre", data.freeText))
  if (data.duration) rows.push(row("Duree", `${data.duration}s`))
  rows.push(row("Date", date))
  rows.push(row("ID", `<code>${data.id}</code>`))

  const html = `
    <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1A3D2E; border-bottom: 2px solid #8FAF8A; padding-bottom: 8px;">
        Nouvelle reponse enquete
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${rows.join("")}
      </table>
      <p style="margin-top: 20px; font-size: 13px; color: #666;">
        <a href="https://parkimmo.io/dossier/enquete-admin" style="color: #1A5276;">
          Voir toutes les reponses →
        </a>
      </p>
    </div>
  `

  return resend.emails.send({
    from: `Parkimmo Enquete <${FROM}>`,
    to: TO,
    subject: `[Parkimmo] Nouvelle reponse — ${label}`,
    html,
  })
}

/* ─── RÉCAP HEBDOMADAIRE ─── */

interface DigestResponse {
  id: string
  profile: string
  age: string | null
  profession: string | null
  email: string | null
  freeText: string | null
  duration: number | null
  createdAt: Date
}

export async function sendWeeklyDigest(
  responses: DigestResponse[],
  totalAllTime: number
) {
  const count = responses.length

  if (count === 0) {
    return resend.emails.send({
      from: `Parkimmo Enquete <${FROM}>`,
      to: TO,
      subject: `[Parkimmo] Recap semaine — aucune nouvelle reponse`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A3D2E;">Recap hebdomadaire</h2>
          <p>Aucune nouvelle reponse cette semaine.</p>
          <p style="color: #666;">Total cumule : <strong>${totalAllTime}</strong> reponses</p>
        </div>
      `,
    })
  }

  // Stats par profil
  const byProfile: Record<string, number> = {}
  let totalDuration = 0
  let durationCount = 0
  const emails: string[] = []
  const freeTexts: string[] = []

  for (const r of responses) {
    byProfile[r.profile] = (byProfile[r.profile] || 0) + 1
    if (r.duration) {
      totalDuration += r.duration
      durationCount++
    }
    if (r.email) emails.push(r.email)
    if (r.freeText) freeTexts.push(r.freeText)
  }

  const avgDuration = durationCount > 0 ? Math.round(totalDuration / durationCount) : 0

  // Construction HTML
  const profileRows = Object.entries(byProfile)
    .sort((a, b) => b[1] - a[1])
    .map(([p, n]) => {
      const pct = Math.round((n / count) * 100)
      const label = PROFILE_LABELS[p] || p
      return `<tr>
        <td style="padding: 6px 12px; border-bottom: 1px solid #eee;">${label} (${p})</td>
        <td style="padding: 6px 12px; border-bottom: 1px solid #eee; text-align: center;"><strong>${n}</strong></td>
        <td style="padding: 6px 12px; border-bottom: 1px solid #eee; text-align: right; color: #666;">${pct}%</td>
      </tr>`
    })
    .join("")

  const emailsList =
    emails.length > 0
      ? `<h3 style="color: #1A3D2E; margin-top: 24px;">Emails collectes (${emails.length})</h3>
         <ul>${emails.map((e) => `<li><a href="mailto:${e}">${e}</a></li>`).join("")}</ul>`
      : ""

  const freeTextsList =
    freeTexts.length > 0
      ? `<h3 style="color: #1A3D2E; margin-top: 24px;">Textes libres (${freeTexts.length})</h3>
         ${freeTexts.map((t) => `<blockquote style="border-left: 3px solid #8FAF8A; padding-left: 12px; margin: 8px 0; color: #444;">${t}</blockquote>`).join("")}`
      : ""

  const html = `
    <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1A3D2E; border-bottom: 2px solid #8FAF8A; padding-bottom: 8px;">
        Recap hebdomadaire — ${count} nouvelle${count > 1 ? "s" : ""} reponse${count > 1 ? "s" : ""}
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        ${row("Nouvelles reponses", `<strong>${count}</strong>`)}
        ${row("Total cumule", `<strong>${totalAllTime}</strong>`)}
        ${avgDuration > 0 ? row("Duree moyenne", `${avgDuration}s`) : ""}
      </table>

      <h3 style="color: #1A3D2E; margin-top: 24px;">Repartition par profil</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="background: #f5f5f5;">
          <th style="padding: 8px 12px; text-align: left;">Profil</th>
          <th style="padding: 8px 12px; text-align: center;">Nb</th>
          <th style="padding: 8px 12px; text-align: right;">%</th>
        </tr>
        ${profileRows}
      </table>

      ${emailsList}
      ${freeTextsList}

      <p style="margin-top: 24px; font-size: 13px; color: #666;">
        <a href="https://parkimmo.io/dossier/enquete-admin" style="color: #1A5276;">
          Voir toutes les reponses →
        </a>
      </p>
    </div>
  `

  return resend.emails.send({
    from: `Parkimmo Enquete <${FROM}>`,
    to: TO,
    subject: `[Parkimmo] Recap semaine — ${count} nouvelle${count > 1 ? "s" : ""} reponse${count > 1 ? "s" : ""}`,
    html,
  })
}

/* ─── HELPERS ─── */

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #666; width: 140px;">${label}</td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${value}</td>
    </tr>
  `
}
