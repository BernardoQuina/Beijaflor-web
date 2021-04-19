import { useState } from 'react'
import { AccessoriesCategory } from './AccessoriesCategory'
import { FlowersCategory } from './FlowersCategory'
import { PlantsCategory } from './PlantsCategory'

interface ExpandedNavProps {
  open: boolean
  underline: number
}

export const ExpandedNav: React.FC<ExpandedNavProps> = ({
  open,
  underline,
}) => {
  const [currentCategory, setCurrentCategory] = useState('flores')
  return (
    <div>
      {open && underline === 1 ? (
        <div className='mt-10 ml-4'>!!! A fazer !!!</div>
      ) : open && underline === 2 ? (
        <div className='mt-10 ml-4'>!!! A fazer !!!</div>
      ) : open && underline === 3 ? ( // categorias
        <div className='xl:flex xl:mt-6'>
          <div className='xl:hidden flex mt-12 md:mt-4 mb-2'>
            <button
              className={`mx-auto ${
                currentCategory === 'flores' ? 'font-bold text-2xl' : 'text-xl'
              }  tracking-widest text-green-medium xl:hidden`}
              onMouseEnter={() => {
                setCurrentCategory('flores')
              }}
            >
              Flores
            </button>
            <button
              className={`mx-auto ${
                currentCategory === 'plantas' ? 'font-bold text-2xl' : 'text-xl'
              }  tracking-widest text-green-medium xl:hidden`}
              onMouseEnter={() => {
                setCurrentCategory('plantas')
              }}
            >
              Plantas
            </button>
            <button
              className={`mx-auto ${
                currentCategory === 'acessórios'
                  ? 'font-bold text-2xl'
                  : 'text-xl'
              }  tracking-widest text-green-medium xl:hidden`}
              onMouseEnter={() => {
                setCurrentCategory('acessórios')
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
