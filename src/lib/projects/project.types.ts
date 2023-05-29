export interface Project {
  id: string
  name: string
  slug: string
  description: string
  content: string
  link: string
  logo: {
    url: string
    alt: string
  }
  color: {
    hex: string
  }
  createdAt: string
  _status: string
  _firstPublishedAt: string
}
