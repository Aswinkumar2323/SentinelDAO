'use client'

import { useState } from 'react'
import { AnalysisResponse } from '@/types/analysis'
import { RiskMeter } from './risk-meter'
import { ReasoningFeed } from './reasoning-feed'
import { DebateCard } from './debate-card'
import { WarningCard } from './warning-card'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { ShieldCheck, FileText, Activity, Terminal, AlertCircle, ExternalLink, HardDrive } from 'lucide-react'

interface Props {
  analysis: AnalysisResponse
}

export function AnalysisCard({ analysis }: Props) {
  const [txSaved, setTxSaved] = useState(false)
  const [txHash, setTxHash] = useState('')
  const [saving, setSaving] = useState(false)

  // Mock Blockchain Save function for Hackathon MVP
  const saveToSomnia = async () => {
    setSaving(true)
    // Simulate transaction delay
    await new Promise((resolve) => setTimeout(resolve, 1800))
    const randomHash = '0x' + Array.from({ length: 64 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('')
    setTxHash(randomHash)
    setTxSaved(true)
    setSaving(false)
  }

  const isApproved = analysis.recommendation.toUpperCase().includes('APPROVE')
  const verdictColor = isApproved ? 'text-emerald-400' : 'text-rose-500'
  const verdictBg = isApproved ? 'from-emerald-950/20 to-zinc-900/10' : 'from-rose-950/20 to-zinc-900/10'
  const verdictBorder = isApproved ? 'border-emerald-800/40' : 'border-rose-950/80'

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Summary Card */}
        <Card className="flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 blur-2xl rounded-full pointer-events-none" />
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-zinc-400 uppercase tracking-wider text-xs font-semibold mb-3.5 flex items-center gap-2">
                <FileText className="h-4 w-4 text-cyan-400" />
                Proposal Summary
              </h3>
              <p className="text-zinc-350 text-sm leading-relaxed font-sans line-clamp-6">
                {analysis.summary}
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-850 mt-4 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>SCANNER ENGINE v1.4</span>
              <span>COMPLETED</span>
            </div>
          </div>
        </Card>

        {/* Governance Risk Card */}
        <Card className="flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 blur-2xl rounded-full pointer-events-none" />
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-zinc-400 uppercase tracking-wider text-xs font-semibold mb-6 flex items-center gap-2">
                <Activity className="h-4 w-4 text-amber-400" />
                Governance Risk
              </h3>
              
              <div className="mb-6">
                <RiskMeter score={analysis.risk_score} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs border-t border-zinc-850 pt-3">
                <span className="text-zinc-500 font-mono">RISK LEVEL:</span>
                <Badge variant={analysis.risk_level === 'HIGH' ? 'destructive' : analysis.risk_level === 'MEDIUM' ? 'warning' : 'success'}>
                  {analysis.risk_level}
                </Badge>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-mono">THREAT CLASSIFICATION:</span>
                <span className="text-zinc-400 font-semibold text-[11px]">TREASURY EXPOSURE</span>
              </div>
            </div>
          </div>
        </Card>

        {/* AI Verdict Card */}
        <Card className={`flex flex-col relative overflow-hidden bg-gradient-to-br ${verdictBg} border ${verdictBorder}`}>
          <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 blur-2xl rounded-full pointer-events-none" />
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-zinc-400 uppercase tracking-wider text-xs font-semibold mb-3.5 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-400" />
                AI Verdict Decision
              </h3>
              
              <div className="my-2">
                <div className={`text-5xl font-black tracking-tight ${verdictColor} font-mono animate-pulse`}>
                  {analysis.recommendation}
                </div>
              </div>
            </div>

            <div className="space-y-3.5 border-t border-zinc-850 pt-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-mono">CONFIDENCE THRESHOLD:</span>
                <span className="text-zinc-200 font-bold font-mono text-sm">{analysis.confidence}%</span>
              </div>
              
              {/* Somnia Blockchain Save action */}
              <div>
                {!txSaved ? (
                  <button
                    onClick={saveToSomnia}
                    disabled={saving}
                    className="w-full h-9 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-black font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-cyan-500/10 active:scale-[0.98]"
                  >
                    {saving ? (
                      <>
                        <span className="h-3 w-3 border-2 border-black border-t-transparent animate-spin rounded-full" />
                        Saving Logs...
                      </>
                    ) : (
                      <>
                        <HardDrive className="h-3.5 w-3.5" />
                        Save Audit Logs on Somnia
                      </>
                    )}
                  </button>
                ) : (
                  <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-2 flex flex-col gap-1 text-emerald-400">
                    <span className="text-[10px] font-mono font-bold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      AUDIT LOG STORED ON-CHAIN
                    </span>
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                      <span className="truncate max-w-[150px]">{txHash}</span>
                      <a 
                        href={`https://somniascan.io/tx/${txHash}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-cyan-400 hover:underline flex items-center gap-0.5"
                      >
                        view <ExternalLink className="h-2 w-2" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Compliance Warning Cards */}
      <WarningCard warnings={analysis.compliance_warnings} />

      {/* Debate System */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Autonomous Agent Debate</h3>
        <DebateCard
          conservative={analysis.debate.conservative}
          optimistic={analysis.debate.optimistic}
        />
      </div>

      {/* Reasoning Feed */}
      <ReasoningFeed feed={analysis.reasoning_feed} />
    </div>
  )
}
