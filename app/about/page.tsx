'use client'

import { motion } from 'framer-motion'
import { User, Users, Award, Heart } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import IAlfredChat from '@/components/IAlfredChat'
import FloatingMemberButton from '@/components/FloatingMemberButton'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-alfred-darker">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              L'Univers <span className="text-alfred-gold">Alfred Society</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto italic">
              « Le luxe n'a pas besoin de parler fort, il agit avec précision. »
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mister Alfred Section */}
      <section className="py-16 px-6 bg-alfred-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <User className="w-8 h-8 text-alfred-gold" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                  Mister Alfred
                </h2>
              </div>
              <p className="text-lg text-white/70 mb-4">
                Fondateur visionnaire et mystérieux d'Alfred Society GmbH, Mister Alfred incarne 
                l'élégance absolue et la discrétion parfaite.
              </p>
              <p className="text-lg text-white/70 mb-4">
                Avec plus de 20 ans d'expérience dans les services de luxe à l'échelle mondiale, 
                il a bâti un empire dédié à l'excellence et à l'anticipation des besoins de l'élite internationale.
              </p>
              <p className="text-lg text-white/70">
                Sa philosophie : transformer chaque demande en une expérience inoubliable, 
                toujours dans la plus grande discrétion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-alfred-gold/20 to-alfred-dark rounded-3xl p-12 flex items-center justify-center border border-alfred-gold/30">
                  <User className="w-64 h-64 text-alfred-gold/30" strokeWidth={0.5} />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-alfred-gold text-black p-6 rounded-2xl shadow-2xl">
                  <p className="font-bold">Fondateur & CEO</p>
                  <p className="text-sm opacity-80">Alfred Society GmbH</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Miss Alfred Section */}
      <section className="py-16 px-6 bg-alfred-darker">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-alfred-goldLight/20 to-alfred-dark rounded-3xl p-12 flex items-center justify-center border border-alfred-gold/30">
                  <Heart className="w-64 h-64 text-alfred-gold/30" strokeWidth={0.5} />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-alfred-gold to-alfred-goldLight text-black p-6 rounded-2xl shadow-2xl">
                  <p className="font-bold">Majordome en Chef</p>
                  <p className="text-sm opacity-80">Alfred Society</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-alfred-gold" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                  Miss Alfred
                </h2>
              </div>
              <p className="text-lg text-white/70 mb-4">
                Majordome raffinée et dévouée, Miss Alfred supervise personnellement 
                chaque demande avec une attention méticuleuse aux détails.
              </p>
              <p className="text-lg text-white/70 mb-4">
                Son expertise en gestion de services de luxe et sa capacité à anticiper 
                les besoins font d'elle la gardienne de l'excellence Alfred Society.
              </p>
              <p className="text-lg text-white/70">
                Disponible 24/7, elle coordonne une équipe internationale de spécialistes 
                pour garantir une satisfaction absolue.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alfred Society GmbH */}
      <section className="py-16 px-6 bg-alfred-dark">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Users className="w-16 h-16 text-alfred-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Alfred Society GmbH
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Basée en Allemagne, notre société opère à l'échelle mondiale avec une clientèle 
              exigeante en Europe, au Moyen-Orient et aux États-Unis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'Un standard de qualité inégalé dans chaque interaction'
              },
              {
                icon: User,
                title: 'Discrétion',
                description: 'Confidentialité absolue garantie pour tous nos membres'
              },
              {
                icon: Heart,
                title: 'Anticipation',
                description: 'Nous comprenons vos besoins avant même que vous les exprimiez'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-alfred-darker border border-alfred-gold/20 p-8 rounded-2xl text-center hover:border-alfred-gold/50 transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-alfred-gold mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-alfred-darker to-alfred-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-3xl md:text-4xl font-serif italic text-white/90 mb-6">
              « Le luxe n'a pas besoin de parler fort, il agit avec précision. »
            </blockquote>
            <p className="text-alfred-gold font-semibold">— Mister Alfred</p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <IAlfredChat />
      <FloatingMemberButton />
    </div>
  )
}
