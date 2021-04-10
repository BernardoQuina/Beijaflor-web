import { NextPage } from 'next'
import { Image } from 'cloudinary-react'

import { Layout } from '../components/Layout'
import { Plant } from '../components/svg/Plant'
import { Shipping } from '../components/svg/Shipping'
import { Support } from '../components/svg/Support'
import { Secure } from '../components/svg/Secure'
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

        <h4 className='w-[55%] md:w-[45%] mt-24 md:mt-44 ml-20 md:ml-20 text-2xl tracking-wider leading-relaxed md:text-3xl text-center'>
          Descubra a nossa seleção de plantas e flores
        </h4>
        <button className='ml-28 md:ml-64 xl:ml-72 mt-8 md:mt-20 p-2 px-2 rounded-sm shadow-md text-pink-dark opacity-95 bg-opacity-60 hover:opacity-100 hover:bg-opacity-100 bg-pink-light tracking-widest text-xl md:text-2xl font-bold'>
          EXPLORAR
        </button>
        <Image
          className='absolute top-[12%] md:top-[-12%] left-[48%] md:left-[40%] 3xl:left-[45%] 4xl:left-[50%] z-[-1] transform'
          src='/homepage-plant1.png'
          quality={30}
          height={1000}
          width={1000}
          crop='fill'
        />
      </section>
      <section className='max-w-full 4xl:max-w-[120rem] mx-auto md:flex mt-40'>
        <div className='lg:flex mx-auto md:w-[50%]'>
          <div className='mx-auto mt-20 text-center'>
            <Plant
              tailwind='h-20 mx-auto fill-current text-green-medium'
              strokeWidth={0.2}
            />
            <h6 className='tracking-widest text-xl font-bold'>
              Frescura garantida
            </h6>
            <p className='w-56 mx-auto tracking-wider'>
              As nossas flores apresentam uma grande frescura e duração
            </p>
          </div>
          <div className='mx-auto mt-20 text-center'>
            <Shipping
              tailwind='h-20 mx-auto fill-current text-green-medium'
              strokeWidth={0.1}
            />
            <h6 className='tracking-widest text-xl font-bold'>Envio grátis</h6>
            <p className='w-56 mx-auto tracking-wider'>
              Entrega gratuita em compras acima de 35€
            </p>
          </div>
        </div>
        <div className='lg:flex mx-auto md:w-[50%]'>
          <div className='mx-auto mt-20 text-center'>
            <Support
              tailwind='h-20 fill-current mx-auto text-green-medium'
              strokeWidth={0.2}
            />
            <h6 className='tracking-widest text-xl font-bold'>
              Suporte ao cliente
            </h6>
            <p className='w-56 mx-auto tracking-wider'>
              Sempre disponíveis para oferecer ajuda e a resolver problemas
            </p>
          </div>
          <div className='mx-auto mt-20 text-center'>
            <Secure
              tailwind='h-20 fill-current mx-auto text-green-medium'
              strokeWidth={0.2}
            />
            <h6 className='tracking-widest text-xl font-bold'>Compra Segura</h6>
            <p className='w-56 mx-auto tracking-wider'>
              Métodos de pagamentos de confiança
            </p>
          </div>
        </div>
      </section>
      <section className='relative flex mt-56 mx-auto max-w-4xl'>
        <div className='mx-auto'>
          <h1 className='ml-24 text-6xl tracking-widest font-bold text-green-dark'>
            Dia da mãe
          </h1>
          <h4 className='mt-20 text-4xl tracking-wide'>
            Flores dizem-no melhor. Arranjos vibrantes e frescos.
          </h4>
        </div>
        <Image
          className='absolute top-[-130%] right-[70%] z-[-1] transform'
          src='/dia-da-mãe.png'
          quality={30}
          height={1500}
          width={1500}
          crop='fill'
        />
      </section>
    </Layout>
  )
}

export default Home
