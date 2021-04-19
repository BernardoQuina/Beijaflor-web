import { useState } from 'react'
import { Image } from 'cloudinary-react'

import { occasions } from '../../lib/testData'

interface OccasionCategoryProps {}

export const OccasionCategory: React.FC<OccasionCategoryProps> = ({}) => {
  const [selected, setSelected] = useState('calendário')

  const distinctOccasionCategories = new Set(
    occasions.map((category) => {
      return category.main
    })
  )

  let domains: string[] = []

  distinctOccasionCategories.forEach((sub) => {
    if (sub !== undefined) {
      domains.push(sub)
    }
  })

  return (
    <div className={`w-[92%] xl:w-[96%] mx-auto`}>
      <div className='w-full h-[23rem] bg-white rounded-lg shadow-lg'>
        <div className='w-full h-[20%] md:h-[15%] border-b flex px-2 pt-2 overflow-auto'>
          {domains.map((domain) => (
            <button
              key={domain}
              className={`mx-auto mb-2 px-3 cursor-pointer tracking-wider text-lg md:text-xl text-green-dark ${
                selected === domain &&
                'bg-green-extraLight rounded-lg shadow-md font-bold'
              }`}
              onMouseEnter={() => setSelected(domain)}
            >
              {domain}
            </button>
          ))}
        </div>
        <div className='w-full h-[80%] md:h-[85%] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
          {domains.map((domain) => {
            if (selected === domain) {
              return (
                <div
                  key={domain}
                  className='my-4 ml-4 mr-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'
                >
                  {occasions.map((category) => {
                    if (category.main === domain) {
                      return (
                        <button
                          key={category.name}
                          className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'
                        >
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
                        </button>
                      )
                    }
                  })}
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
