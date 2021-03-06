import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'

import {
  BasicProductInfoFragment,
  SortOrder,
  useProductCountsQuery,
  useProductsQuery,
} from '../../lib/generated/graphql'
import { categoriesVariables } from '../../utils/categoriesVariables'
import { ArrowDown } from '../svg/ArrowDown'
import { Plus } from '../svg/Plus'
import { Search } from '../svg/Search'
import { AdminProductItem } from './AdminProductItem'
import { NewProductModal } from './NewProductModal'

interface ProductsSectionProps {}

export const ProductsSection: React.FC<ProductsSectionProps> = ({}) => {
  const [showNewProductModal, setShowNewProductModal] = useState(false)
  const [orderBy, setOrderBy] = useState('')
  const [search, setSearch] = useState('')

  const [products, setProducts] = useState<BasicProductInfoFragment[]>()
  const [hasMore, setHasMore] = useState(true)

  const observer = useRef<IntersectionObserver>()
  const productsStateRef = useRef<BasicProductInfoFragment[]>()

  productsStateRef.current = products

  const { data } = useProductCountsQuery({ errorPolicy: 'all' })

  const {
    data: productData,
    loading,
    fetchMore,
    refetch,
    variables,
  } = useProductsQuery({
    errorPolicy: 'all',
    variables: {
      take: 10,
      skip: 0,
    },
  })

  const lastProductElementRef = useCallback(
    (node) => {
      if (loading) return

      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          const response = await fetchMore({
            variables: {
              skip: productsStateRef.current!.length,
              take: 5,
            },
          })

          if (response.data === null || response.data.products.length < 5) {
            setHasMore(false)
          }

          if (response.errors) {
            console.log(response.errors[0].message)
            setHasMore(false)
          }

          if (response.data.products) {
            setProducts(
              productsStateRef.current!.concat(response.data.products)
            )
          }
        }
      })

      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  useEffect(() => {
    setProducts(productData?.products)
    if (
      productData &&
      (productData.products.length % 5 !== 0 || productData.products.length < 5)
    ) {
      return setHasMore(false)
    }
    setHasMore(true)
  }, [productData])

  return (
    <section className='flex flex-col w-full min-h-[75vh] p-2 bg-white rounded-md shadow-around'>
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
          className='flex px-2 lg:px-3 lg:mr-2 self-center h-10 rounded-md shadow-md bg-green-extraLight hover:opacity-80'
          onClick={() => setShowNewProductModal(true)}
        >
          <h5 className='hidden lg:inline-block mr-2 self-center tracking-wider text-green-dark'>
            Novo produto
          </h5>
          <Plus tailwind='m-auto h-6 text-green-dark' strokeWidth={2} />
        </button>
      </div>
      <div className='flex flex-col lg:flex-row w-full'>
        <div className='flex flex-col lg:flex-row mt-6 w-full lg:w-[28rem]'>
          <div className='flex mb-3 mx-6 lg:mx-auto py-1 px-4 rounded-md shadow-md bg-green-extraLight'>
            <h4 className='mx-auto text-green-dark tracking-widest'>
              <strong>{data?.productCount}</strong> produtos
            </h4>
          </div>
          <div className='flex mx-auto w-full lg:w-[66%]'>
            <div className='flex mb-3 mx-auto py-1 px-4 rounded-md shadow-md bg-gray-200'>
              <h4 className='mx-auto text-gray-500 tracking-widest'>
                <strong>{data?.inactiveCount}</strong> inativos
              </h4>
            </div>
            <div className='flex mb-3 mx-auto py-1 px-4 rounded-md shadow-md bg-red-100'>
              <h4 className='mx-auto text-red-700 tracking-widest'>
                <strong>{data?.outOfStockCount}</strong> sem stock
              </h4>
            </div>
          </div>
        </div>
        <div className='relative h-10 flex w-full lg:w-[45%] mt-6 mx-auto'>
          <input
            className='mx-auto h-10 w-full pl-2 pr-10 text-lg font-thin tracking-widest border shadow-sm rounded-md focus:border-green-dark'
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            onKeyPress={async (e) => {
              if (e.key === 'Enter') {
                variables.search = search

                categoriesVariables(search, variables)

                await refetch()
              }
            }}
          />
          <button
            type='button'
            onClick={async () => {
              variables.search = search

              categoriesVariables(search, variables)

              await refetch()
            }}
            className='absolute right-4 top-[50%] transform translate-y-[-50%]'
          >
            <Search tailwind='h-5 text-gray-400' strokeWidth={2} />
          </button>
        </div>
      </div>
      <div className='w-full mt-6 lg:mt-8 mx-auto lg:p-2 min-h-[46rem]'>
        <div className='sticky z-[2] flex top-40 lg:top-20 mb-4 w-full h-8 p-2 rounded-md shadow-md bg-green-extraLight'>
          <div className='flex w-[20%]'>
            <div className='flex mx-auto'>
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                IMAGEM
              </h5>
            </div>
          </div>
          <div className='flex w-[54%]'>
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
          <div className='hidden lg:flex w-[34%]'>
            <button
              type='button'
              onClick={() => {
                if (orderBy !== 'price: desc') {
                  setOrderBy('price: desc')
                  variables.orderBy = { price: SortOrder.Desc }
                } else {
                  setOrderBy('price: asc')
                  variables.orderBy = { price: SortOrder.Asc }
                }
                refetch()
              }}
              className='flex mx-auto'
            >
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                PRE??O
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
                if (orderBy !== 'stock: desc') {
                  setOrderBy('stock: desc')
                  variables.orderBy = { stock: SortOrder.Desc }
                } else {
                  setOrderBy('stock: asc')
                  variables.orderBy = { stock: SortOrder.Asc }
                }
                refetch()
              }}
              className='flex mx-auto'
            >
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                STOCK
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
          <div className='hidden lg:flex w-[34%]'>
            <button
              type='button'
              onClick={() => {
                if (orderBy !== 'sales: desc') {
                  setOrderBy('sales: desc')
                  variables.orderBy = { sales: SortOrder.Desc }
                } else {
                  setOrderBy('sales: asc')
                  variables.orderBy = { sales: SortOrder.Asc }
                }
                refetch()
              }}
              className='flex mx-auto'
            >
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                VENDAS
              </h5>
              {orderBy === 'sales: desc' ? (
                <ArrowDown
                  tailwind='ml-2 h-4 text-green-dark'
                  strokeWidth={3}
                />
              ) : orderBy === 'sales: asc' ? (
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
                if (orderBy !== 'active: desc') {
                  setOrderBy('active: desc')
                  variables.orderBy = { active: SortOrder.Desc }
                } else {
                  setOrderBy('active: asc')
                  variables.orderBy = { active: SortOrder.Asc }
                }
                refetch()
              }}
              className='flex mx-auto'
            >
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                ESTADO
              </h5>
              {orderBy === 'active: desc' ? (
                <ArrowDown
                  tailwind='ml-2 h-4 text-green-dark'
                  strokeWidth={3}
                />
              ) : orderBy === 'active: asc' ? (
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
                A????O
              </h5>
            </button>
          </div>
        </div>
        {products?.length > 0
          ? products.map((product, index) => {
              if (products.length === index + 1) {
                return (
                  <AdminProductItem
                    key={product.id}
                    lastProductRef={lastProductElementRef}
                    product={product}
                    index={index}
                  />
                )
              } else {
                return (
                  <AdminProductItem
                    key={product.id}
                    product={product}
                    index={index}
                  />
                )
              }
            })
          : null}
      </div>
    </section>
  )
}
