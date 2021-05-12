import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import {
  BasicProductInfoFragment,
  useProductStatusMutation,
} from '../../lib/generated/graphql'

interface ProductOptionsModalProps {
  product: BasicProductInfoFragment
  modalRef: MutableRefObject<HTMLDivElement>
  setShowEditProductModal: Dispatch<SetStateAction<boolean>>
  setShowProductOptionsModal: Dispatch<SetStateAction<boolean>>
}

export const ProductOptionsModal: React.FC<ProductOptionsModalProps> = ({
  product,
  modalRef,
  setShowEditProductModal,
  setShowProductOptionsModal
}) => {
  const [productStatus] = useProductStatusMutation({
    errorPolicy: 'all',
    variables: { whereId: product.id },
  })

  return (
    <div
      ref={modalRef}
      className='absolute z-[1] py-2 px-2 w-[10rem] top-[4.2rem] right-14 lg:right-16 rounded-md shadow-around bg-white'
    >
      <button
        className='flex w-full'
        type='button'
        onClick={() => {
          setShowEditProductModal(true)
        }}
      >
        <h6 className='w-full py-2 text-green-dark tracking-wide text-center rounded-md hover:bg-green-extraLight'>
          Editar
        </h6>
      </button>
      <button
        className='flex w-full'
        type='button'
        onClick={async () => {
          await productStatus({
            update: (cache) => {
              cache.evict({ fieldName: 'products' })
            },
          })
          setShowProductOptionsModal(false)
        }}
      >
        <h6
          className={`w-full py-2 ${
            product.active
              ? 'text-blue-500 hover:bg-blue-100'
              : 'text-green-dark hover:bg-green-extraLight'
          } tracking-wide text-center rounded-md`}
        >
          {product.active ? 'Desativar' : 'Ativar'}
        </h6>
      </button>
      <button
        className='flex w-full'
        type='button'
        onClick={() => {
          setShowEditProductModal(true)
        }}
      >
        <h6 className='w-full py-2 text-red-500 tracking-wide text-center rounded-md hover:bg-red-100'>
          Eliminar
        </h6>
      </button>
    </div>
  )
}
