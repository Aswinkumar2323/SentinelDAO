'use client'

import { motion } from 'framer-motion'
import { Cpu, Loader2 } from 'lucide-react'

export function LoadingAnalysis() {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 relative overflow-hidden backdrop-blur-xl shadow-2xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />
      
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="relative mb-6">
          <div className="h-16 w-16 rounded-2xl bg-cyan-950/20 border border-cyan-800/30 flex items-center justify-center text-cyan-400">
            <Cpu className="h-8 w-8 animate-pulse text-cyan-400" />
          </div>
          <Loader2 className="absolute -top-1 -right-1 h-5 w-5 text-cyan-400 animate-spin" />
        </div>

        <h3 className="text-xl font-bold text-zinc-200 mb-2">Analyzing Governance Proposal</h3>
        <p className="text-zinc-500 text-sm max-w-md mb-8">
          Our multi-agent governance defense crew is running real-time simulations, risk profiling, and policy checks...
        </p>

        {/* Cyberpunk style progress indicator bar */}
        <div className="w-full max-w-sm h-1 bg-zinc-800 rounded-full overflow-hidden mb-6">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="relative h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          />
        </div>

        {/* Detailed steps list */}
        <div className="w-full max-w-sm space-y-3.5 text-left border-t border-zinc-850 pt-6">
          {[
            { step: '01', text: 'Summoning Summarizer Agent...' },
            { step: '02', text: 'Simulating Treasury risk exposure...' },
            { step: '03', text: 'Checking regulatory compliance rules...' },
            { step: '04', text: 'Generating Conservative & Optimistic debate inputs...' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3.5">
              <span className="text-[10px] font-mono text-cyan-500/60 font-bold bg-cyan-950/40 border border-cyan-500/20 px-1.5 py-0.5 rounded">
                {item.step}
              </span>
              <span className="text-xs text-zinc-400 font-mono animate-pulse">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
