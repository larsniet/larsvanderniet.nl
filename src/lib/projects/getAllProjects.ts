import { request } from '@/lib/db'
import { Project } from './project.types'

export default async function getAllProjects(): Promise<Project[]> {
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
          alt
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
    .then((res) => res.allProjects)
    .catch((err) => {
      console.log(err)
      return null
    })
}
