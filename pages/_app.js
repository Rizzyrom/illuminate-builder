import '../styles/globals.css'
import { builder } from '@builder.io/react'

// Initialize Builder.io
builder.init(process.env.BUILDER_PUBLIC_KEY || 'your-builder-public-key-here')

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}