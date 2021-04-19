import { CarouselProductList } from './CarouselProductList'

interface SpecialOccasionSectionProps {}

export const SpecialOccasionSection: React.FC<SpecialOccasionSectionProps> = ({}) => {
  return (
    <section className='relative flex mt-40 mx-auto max-w-[100rem]'>
      <div className='mx-auto w-full'>
        <h1 className='md:ml-4 text-left text-5xl md:text-6xl tracking-widest text-pink-dark'>
          Dia da mãe
        </h1>
        <div className='flex'>
        <h4 className='my-4 md:ml-4 md:mt-4 md:mb-10 text-xl md:text-3xl tracking-wider font-thin text-green-dark'>
          Flores dizem-no melhor
        </h4>
        <button className=' self-end ml-auto lg:mr-8 h-10 p-1 px-2 rounded-md shadow-md text-white opacity-95 bg-opacity-60 hover:opacity-100 hover:bg-opacity-100 bg-pink-dark tracking-widest md:text-lg'>
          VER MAIS
        </button>
        </div>
        <CarouselProductList />
      </div>
    </section>
  )
}
