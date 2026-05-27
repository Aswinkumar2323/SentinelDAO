'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { ProposalForm } from '@/components/proposal-form'
import { AnalysisCard } from '@/components/analysis-card'
import { LoadingAnalysis } from '@/components/loading-analysis'
import { AnalysisResponse } from '@/types/analysis'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Shield, AlertCircle, Database, HelpCircle } from 'lucide-react'

export default function DashboardPage() {
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null)
  const [loading, setLoading] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Governance Security Node
            </h1>
            <p className="text-zinc-500 text-sm mt-1">
              AI-powered defense center auditing live proposals.
            </p>
          </div>

          {/* Quick Node Status widget */}
          <div className="flex items-center gap-6 bg-zinc-900/30 border border-zinc-850 rounded-2xl px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs text-zinc-400 font-semibold font-mono">NODE ACTIVE</span>
            </div>
            <div className="h-5 w-px bg-zinc-800" />
            <div className="text-xs">
              <span className="text-zinc-500 font-mono">LATENCY:</span>{' '}
              <span className="text-cyan-400 font-bold font-mono">18ms</span>
            </div>
          </div>
        </div>

        {/* Form and info sections */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <ProposalForm
              setAnalysis={setAnalysis}
              setLoading={setLoading}
            />

            {/* Hackathon informational box */}
            <div className="bg-zinc-900/20 border border-zinc-800/60 rounded-2xl p-5 text-xs text-zinc-500 leading-relaxed space-y-3">
              <div className="flex items-center gap-2 text-zinc-400 font-bold">
                <Database className="h-4 w-4 text-cyan-400" />
                <span>INTELLIGENCE CAPABILITIES</span>
              </div>
              <p>
                This environment analyzes transaction payloads for known exploits, runs multi-perspective evaluations, and validates regulatory checks.
              </p>
              <ul className="list-disc pl-4 space-y-1 text-zinc-500">
                <li>Check for re-entrancy / flash loan / timelock overrides.</li>
                <li>Simulate treasury drains / suspicious multisig overrides.</li>
                <li>Ensure Somnia devnet compatibility & hash checks.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              {loading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <LoadingAnalysis />
                </motion.div>
              )}

              {!loading && !analysis && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-[480px] bg-zinc-900/10 border border-zinc-800/40 border-dashed rounded-2xl flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="h-14 w-14 rounded-2xl bg-zinc-950 border border-zinc-850 flex items-center justify-center mb-4 text-zinc-650">
                    <Shield className="h-7 w-7" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-400 mb-1">Awaiting Proposal Data</h3>
                  <p className="text-zinc-500 text-xs max-w-xs">
                    Please submit a proposal payload on the left to trigger autonomous AI diagnostics and risk simulation.
                  </p>
                </motion.div>
              )}

              {!loading && analysis && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <AnalysisCard analysis={analysis} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  )
}
