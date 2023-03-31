import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pablo Bombonato - Portfólio de desenvolvedor</title>
        <meta name="description" content="Portfólio do desenvolvedor web Pablo Bombonato, um freelancer que produz sites, lojas virtuais, e-commerces e outras soluções digitais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='flex bg-slate-400'>
        <h1>Next.js + Tailwind CSS</h1>
      </main>
    </>
  )
}
