'use client'

import { MailIcon } from '@/components/Icons'
import { Button } from '@/components/Button'
import { useState } from 'react'

export function NewsLetter({ title, description, email, subscribe }) {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [responseColor, setResponseColor] = useState('')

  async function onSubmit(event: any) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const body = {
      email: formData.get('email'),
    }

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const result = await res.json()

    setIsLoading(false)

    if (result.error) {
      setResponseColor('red-500')
      return setResponse(result.error)
    }

    setResponseColor('green-500')
    return setResponse(result.message)
  }

  return (
    <form
      action="/api/newsletter"
      onSubmit={onSubmit}
      onInput={() => setResponse('')}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{title}</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="mt-6 flex flex-col">
        <label htmlFor="email" className="sr-only">
          {email}
        </label>
        <div className="relative">
          {response && (
            <div className="flex pb-1">
              <p className={`text-xs text-${responseColor}`}>{response}</p>
            </div>
          )}
        </div>
        <input
          id="email"
          type="email"
          name="email"
          placeholder={email}
          aria-label={email}
          disabled={isLoading}
          className="mt-2 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="mt-2 flex-none" disabled={isLoading}>
          {subscribe}
        </Button>
      </div>
    </form>
  )
}
