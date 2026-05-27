import { Progress } from '@/components/ui/progress'

interface Props {
  score: number
}

export function RiskMeter({ score }: Props) {
  // Determine text color based on risk score
  let textColor = "text-emerald-400"
  if (score >= 80) {
    textColor = "text-rose-500 font-extrabold"
  } else if (score >= 50) {
    textColor = "text-amber-400 font-semibold"
  }

  return (
    <div className="space-y-3.5">
      <div className="flex justify-between items-center text-sm font-semibold">
        <span className="text-zinc-400 uppercase tracking-wider text-xs">Risk Assessment</span>
        <span className={`${textColor} font-mono text-lg`}>{score}%</span>
      </div>

      <Progress value={score} className="h-2.5 shadow-sm" />
    </div>
  )
}
