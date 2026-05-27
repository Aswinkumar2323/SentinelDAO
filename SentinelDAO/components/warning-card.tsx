'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, AlertCircle } from 'lucide-react'

interface Props {
  warnings: string[]
}

export function WarningCard({ warnings }: Props) {
  if (!warnings || warnings.length === 0) return null

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-r from-amber-950/20 to-zinc-900/40 border border-amber-800/40 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md shadow-xl"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-2xl rounded-full pointer-events-none" />
      
      <div className="flex items-center gap-3 mb-4">
        <div className="h-9 w-9 rounded-lg bg-amber-950/60 border border-amber-700/50 flex items-center justify-center text-amber-400">
          <AlertTriangle className="h-5 w-5 animate-pulse" />
        </div>
        <div>
          <h3 className="text-amber-400 font-bold text-sm uppercase tracking-wide">
            Compliance Warnings
          </h3>
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Legal & Audit Risks</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {warnings.map((warning, index) => (
          <div
            key={index}
            className="bg-zinc-950/60 border border-zinc-850 hover:border-zinc-800 hover:bg-zinc-950/90 rounded-xl p-3.5 text-zinc-300 text-sm flex items-start gap-2.5 transition duration-300"
          >
            <AlertCircle className="h-4 w-4 text-amber-500/70 shrink-0 mt-0.5" />
            <span className="font-mono text-zinc-300">{warning}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
