import { NextPage } from 'next'
import Link from 'next/link'

import { Layout } from '../components/Layout'
import { Logo } from '../components/svg/Logo'
import { Blob } from '../components/svg/Blob'

interface loginProps {}

const login: NextPage<loginProps> = ({}) => {
  return (
    <Layout>
      <div className='-mt-4 mb-32 min-h-[40rem] w-full max-w-7xl mx-auto grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2'>
        <div className='mt-16 lg:mt-0 relative z-[0] mx-auto w-[90%] lg:w-[40rem] flex flex-col col-span-1'>
          <Logo tailwind='mt-6 lg:mt-0 text-pink-dark h-[4rem] lg:h-[5rem] mx-auto' strokeWidth={2.5} />
          <Blob tailwind='absolute -left-4 lg:left-2 lg:bottom-0 w-[110%] lg:w-[40rem] z-[-1] text-pink-light' />
          <h1 className='mt-2 lg:mt-12 lg:text-4xl text-center font-thin tracking-[0.5rem] text-pink-dark'>
            FLORISTA BEIJAFLOR
          </h1>
          <div className='flex mt-10 lg:mt-24 mx-auto'>
            <h2 className='mr-4 font-bold lg:text-4xl text-pink-dark'>20</h2>
            <h3 className='text-pink-dark lg:text-2xl self-center font-thin tracking-widest'>
              anos de momentos especiais
            </h3>
          </div>
          <h4 className='mt-8 lg:mt-12 text-pink-dark tracking-widest lg:text-xl font-thin text-center'>
            <strong>Flores</strong> e <strong>plantas</strong> à sua porta
          </h4>
          <Link href='/explorar'>
            <a className='m-auto mt-10 lg:mt-20'>
              <button className='p-2 px-2 rounded-md shadow-md text-white opacity-95 bg-opacity-80 hover:opacity-100 hover:bg-opacity-100 bg-pink-dark font-thin tracking-widest md:text-2xl '>
                EXPLORAR
              </button>
            </a>
          </Link>
        </div>
        <div className='col-span-1 row-start-1 lg:col-start-2 bg-white rounded-xl shadow-around w-[95%] h-[26rem] lg:w-[26rem] lg:h-[36rem] mx-auto'></div>
      </div>
    </Layout>
  )
}

export default login
