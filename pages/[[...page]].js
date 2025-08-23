import { builder } from '../lib/builder'
import { BuilderComponent, useIsPreviewing } from '@builder.io/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DefaultErrorPage from 'next/error'

export default function Page({ page }) {
  const router = useRouter()
  const isPreviewing = useIsPreviewing()

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{page?.data.title || 'Illuminate Avenue'}</title>
        <meta name="description" content={page?.data.description || 'Strategic Marketing Excellence'} />
      </Head>
      
      <BuilderComponent model="page" content={page} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const urlPath = '/' + (params?.page?.join('/') || '')
  
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise()

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
  })

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  }
}