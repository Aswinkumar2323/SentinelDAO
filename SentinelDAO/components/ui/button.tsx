import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    let baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]"
    
    let variantStyles = ""
    switch (variant) {
      case "default":
        variantStyles = "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/20"
        break
      case "destructive":
        variantStyles = "bg-rose-600 text-white hover:bg-rose-500 shadow-lg shadow-rose-600/10"
        break
      case "outline":
        variantStyles = "border border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700"
        break
      case "secondary":
        variantStyles = "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
        break
      case "ghost":
        variantStyles = "hover:bg-zinc-900 hover:text-zinc-100 text-zinc-400"
        break
      case "link":
        variantStyles = "text-cyan-400 underline-offset-4 hover:underline"
        break
    }

    let sizeStyles = ""
    switch (size) {
      case "default":
        sizeStyles = "h-11 px-5 py-2"
        break
      case "sm":
        sizeStyles = "h-9 rounded-lg px-3 text-xs"
        break
      case "lg":
        sizeStyles = "h-12 rounded-xl px-8 text-base"
        break
      case "icon":
        sizeStyles = "h-10 w-10"
        break
    }

    return (
      <button
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
