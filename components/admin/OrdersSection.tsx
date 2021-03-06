import { ChangeEvent, useState, useRef, useEffect, useCallback } from 'react'

import {
  BasicOrderInfoFragment,
  useOrderCountsQuery,
  useOrdersQuery,
} from '../../lib/generated/graphql'
import { OrderItem } from '../OrderItem'
import { OrdersOrderByModal } from './OrdersOrderByModal'
import { Search } from '../svg/Search'
import { Sort } from '../svg/Sort'

interface OrdersSectionProps {}

export const OrdersSection: React.FC<OrdersSectionProps> = ({}) => {
  const [orderByModal, setOrderByModal] = useState(false)
  const [search, setSearch] = useState('')

  const [orders, setOrders] = useState<BasicOrderInfoFragment[]>()
  const [hasMore, setHasMore] = useState(true)

  const observer = useRef<IntersectionObserver>()
  const ordersStateRef = useRef<BasicOrderInfoFragment[]>()

  ordersStateRef.current = orders

  const { data: countData } = useOrderCountsQuery({ errorPolicy: 'all' })

  const { data, loading, fetchMore, refetch, variables } = useOrdersQuery({
    errorPolicy: 'all',
    variables: {
      take: 10,
      skip: 0,
    },
  })

  const lastOrderElementRef = useCallback(
    (node) => {
      if (loading) return

      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          const response = await fetchMore({
            variables: {
              skip: ordersStateRef.current.length,
              take: 5,
            },
          })

          if (response.data === null || response.data.orders.length < 5) {
            setHasMore(false)
          }

          if (response.errors) {
            console.log(response.errors[0].message)
            setHasMore(false)
          }

          if (response.data.orders) {
            setOrders(ordersStateRef.current.concat(response.data.orders))
          }
        }
      })

      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  const orderByButtonNode = useRef<HTMLButtonElement | null>(null)
  const orderByModalNode = useRef<HTMLDivElement | null>(null)

  const orderByButtonClick = (e: any) => {
    if (
      orderByButtonNode.current &&
      orderByButtonNode.current.contains(e.target)
    ) {
      return
    }

    if (
      orderByModalNode.current &&
      orderByModalNode.current.contains(e.target)
    ) {
      return
    }

    setOrderByModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', orderByButtonClick)

    return () => {
      document.removeEventListener('mousedown', orderByButtonClick)
    }
  }, [])

  useEffect(() => {
    setOrders(data?.orders)

    if (data && (data.orders.length % 5 !== 0 || data.orders.length < 5)) {
      return setHasMore(false)
    }

    setHasMore(true)
  }, [data])

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
          <button
            className='flex mb-3 lg:my-2 mx-2 py-1 px-4 rounded-md shadow-md bg-green-extraLight hover:opacity-80'
            type='button'
            onClick={() => {
              variables.search = undefined
              refetch()
            }}
          >
            <h4 className='mx-auto text-green-dark tracking-widest'>
              <strong>{countData?.orderCount}</strong> encomendas
            </h4>
          </button>
          <button
            className='flex mb-3 lg:my-2 mx-2  py-1 px-4 rounded-md shadow-md bg-gray-200 hover:opacity-80'
            type='button'
            onClick={() => {
              variables.search = 'em processamento'
              refetch()
            }}
          >
            <h4 className='mx-auto text-gray-500 tracking-widest'>
              <strong>{countData?.processingCount}</strong> em processamento
            </h4>
          </button>
          <button
            className='flex mb-3 lg:my-2 mx-2 py-1 px-4 rounded-md shadow-md bg-blue-100 hover:opacity-80'
            type='button'
            onClick={() => {
              variables.search = 'em distribui????o'
              refetch()
            }}
          >
            <h4 className='mx-auto text-blue-500 tracking-widest'>
              <strong>{countData?.inTransitCount}</strong> em distribui????o
            </h4>
          </button>
          <button
            className='flex mb-3 lg:my-2 mx-2 py-1 px-4 rounded-md shadow-md bg-green-extraLight hover:opacity-80'
            type='button'
            onClick={() => {
              variables.search = 'entregue'
              refetch()
            }}
          >
            <h4 className='mx-auto text-green-dark tracking-widest'>
              <strong>{countData?.deliveredCount}</strong> entregues
            </h4>
          </button>
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
      <div className='relative flex w-full mt-6'>
        <button
          className='flex my-auto ml-auto  rounded-md shadow-md p-2 bg-green-extraLight hover:opacity-80'
          ref={orderByButtonNode}
          type='button'
          onClick={() => {
            setOrderByModal(!orderByModal)
          }}
        >
          <h6 className='tracking-widest text-green-dark ml-2 mr-4'>Ordenar</h6>
          <Sort tailwind='lg:ml-2 h-6 text-green-dark' strokeWidth={2} />
        </button>
        {orderByModal && (
          <OrdersOrderByModal
            setOrderByModal={setOrderByModal}
            refetch={refetch}
            variables={variables}
            modalRef={orderByModalNode}
          />
        )}
      </div>
      <div className='w-full mx-auto lg:p-2 min-h-[46rem]'>
        {orders?.length > 0
          ? orders.map((order, index) => {
              if (orders.length === index + 1) {
                return (
                  <OrderItem
                    order={order}
                    admin={true}
                    key={order.id}
                    lastOrderRef={lastOrderElementRef}
                  />
                )
              } else {
                return <OrderItem order={order} admin={true} key={order.id} />
              }
            })
          : null}
      </div>
    </section>
  )
}
