import { Image } from 'cloudinary-react'
import Link from 'next/link'
import { BasicCategoryInfoFragment } from '../lib/generated/graphql'

interface CategoryListProps {
  categories: BasicCategoryInfoFragment[]
}

export const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <Link
          href={`/explorar/${category.name.toLowerCase()}`}
          key={category.name}
        >
          <a className='relative flex h-[26em] w-[18em] mx-auto mb-20 rounded-xl shadow-xl overflow-hidden'>
            <div className='absolute z-[-1] w-full h-full flex  overflow-hidden rounded-xl'>
              <Image
                alt={category.name}
                className='w-full h-full'
                cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                publicId={category.image}
                quality={70}
                height={800}
                width='auto'
                gravity='auto'
                crop='fill'
                secure={true}
              />
            </div>
            <div className='w-full flex h-[20%] mt-auto border border-white bg-white'>
              <h4 className='w-full self-center px-3 rounded-lg text-center text-lg text-pink-medium tracking-[1rem] '>
                {category.name.toUpperCase()}
              </h4>
            </div>
          </a>
        </Link>
      ))}
    </>
  )
}
