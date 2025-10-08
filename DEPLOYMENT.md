# 🚀 Guide de Déploiement - Alfred Society GmbH

## Déploiement sur Vercel (Recommandé)

### Méthode 1 : Via Interface Web

1. **Créer un compte sur [Vercel](https://vercel.com)**

2. **Importer le projet**
   - Cliquer sur "New Project"
   - Connecter votre repository Git (GitHub, GitLab, Bitbucket)
   - Sélectionner le repository `alfred-society`

3. **Configuration**
   ```
   Framework Preset: Next.js
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Variables d'Environnement**
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=+33781540434
   NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
   ```

5. **Deploy**
   - Cliquer sur "Deploy"
   - Vercel va automatiquement build et déployer
   - Vous recevrez une URL: `votre-projet.vercel.app`

### Méthode 2 : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

---

## Déploiement sur Netlify

### Via Interface Web

1. **Se connecter sur [Netlify](https://netlify.com)**

2. **Créer un nouveau site**
   - "Add new site" → "Import an existing project"
   - Connecter Git provider
   - Sélectionner repository

3. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Environment Variables**
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=+33781540434
   ```

5. **Deploy**

### Via CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy

# Deploy en production
netlify deploy --prod
```

---

## Déploiement sur AWS Amplify

### Configuration

1. **Ouvrir [AWS Amplify Console](https://console.aws.amazon.com/amplify)**

2. **Connecter Repository**
   - "Host web app"
   - Sélectionner Git provider
   - Autoriser l'accès

3. **Build Settings (amplify.yml)**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Variables d'Environnement**
   - Aller dans "Environment variables"
   - Ajouter les variables nécessaires

5. **Deploy**

---

## Déploiement Docker

### Créer Dockerfile

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build et Run

```bash
# Build image
docker build -t alfred-society .

# Run container
docker run -p 3000:3000 alfred-society
```

### Docker Compose

```yaml
version: '3.8'
services:
  alfred-society:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_WHATSAPP_NUMBER=+33781540434
      - NEXT_PUBLIC_SITE_URL=https://alfred-society.com
```

---

## Configuration Domaine Personnalisé

### Sur Vercel

1. **Aller dans Settings → Domains**
2. **Ajouter votre domaine**
   ```
   alfred-society.com
   www.alfred-society.com
   ```
3. **Configurer DNS**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

### Sur Netlify

1. **Domain Settings → Add custom domain**
2. **Configurer DNS**
   ```
   Type: CNAME
   Name: www
   Value: votre-site.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

---

## SSL/HTTPS

### Automatique

Vercel et Netlify fournissent **automatiquement** des certificats SSL gratuits via Let's Encrypt.

### Manuel (AWS/Custom Server)

```bash
# Installer Certbot
sudo apt-get install certbot

# Obtenir certificat
sudo certbot certonly --standalone -d alfred-society.com
```

---

## Optimisations Pré-Déploiement

### 1. Build de Production

```bash
# Test du build
npm run build

# Vérifier la taille
npm run build -- --analyze
```

### 2. Optimisation Images

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['votre-cdn.com'],
    formats: ['image/webp'],
  },
}
```

### 3. Compression

```javascript
// next.config.js
module.exports = {
  compress: true,
  // ...
}
```

### 4. Headers de Sécurité

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

---

## Monitoring et Analytics

### Google Analytics

```typescript
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## CI/CD Pipeline

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy Alfred Society

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      # Deploy step (depends on platform)
```

---

## Checklist de Déploiement

### Avant le Déploiement

- [ ] Test du build local (`npm run build`)
- [ ] Vérification des lints (`npm run lint`)
- [ ] Test sur mobile/tablet
- [ ] Optimisation des images
- [ ] Configuration des variables d'environnement
- [ ] Suppression des console.log
- [ ] Test de tous les liens
- [ ] Vérification du formulaire de contact
- [ ] Test i.Alfred chatbot
- [ ] Vérification WhatsApp link

### Après le Déploiement

- [ ] Vérifier l'URL de production
- [ ] Tester toutes les pages
- [ ] Vérifier les animations 3D
- [ ] Test responsive sur mobile
- [ ] Vérifier le certificat SSL (🔒 HTTPS)
- [ ] Tester les formulaires
- [ ] Configurer Google Analytics
- [ ] Setup monitoring (Vercel Analytics, Sentry, etc.)
- [ ] Créer sitemap.xml
- [ ] Submit à Google Search Console

---

## URLs de Production

Une fois déployé, votre site sera accessible sur:

```
Production: https://alfred-society.com
Preview: https://alfred-society.vercel.app
```

---

## Support en Production

### Logs

```bash
# Vercel
vercel logs

# Netlify
netlify logs
```

### Rollback

```bash
# Vercel - Retour à version précédente
vercel rollback

# Netlify
netlify rollback
```

### Monitoring Erreurs

Installer [Sentry](https://sentry.io):

```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

---

## Performance Tips

1. **Utiliser CDN** pour les assets statiques
2. **Activer compression** Gzip/Brotli
3. **Lazy loading** pour images et composants
4. **Code splitting** automatique avec Next.js
5. **Caching headers** optimisés

---

## Coûts Estimés

| Platform | Free Tier | Pro |
|----------|-----------|-----|
| **Vercel** | Gratuit (Hobby) | $20/mois |
| **Netlify** | Gratuit (Starter) | $19/mois |
| **AWS Amplify** | Pay-as-you-go | Variable |

**Recommandation:** Commencer avec Vercel Free Tier (parfait pour Next.js)

---

## Besoin d'Aide ?

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

**© 2025 Alfred Society GmbH**  
*Powered by i.Alfred*
