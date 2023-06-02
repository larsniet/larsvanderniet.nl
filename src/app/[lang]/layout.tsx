import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { dir } from 'i18next'
import { getTranslation, languages } from '@/lib/i18n'
import '@/styles/tailwind.css'
import 'focus-visible'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const gtag = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const { t } = await getTranslation(lang)

  const navLinks = [
    { href: `/${lang}/about`, label: t('about') },
    { href: `/${lang}/articles`, label: t('articles') },
    { href: `/${lang}/projects`, label: t('projects') },
    // { href: `/${lang}/uses`, label: t('uses') },
  ]

  return (
    <html lang={lang} dir={dir(lang)} className="h-full">
      {gtag && <GoogleAnalytics NEXT_PUBLIC_GOOGLE_ANALYTICS_ID={gtag} />}
      <body className="h-full bg-white dark:bg-zinc-900">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header navLinks={navLinks} lang={lang} />
          <main>{children}</main>
          <Footer translation={t} navLinks={navLinks} />
        </div>
      </body>
    </html>
  )
}
