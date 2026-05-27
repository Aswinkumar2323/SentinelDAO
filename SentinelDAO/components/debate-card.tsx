'use client'

import { motion } from 'framer-motion'
import { AlertCircle, TrendingUp, ShieldAlert, Zap } from 'lucide-react'

interface Props {
  conservative: string
  optimistic: string
}

export function DebateCard({ conservative, optimistic }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Conservative Agent */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-br from-red-950/20 via-zinc-900/40 to-zinc-900/10 border border-red-950/80 hover:border-red-900/60 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md shadow-xl"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 blur-2xl rounded-full pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-xl bg-red-950/50 border border-red-800/40 flex items-center justify-center text-red-400">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-red-400 font-bold tracking-wide text-sm uppercase">
              Conservative Agent
            </h3>
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Risk Mitigator</span>
          </div>
        </div>

        <p className="text-zinc-300 text-sm leading-relaxed font-sans border-l-2 border-red-500/30 pl-3">
          {conservative}
        </p>
      </motion.div>

      {/* Optimistic Agent */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-gradient-to-br from-emerald-950/20 via-zinc-900/40 to-zinc-900/10 border border-emerald-950/80 hover:border-emerald-900/60 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md shadow-xl"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-600/5 blur-2xl rounded-full pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-xl bg-emerald-950/50 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-emerald-400 font-bold tracking-wide text-sm uppercase">
              Optimistic Agent
            </h3>
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Growth Advocate</span>
          </div>
        </div>

        <p className="text-zinc-300 text-sm leading-relaxed font-sans border-l-2 border-emerald-500/30 pl-3">
          {optimistic}
        </p>
      </motion.div>
    </div>
  )
}
