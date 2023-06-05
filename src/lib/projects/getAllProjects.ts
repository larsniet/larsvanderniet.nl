import { request } from '@/lib/db'
import { Project } from './project.types'
import { getLanguage } from '@/lib/getLanguage'

export default async function getAllProjects(lang: string): Promise<Project[]> {
  return await request({
    query: `{
      allProjects (locale: ${getLanguage(lang)}) {
        id
        name
        description
        link
        logo {
          url
          alt
        }
        createdAt
        _status
        _firstPublishedAt
      }
    }`,
  })
    .then((res) => res.allProjects)
    .catch((err) => {
      console.log(err)
      return null
    })
}
