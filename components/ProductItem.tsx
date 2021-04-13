import { Image } from 'cloudinary-react'

import { Heart } from './svg/Heart'
import { ShoppingBag } from './svg/ShoppingBag'

interface ProductItemProps {
  product: {
    id: string
    name: string
    description: string
    thumbnail: string
    price: number
    MainCategory: string
  }
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
}) => {
  return (
    <div className='relative h-[32rem] w-[20rem] mx-auto rounded-xl shadow-xl bg-white overflow-hidden'>
      <div className='w-full h-[75%] overflow-hidden'>
        <button className='absolute top-4 right-4 rounded-full p-2 bg-opacity-20 bg-white hover:bg-opacity-100'>
          <Heart tailwind='h-8 text-pink-dark' strokeWidth={1.8} />
        </button>
        <Image
          src={product.thumbnail}
          quality={70}
          height={900}
          width={600}
          gravity='auto'
          crop='fill'
        />
      </div>
      <div className='relative h-[25%] pt-2'>
        <h6 className='ml-4  font-bold tracking-[1rem] text-pink-medium'>
          {product.MainCategory.toUpperCase()}
        </h6>
        <button className='absolute top-1 right-4 rounded-full p-2 bg-opacity-20 bg-white hover:bg-opacity-100'>
        <ShoppingBag tailwind='h-8 text-pink-dark' strokeWidth={1.8} />
      </button>
        <h4 className='ml-4 mt-2 text-3xl font-bold text-green-dark'>
          {product.name}
        </h4>
        <h3 className='absolute right-4 bottom-3 text-2xl text-green-dark tracking-widest font-bold'>
          € {product.price}
        </h3>
      </div>
    </div>
  )
}
