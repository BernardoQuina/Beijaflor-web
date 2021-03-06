import { Dispatch, SetStateAction, useState } from 'react'
import Link from 'next/link'
import { Image } from 'cloudinary-react'

import {
  BasicCategoryInfoFragment,
  SubCategory,
} from '../../lib/generated/graphql'

interface PlantsCategoryProps {
  setOpen: Dispatch<SetStateAction<boolean>>
  currentCategory: string
  categories: BasicCategoryInfoFragment[]
}

export const PlantsCategory: React.FC<PlantsCategoryProps> = ({
  setOpen,
  currentCategory,
  categories,
}) => {
  const [selected, setSelected] = useState(SubCategory.TiposPlantas)

  const subCategories = [
    SubCategory.TiposPlantas,
    SubCategory.Local,
    SubCategory.Caracteristicas,
  ]

  return (
    <div
      className={`w-[92%] xl:w-[36%] mx-auto xl:inline-block ${
        currentCategory !== 'Plantas' && 'hidden'
      }`}
    >
      <h4 className='ml-4 mt-4 text-2xl tracking-widest text-green-medium hidden xl:inline-block'>
        Plantas
      </h4>
      <div className='w-full h-[21.6rem] lg:h-[22rem] bg-white rounded-lg shadow-lg'>
        <div className='w-full h-[15%] border-b flex px-2 pt-2 overflow-auto'>
          {subCategories.map((subCategory) => (
            <button
              key={subCategory}
              className={`mx-auto px-3 h-8 cursor-pointer tracking-wider md:text-xl text-green-dark ${
                selected === subCategory
                  ? 'bg-green-extraLight rounded-lg shadow-md font-regular text-lg'
                  : 'font-thin'
              }`}
              onMouseEnter={() => setSelected(subCategory)}
            >
              {subCategory === SubCategory.TiposPlantas
                ? 'tipos'
                : subCategory === SubCategory.Caracteristicas
                ? 'características'
                : subCategory}
            </button>
          ))}
        </div>
        <div className='w-full h-[85%] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
          {subCategories.map((subCategory) => {
            if (selected === subCategory) {
              return (
                <div
                  key={subCategory}
                  className='my-4 ml-4 mr-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-5'
                >
                  {categories.map((category) => {
                    if (category.subCategory === subCategory) {
                      return (
                        <Link
                          key={category.name}
                          href={`/explorar/${category.name.toLowerCase()}`}
                        >
                          <a
                            className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                              <Image
                                alt={category.name}
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
                                secure={true}
                              />
                            </div>
                            <h6 className='w-[55%] mx-auto self-center text-lg text-center text-green-dark tracking-widest'>
                              {category.name.toLowerCase()}
                            </h6>
                          </a>
                        </Link>
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
