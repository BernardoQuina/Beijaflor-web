import { NextPage } from 'next'
import Link from 'next/link'

import { Layout } from '../components/Layout'
import { Logo } from '../components/svg/Logo'
import { Blob } from '../components/svg/Blob'

interface loginProps {}

const login: NextPage<loginProps> = ({}) => {
  return (
    <Layout>
      <div className='-mt-4 mb-48 min-h-[40rem] w-full max-w-7xl mx-auto grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2'>
        <div className='mt-16 lg:mt-0 relative z-[0] mx-auto w-[90%] lg:w-[40rem] flex flex-col col-span-1'>
          <Logo
            tailwind='mt-6 lg:mt-0 text-pink-dark h-[2.8rem] xs:h-[4rem] lg:h-[5rem] mx-auto'
            strokeWidth={2.5}
          />
          <Blob tailwind='absolute -left-6 lg:-left-4 lg:bottom-0 w-[110%] lg:w-[40rem] z-[-1] text-pink-light' />
          <Blob
            tailwind='absolute -left-6 lg:-left-4 lg:bottom-0 w-[110%] lg:w-[40rem] z-[-2] text-pink-medium'
            rotate={160}
          />
          <h1 className='mt-2 lg:mt-12 text-sm xs:text-base lg:text-4xl text-center font-thin tracking-[0.3rem] xs:tracking-[0.5rem] text-pink-dark'>
            FLORISTA BEIJAFLOR
          </h1>
          <div className='flex flex-col xs:flex-row mt-2 xs:mt-10 lg:mt-24 mx-auto'>
            <h2 className='xs:mr-4 font-bold text-center lg:text-4xl text-pink-dark'>
              20
            </h2>
            <h3 className='text-pink-dark text-center text-sm xs:text-base lg:text-2xl self-center font-thin tracking-widest w-[10rem] xs:w-max'>
              anos de momentos especiais
            </h3>
          </div>
          <h4 className='mt-4 lg:mt-12 text-pink-dark tracking-widest text-sm xs:text-base lg:text-xl font-thin text-center'>
            <strong>Flores</strong> e <strong>plantas</strong> à sua porta
          </h4>
          <Link href='/explorar'>
            <a className='m-auto mt-5 xs:mt-14 lg:mt-20'>
              <button className='p-2 px-2 rounded-md shadow-md text-white opacity-95 bg-opacity-80 hover:opacity-100 hover:bg-opacity-100 bg-pink-dark font-thin tracking-widest text-sm xs:text-base md:text-2xl '>
                EXPLORAR
              </button>
            </a>
          </Link>
        </div>
        <div className='col-span-1 row-start-1 lg:col-start-2 bg-white rounded-xl shadow-around w-[95%] h-[26rem] lg:w-[26rem] lg:h-[36rem] mx-auto'>

        </div>
      </div>
    </Layout>
  )
}

export default login
