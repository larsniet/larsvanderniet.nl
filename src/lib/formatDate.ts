export function formatDate(dateString: string, lang: string = 'en') {
  // Language could be 'en' or 'nl'
  // Example date from DatoCMS: 2021-09-23T13:45:56+02:00
  // We have to remove everything after the plus
  const date = dateString.split('+')[0]
  return new Date(date).toLocaleDateString(lang, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
