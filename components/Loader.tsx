'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-alfred-darker flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="mb-8"
            >
              <h1 className="text-6xl font-serif font-bold text-alfred-gold mb-2">
                Alfred Society
              </h1>
              <p className="text-alfred-goldLight/60 text-sm tracking-widest">
                LA MEILLEURE CONCIERGERIE
              </p>
            </motion.div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 border-4 border-alfred-gold/20 border-t-alfred-gold rounded-full mx-auto"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
