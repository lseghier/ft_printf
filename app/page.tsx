'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Globe2, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import IAlfredChat from '@/components/IAlfredChat'
import FloatingMemberButton from '@/components/FloatingMemberButton'
import Loader from '@/components/Loader'

const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false })

export default function Home() {
  return (
    <>
      <Loader />
      <div className="min-h-screen bg-alfred-darker">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <Scene3D />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-alfred-darker/50 to-alfred-darker z-[1]" />
          
          <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-alfred-goldLight/80 text-sm md:text-base mb-4 tracking-widest uppercase"
              >
                Bienvenue dans l'univers d'Alfred Society
              </motion.p>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
                Le luxe commence par une <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-alfred-gold to-alfred-goldLight">
                  demande bien formulée
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light">
                La meilleure conciergerie du monde à votre service
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/membre">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-to-r from-alfred-gold to-alfred-goldLight text-black px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-alfred-gold/50 transition-all duration-300 flex items-center gap-3"
                  >
                    Devenir membre
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                  </motion.button>
                </Link>
                
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-alfred-gold text-alfred-gold px-10 py-4 rounded-full font-bold text-lg hover:bg-alfred-gold hover:text-black transition-all duration-300"
                  >
                    Contacter i.Alfred
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-alfred-gold/50 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 bg-alfred-gold rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-alfred-dark">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                Notre <span className="text-alfred-gold">Philosophie</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto italic">
                « Le luxe n'a pas besoin de parler fort, il agit avec précision. »
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: 'Discrétion',
                  description: 'Confidentialité absolue garantie pour tous nos membres'
                },
                {
                  icon: Sparkles,
                  title: 'Excellence',
                  description: 'Un service irréprochable dans chaque détail'
                },
                {
                  icon: Clock,
                  title: 'Anticipation',
                  description: 'Nous répondons à vos besoins avant même que vous les exprimiez'
                }
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-alfred-darker border border-alfred-gold/20 p-8 rounded-2xl text-center group hover:border-alfred-gold/50 transition-all duration-300"
                >
                  <div className="inline-flex p-4 bg-alfred-gold/10 rounded-xl mb-6 group-hover:bg-alfred-gold/20 transition-colors">
                    <value.icon className="w-12 h-12 text-alfred-gold" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/60">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 bg-alfred-darker">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                Services <span className="text-alfred-gold">d'Exception</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Du sourcing de supercars à l'aviation privée, nous réalisons l'impossible
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
              {[
                'Supercars & Véhicules d\'Exception',
                'Aviation Privée',
                'Yachting de Prestige',
                'Immobilier Haut de Gamme',
                'Événements Privés',
                'Lifestyle Management 24/7'
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-alfred-dark to-alfred-darker border border-alfred-gold/20 p-6 rounded-xl hover:border-alfred-gold/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-alfred-gold rounded-full group-hover:animate-pulse" />
                    <p className="text-white font-medium">{service}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-alfred-gold text-alfred-gold px-8 py-3 rounded-full font-semibold hover:bg-alfred-gold hover:text-black transition-all duration-300 inline-flex items-center gap-2"
                >
                  Découvrir tous nos services
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-24 bg-alfred-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Globe2 className="w-16 h-16 text-alfred-gold mx-auto mb-8" />
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                  Une Présence <span className="text-alfred-gold">Mondiale</span>
                </h2>
                <p className="text-xl text-white/70 mb-12">
                  Basée en Allemagne, Alfred Society GmbH opère à l'échelle internationale : <br />
                  Europe, Moyen-Orient, États-Unis
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-serif font-bold text-alfred-gold mb-2">2025</div>
                    <div className="text-white/60">Leader Européen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-serif font-bold text-alfred-gold mb-2">2026</div>
                    <div className="text-white/60">Expansion Mondiale</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-serif font-bold text-alfred-gold mb-2">2030</div>
                    <div className="text-white/60">Référence Absolue</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
        <IAlfredChat />
        <FloatingMemberButton />
      </div>
    </>
  )
}
