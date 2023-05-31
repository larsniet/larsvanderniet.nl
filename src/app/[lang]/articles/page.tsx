import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import getAllArticles from '@/lib/articles/getAllArticles'
import { getTranslation } from '@/lib/i18n'

function Article({ article, translations, lang }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.createdAt}
          className="md:hidden"
          decorate
        >
          {formatDate(article.createdAt, lang)}
        </Card.Eyebrow>
        <Card.Description>{article.overview}</Card.Description>
        <Card.Cta>{translations('read')}</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.createdAt}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.createdAt, lang)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata = {
  title: 'Artikelen',
  description:
    'Alle artikelen die ik heb geschreven over software design, projecten en meer.',
}

export default async function ArticlesIndex({
  params: { lang },
}: {
  params: {
    lang: string
  }
}) {
  const { t } = await getTranslation(lang, 'articles')

  const articles = await getAllArticles()

  return (
    <SimpleLayout title={t('title')} intro={t('description')}>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article
              key={article.slug}
              article={article}
              translations={t}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
