# PARKIMMO — Dossier Strategique

> Application web Next.js presentant le dossier strategique complet du projet **Parkimmo** par **K PAR K CONSEILS SAS** (Sheana Krief).

## Qu'est-ce que c'est ?

Un site web interactif qui sert de **dossier strategique** pour Parkimmo — un SaaS B2C de gestion patrimoniale immobiliere. Le site presente toutes les facettes du projet (vision, marche, produit, pricing, simulation financiere, demo interactive, etc.) avec un systeme d'authentification multi-roles et un export PDF.

## Stack technique

| Outil | Version | Role |
|-------|---------|------|
| Next.js | 14.2 | Framework React (App Router) |
| TypeScript | 5.4 | Typage statique |
| Tailwind CSS | 3.4 | Styles utilitaires |
| Recharts | 2.12 | Graphiques (Area, Pie, Bar) |
| lucide-react | 0.577 | Icones vectorielles |

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
      layout.tsx            # Sidebar + navigation + role filter
      vision/page.tsx       # Vision & Positionnement
      fondatrice/page.tsx   # La Fondatrice (parcours Sheana)
      marche/page.tsx       # Etude de Marche
      concurrence/page.tsx  # Analyse Concurrentielle
      produit/page.tsx      # Le Produit
      architecture/page.tsx # Architecture Technique
      pricing/page.tsx      # Pricing (3 plans SaaS + GA)
      offre/page.tsx        # Offre Detaillee
      acquisition/page.tsx  # Strategie Acquisition
      simulation/page.tsx   # Simulation Financiere
      deploiement/page.tsx  # Plan de Deploiement
      juridique/page.tsx    # Cadre Juridique & Carte G
      budget/page.tsx       # Budget Lancement
      timeline/page.tsx     # Timeline 3 Mois
      pitch/page.tsx        # Pitchs Commerciaux
      demo/                 # Demo produit interactive (4 tiers)
        page.tsx            # Page avec onglets
        DemoFreemium.tsx    # Dashboard Freemium
        DemoEssentiel.tsx   # Dashboard Essentiel
        DemoPro.tsx         # Dashboard Pro
        DemoExpert.tsx      # Dashboard Expert
        demo.css            # CSS scope des demos
      enquete-admin/page.tsx # Resultats enquete (admin)
      admin/page.tsx        # Dashboard admin
      decisions/page.tsx    # Decisions en suspens (admin)
      export/page.tsx       # Export PDF multi-audience
    login/page.tsx          # Page de connexion multi-roles
    enquete/page.tsx        # Enquete publique
    api/auth/route.ts       # API authentification
    globals.css             # Styles globaux + print CSS
    layout.tsx              # Layout racine
  middleware.ts             # Auth multi-roles + protection routes
  components/dossier/
    StatCard.tsx            # Carte KPI avec icone et tendance
    SectionCard.tsx         # Carte de section avec titre et icone
    PageHeader.tsx          # En-tete de page avec icone et sous-titre
    TimelineItem.tsx        # Element de timeline avec point colore
    ScrollReveal.tsx        # Animation d'apparition au scroll
    HighlightNumber.tsx     # Nombre anime mis en valeur
    CopyButton.tsx          # Bouton copier dans le presse-papier
  data/
    projet.ts               # Source de verite : chiffres business
    audiences.ts            # Sections, audiences, roles, filtrage
    simulation.ts           # Moteur de simulation financiere
  .claude/
    launch.json             # Config serveur de dev (port 3777)
```

## Pages (20 + Export)

| # | Page | Slug | Description |
|---|------|------|-------------|
| 1 | Dashboard | `/dossier` | KPIs, charts, chantiers actifs |
| 2 | Vision | `/dossier/vision` | Positionnement, mission, proposition de valeur |
| 3 | Fondatrice | `/dossier/fondatrice` | Parcours Sheana (page publique) |
| 4 | Marche | `/dossier/marche` | TAM/SAM/SOM, segmentation, tendances |
| 5 | Concurrence | `/dossier/concurrence` | Radar, comparatif, positionnement |
| 6 | Produit | `/dossier/produit` | Modules, parcours utilisateur, roadmap |
| 7 | Architecture | `/dossier/architecture` | Stack, modele de donnees, roadmap tech |
| 8 | Pricing | `/dossier/pricing` | 3 plans SaaS + GA |
| 9 | Offre | `/dossier/offre` | Offre detaillee par plan |
| 10 | Acquisition | `/dossier/acquisition` | SEO, ads, partenaires, pipeline |
| 11 | Simulation | `/dossier/simulation` | P&L M1-M12, tresorerie, An1 vs An2 |
| 12 | Deploiement | `/dossier/deploiement` | Phases de lancement |
| 13 | Juridique | `/dossier/juridique` | Cadre Juridique & Carte G |
| 14 | Budget | `/dossier/budget` | Grille depenses lancement An1 |
| 15 | Timeline | `/dossier/timeline` | Planning 3 mois semaine par semaine |
| 16 | Pitch | `/dossier/pitch` | Pitchs par audience |
| 17 | Demo | `/dossier/demo` | Demo interactive 4 tiers (Freemium/Essentiel/Pro/Expert) |
| 18 | Enquete Admin | `/dossier/enquete-admin` | Resultats enquete (admin only) |
| 19 | Admin | `/dossier/admin` | Dashboard admin |
| 20 | Decisions | `/dossier/decisions` | Decisions en suspens (admin only) |
| -- | Export PDF | `/dossier/export` | Toutes les sections + filtre audience |

## Authentification multi-roles

Le site utilise un systeme d'authentification par roles avec cookies distincts :

| Role | Pages accessibles | Cookie |
|------|------------------|--------|
| **Admin** | Toutes les pages | `dossier_auth_admin` |
| **Investisseur** | Marche, Fondatrice, Concurrence, Produit, Pricing, Simulation, Demo, Export | `dossier_auth_investor` |
| **Partenaire** | Dashboard, Vision, Fondatrice, Produit, Pricing, Juridique, Pitch, Demo, Export | `dossier_auth_partner` |
| **Dev** | Dashboard, Produit, Architecture, Deploiement, Timeline, Demo, Export | `dossier_auth_dev` |

Pages publiques (sans auth) : `/dossier` (homepage), `/dossier/fondatrice`, `/enquete`.

La configuration des roles est dans `data/audiences.ts` (ROLE_ACCESS, ROLE_COOKIES, ROLE_PASSWORDS) et dupliquee dans `middleware.ts` (doit rester synchronisee).

## Design System

- **Couleurs** : Forest `#1A3D2E` / Sage `#8FAF8A` / Cream `#E8E4D4` / Primary `#1A5276` / Accent `#E67E22`
- **Polices** : Bricolage Grotesque 800 (titres) / Plus Jakarta Sans (body)
- **Composants** : StatCard, SectionCard, PageHeader, TimelineItem, ScrollReveal
- **Icones** : lucide-react (pas d'emojis)

## Export PDF

La page `/dossier/export` compile toutes les sections et permet l'export via `window.print()`. Le CSS dans `globals.css` gere :
- Page de couverture avec branding
- En-tete repete sur chaque page
- Pied de page "Confidentiel"
- Sauts de page entre sections
- Format A4 portrait

## Pricing actuel

| Plan | Prix/mois | Biens max |
|------|-----------|-----------|
| Essentiel | 19 EUR | 3 |
| Expert (recommande) | 49 EUR | 15 |
| Pro | 79 EUR | Illimite |

GA (Gestion Assistee) en option : 39 EUR (Essentiel) / 89 EUR (Expert) / 149 EUR (Pro).

## Deploiement

```bash
# Build
npm run build

# Push sur main -> Vercel deploie automatiquement
git push origin main
```

Le projet est deploye sur Vercel avec deploiement automatique sur push `main`.
