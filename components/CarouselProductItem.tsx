import { Image } from 'cloudinary-react'

interface CarouselProductItemProps {
  product: {
    id: string
    name: string
    description: string
    thumbnail: string
    price: number
    MainCategory: string
  }
}

export const CarouselProductItem: React.FC<CarouselProductItemProps> = ({
  product,
}) => {
  return (
    <div className='relative h-[30rem] max-w-[20rem] mx-auto rounded-xl shadow-xl bg-white overflow-hidden'>
      <div className='w-full h-[75%] overflow-hidden'>
        <Image
          src={product.thumbnail}
          quality={70}
          height={900}
          width={600}
          gravity='auto'
          crop='fill'
        />
      </div>
      <h6 className='ml-4 mt-2 font-bold tracking-[1rem] text-pink-medium'>
        {product.MainCategory.toUpperCase()}
      </h6>
      <h4 className='ml-4 mt-2 text-3xl font-bold text-green-dark'>
        {product.name}
      </h4>
      <h3 className='absolute right-4 bottom-2 text-2xl text-green-dark tracking-widest font-bold'>
        € {product.price}
      </h3>
    </div>
  )
}
