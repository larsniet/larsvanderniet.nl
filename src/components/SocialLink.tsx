import Link from 'next/link'
import clsx from 'clsx'

export function SocialLink({
  className,
  target,
  ariaLabel,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  target?: string
  ariaLabel?: string
  href: string
  children?: React.ReactNode
  icon: React.ElementType
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={target}
        aria-label={ariaLabel}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        {children && <span className="ml-4">{children}</span>}
      </Link>
    </li>
  )
}
