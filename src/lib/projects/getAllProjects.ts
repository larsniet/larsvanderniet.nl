import { request } from '@/lib/db'

export default async function getAllProjects() {
  return await request({
    query: `{
      allProjects {
        id
        name
        slug
        description
        content
        description
        link
        logo {
          url
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
