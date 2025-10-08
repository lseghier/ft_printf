'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

export default function IAlfredChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{text: string, from: 'user' | 'alfred'}>>([
    { text: 'Bonjour, je suis i.Alfred, votre assistant virtuel. Comment puis-je vous aider aujourd\'hui ?', from: 'alfred' }
  ])
  const [input, setInput] = useState('')

  const autoResponses: {[key: string]: string} = {
    'ferrari': 'Excellent choix. Nous avons plusieurs Ferrari disponibles à Monaco, Saint-Tropez et Paris. Quelle est votre destination préférée ?',
    'jet': 'Nos jets privés sont disponibles 24/7. Quelle est votre destination et date de départ souhaitée ?',
    'villa': 'Nous avons une sélection exclusive de villas à Marbella, Monaco, Saint-Tropez et Ibiza. Quelle région vous intéresse ?',
    'membre': 'Pour rejoindre le cercle Alfred Society, veuillez visiter notre page Espace Membre ou contactez-nous directement au +33 7 81 54 04 34.',
    'bonjour': 'Bonjour ! Comment puis-je rendre votre journée extraordinaire ?',
    'prix': 'Nos services sont sur mesure. Je vous invite à préciser votre demande pour un devis personnalisé.',
    'default': 'Je note votre demande. Un membre de l\'équipe Alfred Society vous contactera sous 24h. Puis-je vous aider avec autre chose ?'
  }

  const handleSend = () => {
    if (!input.trim()) return
    
    setMessages([...messages, { text: input, from: 'user' }])
    
    // Simple keyword detection
    let response = autoResponses.default
    const lowerInput = input.toLowerCase()
    
    for (const [key, value] of Object.entries(autoResponses)) {
      if (lowerInput.includes(key)) {
        response = value
        break
      }
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, from: 'alfred' }])
    }, 1000)
    
    setInput('')
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-alfred-gold to-alfred-goldLight text-black p-4 rounded-full shadow-2xl hover:shadow-alfred-gold/50 transition-all duration-300 animate-glow"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-alfred-dark border border-alfred-gold/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-alfred-gold to-alfred-goldLight p-4 text-black">
              <h3 className="font-serif font-bold text-lg">i.Alfred</h3>
              <p className="text-xs opacity-80">Assistant Virtuel • En ligne</p>
            </div>

            {/* Messages */}
            <div className="h-[360px] overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.from === 'user' 
                      ? 'bg-alfred-gold text-black' 
                      : 'bg-white/10 text-white border border-alfred-gold/20'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-alfred-gold/30 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Votre message..."
                  className="flex-1 bg-white/10 border border-alfred-gold/30 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-alfred-gold"
                />
                <button
                  onClick={handleSend}
                  className="bg-alfred-gold text-black p-2 rounded-full hover:bg-alfred-goldLight transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
