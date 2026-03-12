import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const PROFILE_LABELS: Record<string, string> = {
  A: "Futur propriétaire",
  B: "Petit bailleur 1-3 biens",
  C: "Patrimoine structuré 4+ biens / SCI",
  D: "Professionnel immobilier",
}

function formatAnswersHtml(answers: Record<string, unknown>): string {
  return Object.entries(answers)
    .map(([key, value]) => {
      const displayValue = Array.isArray(value) ? value.join(", ") : String(value)
      return `<tr><td style="padding:6px 12px;border:1px solid #e2e8f0;color:#5A6B7D;font-size:13px;">${key}</td><td style="padding:6px 12px;border:1px solid #e2e8f0;color:#1B2A3B;font-size:13px;">${displayValue}</td></tr>`
    })
    .join("")
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  })
}

export async function sendNotificationEmail(data: {
  profile: string
  email: string | null
  answers: Record<string, unknown>
  freeText: string | null
  submittedAt: string
}) {
  const notifyEmail = process.env.RESEND_NOTIFY_EMAIL
  const fromEmail = process.env.RESEND_FROM_EMAIL || "enquete@parkimmo.io"

  if (!notifyEmail) {
    console.warn("RESEND_NOTIFY_EMAIL not set, skipping notification email")
    return
  }

  const profileLabel = PROFILE_LABELS[data.profile] || data.profile
  const answersHtml = formatAnswersHtml(data.answers)
  const dateFormatted = formatDate(data.submittedAt)

  await resend.emails.send({
    from: fromEmail,
    to: notifyEmail,
    subject: `🔔 Nouvelle réponse enquête — Profil ${data.profile} (${profileLabel})`,
    html: `
      <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;color:#1B2A3B;">
        <div style="background:#1A3D2E;padding:20px 24px;border-radius:8px 8px 0 0;">
          <h1 style="color:#fff;margin:0;font-size:18px;">🔔 Nouvelle réponse — Enquête Parkimmo</h1>
        </div>
        <div style="padding:24px;background:#f8fafc;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
          <table style="width:100%;margin-bottom:16px;">
            <tr><td style="padding:4px 0;color:#5A6B7D;font-size:14px;">Profil détecté</td><td style="padding:4px 0;font-weight:600;font-size:14px;">${data.profile} — ${profileLabel}</td></tr>
            <tr><td style="padding:4px 0;color:#5A6B7D;font-size:14px;">Email</td><td style="padding:4px 0;font-size:14px;">${data.email || "<em>non renseigné</em>"}</td></tr>
            <tr><td style="padding:4px 0;color:#5A6B7D;font-size:14px;">Date</td><td style="padding:4px 0;font-size:14px;">${dateFormatted}</td></tr>
          </table>

          ${data.freeText ? `<div style="margin-bottom:16px;padding:12px;background:#fff;border-radius:6px;border:1px solid #e2e8f0;"><strong style="font-size:13px;color:#5A6B7D;">Commentaire libre :</strong><p style="margin:8px 0 0;font-size:14px;">${data.freeText}</p></div>` : ""}

          <h3 style="font-size:14px;color:#1A3D2E;margin:16px 0 8px;">Réponses détaillées</h3>
          <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:6px;overflow:hidden;">
            <tr style="background:#f1f5f9;"><th style="padding:8px 12px;text-align:left;font-size:12px;color:#5A6B7D;border:1px solid #e2e8f0;">Question</th><th style="padding:8px 12px;text-align:left;font-size:12px;color:#5A6B7D;border:1px solid #e2e8f0;">Réponse</th></tr>
            ${answersHtml}
          </table>
        </div>
      </div>
    `,
  })
}

export async function sendConfirmationEmail(data: {
  email: string
  profile: string
}) {
  const fromEmail = process.env.RESEND_FROM_EMAIL || "enquete@parkimmo.io"
  const profileLabel = PROFILE_LABELS[data.profile] || data.profile

  const profileMessages: Record<string, string> = {
    A: "En tant que futur propriétaire, vos retours sont précieux pour construire l'outil qui vous accompagnera dans cette aventure.",
    B: "En tant que propriétaire-bailleur, votre expérience de terrain est essentielle pour concevoir un outil vraiment utile au quotidien.",
    C: "Avec un patrimoine structuré, votre vision nous aide à créer un outil à la hauteur de vos enjeux de gestion.",
    D: "En tant que professionnel de l'immobilier, votre expertise nous guide pour bâtir un outil pertinent pour tout l'écosystème.",
  }

  const personalMessage = profileMessages[data.profile] || "Vos retours sont précieux pour construire un outil vraiment utile."

  await resend.emails.send({
    from: fromEmail,
    to: data.email,
    subject: "Merci d'avoir répondu — vos résultats arrivent",
    html: `
      <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;color:#1B2A3B;">
        <div style="background:#1A3D2E;padding:24px;border-radius:8px 8px 0 0;text-align:center;">
          <h1 style="color:#fff;margin:0;font-size:20px;">Merci pour votre participation !</h1>
        </div>
        <div style="padding:28px 24px;background:#ffffff;border:1px solid #e2e8f0;border-top:none;">
          <p style="font-size:15px;line-height:1.6;margin:0 0 16px;">Bonjour,</p>
          <p style="font-size:15px;line-height:1.6;margin:0 0 16px;">
            Merci d'avoir pris le temps de répondre à notre enquête sur la gestion de patrimoine immobilier.
            Votre profil : <strong>${profileLabel}</strong>.
          </p>
          <p style="font-size:15px;line-height:1.6;margin:0 0 20px;">${personalMessage}</p>

          <div style="background:#f0f7f4;border-radius:8px;padding:20px;margin:0 0 20px;border-left:4px solid #8FAF8A;">
            <p style="font-size:14px;font-weight:600;color:#1A3D2E;margin:0 0 12px;">Dès 300 répondants, vous recevrez en exclusivité :</p>
            <ul style="margin:0;padding:0 0 0 20px;font-size:14px;line-height:1.8;color:#1B2A3B;">
              <li>Les résultats complets de l'enquête</li>
              <li>Une comparaison avec votre profil de propriétaire</li>
              <li>Un accès prioritaire à la bêta de notre outil</li>
            </ul>
          </div>

          <p style="font-size:15px;line-height:1.6;margin:0 0 4px;">À très vite,</p>
          <p style="font-size:15px;line-height:1.6;margin:0 0 0;">
            <strong>Sheana Krief</strong><br/>
            <span style="color:#5A6B7D;font-size:13px;">K PAR K CONSEILS SAS</span>
          </p>
        </div>
        <div style="padding:16px 24px;background:#f8fafc;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;text-align:center;">
          <p style="font-size:11px;color:#94a3b8;margin:0;">
            Vous recevez cet email car vous avez participé à l'enquête Parkimmo et fourni votre adresse email.
            Si vous ne souhaitez plus recevoir nos communications, répondez à cet email avec "désabonnement".
          </p>
        </div>
      </div>
    `,
  })
}
