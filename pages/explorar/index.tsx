import { NextPage } from 'next'
import { isEqual, uniqBy, uniqWith } from 'lodash'

import { categories } from '../../lib/testData'
import { Layout } from '../../components/Layout'
import { Filter } from '../../components/svg/Filter'
import { Sort } from '../../components/svg/Sort'
import { ArrowDown } from '../../components/svg/ArrowDown'
import { useState } from 'react'

interface explorarProps {}

const explorar: NextPage<explorarProps> = ({}) => {
  const [mainOpen, setMainOpen] = useState<string[]>([])
  const [subOpen, setSubOpen] = useState<string[]>([])

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
      <div className='mt-20 mb-20 max-w-[100rem] lg:w-[97%]  mx-auto grid grid-cols-12 grid-row-6'>
        <div className=' hidden lg:inline-block lg:col-span-3 2xl:col-span-2 lg:row-span-full'>
          <div className='w-[88%] flex flex-col mx-auto mt-8 border-b border-green-light'>
            <h4 className=' relative ml-4 mr-auto text-pink-dark ont-serif tracking-widest text-2xl'>
              Categorias
              <div className='absolute z-[-1] ml-2 mt-[-0.8rem] rounded-sm bg-pink-light w-full h-[0.5rem]'></div>
            </h4>
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
                          className='text-green-medium mx-auto pl-6 my-4'
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
                                  <p
                                    key={category.name}
                                    className='ml-4 my-4 tracking-wider'
                                  >
                                    {category.name}
                                  </p>
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
          <div className='w-[88%] mx-auto mt-8 border-b border-green-light'>
            <h4 className='text-green-dark ml-4 tracking-widest text-2xl'>
              Preço
            </h4>
          </div>
        </div>
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
