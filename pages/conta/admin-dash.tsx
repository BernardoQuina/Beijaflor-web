import { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { CategoriesSection } from '../../components/admin/CategoriesSection'
import { ProductsSection } from '../../components/admin/ProductsSection'
import { Layout } from '../../components/Layout'
import { Box } from '../../components/svg/Box'
import { Categories } from '../../components/svg/Categories'
// import { Chart } from '../../components/svg/Chart'
import { Shelf } from '../../components/svg/Shelf'
import { ArrowDown } from '../../components/svg/ArrowDown'
import { useIsAuth } from '../../utils/useIsAuth'
import { OrdersSection } from '../../components/admin/OrdersSection'

interface adminDashProps {}

const adminDash: NextPage<adminDashProps> = ({}) => {
  const [active, setActive] = useState('produtos')

  const router = useRouter()

  useIsAuth(true)

  return (
    <Layout>
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
      <div className='relative mt-4 mx-auto max-w-6xl 3xl:max-w-[90rem] w-full  grid grid-cols-12'>
        <div className='sticky top-20 z-[2] flex mb-4 lg:mx-4 col-span-full lg:col-span-3 '>
          <div className='sticky top-20 z-[2] flex lg:flex-col lg:mb-auto w-full py-2 lg:p-4 bg-white rounded-md shadow-around'>
            <button
              onClick={() => setActive('produtos')}
              className={`${
                active === 'produtos' && 'bg-green-extraLight'
              } flex p-3 mx-auto lg:mx-0 lg:mb-3 rounded-lg lg:shadow-md cursor-pointer lg:hover:bg-green-extraLight`}
            >
              <div className='flex w-full lg:w-[30%] lg:ml-2 self-center'>
                <Shelf tailwind='h-8 mx-auto text-green-dark self-center' />
              </div>
              <h4 className='hidden lg:inline-block mr-auto text-lg text-green-dark tracking-widest'>
                Produtos
              </h4>
            </button>

            <button
              onClick={() => setActive('categorias')}
              className={`${
                active === 'categorias' && 'bg-green-extraLight'
              } flex p-3 mx-auto lg:mx-0 lg:my-3 rounded-lg lg:shadow-md cursor-pointer lg:hover:bg-green-extraLight`}
            >
              <div className='flex w-full lg:w-[30%] lg:ml-2 self-center'>
                <Categories tailwind='h-8 mx-auto text-green-dark self-center' />
              </div>
              <h4 className='hidden lg:inline-block mr-auto text-lg text-green-dark tracking-widest'>
                Categorias
              </h4>
            </button>
            <button
              onClick={() => setActive('encomendas')}
              className={`${
                active === 'encomendas' && 'bg-green-extraLight'
              } flex p-3 mx-auto lg:mx-0 lg:mt-3 rounded-lg lg:shadow-md cursor-pointer lg:hover:bg-green-extraLight`}
            >
              <div className='flex w-full lg:w-[30%] lg:ml-2 self-center'>
                <Box tailwind='h-8 w-10 pr-1 mx-auto text-green-dark self-center' />
              </div>
              <h4 className='hidden lg:inline-block mr-auto text-lg text-green-dark tracking-widest'>
                Encomendas
              </h4>
            </button>
            {/* <button
              onClick={() => setActive('características')}
              className={`${
                active === 'características' && 'bg-green-extraLight'
              } flex p-3 mx-auto lg:mx-0 lg:mt-3 rounded-lg lg:shadow-md cursor-pointer lg:hover:bg-green-extraLight`}
            >
              <div className='flex w-full lg:w-[30%] lg:ml-2 self-center'>
                <Chart tailwind='h-8 pr-1 mx-auto text-green-dark self-center' />
              </div>
              <h4 className='hidden lg:inline-block mr-auto text-lg text-green-dark tracking-widest'>
                Estatísticas
              </h4>
            </button> */}
          </div>
        </div>
        <div className='min-h-[60rem] col-span-full lg:col-span-9'>
          {active === 'produtos' ? (
            <ProductsSection />
          ) : active === 'categorias' ? (
            <CategoriesSection />
          ) : active === 'encomendas' ? (
            <OrdersSection />
          ) : active === 'estatísticas' ? (
            <div></div>
          ) : null}
        </div>
      </div>
    </Layout>
  )
}

export default adminDash
