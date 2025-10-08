'use client'

import { motion } from 'framer-motion'
import { Target, TrendingUp, Globe2, Award } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import IAlfredChat from '@/components/IAlfredChat'
import FloatingMemberButton from '@/components/FloatingMemberButton'

export default function VisionPage() {
  const timeline = [
    {
      year: '2025',
      title: 'Leader Européen',
      description: 'Consolidation de notre position comme référence absolue de la conciergerie de luxe en Europe',
      highlights: [
        'Expansion dans 15 pays européens',
        'Réseau de partenaires premium',
        'Service i.Alfred multilingue',
        'Flotte de véhicules d\'exception'
      ],
      icon: Award
    },
    {
      year: '2026',
      title: 'Expansion Mondiale',
      description: 'Déploiement stratégique au Moyen-Orient et aux États-Unis pour une présence véritablement internationale',
      highlights: [
        'Bureaux à Dubai et New York',
        'Partenariats stratégiques globaux',
        'Services 24/7 sur 3 continents',
        'Flotte aérienne privée dédiée'
      ],
      icon: Globe2
    },
    {
      year: '2030',
      title: 'Référence Mondiale',
      description: 'Alfred Society devient la référence incontestée du luxe et de l\'excellence à l\'échelle planétaire',
      highlights: [
        'Présence sur 5 continents',
        'Réseau exclusif de 1000+ partenaires',
        'i.Alfred IA de nouvelle génération',
        'Services anticipatifs prédictifs'
      ],
      icon: Target
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
              Notre <span className="text-alfred-gold">Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto italic">
              « Always one step ahead. »
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-alfred-dark to-alfred-darker border border-alfred-gold/30 rounded-3xl p-12 text-center"
          >
            <TrendingUp className="w-16 h-16 text-alfred-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              Devenir la référence mondiale incontestée de la conciergerie de luxe en 
              combinant excellence humaine et intelligence artificielle pour anticiper 
              les besoins de l'élite internationale.
            </p>
            <p className="text-lg text-alfred-gold italic">
              Nous ne suivons pas les tendances, nous les créons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-alfred-dark">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Roadmap <span className="text-alfred-gold">Stratégique</span>
            </h2>
            <p className="text-xl text-white/60">
              Notre plan de croissance pour dominer le marché mondial
            </p>
          </motion.div>

          <div className="space-y-16">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Year Badge */}
                <div className="flex-shrink-0 w-48 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-block"
                  >
                    <div className="text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-alfred-gold to-alfred-goldLight mb-2">
                      {item.year}
                    </div>
                    <div className="inline-flex p-4 bg-alfred-gold/10 rounded-2xl border border-alfred-gold/30">
                      <item.icon className="w-12 h-12 text-alfred-gold" />
                    </div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-alfred-darker border border-alfred-gold/20 rounded-2xl p-8 hover:border-alfred-gold/50 transition-all duration-300">
                  <h3 className="text-3xl font-serif font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-white/70 mb-6">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-alfred-gold rounded-full mt-2" />
                        <p className="text-white/60 text-sm">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-alfred-darker">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Nos <span className="text-alfred-gold">Valeurs</span>
            </h2>
            <p className="text-xl text-white/60">
              Les piliers de notre excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Pionnier dans l\'intégration de l\'IA au service du luxe avec i.Alfred'
              },
              {
                title: 'Excellence',
                description: 'Un standard de qualité inégalé dans chaque interaction et service'
              },
              {
                title: 'Discrétion',
                description: 'Confidentialité absolue et protection de la vie privée de nos membres'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-alfred-dark border border-alfred-gold/20 p-8 rounded-2xl text-center hover:border-alfred-gold/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-bold text-alfred-gold mb-4">
                  {value.title}
                </h3>
                <p className="text-white/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 bg-gradient-to-b from-alfred-dark to-alfred-darker">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-3xl md:text-5xl font-serif italic text-white mb-6">
              « Always one step ahead. »
            </blockquote>
            <p className="text-alfred-gold font-semibold text-xl">— Alfred Society Vision</p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <IAlfredChat />
      <FloatingMemberButton />
    </div>
  )
}
