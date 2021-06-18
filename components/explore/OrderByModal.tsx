import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import {
  Exact,
  ProductOrderByInput,
  MainCategory,
  SubCategory,
  SortOrder,
  BasicProductInfoFragment,
} from '../../lib/generated/graphql'

interface OrderByModalProps {
  modalRef: MutableRefObject<HTMLDivElement>
  setOrderByModal: Dispatch<SetStateAction<boolean>>
  setHasMore: Dispatch<SetStateAction<boolean>>
  setProducts: Dispatch<SetStateAction<BasicProductInfoFragment[]>>
  variables: Exact<{
    orderBy?: ProductOrderByInput | ProductOrderByInput[]
    search?: string
    searchMain?: MainCategory
    searchSub?: SubCategory
    searchCatName1?: string
    searchCatName2?: string
    searchCatName3?: string
    searchCatName4?: string
    searchCatName5?: string
    searchCatName6?: string
    searchCatName7?: string
    searchCatName8?: string
    searchCatName9?: string
    searchCatName10?: string
  }>
  refetch: any
}

export const OrderByModal: React.FC<OrderByModalProps> = ({
  modalRef,
  setOrderByModal,
  setHasMore,
  setProducts,
  variables,
  refetch,
}) => {
  return (
    <div
      ref={modalRef}
      className='absolute z-[2] py-2 px-2 w-[12rem] top-[3.2rem] -right-6 lg:right-0 rounded-md shadow-around bg-white'
    >
      <button
        className='py-2 flex w-full  rounded-md hover:bg-green-extraLight'
        type='button'
        onClick={async () => {
          variables.orderBy = { price: SortOrder.Desc }
          const response = await refetch()
          setProducts(response.data.products)
          setHasMore(true)
          setOrderByModal(false)
        }}
      >
        <h6 className='w-full text-green-dark tracking-wide text-center'>
          Preço mais alto
        </h6>
      </button>
      <button
        className='py-2 flex w-full  rounded-md hover:bg-green-extraLight'
        type='button'
        onClick={async () => {
          variables.orderBy = { price: SortOrder.Asc }
          const response = await refetch()
          setProducts(response.data.products)
          setHasMore(true)
          setOrderByModal(false)
        }}
      >
        <h6 className='w-full text-green-dark tracking-wide text-center'>
          Preço mais baixo
        </h6>
      </button>
      <button
        className='py-2 flex w-full  rounded-md hover:bg-green-extraLight'
        type='button'
        onClick={async () => {
          variables.orderBy = { createdAt: SortOrder.Desc }
          const response = await refetch()
          setProducts(response.data.products)
          setHasMore(true)
          setOrderByModal(false)
        }}
      >
        <h6 className='w-full text-green-dark tracking-wide text-center'>
          Novidades
        </h6>
      </button>
      <button
        className='py-2 flex w-full  rounded-md hover:bg-green-extraLight'
        type='button'
        onClick={async () => {
          variables.orderBy = { sales: SortOrder.Desc }
          const response = await refetch()
          setProducts(response.data.products)
          setHasMore(true)
          setOrderByModal(false)
        }}
      >
        <h6 className='w-full text-green-dark tracking-wide text-center'>
          Populares
        </h6>
      </button>
    </div>
  )
}
