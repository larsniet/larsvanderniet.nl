import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import { NextRequest, NextResponse } from 'next/server'

let locales = ['en-US', 'nl-NL', 'nl']
let defaultLocale = 'nl'

// Get the preferred locale from the request
function getLocale(request: NextRequest) {
  let headers = { 'accept-language': request.headers.get('accept-language') }
  let languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}

export default function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
}
