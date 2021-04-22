import { Image } from 'cloudinary-react'

import { categories } from '../lib/testData'

interface CategoryListProps {}

export const CategoryList: React.FC<CategoryListProps> = ({}) => {
  return (
    <>
      {categories.map((category) => {
        const randomArray = [0, 5, 11, 20, 26, 42, 55, 62, 63]

        if (randomArray.includes(categories.indexOf(category))) {
          return (
            <button
              className='relative flex h-[22em] w-[18em] mx-auto mb-20 rounded-xl shadow-xl overflow-hidden'
              key={category.name}
            >
              <div className='absolute z-[-1] w-full h-full flex  overflow-hidden rounded-xl'>
                <Image
                  className='transform my-auto'
                  src={category.thumb}
                  quality={70}
                  height={500}
                  width={500}
                  gravity='auto'
                  crop='scale'
                />
              </div>
              <div className='w-full flex h-[20%] mt-auto bg-white'>
                <h4 className='w-full self-center px-3 rounded-lg text-center text-lg text-pink-medium tracking-[1rem] '>
                  {category.name.toUpperCase()}
                </h4>
              </div>
            </button>
          )
        }
      })}
    </>
  )
}
