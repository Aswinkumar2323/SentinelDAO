import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning"
}

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  let variantStyles = ""
  switch (variant) {
    case "default":
      variantStyles = "border-transparent bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
      break
    case "secondary":
      variantStyles = "border-transparent bg-zinc-800 text-zinc-300"
      break
    case "destructive":
      variantStyles = "border-transparent bg-red-950 text-red-400 border border-red-800"
      break
    case "success":
      variantStyles = "border-transparent bg-emerald-950 text-emerald-400 border border-emerald-800"
      break
    case "warning":
      variantStyles = "border-transparent bg-amber-950 text-amber-400 border border-amber-850"
      break
    case "outline":
      variantStyles = "text-zinc-300 border border-zinc-850"
      break
  }

  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 ${variantStyles} ${className}`}
      {...props}
    />
  )
}
