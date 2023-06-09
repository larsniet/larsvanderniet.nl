import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SocialLink } from '@/components/SocialLink'
import { NewsLetter } from '@/components/NewsLetter'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  BriefcaseIcon,
  ArrowDownIcon,
} from '@/components/Icons'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

import { formatDate } from '@/lib/formatDate'
import getAllArticles from '@/lib/articles/getAllArticles'
import getResume from '@/lib/getResume'
import { getTranslation } from '@/lib/i18n'

const images = [
  {
    src: image1,
    alt: 'Scotland Highlands hike',
  },
  {
    src: image2,
    alt: 'Lars van der Niet having dinner',
  },
  {
    src: image3,
    alt: 'Nieuwjaarsgala Lars van der Niet 2022',
  },
  {
    src: image4,
    alt: 'Pico to Pico hike in Madeira',
  },
  {
    src: image5,
    alt: 'Lars van der Niet standing',
  },
]

function Article({ article, lang }: { article: any; lang: string }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.createdAt} decorate>
        {formatDate(article.createdAt, lang)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function Resume({ translations, jobs }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{translations('work')}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {jobs.map(
          (
            role: {
              company: string
              title: string
              start: string
              end: string
              logo: {
                url: string
                alt: string
              }
            },
            roleIndex: number
          ) => (
            <li key={roleIndex} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={role.logo.url}
                  alt={role.logo.alt}
                  className="h-7 w-7"
                  width={28}
                  height={28}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">{translations('company')}</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.company}
                </dd>
                <dt className="sr-only">{translations('role')}</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">{translations('date')}</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start} until ${role.end}`}
                >
                  <time dateTime={role.start}>{role.start}</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end}>{role.end}</time>
                </dd>
              </dl>
            </li>
          )
        )}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={imageIndex}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = await getTranslation(lang)

  const title = t('title')
  const description = t('description')

  return {
    title,
    description,
  }
}

export default async function Home({ params: { lang } }) {
  const { t } = await getTranslation(lang)

  const articles = await getAllArticles(lang)
  const resume = await getResume()

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {t('description')}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://instagram.com/lvdniet"
              target="_blank"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/larsniet"
              target="_blank"
              ariaLabel="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/lars-van-der-niet-055546182"
              target="_blank"
              ariaLabel="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article: { slug: string }) => (
              <Article key={article.slug} article={article} lang={lang} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <NewsLetter
              title={t('news-title')}
              description={t('news-desc')}
              email={t('email')}
              subscribe={t('subscribe')}
              lang={lang}
            />
            <Resume translations={t} jobs={resume.jobs} />
          </div>
        </div>
      </Container>
    </>
  )
}
