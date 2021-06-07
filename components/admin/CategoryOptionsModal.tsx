import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react'
import {
  BasicCategoryInfoFragment,
  useSetAsHeaderMutation,
} from '../../lib/generated/graphql'

interface CategoryOptionsModalProps {
  modalRef: MutableRefObject<HTMLDivElement>
  category: BasicCategoryInfoFragment
  setShowCategoryOptionsModal: Dispatch<SetStateAction<boolean>>
  setShowEditCategoryModal: Dispatch<SetStateAction<boolean>>
  setShowDeleteCategoryModal: Dispatch<SetStateAction<boolean>>
}

export const CategoryOptionsModal: React.FC<CategoryOptionsModalProps> = ({
  modalRef,
  category,
  setShowCategoryOptionsModal,
  setShowEditCategoryModal,
  setShowDeleteCategoryModal,
}) => {
  const [setAsHeader] = useSetAsHeaderMutation({
    errorPolicy: 'all',
    variables: { whereId: category.id },
  })

  useEffect(() => {
    console.log('header: ', category.header)
  }, [])

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
        onClick={async () => {
          await setAsHeader({
            update: (cache) => {
              cache.evict({ fieldName: 'categories' })
            },
          })
          setShowCategoryOptionsModal(false)
        }}
      >
        <h6 className='w-full py-2 text-green-dark tracking-wide text-center rounded-md hover:bg-green-extraLight'>
          Destacar
        </h6>
      </button>
      <button
        className='flex w-full'
        type='button'
        onClick={() => {
          setShowDeleteCategoryModal(true)
        }}
      >
        <h6 className='w-full py-2 text-red-500 tracking-wide text-center rounded-md hover:bg-red-100'>
          Eliminar
        </h6>
      </button>
    </div>
  )
}
