import { request } from '@/lib/db'
import { getLanguage } from '@/lib/getLanguage'
import { Article } from './article.types'

export default async function getSingleArticle(
  slug: string,
  lang: string
): Promise<Article> {
  const locale = getLanguage(lang)

  return await request({
    query: `{
      article(
        locale: ${locale}
        filter: {slug: {eq: "${slug}"}}
      ) {
        id
        title
        slug
        thumbnail {
          url
          alt
        }
        description (markdown: true)
        content (markdown: true)
        createdAt
        _status
        _createdAt
      }
    }`,
  }).then((data: any) => {
    return data.article
  })
}
