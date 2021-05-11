import { useState } from 'react'

import {
  useCategoriesQuery,
  useCategoryCountQuery,
} from '../../lib/generated/graphql'
import { Plus } from '../svg/Plus'
import {ArrowDown} from '../svg/ArrowDown'
import { AdminCategoryItem } from './AdminCategoryItem'
import { NewCategoryModal } from './NewCategoryModal'

interface CategoriesSectionProps {}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({}) => {
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false)
  const [orderBy, setOrderBy] = useState('')
  const [search, setSearch] = useState('')

  console.log(setOrderBy, search, setSearch)

  const { data } = useCategoryCountQuery({ errorPolicy: 'all' })

  const { data: categoryData } = useCategoriesQuery({ errorPolicy: 'all' })

  return (
    <section className='flex flex-col w-full h-full p-4 bg-white rounded-md shadow-around'>
      <NewCategoryModal
        showCategoryModal={showNewCategoryModal}
        setShowCategoryModal={setShowNewCategoryModal}
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
      <div className='w-full mt-6 lg:mt-8 mx-auto lg:p-2 min-h-[46rem]'>
        <div className='sticky z-[1] flex top-40 lg:top-20 mb-4 w-full h-8 p-2 rounded-md shadow-md bg-green-extraLight'>
          <div className='flex w-[20%]'>
            <div className='flex mx-auto'>
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                IMAGEM
              </h5>
            </div>
          </div>
          <div className='flex w-[54%] lg:w-[44%]'>
            <button
              type='button'
              onClick={() => {
                // if (orderBy !== 'name: desc') {
                //   setOrderBy('name: desc')
                //   variables.orderBy = { name: SortOrder.Desc }
                // } else {
                //   setOrderBy('name: asc')
                //   variables.orderBy = { name: SortOrder.Asc }
                // }
                // refetch()
              }}
              className='flex mx-auto'
            >
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                NOME
              </h5>
              {orderBy === 'name: desc' ? (
                <ArrowDown
                  tailwind='ml-2 h-4 text-green-dark'
                  strokeWidth={3}
                />
              ) : orderBy === 'name: asc' ? (
                <ArrowDown
                  tailwind='ml-2 h-4 text-green-dark transform rotate-180'
                  strokeWidth={3}
                />
              ) : null}
            </button>
          </div>
          <div className='hidden lg:flex w-[44%]'>
            <button
              type='button'
              onClick={() => {
                // if (orderBy !== 'price: desc') {
                //   setOrderBy('price: desc')
                //   variables.orderBy = { price: SortOrder.Desc }
                // } else {
                //   setOrderBy('price: asc')
                //   variables.orderBy = { price: SortOrder.Asc }
                // }
                // refetch()
              }}
              className='flex mx-auto'
            >
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                CATEGORIA PRINCIPAL
              </h5>
              {orderBy === 'price: desc' ? (
                <ArrowDown
                  tailwind='ml-2 h-4 text-green-dark'
                  strokeWidth={3}
                />
              ) : orderBy === 'price: asc' ? (
                <ArrowDown
                  tailwind='ml-2 h-4 text-green-dark transform rotate-180'
                  strokeWidth={3}
                />
              ) : null}
            </button>
          </div>
          <div className='hidden lg:flex w-[34%]'>
            <button
              type='button'
              onClick={() => {
                // if (orderBy !== 'stock: desc') {
                //   setOrderBy('stock: desc')
                //   variables.orderBy = { stock: SortOrder.Desc }
                // } else {
                //   setOrderBy('stock: asc')
                //   variables.orderBy = { stock: SortOrder.Asc }
                // }
                // refetch()
              }}
              className='flex mx-auto'
            >
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                SUBCATEGORIA
              </h5>
              {orderBy === 'stock: desc' ? (
                <ArrowDown
                  tailwind='ml-2 h-4 text-green-dark'
                  strokeWidth={3}
                />
              ) : orderBy === 'stock: asc' ? (
                <ArrowDown
                  tailwind='ml-2 h-4 text-green-dark transform rotate-180'
                  strokeWidth={3}
                />
              ) : null}
            </button>
          </div>
          <div className='flex w-[28%]'>
            <button className='flex mx-auto'>
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                AÇÃO
              </h5>
            </button>
          </div>
        </div>
        {categoryData?.categories
          ? categoryData.categories.map((category, index) => (
              <AdminCategoryItem
                key={category.id}
                category={category}
                index={index}
              />
            ))
          : null}
      </div>
    </section>
  )
}
