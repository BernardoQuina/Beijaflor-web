import { CarouselProductList } from './CarouselProductList'

interface SpecialOccasionSectionProps {}

export const SpecialOccasionSection: React.FC<SpecialOccasionSectionProps> = ({}) => {
  return (
    <section className='relative flex mt-48 mx-auto max-w-7xl'>
      <div className='mx-auto w-full'>
        <h1 className='text-center text-5xl md:text-6xl tracking-widest font-bold text-green-dark'>
          Dia da mãe
        </h1>
        <h4 className='mt-10 mb-4 md:mt-16 md:mb-10 md:mx-4 text-center text-2xl md:text-4xl tracking-wider'>
          Flores dizem-no melhor. Arranjos vibrantes e frescos.
        </h4>
        <CarouselProductList />
      </div>
    </section>
  )
}
