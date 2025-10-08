'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Clock, 
  Car, 
  Home, 
  Plane, 
  Calendar,
  ShieldCheck,
  ArrowRight
} from 'lucide-react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'

// Dynamic import to avoid SSR issues with Three.js
const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false })

export default function Home() {
  const services = [
    {
      icon: Home,
      title: 'Gestion de Propriété',
      description: 'Gestion complète de vos résidences principales et secondaires avec un service discret et professionnel.',
    },
    {
      icon: Car,
      title: 'Transport Premium',
      description: 'Chauffeurs privés et véhicules de luxe disponibles 24/7 pour tous vos déplacements.',
    },
    {
      icon: Plane,
      title: 'Voyages sur Mesure',
      description: 'Organisation de voyages d\'exception avec hébergements exclusifs et expériences uniques.',
    },
    {
      icon: Calendar,
      title: 'Événements Privés',
      description: 'Planification et coordination d\'événements privés haut de gamme et célébrations.',
    },
    {
      icon: Sparkles,
      title: 'Lifestyle Management',
      description: 'Assistance quotidienne pour tous vos besoins personnels et professionnels.',
    },
    {
      icon: ShieldCheck,
      title: 'Sécurité & Confidentialité',
      description: 'Service discret avec la plus haute confidentialité et sécurité garantie.',
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Scene3D />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 mb-6">
              Excellence en <span className="text-gold-600">Conciergerie</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              Un service de conciergerie de luxe dédié à simplifier votre quotidien avec élégance et discrétion
            </p>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Découvrir nos services
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-neutral-400 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Une gamme complète de services premium pour répondre à tous vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
                L'Excellence au Service du Luxe
              </h2>
              <div className="space-y-4 text-neutral-600 text-lg leading-relaxed">
                <p>
                  Depuis plus de 15 ans, notre conciergerie de luxe s'engage à offrir 
                  un service d'excellence à une clientèle exigeante et internationale.
                </p>
                <p>
                  Notre équipe de professionnels dévoués travaille 24/7 pour anticiper 
                  vos besoins et transformer chaque demande en une expérience exceptionnelle.
                </p>
                <p>
                  Discrétion, réactivité et excellence sont les piliers de notre engagement 
                  à vos côtés.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-gold-600 mb-2">15+</div>
                  <div className="text-sm text-neutral-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-gold-600 mb-2">500+</div>
                  <div className="text-sm text-neutral-600">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-gold-600 mb-2">24/7</div>
                  <div className="text-sm text-neutral-600">Disponibilité</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-gold-100 to-gold-200 rounded-3xl p-12 flex items-center justify-center">
                <Clock className="w-48 h-48 text-gold-600/20" strokeWidth={1} />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="font-semibold">Service Premium</p>
                <p className="text-sm text-gold-100">Disponible 24/7</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Contactez-nous
            </h2>
            <p className="text-xl text-neutral-300 mb-12">
              Notre équipe est à votre disposition pour discuter de vos besoins et 
              vous proposer des solutions sur mesure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Disponibilité</h3>
                <p className="text-neutral-400">24/7, 365 jours par an</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mb-4">
                  <Plane className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">International</h3>
                <p className="text-neutral-400">Service mondial</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Confidentialité</h3>
                <p className="text-neutral-400">Garantie absolue</p>
              </div>
            </div>

            <motion.a
              href="mailto:contact@conciergerie.fr"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-colors shadow-lg"
            >
              Demander un devis
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
