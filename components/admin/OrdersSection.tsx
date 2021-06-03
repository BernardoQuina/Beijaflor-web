import { ChangeEvent, useState } from 'react'

import {
  useOrderCountsQuery,
  useOrdersQuery,
} from '../../lib/generated/graphql'
import { OrderItem } from '../OrderItem'
import { Search } from '../svg/Search'

interface OrdersSectionProps {}

export const OrdersSection: React.FC<OrdersSectionProps> = ({}) => {
  const [orderBy, setOrderBy] = useState('')
  const [search, setSearch] = useState('')

  const { data: countData } = useOrderCountsQuery({ errorPolicy: 'all' })

  const { data, refetch, variables } = useOrdersQuery({
    errorPolicy: 'all',
  })

  return (
    <section className='flex flex-col w-full min-h-[75vh] p-2 bg-white rounded-md shadow-around'>
      <div className='flex'>
        <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-2xl md:text-4xl tracking-widest text-pink-dark'>
          Encomendas
          <div className='absolute z-[-1] ml-1 -mt-3 lg:-mt-4 rounded-sm bg-pink-light w-full h-[0.4rem] lg:h-[0.6rem]'></div>
        </h1>
      </div>
      <div className='flex flex-col lg:flex-row w-full mt-6'>
        <div className='flex flex-col lg:flex-row lg:my-auto w-full lg:max-w-md lg:flex-wrap'>
          <div className='flex mb-3 lg:my-2 mx-2 py-1 px-4 rounded-md shadow-md bg-green-extraLight'>
            <h4 className='mx-auto text-green-dark tracking-widest'>
              <strong>{countData?.orderCount}</strong> encomendas
            </h4>
          </div>
          <div className='flex mb-3 lg:my-2 mx-2  py-1 px-4 rounded-md shadow-md bg-gray-200'>
            <h4 className='mx-auto text-gray-500 tracking-widest'>
              <strong>{countData?.processingCount}</strong> em processamento
            </h4>
          </div>
          <div className='flex mb-3 lg:my-2 mx-2 py-1 px-4 rounded-md shadow-md bg-blue-100'>
            <h4 className='mx-auto text-blue-500 tracking-widest'>
              <strong>{countData?.inTransitCount}</strong> em distribuição
            </h4>
          </div>
          <div className='flex mb-3 lg:my-2 mx-2 py-1 px-4 rounded-md shadow-md bg-green-extraLight'>
            <h4 className='mx-auto text-green-dark tracking-widest'>
              <strong>{countData?.deliveredCount}</strong> entregues
            </h4>
          </div>
        </div>
        <div className='relative h-10 flex w-full lg:w-[45%] mt-6 mx-auto lg:my-auto'>
          <input
            className='mx-auto h-10 w-full pl-2 pr-10 text-lg font-thin tracking-widest border shadow-sm rounded-md focus:border-green-dark'
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            onKeyPress={async (e) => {
              if (e.key === 'Enter') {
                variables.search = search

                await refetch()
              }
            }}
          />
          <button
            type='button'
            onClick={async () => {
              variables.search = search

              await refetch()
            }}
            className='absolute right-4 top-[50%] transform translate-y-[-50%]'
          >
            <Search tailwind='h-5 text-gray-400' strokeWidth={2} />
          </button>
        </div>
      </div>
      <div className='w-full mt-4 mx-auto lg:p-2 min-h-[46rem]'>
        {data?.orders.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </div>
    </section>
  )
}
