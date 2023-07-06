import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Contact from '../components/Contact'
import Bio from '../components/Bio'
import ProWrestling from '../components/ProWrestling'
import Mma from '../components/Mma'



export default function Home() {
  return (
    <div>
      <Head>
        <title>JD Griffey - Official Website</title>
        <meta name="JD Griffey" content="#teamGriffey" />
        <link rel="icon" href="#" />
      </Head>
      <Main />
      <Bio />
      <ProWrestling />
      <Mma />
      {/* <Contact /> */}

    </div>
  )
}
