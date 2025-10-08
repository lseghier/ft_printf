'use client'

import { Phone, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-alfred-darker border-t border-alfred-gold/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-alfred-gold mb-2">
              Alfred Society
            </h3>
            <p className="text-xs text-alfred-goldLight/60 mb-4">La Meilleure Conciergerie</p>
            <p className="text-sm text-white/60">
              Discrétion. Excellence. Anticipation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-alfred-gold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/60 hover:text-alfred-gold transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-alfred-gold transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-alfred-gold transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-white/60 hover:text-alfred-gold transition-colors">
                  Notre Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-alfred-gold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-alfred-gold" />
                <a href="https://wa.me/33781540434" className="text-white/60 hover:text-alfred-gold transition-colors">
                  +33 7 81 54 04 34
                </a>
              </li>
              <li className="text-white/60">
                WhatsApp 24/7
              </li>
              <li className="text-white/40 text-xs">
                Alfred Society GmbH
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-alfred-gold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-alfred-dark rounded-full hover:bg-alfred-gold hover:text-black transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-alfred-dark rounded-full hover:bg-alfred-gold hover:text-black transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-xs text-white/40 mt-4">
              Powered by i.Alfred
            </p>
          </div>
        </div>

        <div className="border-t border-alfred-gold/10 mt-8 pt-8 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Alfred Society GmbH – Tous droits réservés.</p>
          <p className="text-xs mt-2 italic text-alfred-goldLight/40">
            « Le luxe n'a pas besoin de parler fort, il agit avec précision. »
          </p>
        </div>
      </div>
    </footer>
  )
}
