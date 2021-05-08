import { useState } from 'react'

import { useCategoryCountQuery } from '../../lib/generated/graphql'
import { Plus } from '../svg/Plus'
import { NewProductModal } from './NewProductModal'

interface CategoriesSectionProps {}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({}) => {
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false)

  const { data } = useCategoryCountQuery({ errorPolicy: 'all' })

  return (
    <section className='flex flex-col w-full h-full p-4 bg-white rounded-md shadow-around'>
      <NewProductModal
        showProductModal={showNewCategoryModal}
        setShowProductModal={setShowNewCategoryModal}
      />
      <div className='flex'>
        <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-2xl md:text-4xl tracking-widest text-pink-dark'>
          Categorias
          <div className='absolute z-[-1] ml-1 -mt-3 lg:-mt-4 rounded-sm bg-pink-light w-full h-[0.4rem] lg:h-[0.6rem]'></div>
        </h1>
        <button
          className='group flex px-2 lg:px-3 lg:mr-2 self-center h-10 rounded-md shadow-md bg-green-extraLight'
          onClick={() => setShowNewCategoryModal(true)}
        >
          <h5 className='hidden lg:inline-block mr-2 self-center tracking-wider text-green-dark group-hover:font-bold'>
            Nova categoria
          </h5>
          <Plus tailwind='m-auto h-6 text-green-dark' strokeWidth={2} />
        </button>
      </div>
      <div className='flex flex-col lg:flex-row mt-6 max-w-lg'>
        <div className='flex mb-3 lg:mx-3 py-2 px-4 rounded-md shadow-md bg-green-extraLight'>
          <h4 className='mx-auto text-green-dark tracking-widest'>
            <strong>{data?.categoryCount}</strong> categorias
          </h4>
        </div>
      </div>
    </section>
  )
}
