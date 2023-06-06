'use client'

import { SVGProps } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

function ArrowLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type ButtonVariant = 'primary' | 'secondary' | 'return'

interface ButtonProps {
  variant?: ButtonVariant
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  href?: string
}

export function Button({
  variant = 'primary',
  type,
  className,
  children,
  href,
  disabled,
  ...props
}: ButtonProps) {
  const router = useRouter()

  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if ('href' in props) {
    const { href, ...rest } = props
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    )
  } else {
    if (variant === 'return') {
      return (
        <button
          type="button"
          onClick={() => router.back()}
          disabled={disabled}
          aria-label="Go back"
          className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
        >
          <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
        </button>
      )
    }

    return (
      <button className={className} type={type} {...props}>
        {children}
      </button>
    )
  }
}
