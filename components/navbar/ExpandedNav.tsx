import { Dispatch, SetStateAction, useState } from 'react'
import { CarouselProductList } from '../CarouselProductList'
import { AccessoriesCategory } from './AccessoriesCategory'
import { FlowersCategory } from './FlowersCategory'
import { PlantsCategory } from './PlantsCategory'
import { OccasionCategory } from './OccasionCategory'
import {
  BasicCategoryInfoFragment,
  useProductsQuery,
} from '../../lib/generated/graphql'

interface ExpandedNavProps {
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
  underline: number
  categories: BasicCategoryInfoFragment[]
}

export const ExpandedNav: React.FC<ExpandedNavProps> = ({
  open,
  setOpen,
  underline,
  categories,
}) => {
  const [currentCategory, setCurrentCategory] = useState('Flores')

  const { data } = useProductsQuery({
    variables: { search: 'dia da mãe' },
    errorPolicy: 'all',
    fetchPolicy: 'network-only',
  })

  return (
    <div className={`${open && 'h-[29rem] lg:h-[27rem]'}`}>
      {open && underline === 1 ? ( // novidades
        <div className='mx-auto h-full w-[92%] xl:w-[90%] 2xl:w-[85%] mt-12 lg:mt-0'>
          <CarouselProductList
            products={data.products}
            height='h-[24rem]'
            width='w-[14rem]'
            sm={true}
          />
        </div>
      ) : open && underline === 2 ? ( // ocasião
        <div className='xl:flex mt-16 lg:mt-6'>
          <OccasionCategory categories={categories} setOpen={setOpen} />
        </div>
      ) : open && underline === 3 ? ( // categorias
        <div className='xl:flex mt-12 lg:mt-0'>
          <div className='max-w-2xl mx-auto xl:hidden flex mt-16 md:mt-4 mb-2'>
            <button
              className={`mx-auto ${
                currentCategory === 'Flores'
                  ? 'font-regular text-xl'
                  : 'font-thin'
              }  tracking-widest text-green-medium xl:hidden`}
              onMouseEnter={() => {
                setCurrentCategory('Flores')
              }}
            >
              Flores
            </button>
            <button
              className={`mx-auto ${
                currentCategory === 'Plantas'
                  ? 'font-regular text-xl'
                  : 'font-thin'
              }  tracking-widest text-green-medium xl:hidden`}
              onMouseEnter={() => {
                setCurrentCategory('Plantas')
              }}
            >
              Plantas
            </button>
            <button
              className={`mx-auto ${
                currentCategory === 'Acessórios'
                  ? 'font-regular text-xl'
                  : 'font-thin'
              }  tracking-widest text-green-medium xl:hidden`}
              onMouseEnter={() => {
                setCurrentCategory('Acessórios')
              }}
            >
              Acessórios
            </button>
          </div>
          <FlowersCategory
            categories={categories}
            setOpen={setOpen}
            currentCategory={currentCategory}
          />
          <PlantsCategory
            categories={categories}
            setOpen={setOpen}
            currentCategory={currentCategory}
          />
          <AccessoriesCategory
            categories={categories}
            setOpen={setOpen}
            currentCategory={currentCategory}
          />
        </div>
      ) : null}
    </div>
  )
}
