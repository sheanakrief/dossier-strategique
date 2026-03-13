"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import StatCard from "@/components/dossier/StatCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import TimelineItem from "@/components/dossier/TimelineItem"
import {
  Wrench, Layers, Database, HardDrive, Archive, Globe, Palette, Bot,
  Map, Monitor, Compass, Shield, Zap, Server, Lock, Eye,
  Mail, Send, Bell, FileText, Key, UserCheck, CreditCard,
  Cloud, GitBranch, Network, Box, ArrowRight, Workflow,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

/* ─── STACK SIMPLIFIE ─── */
const STACK: { couche: string; tech: string; explication: string; icon: LucideIcon }[] = [
  {
    couche: "Interface utilisateur",
    tech: "Next.js 16 + React 19 + TypeScript",
    explication: "Ce que vous voyez a l'ecran — les pages se chargent instantanement, meme sur mobile",
    icon: Monitor,
  },
  {
    couche: "Structure des donnees",
    tech: "Prisma (38 modeles)",
    explication: "Organise toutes vos donnees (biens, locataires, charges...) de facon securisee et sans erreur",
    icon: Database,
  },
  {
    couche: "Base de donnees",
    tech: "Turso (datacenter Paris)",
    explication: "Stocke toutes les informations a Paris — temps de reponse inferieur a 10 millisecondes",
    icon: HardDrive,
  },
  {
    couche: "Stockage documents",
    tech: "Scaleway (Paris, compatible S3)",
    explication: "Vos documents (baux, factures, photos) sont stockes en France, proteges par le droit francais",
    icon: Archive,
  },
  {
    couche: "Hebergement web",
    tech: "Vercel Edge Network",
    explication: "Le site est accessible partout dans le monde, avec deploiement automatique a chaque mise a jour",
    icon: Globe,
  },
  {
    couche: "Design",
    tech: "Tailwind CSS + shadcn/ui",
    explication: "Un systeme de design coherent qui garantit une interface professionnelle et homogene",
    icon: Palette,
  },
  {
    couche: "Intelligence artificielle",
    tech: "Claude API (Anthropic) + OCR",
    explication: "Lecture automatique de vos documents : l'IA extrait les infos des baux, factures, avis d'imposition",
    icon: Bot,
  },
  {
    couche: "Emails",
    tech: "Resend (@parkimmo.io)",
    explication: "Envoi automatique d'emails : bienvenue, quittances de loyer, alertes d'echeances, rappels",
    icon: Mail,
  },
  {
    couche: "Paiement",
    tech: "Stripe",
    explication: "Paiement en ligne securise, gestion des abonnements et des formules automatiquement",
    icon: CreditCard,
  },
]

/* ─── ECOSYSTEME ─── */
const ECOSYSTEM = [
  {
    name: "parkimmo.app",
    subtitle: "Application SaaS principale",
    icon: Monitor,
    color: "#1A3D2E",
    desc: "L'application de gestion patrimoniale utilisee par les proprietaires. 38 modeles de donnees, 50+ fonctionnalites, 25+ ecrans.",
    techs: ["Next.js 16", "React 19", "Prisma", "Turso", "Stripe", "Resend"],
  },
  {
    name: "parkimmo.io",
    subtitle: "Site marketing & landing pages",
    icon: Globe,
    color: "#1A5276",
    desc: "Vitrine commerciale, blog SEO, pages de tarifs interactives. Point d'entree pour l'acquisition de nouveaux utilisateurs.",
    techs: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    name: "dossier-strategique",
    subtitle: "Dossier investisseurs & partenaires",
    icon: FileText,
    color: "#E67E22",
    desc: "Ce site. Presentation interactive du business plan avec 4 espaces securises (admin, investisseur, partenaire, dev).",
    techs: ["Next.js 14", "Prisma", "Turso", "Recharts"],
  },
]

/* ─── RESEND EMAILS ─── */
const RESEND_EMAILS = [
  {
    category: "Transactionnels",
    color: "#1A5276",
    icon: Key,
    emails: [
      { nom: "Bienvenue", desc: "Email de bienvenue a l'inscription avec guide de demarrage" },
      { nom: "Verification email", desc: "Lien de verification pour valider l'adresse email" },
      { nom: "Reset mot de passe", desc: "Lien securise pour reinitialiser le mot de passe" },
      { nom: "Confirmation abonnement", desc: "Confirmation apres souscription a une formule payante" },
    ],
  },
  {
    category: "Metier",
    color: "#1A3D2E",
    icon: FileText,
    emails: [
      { nom: "Quittance de loyer", desc: "Envoi automatique de la quittance PDF generee au locataire" },
      { nom: "Alerte echeance", desc: "Rappel avant echeance de bail, assurance ou pret" },
      { nom: "Rappel de loyer", desc: "Notification en cas de loyer non percu a la date prevue" },
      { nom: "Rapport mensuel", desc: "Synthese mensuelle des encaissements et depenses" },
    ],
  },
  {
    category: "Notifications enquete",
    color: "#E67E22",
    icon: Bell,
    emails: [
      { nom: "Notification immediate", desc: "Email envoye a chaque nouvelle reponse a l'enquete avec le detail (profil, age, profession, texte libre)" },
      { nom: "Recap hebdomadaire", desc: "Chaque lundi a 9h : resume de la semaine avec stats par profil, emails collectes, textes libres et duree moyenne" },
    ],
  },
]

/* ─── INFRASTRUCTURE EMAIL DETAILLEE ─── */
const EMAIL_INFRA = {
  domaines: [
    { nom: "parkimmo.io", role: "Domaine principal", registrar: "Ionos", detail: "DNS gere chez Ionos — enregistrements SPF, DKIM et MX configures pour Resend" },
    { nom: "send.parkimmo.io", role: "Sous-domaine d'envoi", registrar: "Ionos", detail: "Utilise par Resend pour envoyer les emails — separe du domaine principal pour proteger la reputation" },
  ],
  envVars: [
    { nom: "RESEND_API_KEY", description: "Cle secrete pour se connecter a l'API Resend et envoyer des emails", ou: "Vercel + .env.local" },
    { nom: "RESEND_FROM_EMAIL", description: "Adresse d'expedition des emails (enquete@parkimmo.io)", ou: "Vercel + .env.local" },
    { nom: "RESEND_NOTIFY_EMAIL", description: "Adresse qui recoit les notifications (sheana@parkimmo.io)", ou: "Vercel + .env.local" },
    { nom: "CRON_SECRET", description: "Mot de passe qui protege l'endpoint du recap hebdomadaire", ou: "Vercel + .env.local" },
  ],
  fichiers: [
    { chemin: "lib/resend.ts", role: "Connexion a Resend", detail: "Cree le client Resend avec la cle API — un seul client partage par toute l'appli" },
    { chemin: "lib/email.ts", role: "Fonctions d'envoi", detail: "Contient 2 fonctions : sendSurveyNotification() pour l'email immediat, sendWeeklyDigest() pour le recap" },
    { chemin: "app/api/enquete/route.ts", role: "Reception des reponses", detail: "Quand quelqu'un repond a l'enquete : sauvegarde en base + envoie l'email de notification" },
    { chemin: "app/api/enquete/digest/route.ts", role: "Recap hebdomadaire", detail: "Endpoint appele chaque lundi a 9h par le cron Vercel — recupere les reponses de la semaine et envoie le resume" },
    { chemin: "vercel.json", role: "Cron Vercel", detail: "Configure le cron job : appelle /api/enquete/digest tous les lundis a 9h (expression : 0 9 * * 1)" },
  ],
}

/* ─── MODULES DONNEES ─── */
const MODELE_DONNEES = [
  { module: "Biens immobiliers", description: "Biens, adresses, parkings, caves, entites juridiques", lien: "Chaque bien appartient a une entite (SCI, nom propre...)" },
  { module: "Location", description: "Baux, locataires, quittances, revisions de loyer, etats des lieux", lien: "Chaque bail est lie a un bien et a un ou plusieurs locataires" },
  { module: "Finances", description: "Encaissements, prets, echeances, assurances emprunteur", lien: "Chaque pret est lie a un bien" },
  { module: "Charges", description: "Charges courantes, assurances, sinistres, taxes foncieres", lien: "Chaque charge est rattachee a un bien" },
  { module: "Travaux", description: "Projets, interventions, devis, postes de depense", lien: "Chaque projet de travaux concerne un bien" },
  { module: "Contacts", description: "Artisans, notaires, comptables, gestionnaires", lien: "Un contact peut etre lie a plusieurs biens" },
  { module: "Alertes", description: "Rappels, echeances, evenements importants", lien: "Chaque alerte est rattachee a un bien" },
]

/* ─── SERVICES EXTERNES ─── */
const SERVICES = [
  { nom: "Vercel", role: "Hebergement & CDN", detail: "Deploiement automatique a chaque push Git, Edge Network mondial, SSL automatique", icon: Cloud, color: "#000" },
  { nom: "Turso", role: "Base de donnees", detail: "SQLite distribue, datacenter Paris, < 10ms latence, replicas automatiques", icon: Database, color: "#00C4B4" },
  { nom: "Scaleway", role: "Stockage fichiers", detail: "Object Storage S3-compatible, datacenter Paris, droit francais, RGPD natif", icon: Archive, color: "#4F0599" },
  { nom: "Resend", role: "Emails", detail: "API d'envoi d'emails, domaine @parkimmo.io verifie, templates React Email", icon: Mail, color: "#000" },
  { nom: "Stripe", role: "Paiements", detail: "Abonnements recurrents, 4 formules SaaS, portail client, webhooks temps reel", icon: CreditCard, color: "#635BFF" },
  { nom: "Claude API", role: "Intelligence artificielle", detail: "OCR de documents, extraction automatique des donnees, classification des pieces", icon: Bot, color: "#D97706" },
  { nom: "GitHub", role: "Code source", detail: "Repository prive, CI/CD, code review, historique complet des modifications", icon: GitBranch, color: "#24292F" },
]

/* ─── PILIERS ─── */
const PILLARS = [
  {
    number: "01",
    icon: Eye,
    title: "L'interface",
    bandColor: "bg-[#1A3D2E]",
    subtitle: "Ce que l'utilisateur voit et utilise",
    items: [
      "Pages rapides qui s'affichent en moins d'une seconde",
      "Design adapte a tous les ecrans (ordinateur, tablette, mobile)",
      "Navigation intuitive organisee par modules metier",
      "Export PDF professionnel en un clic",
    ],
  },
  {
    number: "02",
    icon: Shield,
    title: "Le cerveau",
    bandColor: "bg-[#059669]",
    subtitle: "Comment vos donnees sont stockees et protegees",
    items: [
      "38 types de donnees structures (biens, locataires, charges...)",
      "Base de donnees hebergee a Paris (< 10ms de reponse)",
      "Documents stockes en France, sans acces etranger possible",
      "Sauvegardes automatiques et chiffrement des donnees",
    ],
  },
  {
    number: "03",
    icon: Bot,
    title: "L'intelligence",
    bandColor: "bg-[#8FAF8A]",
    subtitle: "L'IA qui vous fait gagner du temps",
    items: [
      "Lecture automatique de vos documents (baux, factures, avis)",
      "Classification intelligente des pieces justificatives",
      "Extraction des montants, dates et informations cles",
      "Prevue pour la V1.5 — en cours de developpement",
    ],
  },
]

/* ─── ROADMAP ─── */
const ROADMAP = [
  { phase: "Aujourd'hui (MVP+)", desc: "8 modules fonctionnels, tableau de bord complet, generation de quittances PDF, gestion des baux, emails automatiques via Resend", color: "blue" as const },
  { phase: "Mois 3-6 (V1)", desc: "Coffre-fort numerique pour vos documents, classement automatique, partage securise avec vos partenaires", color: "orange" as const },
  { phase: "Mois 6-9 (V1.5)", desc: "Espace dedie pour vos comptables et notaires, lecture IA de vos documents, accompagnement a la prise en main", color: "green" as const },
  { phase: "Mois 9-18 (V2)", desc: "Mode expert pour gros patrimoines, simulations de rentabilite avancees, application mobile", color: "purple" as const },
]

export default function ArchitecturePage() {
  return (
    <div>
      <PageHeader
        icon={Wrench}
        title="Architecture Technique"
        subtitle="L'ecosysteme Parkimmo.io — technologie moderne, 100% francaise, pensee pour la securite et la vitesse"
      />

      {/* Hero — Message cle */}
      <ScrollReveal delay={50}>
        <div className="bg-gradient-to-br from-[#1A3D2E]/5 to-[#8FAF8A]/5 rounded-xl mb-8 overflow-hidden">
          <div className="border-l-4 border-[#1A3D2E] p-6">
            <p className="text-xs font-bold text-[#1A3D2E] uppercase tracking-wider mb-2">En resume</p>
            <p className="text-lg leading-relaxed text-slate-700">
              Parkimmo est un <strong className="text-[#1A3D2E]">ecosysteme complet</strong> :
              une application SaaS, un site marketing, un dossier strategique et{" "}
              <strong className="text-[#1A3D2E]">7 services cloud</strong> interconnectes.
              Toutes vos donnees sont <strong className="text-[#1A3D2E]">hebergees en France</strong>,
              et les emails partent depuis <strong className="text-[#1A3D2E]">@parkimmo.io</strong>.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Temps de reponse" value="< 10ms" subtitle="Ultra-rapide, depuis Paris" icon={Zap} color="primary" delay={0} />
        <StatCard label="Types de donnees" value="38" subtitle="Structure complete et securisee" icon={Database} color="success" delay={100} />
        <StatCard label="Services cloud" value="7" subtitle="Vercel, Turso, Resend, Stripe..." icon={Cloud} color="accent" delay={200} />
        <StatCard label="Hebergement" value="France" subtitle="Paris — droit francais, pas de CLOUD Act" icon={Lock} color="premium" delay={300} />
      </div>

      {/* ECOSYSTEME PARKIMMO.IO */}
      <SectionCard title="L'ecosysteme Parkimmo.io" icon={Network} delay={50} className="mb-6">
        <p className="text-sm text-slate-500 mb-5">
          Trois applications interconnectees qui forment l{"'"}ecosysteme complet.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {ECOSYSTEM.map((app, i) => (
            <ScrollReveal key={app.name} delay={100 + i * 80}>
              <div className="relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                <div className="h-1.5 rounded-t-xl" style={{ backgroundColor: app.color }} />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: app.color + "15" }}
                    >
                      <app.icon className="w-5 h-5" style={{ color: app.color }} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-800 text-sm">{app.name}</h4>
                      <p className="text-[11px] text-slate-400">{app.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">{app.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {app.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                        style={{
                          borderColor: app.color + "25",
                          color: app.color,
                          backgroundColor: app.color + "08",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Flux de connexion */}
        <ScrollReveal delay={350}>
          <div className="mt-5 bg-slate-50 rounded-xl p-5 border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Comment tout est connecte</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { from: "parkimmo.app", to: "Resend", action: "Envoie les quittances et alertes par email", icon: Send },
                { from: "parkimmo.app", to: "Stripe", action: "Gere les abonnements et paiements", icon: CreditCard },
                { from: "parkimmo.app", to: "Turso", action: "Stocke les donnees metier (38 modeles)", icon: Database },
                { from: "parkimmo.app", to: "Scaleway", action: "Stocke les documents (baux, factures, photos)", icon: Archive },
                { from: "parkimmo.app", to: "Claude API", action: "Lit et extrait les donnees des documents", icon: Bot },
                { from: "dossier", to: "Turso", action: "Stocke les reponses de l'enquete terrain", icon: Database },
                { from: "dossier", to: "Resend", action: "Envoie les notifications d'enquete par email", icon: Mail },
              ].map((flux, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-[#1A3D2E]/10 flex items-center justify-center flex-shrink-0">
                    <flux.icon className="w-4 h-4 text-[#1A3D2E]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">
                      <span className="font-semibold text-[#1A3D2E]">{flux.from}</span>
                      {" "}
                      <ArrowRight className="w-3 h-3 inline text-slate-300" />
                      {" "}
                      <span className="font-semibold text-[#1A5276]">{flux.to}</span>
                    </p>
                    <p className="text-sm text-slate-600">{flux.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </SectionCard>

      {/* RESEND — Infrastructure email */}
      <SectionCard title="Emails — Resend x parkimmo.io" icon={Mail} delay={100} className="mb-6">
        <p className="text-sm text-slate-500 mb-2">
          Tous les emails partent depuis le domaine verifie <strong className="text-[#1A3D2E]">@parkimmo.io</strong> via Resend.
          Deux categories d{"'"}emails couvrent l{"'"}ensemble des besoins.
        </p>
        <div className="mt-4 mb-5 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-[#1A3D2E]/5 border border-[#1A3D2E]/10 rounded-full px-4 py-2">
            <Mail className="w-4 h-4 text-[#1A3D2E]" />
            <span className="text-sm font-semibold text-[#1A3D2E]">Domaine : @parkimmo.io</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1A5276]/5 border border-[#1A5276]/10 rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-[#1A5276]" />
            <span className="text-sm font-semibold text-[#1A5276]">SPF + DKIM + DMARC</span>
          </div>
          <div className="flex items-center gap-2 bg-[#059669]/5 border border-[#059669]/10 rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-[#059669]" />
            <span className="text-sm font-semibold text-[#059669]">Gratuit &lt; 100 emails/jour</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {RESEND_EMAILS.map((cat, catIndex) => (
            <ScrollReveal key={cat.category} delay={200 + catIndex * 100}>
              <div className="rounded-xl border border-slate-200 overflow-hidden h-full">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ backgroundColor: cat.color + "08" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: cat.color + "15" }}
                  >
                    <cat.icon className="w-4 h-4" style={{ color: cat.color }} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-slate-800 text-sm">
                      Emails {cat.category.toLowerCase()}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {catIndex === 0 ? "Authentification & compte" : catIndex === 1 ? "Gestion locative automatisee" : "Dossier strategique"}
                    </p>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  {cat.emails.map((email, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: cat.color + "10" }}
                      >
                        <Send className="w-3 h-3" style={{ color: cat.color }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">{email.nom}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{email.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Architecture technique Resend */}
        <ScrollReveal delay={400}>
          <div className="mt-5 bg-gradient-to-r from-slate-50 to-white rounded-xl p-5 border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Comment ca fonctionne</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
              {[
                { label: "Evenement", sub: "Loyer percu, echeance proche...", icon: Bell },
                { label: "API Resend", sub: "Template React Email", icon: Mail },
                { label: "Email envoye", sub: "Depuis @parkimmo.io", icon: Send },
                { label: "Boite de reception", sub: "Locataire ou proprietaire", icon: UserCheck },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-3 py-2.5 shadow-sm">
                    <step.icon className="w-4 h-4 text-[#1A3D2E]" />
                    <div>
                      <p className="font-semibold text-slate-700 text-xs">{step.label}</p>
                      <p className="text-[10px] text-slate-400">{step.sub}</p>
                    </div>
                  </div>
                  {i < 3 && (
                    <ArrowRight className="w-4 h-4 text-slate-300 flex-shrink-0 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </SectionCard>

      {/* INFRASTRUCTURE EMAIL DETAILLEE */}
      <SectionCard title="Infrastructure email — comment tout fonctionne" icon={Workflow} delay={150} className="mb-6">
        <p className="text-sm text-slate-500 mb-5">
          Voici en detail comment les emails sont configures, envoyes et recus dans l{"'"}ecosysteme Parkimmo.
          Tout est automatique — aucune intervention manuelle necessaire.
        </p>

        {/* Domaines & DNS */}
        <ScrollReveal delay={200}>
          <div className="mb-5">
            <h4 className="text-sm font-display font-bold text-[#1A3D2E] mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Domaines et DNS
            </h4>
            <div className="space-y-2">
              {EMAIL_INFRA.domaines.map((d) => (
                <div key={d.nom} className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1A3D2E]/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-[#1A3D2E]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-800">{d.nom}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1A5276]/10 text-[#1A5276] font-medium">{d.role}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200/60 text-slate-500">{d.registrar}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{d.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Parcours d'un email */}
        <ScrollReveal delay={250}>
          <div className="mb-5">
            <h4 className="text-sm font-display font-bold text-[#1A3D2E] mb-3 flex items-center gap-2">
              <Send className="w-4 h-4" />
              Parcours d{"'"}un email de notification
            </h4>
            <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-4 border border-slate-100">
              <div className="flex flex-col sm:flex-row items-stretch gap-3 text-sm">
                {[
                  { label: "Reponse enquete", sub: "Un visiteur remplit l'enquete sur parkimmo.io", icon: UserCheck, color: "#1A5276" },
                  { label: "Sauvegarde", sub: "La reponse est enregistree dans la base Turso", icon: Database, color: "#00C4B4" },
                  { label: "API Resend", sub: "L'email est envoye depuis enquete@parkimmo.io", icon: Mail, color: "#1A3D2E" },
                  { label: "Boite Gmail", sub: "Sheana recoit le detail sur sheana@parkimmo.io", icon: Bell, color: "#E67E22" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 flex-1">
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-3 py-2.5 shadow-sm flex-1">
                      <step.icon className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} />
                      <div>
                        <p className="font-semibold text-slate-700 text-xs">{step.label}</p>
                        <p className="text-[10px] text-slate-400">{step.sub}</p>
                      </div>
                    </div>
                    {i < 3 && (
                      <ArrowRight className="w-4 h-4 text-slate-300 flex-shrink-0 hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Recap hebdo */}
        <ScrollReveal delay={300}>
          <div className="mb-5">
            <h4 className="text-sm font-display font-bold text-[#E67E22] mb-3 flex items-center gap-2">
              <Workflow className="w-4 h-4" />
              Recap hebdomadaire (chaque lundi 9h)
            </h4>
            <div className="bg-gradient-to-r from-[#E67E22]/5 to-white rounded-xl p-4 border border-[#E67E22]/10">
              <div className="flex flex-col sm:flex-row items-stretch gap-3 text-sm">
                {[
                  { label: "Cron Vercel", sub: "Lundi 9h — vercel.json declenche l'appel", icon: Server, color: "#000" },
                  { label: "/api/enquete/digest", sub: "Recupere toutes les reponses des 7 derniers jours", icon: Database, color: "#00C4B4" },
                  { label: "Calcul des stats", sub: "Repartition par profil, duree moyenne, emails collectes", icon: Compass, color: "#1A3D2E" },
                  { label: "Email recap", sub: "Resume complet envoye a sheana@parkimmo.io", icon: Mail, color: "#E67E22" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 flex-1">
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-3 py-2.5 shadow-sm flex-1">
                      <step.icon className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} />
                      <div>
                        <p className="font-semibold text-slate-700 text-xs">{step.label}</p>
                        <p className="text-[10px] text-slate-400">{step.sub}</p>
                      </div>
                    </div>
                    {i < 3 && (
                      <ArrowRight className="w-4 h-4 text-slate-300 flex-shrink-0 hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Variables d'environnement */}
        <ScrollReveal delay={350}>
          <div className="mb-5">
            <h4 className="text-sm font-display font-bold text-[#1A3D2E] mb-3 flex items-center gap-2">
              <Key className="w-4 h-4" />
              Variables d{"'"}environnement (secrets)
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Ces valeurs sont stockees de maniere securisee sur Vercel et dans le fichier .env.local en local.
              Elles ne sont jamais visibles dans le code.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left py-2.5 px-3 text-slate-500 font-medium text-xs rounded-tl-lg">Variable</th>
                    <th className="text-left py-2.5 px-3 text-slate-500 font-medium text-xs">A quoi ca sert</th>
                    <th className="text-left py-2.5 px-3 text-slate-500 font-medium text-xs rounded-tr-lg">Ou c{"'"}est stocke</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {EMAIL_INFRA.envVars.map((v) => (
                    <tr key={v.nom} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-2 px-3">
                        <code className="text-xs font-mono px-1.5 py-0.5 bg-[#1A3D2E]/5 text-[#1A3D2E] rounded">{v.nom}</code>
                      </td>
                      <td className="py-2 px-3 text-xs text-slate-600">{v.description}</td>
                      <td className="py-2 px-3 text-xs text-slate-400">{v.ou}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Fichiers cles */}
        <ScrollReveal delay={400}>
          <div>
            <h4 className="text-sm font-display font-bold text-[#1A3D2E] mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Fichiers cles du code
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Pour modifier le systeme d{"'"}emails, voici les fichiers a connaitre.
            </p>
            <div className="space-y-2">
              {EMAIL_INFRA.fichiers.map((f) => (
                <div key={f.chemin} className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1A5276]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-[#1A5276]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <code className="text-xs font-mono px-1.5 py-0.5 bg-slate-200/60 text-slate-700 rounded">{f.chemin}</code>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#059669]/10 text-[#059669] font-medium">{f.role}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </SectionCard>

      {/* 3 Piliers — Comment ca marche */}
      <ScrollReveal delay={150}>
        <h2 className="font-display text-2xl font-bold text-slate-800 mb-5">Comment ca marche</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {PILLARS.map((pillar, index) => (
          <ScrollReveal key={pillar.title} delay={200 + index * 100}>
            <div className="relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className={`h-1 ${pillar.bandColor} rounded-t-xl`} />
              <span className="text-8xl font-display text-slate-100 absolute top-2 right-4 select-none pointer-events-none">
                {pillar.number}
              </span>
              <div className="p-6 relative">
                <pillar.icon className="w-8 h-8 text-[#1A3D2E] mb-3" />
                <h3 className="font-display text-lg font-semibold text-slate-800 mb-1">{pillar.title}</h3>
                <p className="text-xs text-slate-400 mb-3">{pillar.subtitle}</p>
                <ul className="space-y-2">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-[#059669] mt-0.5">{"●"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Stack technique detaille */}
      <SectionCard title="Les briques technologiques" icon={Layers} delay={0} className="mb-6">
        <p className="text-sm text-slate-500 mb-4">
          Chaque couche a un role precis. Ensemble, elles forment une application rapide, fiable et securisee.
        </p>
        <div className="grid gap-3">
          {STACK.map((row, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="flex items-start gap-4 bg-slate-50 rounded-lg p-4 hover:bg-slate-100/80 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
                  <row.icon className="w-5 h-5 text-[#1A3D2E]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-sm font-semibold text-[#1A3D2E]">{row.couche}</h4>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#1A3D2E]/5 text-[#1A3D2E]/60 rounded">
                      {row.tech}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{row.explication}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionCard>

      {/* Services externes */}
      <SectionCard title="Services cloud connectes" icon={Cloud} delay={50} className="mb-6">
        <p className="text-sm text-slate-500 mb-4">
          Les 7 services externes qui alimentent l{"'"}ecosysteme Parkimmo.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.nom} delay={i * 50}>
              <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: service.color + "12" }}
                >
                  <service.icon className="w-4.5 h-4.5" style={{ color: service.color }} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-sm font-semibold text-slate-800">{service.nom}</h4>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200/60 text-slate-500 font-medium">
                      {service.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{service.detail}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionCard>

      {/* Organisation des donnees */}
      <SectionCard title="Organisation des donnees" icon={Database} delay={100} className="mb-6">
        <p className="text-sm text-slate-500 mb-4">
          Parkimmo organise vos informations en 7 grands domaines. Tout est relie pour que vous n{"'"}ayez jamais a ressaisir une information.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left py-3 px-3 text-slate-500 font-medium rounded-tl-lg">Domaine</th>
                <th className="text-left py-3 px-3 text-slate-500 font-medium">Ce qu{"'"}on gere</th>
                <th className="text-left py-3 px-3 text-slate-500 font-medium rounded-tr-lg">Comment c{"'"}est relie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MODELE_DONNEES.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-2.5 px-3 font-medium text-[#1A3D2E]">{row.module}</td>
                  <td className="py-2.5 px-3 text-slate-600 text-xs">{row.description}</td>
                  <td className="py-2.5 px-3 text-slate-500 text-xs">{row.lien}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Roadmap */}
      <SectionCard title="Feuille de route produit" icon={Map} delay={200}>
        <p className="text-sm text-slate-500 mb-4">
          Les grandes etapes de developpement de Parkimmo, du produit actuel jusqu{"'"}a la version complete.
        </p>
        <div className="space-y-0">
          {ROADMAP.map((item, i) => (
            <TimelineItem
              key={item.phase}
              period={item.phase}
              title={item.desc}
              color={item.color}
              isActive={i === 0}
              isLast={i === ROADMAP.length - 1}
              delay={i * 80}
            />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
