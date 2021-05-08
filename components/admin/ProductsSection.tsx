import { useState } from 'react'

import { useProductCountsQuery } from '../../lib/generated/graphql'
import { Plus } from '../svg/Plus'
import { NewProductModal } from './NewProductModal'

interface ProductsSectionProps {}

export const ProductsSection: React.FC<ProductsSectionProps> = ({}) => {
  const [showNewProductModal, setShowNewProductModal] = useState(false)

  const { data } = useProductCountsQuery({ errorPolicy: 'all' })

  return (
    <section className='flex flex-col w-full h-full p-4 bg-white rounded-md shadow-around'>
      <NewProductModal
        showProductModal={showNewProductModal}
        setShowProductModal={setShowNewProductModal}
      />
      <div className='flex'>
        <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-2xl md:text-4xl tracking-widest text-pink-dark'>
          Produtos
          <div className='absolute z-[-1] ml-1 -mt-3 lg:-mt-4 rounded-sm bg-pink-light w-full h-[0.4rem] lg:h-[0.6rem]'></div>
        </h1>
        <button
          className='group flex px-2 lg:px-3 lg:mr-2 self-center h-10 rounded-md shadow-md bg-green-extraLight'
          onClick={() => setShowNewProductModal(true)}
        >
          <h5 className='hidden lg:inline-block mr-2 self-center tracking-wider text-green-dark group-hover:font-bold'>
            Novo produto
          </h5>
          <Plus tailwind='m-auto h-6 text-green-dark' strokeWidth={2} />
        </button>
      </div>
      <div className='flex flex-col lg:flex-row mt-6 max-w-lg'>
        <div className='flex mb-3 lg:mx-auto py-2 px-4 rounded-md shadow-md bg-green-extraLight'>
          <h4 className='mx-auto text-green-dark tracking-widest'>
            <strong>{data?.productCount}</strong> produtos
          </h4>
        </div>
        <div className='flex mx-auto w-full lg:w-[66%]'>
          <div className='flex mb-3 mx-auto py-2 px-4 rounded-md shadow-md bg-gray-200'>
            <h4 className='mx-auto text-gray-500 tracking-widest'>
              <strong>{data?.inactiveCount}</strong> inativos
            </h4>
          </div>
          <div className='flex mb-3 mx-auto py-2 px-4 rounded-md shadow-md bg-red-100'>
            <h4 className='mx-auto text-red-700 tracking-widest'>
              <strong>{data?.outOfStockCount}</strong> sem stock
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}
