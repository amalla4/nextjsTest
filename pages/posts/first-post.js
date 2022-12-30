import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
    <Head>
        <title>First Post</title>
    </Head>
    <h1>FirstPost:</h1>
    <p>- Setting up next.js</p>
    <h2>
    {/* <Link href='/'>Back to home</Link> */}
    </h2>
    </Layout>
  )
}