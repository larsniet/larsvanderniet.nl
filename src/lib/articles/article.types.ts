export interface Article {
  id: string
  title: string
  slug: string
  thumbnail: {
    url: string
    alt: string
  }
  description: string
  content: string
  createdAt: string
  _status: string
  _firstPublishedAt: string
}
