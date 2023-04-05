import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pablo Bombonato - Portfólio de desenvolvedor</title>
        <meta
          name="description"
          content="Portfólio do desenvolvedor web Pablo Bombonato, um freelancer que produz sites, lojas virtuais, e-commerces e outras soluções digitais."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header-hero-container">
        <Header />
        <div className="px-20">
          <Hero />
        </div>
      </div>
    </>
  );
}
