import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Space+Grotesk:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
        <meta name="description" content="Strategic Marketing Excellence - 20+ years orchestrating transformative marketing strategies for global brands." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}