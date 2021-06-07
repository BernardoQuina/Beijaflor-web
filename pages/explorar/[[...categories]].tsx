import { GetServerSideProps, NextPage } from 'next'
import { isEqual, uniqWith } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'

import { Layout } from '../../components/Layout'
import { ProductItem } from '../../components/ProductItem'
import { Filter } from '../../components/svg/Filter'
import { Sort } from '../../components/svg/Sort'
import { ArrowDown } from '../../components/svg/ArrowDown'
import { X } from '../../components/svg/X'
import { useRouter } from 'next/dist/client/router'
import { initializeApollo } from '../../lib/apolloClient'
import {
  BasicCategoryInfoFragment,
  CategoriesDocument,
  CategoriesQuery,
  ExploreProductsDocument,
  MainCategory,
  SortOrder,
  SubCategory,
  useExploreProductsQuery,
} from '../../lib/generated/graphql'
import { ApolloQueryResult } from '@apollo/client'
import { SelectCategories } from '../../components/explore/SelectCategories'
import { OrderByModal } from '../../components/explore/OrderByModal'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { slideLeft } from '../../utils/animations'

interface explorarCategoriesProps {
  serverCategories: BasicCategoryInfoFragment[]
  urlCategory: string[]
}

const explorarCategories: NextPage<explorarCategoriesProps> = ({
  serverCategories,
  urlCategory,
}) => {
  const router = useRouter()

  const [mainOpen, setMainOpen] = useState<MainCategory[]>([])
  const [subOpen, setSubOpen] = useState<SubCategory[]>([])
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(urlCategory)
  const [selectedSearch, setSelectedSearch] = useState<string>(
    router.query.categories
      ? router.query.categories[router.query.categories.length - 1]
      : ''
  )
  const [orderByModal, setOrderByModal] = useState(false)

  const mainCategoriesArray = [
    MainCategory.Flores,
    MainCategory.Plantas,
    MainCategory.Acessorios,
    MainCategory.Ocasiao,
  ]

  let mainAndSubArray: { main: MainCategory; sub: SubCategory }[] = []

  serverCategories.forEach((category) => {
    mainAndSubArray.push({
      main: category.mainCategory,
      sub: category.subCategory,
    })
  })

  const uniqueMainSubCombinations: { main: MainCategory; sub: SubCategory }[] =
    uniqWith(mainAndSubArray, isEqual)

  let mainCategory = MainCategory.None

  if (router.query.categories) {
    if (
      router.query.categories[
        router.query.categories.length - 1
      ].toLowerCase() === 'flores'
    ) {
      mainCategory = MainCategory.Flores
    } else if (
      router.query.categories[
        router.query.categories.length - 1
      ].toLowerCase() === 'plantas'
    ) {
      mainCategory = MainCategory.Plantas
    } else if (
      router.query.categories[
        router.query.categories.length - 1
      ].toLowerCase() === 'acessórios'
    ) {
      mainCategory = MainCategory.Acessorios
    } else if (
      router.query.categories[
        router.query.categories.length - 1
      ].toLowerCase() === 'ocasião'
    ) {
      mainCategory = MainCategory.Ocasiao
    }
  }

  const {
    data: productsData,
    variables,
    refetch,
  } = useExploreProductsQuery({
    errorPolicy: 'all',
    variables: {
      search:
        router.query.categories && router.query.categories[0] !== 'populares'
          ? router.query.categories[router.query.categories.length - 1]
          : '',
      searchMain: mainCategory,
      searchCatName1:
        router.query.categories &&
        router.query.categories[0] !== 'pesquisa' &&
        router.query.categories[0] !== 'populares'
          ? router.query.categories[
              router.query.categories.length - 1
            ].toUpperCase()
          : 'none',
      searchCatName2: 'none',
      searchCatName3: 'none',
      searchCatName4: 'none',
      searchCatName5: 'none',
      searchCatName6: 'none',
      searchCatName7: 'none',
      searchCatName8: 'none',
      searchCatName9: 'none',
      searchCatName10: 'none',
      orderBy:
        router.query.categories && router.query.categories[0] === 'populares'
          ? { sales: SortOrder.Desc }
          : undefined,
    },
  })

  const orderByButtonNode = useRef<HTMLButtonElement | null>(null)
  const orderByModalNode = useRef<HTMLDivElement | null>(null)

  const orderByButtonClick = (e: any) => {
    if (
      orderByButtonNode.current &&
      orderByButtonNode.current.contains(e.target)
    ) {
      return
    }

    if (
      orderByModalNode.current &&
      orderByModalNode.current.contains(e.target)
    ) {
      return
    }

    setOrderByModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', orderByButtonClick)

    return () => {
      document.removeEventListener('mousedown', orderByButtonClick)
    }
  }, [])

  useEffect(() => {
    if (
      (router.query.categories &&
        router.query.categories[0] !== 'pesquisa' &&
        !selectedCategories.includes(
          router.query.categories[0].toUpperCase()
        )) ||
      selectedCategories.length >= 2
    ) {
      router.reload()
    }

    if (router.query.categories && router.query.categories[0] !== 'pesquisa') {
      setSelectedCategories([router.query.categories[0].toUpperCase()])
    }

    if (
      router.query.categories &&
      router.query.categories[0] === 'pesquisa' &&
      router.query.categories[1] !== selectedSearch
    ) {
      router.reload()
    }

    setSelectedSearch(
      router.query.categories
        ? router.query.categories[router.query.categories.length - 1]
        : ''
    )
  }, [router.query.categories])

  return (
    <Layout>
      <div className='mt-20 mb-20 max-w-[110rem] lg:w-[97%]  mx-auto grid grid-cols-12 grid-row-6'>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key='categories'
            initial='initial'
            animate='animate'
            exit='exit'
            variants={slideLeft}
            className={`${
              filtersOpen ? 'row-span-full col-span-full pt-6 z-[1]' : 'hidden'
            } lg:inline-block lg:col-span-3 2xl:col-span-2 lg:row-span-full  bg-white lg:bg-transparent shadow-lg lg:shadow-none rounded-lg`}
          >
            <div className='w-[88%] sticky top-28 flex flex-col mx-auto'>
              <h4 className=' relative ml-4 mb-2 lg:mb-0 mr-auto text-pink-dark font-serif tracking-widest text-2xl'>
                Categorias
                <div className='absolute z-[-1] ml-1 mt-[-0.8rem] rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
              </h4>
              <button
                className='ml-auto -mt-10 lg:hidden'
                type='button'
                onClick={() => setFiltersOpen(false)}
              >
                <X tailwind='h-5 text-green-dark' />
              </button>
              {mainCategoriesArray.map((mainCategory) => (
                <AnimateSharedLayout key={mainCategory}>
                  <motion.div
                    layoutId={mainCategory}
                    className='text-green-medium w-full mx-auto my-4 px-6 py-4 rounded-md border-green-light bg-white  shadow-md'
                    key={mainCategory}
                  >
                    <motion.button
                      layoutId={mainCategory + ' button'}
                      className='flex w-full'
                      onClick={() => {
                        if (!mainOpen.includes(mainCategory)) {
                          setMainOpen((prev) => [...prev, mainCategory])
                        } else {
                          setMainOpen((prev) => [
                            ...prev.filter((e) => e !== mainCategory),
                          ])
                        }
                      }}
                    >
                      <h6 className='text-xl tracking-widest font-thin'>
                        {mainCategory === MainCategory.Acessorios
                          ? 'Acessórios'
                          : mainCategory === MainCategory.Ocasiao
                          ? 'Ocasião'
                          : mainCategory}
                      </h6>
                      <ArrowDown
                        tailwind={`h-5 transform ml-auto self-center ${
                          mainOpen.includes(mainCategory) && 'rotate-180'
                        }`}
                        strokeWidth={3}
                      />
                    </motion.button>
                    <div
                      className={`${
                        !mainOpen.includes(mainCategory) && 'hidden'
                      } mt-6`}
                    >
                      {uniqueMainSubCombinations.map((unique) => {
                        if (unique.main === mainCategory) {
                          return (
                            <div
                              className='text-green-medium mx-auto pl-4 my-4'
                              key={unique.sub}
                            >
                              <motion.button
                                layoutId={unique.sub}
                                className='flex w-full'
                                onClick={() => {
                                  if (!subOpen.includes(unique.sub)) {
                                    setSubOpen((prev) => [...prev, unique.sub])
                                  } else {
                                    setSubOpen((prev) => [
                                      ...prev.filter((e) => e !== unique.sub),
                                    ])
                                  }
                                }}
                              >
                                <h6 className='text-lg max-w-[90%] font-thin text-left tracking-widest self-center'>
                                  {unique.sub === SubCategory.MomentosEspeciais
                                    ? 'momentos especiais'
                                    : unique.sub === SubCategory.Estacao
                                    ? 'estação'
                                    : unique.sub === SubCategory.Cerimonias
                                    ? 'cerimónias'
                                    : unique.sub === SubCategory.Calendario
                                    ? 'calendário'
                                    : unique.sub === SubCategory.TiposFlores
                                    ? 'tipos'
                                    : unique.sub === SubCategory.TiposPlantas
                                    ? 'tipos'
                                    : unique.sub}
                                </h6>
                                <ArrowDown
                                  tailwind={`h-4 transform ml-auto self-center ${
                                    subOpen.includes(unique.sub) && 'rotate-180'
                                  }`}
                                  strokeWidth={3}
                                />
                              </motion.button>
                              <div
                                className={`${
                                  !subOpen.includes(unique.sub) && 'hidden'
                                } mt-4 mb-8 ml-2 border-l`}
                              >
                                {serverCategories.map((category) => {
                                  if (
                                    category.mainCategory === mainCategory &&
                                    category.subCategory === unique.sub
                                  ) {
                                    return (
                                      <div
                                        key={category.name}
                                        className='ml-4 my-4 flex tracking-wider'
                                      >
                                        <SelectCategories
                                          category={category}
                                          selectedCategories={
                                            selectedCategories
                                          }
                                          setSelectedCategories={
                                            setSelectedCategories
                                          }
                                          variables={variables}
                                          refetch={refetch}
                                        />
                                      </div>
                                    )
                                  }
                                })}
                              </div>
                            </div>
                          )
                        }
                      })}
                    </div>
                  </motion.div>
                </AnimateSharedLayout>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        <div
          className={`${
            !filtersOpen ? 'col-span-full row-span-full' : 'col-span-full'
          }  lg:col-span-9 2xl:col-span-10 lg:row-span-full`}
        >
          <div className='relative flex w-[40%] lg:w-[90%] mt-4 mb-4 mx-auto'>
            <button
              className={`${
                filtersOpen && 'hidden'
              } lg:hidden flex m-auto rounded-md shadow-md p-2 bg-green-extraLight`}
              type='button'
              onClick={() => setFiltersOpen(true)}
            >
              <Filter tailwind='h-6 text-green-dark' strokeWidth={2} />
            </button>
            <button
              className={`${
                filtersOpen && 'hidden lg:inline-block'
              } flex m-auto lg:ml-auto lg:mr-0 rounded-md shadow-md p-2 bg-green-extraLight lg:bg-white`}
              ref={orderByButtonNode}
              type='button'
              onClick={() => {
                setOrderByModal(!orderByModal)
              }}
            >
              <h6 className='tracking-widest text-green-dark ml-2 mr-4 hidden lg:inline-block'>
                Ordenar
              </h6>
              <Sort tailwind='lg:ml-2 h-6 text-green-dark' strokeWidth={2} />
            </button>
            {orderByModal && (
              <OrderByModal
                setOrderByModal={setOrderByModal}
                refetch={refetch}
                variables={variables}
                modalRef={orderByModalNode}
              />
            )}
          </div>
          {productsData.products.length > 0 ? (
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4'>
              {productsData.products.map((product) => (
                <div className='px-4 mt-4 mb-10 z-0' key={product.id}>
                  <ProductItem
                    product={product}
                    height='h-[24rem]'
                    width='w-[14rem]'
                    sm={true}
                  />
                </div>
              ))}
            </div>
          ) : (
            <h4 className='ml-4 mt-10 lg:mt-0 text-center lg:text-left text-xl text-green-dark tracking-wider'>
              Nenhum produto corresponde à pesquisa
            </h4>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let mainCategory = MainCategory.None

  if (context.query.categories) {
    if (
      context.query.categories[
        context.query.categories.length - 1
      ].toLowerCase() === 'flores'
    ) {
      mainCategory = MainCategory.Flores
    } else if (
      context.query.categories[
        context.query.categories.length - 1
      ].toLowerCase() === 'plantas'
    ) {
      mainCategory = MainCategory.Plantas
    } else if (
      context.query.categories[
        context.query.categories.length - 1
      ].toLowerCase() === 'acessórios'
    ) {
      mainCategory = MainCategory.Acessorios
    } else if (
      context.query.categories[
        context.query.categories.length - 1
      ].toLowerCase() === 'ocasião'
    ) {
      mainCategory = MainCategory.Ocasiao
    }
  }

  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ExploreProductsDocument,
    errorPolicy: 'all',
    variables: {
      search:
        context.query.categories && context.query.categories[0] !== 'populares'
          ? context.query.categories[context.query.categories.length - 1]
          : '',
      searchMain: mainCategory,
      searchCatName1:
        context.query.categories &&
        context.query.categories[0] !== 'pesquisa' &&
        context.query.categories[0] !== 'populares'
          ? context.query.categories[
              context.query.categories.length - 1
            ].toUpperCase()
          : 'none',
      searchCatName2: 'none',
      searchCatName3: 'none',
      searchCatName4: 'none',
      searchCatName5: 'none',
      searchCatName6: 'none',
      searchCatName7: 'none',
      searchCatName8: 'none',
      searchCatName9: 'none',
      searchCatName10: 'none',
      orderBy:
        context.query.categories && context.query.categories[0] === 'populares'
          ? { sales: SortOrder.Desc }
          : undefined,
    },
  })

  const categoriesResponse: ApolloQueryResult<CategoriesQuery> =
    await apolloClient.query({
      query: CategoriesDocument,
      variables: {
        search: '',
      },
      errorPolicy: 'all',
    })

  let urlCategory: string[] = []

  if (context.query.categories && context.query.categories[0] !== 'pesquisa') {
    urlCategory = [context.query.categories[0].toUpperCase()]
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      serverCategories: categoriesResponse.data.categories,
      urlCategory,
    },
  }
}

export default explorarCategories
