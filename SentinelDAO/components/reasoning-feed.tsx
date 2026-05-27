'use client'

import { motion } from 'framer-motion'
import { Cpu, Terminal } from 'lucide-react'

interface Props {
  feed: string[]
}

export function ReasoningFeed({ feed }: Props) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <div className="bg-zinc-900/40 rounded-2xl p-6 border border-zinc-800/80 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl rounded-full pointer-events-none" />
      
      <h3 className="text-lg font-bold mb-5 flex items-center gap-2 text-zinc-200">
        <Cpu className="h-5 w-5 text-cyan-400 animate-pulse" />
        AI Reasoning Feed
      </h3>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {feed.map((feedItem, index) => (
          <motion.div
            variants={item}
            key={index}
            className="flex gap-4 text-zinc-300 items-start group"
          >
            <div className="flex flex-col items-center mt-1">
              <div className="w-5 h-5 rounded-full bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400 group-hover:bg-cyan-900/50 transition duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              {index < feed.length - 1 && (
                <div className="w-[1.5px] h-10 bg-gradient-to-b from-cyan-500/30 to-transparent mt-2" />
              )}
            </div>
            
            <div className="flex-1 bg-zinc-950/40 border border-zinc-850 rounded-xl p-3.5 hover:bg-zinc-950/80 hover:border-zinc-800 transition-all duration-300 shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-mono text-cyan-500/70 tracking-widest uppercase">Agent Step 0{index + 1}</span>
                <span className="text-[9px] font-mono text-zinc-600">SUCCESS</span>
              </div>
              <p className="text-sm font-mono text-zinc-300 group-hover:text-zinc-100 transition duration-300">{feedItem}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
