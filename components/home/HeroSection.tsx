import { Image } from 'cloudinary-react'
import Link from 'next/link'

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  return (
    <section className='relative overflow-y-visible flex max-w-6xl 3xl:max-w-7xl mt-36 lg:mt-52 mx-auto'>
      <div className='w-[100%] lg:w-[60%] flex flex-col'>
        <h1 className='text-center font-thin tracking-widest text-5xl lg:text-6xl 2xl:text-7xl text-pink-dark font-serif'>
          Traga cor à sua vida
        </h1>
        <h4 className='mt-20 2xl:mt-44 mx-auto w-[80%] md:w-[100%] text-xl tracking-wider leading-relaxed md:text-2xl font-thin text-center text-green-dark'>
          Descubra a nossa seleção de plantas e flores
        </h4>

        <Link href='/explorar'>
          <a className='m-auto mt-14 md:mt-20'>
            <button className='p-2 px-2 rounded-md shadow-md text-green-dark hover:opacity-95 hover:bg-opacity-80 opacity-100 bg-opacity-100 bg-green-extraLight font-thin tracking-widest text-xl md:text-2xl '>
              EXPLORAR
            </button>
          </a>
        </Link>
      </div>
      <Image
          className='hidden lg:inline-block absolute right-[5%] top-[-30%]'
          src='/homepage-plant1.png'
          quality={30}
          height={500}
          width={500}
          crop='fill'
        />
    </section>
  )
}
