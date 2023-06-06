import { NextResponse } from 'next/server'
import { buildClient } from '@datocms/cma-client-node'
import { getTranslation } from '@/lib/i18n'

const client = buildClient({ apiToken: process.env.NEXT_DATOCMS_ADMIN_TOKEN })

export async function POST(req: any) {
  const res = await req.json()
  const email = res.email
  const lang = res.lang || 'en'

  const { t } = await getTranslation(lang, 'responses')

  // Verify if email is present
  if (!email) {
    return NextResponse.json({ error: t('missing-email') }, { status: 400 })
  }

  // Verify if email is correct
  const emailRegex = /\S+@\S+\.\S+/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: t('invalid-email') }, { status: 400 })
  }

  // Verify if subscriber already exists
  const subscriberExists = await client.items
    .list({
      filter: {
        type: 'subscriber',
      },
    })
    .then((data) => data.find((item) => item.email === email))

  // If subscriber exists, return error
  if (subscriberExists) {
    return NextResponse.json(
      { error: t('already-subscribed') },
      { status: 400 }
    )
  }

  // Create subscriber
  const createRes = await client.items.create({
    item_type: {
      id: '2041545',
      type: 'item_type',
    },
    email,
  })

  // If error creating subscriber, return error
  if (!createRes) {
    return NextResponse.json(
      { error: t('error-create-subscription') },
      { status: 500 }
    )
  }

  // Return OK
  return NextResponse.json(
    { message: t('succesfull-subscribed') },
    { status: 200 }
  )
}
