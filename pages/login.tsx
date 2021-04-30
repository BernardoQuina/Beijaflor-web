import { NextPage } from 'next'
import Link from 'next/link'

import { Layout } from '../components/Layout'
import { Logo } from '../components/svg/Logo'
import { Blob } from '../components/svg/Blob'

interface loginProps {}

const login: NextPage<loginProps> = ({}) => {
  return (
    <Layout>
      <div className='-mt-10 flex min-h-[40rem] w-full max-w-7xl mx-auto'>
        <div className='relative z-[0] w-[40rem] flex flex-col'>
          <Logo tailwind='text-pink-dark h-[5rem] mx-auto' strokeWidth={2.5} />
          <Blob tailwind='absolute left-2 bottom-0 w-[40rem] z-[-1] text-pink-light' />
          <h1 className='mt-12 text-4xl text-center font-thin tracking-[0.5rem] text-pink-dark'>
            FLORISTA BEIJAFLOR
          </h1>
          <div className='flex mt-24 mx-auto'>
            <h2 className='mr-4 font-bold text-4xl text-pink-dark'>20</h2>
            <h3 className='text-pink-dark text-2xl self-center font-thin tracking-widest'>
              anos de momentos especiais
            </h3>
          </div>
          <h4 className='mt-12 text-pink-dark tracking-widest text-xl font-thin text-center'>
            <strong>Flores</strong> e <strong>plantas</strong> à sua porta
          </h4>
          <Link href='/explorar'>
            <a className='m-auto mt-20'>
              <button className='p-2 px-2 rounded-lg shadow-md text-white opacity-95 bg-opacity-80 hover:opacity-100 hover:bg-opacity-100 bg-pink-dark font-thin tracking-widest text-xl md:text-2xl '>
                EXPLORAR
              </button>
            </a>
          </Link>
        </div>
        <div className='bg-white rounded-md shadow-around w-[26rem] h-[36rem] mx-auto'></div>
      </div>
    </Layout>
  )
}

export default login
