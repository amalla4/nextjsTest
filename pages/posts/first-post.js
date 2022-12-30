import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
    <Head>
        <title>Projects</title>
    </Head>
    <h1>PrevProjects:</h1>
    <ul>
      <li>Starter Next.js blog</li>
      <li>TMDB MERN stack</li>
      <li>Fullstack Next.js blog</li>
    </ul>
    <h2>
    </h2>
    </Layout>
  )
}