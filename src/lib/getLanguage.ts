export function getLanguage(lang: string) {
  // If language is nl or nl-NL, return nl-NL
  if (lang && lang.includes('nl')) {
    return 'nl_NL'
  }
  // If language is en or en-US, return en-US
  if (lang && lang.includes('en')) {
    return 'en'
  }
}

export function getLocale(lang: string) {
  // If language is nl or nl-NL, return nl
  if (lang && lang.includes('nl')) {
    return 'nl'
  }
  // If language is en or en-US, return en
  if (lang && lang.includes('en')) {
    return 'en'
  }
}

export function getOppositeLocale(locale: string) {
  if (locale === 'nl_NL') {
    return 'en'
  }
  if (locale === 'en') {
    return 'nl'
  }
}
