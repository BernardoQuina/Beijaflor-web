import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import {
  Exact,
  SortOrder,
  OrderOrderByInput,
} from '../../lib/generated/graphql'

interface OrdersOrderByModalProps {
  modalRef: MutableRefObject<HTMLDivElement>
  setOrderByModal: Dispatch<SetStateAction<boolean>>
  variables: Exact<{
    orderBy?: OrderOrderByInput | OrderOrderByInput[]
    search?: string
  }>
  refetch: any
}

export const OrdersOrderByModal: React.FC<OrdersOrderByModalProps> = ({
  modalRef,
  setOrderByModal,
  variables,
  refetch,
}) => {
  return (
    <div
      ref={modalRef}
      className='absolute z-[2] py-2 px-2 w-[12rem] top-[3.2rem] right-0 rounded-md shadow-around bg-white'
    >
      <button
        className='py-2 flex w-full  rounded-md hover:bg-green-extraLight'
        type='button'
        onClick={async () => {
          variables.orderBy = { createdAt: SortOrder.Desc }
          refetch()
          setOrderByModal(false)
        }}
      >
        <h6 className='w-full text-green-dark tracking-wide text-center'>
          Mais recente
        </h6>
      </button>
      <button
        className='py-2 flex w-full  rounded-md hover:bg-green-extraLight'
        type='button'
        onClick={async () => {
          variables.orderBy = { createdAt: SortOrder.Asc }
          refetch()
          setOrderByModal(false)
        }}
      >
        <h6 className='w-full text-green-dark tracking-wide text-center'>
          Mais antigo
        </h6>
      </button>
      <button
        className='py-2 flex w-full  rounded-md hover:bg-green-extraLight'
        type='button'
        onClick={async () => {
          variables.orderBy = { state: SortOrder.Desc }
          refetch()
          setOrderByModal(false)
        }}
      >
        <h6 className='w-full text-green-dark tracking-wide text-center'>
          Estado
        </h6>
      </button>
    </div>
  )
}
