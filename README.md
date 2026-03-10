# Mon Patrimoine — Dossier Strategique

> Application web Next.js presentant le dossier strategique complet du projet **Mon Patrimoine** par **K PAR K CONSEILS SAS** (Sheana Krief).

## Qu'est-ce que c'est ?

Un site web interactif qui sert de **dossier strategique** pour le projet Mon Patrimoine — un SaaS B2C de gestion patrimoniale immobiliere. Le site presente toutes les facettes du projet (vision, marche, produit, pricing, simulation financiere, etc.) avec un systeme de filtrage par audience et un export PDF multi-profil.

## Stack technique

| Outil | Version | Role |
|-------|---------|------|
| Next.js | 14.2 | Framework React (App Router) |
| TypeScript | 5.4 | Typage statique |
| Tailwind CSS | 3.4 | Styles utilitaires |
| Recharts | 2.12 | Graphiques (Area, Pie, Bar) |
| lucide-react | 0.577 | Icones |

## Demarrage rapide

```bash
# Installation
npm install

# Developpement (port 3000)
npm run dev

# Build production
npm run build && npm start
```

## Structure du projet

```
dossier-strategique/
  app/
    dossier/
      page.tsx              # Dashboard (page d'accueil)
      layout.tsx            # Sidebar + navigation + audience filter
      vision/page.tsx       # Vision & Positionnement
      fondatrice/page.tsx   # La Fondatrice (parcours Sheana)
      marche/page.tsx       # Etude de Marche
      concurrence/page.tsx  # Analyse Concurrentielle
      produit/page.tsx      # Le Produit
      architecture/page.tsx # Architecture Technique
      pricing/page.tsx      # Pricing (SaaS + GA + LUXE)
      acquisition/page.tsx  # Strategie Acquisition
      simulation/page.tsx   # Simulation Financiere
      deploiement/page.tsx  # Plan de Deploiement
      juridique/page.tsx    # Cadre Juridique & Carte G
      budget/page.tsx       # Budget Lancement (grille depenses)
      timeline/page.tsx     # Timeline 3 Mois
      pitch/page.tsx        # Pitchs Commerciaux
      export/page.tsx       # Export PDF multi-audience
    login/page.tsx          # Page de connexion
    api/auth/route.ts       # API authentification
    globals.css             # Styles globaux + print CSS
    layout.tsx              # Layout racine
    middleware.ts           # Protection par mot de passe
  components/dossier/
    StatCard.tsx            # Carte KPI avec icone et tendance
    SectionCard.tsx         # Carte de section avec titre et icone
    PageHeader.tsx          # En-tete de page avec icone et sous-titre
    TimelineItem.tsx        # Element de timeline avec point colore
    ScrollReveal.tsx        # Animation d'apparition au scroll
    HighlightNumber.tsx     # Nombre anime mis en valeur
    CopyButton.tsx          # Bouton copier dans le presse-papier
    PageTransition.tsx      # Transition de page
  data/
    audiences.ts            # Sections, audiences, filtrage
    simulation.ts           # Moteur de simulation financiere
  .claude/
    launch.json             # Config serveur de dev (port 3777)
```

## Pages (15 + Export)

| # | Page | Slug | Description |
|---|------|------|-------------|
| 1 | Dashboard | `/dossier` | KPIs, charts, chantiers actifs, decisions |
| 2 | Vision | `/dossier/vision` | Positionnement, mission, proposition de valeur |
| 3 | Fondatrice | `/dossier/fondatrice` | Parcours Sheana, convictions, timeline |
| 4 | Marche | `/dossier/marche` | TAM/SAM/SOM, segmentation, tendances |
| 5 | Concurrence | `/dossier/concurrence` | Radar, comparatif, positionnement |
| 6 | Produit | `/dossier/produit` | Modules, parcours utilisateur, roadmap |
| 7 | Architecture | `/dossier/architecture` | Stack, modele de donnees, roadmap tech |
| 8 | Pricing | `/dossier/pricing` | 4 plans SaaS + GA + Forfait LUXE |
| 9 | Acquisition | `/dossier/acquisition` | SEO, ads, partenaires, pipeline |
| 10 | Simulation | `/dossier/simulation` | P&L M1-M12, tresorerie, An1 vs An2 |
| 11 | Deploiement | `/dossier/deploiement` | Phases de lancement sur 18 mois |
| 12 | Juridique | `/dossier/juridique` | Carte G, RGPD, conformite |
| 13 | Budget | `/dossier/budget` | Grille depenses lancement An1 |
| 14 | Timeline | `/dossier/timeline` | Planning 3 mois semaine par semaine |
| 15 | Pitch | `/dossier/pitch` | Pitchs par audience |
| -- | Export PDF | `/dossier/export` | Toutes les sections + filtre audience |

## Systeme d'audiences

Le contenu est filtrable par audience via la sidebar et la page d'export :

| Audience | Sections visibles |
|----------|------------------|
| **Tout (Perso)** | Les 15 sections |
| **Investisseur** | Dashboard, Vision, Fondatrice, Marche, Concurrence, Produit, Pricing, Acquisition, Simulation, Deploiement, Juridique, Budget, Pitch |
| **Client** | Dashboard, Vision, Produit, Pricing, Pitch |
| **Partenaire** | Dashboard, Vision, Fondatrice, Pricing, Juridique, Pitch |
| **Dev** | Dashboard, Vision, Produit, Architecture, Deploiement |
| **Equipe** | Dashboard, Fondatrice, Concurrence, Acquisition, Simulation, Deploiement, Budget, Timeline |

## Design System

- **Couleurs** : Primary `#1A5276` / Accent `#E67E22` / Success `#16a34a` / Premium `#7c3aed`
- **Polices** : Outfit (body) / Playfair Display (titres)
- **Composants** : StatCard, SectionCard, PageHeader, TimelineItem, ScrollReveal

## Authentification

Le site est protege par mot de passe via un cookie (`dossier_auth`). Le middleware redirige vers `/login` si le cookie n'est pas present.

- **Mot de passe** : `MonPatrimoine2025`
- **Duree cookie** : 7 jours

## Export PDF

La page `/dossier/export` compile toutes les sections et permet l'export via `window.print()`. Le CSS dans `globals.css` gere :
- Page de couverture avec branding
- En-tete repete sur chaque page
- Pied de page "Confidentiel"
- Sauts de page entre sections
- Format A4 portrait

## Pricing actuel

| Plan | Prix/mois | Biens |
|------|-----------|-------|
| Starter | 9,90 EUR | 1-2 |
| Solo (recommande) | 19,90 EUR | 1-5 |
| Pro | 34,90 EUR | 1-15 |
| Expert | 59,90 EUR | Illimite |
| **LUXE** | **299 EUR** + setup sur devis | Premium domicile |

## Deploiement

```bash
# Build
npm run build

# Vercel (recommande)
vercel --prod
```

Le projet est configure pour un deploiement Vercel standard avec Next.js.
