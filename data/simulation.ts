export interface MonthData {
  month: number
  label: string
  inscritsFree: number
  nouveauxPayants: number
  clientsPayantsCumul: number
  clientsGACumul: number
  mrrSaaS: number
  mrrGA: number
  caTotal: number
  infra: number
  marketing: number
  admin: number
  outils: number
  contenu: number
  chargeAffaires: number
  chargesTotal: number
  resultat: number
  tresorerie: number
}

// ─── HYPOTHÈSES CLÉS ─────────────────────────────────────────
export const HYPOTHESES = {
  tresorerieDepart: 8_000,
  investissement: 30_000, // injecté à M6
  arpuSaaS: 38, // mix Essentiel 19€ + Expert 49€
  arpuGA: 75, // moyenne pondérée
  conversionFreePaid: 0.04, // 4%
  conversionPaidGA: 0.17, // 17%
  churnSaaS: 0.05, // 5%/mois
  churnGA: 0.02, // 2%/mois
  cacMoyen: 35,
  ltvSaaS: 456, // 12 mois × 38€
  ltvSaaSSupport: 1_140, // 12 mois × 95€
  ltvSaaSGestion: 4_200, // 12 mois × 350€+
} as const

// ─── DONNÉES MENSUELLES (scénario investisseur) ──────────────
const MOIS_DATA: Array<{
  inscritsFree: number
  nouveauxPayants: number
  nouveauxGA: number
  infra: number
  marketing: number
  admin: number
  outils: number
  contenu: number
  chargeAffaires: number
}> = [
  // Phase 1 — Pré-lancement (M1-M2)
  { inscritsFree: 0, nouveauxPayants: 0, nouveauxGA: 0, infra: 175, marketing: 150, admin: 150, outils: 200, contenu: 0, chargeAffaires: 0 },
  { inscritsFree: 0, nouveauxPayants: 0, nouveauxGA: 0, infra: 175, marketing: 150, admin: 150, outils: 200, contenu: 0, chargeAffaires: 0 },
  // Phase 2 — Lancement & traction (M3-M6)
  { inscritsFree: 80, nouveauxPayants: 3, nouveauxGA: 0, infra: 175, marketing: 500, admin: 150, outils: 200, contenu: 175, chargeAffaires: 0 },
  { inscritsFree: 90, nouveauxPayants: 4, nouveauxGA: 0, infra: 175, marketing: 500, admin: 150, outils: 200, contenu: 175, chargeAffaires: 0 },
  { inscritsFree: 100, nouveauxPayants: 5, nouveauxGA: 1, infra: 175, marketing: 500, admin: 150, outils: 200, contenu: 175, chargeAffaires: 0 },
  { inscritsFree: 130, nouveauxPayants: 5, nouveauxGA: 1, infra: 175, marketing: 500, admin: 150, outils: 200, contenu: 175, chargeAffaires: 0 },
  // Phase 3 — Accélération (M7-M12)
  { inscritsFree: 180, nouveauxPayants: 8, nouveauxGA: 2, infra: 200, marketing: 1000, admin: 200, outils: 300, contenu: 400, chargeAffaires: 0 },
  { inscritsFree: 200, nouveauxPayants: 10, nouveauxGA: 2, infra: 200, marketing: 1000, admin: 200, outils: 300, contenu: 400, chargeAffaires: 0 },
  { inscritsFree: 220, nouveauxPayants: 10, nouveauxGA: 2, infra: 200, marketing: 1000, admin: 200, outils: 300, contenu: 400, chargeAffaires: 1500 },
  { inscritsFree: 250, nouveauxPayants: 12, nouveauxGA: 2, infra: 200, marketing: 1000, admin: 200, outils: 300, contenu: 400, chargeAffaires: 1500 },
  { inscritsFree: 270, nouveauxPayants: 12, nouveauxGA: 2, infra: 200, marketing: 1000, admin: 200, outils: 300, contenu: 400, chargeAffaires: 1500 },
  { inscritsFree: 280, nouveauxPayants: 12, nouveauxGA: 2, infra: 200, marketing: 1000, admin: 200, outils: 300, contenu: 400, chargeAffaires: 1500 },
]

export function calculerSimulation(): MonthData[] {
  const data: MonthData[] = []
  let clientsPayantsCumul = 0
  let clientsGACumul = 0
  let mrrSaaS = 0
  let mrrGA = 0
  let tresorerie = HYPOTHESES.tresorerieDepart
  let inscritsFreeTotal = 0

  for (let m = 0; m < 12; m++) {
    const md = MOIS_DATA[m]

    inscritsFreeTotal += md.inscritsFree
    clientsPayantsCumul += md.nouveauxPayants
    clientsGACumul += md.nouveauxGA
    mrrSaaS += md.nouveauxPayants * HYPOTHESES.arpuSaaS
    mrrGA += md.nouveauxGA * HYPOTHESES.arpuGA

    const caTotal = mrrSaaS + mrrGA
    const chargesTotal = md.infra + md.marketing + md.admin + md.outils + md.contenu + md.chargeAffaires
    const resultat = caTotal - chargesTotal

    // Investissement injecté à M6
    if (m === 5) {
      tresorerie += HYPOTHESES.investissement
    }

    tresorerie += resultat

    data.push({
      month: m + 1,
      label: `M${m + 1}`,
      inscritsFree: inscritsFreeTotal,
      nouveauxPayants: md.nouveauxPayants,
      clientsPayantsCumul,
      clientsGACumul,
      mrrSaaS,
      mrrGA,
      caTotal,
      infra: md.infra,
      marketing: md.marketing,
      admin: md.admin,
      outils: md.outils,
      contenu: md.contenu,
      chargeAffaires: md.chargeAffaires,
      chargesTotal,
      resultat,
      tresorerie,
    })
  }

  return data
}

export function getSyntheseAn1(data: MonthData[]) {
  const last = data[data.length - 1]
  const caTotal = data.reduce((sum, d) => sum + d.caTotal, 0)
  const chargesTotal = data.reduce((sum, d) => sum + d.chargesTotal, 0)
  const caSaaS = data.reduce((sum, d) => sum + d.mrrSaaS, 0)
  const caGA = data.reduce((sum, d) => sum + d.mrrGA, 0)

  return {
    inscritsFree: last.inscritsFree,
    clientsPayants: last.clientsPayantsCumul,
    clientsGA: last.clientsGACumul,
    mrrRecurrent: last.mrrSaaS + last.mrrGA,
    tresorerieM12: last.tresorerie,
    caTotal,
    chargesTotal,
    resultatNet: caTotal - chargesTotal,
    decompositionCA: {
      saas: caSaaS,
      ga: caGA,
    },
  }
}

// ─── PROJECTION AN2 ──────────────────────────────────────────
export const PROJECTION_AN2 = {
  clientsPayantsM24: 200,
  clientsGAM24: 35,
  mrrM24: 9_500,
  caAn2: 85_000,
  breakEvenMensuel: "M15-M16",
  tresorerieFinAn2: 55_000,
} as const
