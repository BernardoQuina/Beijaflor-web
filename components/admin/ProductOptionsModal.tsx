import { Dispatch, MutableRefObject, SetStateAction } from 'react'

interface ProductOptionsModalProps {
  modalRef: MutableRefObject<HTMLDivElement>
  setShowEditProductModal: Dispatch<SetStateAction<boolean>>
}

export const ProductOptionsModal: React.FC<ProductOptionsModalProps> = ({
  modalRef,
  setShowEditProductModal,
}) => {
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
        onClick={() => {
          setShowEditProductModal(true)
        }}
      >
        <h6 className='w-full py-2 text-gray-600 tracking-wide text-center rounded-md hover:bg-gray-100'>
          Desativar
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
