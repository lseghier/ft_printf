# 🎩 Alfred Society GmbH - La Meilleure Conciergerie

Un site web cinématique et luxueux pour **Alfred Society GmbH**, la référence mondiale de la conciergerie de luxe. Fondée par le mystérieux **Mister Alfred** et assistée par **i.Alfred**, l'assistant virtuel IA.

## ✨ Caractéristiques

### 🎬 Design Cinématique
- **Style Batcave** - Ambiance sombre et luxueuse avec éclairages dorés
- **Animations Three.js** - Sphère dorée animée avec effets de distorsion et particules
- **Palette Noir & Or** - Deep black (#050505) et gold luxueux (#D4AF37)
- **Effets Parallax** - Transitions fluides et animations sophistiquées

### 🤖 Intelligence Artificielle
- **i.Alfred Chatbot** - Assistant virtuel intelligent disponible sur toutes les pages
- **Réponses Automatiques** - Système de conversation avec détection de mots-clés
- **Interface Élégante** - Design futuriste noir et or

### 🌍 Pages Complètes

1. **Accueil** - Hero cinématique avec Three.js, valeurs, services, présence mondiale
2. **À propos** - Présentation de Mister Alfred, Miss Alfred et Alfred Society GmbH
3. **Nos Services** - 6 services premium (Supercars, Aviation, Yachting, Immobilier, Événements, Lifestyle)
4. **Notre Vision** - Timeline animée 2025-2030 avec roadmap stratégique
5. **Espace Membre** - Portail privé avec login sécurisé et offres exclusives
6. **Contact** - WhatsApp intégré, formulaire et coordonnées

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)

## 🚀 Installation

### Prérequis
- Node.js 18+
- npm ou yarn

### Étapes

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir dans le navigateur
# http://localhost:3000
```

## 📁 Structure du Projet

```
alfred-society/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── about/page.tsx        # À propos
│   ├── services/page.tsx     # Services
│   ├── vision/page.tsx       # Vision
│   ├── membre/page.tsx       # Espace Membre
│   ├── contact/page.tsx      # Contact
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Styles globaux
├── components/
│   ├── Scene3D.tsx           # Animation Three.js
│   ├── Header.tsx            # Navigation
│   ├── Footer.tsx            # Pied de page
│   ├── IAlfredChat.tsx       # Chatbot i.Alfred
│   ├── FloatingMemberButton.tsx  # Bouton flottant
│   ├── Loader.tsx            # Loader animé
│   └── ServiceCard.tsx       # Carte de service
├── public/                   # Assets statiques
├── tailwind.config.js        # Config Tailwind
└── package.json              # Dépendances
```

## 🎨 Palette de Couleurs

```css
/* Noir Luxe */
--alfred-darker: #050505
--alfred-dark: #0a0a0a

/* Or Premium */
--alfred-gold: #D4AF37
--alfred-goldLight: #F4E4B0

/* Gradients */
background: linear-gradient(to right, #D4AF37, #F4E4B0)
```

## 🌟 Fonctionnalités Clés

### 🎭 Animations
- Loader cinématique au chargement
- Effets de hover sophistiqués
- Smooth scroll entre sections
- Parallax et depth effects
- Animations Three.js en temps réel

### 💬 i.Alfred - Assistant Virtuel
- Chat flottant accessible partout
- Détection de mots-clés intelligente
- Interface conversationnelle élégante
- Réponses contextuelles

### 🔐 Espace Membre
- Login sécurisé (Username, Code Membre, Password)
- Interface privée avec offres exclusives
- Tableau de bord personnalisé
- Accès aux services VIP

### 📱 Responsive Design
- Adapté à tous les écrans
- Menu mobile optimisé
- Layout cinématique 9:16 sur smartphones

## 🎯 Pages Détaillées

### 1. Accueil (/)
- Hero avec animation 3D
- Slogan: "Le luxe commence par une demande bien formulée"
- CTA: "Devenir membre" + "Contacter i.Alfred"
- Philosophie: Discrétion, Excellence, Anticipation
- Aperçu des services
- Présence mondiale (2025-2030)

### 2. À propos (/about)
- **Mister Alfred** - Fondateur visionnaire
- **Miss Alfred** - Majordome raffinée
- **Alfred Society GmbH** - Basée en Allemagne, présence mondiale
- Quote: "Le luxe n'a pas besoin de parler fort, il agit avec précision"

### 3. Services (/services)
- **Supercars** - Ferrari, Lamborghini, Rolls Royce, Porsche
- **Aviation Privée** - Jets, hélicoptères
- **Yachting** - Monaco, Saint-Tropez, Antibes
- **Immobilier** - Villas, penthouses
- **Événements** - Galas, expériences uniques
- **Lifestyle 24/7** - Conciergerie globale

### 4. Vision (/vision)
Timeline animée:
- **2025** - Leader Européen
- **2026** - Expansion Mondiale (Moyen-Orient, USA)
- **2030** - Référence Mondiale absolue

### 5. Espace Membre (/membre)
- Login sécurisé avec effet glow
- Dashboard avec offres exclusives
- Réseau VIP
- Expériences secrètes

### 6. Contact (/contact)
- **WhatsApp**: +33 7 81 54 04 34 (24/7)
- Formulaire de contact
- Coordonnées complètes
- Présentation i.Alfred

## 🎬 Éléments Cinématiques

### Scene3D (Three.js)
```typescript
- Sphère dorée avec distorsion
- 500 particules animées
- Éclairage cinématique (SpotLight + PointLights)
- Fog atmosphérique
- Auto-rotation
```

### Animations Framer Motion
```typescript
- Fade in / Slide in
- Hover effects avec scale
- Stagger animations
- Page transitions
```

## 📞 Contact

- **WhatsApp**: +33 7 81 54 04 34
- **Email**: Via formulaire de contact
- **Siège**: Alfred Society GmbH, Allemagne

## 🔧 Build pour Production

```bash
# Build
npm run build

# Start production
npm start

# Lint
npm run lint
```

## 🌐 Déploiement

Compatible avec:
- Vercel (recommandé pour Next.js)
- Netlify
- AWS Amplify
- Docker

## 📝 License

© 2025 Alfred Society GmbH – Tous droits réservés.

**Powered by i.Alfred**

---

<div align="center">

### 🎩 « Le luxe n'a pas besoin de parler fort, il agit avec précision. »

**Alfred Society GmbH** - *La Meilleure Conciergerie*

</div>
