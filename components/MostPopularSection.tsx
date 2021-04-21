import { CarouselProductList } from './CarouselProductList'

interface MostPopularSectionProps {}

export const MostPopularSection: React.FC<MostPopularSectionProps> = ({}) => {
  return (
    <section className='relative flex mt-40 mx-auto max-w-[100rem]'>
      <div className='mx-auto w-full'>
        <h1 className='md:ml-4 mb-8 font-serif text-left text-4xl md:text-5xl tracking-widest text-pink-dark'>
          Mais vendidos
        </h1>
        <div className='flex flex-col'>
          <button className='self-end ml-auto mr-2 md:mr-20 xl:mr-8 h-10 p-1 px-2 rounded-md shadow-md text-white opacity-95 bg-opacity-60 hover:opacity-100 hover:bg-opacity-100 bg-pink-dark tracking-widest md:text-lg'>
            VER MAIS
          </button>
        </div>
        <CarouselProductList height='h-[28rem]' width='w-[16rem]' />
      </div>
    </section>
  )
}
