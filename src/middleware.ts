import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from '@/lib/i18n'
import getCorrectArticle from '@/lib/articles/getCorrectArticle'

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
}

const cookieName = 'i18next'

export async function middleware(req: NextRequest) {
  let lng: string

  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    )
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    )

    // Create default response
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)

    // Check if url goes to /[lang]/articles/[slug]
    if (req.nextUrl.pathname.match(/^\/([a-z]{2})\/articles\/(.*)$/)) {
      // Check if the article exists in the current language
      const slug = req.nextUrl.pathname.split('/')[3]
      const articleRes = await getCorrectArticle(slug, lng)

      // If no article was found, redirect to 404
      if (!articleRes) {
        return NextResponse.redirect(new URL(`/${lng}/404`, req.url))
      }

      // If the article exists, return default response
      if (articleRes.oldSlug) {
        return response
      }

      // If the article exists in another language, redirect to a different url
      if (articleRes.newSlug) {
        const newResponse = NextResponse.redirect(
          new URL(articleRes.newSlug, req.url)
        )
        // Set cookie to the language of the article
        newResponse.cookies.set(cookieName, articleRes.locale)
        return newResponse
      }
    }

    return response
  }

  return NextResponse.next()
}
