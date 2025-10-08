'use client'

import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'
import Link from 'next/link'

export default function FloatingMemberButton() {
  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed left-6 bottom-6 z-40"
    >
      <Link href="/membre">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-alfred-gold via-alfred-goldLight to-alfred-gold bg-[length:200%_100%] animate-shimmer text-black px-6 py-3 rounded-full font-semibold shadow-2xl flex items-center gap-2 hover:shadow-alfred-gold/50 transition-all duration-300"
        >
          <Crown size={20} />
          Devenir membre
        </motion.button>
      </Link>
    </motion.div>
  )
}
