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
        <h1 className=' w-[70%] ml-2 md:ml-10 text-5xl md:text-7xl font-bold'>
          Traga vida ao seu espaço
        </h1>
        <button className='ml-12 mt-44 p-1 px-2 rounded-md shadow-md text-pink-dark bg-pink-light tracking-widest text-xl font-bold'>
          EXPLORAR
        </button>
        <Image
          className='absolute top-[12%] left-[20%] z-[-1] transform'
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
