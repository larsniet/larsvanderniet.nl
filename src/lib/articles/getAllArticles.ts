import { request } from '@/lib/db'
import type { Article } from './article.types'

export default async function getAllArticles(): Promise<Article[]> {
  return await request({
    query: `{
      allArticles {
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
