export interface MonthData {
  month: number
  label: string
  nouveauxClients: number
  nouveauxGA: number
  clientsCumul: number
  clientsGACumul: number
  mrrGA: number
  mrrSaaS: number
  caPascal: number
  caLtoa: number
  caExistant: number
  caParkimmo: number
  caTotal: number
  remunSheana: number
  infra: number
  marketing: number
  admin: number
  chargesTotal: number
  resultat: number
  tresorerie: number
}

const NOUVEAUX_CLIENTS = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2]
// GA distribution targeting 10 clients total (GA starts at 3+ biens)
const NOUVEAUX_GA =       [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1]
const TRESO_DEPART = 8000
const GA_MOYEN = 92
const SAAS_MOYEN = 35

export function calculerSimulation(): MonthData[] {
  const data: MonthData[] = []
  let clientsCumul = 0
  let clientsGACumul = 0
  let mrrGA = 0
  let mrrSaaS = 0
  let tresorerie = TRESO_DEPART

  for (let m = 0; m < 12; m++) {
    const nouveauxClients = NOUVEAUX_CLIENTS[m]
    const nouveauxGA = NOUVEAUX_GA[m]

    clientsCumul += nouveauxClients
    clientsGACumul += nouveauxGA
    mrrGA += nouveauxGA * GA_MOYEN
    mrrSaaS += nouveauxClients * SAAS_MOYEN

    const caPascal = 1800
    const caLtoa = m < 5 ? 600 : 0 // Sort à M5, 0€ à partir de M6
    const caExistant = caPascal + caLtoa
    const caParkimmo = mrrGA + mrrSaaS
    const caTotal = caExistant + caParkimmo

    const remunSheana = m < 6 ? 0 : 800 // 800€/mois à partir de M7
    const infra = 175
    const marketing = m < 3 ? 250 : m < 6 ? 350 : 450
    const admin = 150

    const chargesTotal = remunSheana + infra + marketing + admin
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
      caPascal,
      caLtoa,
      caExistant,
      caParkimmo,
      caTotal,
      remunSheana,
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
  const caGA = data.reduce((sum, d) => sum + d.mrrGA, 0)
  const caSaaS = data.reduce((sum, d) => sum + d.mrrSaaS, 0)
  const caExistant = data.reduce((sum, d) => sum + d.caExistant, 0)
  const caParkimmo = data.reduce((sum, d) => sum + d.caParkimmo, 0)
  const remunSheanaTotal = data.reduce((sum, d) => sum + d.remunSheana, 0)

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
    caParkimmo,
    remunSheanaTotal,
    decompositionCA: {
      ga: caGA,
      saas: caSaaS,
      existant: caExistant,
    },
  }
}
