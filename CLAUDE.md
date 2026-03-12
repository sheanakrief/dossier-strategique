# CLAUDE.md — Instructions pour Claude Code

## Contexte projet

Ce projet est le **Dossier Strategique** de Parkimmo, un SaaS B2C de gestion patrimoniale immobiliere fonde par Sheana Krief (K PAR K CONSEILS SAS). Le site presente le business plan complet sous forme d'application Next.js interactive avec export PDF.

- **Site live** : dossier-strategique.vercel.app (protege par roles)
- **GitHub** : sheanakrief/dossier-strategique (prive)
- **Deploiement** : push sur `main` -> Vercel deploie automatiquement
- **Nom du produit** : Parkimmo (anciennement "Mon Patrimoine")

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
- **lucide-react** pour les icones (PAS d'emojis)

### Patterns a suivre
- Chaque page du dossier est dans `app/dossier/{slug}/page.tsx`
- Utiliser les composants partages dans `components/dossier/` :
  - `PageHeader` : en-tete de chaque page (icon + title + subtitle)
  - `SectionCard` : carte avec titre, icone optionnelle, delay d'animation
  - `StatCard` : carte KPI (label, value, subtitle, color, icon, trend)
  - `ScrollReveal` : animation d'apparition au scroll (delay prop)
  - `TimelineItem` : element de timeline avec point colore
- Les donnees statiques sont des constantes en haut du fichier (pas de fichier JSON)
- Design system : Forest `#1A3D2E`, Sage `#8FAF8A`, Cream `#E8E4D4`, Primary `#1A5276`, Accent `#E67E22`
- Polices : Bricolage Grotesque 800 (titres), Plus Jakarta Sans (body)
- Toutes les pages commencent par `"use client"`

### TypeScript
- **Ne pas** utiliser le spread sur les Sets : `Array.from(set)` au lieu de `[...set]`
- Typer les interfaces pour les donnees complexes
- Utiliser `as const` pour les objets litteraux quand necessaire

### Ajout d'une nouvelle page
1. Creer `app/dossier/{slug}/page.tsx`
2. Ajouter la section dans `data/audiences.ts` (SECTIONS array)
3. Ajouter l'icone dans `app/dossier/layout.tsx` (ICON_MAP)
4. Importer le composant dans `app/dossier/export/page.tsx` et l'ajouter a `PAGE_COMPONENTS`

### CSS
- Classes utilitaires print : `no-print`, `print-break-before`, `print-break-after`, `print-break-avoid`, `print-full`
- Le CSS print est dans `app/globals.css` (section @media print)
- La page Demo a son propre CSS scope dans `app/dossier/demo/demo.css` (sous `.demo-container`)

## Commandes

```bash
npm run dev    # Serveur de dev (port 3000)
npm run build  # Build production
npm start      # Serveur production
```

Pour le dev avec Claude Preview : le serveur est configure sur le port 3777 via `.claude/launch.json`.

## Authentification multi-roles

4 roles avec des cookies et mots de passe distincts :

| Role | Cookie | Pages accessibles |
|------|--------|------------------|
| Admin | `dossier_auth_admin` | Toutes |
| Investisseur | `dossier_auth_investor` | Marche, Fondatrice, Concurrence, Produit, Pricing, Simulation, Demo, Export |
| Partenaire | `dossier_auth_partner` | Dashboard, Vision, Fondatrice, Produit, Pricing, Juridique, Pitch, Demo, Export |
| Dev | `dossier_auth_dev` | Dashboard, Produit, Architecture, Deploiement, Timeline, Demo, Export |

Pages publiques : `/dossier` (homepage), `/dossier/fondatrice`, `/enquete`.

**IMPORTANT** : les roles sont definis dans `data/audiences.ts` (ROLE_ACCESS, ROLE_COOKIES, ROLE_PASSWORDS) ET dans `middleware.ts`. Les deux fichiers DOIVENT rester synchronises.

## Structure des audiences

Le fichier `data/audiences.ts` definit :
- `SECTIONS` : toutes les sections avec slug, title, icon, audiences
- `ROLE_ACCESS` : pages accessibles par role
- `ROLE_COOKIES` / `ROLE_PASSWORDS` : auth par role
- `getVisibleSections(audience)` : filtre les sections par audience

## Points d'attention

- Le `.next/` cache peut se corrompre apres des modifications de fichiers -> supprimer `.next/` et relancer
- Les polices Google Fonts sont chargees via `@import url()` dans `globals.css`
- Le moteur de simulation financiere est dans `data/simulation.ts` (calculerSimulation, getSyntheseAn1)
- L'export PDF utilise `window.print()` — tester avec Chrome pour un meilleur rendu
- La page Demo utilise du CSS scope (`demo.css`) et non Tailwind — c'est voulu pour isoler les styles

## Architecture des donnees

```
data/
  projet.ts       <- Source de verite : chiffres business, clients, objectifs
  simulation.ts   <- Moteur P&L (calculerSimulation, getSyntheseAn1)
  audiences.ts    <- Sections du dossier + filtrage par audience + roles
```

Chaque page (`app/dossier/{slug}/page.tsx`) definit ses donnees specifiques
en `const` en haut du fichier. Les donnees partagees viennent de `data/projet.ts`.

## Fichiers cles par type de modification

| Tu veux modifier... | Fichier a editer |
|---------------------|-----------------|
| Un chiffre business (clients, CA, budget) | `data/projet.ts` |
| Le modele de simulation financiere | `data/simulation.ts` |
| Les sections visibles par audience/role | `data/audiences.ts` + `middleware.ts` |
| Le contenu d'une page specifique | `app/dossier/{slug}/page.tsx` |
| Le design system (couleurs, fonts) | `app/globals.css` |
| La navigation / sidebar / icones | `app/dossier/layout.tsx` |
| L'export PDF | `app/dossier/export/page.tsx` |
| L'auth (roles, mots de passe) | `data/audiences.ts` + `middleware.ts` + `app/api/auth/route.ts` |
| La page demo interactive | `app/dossier/demo/` (4 composants + demo.css) |

## Workflow recommande

1. **Ouvrir Claude Code** dans le dossier `dossier-strategique/`
2. Claude lit automatiquement ce CLAUDE.md et connait le contexte
3. Demander la modification en francais, en precisant la page concernee
4. Claude modifie, lance le preview (port 3777), verifie, et peut push sur GitHub
5. Vercel deploie automatiquement en ~1 minute

Pour les reflexions strategiques (brainstorm, reformulation pitch),
utiliser **Claude Projects** avec le repo GitHub connecte.
