'use client'

import Link from 'next/link'
import { Shield, Activity, Cpu, LogOut } from 'lucide-react'

export function Navbar() {
  return (
    <header className="border-b border-zinc-800/80 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-all duration-300">
            <Shield className="h-5 w-5 text-black font-bold" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-wider bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              GOVGUARDIAN
            </span>
            <span className="text-[10px] text-cyan-400 font-mono font-semibold ml-2 tracking-widest uppercase border border-cyan-500/20 px-1.5 py-0.5 rounded bg-cyan-950/30">
              Agent Node v1.0
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/dashboard" className="text-zinc-400 hover:text-cyan-400 flex items-center gap-2 transition duration-300">
            <Activity className="h-4 w-4" />
            Dashboard
          </Link>
          <div className="h-4 w-px bg-zinc-800" />
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold bg-emerald-950/30 border border-emerald-500/20 rounded-full px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Connected to Somnia
          </div>
        </nav>
      </div>
    </header>
  )
}
