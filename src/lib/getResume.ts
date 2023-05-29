import { request } from '@/lib/db'

interface Job {
  id: string
  company: string
  title: string
  start: string
  end: string
  logo: {
    url: string
    alt: string
  }
}

interface Resume {
  jobs: Job[]
  createdAt: string
  _status: string
  _firstPublishedAt: string
}

export default async function getResume(): Promise<Resume> {
  return await request({
    query: `{
      resume {
        jobs {
          id
          company
          title
          start
          end
          logo {
            url
            alt
          }
        }
        createdAt
        _status
        _firstPublishedAt
      }
    }`,
  })
    .then((res) => res.resume)
    .catch((err) => {
      console.log(err)
      return null
    })
}
