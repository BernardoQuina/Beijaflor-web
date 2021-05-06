import { NextPage } from 'next'
import { Layout } from '../../components/Layout'
import { Shelf } from '../../components/svg/Shelf'
import { useIsAuth } from '../../utils/useIsAuth'

interface adminDashProps {}

const adminDash: NextPage<adminDashProps> = ({}) => {
  useIsAuth(true)

  return (
    <Layout>
      <div className='-mt-6 lg:-mt-10 mx-auto max-w-6xl 3xl:max-w-[100rem] w-full  grid grid-cols-12'>
        <div className='sticky top-20 flex mb-4 lg:mx-4 col-span-full lg:col-span-3 '>
          <div className='flex lg:flex-col lg:mb-auto w-full lg:p-4 bg-white rounded-md shadow-around'>
            <button className='flex py-3 mx-auto lg:mx-0 my-1 lg:mb-3 rounded-lg lg:shadow-md cursor-pointer lg:hover:bg-green-extraLight'>
              <div className='flex w-full lg:w-[30%] lg:ml-2 self-center'>
                <Shelf tailwind='h-8 mx-auto text-green-dark self-center' />
              </div>
              <h4 className='hidden lg:inline-block mr-auto text-lg text-green-dark tracking-widest'>
                Produtos
              </h4>
            </button>

            <button className='flex py-3 mx-auto lg:mx-0 lg:mt-3 rounded-lg lg:shadow-md cursor-pointer lg:hover:bg-green-extraLight'>
              <div className='flex w-full lg:w-[30%] lg:ml-2 self-center'>
                <Shelf tailwind='h-8 mx-auto text-green-dark self-center' />
              </div>
              <h4 className='hidden lg:inline-block mr-auto text-lg text-green-dark tracking-widest'>
                Categorias
              </h4>
            </button>
          </div>
        </div>
        <div className='bg-gray-600 h-[20rem] col-span-full lg:col-span-9'></div>
      </div>
    </Layout>
  )
}

export default adminDash
