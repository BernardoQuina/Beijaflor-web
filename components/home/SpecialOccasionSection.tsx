import Link from 'next/link'

import {
  useHeaderCategoryQuery,
  useSpecialOccasionQuery,
} from '../../lib/generated/graphql'
import { capitalize } from '../../utils/capitalize'
import { CarouselProductList } from '../CarouselProductList'

interface SpecialOccasionSectionProps {}

export const SpecialOccasionSection: React.FC<SpecialOccasionSectionProps> =
  ({}) => {
    const { data } = useSpecialOccasionQuery({
      errorPolicy: 'all',
    })

    const { data: headerData } = useHeaderCategoryQuery({ errorPolicy: 'all' })

    return (
      <section className='relative flex mt-40 mx-auto max-w-[100rem]'>
        <div className='mx-auto w-full flex flex-col'>
          <h1 className='relative z-[0] mr-auto md:ml-4 font-serif text-left text-3xl md:text-5xl tracking-widest text-pink-dark'>
            {capitalize(headerData.categories[0].name.toLowerCase())}
            <div className='absolute z-[-1] ml-1 -mt-3 lg:mt-[-0.8rem] rounded-sm bg-pink-light w-full h-[0.5rem] lg:h-[0.6rem]'></div>
          </h1>

          <div className='flex flex-col'>
            {/* <h4 className='my-4 md:ml-4 md:mt-4 md:mb-10 text-xl md:text-2xl tracking-wider font-thin text-green-dark'>
              Flores dizem-no melhor
            </h4> */}
            <Link
              href={`/explorar/${headerData.categories[0].name.toLowerCase()}`}
            >
              <a className='flex self-end ml-auto mr-2 md:mr-20 xl:mr-8 h-10 p-1 px-2 rounded-md shadow-md text-green-dark  hover:opacity-80 opacity-100 bg-green-extraLight tracking-widest md:text-lg'>
                <p className='self-center'>VER MAIS</p>
              </a>
            </Link>
          </div>
          <CarouselProductList
            products={data.specialOccasion}
            height='h-[28rem]'
            width='w-[16rem]'
          />
        </div>
      </section>
    )
  }
