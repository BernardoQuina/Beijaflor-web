import { NextPage } from 'next'
import { isEqual, uniq, uniqBy, uniqWith } from 'lodash'

import { categories } from '../../lib/testData'
import { Layout } from '../../components/Layout'
import { Filter } from '../../components/svg/Filter'
import { Sort } from '../../components/svg/Sort'
import { ArrowDown } from '../../components/svg/ArrowDown'
import { useState } from 'react'

interface explorarProps {}

const explorar: NextPage<explorarProps> = ({}) => {
  const [mainOpen, setMainOpen] = useState('')
  const [subOpen, setSubOpen] = useState('')

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
      <div className='mt-20 mb-20 max-w-[100rem] lg:w-[95%] h-[60rem] mx-auto grid grid-cols-12 grid-row-6'>
        <div className=' hidden lg:inline-block lg:col-span-3 2xl:col-span-2 lg:row-span-full'>
          <div className='w-[85%] mx-auto mt-8 border-b border-green-light'>
            <h4 className='text-green-dark tracking-widest text-2xl'>
              Categorias
            </h4>
            {mainCat.map((cat) => (
              <div
                className='text-green-medium mx-auto ml-4 my-8'
                key={cat.main}
              >
                <button
                  className='flex'
                  onClick={() => {
                    if (mainOpen !== cat.main) {
                      setMainOpen(cat.main)
                    } else {
                      setMainOpen('')
                    }
                  }}
                >
                  <h6 className='text-xl tracking-widest self-center'>
                    {cat.main}
                  </h6>
                  <ArrowDown
                    tailwind={`h-4 transform ml-1 self-center ${
                      mainOpen === cat.main && 'rotate-180'
                    }`}
                    strokeWidth={3}
                  />
                </button>
                <div className={`${mainOpen !== cat.main && 'hidden'}`}>
                  {realUnique.map((unique) => {
                    if (unique.main === cat.main) {
                      return (
                        <div
                          className='text-green-medium mx-auto ml-4 my-4'
                          key={unique.subDomain}
                        >
                          <button
                            className='flex'
                            onClick={() => {
                              if (subOpen !== unique.subDomain) {
                                setSubOpen(unique.subDomain)
                              } else {
                                setSubOpen('')
                              }
                            }}
                          >
                            <h6 className='text-lg text-left font-thin tracking-widest self-center'>
                              {unique.subDomain}
                            </h6>
                            <ArrowDown
                              tailwind={`h-4 transform ml-1 self-center ${
                                subOpen === unique.subDomain && 'rotate-180'
                              }`}
                              strokeWidth={3}
                            />
                          </button>
                          <div
                            className={`${
                              subOpen !== unique.subDomain && 'hidden'
                            }`}
                          >
                            {categories.map((category) => {
                              if (
                                category.main === cat.main &&
                                category.subDomain === unique.subDomain
                              ) {
                                return <p>{category.name}</p>
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
