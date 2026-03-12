# Enquête Parkimmo — Guide de mise en production

## 1. Créer la table Turso

```bash
turso db shell NOM_DE_TA_BASE < turso/schema.sql
```

> Note : le projet utilise aussi Prisma avec le modèle `SurveyResponse`.
> Les deux coexistent — Prisma gère l'écriture via l'API, le schema SQL
> est fourni comme référence pour créer la table manuellement si besoin.

## 2. Variables d'environnement nécessaires

| Variable | Description | Où la trouver |
|----------|-------------|---------------|
| `TURSO_DATABASE_URL` | URL de connexion Turso | Dashboard Turso → ta base → Connect |
| `TURSO_AUTH_TOKEN` | Token d'authentification Turso | Dashboard Turso → ta base → Connect |
| `RESEND_API_KEY` | Clé API Resend | resend.com → API Keys |
| `RESEND_FROM_EMAIL` | Adresse d'expédition | `enquete@parkimmo.io` (domaine à vérifier dans Resend) |
| `RESEND_NOTIFY_EMAIL` | Adresse de notification admin | Ton adresse (ex: `sheana@kparkconseils.fr`) |

## 3. Ajouter les variables sur Vercel

1. Vercel Dashboard → Settings → Environment Variables
2. Ajouter chaque variable ci-dessus
3. Redéployer le projet

## 4. Configurer le domaine d'envoi dans Resend

1. Aller sur [resend.com](https://resend.com) → Domains
2. Ajouter `parkimmo.io`
3. Configurer les DNS (SPF, DKIM, DMARC) selon les instructions
4. Attendre la vérification (quelques minutes)

## 5. Vérifier les données

```bash
turso db shell NOM_DE_TA_BASE
```

```sql
SELECT id, profile, email, created_at
FROM enquete_responses
ORDER BY created_at DESC
LIMIT 20;
```

## 6. Exporter en CSV

```bash
turso db shell NOM_DE_TA_BASE \
  "SELECT * FROM enquete_responses" \
  --output csv > export_enquete.csv
```

## 7. Tester

1. Remplir l'enquête jusqu'au bout sur `localhost:3000/enquete`
2. Vérifier dans Turso : `SELECT * FROM enquete_responses;`
3. Vérifier email reçu sur `RESEND_NOTIFY_EMAIL`
4. Si email fourni : vérifier email de confirmation reçu par le répondant

## Architecture

```
lib/email.ts              ← Templates Resend (notification + confirmation)
lib/prisma.ts             ← Client Prisma + LibSQL adapter
app/api/enquete/route.ts  ← POST: sauvegarde Prisma + envoi emails
app/enquete/page.tsx      ← Composant enquête (submit on isEnd)
turso/schema.sql          ← Schema SQL de référence
prisma/schema.prisma      ← Schema Prisma (SurveyResponse)
```
