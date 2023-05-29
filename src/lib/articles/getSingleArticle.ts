import { request } from '@/lib/db'

export default async function getSingleArticle(slug: string) {
  return await request({
    query: `{
      article (
        filter: {
          slug: { eq: "${slug}" }
        }
      ) {
        id
        title
        slug
        content
        description
        thumbnail {
          url
          alt
        }
        createdAt
        _status
        _firstPublishedAt
      }
    }`,
  })
}
