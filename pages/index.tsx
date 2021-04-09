import { NextPage } from 'next'
import { Image } from 'cloudinary-react'
import { Layout } from '../components/Layout'
// import Link from 'next/link'
// import { useMeQuery } from '../lib/generated/graphql'
interface HomeProps {
  serverError?: { message: string }
}

const Home: NextPage<HomeProps> = () => {
  // const { data, loading, error } = useMeQuery({ errorPolicy: 'all' })

  return (
    <Layout>
      <section>
        <h1 className=' w-[70%] ml-2 md:ml-14 text-5xl md:text-7xl font-bold text-green-dark'>
          Traga vida ao seu espaço
        </h1>
        <h4 className='w-[55%] md:w-[45%] mt-16 ml-3 md:ml-20 text-2xl tracking-wide md:text-4xl md:text-center'>
          Descubra a nossa seleção de plantas.
        </h4>
        <h4 className='w-[65%] md:w-[45%] mt-3 ml-3 md:ml-20 text-2xl md:text-center md:text-4xl'>
          As nossas plantas dão vida aos seus espaços.
        </h4>
        <button className='ml-10 md:ml-64 mt-8 md:mt-20 p-1 px-2 rounded-md shadow-md text-pink-dark bg-pink-light tracking-widest text-xl md:text-3xl font-bold'>
          EXPLORAR
        </button>
        <Image
          className='absolute top-[12%] md:top-[-12%] left-[35%] z-[-1] transform'
          src='/homepage-plant1.png'
          height={1000}
          width={1000}
          crop='fill'
        />
      </section>
    </Layout>
  )
}

export default Home
