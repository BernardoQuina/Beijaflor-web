import { useState } from 'react'
import { Image } from 'cloudinary-react'

import {
  MainCategory,
  SubCategory,
  useCategoriesQuery,
} from '../../lib/generated/graphql'

interface OccasionCategoryProps {}

export const OccasionCategory: React.FC<OccasionCategoryProps> = ({}) => {
  const [selected, setSelected] = useState(SubCategory.Calendario)

  const { data } = useCategoriesQuery({
    errorPolicy: 'all',
    variables: { searchMain: MainCategory.Ocasiao },
  })


  const subCategories = [
    SubCategory.Calendario,
    SubCategory.MomentosEspeciais,
    SubCategory.Cerimonias,
  ]

  return (
    <div className={`w-[92%] xl:w-[96%] mx-auto`}>
      <div className='w-full h-[24rem] bg-white rounded-lg shadow-lg'>
        <div className='w-full h-[20%] md:h-[15%] border-b flex px-2 pt-2 overflow-auto'>
          {subCategories.map((subCategory) => (
            <button
              key={subCategory}
              className={`mx-auto mb-2 px-2 cursor-pointer tracking-wider md:text-xl text-green-dark ${
                selected === subCategory
                  ? 'bg-green-extraLight rounded-lg shadow-md font-regular text-lg'
                  : 'font-thin'
              }`}
              onMouseEnter={() => setSelected(subCategory)}
            >
              {subCategory === SubCategory.Calendario ? (
                'calendário'
              ): subCategory === SubCategory.MomentosEspeciais ? (
                'momentos especiais'
              ): subCategory === SubCategory.Cerimonias ? (
                'cerimónias'
              ): null}
            </button>
          ))}
        </div>
        <div className='w-full h-[80%] md:h-[85%] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
          {subCategories.map((subCategory) => {
            if (selected == subCategory) {
              return (
                <div
                  key={subCategory}
                  className='my-4 ml-4 mr-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'
                >
                  {data?.categories.map((category) => {
                    if (category.subCategory == subCategory) {
                      return (
                        <button
                          key={category.name}
                          className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'
                        >
                          <div className='w-14 h-14 m-auto flex overflow-hidden rounded-lg'>
                            <Image
                              className='my-auto'
                              cloudName={
                                process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                              }
                              publicId={category.image}
                              quality={20}
                              height={200}
                              width={200}
                              gravity='auto'
                              crop='fill'
                            />
                          </div>
                          <h6 className='w-[55%] mx-auto self-center text-lg text-center text-green-dark tracking-widest'>
                            {category.name.toLowerCase()}
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
