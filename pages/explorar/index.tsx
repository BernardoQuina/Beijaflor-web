import { NextPage } from 'next'
import { isEqual, uniqBy, uniqWith } from 'lodash'
import React, { useState } from 'react'

import { categories, products } from '../../lib/testData'
import { Layout } from '../../components/Layout'
import { ProductItem } from '../../components/ProductItem'
import { Filter } from '../../components/svg/Filter'
import { Sort } from '../../components/svg/Sort'
import { ArrowDown } from '../../components/svg/ArrowDown'
import { X } from '../../components/svg/X'

interface explorarProps {}

const explorar: NextPage<explorarProps> = ({}) => {
  const [mainOpen, setMainOpen] = useState<string[]>([])
  const [subOpen, setSubOpen] = useState<string[]>([])

  const [filtersOpen, setFiltersOpen] = useState(false)

  const mainCat = uniqBy(categories, (category) => {
    return category.main
  })

  let mainAndSubArray: { main: string; subDomain: string }[] = []

  categories.forEach((category) => {
    mainAndSubArray.push({ main: category.main, subDomain: category.subDomain })
  })

  const realUnique: { main: string; subDomain: string }[] = uniqWith(
    mainAndSubArray,
    isEqual
  )

  return (
    <Layout>
      <div className='mt-20 mb-20 max-w-[110rem] lg:w-[97%]  mx-auto grid grid-cols-12 grid-row-6'>
        <div
          className={`${
            filtersOpen ? 'row-span-full col-span-full pt-6 z-[1]' : 'hidden'
          } lg:inline-block lg:col-span-3 2xl:col-span-2 lg:row-span-full  bg-white lg:bg-transparent shadow-lg lg:shadow-none rounded-lg`}
        >
          <div className='w-[88%] sticky top-28 flex flex-col mx-auto'>
            <h4 className=' relative ml-4 mr-auto text-pink-dark ont-serif tracking-widest text-2xl'>
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
            {mainCat.map((cat) => (
              <div
                className='text-green-medium w-full mx-auto my-4 px-6 py-4 rounded-md border-green-light bg-white  shadow-md'
                key={cat.main}
              >
                <button
                  className='flex w-full'
                  onClick={() => {
                    if (!mainOpen.includes(cat.main)) {
                      setMainOpen((prev) => [...prev, cat.main])
                    } else {
                      setMainOpen((prev) => [
                        ...prev.filter((e) => e !== cat.main),
                      ])
                    }
                  }}
                >
                  <h6 className='text-xl tracking-widest font-thin'>
                    {cat.main}
                  </h6>
                  <ArrowDown
                    tailwind={`h-5 transform ml-auto self-center ${
                      mainOpen.includes(cat.main) && 'rotate-180'
                    }`}
                    strokeWidth={3}
                  />
                </button>
                <div
                  className={`${!mainOpen.includes(cat.main) && 'hidden'} mt-6`}
                >
                  {realUnique.map((unique) => {
                    if (unique.main === cat.main) {
                      return (
                        <div
                          className='text-green-medium mx-auto pl-4 my-4'
                          key={unique.subDomain}
                        >
                          <button
                            className='flex w-full'
                            onClick={() => {
                              if (!subOpen.includes(unique.subDomain)) {
                                setSubOpen((prev) => [
                                  ...prev,
                                  unique.subDomain,
                                ])
                              } else {
                                setSubOpen((prev) => [
                                  ...prev.filter((e) => e !== unique.subDomain),
                                ])
                              }
                            }}
                          >
                            <h6 className='text-lg max-w-[90%] font-thin text-left tracking-widest self-center'>
                              {unique.subDomain}
                            </h6>
                            <ArrowDown
                              tailwind={`h-4 transform ml-auto self-center ${
                                subOpen.includes(unique.subDomain) &&
                                'rotate-180'
                              }`}
                              strokeWidth={3}
                            />
                          </button>
                          <div
                            className={`${
                              !subOpen.includes(unique.subDomain) && 'hidden'
                            } mt-4 mb-8 ml-2 border-l`}
                          >
                            {categories.map((category) => {
                              if (
                                category.main === cat.main &&
                                category.subDomain === unique.subDomain
                              ) {
                                return (
                                  <div
                                    key={category.name}
                                    className='ml-4 my-4 flex tracking-wider'
                                  >
                                    <label
                                      htmlFor={category.name}
                                      className='flex w-full'
                                    >
                                      {category.name}
                                      <input
                                        className='form-checkbox ml-auto text-pink-medium border border-pink-dark rounded-sm focus:border-pink-dark self-center'
                                        type='checkbox'
                                        name={category.name}
                                      />
                                    </label>
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
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${
            !filtersOpen ? 'col-span-full row-span-full' : 'col-span-full'
          }  lg:col-span-9 2xl:col-span-10 lg:row-span-full`}
        >
          <div className='flex w-[40%] lg:w-[90%] mt-4 mb-4 mx-auto'>
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
            >
              <h6 className='tracking-widest text-green-dark ml-2 mr-4 hidden lg:inline-block'>Ordenar</h6>
              <Sort tailwind='lg:ml-2 h-6 text-green-dark' strokeWidth={2} />
            </button>
          </div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4'>
            {products.map((product) => (
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
        </div>
      </div>
    </Layout>
  )
}

export default explorar
