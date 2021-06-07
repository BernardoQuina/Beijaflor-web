import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { X } from '../svg/X'
import {
  BasicCategoryInfoFragment,
  useDeleteCategoryMutation,
} from '../../lib/generated/graphql'
import { backdrop, scaleUp } from '../../utils/animations'

interface DeleteCategoryModalProps {
  category: BasicCategoryInfoFragment
  showDeleteCategoryModal: boolean
  setShowDeleteCategoryModal: Dispatch<SetStateAction<boolean>>
}

export const DeleteCategoryModal: React.FC<DeleteCategoryModalProps> = ({
  category,
  showDeleteCategoryModal,
  setShowDeleteCategoryModal,
}) => {
  const [deleteCategory] = useDeleteCategoryMutation({
    errorPolicy: 'all',
    variables: { whereId: category.id },
  })

  const deleteCategoryModalNode = useRef<HTMLDivElement | null>(null)

  const deleteCategoryModalClick = (e: any) => {
    if (
      deleteCategoryModalNode.current &&
      deleteCategoryModalNode.current.contains(e.target)
    ) {
      return
    }

    setShowDeleteCategoryModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', deleteCategoryModalClick)

    return () => {
      document.removeEventListener('mousedown', deleteCategoryModalClick)
    }
  })

  return (
    <AnimatePresence exitBeforeEnter>
      {showDeleteCategoryModal && (
        <motion.div
          className='fixed overflow-y-scroll top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[10] scrollbar-thin'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={backdrop}
        >
          <motion.div variants={scaleUp} className='flex py-4 h-[100vh]'>
            <div
              ref={deleteCategoryModalNode}
              className='relative flex flex-col max-w-4xl w-[95%] max-h-[90vh] m-auto rounded-md shadow-md bg-white'
            >
              <div className='sticky top-0 flex py-2 px-2 border-b'>
                <h4 className='ml-2 font-thin tracking-widest text-green-dark text-xl'>
                  Eliminar categoria
                </h4>
                <button
                  className='ml-auto'
                  type='button'
                  onClick={() => {
                    setShowDeleteCategoryModal(false)
                  }}
                >
                  <X tailwind='h-6 text-green-dark' />
                </button>
              </div>
              <div className='flex flex-col w-full py-8'>
                <h4 className='mb-4 text-2xl font-thin text-center text-green-dark tracking-wide'>
                  Tem a certeza que quer eliminar:
                </h4>
                <h4 className='text-xl text-center text-green-dark tracking-wide'>
                  {category.name}
                </h4>
              </div>
              <div className='flex py-3 border-t'>
                <button
                  className='flex w-[8rem] mx-auto px-4 py-2 rounded-md shadow-md bg-red-100 hover:opacity-80'
                  type='button'
                  onClick={async () => {
                    await deleteCategory({
                      update: (cache) => {
                        cache.evict({ fieldName: 'categories' })
                      },
                    })
                    setShowDeleteCategoryModal(false)
                  }}
                >
                  <p className='mx-auto text-lg text-red-500 tracking-widest'>
                    Eliminar
                  </p>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
