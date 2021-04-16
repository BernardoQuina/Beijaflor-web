import { useState } from 'react'
import { Image } from 'cloudinary-react'
import { categories } from '../../lib/testData'

interface AccessoriesCategoryProps {
  currentCategory: string
}

export const AccessoriesCategory: React.FC<AccessoriesCategoryProps> = ({
  currentCategory,
}) => {
  const [selected, setSelected] = useState('vasos')

  const distinctFlowerCategories = new Set(
    categories.map((category) => {
      if (category.main === 'acessórios' && category.subDomain) {
        return category.subDomain
      }
    })
  )

  let subDomains: string[] = []

  distinctFlowerCategories.forEach((sub) => {
    if (sub !== undefined) {
      subDomains.push(sub)
    }
  })

  return (
    <div
      className={`w-[92%] lg:w-[20%] mx-auto lg:inline-block ${
        currentCategory !== 'acessórios' && 'hidden'
      }`}
    >
      <h4 className='ml-4 font-bold text-2xl tracking-widest text-green-medium hidden lg:inline-block'>
        Acessórios
      </h4>
      <div className='w-full h-[21.4rem] bg-white rounded-lg shadow-lg'>
        <div className='w-full h-[15%] border-b flex pt-2'>
          {subDomains.map((subDomain) => (
            <button
              className={`mx-auto px-3 h-8 cursor-pointer tracking-wider text-xl text-green-dark ${
                selected === subDomain &&
                'bg-green-extraLight rounded-lg shadow-md font-bold'
              }`}
              onMouseEnter={() => setSelected(subDomain)}
            >
              {subDomain}
            </button>
          ))}
        </div>
        <div className='w-full h-[85%] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
          {subDomains.map((subdomain) => {
            if (selected === subdomain) {
              return (
                <div className='my-4 ml-4 mr-6 grid grid-cols-1 2xl:grid-cols-2 gap-5'>
                  {categories.map((category) => {
                    if (
                      category.main === 'acessórios' &&
                      category.subDomain === subdomain
                    ) {
                      return (
                        <button className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
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