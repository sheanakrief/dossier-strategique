"use client"

import { useState, useCallback, useMemo, useEffect } from "react"

/* ═══════════════════════════════════════════════════════════════
   PARKIMMO — Enquete Proprietaires v4
   Arbre decisionnel . 4 profils . Sources verifiees
   ═══════════════════════════════════════════════════════════════ */

/* ════ TYPES ════ */
interface Insight {
  text: string
  source: string
  type: "stat" | "insight" | "tip" | "legal"
}

interface QuestionBase {
  id: string
  bloc?: string
  bn?: number
  title: string
  sub?: string | Record<string, string>
  optional?: boolean
}

interface SingleQuestion extends QuestionBase {
  type: "single"
  opts: string[]
  insights?: Record<string, Insight>
  profileMap?: Record<string, string>
}

interface MultiQuestion extends QuestionBase {
  type: "multi"
  opts: string[]
  max?: number
  insights?: Record<string, Insight>
  globalInsight?: Insight
}

interface ScaleQuestion extends QuestionBase {
  type: "scale"
  sMin: string
  sMax: string
  sN: number
  insights?: Record<number, Insight>
}

interface EmailQuestion extends QuestionBase {
  type: "email"
}

interface FreetextQuestion extends QuestionBase {
  type: "freetext"
}

type Question = SingleQuestion | MultiQuestion | ScaleQuestion | EmailQuestion | FreetextQuestion

interface ProfileTag {
  l: string
  c: string
}

/* ════ COLORS ════ */
const COLORS = {
  primary: "#1A3D2E",
  primaryL: "#1F4D38",
  accent: "#8FAF8A",
  dark: "#0C1F2C",
  text: "#1B2A3B",
  muted: "#5A6B7D",
  light: "#8FA3B5",
  border: "#DFE6ED",
  success: "#0E9F6E",
}

const PROFILE_COLORS: Record<string, string> = {
  A: "#8B5CF6",
  B: COLORS.primary,
  C: COLORS.accent,
  D: COLORS.success,
}

const PROFILE_LABELS: Record<string, string> = {
  A: "Futur proprietaire",
  B: "Proprietaire 1-3 biens",
  C: "Patrimoine 4+ biens",
  D: "Professionnel immo",
}

/* ════════════════════════════════════════════════════════════════
   DEMOGRAPHIC QUESTIONS (before Q0)
   ════════════════════════════════════════════════════════════════ */

const Q_DEMO: Question[] = [
  {
    id: "demo_age", type: "single", bloc: "À propos de vous", bn: 1,
    title: "Votre tranche d\u2019âge ?",
    opts: ["18-25", "26-35", "36-45", "46-55", "56-65", "65+"],
  },
  {
    id: "demo_job", type: "single", bloc: "À propos de vous", bn: 1,
    title: "Votre situation professionnelle ?",
    opts: ["Salarié cadre", "Salarié non-cadre", "Profession libérale", "Chef d\u2019entreprise", "Fonctionnaire", "Retraité", "Étudiant", "Autre"],
  },
]

/* ════════════════════════════════════════════════════════════════
   QUESTIONS PER PROFILE
   ════════════════════════════════════════════════════════════════ */

const Q_ROOT: SingleQuestion = {
  id: "q0",
  type: "single",
  title: "Quelle est votre situation aujourd\u2019hui ?",
  opts: [
    "Je ne suis pas (encore) propriétaire",
    "J\u2019ai 1 à 3 biens, je gère moi-même",
    "J\u2019ai 4 biens ou plus, ou des structures (SCI, SNC\u2026)",
    "Je suis investisseur / marchand de biens",
    "Je suis professionnel de l\u2019immobilier (agent, gestionnaire, CGP\u2026)",
  ],
  profileMap: {
    "Je ne suis pas (encore) propriétaire": "A",
    "J\u2019ai 1 à 3 biens, je gère moi-même": "B",
    "J\u2019ai 4 biens ou plus, ou des structures (SCI, SNC\u2026)": "C",
    "Je suis investisseur / marchand de biens": "C",
    "Je suis professionnel de l\u2019immobilier (agent, gestionnaire, CGP\u2026)": "D",
  },
}

const QA: Question[] = [
  {
    id: "a1", type: "single", bloc: "Votre projet", bn: 1,
    title: "Envisagez-vous d\u2019investir dans l\u2019immobilier ?",
    opts: ["Oui, dans les 12 prochains mois", "Oui, dans 1-3 ans", "C\u2019est une idee mais rien de concret", "Non, pas du tout"],
    insights: {
      "Oui, dans les 12 prochains mois": { text: "20 % des Francais declarent vouloir acheter un bien dans les 2 prochaines annees, et cette proportion atteint 37 % chez les moins de 35 ans.", source: "Sondage OpinionWay pour L\u2019Adresse, oct. 2024 (1 009 personnes)", type: "stat" },
      "C\u2019est une idee mais rien de concret": { text: "Un ecart massif entre intention et action : 41 % des Francais envisagent l\u2019investissement locatif, mais seulement 15 % passent reellement a l\u2019acte.", source: "Sondage IFOP pour Masteos", type: "stat" },
    },
  },
  {
    id: "a2", type: "multi", bloc: "Vos freins", bn: 1, max: 3,
    title: "Qu\u2019est-ce qui vous freine le plus ?",
    sub: "Selectionnez jusqu\u2019a 3 reponses",
    opts: ["Le prix des biens a l\u2019achat", "La peur des loyers impayes", "La complexite administrative", "La fiscalite, trop opaque", "Le cout des travaux de renovation energetique", "Les taux d\u2019interet", "Je ne sais pas par ou commencer"],
    globalInsight: { text: "Les freins majeurs selon un sondage national : prix d\u2019achat (42 %), risque d\u2019impayes (39 %), hausse de la taxe fonciere (33 %), cout de la renovation energetique (26 %).", source: "Sondage OpinionWay pour L\u2019Adresse, oct. 2024", type: "stat" },
  },
  {
    id: "a3", type: "single", bloc: "Vos connaissances", bn: 1,
    title: "Savez-vous ce qu\u2019est un DPE (Diagnostic de Performance Énergétique) ?",
    opts: ["Oui, et je sais ce que ça implique", "J\u2019en ai entendu parler, vaguement", "Non, pas du tout"],
    insights: {
      "J\u2019en ai entendu parler, vaguement": { text: "43 % des Francais declarent n\u2019avoir jamais entendu parler du DPE. Pourtant, depuis le 1er janvier 2025, les logements classes G sont interdits a la location.", source: "Enquete Ipsos pour Atlantic, sept. 2023 / Loi Climat & Resilience 2021", type: "legal" },
      "Non, pas du tout": { text: "43 % des Francais ne connaissent pas le DPE, et 78 % ne le considerent pas comme un critere important a l\u2019achat. Or c\u2019est devenu un critere legal pour louer.", source: "Ipsos/Atlantic sept. 2023 + Sondage Homeloop nov. 2024", type: "legal" },
    },
  },
  {
    id: "a4", type: "single", bloc: "Votre interet", bn: 1,
    title: "Si un outil vous accompagnait de A a Z dans votre premier investissement, ca vous interesserait ?",
    opts: ["Oui, clairement", "Peut-etre, ca depend du prix", "Non, je prefere me former seul(e)", "J\u2019ai deja un conseiller pour ca"],
  },
  {
    id: "a5", type: "single", bloc: "Votre budget", bn: 1,
    title: "Quel budget mensuel pour un tel outil ?",
    opts: ["Moins de 10 \u20ac", "10-20 \u20ac", "20-40 \u20ac", "Plus si c\u2019est vraiment complet", "Rien, ca devrait etre gratuit"],
  },
  {
    id: "a6", type: "multi", bloc: "Vos sources", bn: 1,
    title: "Comment vous informez-vous sur l\u2019immobilier ?",
    sub: "Plusieurs reponses possibles",
    opts: ["YouTube / podcasts", "Reseaux sociaux (Instagram, TikTok)", "Forums (Finary, Reddit\u2026)", "Mon entourage", "Un CGP ou conseiller", "Presse specialisee", "Je ne m\u2019informe pas vraiment"],
    globalInsight: { text: "Les reseaux sociaux sont la 1ere source d\u2019information des 18-24 ans pour l\u2019investissement (41 %). 29 % des nouveaux investisseurs consultent des influenceurs finance.", source: "Etude OCDE pour l\u2019AMF, enquete Audirep, avril 2023", type: "stat" },
  },
]

const QB: Question[] = [
  {
    id: "b1", type: "single", bloc: "Votre patrimoine", bn: 1,
    title: "Combien de biens exactement ?",
    opts: ["1", "2", "3"],
    insights: { "1": { text: "62 % des bailleurs prives ne detiennent qu\u2019un seul bien locatif. Et 91 % des bailleurs possedent entre 1 et 3 logements, representant 69 % du parc locatif prive.", source: "BPCE L\u2019Observatoire 2022-2025 + Etude ANIL", type: "stat" } },
  },
  {
    id: "b2", type: "multi", bloc: "Votre patrimoine", bn: 1,
    title: "Quel(s) type(s) de biens ?",
    sub: "Plusieurs reponses",
    opts: ["Appartement", "Maison", "Parking / cave", "Terrain", "Autre"],
  },
  {
    id: "b3", type: "multi", bloc: "Votre patrimoine", bn: 1,
    title: "Quel est l\u2019usage de vos biens ?",
    sub: "Plusieurs réponses possibles",
    opts: ["Location longue durée", "Location saisonnière", "Résidence principale", "Résidence secondaire", "En travaux", "Vacant"],
  },
  {
    id: "b4", type: "multi", bloc: "Votre patrimoine", bn: 1,
    title: "Comment détenez-vous vos biens ?",
    sub: "Plusieurs réponses possibles",
    opts: ["En nom propre", "Via une SCI", "Via une SNC ou autre société", "Je ne suis pas sûr(e)"],
    globalInsight: { text: "Environ 73 000 SCI sont créées chaque année en France. La SCI facilite la transmission mais implique des obligations comptables et déclaratives supplémentaires (AG, 2072\u2026).", source: "CNGTC / Infogreffe, janvier 2025", type: "stat" },
  },
  {
    id: "b5", type: "multi", bloc: "Votre quotidien", bn: 2,
    title: "Avec quels outils gérez-vous votre patrimoine au quotidien ?",
    sub: "Plusieurs réponses possibles",
    opts: ["Un tableur (Excel, Google Sheets)", "Un logiciel dédié (Rentila, BailFacile\u2026)", "Des classeurs papier / pochettes", "Mon téléphone (notes, photos)", "Mon comptable s\u2019occupe de tout", "Rien de particulier, tout dans ma tête"],
  },
  {
    id: "b6", type: "multi", bloc: "Votre quotidien", bn: 2, max: 3,
    title: "Parmi ces tâches, lesquelles vous prennent le plus de temps ou d\u2019énergie ?",
    sub: "Jusqu\u2019à 3 réponses",
    opts: ["Chercher un document (bail, quittance, facture)", "Rédiger et envoyer les quittances", "Préparer la déclaration fiscale (2044)", "Suivre les travaux et devis", "Gérer la relation avec les locataires", "Comprendre ma rentabilité réelle", "Gérer les sinistres et assurances"],
  },
  {
    id: "b7", type: "scale", bloc: "Votre quotidien", bn: 2,
    title: "La gestion administrative vous pese ?",
    sMin: "Tranquille", sMax: "Boule au ventre", sN: 5,
    insights: {
      4: { text: "25 % des bailleurs souhaitent se retirer du marche locatif (vs 18 % en 2022). Les raisons : fiscalite trop lourde (32 %), complexite de gestion (25 %), travaux DPE (20 %).", source: "BPCE L\u2019Observatoire, novembre 2025", type: "stat" },
      5: { text: "76 % des Francais trouvent l\u2019investissement locatif \u00ab trop complique \u00bb. Et pourtant, 69 % le considerent comme un bon placement. Ce paradoxe, c\u2019est votre quotidien.", source: "IFOP pour Masteos + CECOP/IFOP pour Cercle de l\u2019Epargne, mars 2025", type: "insight" },
    },
  },
  {
    id: "b8", type: "single", bloc: "Votre quotidien", bn: 2,
    title: "Avez-vous deja rate une echeance importante ?",
    sub: "Assurance, taxe, bail, declaration\u2026",
    opts: ["Jamais", "Une fois", "Plusieurs fois", "Je prefere ne pas en parler"],
    insights: { "Plusieurs fois": { text: "Les relances pour retard de paiement de loyer sont passees de 6 % en 2020 a pres de 20 % en 2024. Les echeances manquees sont devenues systemiques.", source: "Galivel & Associes / Imodirect, 2024", type: "stat" } },
  },
  {
    id: "b9", type: "single", bloc: "Ce qui vous manque", bn: 3,
    title: "Si un outil faisait UNE chose pour vous, ce serait quoi ?",
    opts: ["Centraliser mes documents", "Calculer ma rentabilite reelle", "Generer mes quittances", "M\u2019alerter sur les echeances", "M\u2019aider pour la 2044", "Voir tout mon patrimoine"],
    insights: {
      "Calculer ma rentabilite reelle": { text: "Au moins 50 % des bailleurs declarent ne pas vraiment gagner d\u2019argent avec leur patrimoine locatif. 20 % estiment perdre de l\u2019argent. Seulement 6 % percoivent un revenu confortable.", source: "BPCE L\u2019Observatoire, enquete Audirep 2022", type: "stat" },
      "Centraliser mes documents": { text: "Le taux de declaration sur la plateforme GMBI de la DGFiP n\u2019a atteint que 73 % pour l\u2019ensemble des proprietaires et 64 % chez les multiproprietaires. La paperasse decourage.", source: "DGFiP \u2014 Plateforme GMBI, 2024", type: "stat" },
    },
  },
  {
    id: "b10", type: "single", bloc: "Ce qui vous manque", bn: 3,
    title: "Vous etes plutot\u2026",
    opts: ["100% autonome", "Outil + accompagnement si besoin", "Quelqu\u2019un qui gere pour moi"],
    insights: { "Outil + accompagnement si besoin": { text: "Un bailleur sur deux delegue desormais a un professionnel \u2014 une hausse de 9 points par rapport a 2022. La tendance a l\u2019hybride s\u2019accelere.", source: "BPCE L\u2019Observatoire, novembre 2025", type: "stat" } },
  },
  {
    id: "b11", type: "single", bloc: "Ce qui vous manque", bn: 3,
    title: "Avez-vous deja essaye un logiciel de gestion ?",
    opts: ["Oui, je l\u2019utilise encore", "Oui, j\u2019ai arrete", "Non, jamais trouve", "Non, je savais pas que ca existait"],
  },
  {
    id: "b12", type: "single", bloc: "Le budget", bn: 4,
    title: "Pour un outil complet, quel budget mensuel ?",
    opts: ["Moins de 10 \u20ac", "10-20 \u20ac", "20-35 \u20ac", "35-60 \u20ac", "60\u20ac+ si vraiment complet"],
  },
  {
    id: "b13", type: "single", bloc: "Le budget", bn: 4,
    title: "Connaissez-vous le DPE de votre/vos bien(s) ?",
    opts: ["Oui, tous", "Certains", "Non, aucun", "C\u2019est quoi le DPE ?"],
    insights: {
      "Non, aucun": { text: "49 % des bailleurs prives ne connaissent pas le classement DPE de leur bien. Or depuis 2025, un DPE G = interdiction de louer. Les F suivront en 2028.", source: "BPCE L\u2019Observatoire 2022 + Loi Climat & Resilience", type: "legal" },
      "C\u2019est quoi le DPE ?": { text: "Le Diagnostic de Performance Energetique classe les logements de A a G. 3,9 millions de logements (12,7 % du parc) sont des passoires thermiques F ou G. Les G sont interdits a la location depuis 2025.", source: "SDES, 1er janvier 2025 + Service-public.fr", type: "legal" },
    },
  },
]

const QC: Question[] = [
  {
    id: "c1", type: "single", bloc: "Votre patrimoine", bn: 1,
    title: "Combien de biens au total ?",
    opts: ["4-5", "6-10", "11-20", "Plus de 20"],
    insights: {
      "11-20": { text: "Le taux d\u2019impayés atteint 5,33 % chez les particuliers en gestion directe, contre 1,97 % en gestion professionnelle. À votre échelle, chaque impayé coûte cher.", source: "Imodirect / Meilleurtaux, janvier 2025", type: "stat" },
      "Plus de 20": { text: "Moins de 1 % des bailleurs (~24 000 personnes) possèdent 10 biens ou plus, mais contrôlent 8 % du parc locatif privé. L\u2019enjeu d\u2019organisation est proportionnel.", source: "Étude ANIL — Parc locatif privé", type: "stat" },
    },
  },
  {
    id: "c1b", type: "single", bloc: "Votre activité", bn: 1,
    title: "Êtes-vous aussi marchand de biens ou investisseur professionnel ?",
    opts: ["Oui, c\u2019est mon activité principale", "Oui, en complément", "Non, uniquement patrimoine personnel"],
  },
  {
    id: "c2", type: "single", bloc: "Votre patrimoine", bn: 1,
    title: "Comment détenez-vous vos biens ?",
    opts: ["Tout en nom propre", "Une ou plusieurs SCI", "SNC ou autre société", "Un mix de structures", "Holding / montage complexe"],
    insights: { "Un mix de structures": { text: "Environ 73 000 SCI sont créées chaque année en France. Chaque structure multiplie les obligations : AG, comptes annuels, 2072, 2044\u2026 Sans outil, c\u2019est ingérable.", source: "CNGTC / Infogreffe, janv. 2025 + INSEE Première 2025", type: "stat" } },
  },
  {
    id: "c2b", type: "single", bloc: "Votre vision", bn: 1,
    title: "Votre gestion patrimoniale est plutôt\u2026",
    opts: ["100 % perso (patrimoine familial)", "Perso + activité pro (MDB, investisseur)", "Principalement pro (société, fonds)", "Un mix complexe des deux"],
  },
  {
    id: "c3", type: "single", bloc: "Votre gestion", bn: 2,
    title: "Qui gere au quotidien ?",
    opts: ["Moi, tout seul(e)", "Moi + comptable", "Un gestionnaire", "Une agence", "Un(e) assistant(e)", "C\u2019est eclate entre plusieurs personnes"],
    insights: { "Moi, tout seul(e)": { text: "La gestion directe est plus frequente en zones rurales (88 %) qu\u2019a Paris (53 %). Mais le taux d\u2019impayes en gestion directe est 2,7 fois superieur a celui en gestion pro.", source: "Etude ANIL + Imodirect/Meilleurtaux 2025", type: "stat" } },
  },
  {
    id: "c4", type: "single", bloc: "Votre gestion", bn: 2,
    title: "Combien dépensez-vous par mois en gestion ?",
    sub: "Comptable, agence, outils — tout compris",
    opts: ["Moins de 100 \u20ac", "100-300 \u20ac", "300-500 \u20ac", "500-1 000 \u20ac", "Plus de 1 000 \u20ac", "Je ne sais pas"],
    insights: { "500-1 000 \u20ac": { text: "Les honoraires de gestion locative se situent entre 5 % et 10 % TTC du loyer mensuel. Les agences en ligne facturent 4 a 7 %. La question : avez-vous la visibilite en retour ?", source: "FNAIM + Service-public.fr", type: "insight" } },
  },
  {
    id: "c5", type: "multi", bloc: "Votre gestion", bn: 2, max: 3,
    title: "Vos plus gros problemes de gestion ?",
    sub: "Jusqu\u2019a 3 reponses",
    opts: ["Vision consolidee inexistante", "Documents eparpilles", "Comptabilite SCI complexe", "Rentabilite floue par bien", "Coordination entre intervenants", "Fiscalite multi-entites", "Travaux / renovation DPE", "Impayes et relances"],
    globalInsight: { text: "171 000 commandements de payer signifies en 2024 (+11 % vs 2023). 24 000 expulsions effectives \u2014 un record historique en hausse de 87 %.", source: "Chambre nationale des commissaires de justice (CNCJ), mars 2025", type: "stat" },
  },
  {
    id: "c6", type: "single", bloc: "Accompagnement", bn: 3,
    title: "Seriez-vous interesse(e) par un accompagnement administratif complet ?",
    sub: "Verification docs, relances, preparation declarations\u2026",
    opts: ["Oui, c\u2019est exactement ce qu\u2019il me faut", "Peut-etre, ca depend du prix", "Non, je veux juste un outil", "J\u2019ai deja quelqu\u2019un pour ca"],
    insights: { "Oui, c\u2019est exactement ce qu\u2019il me faut": { text: "Un bailleur sur deux delegue desormais a un professionnel \u2014 +9 points vs 2022. Et le secteur de la gestion affiche seulement 43 % de satisfaction client, 9 points sous la moyenne nationale.", source: "BPCE L\u2019Observatoire 2025 + Barometre Academie du Service 2022", type: "stat" } },
  },
  {
    id: "c7", type: "single", bloc: "Le budget", bn: 3,
    title: "Pour un outil complet + accompagnement, quel budget mensuel ?",
    opts: ["Moins de 50 \u20ac", "50-100 \u20ac", "100-200 \u20ac", "200-500 \u20ac", "500 \u20ac+ si le service est complet"],
  },
  {
    id: "c8", type: "single", bloc: "Conformite", bn: 3,
    title: "Vos biens sont-ils tous conformes DPE ?",
    opts: ["Oui, tous au-dessus de F", "Certains sont F ou G", "Je ne sais pas", "J\u2019ai des travaux en cours"],
    insights: {
      "Certains sont F ou G": { text: "Cout moyen pour sortir du statut de passoire thermique : 25 000 \u20ac en collectif, jusqu\u2019a 62 700 \u20ac en renovation lourde. Le reste a charge apres aides : 2 400 a 9 000 \u20ac.", source: "Rapport Sichel 2021 (Caisse des Depots) + SDES/Anah 2024", type: "stat" },
      "Je ne sais pas": { text: "49 % des bailleurs ne connaissent pas le DPE de leurs biens. 3,9 millions de logements sont classes F ou G (12,7 % du parc). Les G sont interdits a la location depuis 2025, les F le seront en 2028.", source: "BPCE L\u2019Observatoire 2022 + SDES janv. 2025", type: "legal" },
    },
  },
  {
    id: "c9", type: "single", bloc: "Conformite", bn: 3,
    title: "Des problemes d\u2019impayes ces 12 derniers mois ?",
    opts: ["Non, jamais", "Un retard ponctuel", "Impayes recurrents", "Procedure en cours"],
    insights: { "Procedure en cours": { text: "Duree moyenne d\u2019une procedure d\u2019expulsion : environ 2 ans du commandement de payer au depart effectif. La treve hivernale peut ajouter 5 mois, et le juge peut accorder des delais de paiement jusqu\u2019a 3 ans.", source: "Me Charlotte Sebileau, AGN Avocats + Loi du 6 juillet 1989, art. 24", type: "legal" } },
  },
]

const QD: Question[] = [
  {
    id: "d1", type: "single", bloc: "Votre activite", bn: 1,
    title: "Quel est votre metier ?",
    opts: ["Marchand de biens", "Gestionnaire / admin de biens", "Agent immobilier", "CGP / conseiller patrimonial", "Comptable / expert-comptable", "Courtier (credit ou assurance)", "Autre"],
  },
  {
    id: "d2", type: "single", bloc: "Votre activite", bn: 1,
    title: "Combien de biens / clients gerez-vous ?",
    opts: ["Moins de 10", "10-50", "50-200", "Plus de 200"],
    insights: { "Plus de 200": { text: "Le secteur a perdu 15 847 cartes professionnelles en un an : -1 611 cartes T (transaction), -176 cartes G (gestion). Soit ~1 600 agences et 16 000 emplois en moins.", source: "CCI / UNIS (Danielle Dubrac, presidente), janvier 2025", type: "stat" } },
  },
  {
    id: "d3", type: "multi", bloc: "Vos outils", bn: 1,
    title: "Quels outils utilisez-vous ?",
    sub: "Plusieurs reponses",
    opts: ["Logiciel metier (Loja, Powimo\u2026)", "Excel / tableurs", "CRM classique", "Outils comptables (Sage, Cegid\u2026)", "Rien de specifique"],
  },
  {
    id: "d4", type: "multi", bloc: "Relation clients", bn: 2, max: 2,
    title: "Votre plus gros probleme dans la relation avec les proprietaires ?",
    sub: "Jusqu\u2019a 2 reponses",
    opts: ["Documents incomplets ou manquants", "Proprietaires qui ne connaissent pas leur patrimoine", "Manque de donnees fiables", "Communication difficile", "Suivi des echeances decale", "Pas de vision consolidee"],
    globalInsight: { text: "62 % des bailleurs craignent les degradations, 55 % ont deja ete confrontes aux impayes, et 48 % redoutent l\u2019occupation illegale. La relation proprietaire-pro est sous tension.", source: "Enquete Viavoice pour GALIAN-SMABTP, mai 2024 (603 proprietaires-bailleurs)", type: "stat" },
  },
  {
    id: "d4b", type: "single", bloc: "Relation clients", bn: 2,
    title: "La transparence avec vos clients propriétaires, c\u2019est un sujet ?",
    opts: ["Oui, ils demandent de plus en plus de visibilité", "Un peu, mais ça se gère", "Non, la relation est fluide", "C\u2019est le nerf de la guerre"],
    insights: { "Oui, ils demandent de plus en plus de visibilité": { text: "Le secteur immobilier affiche 43 % de satisfaction client — 9 points sous la moyenne nationale. La transparence est le 1er levier d\u2019amélioration identifié.", source: "Baromètre Symétrie des Attentions, Académie du Service, 2022", type: "insight" } },
  },
  {
    id: "d5", type: "single", bloc: "Parkimmo", bn: 2,
    title: "Si vos clients avaient un espace numérique centralisé et que vous y aviez accès — ça changerait votre quotidien ?",
    opts: ["Oui, radicalement", "Oui, ca aiderait", "Bof, pas vraiment", "Non, mes outils suffisent"],
  },
  {
    id: "d6", type: "single", bloc: "Parkimmo", bn: 2,
    title: "Seriez-vous interesse(e) par un acces partenaire gratuit ?",
    sub: "Acces aux donnees de vos clients proprietaires, avec leur accord",
    opts: ["Oui, tres interesse(e)", "Peut-etre, j\u2019aimerais en savoir plus", "Non merci"],
    insights: { "Oui, tres interesse(e)": { text: "Le secteur immobilier affiche 43 % de satisfaction client \u2014 9 points sous la moyenne nationale. 71 % des pros pensent offrir une bonne experience, mais seuls 43 % des clients sont d\u2019accord.", source: "Barometre Symetrie des Attentions, Academie du Service, 2022", type: "insight" } },
  },
  {
    id: "d7", type: "single", bloc: "Parkimmo", bn: 2,
    title: "Recommanderiez-vous un tel outil a vos clients ?",
    opts: ["Oui, spontanement", "Oui, si l\u2019outil est bon", "Non, ca compliquerait les choses", "Je voudrais le tester d\u2019abord"],
  },
]

const Q_COMMON = (profile: string): Question[] => [
  {
    id: "f1", type: "single", bloc: "On garde le contact ?", bn: 5,
    title: "On construit Parkimmo en ce moment. Ca vous dit ?",
    opts: ["Oui, tenez-moi informe(e)", "Oui, je veux tester en avant-premiere", "Envoyez-moi un mail le jour J", "Non merci"],
  },
  {
    id: "email", type: "email", bloc: "On garde le contact ?", bn: 5,
    title: "Votre email",
    sub: "Uniquement si vous souhaitez etre recontacte(e)",
    optional: true,
  },
  {
    id: "freetext", type: "freetext", bloc: "On garde le contact ?", bn: 5,
    title: "Un dernier mot ?",
    sub: ({ A: "Ce qui vous fait le plus peur dans l\u2019investissement immobilier ?", B: "Un truc qui vous enerve dans la gestion de vos biens ? Lachez-vous.", C: "La chose que vous aimeriez qu\u2019on resolve en premier ?", D: "Ce qui manque le plus dans les outils immo actuels ?" } as Record<string, string>)[profile] || "Dites-nous tout\u2026",
    optional: true,
  },
]

/* ════ HELPERS ════ */
const getInsight = (q: Question, answer: string | number): Insight | null => {
  if (q.type === "scale" && "insights" in q && q.insights) return q.insights[answer as number] || null
  if (q.type === "multi" && "globalInsight" in q && q.globalInsight) return q.globalInsight
  if ("insights" in q && q.insights) return (q.insights as Record<string, Insight>)[answer as string] || null
  return null
}

const getProfileTags = (ans: Record<string, string | string[] | number>, prof: string | null): ProfileTag[] => {
  const t: ProfileTag[] = []
  if (prof) t.push({ l: PROFILE_LABELS[prof], c: PROFILE_COLORS[prof] })
  const nb = (ans.b1 as string) || (ans.c1 as string)
  if (nb) {
    if (["1", "2", "3"].includes(nb)) t.push({ l: `${nb} bien${nb !== "1" ? "s" : ""}`, c: COLORS.primaryL })
    else t.push({ l: nb + " biens", c: COLORS.accent })
  }
  const b3 = ans.b3 as string
  if (b3) {
    if (b3.includes("longue")) t.push({ l: "Bailleur", c: COLORS.success })
    if (b3.includes("saisonnier")) t.push({ l: "Saisonnier", c: COLORS.accent })
  }
  if (ans.b4 === "Via une SCI" || (Array.isArray(ans.c2) && (ans.c2 as string[]).includes("SCI"))) t.push({ l: "SCI", c: COLORS.dark })
  if (ans.d1) t.push({ l: ans.d1 as string, c: COLORS.success })
  return t.slice(0, 4)
}

/* ════ INSIGHT STYLE MAP ════ */
const INSIGHT_STYLES: Record<string, { bg: string; border: string; label: string; icon: string }> = {
  stat: { bg: "bg-blue-50", border: "border-[#1F4D38]", label: "Chiffre cle", icon: "📊" },
  insight: { bg: "bg-orange-50", border: "border-[#8FAF8A]", label: "Le saviez-vous ?", icon: "💡" },
  tip: { bg: "bg-emerald-50", border: "border-[#0E9F6E]", label: "Bon a savoir", icon: "✅" },
  legal: { bg: "bg-amber-50", border: "border-amber-700", label: "Point juridique", icon: "⚖️" },
}

const INSIGHT_LABEL_COLORS: Record<string, string> = {
  stat: "text-[#1F4D38]",
  insight: "text-[#8FAF8A]",
  tip: "text-[#0E9F6E]",
  legal: "text-amber-700",
}

/* ════════════════════════════════════════════════════════════════
   UI COMPONENTS
   ════════════════════════════════════════════════════════════════ */

function InsightCard({ insight, onContinue }: { insight: Insight; onContinue: () => void }) {
  const style = INSIGHT_STYLES[insight.type] || INSIGHT_STYLES.stat
  const labelColor = INSIGHT_LABEL_COLORS[insight.type] || INSIGHT_LABEL_COLORS.stat
  return (
    <div className={`mt-6 p-5 ${style.bg} border-l-[3px] ${style.border} rounded-r-[14px] animate-enquete-insight-slide`}>
      <div className="flex items-start gap-3.5">
        <span className="text-2xl leading-none shrink-0 animate-enquete-pop-in" style={{ animationDelay: "0.2s" }}>{style.icon}</span>
        <div className="flex-1">
          <span className={`text-[10px] font-bold uppercase tracking-widest ${labelColor} block mb-1.5`}>{style.label}</span>
          <p className="text-sm leading-relaxed text-slate-800 mb-2.5">{insight.text}</p>
          <p className="text-[11px] leading-snug text-slate-400 italic">Source : {insight.source}</p>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={onContinue}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border-none cursor-pointer bg-gradient-to-br from-[#1A3D2E] to-[#1F4D38] text-white text-[13px] font-medium animate-enquete-fade-in hover:-translate-y-px hover:shadow-lg transition-all duration-200"
          style={{ animationDelay: "0.3s" }}
        >
          Continuer
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  )
}

function Opt({ label, sel, onClick, i, multi }: { label: string; sel: boolean; onClick: () => void; i: number; multi?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3.5 w-full px-4 py-3 text-left cursor-pointer outline-none rounded-xl border-[1.5px] transition-all duration-200 ${
        sel
          ? "bg-[#1A3D2E]/5 border-[#1A3D2E] shadow-[0_0_0_3px_rgba(26,61,46,0.07)]"
          : "bg-white border-slate-200 hover:border-[#1F4D38] hover:-translate-y-px hover:shadow-md"
      }`}
      style={{ animation: `enquete-appear 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 0.045}s both` }}
    >
      <span
        className={`w-5 h-5 shrink-0 flex items-center justify-center border-2 transition-all duration-200 ${
          multi ? "rounded-[5px]" : "rounded-full"
        } ${sel ? "border-[#1A3D2E] bg-[#1A3D2E]" : "border-slate-300 bg-transparent"}`}
      >
        {sel && (
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="animate-enquete-pop-in">
            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className={`text-[14.5px] leading-snug ${sel ? "font-medium text-[#1A3D2E]" : "font-normal text-slate-800"}`}>
        {label}
      </span>
    </button>
  )
}

function ScaleBtn({ value, sel, onClick, i, label }: { value: number; sel: boolean; onClick: () => void; i: number; label?: string | null }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <button
        onClick={onClick}
        className={`w-14 h-14 rounded-[14px] cursor-pointer outline-none border-2 text-xl font-semibold transition-all duration-300 ${
          sel
            ? "border-[#1A3D2E] bg-gradient-to-br from-[#1A3D2E] to-[#1F4D38] text-white scale-[1.04] shadow-[0_6px_20px_rgba(26,61,46,0.19)]"
            : "border-slate-200 bg-white text-slate-800 hover:border-[#1F4D38] hover:-translate-y-0.5 hover:scale-[1.06] hover:text-[#1A3D2E]"
        }`}
        style={{ animation: `enquete-appear 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s both` }}
      >
        {value}
      </button>
      {label && <span className="text-[10.5px] text-slate-400 text-center max-w-[64px] leading-tight">{label}</span>}
    </div>
  )
}

function CtaBtn({ label, onClick, primary, disabled, back }: { label: string; onClick: () => void; primary?: boolean; disabled?: boolean; back?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-1.5 rounded-[10px] cursor-pointer outline-none text-sm font-medium transition-all duration-200 ${
        primary
          ? `px-6 py-3 border-none text-white ${disabled ? "bg-slate-400 opacity-45 cursor-not-allowed" : "bg-gradient-to-br from-[#1A3D2E] to-[#1F4D38] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(26,61,46,0.15)]"}`
          : `px-4 py-3 border-[1.5px] border-slate-200 bg-transparent text-slate-500`
      }`}
    >
      {back && (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      )}
      {label}
      {!back && primary && (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      )}
    </button>
  )
}

function Progress({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100)
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-slate-50/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-[680px] mx-auto px-6 pt-3 pb-2.5 flex items-center gap-3.5">
        <span className="font-semibold text-[15px] text-[#1A3D2E] whitespace-nowrap tracking-wide" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>PARKIMMO</span>
        <div className="flex-1 h-[3px] bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#1A3D2E] to-[#1F4D38] transition-[width] duration-700 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-[#1A3D2E] min-w-[38px] text-right">{pct}%</span>
      </div>
    </div>
  )
}

function ProfileBar({ tags }: { tags: ProfileTag[] }) {
  if (!tags.length) return null
  return (
    <div className="flex flex-wrap gap-1.5 justify-center px-5 py-2.5 animate-enquete-fade-in">
      <span className="text-[11px] text-slate-400 mr-1 self-center">Votre profil :</span>
      {tags.map((t, i) => (
        <span
          key={i}
          className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium"
          style={{
            color: t.c,
            border: `1px solid ${t.c}30`,
            background: `${t.c}08`,
            animation: `enquete-appear-soft 0.4s ease ${i * 0.08}s both`,
          }}
        >
          {t.l}
        </span>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN
   ═══════════════════════════════════════════════════════════════ */
export default function EnquetePage() {
  const [step, setStep] = useState(-1)
  const [ans, setAns] = useState<Record<string, string | string[] | number>>({})
  const [anim, setAnim] = useState<"in" | "out">("in")
  const [insight, setInsight] = useState<Insight | null>(null)
  const [profile, setProfile] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [freeText, setFreeText] = useState("")
  const [startTime] = useState(() => Date.now())
  const [submitted, setSubmitted] = useState(false)

  const questions = useMemo(() => {
    const base: Question[] = [...Q_DEMO, Q_ROOT]
    if (profile === "A") base.push(...QA)
    else if (profile === "B") base.push(...QB)
    else if (profile === "C") base.push(...QC)
    else if (profile === "D") base.push(...QD)
    if (profile) base.push(...Q_COMMON(profile))
    return base
  }, [profile])

  const q = step === -1 ? null : step === questions.length ? null : questions[step]
  const totalQ = questions.length
  const isIntro = step === -1
  const isEnd = step === questions.length
  const isQuestion = !isIntro && !isEnd

  const profileTags = useMemo(() => getProfileTags(ans, profile), [ans, profile])

  const go = useCallback((dir: number) => {
    setInsight(null)
    setAnim("out")
    setTimeout(() => {
      setStep((s) => s + dir)
      setAnim("in")
    }, 300)
  }, [])

  const pick = useCallback(
    (qId: string, val: string) => {
      setAns((a) => ({ ...a, [qId]: val }))
      if (qId === "q0" && Q_ROOT.profileMap?.[val]) {
        setProfile(Q_ROOT.profileMap[val])
      }
      const currentQ = questions.find((x) => x.id === qId)
      const ins = currentQ ? getInsight(currentQ, val) : null
      if (ins) {
        setInsight(ins)
      } else {
        setTimeout(() => go(1), 400)
      }
    },
    [questions, go]
  )

  const pickScale = useCallback(
    (qId: string, val: number) => {
      setAns((a) => ({ ...a, [qId]: val }))
      const currentQ = questions.find((x) => x.id === qId)
      const ins = currentQ ? getInsight(currentQ, val) : null
      if (ins) {
        setInsight(ins)
      } else {
        setTimeout(() => go(1), 450)
      }
    },
    [questions, go]
  )

  const toggle = useCallback((qId: string, val: string, max?: number) => {
    setAns((a) => {
      const cur = (a[qId] as string[]) || []
      if (cur.includes(val)) return { ...a, [qId]: cur.filter((v) => v !== val) }
      if (max && cur.length >= max) return a
      return { ...a, [qId]: [...cur, val] }
    })
  }, [])

  // Submit on end
  useEffect(() => {
    if (isEnd && profile && !submitted) {
      setSubmitted(true)
      const duration = Math.round((Date.now() - startTime) / 1000)
      fetch("/api/enquete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profile,
          age: (ans.demo_age as string) || null,
          profession: (ans.demo_job as string) || null,
          answers: ans,
          email: email || null,
          freeText: freeText || null,
          userAgent: navigator.userAgent,
          duration,
        }),
      }).catch(console.error)
    }
  }, [isEnd, profile, ans, email, freeText, startTime, submitted])

  // Enter key for multi/email/freetext
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Enter" && q && !["single", "scale"].includes(q.type) && !insight) go(1)
    }
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [step, q, go, insight])

  const cAnim = anim === "in" ? "animate-enquete-appear" : "animate-enquete-exit-up"

  return (
    <div className="min-h-screen text-slate-800 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 relative overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Decorative circles */}
      <div className="fixed -top-44 -right-44 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(26,61,46,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="fixed -bottom-28 -left-28 w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(143,175,138,0.03)_0%,transparent_70%)] pointer-events-none" />

      {isQuestion && <Progress current={step} total={totalQ} />}

      {isQuestion && profileTags.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-50/90 backdrop-blur-sm border-t border-slate-200">
          <ProfileBar tags={profileTags} />
        </div>
      )}

      <div className="flex items-center justify-center min-h-screen px-5 py-[72px] pb-[60px]">
        <div key={step} className={`w-full ${isIntro || isEnd ? "max-w-[540px]" : "max-w-[620px]"} ${cAnim}`}>

          {/* ═══ INTRO ═══ */}
          {isIntro && (
            <div className="text-center">
              <div
                className="w-[60px] h-[60px] rounded-2xl mx-auto mb-6 bg-gradient-to-br from-[#1A3D2E] to-[#1F4D38] flex items-center justify-center shadow-[0_8px_28px_rgba(26,61,46,0.15)] animate-enquete-pop-in"
                style={{ animationDelay: "0.1s" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 9L12 2L21 9V20C21 20.53 20.79 21.04 20.41 21.41C20.04 21.79 19.53 22 19 22H5C4.47 22 3.96 21.79 3.59 21.41C3.21 21.04 3 20.53 3 20V9Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22V12H15V22" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h1 className="text-[34px] font-semibold text-slate-900 mb-2 tracking-tight leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", animation: "enquete-appear 0.6s ease 0.2s both" }}>
                Et vous, vous gérez comment votre patrimoine immobilier ?
              </h1>
              <p className="text-[15px] text-[#8FAF8A] font-medium mb-6" style={{ animation: "enquete-appear 0.6s ease 0.28s both" }}>
                L&apos;enquête qui s&apos;adapte à votre profil
              </p>
              <div className="max-w-[440px] mx-auto" style={{ animation: "enquete-appear 0.6s ease 0.35s both" }}>
                <p className="text-[14.5px] leading-relaxed text-slate-500 mb-2.5">
                  Que vous soyez futur investisseur, propriétaire d&apos;un studio ou gestionnaire de 50 biens &mdash; cette enquête s&apos;adapte à vous.
                </p>
                <p className="text-[14.5px] leading-relaxed text-slate-500">
                  Vos réponses nous aident à construire la plateforme de gestion patrimoniale dont vous avez besoin.
                </p>
              </div>
              <div className="flex justify-center gap-5 mt-7" style={{ animation: "enquete-appear 0.6s ease 0.42s both" }}>
                {[
                  { i: "⏱️", l: "3-6 min" },
                  { i: "🔒", l: "100% anonyme" },
                  { i: "✉️", l: "Aucun email requis" },
                ].map((b, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 text-[12.5px] text-slate-500 font-medium">
                    {b.i} {b.l}
                  </span>
                ))}
              </div>
              <div className="mt-9" style={{ animation: "enquete-appear 0.6s ease 0.5s both" }}>
                <CtaBtn label="C'est parti" onClick={() => go(1)} primary />
              </div>
              <p className="text-[11px] text-slate-400 mt-4" style={{ animation: "enquete-fade-in 0.6s ease 0.6s both" }}>
                Par PARKIMMO &middot; K PAR K CONSEILS SAS
              </p>
            </div>
          )}

          {/* ═══ END ═══ */}
          {isEnd && (
            <div className="text-center">
              <div className="w-[60px] h-[60px] rounded-full mx-auto mb-6 bg-emerald-50 flex items-center justify-center animate-enquete-pop-in relative">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 13L9 17L19 7" stroke="#0E9F6E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {["#8FAF8A", "#1A3D2E", "#059669", "#8B5CF6"].map((c, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-sm"
                    style={{
                      background: c,
                      top: "50%",
                      left: "50%",
                      animation: `enquete-confetti-${(i % 3) + 1} 0.7s ease ${0.15 + i * 0.1}s both`,
                      marginLeft: [-14, 14, -10, 16][i],
                      marginTop: [-10, -14, 4, -4][i],
                    }}
                  />
                ))}
              </div>
              <h1 className="text-[28px] font-semibold text-slate-900 mb-2.5" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", animation: "enquete-appear 0.6s ease 0.15s both" }}>
                Merci pour votre temps
              </h1>
              <p className="text-[15px] text-slate-500 leading-relaxed" style={{ animation: "enquete-appear 0.6s ease 0.25s both" }}>
                Vos reponses nous aident a construire quelque chose qui compte.
              </p>
              {profileTags.length > 0 && (
                <div className="mt-8 px-6 py-5 bg-white rounded-[14px] border border-slate-200" style={{ animation: "enquete-appear 0.6s ease 0.35s both" }}>
                  <p className="text-xs text-slate-400 mb-2.5 font-medium">Votre profil</p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {profileTags.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ color: t.c, background: `${t.c}10`, border: `1px solid ${t.c}25` }}
                      >
                        {t.l}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-6 px-6 py-4 bg-[#1A3D2E]/[0.04] rounded-[14px] border border-[#1A3D2E]/10" style={{ animation: "enquete-appear 0.6s ease 0.45s both" }}>
                <p className="text-[17px] font-semibold text-[#1A3D2E] tracking-wide" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>PARKIMMO</p>
                <p className="text-xs text-slate-500 mt-1">La plateforme de gestion patrimoniale immobilière</p>
              </div>
            </div>
          )}

          {/* ═══ QUESTIONS ═══ */}
          {isQuestion && q && (
            <div>
              {q.bloc && (
                <div className="inline-flex items-center gap-2 mb-4 animate-enquete-fade-in">
                  <span
                    className="w-6 h-6 rounded-full text-white text-[11px] font-semibold flex items-center justify-center"
                    style={{ background: profile ? PROFILE_COLORS[profile] : COLORS.primary }}
                  >
                    {q.bn || "?"}
                  </span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{q.bloc}</span>
                  <span className="text-xs text-slate-400">&middot; {step + 1}/{totalQ}</span>
                </div>
              )}

              <h2 className="text-[23px] font-medium text-slate-900 leading-snug mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                {q.title}
              </h2>
              {q.sub && (
                <p className="text-[13.5px] text-slate-500 mb-6 leading-relaxed">
                  {typeof q.sub === "string" ? q.sub : ""}
                </p>
              )}
              {!q.sub && <div className="mb-6" />}

              {/* Single */}
              {q.type === "single" && !insight && (
                <div className="flex flex-col gap-1.5">
                  {(q as SingleQuestion).opts.map((o, i) => (
                    <Opt key={o} label={o} sel={ans[q.id] === o} onClick={() => pick(q.id, o)} i={i} />
                  ))}
                </div>
              )}

              {/* Multi */}
              {q.type === "multi" && (
                <>
                  <div className="flex flex-col gap-1.5">
                    {(q as MultiQuestion).opts.map((o, i) => (
                      <Opt
                        key={o}
                        label={o}
                        sel={((ans[q.id] as string[]) || []).includes(o)}
                        onClick={() => toggle(q.id, o, (q as MultiQuestion).max)}
                        i={i}
                        multi
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-5" style={{ animation: "enquete-fade-in 0.5s ease 0.35s both" }}>
                    {q.optional ? (
                      <button onClick={() => go(1)} className="bg-transparent border-none text-slate-400 text-[13px] cursor-pointer underline underline-offset-[3px]">
                        Passer
                      </button>
                    ) : (
                      <div />
                    )}
                    <CtaBtn
                      label="Valider"
                      onClick={() => {
                        const mq = q as MultiQuestion
                        const ins = mq.globalInsight
                        if (ins && ((ans[q.id] as string[]) || []).length > 0) {
                          setInsight(ins)
                        } else {
                          go(1)
                        }
                      }}
                      primary
                      disabled={!q.optional && !((ans[q.id] as string[])?.length > 0)}
                    />
                  </div>
                </>
              )}

              {/* Scale */}
              {q.type === "scale" && !insight && (
                <div className="flex justify-center gap-3.5 mt-2 flex-wrap">
                  {Array.from({ length: (q as ScaleQuestion).sN }, (_, i) => i + 1).map((v, i) => (
                    <ScaleBtn
                      key={v}
                      value={v}
                      sel={ans[q.id] === v}
                      onClick={() => pickScale(q.id, v)}
                      i={i}
                      label={v === 1 ? (q as ScaleQuestion).sMin : v === (q as ScaleQuestion).sN ? (q as ScaleQuestion).sMax : null}
                    />
                  ))}
                </div>
              )}

              {/* Email */}
              {q.type === "email" && (
                <div className="animate-enquete-appear">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setAns((a) => ({ ...a, [q.id]: e.target.value }))
                    }}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3.5 text-base border-[1.5px] border-slate-200 rounded-xl outline-none bg-white text-slate-800 transition-colors duration-200 focus:border-[#1A3D2E]"
                  />
                  <div className="flex justify-between mt-5">
                    <CtaBtn label="Passer" onClick={() => go(1)} />
                    <CtaBtn label="Continuer" onClick={() => go(1)} primary />
                  </div>
                </div>
              )}

              {/* Free text */}
              {q.type === "freetext" && (
                <div className="animate-enquete-appear">
                  <textarea
                    value={freeText}
                    onChange={(e) => {
                      setFreeText(e.target.value)
                      setAns((a) => ({ ...a, [q.id]: e.target.value }))
                    }}
                    placeholder="Dites-nous tout\u2026"
                    rows={4}
                    className="w-full px-4 py-3.5 text-[15px] border-[1.5px] border-slate-200 rounded-xl outline-none bg-white text-slate-800 resize-y leading-relaxed transition-colors duration-200 focus:border-[#1A3D2E]"
                  />
                  <div className="flex justify-between mt-5">
                    <CtaBtn label="Passer" onClick={() => go(1)} />
                    <CtaBtn label="Terminer" onClick={() => go(1)} primary />
                  </div>
                </div>
              )}

              {/* Insight */}
              {insight && <InsightCard insight={insight} onContinue={() => go(1)} />}

              {/* Back */}
              {!insight && ["single", "scale"].includes(q.type) && step > 0 && (
                <div className="mt-5" style={{ animation: "enquete-fade-in 0.5s ease 0.45s both" }}>
                  <CtaBtn label="Retour" onClick={() => go(-1)} back />
                </div>
              )}
              {q.type === "multi" && step > 0 && (
                <div className="mt-2" style={{ animation: "enquete-fade-in 0.5s ease 0.45s both" }}>
                  <CtaBtn label="Retour" onClick={() => go(-1)} back />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
