import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { X } from '../svg/X'
import {
  BasicProductInfoFragment,
  useDeleteProductMutation,
} from '../../lib/generated/graphql'
import { backdrop, scaleUp } from '../../utils/animations'

interface DeleteProductModalProps {
  product: BasicProductInfoFragment
  showDeleteProductModal: boolean
  setShowDeleteProductModal: Dispatch<SetStateAction<boolean>>
}

export const DeleteProductModal: React.FC<DeleteProductModalProps> = ({
  product,
  showDeleteProductModal,
  setShowDeleteProductModal,
}) => {
  const [deleteProduct] = useDeleteProductMutation({
    errorPolicy: 'all',
    variables: { whereId: product.id },
  })

  const deleteProductModalNode = useRef<HTMLDivElement | null>(null)

  const deleteProductModalClick = (e: any) => {
    if (
      deleteProductModalNode.current &&
      deleteProductModalNode.current.contains(e.target)
    ) {
      return
    }

    setShowDeleteProductModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', deleteProductModalClick)

    return () => {
      document.removeEventListener('mousedown', deleteProductModalClick)
    }
  })

  return (
    <AnimatePresence exitBeforeEnter>
      {showDeleteProductModal && (
        <motion.div
          className='fixed overflow-y-scroll top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[10] scrollbar-thin'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={backdrop}
        >
          <motion.div variants={scaleUp} className='flex py-4 h-[100vh]'>
            <div
              ref={deleteProductModalNode}
              className='relative flex flex-col max-w-4xl w-[95%] max-h-[90vh] m-auto rounded-md shadow-md bg-white'
            >
              <div className='sticky top-0 flex py-2 px-2 border-b'>
                <h4 className='ml-2 font-thin tracking-widest text-green-dark text-xl'>
                  Eliminar produto
                </h4>
                <button
                  className='ml-auto'
                  type='button'
                  onClick={() => {
                    setShowDeleteProductModal(false)
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
                  {product.name}
                </h4>
              </div>
              <div className='flex py-3 border-t'>
                <button
                  className='flex w-[8rem] mx-auto px-4 py-2 rounded-md shadow-md bg-red-100'
                  type='button'
                  onClick={async () => {
                    await deleteProduct({
                      update: (cache) => {
                        cache.evict({ fieldName: 'products' })
                      },
                    })
                    setShowDeleteProductModal(false)
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
