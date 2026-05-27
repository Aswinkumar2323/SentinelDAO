'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Sparkles, Terminal, ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-[85vh] text-center px-6">
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl space-y-8 relative z-10">
        {/* Glow badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono font-semibold"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Autonomous DAO Protection Protocol
        </motion.div>

        {/* Headline */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 bg-clip-text text-transparent">
              GovGuardian
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Instant AI governance defense against treasury threats, malicious code overrides, and compliance exploits in decentralized autonomous organizations.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            Launch Governance Dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          <a
            href="https://somnia.network"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Terminal className="h-4 w-4 text-cyan-400" />
            Somnia Devnet
          </a>
        </motion.div>
      </div>

      {/* Cyberpunk grid background graphic overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.03] pointer-events-none" />
    </section>
  )
}
