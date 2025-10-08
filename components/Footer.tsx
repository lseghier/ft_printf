'use client'

import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold-400 mb-4">
              Conciergerie
            </h3>
            <p className="text-sm text-neutral-400">
              Votre service de conciergerie de luxe dédié à l'excellence et au service personnalisé.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#accueil" className="hover:text-gold-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold-400" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold-400" />
                <span>contact@conciergerie.fr</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gold-400" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-white mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-neutral-800 rounded-full hover:bg-gold-400 hover:text-neutral-900 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-neutral-800 rounded-full hover:bg-gold-400 hover:text-neutral-900 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-neutral-800 rounded-full hover:bg-gold-400 hover:text-neutral-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Conciergerie de Luxe. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
