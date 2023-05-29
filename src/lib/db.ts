interface IQuery {
  query: string
  variables?: any
  includeDrafts?: boolean
  excludeInvalid?: boolean
}

export async function request({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: IQuery) {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  }

  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true'
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true'
  }

  const response = await fetch('https://graphql.datocms.com', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  if (response.status !== 200) {
    throw new Error(`Unexpected response code: ${response.status}`)
  }

  const jsonResponse = await response.json()
  if ('errors' in jsonResponse) {
    console.error(jsonResponse.errors)
    throw new Error('Failed to fetch GraphQL query')
  }

  return jsonResponse.data
}
