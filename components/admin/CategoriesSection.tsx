import { ChangeEvent, useEffect, useState } from 'react'

import {
  MainCategory,
  SortOrder,
  SubCategory,
  useCategoriesQuery,
  useCategoryCountQuery,
} from '../../lib/generated/graphql'
import { Plus } from '../svg/Plus'
import { ArrowDown } from '../svg/ArrowDown'
import { Search } from '../svg/Search'
import { AdminCategoryItem } from './AdminCategoryItem'
import { NewCategoryModal } from './NewCategoryModal'

interface CategoriesSectionProps {}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({}) => {
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false)
  const [orderBy, setOrderBy] = useState('')
  const [search, setSearch] = useState('')

  const { data } = useCategoryCountQuery({ errorPolicy: 'all' })

  const {
    data: categoryData,
    variables,
    refetch,
  } = useCategoriesQuery({ errorPolicy: 'all', variables: { search: '' } })

  return (
    <section className='flex flex-col w-full min-h-[75vh] p-2 bg-white rounded-md shadow-around'>
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
      <div className='flex flex-col lg:flex-row w-full'>
        <div className='flex flex-col lg:flex-row mt-6 max-w-lg'>
          <div className='flex mb-3 lg:mx-3 py-1 px-4 rounded-md shadow-md bg-green-extraLight'>
            <h4 className='mx-auto text-green-dark tracking-widest'>
              <strong>{data?.categoryCount}</strong> categorias
            </h4>
          </div>
        </div>
        <div className='relative h-10 flex w-full lg:w-[45%] mt-6 mx-auto lg:ml-auto lg:mr-2'>
          <input
            className='mx-auto h-10 w-full pl-2 pr-10 text-lg font-thin tracking-widest border shadow-sm rounded-md focus:border-green-dark'
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
          <button
            type='button'
            onClick={async () => {
              variables.search = search
              variables.searchMain = MainCategory.None
              variables.searchSub = SubCategory.None
              if (search.toLowerCase().includes('plantas')) {
                variables.searchMain = MainCategory.Plantas
              }

              if (search.toLowerCase().includes('flores')) {
                variables.searchMain = MainCategory.Flores
              }

              if (search.toLowerCase().includes('acessórios')) {
                variables.searchMain = MainCategory.Acessorios
              }

              if (search.toLowerCase().includes('ocasião')) {
                variables.searchMain = MainCategory.Ocasiao
              }

              if (search.toLowerCase().includes('arranjos')) {
                variables.searchSub = SubCategory.Arranjos
              }

              if (search.toLowerCase().includes('calendário')) {
                variables.searchSub = SubCategory.Calendario
              }

              if (search.toLowerCase().includes('caracteristicas')) {
                variables.searchSub = SubCategory.Caracteristicas
              }

              if (search.toLowerCase().includes('cerimónias')) {
                variables.searchSub = SubCategory.Cerimonias
              }

              if (search.toLowerCase().includes('cores')) {
                variables.searchSub = SubCategory.Cores
              }

              if (search.toLowerCase().includes('estação')) {
                variables.searchSub = SubCategory.Estacao
              }

              if (search.toLowerCase().includes('local')) {
                variables.searchSub = SubCategory.Local
              }

              if (search.toLowerCase().includes('momentos especiais')) {
                variables.searchSub = SubCategory.MomentosEspeciais
              }

              if (search.toLowerCase().includes('outros')) {
                variables.searchSub = SubCategory.Outros
              }

              if (search.toLowerCase().includes('tipos')) {
                variables.searchSub = SubCategory.Tipos
              }

              if (search.toLowerCase().includes('vasos')) {
                variables.searchSub = SubCategory.Vasos
              }

              await refetch()
            }}
            className='absolute right-4 top-[50%] transform translate-y-[-50%]'
          >
            <Search tailwind='h-5 text-gray-400' strokeWidth={2} />
          </button>
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
                if (orderBy !== 'name: desc') {
                  setOrderBy('name: desc')
                  variables.orderBy = { name: SortOrder.Desc }
                } else {
                  setOrderBy('name: asc')
                  variables.orderBy = { name: SortOrder.Asc }
                }
                refetch()
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
                if (orderBy !== 'mainCategory: desc') {
                  setOrderBy('mainCategory: desc')
                  variables.orderBy = { mainCategory: SortOrder.Desc }
                } else {
                  setOrderBy('mainCategory: asc')
                  variables.orderBy = { mainCategory: SortOrder.Asc }
                }
                refetch()
              }}
              className='flex mx-auto'
            >
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                CATEGORIA PRINCIPAL
              </h5>
              {orderBy === 'mainCategory: desc' ? (
                <ArrowDown
                  tailwind='ml-2 h-4 text-green-dark'
                  strokeWidth={3}
                />
              ) : orderBy === 'mainCategory: asc' ? (
                <ArrowDown
                  tailwind='ml-2 h-4 text-green-dark transform rotate-180'
                  strokeWidth={3}
                />
              ) : null}
            </button>
          </div>
          <div className='hidden lg:flex w-[42%]'>
            <button
              type='button'
              onClick={() => {
                if (orderBy !== 'subCategory: desc') {
                  setOrderBy('subCategory: desc')
                  variables.orderBy = { subCategory: SortOrder.Desc }
                } else {
                  setOrderBy('subCategory: asc')
                  variables.orderBy = { subCategory: SortOrder.Asc }
                }
                refetch()
              }}
              className='flex mx-auto'
            >
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                SUBCATEGORIA
              </h5>
              {orderBy === 'subCategory: desc' ? (
                <ArrowDown
                  tailwind='ml-2 h-4 text-green-dark'
                  strokeWidth={3}
                />
              ) : orderBy === 'subCategory: asc' ? (
                <ArrowDown
                  tailwind='ml-2 h-4 text-green-dark transform rotate-180'
                  strokeWidth={3}
                />
              ) : null}
            </button>
          </div>
          <div className='flex w-[28%] lg:w-[20%]'>
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
