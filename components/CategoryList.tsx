import { Image } from 'cloudinary-react'

interface CategoryListProps {}

export const CategoryList: React.FC<CategoryListProps> = ({}) => {
  const testArray = [
    {
      thumbnail: '/category-1.jpg',
      name: 'Primavera',
    },
    {
      thumbnail: '/category-2.jpg',
      name: 'Verão',
    },
    {
      thumbnail: '/category-3.jpg',
      name: 'Rosas',
    },
    {
      thumbnail: '/category-4.jpg',
      name: 'Orquídeas',
    },
    {
      thumbnail: '/category-5.jpg',
      name: 'Pêsames',
    },
    {
      thumbnail: '/category-6.jpg',
      name: 'Casamento',
    },
    {
      thumbnail: '/category-7.jpg',
      name: 'Aniversário',
    },
    {
      thumbnail: '/category-8.jpg',
      name: 'Interior',
    },
    {
      thumbnail: '/category-9.jpg',
      name: 'Exterior',
    },
  ]

  return (
    <>
      {testArray.map((category) => (
        <div
          className='relative flex h-[24em] w-[20em] mx-auto mb-20 rounded-xl shadow-xl overflow-hidden'
          key={category.name}
        >
          <div className='absolute z-[-1] w-full h-full flex border overflow-hidden rounded-xl'>
            <Image
              className='transform my-auto'
              src={category.thumbnail}
              quality={70}
              height={500}
              width={500}
              gravity='auto'
              crop='scale'
            />
          </div>
          <div className='w-full flex h-[15%] mt-auto bg-white'>
            <h4 className='w-full self-center px-3 rounded-lg text-center text-lg text-pink-medium tracking-[1rem] '>
              {category.name.toUpperCase()}
            </h4>
          </div>
        </div>
      ))}
    </>
  )
}
