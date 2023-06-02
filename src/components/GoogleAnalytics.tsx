'use client'

import Script from 'next/script'

const GoogleAnalytics = ({
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
}: {
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: string
}) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
