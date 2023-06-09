import Image from 'next/image'

import { Container } from '@/components/Container'
import { SocialLink } from '@/components/SocialLink'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/Icons'
import portraitImage from '@/images/portrait.jpg'
import { getTranslation } from '@/lib/i18n'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = await getTranslation(lang, 'about')

  const title = t('meta-title')
  const description = t('description')

  return {
    title,
    description,
  }
}

export default async function About({ params: { lang } }) {
  const { t } = await getTranslation(lang, 'about')

  const description = t('description').split(';')

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {t('title')}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              target="_blank"
              href="https://instagram.com/lvdniet"
              icon={InstagramIcon}
              className="mt-4"
            >
              {t('instagram')}
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://github.com/larsniet"
              icon={GitHubIcon}
              className="mt-4"
            >
              {t('github')}
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://linkedin.com/in/lars-van-der-niet-055546182"
              icon={LinkedInIcon}
              className="mt-4"
            >
              {t('linkedin')}
            </SocialLink>
            <SocialLink
              href="mailto:lvdnbusiness@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              lvdnbusiness@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
