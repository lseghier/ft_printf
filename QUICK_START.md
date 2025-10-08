# 🚀 Guide de Démarrage Rapide - Alfred Society

## ⚡ Installation en 3 étapes

### 1. Installation des dépendances
```bash
npm install
```

### 2. Lancement du serveur
```bash
npm run dev
```

### 3. Ouvrir dans le navigateur
```
http://localhost:3000
```

## 📱 Aperçu Immédiat

**Vous ne pouvez pas lancer le serveur maintenant ?**

Ouvrez directement le fichier `preview-alfred.html` dans votre navigateur pour voir un aperçu du design !

## 🎨 Personnalisation Rapide

### Changer les Couleurs

**Fichier:** `tailwind.config.js`

```javascript
alfred: {
  dark: '#0a0a0a',      // Fond sombre
  darker: '#050505',    // Fond très sombre
  gold: '#D4AF37',      // Or principal
  goldLight: '#F4E4B0', // Or clair
}
```

### Modifier le Contenu

**Pages principales:**
- `app/page.tsx` - Page d'accueil
- `app/about/page.tsx` - À propos
- `app/services/page.tsx` - Services
- `app/contact/page.tsx` - Contact

### Changer les Informations de Contact

**Fichier:** `components/Footer.tsx` et `app/contact/page.tsx`

```typescript
// Numéro WhatsApp
href="https://wa.me/VOTRE_NUMERO"

// Email
contact@votre-domaine.com
```

## 🤖 Personnaliser i.Alfred

**Fichier:** `components/IAlfredChat.tsx`

Modifier les réponses automatiques:

```typescript
const autoResponses = {
  'ferrari': 'Votre réponse personnalisée...',
  'jet': 'Votre réponse personnalisée...',
  // Ajoutez vos propres mots-clés
}
```

## 🎭 Modifier l'Animation 3D

**Fichier:** `components/Scene3D.tsx`

```typescript
// Changer la couleur de la sphère
color="#VOTRE_COULEUR"

// Modifier la vitesse
autoRotateSpeed={0.3} // Plus lent: 0.1, Plus rapide: 1.0

// Taille de la sphère
scale={2.8} // Plus petit: 2.0, Plus grand: 4.0
```

## 📄 Pages Disponibles

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil avec hero 3D |
| `/about` | Présentation Mister & Miss Alfred |
| `/services` | Liste des 6 services premium |
| `/vision` | Timeline 2025-2030 |
| `/membre` | Espace membre avec login |
| `/contact` | Formulaire et WhatsApp |

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancer production
npm start

# Vérifier le code
npm run lint

# Nettoyer le cache
rm -rf .next
npm run dev
```

## 📦 Dépendances Principales

```json
{
  "next": "^14.1.0",           // Framework React
  "react": "^18.2.0",          // Library UI
  "three": "^0.161.0",         // 3D Graphics
  "@react-three/fiber": "^8.15.16",  // React pour Three.js
  "framer-motion": "^11.0.3",  // Animations
  "tailwindcss": "^3.4.1"      // Styling
}
```

## 🎯 Checklist Avant Production

- [ ] Changer les informations de contact
- [ ] Personnaliser les réponses i.Alfred
- [ ] Ajouter vrai système d'authentification pour l'espace membre
- [ ] Configurer les variables d'environnement (.env)
- [ ] Connecter le formulaire de contact à un service email
- [ ] Optimiser les images (utiliser Next.js Image)
- [ ] Tester sur mobile
- [ ] Configurer Analytics (Google Analytics, etc.)
- [ ] Setup domaine personnalisé
- [ ] Certificat SSL (HTTPS)

## 🚨 Problèmes Fréquents

### Erreur: Module not found
```bash
# Solution: Réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Animation 3D ne s'affiche pas
```bash
# Vérifier que Scene3D est en dynamic import
const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false })
```

### Styles ne s'appliquent pas
```bash
# Redémarrer le serveur
Ctrl + C
npm run dev
```

## 📚 Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Three.js](https://threejs.org/docs)
- [Framer Motion](https://www.framer.com/motion)

## 💡 Astuces

### 1. Test Responsive
```bash
# Dans DevTools (F12)
Ctrl + Shift + M  # Toggle device toolbar
```

### 2. Performance
```typescript
// Lazy load les images
import Image from 'next/image'

<Image 
  src="/image.jpg" 
  alt="Description" 
  width={800} 
  height={600}
  loading="lazy"
/>
```

### 3. SEO
```typescript
// Dans chaque page
export const metadata = {
  title: 'Titre de la page',
  description: 'Description pour Google',
  keywords: 'mots, clés, SEO'
}
```

## 🎉 Vous êtes prêt !

Votre site **Alfred Society** est maintenant opérationnel !

Pour toute question, consultez:
- `README.md` - Documentation complète
- `TECHNICAL.md` - Détails techniques
- `components/` - Code des composants

---

**Bon développement ! 🎩✨**

*Powered by i.Alfred*
