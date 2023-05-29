import Head from 'next/head'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Prose } from '@/components/Prose'
import { formatDate } from '@/lib/formatDate'
import getSingleArticle from '@/lib/articles/getSingleArticle'

export async function generateMetadata({ params }) {
  const { article } = await getSingleArticle(params.slug)

  const title = `${article.title} - Lars van der Niet`
  const description = article.description

  return {
    title,
    description,
  }
}

export default async function Article({
  params,
}: {
  params: { slug: string }
}) {
  const { article } = await getSingleArticle(params.slug)

  return (
    <>
      <Head>
        <title>{`${article.title} - Lars van der Niet`}</title>
        <meta name="description" content={article.description} />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <Button variant="return" />
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {article.title}
                </h1>
                <time
                  dateTime={article.createdAt}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(article.createdAt)}</span>
                </time>
              </header>
              <Prose className="mt-8">{article.description}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
