import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { LinkIcon } from '@/components/Icons'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import getAllProjects from '@/lib/projects/getAllProjects'
import { getTranslation } from '@/lib/i18n'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = await getTranslation(lang, 'projects')

  const title = t('meta-title')
  const description = t('description')

  return {
    title,
    description,
  }
}

export default async function Projects({
  params: { lang },
}: {
  params: {
    lang: string
  }
}) {
  const { t } = await getTranslation(lang, 'projects')

  const projects = await getAllProjects(lang)

  return (
    <SimpleLayout title={t('title')} intro={t('description')}>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="flex items-center gap-x-4">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo.url}
                  width={50}
                  height={50}
                  alt={project.logo.alt}
                  className="h-8 w-8"
                />
              </div>
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link
                target="_blank"
                href={project.link ? project.link : '#'}
              >
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
              >
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{t('check-it')}</span>
              </Link>
            )}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
