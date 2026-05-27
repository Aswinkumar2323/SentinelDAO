import * as React from "react"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className = "", value = 0, ...props }, ref) => {
    // Determine bar color based on value for richer UX
    let barColor = "from-emerald-500 to-teal-400 shadow-emerald-500/20"
    if (value >= 80) {
      barColor = "from-rose-600 to-red-500 shadow-rose-500/20"
    } else if (value >= 50) {
      barColor = "from-amber-500 to-orange-400 shadow-amber-500/20"
    }

    return (
      <div
        ref={ref}
        className={`relative h-3 w-full overflow-hidden rounded-full bg-zinc-800 ${className}`}
        {...props}
      >
        <div
          className={`h-full w-full flex-1 bg-gradient-to-r ${barColor} shadow-lg transition-all duration-500 ease-out`}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </div>
    )
  }
)
Progress.displayName = "Progress"
