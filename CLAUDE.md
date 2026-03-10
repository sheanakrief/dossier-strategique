# CLAUDE.md — Instructions pour Claude Code

## Contexte projet

Ce projet est le **Dossier Strategique** de Mon Patrimoine, un SaaS B2C de gestion patrimoniale immobiliere fonde par Sheana Krief (K PAR K CONSEILS SAS). Le site presente le business plan complet sous forme d'application Next.js interactive avec export PDF.

## Conventions de code

### Stack
- **Next.js 14** App Router (`app/` directory)
- **TypeScript** strict
- **Tailwind CSS** pour tous les styles (pas de CSS modules)
- **Recharts** pour les graphiques
- **lucide-react** pour les icones

### Patterns a suivre
- Chaque page du dossier est dans `app/dossier/{slug}/page.tsx`
- Utiliser les composants partages dans `components/dossier/` :
  - `PageHeader` : en-tete de chaque page (icon + title + subtitle)
  - `SectionCard` : carte avec titre, icone optionnelle, delay d'animation
  - `StatCard` : carte KPI (label, value, subtitle, color, icon, trend)
  - `ScrollReveal` : animation d'apparition au scroll (delay prop)
  - `TimelineItem` : element de timeline avec point colore
- Les donnees statiques sont des constantes en haut du fichier (pas de fichier JSON)
- Les couleurs utilisent le design system : `#1A5276` (primary), `#E67E22` (accent), `#16a34a` (success), `#7c3aed` (premium)
- Toutes les pages commencent par `"use client"`

### TypeScript
- **Ne pas** utiliser le spread sur les Sets : `Array.from(set)` au lieu de `[...set]`
- Typer les interfaces pour les donnees complexes
- Utiliser `as const` pour les objets litteraux quand necessaire

### Ajout d'une nouvelle page
1. Creer `app/dossier/{slug}/page.tsx`
2. Ajouter la section dans `data/audiences.ts` (SECTIONS array)
3. Importer le composant dans `app/dossier/export/page.tsx` et l'ajouter a `PAGE_COMPONENTS`

### CSS Print
- Classes utilitaires : `no-print`, `print-break-before`, `print-break-after`, `print-break-avoid`, `print-full`
- Le CSS print est dans `app/globals.css` (section @media print)
- Les elements interactifs (textarea, boutons) sont masques en impression

## Commandes

```bash
npm run dev    # Serveur de dev (port 3000)
npm run build  # Build production
npm start      # Serveur production
```

Pour le dev avec Claude Preview : le serveur est configure sur le port 3777 via `.claude/launch.json`.

## Authentification

- Mot de passe : `MonPatrimoine2025`
- Cookie : `dossier_auth` (7 jours)
- Middleware : `middleware.ts` protege toutes les routes `/dossier/*`

## Structure des audiences

Le fichier `data/audiences.ts` definit les sections et leurs audiences cibles. Chaque section a un `slug`, `title`, `icon`, et `audiences[]`. La fonction `getVisibleSections(audience)` filtre les sections.

## Points d'attention

- Le `.next/` cache peut se corrompre apres des modifications de fichiers → supprimer `.next/` et relancer
- Les polices Google Fonts sont chargees via `@import url()` dans `globals.css`
- Le moteur de simulation financiere est dans `data/simulation.ts` (calculerSimulation, getSyntheseAn1)
- L'export PDF utilise `window.print()` — tester avec Chrome pour un meilleur rendu
