import { Html, Head, Main, NextScript } from 'next/document'

const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID
const googleAdsClientId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <meta name='google-adsense-account' content={googleAdsClientId}></meta>
      <script async src='https://us.umami.is/script.js' data-website-id={umamiId} />
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdsClientId}`}
        crossOrigin='anonymous'
      ></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
