import Head from 'next/head'

// components
import Menu from '../components/Menu'
import Header from '../components/Header'
import Footer from '../components/Footer'

 const Home = () => {
  return (
    <>
      <Head>
        <title>Next Bootstrap Starter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Menu />
      <main>
        <Header head='Home' description='A nextJS Bootstrap Landing Page' />
      </main>
      <Footer />
    </>
  )
}


export default Home