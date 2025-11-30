# 🚀 Guide de Déploiement - Résolution des Problèmes

## Problème Principal : Le projet n'est pas dans un repository Git

Pour déployer sur Vercel ou Netlify, vous devez avoir votre projet dans un repository Git (GitHub, GitLab, ou Bitbucket).

## ✅ Solution 1 : Créer un repository Git et déployer

### Étape 1 : Initialiser Git localement

```bash
cd "coucou/ft_printf"
git init
git add .
git commit -m "Initial commit - Alfred Society website"
```

### Étape 2 : Créer un repository sur GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Cliquez sur "New repository"
3. Nommez-le (ex: `alfred-society`)
4. **NE PAS** initialiser avec README, .gitignore ou license
5. Cliquez sur "Create repository"

### Étape 3 : Connecter votre projet local à GitHub

```bash
git remote add origin https://github.com/VOTRE_USERNAME/alfred-society.git
git branch -M main
git push -u origin main
```

### Étape 4 : Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository GitHub
4. Vercel détectera automatiquement Next.js
5. Cliquez sur "Deploy"

---

## ✅ Solution 2 : Déployer directement avec Vercel CLI (sans Git)

Si vous ne voulez pas utiliser Git, vous pouvez déployer directement :

### Étape 1 : Installer Vercel CLI

```bash
npm install -g vercel
```

### Étape 2 : Se connecter

```bash
vercel login
```

### Étape 3 : Déployer depuis le dossier du projet

```bash
cd "coucou/ft_printf"
vercel
```

Suivez les instructions à l'écran. Vercel vous demandera :
- Le nom du projet
- Le répertoire (laissez par défaut : `./`)
- Les variables d'environnement (si nécessaire)

### Étape 4 : Déployer en production

```bash
vercel --prod
```

---

## ✅ Solution 3 : Déployer sur Netlify avec CLI

### Étape 1 : Installer Netlify CLI

```bash
npm install -g netlify-cli
```

### Étape 2 : Se connecter

```bash
netlify login
```

### Étape 3 : Build et déployer

```bash
cd "coucou/ft_printf"
npm run build
netlify deploy
```

Pour la production :
```bash
netlify deploy --prod
```

---

## 🔍 Vérifications Avant le Déploiement

### 1. Vérifier que le build fonctionne localement

```bash
cd "coucou/ft_printf"
npm install
npm run build
```

Si le build échoue, corrigez les erreurs avant de déployer.

### 2. Vérifier les dépendances

Assurez-vous que toutes les dépendances sont dans `package.json` :
- ✅ react
- ✅ react-dom
- ✅ next
- ✅ @react-three/fiber
- ✅ @react-three/drei
- ✅ three
- ✅ framer-motion
- ✅ lucide-react

### 3. Vérifier les variables d'environnement

Si votre projet utilise des variables d'environnement, créez un fichier `.env.local` :

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+33781540434
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

Puis configurez-les dans Vercel/Netlify :
- **Vercel** : Settings → Environment Variables
- **Netlify** : Site settings → Environment variables

---

## ⚠️ Problèmes Courants

### Erreur : "Build failed"

**Solution** :
1. Vérifiez les logs de build dans Vercel/Netlify
2. Testez le build localement : `npm run build`
3. Vérifiez que toutes les dépendances sont installées

### Erreur : "Module not found"

**Solution** :
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erreur : "TypeScript errors"

**Solution** :
1. Vérifiez `tsconfig.json`
2. Exécutez : `npm run lint`
3. Corrigez les erreurs TypeScript

### Erreur : "Path not found" (Windows)

Si vous avez des problèmes avec les chemins Windows :
1. Utilisez WSL (Windows Subsystem for Linux)
2. Ou utilisez Git Bash au lieu de PowerShell

---

## 📝 Checklist de Déploiement

- [ ] Le projet build localement (`npm run build`)
- [ ] Toutes les dépendances sont installées
- [ ] Le projet est dans un repository Git (ou utilisez Vercel CLI)
- [ ] Les variables d'environnement sont configurées
- [ ] Le fichier `.gitignore` est présent
- [ ] Le fichier `next.config.js` est configuré
- [ ] Les composants 3D fonctionnent (Scene3D)
- [ ] Toutes les pages sont accessibles

---

## 🎯 Déploiement Rapide (Vercel CLI)

```bash
# Dans le dossier du projet
cd "coucou/ft_printf"

# Installer Vercel CLI (une seule fois)
npm install -g vercel

# Se connecter (une seule fois)
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

---

## 📞 Besoin d'Aide ?

Si vous rencontrez toujours des problèmes :
1. Vérifiez les logs de build dans Vercel/Netlify
2. Testez le build localement
3. Consultez la documentation :
   - [Vercel Docs](https://vercel.com/docs)
   - [Next.js Deployment](https://nextjs.org/docs/deployment)


