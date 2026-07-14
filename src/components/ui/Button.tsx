import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
  icon?: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.72rem] tracking-[0.18em] uppercase font-medium transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed'

const variants: Record<string, string> = {
  primary: 'bg-ink text-ivory hover:bg-black',
  secondary: 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-ivory',
  ghost: 'bg-transparent text-ink hover:text-stone',
}

export default function Button({
  variant = 'primary',
  children,
  icon,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {icon}
      {children}
    </button>
  )
}
