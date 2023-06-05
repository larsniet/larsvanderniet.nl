import { request } from '@/lib/db'
import { getLanguage, getLocale } from '@/lib/getLanguage'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default async function getCorrectArticle(slug: string, lang: string) {
  const locale = getLanguage(lang)

  const articlesWithLang = await request({
    query: `{
          allArticles {
            id
            _allSlugLocales {
              locale
              value
            }
          }
        }`,
  })

  // Get all slugs in all languages
  const allSlugs = articlesWithLang.allArticles
    .map((article: any) => {
      return article._allSlugLocales.map((slugLocale: any) => {
        return {
          id: article.id,
          locale: slugLocale.locale,
          value: slugLocale.value,
        }
      })
    })
    .flat()

  // Check if the slug exists in any language
  const slugExists = allSlugs.some((slugLocale: any) => {
    return slugLocale.value === slug
  })

  // If the slug doesn't exist in any language, redirect to 404
  if (!slugExists) {
    return null
  }

  // If the slug exists but not in the current language
  if (
    !allSlugs.some((slugLocale: any) => {
      return slugLocale.locale === locale && slugLocale.value === slug
    })
  ) {
    // Get the id of the article containing the slug
    const articleId = allSlugs.find((slugLocale: any) => {
      return slugLocale.value === slug
    }).id

    // Get the slug containg the articleId and the correct locale
    const correctSlug = allSlugs.find((slugLocale: any) => {
      return slugLocale.id === articleId && slugLocale.locale === locale
    })

    return {
      newSlug:
        baseUrl +
        `/${getLocale(correctSlug.locale)}/articles/${correctSlug.value}`,
      locale: getLocale(correctSlug.locale),
    }
  }

  // If the slug exists in the current language, return true
  return { oldSlug: slug }
}
