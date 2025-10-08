'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, Lock, User, Key, Eye, EyeOff } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import IAlfredChat from '@/components/IAlfredChat'

export default function MembrePage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    memberCode: '',
    password: ''
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login - in production this would call an API
    if (formData.username && formData.memberCode && formData.password) {
      setIsLoggedIn(true)
    }
  }

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-alfred-darker">
        <Header />
        <section className="pt-32 pb-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Crown className="w-20 h-20 text-alfred-gold mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                Bienvenue, Membre <span className="text-alfred-gold">Privilégié</span>
              </h1>
              <p className="text-xl text-white/70">
                Accès exclusif à vos services premium
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Offres Exclusives',
                  description: 'Accès prioritaire aux véhicules d\'exception et expériences uniques',
                  status: 'Nouveau'
                },
                {
                  title: 'Concierge Dédié',
                  description: 'Votre assistant personnel disponible 24/7',
                  status: 'Actif'
                },
                {
                  title: 'Événements Privés',
                  description: 'Invitations aux événements exclusifs Alfred Society',
                  status: '3 disponibles'
                },
                {
                  title: 'Réseau VIP',
                  description: 'Connexion avec d\'autres membres d\'élite',
                  status: 'Actif'
                },
                {
                  title: 'Expériences Secrètes',
                  description: 'Accès aux expériences les plus confidentielles',
                  status: 'Premium'
                },
                {
                  title: 'Avantages Partenaires',
                  description: 'Privilèges chez nos partenaires premium mondiaux',
                  status: 'Illimité'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-alfred-dark border border-alfred-gold/20 rounded-2xl p-6 hover:border-alfred-gold/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs bg-alfred-gold/20 text-alfred-gold px-3 py-1 rounded-full">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-white/60">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center"
            >
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-white/60 hover:text-alfred-gold transition-colors"
              >
                Se déconnecter
              </button>
            </motion.div>
          </div>
        </section>
        <Footer />
        <IAlfredChat />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-alfred-darker">
      <Header />

      {/* Login Section */}
      <section className="pt-32 pb-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Crown className="w-16 h-16 text-alfred-gold mb-6" />
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                Espace Membre <span className="text-alfred-gold">Privé</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Accédez à votre portail exclusif et découvrez des services et expériences 
                réservés uniquement aux membres d'Alfred Society.
              </p>

              <div className="space-y-4">
                {[
                  'Offres et services exclusifs',
                  'Concierge personnel dédié',
                  'Événements privés VIP',
                  'Expériences confidentielles',
                  'Réseau d\'élite international'
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-alfred-gold rounded-full" />
                    <p className="text-white/80">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-alfred-gold/20 to-transparent rounded-3xl blur-3xl" />
              
              <div className="relative bg-alfred-dark/90 backdrop-blur-xl border border-alfred-gold/30 rounded-3xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <Lock className="w-12 h-12 text-alfred-gold mx-auto mb-4 animate-glow" />
                  <h2 className="text-3xl font-serif font-bold text-white mb-2">
                    Connexion Sécurisée
                  </h2>
                  <p className="text-white/60 text-sm">
                    Réservé aux membres Alfred Society
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  {/* Username */}
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">
                      Nom d'utilisateur
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-alfred-gold/50" size={20} />
                      <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                        className="w-full bg-alfred-darker/50 border border-alfred-gold/30 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-alfred-gold transition-colors"
                        placeholder="Votre nom d'utilisateur"
                        required
                      />
                    </div>
                  </div>

                  {/* Member Code */}
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">
                      Code Membre
                    </label>
                    <div className="relative">
                      <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-alfred-gold/50" size={20} />
                      <input
                        type="text"
                        value={formData.memberCode}
                        onChange={(e) => setFormData({...formData, memberCode: e.target.value})}
                        className="w-full bg-alfred-darker/50 border border-alfred-gold/30 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-alfred-gold transition-colors"
                        placeholder="Votre code membre"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">
                      Mot de passe
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-alfred-gold/50" size={20} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full bg-alfred-darker/50 border border-alfred-gold/30 rounded-xl pl-12 pr-12 py-3 text-white focus:outline-none focus:border-alfred-gold transition-colors"
                        placeholder="Votre mot de passe"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-alfred-gold/50 hover:text-alfred-gold transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-alfred-gold to-alfred-goldLight text-black py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-alfred-gold/50 transition-all duration-300"
                  >
                    Accéder à mon espace
                  </motion.button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-white/60 text-sm mb-4">
                    Pas encore membre ?
                  </p>
                  <a href="/contact" className="text-alfred-gold hover:text-alfred-goldLight transition-colors font-semibold">
                    Rejoindre le cercle →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <IAlfredChat />
    </div>
  )
}
