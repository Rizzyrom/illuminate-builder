import { builder } from '../../lib/builder'
import Link from 'next/link'
import Head from 'next/head'

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Illuminate Avenue</title>
        <meta name="description" content="Latest insights and strategies from Illuminate Avenue" />
      </Head>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 48px' }}>
        <h1 style={{ 
          fontFamily: 'Playfair Display', 
          fontSize: '64px', 
          marginBottom: '48px',
          color: '#0A0A0F'
        }}>
          Latest Insights
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '48px' 
        }}>
          {posts?.map((post) => (
            <article key={post.id} style={{
              background: '#F5F5F7',
              borderRadius: '16px',
              padding: '32px',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}>
              <Link href={`/blog/${post.data.slug}`} style={{ textDecoration: 'none' }}>
                <h2 style={{ 
                  fontFamily: 'Space Grotesk', 
                  fontSize: '24px', 
                  marginBottom: '16px',
                  color: '#0A0A0F'
                }}>
                  {post.data.title}
                </h2>
                <p style={{ 
                  color: '#6A6A6F', 
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  {post.data.excerpt}
                </p>
                <div style={{ 
                  color: '#D4AF37', 
                  fontFamily: 'Space Grotesk',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  Read More →
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = await builder.getAll('blog-post', {
    options: { noTargeting: true },
  })

  return {
    props: {
      posts,
    },
    revalidate: 5,
  }
}