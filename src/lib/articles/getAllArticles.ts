import { request } from '@/lib/db'

export default async function getAllArticles() {
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
}
