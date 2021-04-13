import { Image } from 'cloudinary-react'

interface CarouselProductItemProps {}

export const CarouselProductItem: React.FC<CarouselProductItemProps> = ({}) => {
  return (
    <div className='h-[28rem] max-w-[20rem] mx-auto rounded-xl shadow-xl bg-gray-100 overflow-hidden'>
      <div className='w-full h-[70%] overflow-hidden'>
        <Image
          src='/card-image-1.jpg'
          quality={60}
          height={600}
          width={400}
          crop='fill'
        />
      </div>

      <p className='m-auto'>hello</p>
    </div>
  )
}
