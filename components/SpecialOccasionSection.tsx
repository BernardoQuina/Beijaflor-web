import { CarouselProductList } from './CarouselProductList'

interface SpecialOccasionSectionProps {}

export const SpecialOccasionSection: React.FC<SpecialOccasionSectionProps> = ({}) => {
  return (
    <section className='relative flex mt-48 mx-auto max-w-[100rem]'>
      <div className='mx-auto w-full'>
        <h1 className='md:ml-4 text-left text-5xl md:text-6xl tracking-widest font-bold text-pink-dark'>
          Dia da mãe
        </h1>
        <h4 className='my-4 md:ml-4 md:mt-4 md:mb-10 text-xl md:text-3xl tracking-wider text-green-dark'>
          Flores dizem-no melhor
        </h4>
        <CarouselProductList />
      </div>
    </section>
  )
}
