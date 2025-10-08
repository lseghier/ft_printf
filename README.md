# 🏆 Conciergerie de Luxe - Site Web Premium

Un site web élégant et moderne pour un service de conciergerie de luxe, avec des animations Three.js sophistiquées et un design épuré.

## ✨ Caractéristiques

- **Design Épuré et Luxueux** - Interface minimaliste haut de gamme
- **Animations 3D avec Three.js** - Sphère animée et particules dans la section hero
- **Responsive Design** - Adapté à tous les écrans (mobile, tablette, desktop)
- **Navigation Fluide** - Menu smooth scroll et animations Framer Motion
- **Performance Optimale** - Next.js 14 avec App Router pour des performances maximales

## 🛠️ Technologies Utilisées

- **Framework**: Next.js 14 (React 18)
- **3D Graphics**: Three.js avec React Three Fiber et Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## 🚀 Installation

### Prérequis

- Node.js 18+ installé sur votre machine
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet** (ou vous êtes déjà dans le dossier)

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Ouvrir dans le navigateur**
   
   Visitez [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
conciergerie-luxe/
├── app/
│   ├── layout.tsx          # Layout principal avec fonts
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer avec liens et réseaux sociaux
│   ├── ServiceCard.tsx     # Carte de service animée
│   └── Scene3D.tsx         # Scène Three.js avec animations 3D
├── public/                 # Assets statiques
├── tailwind.config.js      # Configuration Tailwind
├── tsconfig.json           # Configuration TypeScript
└── package.json            # Dépendances du projet
```

## 🎨 Sections du Site

1. **Hero Section** - Animation 3D avec Three.js, titre principal et CTA
2. **Services** - Grille de 6 services premium avec icônes et animations
3. **À Propos** - Présentation de l'entreprise avec statistiques
4. **Contact** - Informations de contact et CTA

## 🎯 Build pour Production

```bash
npm run build
npm start
```

## 🌈 Personnalisation

### Couleurs

Les couleurs de la palette "gold" sont définies dans `tailwind.config.js`:
- Modifiez les valeurs de `colors.gold` pour changer la palette

### Animations 3D

Le composant `Scene3D.tsx` contient les animations Three.js:
- Modifiez `distort`, `speed` pour changer l'effet de la sphère
- Ajustez `autoRotateSpeed` pour la vitesse de rotation
- Changez les couleurs des lumières et matériaux

### Services

Modifiez le tableau `services` dans `app/page.tsx` pour ajouter/modifier les services

## 📝 License

Ce projet est un exemple de démonstration.

## 🤝 Support

Pour toute question ou support, contactez-nous à contact@conciergerie.fr

---

Fait avec ❤️ pour l'excellence et le luxe
