import { request } from '@/lib/db'

export default async function getSingleProject(slug: string) {
  return await request({
    query: `{
      project (
        filter: {
          slug: { eq: "${slug}" }
        }
      ) {
        id
        name
        slug
        description
        content
        description
        link
        logo {
          responsiveImage {
            alt
            base64
            bgColor
            title
          }
        }
        color {
          hex
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
