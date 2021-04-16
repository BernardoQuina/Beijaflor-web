import { Image } from 'cloudinary-react'

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  return (
    <section className='max-w-6xl 3xl:max-w-7xl mt-36 lg:mt-52 mx-auto'>
      <div className='w-[100%] md:w-[60%] flex flex-col'>
        <h1 className='text-center tracking-wider text-5xl lg:text-6xl 2xl:text-7xl font-bold text-pink-dark'>
          Traga cor à sua vida
        </h1>
        <h4 className='mt-24 2xl:mt-44 mx-auto w-[80%] md:w-[100%] text-2xl tracking-wider leading-relaxed md:text-3xl text-center text-green-dark'>
          Descubra a nossa seleção de plantas e flores
        </h4>
        <button className='mx-auto mt-8 md:mt-20 p-2 px-2 rounded-md shadow-md text-pink-dark opacity-95 bg-opacity-60 hover:opacity-100 hover:bg-opacity-100 bg-pink-light tracking-widest text-xl md:text-2xl font-bold'>
          EXPLORAR
        </button>
      </div>

      <Image
        className='absolute top-[6%] md:top-[-20%] 2xl:top-[-10%] left-[55%] md:left-[40%] 3xl:left-[45%] z-[-1] transform'
        src='/homepage-plant1.png'
        quality={30}
        height={1000}
        width={1000}
        crop='fill'
      />
    </section>
  )
}
