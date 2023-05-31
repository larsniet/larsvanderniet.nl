import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

export const fallbackLng = 'en'
export const languages = [fallbackLng, 'nl']

export const defaultNS = 'translation'

function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}

export const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: any, namespace: any) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns))
  return i18nInstance
}

export async function getTranslation(
  lng: string | null,
  ns: string | string[] = defaultNS,
  options: { keyPrefix?: string } = {}
) {
  const i18nextInstance = await initI18next(lng || fallbackLng, ns as string)
  return {
    t: i18nextInstance.getFixedT(
      lng || fallbackLng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  }
}
