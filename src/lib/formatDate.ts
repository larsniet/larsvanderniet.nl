export function formatDate(dateString: any) {
  // Example date from DatoCMS: 2021-09-23T13:45:56+02:00
  // We have to remove everything after the plus
  const date = dateString.split('+')[0]
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
