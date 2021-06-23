import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import {
  BasicOrderInfoFragment,
  useOrderStateMutation,
} from '../../lib/generated/graphql'

interface OrderOptionsModalProps {
  order: BasicOrderInfoFragment
  modalRef: MutableRefObject<HTMLDivElement>
  setShowOrderOptionsModal: Dispatch<SetStateAction<boolean>>
}

export const OrderOptionsModal: React.FC<OrderOptionsModalProps> = ({
  order,
  modalRef,
  setShowOrderOptionsModal,
}) => {
  const [orderState] = useOrderStateMutation({
    errorPolicy: 'all',
  })

  return (
    <div
      ref={modalRef}
      className='absolute z-[1] py-2 px-2 w-[11rem] top-12 right-2 lg:right-10 rounded-md shadow-around bg-white'
    >
      <button
        className='flex w-full'
        type='button'
        onClick={async () => {
          await orderState({
            variables: { whereId: order.id, state: 'Em processamento' },
            update: (cache) => {
              cache.evict({ fieldName: 'orders' })
              cache.evict({ fieldName: 'orderCount' })
              cache.evict({ fieldName: 'processingCount' })
              cache.evict({ fieldName: 'inTransitCount' })
              cache.evict({ fieldName: 'deliveredCount' })
            },
          })
          setShowOrderOptionsModal(false)
        }}
      >
        <h6 className='w-full py-2 text-gray-500 tracking-wide text-center rounded-md hover:bg-gray-200'>
          Em processamento
        </h6>
      </button>
      <button
        className='flex w-full'
        type='button'
        onClick={async () => {
          await orderState({
            variables: { whereId: order.id, state: 'Em distribuição' },
            update: (cache) => {
              cache.evict({ fieldName: 'orders' })
              cache.evict({ fieldName: 'orderCount' })
              cache.evict({ fieldName: 'processingCount' })
              cache.evict({ fieldName: 'inTransitCount' })
              cache.evict({ fieldName: 'deliveredCount' })
            },
          })
          setShowOrderOptionsModal(false)
        }}
      >
        <h6 className='w-full py-2 text-blue-500 tracking-wide text-center rounded-md hover:bg-blue-200'>
          Em distribuição
        </h6>
      </button>
      <button
        className='flex w-full'
        type='button'
        onClick={async () => {
          await orderState({
            variables: { whereId: order.id, state: 'Entregue' },
            update: (cache) => {
              cache.evict({ fieldName: 'orders' })
              cache.evict({ fieldName: 'orderCount' })
              cache.evict({ fieldName: 'processingCount' })
              cache.evict({ fieldName: 'inTransitCount' })
              cache.evict({ fieldName: 'deliveredCount' })
            },
          })
          setShowOrderOptionsModal(false)
        }}
      >
        <h6 className='w-full py-2 text-green-dark tracking-wide text-center rounded-md hover:bg-green-extraLight'>
          Entregue
        </h6>
      </button>
      <button
        className='flex w-full'
        type='button'
        onClick={async () => {
          await orderState({
            variables: { whereId: order.id, state: 'Cancelada' },
            update: (cache) => {
              cache.evict({ fieldName: 'orders' })
              cache.evict({ fieldName: 'orderCount' })
              cache.evict({ fieldName: 'processingCount' })
              cache.evict({ fieldName: 'inTransitCount' })
              cache.evict({ fieldName: 'deliveredCount' })
            },
          })
          setShowOrderOptionsModal(false)
        }}
      >
        <h6 className='w-full py-2 text-red-400 tracking-wide text-center rounded-md hover:bg-red-100'>
          Cancelada
        </h6>
      </button>
    </div>
  )
}
