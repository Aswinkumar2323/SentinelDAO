'use client'

import { useState } from 'react'
import { api } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { AnalysisResponse } from '@/types/analysis'
import { FileText, Sparkles, Terminal } from 'lucide-react'

interface Props {
  setAnalysis: (analysis: AnalysisResponse) => void
  setLoading: (loading: boolean) => void
}

export function ProposalForm({ setAnalysis, setLoading }: Props) {
  const [proposal, setProposal] = useState('')

  const analyzeProposal = async () => {
    if (!proposal.trim()) return
    try {
      setLoading(true)
      const response = await api.post('/analyze', {
        proposal
      })
      setAnalysis(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // Pre-fill helpers for hackathon demo
  const loadExample = (type: 'malicious' | 'safe') => {
    if (type === 'malicious') {
      setProposal(`[PROPOSAL #421] Treasury Diversification and Liquidity Optimization
Requesting a total transfer of 5,000,500 USDC from the core treasury vault to external multisig address 0x93F2...881a for immediate "liquidity provisioning" and market making services. 
Additionally, requesting temporary override permission to skip the standard 48-hour timelock delay due to high market volatility.
All voting records and transaction logs will be stored off-chain on partner databases.`)
    } else {
      setProposal(`[PROPOSAL #422] Security Audit Budget for Smart Contract V2
Allocation of 50,000 USDC from the marketing/operational sub-budget to OpenZeppelin for the audit of the upcoming staking and distribution contracts.
Payments will be released under a 2/3 multisig escrow: 25,000 USDC upfront, and 25,000 USDC upon successful submission of the final audit report. 
All transaction hashes and progress updates will be broadcasted and recorded directly on the DAO public board.`)
    }
  }

  return (
    <div className="relative overflow-hidden bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2.5 text-zinc-150">
          <Terminal className="h-5 w-5 text-cyan-400" />
          Submit Governance Proposal
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500 font-medium">Try Hackathon Demos:</span>
          <button 
            type="button"
            onClick={() => loadExample('malicious')}
            className="text-xs px-2.5 py-1 rounded-md bg-rose-950/40 hover:bg-rose-950/80 border border-rose-900/30 text-rose-400 transition"
          >
            Malicious
          </button>
          <button 
            type="button"
            onClick={() => loadExample('safe')}
            className="text-xs px-2.5 py-1 rounded-md bg-emerald-950/40 hover:bg-emerald-950/80 border border-emerald-900/30 text-emerald-400 transition"
          >
            Safe
          </button>
        </div>
      </div>

      <Textarea
        placeholder="Paste your DAO proposal markdown, raw payload, or execution script..."
        value={proposal}
        onChange={(e) => setProposal(e.target.value)}
        className="min-h-[160px] bg-zinc-950/70 border-zinc-800 text-zinc-300 placeholder:text-zinc-600 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 mb-4 font-mono text-sm leading-relaxed"
      />

      <div className="flex justify-end">
        <Button
          onClick={analyzeProposal}
          disabled={!proposal.trim()}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold flex items-center gap-2 px-6 py-2.5"
        >
          <Sparkles className="h-4 w-4" />
          Analyze Proposal
        </Button>
      </div>
    </div>
  )
}
