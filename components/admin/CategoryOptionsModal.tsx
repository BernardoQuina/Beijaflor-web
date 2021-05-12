import { Dispatch, MutableRefObject, SetStateAction } from 'react'

interface CategoryOptionsModalProps {
  modalRef: MutableRefObject<HTMLDivElement>
  setShowEditCategoryModal: Dispatch<SetStateAction<boolean>>
}

export const CategoryOptionsModal: React.FC<CategoryOptionsModalProps> = ({
  modalRef,
  setShowEditCategoryModal,
}) => {
  return (
    <div
      ref={modalRef}
      className='absolute z-[1] py-2 px-2 w-[10rem] top-[4.2rem] right-14 lg:right-10 rounded-md shadow-around bg-white'
    >
      <button
        className='flex w-full'
        type='button'
        onClick={() => {
          setShowEditCategoryModal(true)
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
          setShowEditCategoryModal(true)
        }}
      >
        <h6 className='w-full py-2 text-red-500 tracking-wide text-center rounded-md hover:bg-red-100'>
          Eliminar
        </h6>
      </button>
    </div>
  )
}
