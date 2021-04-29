import { CarouselProductList } from './CarouselProductList'

interface MostPopularSectionProps {}

export const MostPopularSection: React.FC<MostPopularSectionProps> = ({}) => {
  return (
    <section className='relative flex mt-40 mx-auto max-w-[100rem]'>
      <div className='mx-auto w-full flex flex-col'>
      <h1 className='relative z-[0] mr-auto md:ml-4 font-serif text-left text-4xl md:text-6xl tracking-widest text-pink-dark'>
            Mais vendidos
            <div className='absolute z-[-1] ml-2 -mt-4 lg:-mt-5 rounded-sm bg-pink-light w-full h-[0.8rem] lg:h-[1rem]'></div>
          </h1>
        <div className='flex flex-col mt-4 lg:mt-0'>
          <button className='self-end ml-auto mr-2 md:mr-20 xl:mr-8 h-10 p-1 px-2 rounded-md shadow-md text-white  opacity-80 hover:opacity-100 bg-pink-medium tracking-widest md:text-lg'>
            VER MAIS
          </button>
        </div>
        <CarouselProductList height='h-[28rem]' width='w-[16rem]' />
      </div>
    </section>
  )
}
