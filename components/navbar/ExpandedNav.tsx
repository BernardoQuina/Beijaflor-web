import { useState } from 'react'
import {CarouselProductList} from '../CarouselProductList'
import { AccessoriesCategory } from './AccessoriesCategory'
import { FlowersCategory } from './FlowersCategory'
import { PlantsCategory } from './PlantsCategory'
import { OccasionCategory } from './OccasionCategory'

interface ExpandedNavProps {
  open: boolean
  underline: number
}

export const ExpandedNav: React.FC<ExpandedNavProps> = ({
  open,
  underline,
}) => {
  const [currentCategory, setCurrentCategory] = useState('Flores')
  return (
    <div className={`${open && 'h-[29rem] lg:h-[27rem]'}`}>
      {open && underline === 1 ? ( // novidades
        <div className='mx-auto h-full w-[92%] lg:w-[80%] mt-12 lg:mt-0'>
        <CarouselProductList height='h-[24rem]' width='w-[14rem]' sm={true} />
      </div>
      ) : open && underline === 2 ? ( // ocasião
        <div className='xl:flex mt-16 lg:mt-6'>
          <OccasionCategory />
        </div>
      ) : open && underline === 3 ? ( // categorias
        <div className='xl:flex mt-12 lg:mt-0'>
          <div className='max-w-2xl mx-auto xl:hidden flex mt-16 md:mt-4 mb-2'>
            <button
              className={`mx-auto ${
                currentCategory === 'Flores' ? 'font-regular text-xl' : 'font-thin'
              }  tracking-widest text-green-medium xl:hidden`}
              onMouseEnter={() => {
                setCurrentCategory('Flores')
              }}
            >
              Flores
            </button>
            <button
              className={`mx-auto ${
                currentCategory === 'Plantas' ? 'font-regular text-xl' : 'font-thin'
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
          <FlowersCategory currentCategory={currentCategory} />
          <PlantsCategory currentCategory={currentCategory} />
          <AccessoriesCategory currentCategory={currentCategory} />
        </div>
      ) : null}
    </div>
  )
}
