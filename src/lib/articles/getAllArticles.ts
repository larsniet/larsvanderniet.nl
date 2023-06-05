import { request } from '@/lib/db'
import type { Article } from './article.types'
import { getLanguage } from '../getLanguage'

export default async function getAllArticles(lang: string): Promise<Article[]> {
  return await request({
    query: `{
      allArticles (locale: ${getLanguage(lang)}) {
        id
        title
        slug
        thumbnail {
          url
          alt
        }
        description
        content
        createdAt
        _status
        _firstPublishedAt
      }
    }`,
  })
    .then((res) => res.allArticles)
    .catch((err) => {
      console.log(err)
      return null
    })
}
