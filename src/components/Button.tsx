import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface BaseProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined
  }

type ButtonAsLink = BaseProps & {
  to: string
  onClick?: () => void
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-pure-white text-oil-black hover:bg-pure-white/90 disabled:bg-pure-white/40 disabled:text-oil-black/60',
  secondary:
    'border border-white/20 bg-transparent text-pure-white hover:border-white/40 hover:bg-white/5 disabled:opacity-40',
  ghost: 'bg-transparent text-pure-white/80 hover:text-pure-white hover:bg-white/5 disabled:opacity-40',
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-sm px-6 py-3 font-body text-base font-medium transition-colors disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`

  if ('to' in props && props.to) {
    const { to, onClick } = props
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
      </Link>
    )
  }

  const { type = 'button', disabled, onClick, ...rest } = props as ButtonAsButton
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
