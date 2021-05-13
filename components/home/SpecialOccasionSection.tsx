import { useProductsQuery } from '../../lib/generated/graphql'
import { CarouselProductList } from '../CarouselProductList'

interface SpecialOccasionSectionProps {}

export const SpecialOccasionSection: React.FC<SpecialOccasionSectionProps> =
  ({}) => {
    const { data } = useProductsQuery({
      variables: { search: 'dia da mãe' },
      errorPolicy: 'all',
    })

    return (
      <section className='relative flex mt-40 mx-auto max-w-[100rem]'>
        <div className='mx-auto w-full flex flex-col'>
          <h1 className='relative z-[0] mr-auto md:ml-4 font-serif text-left text-3xl md:text-5xl tracking-widest text-pink-dark'>
            Dia da mãe
            <div className='absolute z-[-1] ml-1 -mt-3 lg:mt-[-0.8rem] rounded-sm bg-pink-light w-full h-[0.5rem] lg:h-[0.6rem]'></div>
          </h1>

          <div className='flex flex-col'>
            <h4 className='my-4 md:ml-4 md:mt-4 md:mb-10 text-xl md:text-2xl tracking-wider font-thin text-green-dark'>
              Flores dizem-no melhor
            </h4>
            <button className='self-end ml-auto mr-2 md:mr-20 xl:mr-8 h-10 p-1 px-2 rounded-md shadow-md text-green-dark opacity-80 hover:opacity-100 bg-green-extraLight tracking-widest md:text-lg'>
              VER MAIS
            </button>
          </div>
          <CarouselProductList products={data?.products} height='h-[28rem]' width='w-[16rem]' />
        </div>
      </section>
    )
  }
