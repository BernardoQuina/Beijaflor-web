import { useState } from 'react'
import { Image } from 'cloudinary-react'

import { categories } from '../../lib/testData'

interface PlantsCategoryProps {}

export const PlantsCategory: React.FC<PlantsCategoryProps> = ({}) => {
  const [selected, setSelected] = useState('tipos')

  return (
    <div className='w-5/12'>
      <h4 className='ml-4 font-bold text-2xl tracking-widest text-green-medium'>
        Plantas
      </h4>
      <div className='w-[95%] h-[21.4rem] bg-white rounded-lg shadow-lg'>
        <div className='w-full h-[15%] border-b flex pt-2'>
          <h6
            className={`mx-auto px-3 h-8 cursor-pointer tracking-wider text-xl text-green-dark ${
              selected === 'tipos' &&
              'bg-green-extraLight rounded-lg shadow-md font-bold'
            }`}
            onMouseEnter={() => setSelected('tipos')}
          >
            tipos
          </h6>
          <h6
            className={`mx-auto px-3 h-8 cursor-pointer tracking-wider text-xl text-green-dark ${
              selected === 'local' &&
              'bg-green-extraLight rounded-lg shadow-md font-bold'
            }`}
            onMouseEnter={() => setSelected('local')}
          >
            local
          </h6>
          <h6
            className={`mx-auto px-3 h-8 cursor-pointer tracking-wider text-xl text-green-dark ${
              selected === 'características' &&
              'bg-green-extraLight rounded-lg shadow-md font-bold'
            }`}
            onMouseEnter={() => setSelected('características')}
          >
            características
          </h6>
        </div>
        <div className='w-full h-[85%] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
          {selected === 'tipos' ? (
            <div className='my-4 ml-2 mr-4 grid grid-cols-2 2xl:grid-cols-3 gap-5'>
              {categories.map((category) => {
                if (
                  category.main === 'plantas' &&
                  category.subDomain === 'tipos'
                ) {
                  return (
                    <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                      <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                        <Image
                          className='my-auto'
                          src={category.thumb}
                          quality={70}
                          height={500}
                          width={500}
                          gravity='auto'
                          crop='scale'
                        />
                      </div>
                      <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                        {category.name}
                      </h6>
                    </div>
                  )
                }
              })}
            </div>
          ) : selected === 'local' ? (
            <div className='my-4 ml-2 mr-4 grid grid-cols-2 2xl:grid-cols-3 gap-5'>
              {categories.map((category) => {
                if (
                  category.main === 'plantas' &&
                  category.subDomain === 'local'
                ) {
                  return (
                    <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                      <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                        <Image
                          className='my-auto'
                          src={category.thumb}
                          quality={70}
                          height={500}
                          width={500}
                          gravity='auto'
                          crop='scale'
                        />
                      </div>
                      <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                        {category.name}
                      </h6>
                    </div>
                  )
                }
              })}
            </div>
          ) : selected === 'características' ? (
            <div className='my-4 ml-2 mr-4 grid grid-cols-2 2xl:grid-cols-3 gap-5'>
              {categories.map((category) => {
                if (
                  category.main === 'plantas' &&
                  category.subDomain === 'características'
                ) {
                  return (
                    <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                      <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                        <Image
                          className='my-auto'
                          src={category.thumb}
                          quality={70}
                          height={500}
                          width={500}
                          gravity='auto'
                          crop='scale'
                        />
                      </div>
                      <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                        {category.name}
                      </h6>
                    </div>
                  )
                }
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
