import '../styles/globals.css'
import { builder } from '@builder.io/react'
import Head from 'next/head'

// Initialize Builder.io with fallback
const builderKey = process.env.BUILDER_PUBLIC_KEY || process.env.NEXT_PUBLIC_BUILDER_API_KEY || 'your-builder-public-key-here'
builder.init(builderKey)

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Space+Grotesk:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}