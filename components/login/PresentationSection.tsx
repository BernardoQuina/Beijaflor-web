import Link from 'next/link'

import { Blob } from '../svg/Blob'
import { Logo } from '../svg/Logo'

interface PresentationSectionProps {}

export const PresentationSection: React.FC<PresentationSectionProps> = ({}) => {
  return (
    <section className='mt-32 lg:mt-0 relative z-[0] mx-auto w-[90%] lg:w-[40rem] flex flex-col col-span-1'>
      <Logo
        tailwind='mt-6 lg:mt-0 text-pink-dark h-[2.8rem] xs:h-[4rem] lg:h-[5rem] mx-auto'
        strokeWidth={2.5}
      />
      <Blob tailwind='absolute lg:-top-8 -left-6 lg:left-[50%] transform lg:translate-x-[-52%]  w-[110%] lg:w-[35rem] z-[-1] text-pink-light' />
      <Blob
        tailwind='absolute lg:-top-8 -left-6 lg:left-[50%] transform lg:translate-x-[-52%] w-[110%] lg:w-[35rem] z-[-2] text-green-light'
        rotate={160}
      />
      <h1 className='mt-2 lg:mt-12 text-sm xs:text-base lg:text-3xl text-center font-thin tracking-[0.3rem] md:tracking-[0.5rem] text-pink-dark'>
        FLORISTA BEIJAFLOR
      </h1>
      <div className='flex flex-col xs:flex-row mt-2 xs:mt-10 lg:mt-20 mx-auto'>
        <h2 className='xs:mr-4 font-bold text-center lg:text-3xl text-pink-dark'>
          20
        </h2>
        <h3 className='text-pink-dark text-center text-sm xs:text-base lg:text-xl self-center font-thin tracking-widest w-[10rem] xs:w-max'>
          anos de momentos especiais
        </h3>
      </div>
      <h4 className='mt-4 lg:mt-12 text-pink-dark tracking-widest text-sm xs:text-base lg:text-xl font-thin text-center'>
        <strong>Flores</strong> e <strong>plantas</strong> à sua porta
      </h4>
      <Link href='/explorar'>
        <a className='m-auto mt-5 xs:mt-14 lg:mt-20'>
          <button className='p-1 lg:p-2 px-2 rounded-md shadow-md text-green-dark opacity-95 bg-opacity-80 hover:opacity-100 hover:bg-opacity-100 bg-green-extraLight font-thin tracking-widest text-sm xs:text-base md:text-xl '>
            EXPLORAR
          </button>
        </a>
      </Link>
    </section>
  )
}
