import 'server-only'

const dictionaries = {
  en: () => import('./languages/en.json').then((module) => module.default),
  nl: () => import('./languages/nl.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()
