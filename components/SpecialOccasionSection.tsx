import { Image } from 'cloudinary-react'

import { Carousel } from './Carousel'

interface SpecialOccasionSectionProps {}

export const SpecialOccasionSection: React.FC<SpecialOccasionSectionProps> = ({}) => {
  return (
    <section className='relative xl:left-[10%] flex mt-48 mx-auto max-w-4xl'>
      <div className='mx-auto'>
        <h1 className='text-center text-5xl md:text-6xl tracking-widest font-bold text-green-dark'>
          Dia da mãe
        </h1>
        <h4 className='mt-16 md:mx-4 text-center text-2xl md:text-4xl tracking-wider'>
          Flores dizem-no melhor. Arranjos vibrantes e frescos.
        </h4>
        <Carousel infiniteLoop={true}>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src='https://via.placeholder.com/300x300'
                alt='placeholder'
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src='https://via.placeholder.com/300x300'
                alt='placeholder'
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src='https://via.placeholder.com/300x300'
                alt='placeholder'
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src='https://via.placeholder.com/300x300'
                alt='placeholder'
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </Carousel>
      </div>

      <Image
        className='absolute top-[-30%] md:top-[-90%] lg:top-[0%] right-[55%] lg:right-[80%] z-[-1] transform'
        src='/dia-da-mãe.png'
        quality={30}
        height={1500}
        width={1500}
        crop='fill'
      />
    </section>
  )
}
