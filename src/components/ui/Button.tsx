import Link from 'next/link'
import { forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'text'
type Size = 'default' | 'large'

type BaseProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

type ButtonAsLink = BaseProps & {
  href: string
  external?: boolean
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>

type ButtonAsButton = BaseProps & {
  href?: never
  external?: never
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>

export type ButtonProps = ButtonAsLink | ButtonAsButton

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-rich-red text-white hover:bg-deep-red focus-visible:ring-rich-red',
  secondary:
    'border-2 border-rich-red text-rich-red hover:bg-rich-red hover:text-white focus-visible:ring-rich-red',
  text: 'text-rich-red hover:underline focus-visible:ring-rich-red',
}

const sizeStyles: Record<Size, string> = {
  default: 'px-6 py-2.5 text-sm',
  large: 'px-8 py-3.5 text-base',
}

function buildClassName(variant: Variant, size: Size, extra?: string) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  const parts = [base, variantStyles[variant]]
  if (variant !== 'text') parts.push(sizeStyles[size])
  if (extra) parts.push(extra)
  return parts.join(' ')
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = 'primary',
    size = 'default',
    className,
    children,
    ...rest
  } = props

  const classes = buildClassName(variant, size, className)

  if ('href' in props && props.href) {
    const { href, external, variant: _v, size: _s, ...anchorProps } = props as ButtonAsLink
    if (external || href.startsWith('http')) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...anchorProps}
        >
          {children}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      )
    }
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...anchorProps}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
})
