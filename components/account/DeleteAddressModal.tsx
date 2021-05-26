import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { X } from '../svg/X'
import {
  BasicAddressInfoFragment,
  useDeleteAddressMutation,
} from '../../lib/generated/graphql'
import { backdrop, scaleUp } from '../../utils/animations'

interface DeleteAddressModalProps {
  address: BasicAddressInfoFragment
  showDeleteModal: boolean
  setShowDeleteModal: Dispatch<SetStateAction<boolean>>
}

export const DeleteAddressModal: React.FC<DeleteAddressModalProps> = ({
  address,
  showDeleteModal,
  setShowDeleteModal,
}) => {
  const [deleteAddress] = useDeleteAddressMutation({
    errorPolicy: 'all',
    variables: { whereId: address.id },
  })

  const deleteAddressModalNode = useRef<HTMLDivElement | null>(null)

  const deleteAddressModalClick = (e: any) => {
    if (
      deleteAddressModalNode.current &&
      deleteAddressModalNode.current.contains(e.target)
    ) {
      return
    }

    setShowDeleteModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', deleteAddressModalClick)

    return () => {
      document.removeEventListener('mousedown', deleteAddressModalClick)
    }
  })

  return (
    <AnimatePresence exitBeforeEnter>
      {showDeleteModal && (
        <motion.div
          className='fixed overflow-y-scroll top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[10] scrollbar-thin'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={backdrop}
        >
          <motion.div variants={scaleUp} className='flex py-4 h-[100vh]'>
            <div
              ref={deleteAddressModalNode}
              className='relative flex flex-col max-w-4xl w-[95%] max-h-[90vh] m-auto rounded-md shadow-md bg-white'
            >
              <div className='sticky top-0 flex py-2 px-2 border-b'>
                <h4 className='ml-2 font-thin tracking-widest text-green-dark text-xl'>
                  Eliminar morada
                </h4>
                <button
                  className='ml-auto'
                  type='button'
                  onClick={() => {
                    setShowDeleteModal(false)
                  }}
                >
                  <X tailwind='h-6 text-green-dark' />
                </button>
              </div>
              <div className='flex flex-col w-full px-2 py-8'>
                <h4 className='mb-4 text-2xl font-thin text-center text-green-dark tracking-wide'>
                  Tem a certeza que quer eliminar:
                </h4>
                <h4 className='text-xl text-center text-green-dark tracking-wide'>
                  {address.street}, {address.numberAndBlock}
                </h4>
              </div>
              <div className='flex py-3 border-t'>
                <button
                  className='flex w-[8rem] mx-auto px-4 py-2 rounded-md shadow-md bg-red-100'
                  type='button'
                  onClick={async () => {
                    await deleteAddress({
                      update: (cache) => {
                        cache.evict({ fieldName: 'me' })
                      },
                    })
                    setShowDeleteModal(false)
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
