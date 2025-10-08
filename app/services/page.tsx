'use client'

import { motion } from 'framer-motion'
import { Car, Plane, Anchor, Home, Calendar, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import IAlfredChat from '@/components/IAlfredChat'
import FloatingMemberButton from '@/components/FloatingMemberButton'

export default function ServicesPage() {
  const services = [
    {
      icon: Car,
      title: 'Supercars & Véhicules d\'Exception',
      description: 'Location et sourcing de véhicules de prestige : Ferrari, Lamborghini, Rolls Royce, Porsche, McLaren et plus encore. Disponibles dans les plus belles destinations d\'Europe.',
      features: [
        'Ferrari, Lamborghini, Porsche',
        'Rolls Royce, Bentley, McLaren',
        'Livraison dans toute l\'Europe',
        'Service chauffeur disponible'
      ]
    },
    {
      icon: Plane,
      title: 'Aviation Privée',
      description: 'Jets privés, hélicoptères et avions d\'affaires pour vos déplacements professionnels et personnels. Service disponible 24/7 vers toutes destinations.',
      features: [
        'Jets privés long-courrier',
        'Hélicoptères VIP',
        'Départs immédiats',
        'Coordination globale'
      ]
    },
    {
      icon: Anchor,
      title: 'Yachting de Prestige',
      description: 'Accès aux plus beaux yachts de la Méditerranée : Monaco, Saint-Tropez, Ibiza, Antibes. Équipages professionnels et services à bord sur mesure.',
      features: [
        'Yachts de luxe Méditerranée',
        'Équipages professionnels',
        'Événements privés à bord',
        'Destinations exclusives'
      ]
    },
    {
      icon: Home,
      title: 'Immobilier Haut de Gamme',
      description: 'Sourcing et location de propriétés d\'exception : villas, penthouses, châteaux. Destinations premium : Marbella, Monaco, Dubai, Saint-Tropez.',
      features: [
        'Villas & penthouses exclusifs',
        'Monaco, Marbella, Dubai',
        'Visites privées VIP',
        'Gestion complète'
      ]
    },
    {
      icon: Calendar,
      title: 'Événements Privés & Expériences',
      description: 'Organisation d\'événements privés inoubliables : galas, anniversaires, mariages. Accès à des lieux exclusifs et expériences uniques au monde.',
      features: [
        'Galas & soirées privées',
        'Lieux exclusifs',
        'Coordination complète',
        'Expériences uniques'
      ]
    },
    {
      icon: Sparkles,
      title: 'Lifestyle Management 24/7',
      description: 'Un service de conciergerie global disponible jour et nuit pour tous vos besoins : réservations, shopping, voyages, et bien plus encore.',
      features: [
        'Disponible 24h/24, 7j/7',
        'Réseau international',
        'Demandes sur mesure',
        'Assistance complète'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-alfred-darker">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-alfred-dark to-alfred-darker">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Nos <span className="text-alfred-gold">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Une gamme complète de services premium pour répondre à tous vos désirs les plus exigeants
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-alfred-dark border border-alfred-gold/20 rounded-2xl overflow-hidden group hover:border-alfred-gold/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-alfred-gold/10 to-transparent p-6 border-b border-alfred-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-alfred-gold/20 rounded-xl group-hover:bg-alfred-gold/30 transition-colors">
                      <service.icon className="w-8 h-8 text-alfred-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/70">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center gap-3 text-white/60">
                        <div className="w-1.5 h-1.5 bg-alfred-gold rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <button className="w-full bg-alfred-gold/10 hover:bg-alfred-gold text-white hover:text-black border border-alfred-gold/30 hover:border-alfred-gold py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                      Faire une demande à i.Alfred
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-alfred-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Prêt à vivre l'expérience <span className="text-alfred-gold">Alfred</span> ?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Contactez i.Alfred dès maintenant ou rejoignez notre cercle exclusif de membres
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-alfred-gold text-black px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-alfred-gold/50 transition-all duration-300"
                >
                  Contacter i.Alfred
                </motion.button>
              </Link>
              <Link href="/membre">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-alfred-gold text-alfred-gold px-10 py-4 rounded-full font-bold text-lg hover:bg-alfred-gold hover:text-black transition-all duration-300"
                >
                  Devenir membre
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <IAlfredChat />
      <FloatingMemberButton />
    </div>
  )
}
