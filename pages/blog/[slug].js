import { builder } from '../../lib/builder'
import { BuilderComponent } from '@builder.io/react'
import Head from 'next/head'
import DefaultErrorPage from 'next/error'

export default function BlogPost({ post }) {
  if (!post) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{post.data.title} - Illuminate Avenue Blog</title>
        <meta name="description" content={post.data.excerpt} />
      </Head>
      
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 48px' }}>
        <header style={{ marginBottom: '48px', textAlign: 'center' }}>
          <h1 style={{ 
            fontFamily: 'Playfair Display', 
            fontSize: '48px', 
            marginBottom: '16px',
            color: '#0A0A0F'
          }}>
            {post.data.title}
          </h1>
          <div style={{ 
            color: '#6A6A6F',
            fontFamily: 'Space Grotesk',
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {post.data.author} • {new Date(post.data.date).toLocaleDateString()}
          </div>
        </header>
        
        <BuilderComponent model="blog-post" content={post} />
      </article>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = await builder
    .get('blog-post', {
      query: {
        'data.slug': params.slug,
      },
    })
    .toPromise()

  return {
    props: {
      post: post || null,
    },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const posts = await builder.getAll('blog-post', {
    options: { noTargeting: true },
  })

  return {
    paths: posts.map((post) => `/blog/${post.data.slug}`),
    fallback: true,
  }
}