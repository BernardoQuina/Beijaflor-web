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
      <section className='max-w-6xl 3xl:max-w-7xl mt-36 lg:mt-52 mx-auto'>
        <h1 className='w-[80%] lg:w-[100%] ml-8  text-5xl text-center md:text-left tracking-wider md:text-7xl font-bold text-green-dark'>
          Traga vida ao seu espaço
        </h1>

        <h4 className='w-[55%] md:w-[45%] mt-28 md:mt-32 ml-20 md:ml-20 text-2xl tracking-wider leading-relaxed md:text-3xl text-center'>
          Descubra a nossa seleção de plantas e flores
        </h4>
        <button className='ml-32 md:ml-64 xl:ml-72 mt-8 md:mt-20 p-2 px-2 rounded-sm shadow-md text-pink-dark opacity-90 bg-opacity-60 hover:opacity-100 hover:bg-opacity-100 bg-pink-light tracking-widest text-xl md:text-2xl font-bold'>
          EXPLORAR
        </button>
        <Image
          className='absolute top-[12%] md:top-[-10%] left-[48%] md:left-[40%] 3xl:left-[45%] z-[-1] transform'
          src='/homepage-plant1.png'
          quality={30}
          height={1000}
          width={1000}
          crop='fill'
        />
      </section>
    </Layout>
  )
}

export default Home
