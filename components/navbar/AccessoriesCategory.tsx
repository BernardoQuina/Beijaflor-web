import { Dispatch, SetStateAction, useState } from 'react'
import Link from 'next/link'
import { Image } from 'cloudinary-react'
import {
  SubCategory,
  BasicCategoryInfoFragment,
} from '../../lib/generated/graphql'

interface AccessoriesCategoryProps {
  setOpen: Dispatch<SetStateAction<boolean>>
  currentCategory: string
  categories: BasicCategoryInfoFragment[]
}

export const AccessoriesCategory: React.FC<AccessoriesCategoryProps> = ({
  setOpen,
  currentCategory,
  categories,
}) => {
  const [selected, setSelected] = useState(SubCategory.Vasos)

  const subCategories = [SubCategory.Vasos, SubCategory.Outros]

  return (
    <div
      className={`w-[92%] xl:w-[20%] mx-auto xl:inline-block ${
        currentCategory !== 'Acessórios' && 'hidden'
      }`}
    >
      <h4 className='ml-4 mt-4 text-2xl tracking-widest text-green-medium hidden xl:inline-block'>
        Acessórios
      </h4>
      <div className='w-full h-[21.6rem] lg:h-[22rem] bg-white rounded-lg shadow-lg'>
        <div className='w-full h-[15%] border-b flex pt-2 overflow-auto'>
          {subCategories.map((subCategory) => (
            <button
              key={subCategory}
              className={`mx-auto px-3 h-8 cursor-pointer tracking-wider text-green-dark ${
                selected === subCategory
                  ? 'bg-green-extraLight rounded-lg shadow-md font-regular text-lg'
                  : 'font-thin'
              }`}
              onMouseEnter={() => setSelected(subCategory)}
            >
              {subCategory}
            </button>
          ))}
        </div>
        <div className='w-full h-[85%] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
          {subCategories.map((subCategory) => {
            if (selected === subCategory) {
              return (
                <div
                  key={subCategory}
                  className='my-4 ml-4 mr-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-5'
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
