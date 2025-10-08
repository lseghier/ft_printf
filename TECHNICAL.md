# 🔧 Documentation Technique - Alfred Society GmbH

## Architecture du Projet

### Stack Technologique

```
Next.js 14 (App Router)
├── React 18
├── TypeScript
├── Tailwind CSS
├── Three.js + React Three Fiber
├── Framer Motion
└── Lucide React (Icons)
```

## Structure des Composants

### Composants Principaux

#### 1. **Scene3D.tsx** - Animation 3D Cinématique
```typescript
- GoldenSphere: Sphère animée avec effet de distorsion
- CinematicParticles: 500 particules flottantes
- Éclairage: SpotLight + PointLights pour ambiance Batcave
- Fog: Effet de profondeur atmosphérique
```

**Configuration Three.js:**
- Camera: FOV 60°, Position [0, 0, 6]
- Canvas: Background #050505, Fog [5, 15]
- Sphère: Scale 2.8, Metalness 0.9, Roughness 0.1
- Auto-rotation: 0.3 vitesse

#### 2. **IAlfredChat.tsx** - Chatbot Intelligent
```typescript
Interface:
├── État ouvert/fermé
├── Historique des messages
├── Système de réponses automatiques
└── Détection de mots-clés

Réponses configurées:
- 'ferrari' → Info véhicules
- 'jet' → Info aviation
- 'villa' → Info immobilier
- 'membre' → Info adhésion
- 'default' → Réponse générique
```

#### 3. **Header.tsx** - Navigation Responsive
```typescript
Features:
- Sticky header avec backdrop-blur
- Menu desktop avec animation underline
- Menu mobile responsive
- Changement d'apparence au scroll
```

#### 4. **Loader.tsx** - Animation de Chargement
```typescript
- Durée: 2.5 secondes
- Animation: Scale + Rotate
- Spinner rotatif infini
- Transition fade-out
```

#### 5. **FloatingMemberButton.tsx**
```typescript
- Position: Fixed bottom-left
- Animation: Slide-in depuis la gauche
- Gradient avec effet shimmer
- Lien vers /membre
```

## Pages et Routing

### Structure Next.js App Router

```
/app
├── page.tsx              → Accueil (/)
├── about/page.tsx        → À propos (/about)
├── services/page.tsx     → Services (/services)
├── vision/page.tsx       → Vision (/vision)
├── membre/page.tsx       → Espace Membre (/membre)
├── contact/page.tsx      → Contact (/contact)
├── layout.tsx            → Layout global
└── globals.css           → Styles globaux
```

### Métadonnées SEO

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Alfred Society GmbH - La Meilleure Conciergerie',
  description: 'Le luxe commence par une demande bien formulée...',
}
```

## Système de Design

### Palette de Couleurs

```css
/* Noir Luxe */
--alfred-darker: #050505;
--alfred-dark: #0a0a0a;

/* Or Premium */
--alfred-gold: #D4AF37;
--alfred-goldLight: #F4E4B0;
```

### Animations Personnalisées

```css
/* Glow Effect */
@keyframes glow {
  0% { box-shadow: 0 0 5px #D4AF37, 0 0 10px #D4AF37; }
  100% { box-shadow: 0 0 10px #D4AF37, 0 0 20px #D4AF37, 0 0 30px #D4AF37; }
}

/* Float Effect */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Shimmer Effect */
@keyframes shimmer {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}
```

### Effets Framer Motion

```typescript
// Fade In Up
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}

// Hover Scale
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Stagger Animation
transition={{ delay: idx * 0.1 }}
```

## Fonctionnalités Avancées

### 1. Espace Membre - Système d'Authentification

```typescript
État Login:
├── Formulaire: Username + MemberCode + Password
├── Validation simple (frontend)
├── Dashboard avec offres exclusives
└── Déconnexion

Production TODO:
- Implémenter API d'authentification
- JWT tokens
- Session management
- Database backend
```

### 2. Formulaire de Contact

```typescript
Champs:
├── Nom complet
├── Email
└── Message

Action:
- handleSubmit() → Alert confirmation
- Production: Envoyer à API/Email service
```

### 3. WhatsApp Integration

```typescript
Lien direct:
href="https://wa.me/33781540434"

Bouton CTA avec:
- Gradient vert WhatsApp
- Icon MessageCircle
- Target _blank
```

## Performance & Optimisation

### Dynamic Imports

```typescript
// Scene3D chargé côté client uniquement
const Scene3D = dynamic(() => import('@/components/Scene3D'), { 
  ssr: false 
})
```

### Animations Optimisées

```typescript
// Viewport once pour éviter re-render
viewport={{ once: true }}

// Animation conditionnelle
whileInView={{ opacity: 1, y: 0 }}
```

### Images & Assets

- Utiliser Next.js Image component en production
- Lazy loading automatique
- WebP format recommandé

## Déploiement

### Variables d'Environnement

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=+33781540434
NEXT_PUBLIC_SITE_URL=https://alfred-society.com
```

### Build Commands

```bash
# Development
npm run dev

# Production Build
npm run build

# Start Production
npm start

# Lint
npm run lint
```

### Plateformes Recommandées

1. **Vercel** (Optimal pour Next.js)
   - Auto-deploy depuis Git
   - Edge Functions
   - Analytics intégré

2. **Netlify**
   - Build automatique
   - CDN global
   - Forms handling

3. **AWS Amplify**
   - Scalabilité
   - CI/CD pipeline

## Extensions Futures

### Backend API

```typescript
/api
├── /auth         → Authentification membres
├── /contact      → Traitement formulaires
├── /ialfred      → Chatbot avec IA (OpenAI)
└── /services     → CRUD services
```

### Base de Données

```sql
Tables suggérées:
- users (membres)
- services
- bookings (réservations)
- messages (contact)
- chat_history (i.Alfred)
```

### i.Alfred IA Avancé

```typescript
// Integration OpenAI GPT-4
const response = await openai.createChatCompletion({
  model: "gpt-4",
  messages: [
    { role: "system", content: "Tu es i.Alfred, assistant de luxe..." },
    { role: "user", content: userMessage }
  ]
})
```

## Maintenance

### Dépendances à Surveiller

```json
{
  "next": "^14.x",
  "react": "^18.x",
  "three": "^0.161.x",
  "@react-three/fiber": "^8.x",
  "framer-motion": "^11.x"
}
```

### Updates Régulières

```bash
# Check outdated
npm outdated

# Update
npm update

# Security audit
npm audit fix
```

## Troubleshooting

### Problèmes Courants

**1. Three.js ne se charge pas**
```typescript
// Solution: Dynamic import sans SSR
const Scene3D = dynamic(() => import('@/components/Scene3D'), { 
  ssr: false 
})
```

**2. Animations saccadées**
```typescript
// Solution: Utiliser transform au lieu de top/left
transform: translateY(-10px) ✅
top: -10px ❌
```

**3. Scroll pas fluide**
```css
/* globals.css */
html {
  scroll-behavior: smooth;
}
```

## Sécurité

### Checklist Production

- [ ] Variables d'environnement sécurisées
- [ ] HTTPS obligatoire
- [ ] Headers de sécurité (CSP, HSTS)
- [ ] Rate limiting sur formulaires
- [ ] Validation côté serveur
- [ ] Protection CSRF
- [ ] Sanitization des inputs

### Headers Recommandés

```javascript
// next.config.js
headers: [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]
```

## Support

Pour toute question technique:
- Email: tech@alfred-society.com
- Documentation: /docs
- Issues: GitHub repository

---

**© 2025 Alfred Society GmbH - Powered by i.Alfred**
