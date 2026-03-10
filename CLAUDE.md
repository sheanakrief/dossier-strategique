# CLAUDE.md — Instructions pour Claude Code

## Contexte projet

Ce projet est le **Dossier Strategique** de Mon Patrimoine, un SaaS B2C de gestion patrimoniale immobiliere fonde par Sheana Krief (K PAR K CONSEILS SAS). Le site presente le business plan complet sous forme d'application Next.js interactive avec export PDF.

- **Site live** : dossier-strategique.vercel.app (protege par mot de passe)
- **GitHub** : sheanakrief/dossier-strategique (prive)
- **Deploiement** : push sur `main` → Vercel deploie automatiquement

## Source de verite

Le fichier `data/projet.ts` centralise toutes les donnees business du projet :
entreprise, clients pilotes, pricing, objectifs, budget, marche, fondatrice.

**Regle** : quand une modification concerne un chiffre ou une donnee business,
verifier d'abord si elle existe dans `data/projet.ts` et la modifier la-bas.
Les pages doivent importer depuis ce fichier pour garantir la coherence.

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

## Architecture des donnees

```
data/
  projet.ts       ← Source de verite : chiffres business, clients, objectifs
  simulation.ts   ← Moteur P&L (calculerSimulation, getSyntheseAn1)
  audiences.ts    ← Sections du dossier + filtrage par audience
```

Chaque page (`app/dossier/{slug}/page.tsx`) definit ses donnees specifiques
en `const` en haut du fichier. Les donnees partagees viennent de `data/projet.ts`.

## Fichiers cles par type de modification

| Tu veux modifier... | Fichier a editer |
|---------------------|-----------------|
| Un chiffre business (clients, CA, budget) | `data/projet.ts` |
| Le modele de simulation financiere | `data/simulation.ts` |
| Les sections visibles par audience | `data/audiences.ts` |
| Le contenu d'une page specifique | `app/dossier/{slug}/page.tsx` |
| Le design system (couleurs, fonts) | `app/globals.css` |
| La navigation / sidebar | `app/dossier/layout.tsx` |
| L'export PDF | `app/dossier/export/page.tsx` |
| La protection par mot de passe | `middleware.ts` + `app/api/auth/route.ts` |

## Guide prompts — Exemples pour Claude

### Modifier un chiffre / une donnee
```
Modifie le nombre de clients pilotes dans data/projet.ts :
Client B passe a 6 biens (au lieu de 4).
Verifie que le dashboard et la timeline sont coherents.
```

### Ajouter une section au dossier
```
Ajoute une nouvelle page "Equipe" au dossier.
- Slug : equipe
- Contenu : 3 profils (Sheana fondatrice, Recrue #1 operations, Recrue #2 dev)
- Audiences : all, investisseur, equipe
- Suis les conventions de CLAUDE.md pour creer la page.
```

### Mettre a jour le pricing
```
Modifie le plan Solo : passe de 19,90 a 24,90 EUR/mois.
Mets a jour data/projet.ts ET la page pricing.
Verifie que la simulation financiere utilise le bon SAAS_MOYEN.
```

### Modifier la simulation financiere
```
Dans data/simulation.ts, change l'hypothese de nouveaux clients :
[1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8] au lieu de l'actuel.
Montre-moi l'impact sur le CA An1 et la tresorerie M12.
```

### Mettre a jour la timeline
```
La Carte G a ete obtenue. Mets a jour :
1. La timeline (marquer S3 comme fait)
2. Le dashboard (chantier juridique en "fait")
3. Le TODO.md
```

### Ajouter du contenu a une page existante
```
Ajoute une section "Temoignages clients" a la page marche.
3 temoignages : un proprietaire SCI, un MDB, un particulier.
Invente des temoignages realistes bases sur les personas du projet.
```

### Exporter un PDF pour un investisseur
```
Verifie que l'export PDF investisseur inclut les bonnes sections.
Assure-toi que les chiffres du dashboard, simulation et budget sont coherents.
```

## Workflow recommande

1. **Ouvrir Claude Code** dans le dossier `dossier-strategique/`
2. Claude lit automatiquement ce CLAUDE.md et connait le contexte
3. Demander la modification en francais, en precisant la page concernee
4. Claude modifie, lance le preview, verifie, et peut push sur GitHub
5. Vercel deploie automatiquement en ~1 minute

Pour les reflexions strategiques (brainstorm, reformulation pitch),
utiliser **Claude Projects** avec le repo GitHub connecte.
