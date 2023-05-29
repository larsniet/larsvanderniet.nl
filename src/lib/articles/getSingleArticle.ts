import { request } from '@/lib/db'

export default async function getSingleArticle(slug: string) {
  return await request({
    query: `{
      project (
        filter: {
          slug: { eq: "${slug}" }
        }
      ) {
        id
        title
        slug
        company
        overview
        description
        backgroundColor {
          hex
        }
        featuredphoto {
          responsiveImage {
            alt
            base64
            bgColor
            title
          }
        }
        createdAt
        _status
        _firstPublishedAt
      }
    
      _allProjectsMeta {
        count
      }
    }`,
  })
}
