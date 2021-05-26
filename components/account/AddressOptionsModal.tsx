import { Dispatch, MutableRefObject, SetStateAction } from 'react'

interface AddressOptionsModalProps {
  modalRef: MutableRefObject<HTMLDivElement>
  setShowEditModal: Dispatch<SetStateAction<boolean>>
  setShowDeleteModal: Dispatch<SetStateAction<boolean>>
}

export const AddressOptionsModal: React.FC<AddressOptionsModalProps> = ({
  modalRef,
  setShowEditModal,
  setShowDeleteModal,
}) => {
  return (
    <div
      ref={modalRef}
      className='absolute z-[1] py-2 px-2 w-[10rem] bottom-14 right-4 rounded-md shadow-around bg-white'
    >
      <button
        className='flex w-full'
        type='button'
        onClick={() => {
          setShowEditModal(true)
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
          setShowDeleteModal(true)
        }}
      >
        <h6 className='w-full py-2 text-red-500 tracking-wide text-center rounded-md hover:bg-red-100'>
          Eliminar
        </h6>
      </button>
    </div>
  )
}
