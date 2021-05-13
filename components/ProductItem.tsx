import Link from 'next/link'
import { Image } from 'cloudinary-react'

import { Heart } from './svg/Heart'
import { ShoppingBag } from './svg/ShoppingBag'
import { BasicProductInfoFragment } from '../lib/generated/graphql'

interface ProductItemProps {
  product: BasicProductInfoFragment
  height: string
  width: string
  sm?: boolean
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  height,
  width,
  sm,
}) => {
  const routeName = encodeURIComponent(product.name).replace(/%20/g, '-')

  return (
    <div
      className={`relative z-10 ${height} ${width} mx-auto rounded-xl shadow-xl bg-white overflow-hidden active:animate-pulse`}
    >
      <Link href={`/produtos/${routeName}`}>
        <a>
          <div className='w-full h-[70%] overflow-hidden'>
            <button className='absolute top-4 right-4 rounded-full p-2 bg-opacity-20 bg-white hover:bg-opacity-100'>
              <Heart tailwind='h-8 text-pink-dark' strokeWidth={1.8} />
            </button>
            <Image
              cloudName={
                process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
              }
              publicId={product.images[0]}
              quality={70}
              height={900}
              width={600}
              gravity='auto'
              crop='fill'
            />
          </div>
          <div className='relative h-[30%] pt-2'>
            <h6 className='ml-4 tracking-widest text-pink-medium'>
              {product.categories[0].name}
            </h6>
            <button className='absolute bottom-0 right-1 rounded-full p-2 bg-opacity-20 bg-white hover:bg-opacity-100 hover:scale-110'>
              <ShoppingBag tailwind='h-8 text-pink-dark' strokeWidth={1.8} />
            </button>
            <h4
              className={`mx-4 mt-2 font-serif tracking-wide text-green-medium ${
                sm ? 'text-lg' : 'text-xl'
              }`}
            >
              {product.name}
            </h4>
            <h3 className='absolute left-4 bottom-1 text-xl text-green-dark tracking-widest'>
              €{product.price.toFixed(2)}
            </h3>
          </div>
        </a>
      </Link>
    </div>
  )
}
