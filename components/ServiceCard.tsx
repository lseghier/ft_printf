'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Gold accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-t-2xl" />
      
      {/* Icon */}
      <div className="mb-6 inline-flex p-4 bg-gold-50 rounded-xl group-hover:bg-gold-100 transition-colors">
        <Icon className="w-8 h-8 text-gold-600" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-serif font-bold mb-3 text-neutral-900">
        {title}
      </h3>
      <p className="text-neutral-600 leading-relaxed">
        {description}
      </p>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-gold-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  )
}
