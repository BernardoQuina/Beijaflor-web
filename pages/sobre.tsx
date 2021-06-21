import { NextPage } from 'next'
import router from 'next/router'
import { Image } from 'cloudinary-react'

import { Layout } from '../components/Layout'
import { Meta } from '../components/Meta'
import { ArrowDown } from '../components/svg/ArrowDown'
import { Email } from '../components/svg/Email'
import { Phone } from '../components/svg/Phone'
import { motion } from 'framer-motion'
import { scaleUp, slideLeft, slideRight } from '../utils/animations'
import { Location } from '../components/svg/Location'

interface sobreProps {}

const sobre: NextPage<sobreProps> = ({}) => {
  return (
    <Layout>
      <Meta title='Sobre | Florista Beijaflor' />
      <motion.div
        initial='initial'
        animate='animate'
        variants={scaleUp}
        className='sticky flex flex-col z-[2] top-24 -mt-12 ml-auto lg:mr-6 w-[60%] max-w-[20rem] p-2 rounded-md bg-white shadow-md border-2 border-pink-light'
      >
        <div className='flex w-full m-auto'>
          <Email
            tailwind='ml-auto h-6 mr-4 text-pink-medium hidden lg:inline-block'
            strokeWidth={2}
          />
          <a
            className='mr-auto'
            rel='noopener noreferrer'
            target='_blank'
            href='mailto:geral@floristabeijaflor.com'
          >
            <p className='text-pink-dark font-thin text-center hover:underline'>
              geral@floristabeijaflor.com
            </p>
          </a>
        </div>
        <div className='flex w-full m-auto'>
          <Phone
            tailwind='ml-auto h-6 mr-4 text-pink-medium hidden lg:inline-block'
            strokeWidth={2}
          />
          <a
            className='mr-auto'
            rel='noopener noreferrer'
            target='_blank'
            href='tel:+351219171574'
          >
            <p className='text-pink-dark font-thin hover:underline'>
              21 917 1574
            </p>
          </a>
        </div>
        <div className='flex w-full m-auto'>
          <Location tailwind='ml-auto h-6 mr-4 text-pink-medium hidden lg:inline-block' />
          <a
            className='mr-auto'
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.google.pt/maps/place/Florista+Beijaflor/@38.7806557,-9.3247543,17z/data=!4m8!1m2!3m1!2sFlorista+Beijaflor!3m4!1s0x0:0x48434555a6025c5!8m2!3d38.7806557!4d-9.3225656'
          >
            <p className='text-pink-dark font-thin hover:underline'>
              Rio de Mouro, Sintra
            </p>
          </a>
        </div>
      </motion.div>
      <div className='flex mx-auto w-full max-w-7xl lg:mb-0 -mt-20 lg:-mt-24'>
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
      <div className='flex flex-col w-full max-w-5xl mx-auto mt-24'>
        <div className='relative w-[60%] max-w-[500px] max-h-[600px] mt-20'>
          <motion.div
            initial='initial'
            animate='animate'
            variants={slideRight}
            className='w-full h-full overflow-hidden rounded-lg'
          >
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
          </motion.div>
          <motion.div
            initial='initial'
            animate='animate'
            variants={slideLeft}
            className='absolute flex w-[160%] max-w-[20rem] md:max-w-[30rem] lg:max-w-[40rem] h-[8rem] lg:w-[40rem] lg:h-[12rem] bg-white rounded-lg shadow-around -top-24 lg:-top-16 right-[-8.6rem] lg:right-[-30rem] px-4 border-2 border-pink-light'
          >
            <h6 className='w-full text-center self-center font-serif text-pink-dark lg:text-lg tracking-wider font-thin'>
              <strong className='font-thin font-sans text-2xl lg:text-3xl'>
                Florista Beijaflor
              </strong>
              , agora online! Descubra a nossa seleção de plantas e flores e
              receba-as à sua porta.
            </h6>
          </motion.div>
          <motion.div
            initial='initial'
            animate='animate'
            variants={slideRight}
            className='absolute flex z-[1] w-[160%] max-w-[20rem] md:max-w-[30rem] lg:max-w-[40rem] h-[8rem] lg:w-[40rem] lg:h-[12rem] px-4 bg-white rounded-lg shadow-around -bottom-24 -right-32 lg:-right-64 border-2 border-pink-light'
          >
            <h6 className='w-full text-center self-center font-serif text-pink-dark lg:text-lg tracking-wider font-thin'>
              Com mais de 20 anos de história, a sua florista de Rio de Mouro
              veste as suas flores com elegância e modernidade.
            </h6>
          </motion.div>
        </div>
        <div className='relative w-[60%] max-w-[500px] max-h-[600px] mt-16 lg:mt-10 mb-32 ml-auto'>
          <motion.div
            initial='initial'
            animate='animate'
            variants={slideLeft}
            className='w-full h-full overflow-hidden rounded-lg'
          >
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
          </motion.div>
          <motion.div
            initial='initial'
            animate='animate'
            variants={slideLeft}
            className='absolute flex w-[160%] max-w-[20rem] md:max-w-[30rem] lg:max-w-[40rem] h-[8rem] lg:w-[40rem] lg:h-[12rem] px-4 bg-white rounded-lg shadow-around -bottom-24 -left-32 lg:-left-72 border-2 border-pink-light'
          >
            <h6 className='w-full text-center self-center font-serif text-pink-dark lg:text-lg tracking-wider font-thin'>
              Cuidadosamente embaladas, entregamos a sua encomenda a tempo e com
              frescura.
            </h6>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default sobre
