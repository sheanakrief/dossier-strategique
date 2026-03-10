export interface MonthData {
  month: number
  label: string
  nouveauxClients: number
  nouveauxGA: number
  clientsCumul: number
  clientsGACumul: number
  mrrGA: number
  mrrSaaS: number
  majoration: number
  caExistant: number
  caTotal: number
  remunSheana: number
  recrue: number
  infra: number
  marketing: number
  admin: number
  chargesTotal: number
  resultat: number
  tresorerie: number
}

const NOUVEAUX_CLIENTS = [1, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9]
const CA_EXISTANT = 2750
const TRESO_DEPART = 13000
const TAUX_GA = 0.55
const GA_MOYEN = 85
const SAAS_MOYEN = 25

export function calculerSimulation(): MonthData[] {
  const data: MonthData[] = []
  let clientsCumul = 0
  let clientsGACumul = 0
  let mrrGA = 0
  let mrrSaaS = 0
  let tresorerie = TRESO_DEPART

  for (let m = 0; m < 12; m++) {
    const nouveauxClients = NOUVEAUX_CLIENTS[m]
    const nouveauxGA = Math.round(nouveauxClients * TAUX_GA)

    clientsCumul += nouveauxClients
    clientsGACumul += nouveauxGA
    mrrGA += nouveauxGA * GA_MOYEN
    mrrSaaS += nouveauxClients * SAAS_MOYEN

    const majoration = Math.round(nouveauxGA * GA_MOYEN * 0.5)
    const caTotal = CA_EXISTANT + mrrGA + mrrSaaS + majoration

    const remunSheana = m < 5 ? 0 : 1200
    const recrue = m < 2 ? 0 : m < 4 ? 0 : 1200
    const infra = 85 + Math.round(clientsCumul * 1.5)
    const marketing = m < 3 ? 400 : m < 6 ? 700 : 1000
    const admin = 150

    const chargesTotal = remunSheana + recrue + infra + marketing + admin
    const resultat = caTotal - chargesTotal
    tresorerie += resultat

    data.push({
      month: m + 1,
      label: `M${m + 1}`,
      nouveauxClients,
      nouveauxGA,
      clientsCumul,
      clientsGACumul,
      mrrGA,
      mrrSaaS,
      majoration,
      caExistant: CA_EXISTANT,
      caTotal,
      remunSheana,
      recrue,
      infra,
      marketing,
      admin,
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
  const caGA = data.reduce((sum, d) => sum + d.mrrGA + d.majoration, 0)
  const caSaaS = data.reduce((sum, d) => sum + d.mrrSaaS, 0)
  const caExistant = CA_EXISTANT * 12

  return {
    clientsCumul: last.clientsCumul,
    clientsGACumul: last.clientsGACumul,
    mrrRecurrent: last.mrrGA + last.mrrSaaS,
    caMensuelM12: last.caTotal,
    tresorerieM12: last.tresorerie,
    caTotal,
    chargesTotal,
    resultatNet: caTotal - chargesTotal,
    marge: Math.round(((caTotal - chargesTotal) / caTotal) * 100),
    decompositionCA: {
      ga: caGA,
      saas: caSaaS,
      existant: caExistant,
    },
  }
}
