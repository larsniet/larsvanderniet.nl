import { request } from '@/lib/db'

export default async function getJobs() {
  return await request({
    query: `{
      allJobs {
        id
        company
        title
        start
        end
        logo {
          url
        }
        createdAt
        _status
        _firstPublishedAt
      }
    }`,
  })
}
