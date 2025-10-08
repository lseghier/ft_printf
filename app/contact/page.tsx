'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send, Phone, Mail, MapPin, Clock } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import IAlfredChat from '@/components/IAlfredChat'
import FloatingMemberButton from '@/components/FloatingMemberButton'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send the form data to an API
    alert('Message envoyé ! Nous vous contacterons sous 24h.')
    setFormData({ name: '', email: '', message: '' })
  }

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
              Contactez <span className="text-alfred-gold">Alfred Society</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Notre équipe est disponible 24/7 pour répondre à toutes vos demandes
            </p>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.a
            href="https://wa.me/33781540434"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-[#25D366]/20 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/20 rounded-2xl">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                    Contactez-nous sur WhatsApp
                  </h3>
                  <p className="text-white/90 text-lg">
                    +33 7 81 54 04 34
                  </p>
                  <p className="text-white/70 text-sm">
                    Disponible 24h sur 24, 7 jours sur 7
                  </p>
                </div>
              </div>
              <div className="bg-white text-[#25D366] px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2">
                Ouvrir WhatsApp
                <Send size={20} />
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6 bg-alfred-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Téléphone',
                content: '+33 7 81 54 04 34',
                subtitle: 'WhatsApp & Appel'
              },
              {
                icon: Clock,
                title: 'Disponibilité',
                content: '24/7',
                subtitle: '365 jours par an'
              },
              {
                icon: MapPin,
                title: 'Siège Social',
                content: 'Alfred Society GmbH',
                subtitle: 'Allemagne'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-alfred-darker border border-alfred-gold/20 rounded-2xl p-8 text-center hover:border-alfred-gold/50 transition-all duration-300"
              >
                <div className="inline-flex p-4 bg-alfred-gold/10 rounded-xl mb-4">
                  <item.icon className="w-8 h-8 text-alfred-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-alfred-gold text-lg mb-1">
                  {item.content}
                </p>
                <p className="text-white/60 text-sm">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Mail className="w-12 h-12 text-alfred-gold mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Envoyez-nous un message
            </h2>
            <p className="text-white/70 text-lg">
              Nous vous répondrons dans les plus brefs délais
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-alfred-dark border border-alfred-gold/30 rounded-3xl p-8 md:p-12"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-white/80 mb-2 font-medium">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-alfred-darker/50 border border-alfred-gold/30 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-alfred-gold transition-colors"
                  placeholder="Votre nom"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/80 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-alfred-darker/50 border border-alfred-gold/30 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-alfred-gold transition-colors"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/80 mb-2 font-medium">
                  Votre demande
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full bg-alfred-darker/50 border border-alfred-gold/30 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-alfred-gold transition-colors resize-none"
                  placeholder="Décrivez votre demande..."
                  required
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-alfred-gold to-alfred-goldLight text-black py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-alfred-gold/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Envoyer le message
                <Send size={20} />
              </motion.button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-white/60 text-sm"
          >
            <p>
              En soumettant ce formulaire, vous acceptez que Alfred Society GmbH traite vos données 
              dans le respect de la confidentialité la plus stricte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* i.Alfred Section */}
      <section className="py-24 px-6 bg-alfred-dark">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex p-6 bg-alfred-gold/10 rounded-3xl mb-6">
              <MessageCircle className="w-16 h-16 text-alfred-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Essayez <span className="text-alfred-gold">i.Alfred</span>
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Notre assistant virtuel intelligent est disponible en bas à droite de votre écran 
              pour répondre immédiatement à vos questions.
            </p>
            <p className="text-alfred-gold italic">
              « i.Alfred, votre concierge virtuel, toujours à votre service. »
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <IAlfredChat />
      <FloatingMemberButton />
    </div>
  )
}
