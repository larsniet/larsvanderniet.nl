import { request } from '@/lib/db'
import { Project } from './project.types'

export default async function getSingleProject(slug: string): Promise<Project> {
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
    }`,
  })
    .then((res) => res.project)
    .catch((err) => {
      console.log(err)
      return null
    })
}
