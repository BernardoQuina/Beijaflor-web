import { NextPage } from 'next'
import router from 'next/router'
import { Image } from 'cloudinary-react'

import { Layout } from '../components/Layout'
import { Meta } from '../components/Meta'
import { ArrowDown } from '../components/svg/ArrowDown'
import { Heart } from '../components/svg/Heart'

interface sobreProps {}

const sobre: NextPage<sobreProps> = ({}) => {
  return (
    <Layout>
      <Meta title='Sobre | Florista Beijaflor' />
      <div className='flex mx-auto w-full max-w-7xl lg:mb-0 -mt-12 lg:-mt-20'>
        <button className='flex p-1' onClick={() => router.back()}>
          <ArrowDown
            tailwind='h-4 lg:h-6 text-green-dark self-center transform rotate-90'
            strokeWidth={3}
          />
          <h6 className='mx-1 lg:mx-2 text-lg text-green-dark tracking-widest self-center'>
            voltar
          </h6>
        </button>
      </div>
      <div className='flex mx-auto max-w-6xl'>
        <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark'>
          Sobre nós
          <div className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
        </h1>
      </div>
      <div className='flex flex-col w-full max-w-5xl mx-auto mt-10'>
        <div className='relative w-[60%] max-w-[500px] max-h-[600px] mt-20'>
          <div className='w-full h-full overflow-hidden rounded-lg'>
            <Image
              className='w-full h-full'
              alt='flor ilustrativa da pagina inicial.'
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              publicId='xguvdl96sz5uu1axd46y'
              height={600}
              width={500}
              quality={90}
              crop='fill'
              gravity='auto'
              secure={true}
            />
          </div>
          <div className='absolute w-[20rem] h-[8rem] lg:w-[40rem] lg:h-[12rem] bg-white rounded-lg shadow-around -top-24 -right-32 lg:-right-96'></div>
          <div className='absolute z-[1] w-[20rem] h-[8rem] lg:w-[40rem] lg:h-[12rem] bg-white rounded-lg shadow-around -bottom-24 -right-32 lg:-right-72'></div>
        </div>
        <div className='relative w-[60%] max-w-[500px] max-h-[600px] mt-10 ml-auto'>
          <div className='w-full h-full overflow-hidden rounded-lg'>
            <Image
              className='w-full h-full'
              alt='flor ilustrativa da pagina inicial.'
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              publicId='xguvdl96sz5uu1axd46y'
              height={600}
              width={500}
              quality={90}
              crop='fill'
              gravity='auto'
              secure={true}
            />
          </div>
          <div className='absolute w-[20rem] h-[8rem] lg:w-[30rem] lg:h-[12rem] bg-white rounded-lg shadow-around -bottom-24 -left-32 lg:-left-72'></div>
        </div>
      </div>
    </Layout>
  )
}

export default sobre
