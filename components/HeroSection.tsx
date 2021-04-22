import { Image } from 'cloudinary-react'
import Link from 'next/link'

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  return (
    <section className='max-w-6xl 3xl:max-w-7xl mt-36 lg:mt-52 mx-auto'>
      <div className='w-[100%] md:w-[60%] flex flex-col'>
        <h1 className='text-center font-thin tracking-widest text-5xl lg:text-6xl 2xl:text-7xl text-pink-dark font-serif'>
          Traga cor à sua vida
        </h1>
        <h4 className='mt-20 2xl:mt-44 mx-auto w-[80%] md:w-[100%] text-xl tracking-wider leading-relaxed md:text-2xl font-thin text-center text-green-dark'>
          Descubra a nossa seleção de plantas e flores
        </h4>

        <Link href='/explorar'>
          <a className='m-auto mt-14 md:mt-20'>
            <button className='p-2 px-2 rounded-md shadow-md text-pink-dark opacity-95 bg-opacity-80 hover:opacity-100 hover:bg-opacity-100 bg-pink-light tracking-widest text-xl md:text-2xl '>
              EXPLORAR
            </button>
          </a>
        </Link>
      </div>

      <Image
        className='absolute top-[5%] md:top-[-10%] lg:top-[-20%] xl:top-[-20%] 2xl:top-[-10%] left-[60%] md:left-[40%] 3xl:left-[45%] z-[-1] transform'
        src='/homepage-plant1.png'
        quality={30}
        height={1000}
        width={1000}
        crop='fill'
      />
    </section>
  )
}
