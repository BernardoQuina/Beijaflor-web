import { NextPage } from 'next'
import { categories } from '../../lib/testData'
import { Layout } from '../../components/Layout'
import { Filter } from '../../components/svg/Filter'
import { Sort } from '../../components/svg/Sort'

interface explorarProps {}

const explorar: NextPage<explorarProps> = ({}) => {

  console.table(categories)

  return (
    <Layout>
      <div className='mt-20 mb-20 max-w-[100rem] lg:w-[95%] h-[60rem] mx-auto grid grid-cols-12 grid-row-6'>
        <div className='bg-gray-50 hidden lg:inline-block lg:col-span-3 2xl:col-span-2 lg:row-span-full'></div>
        <div className='bg-pink-light col-span-full row-span-full lg:col-span-9 2xl:col-span-10 lg:row-span-full'>
          <div className='lg:hidden flex w-[80%] mt-4 mx-auto'>
            <button className='flex m-auto rounded-md shadow-md p-2'>
              <h6 className='tracking-widest font-bold text-green-dark'>
                Filtros
              </h6>
              <Filter tailwind='ml-2 h-6 text-green-dark' strokeWidth={2} />
            </button>
            <button className='flex m-auto rounded-md shadow-md p-2'>
              <h6 className='tracking-widest font-bold text-green-dark'>
                Ordenar
              </h6>
              <Sort tailwind='ml-2 h-6 text-green-dark' strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default explorar
