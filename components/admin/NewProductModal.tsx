import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
// import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'
import { AnimatePresence, motion } from 'framer-motion'

import { backdrop, scaleUp } from '../../utils/animations'
import { useNewProductMutation } from '../../lib/generated/graphql'
import { X } from '../svg/X'

interface NewProductModalProps {
  showProductModal: boolean
  setShowProductModal: Dispatch<SetStateAction<boolean>>
}

export const NewProductModal: React.FC<NewProductModalProps> = ({
  showProductModal,
  setShowProductModal,
}) => {
  const [uploadedImages, setUploadedImages] = useState<{ public_id: string }[]>(
    []
  )

  console.log(setUploadedImages)

  const [newProduct] = useNewProductMutation({ errorPolicy: 'all' })

  // const router = useRouter()

  const productModalNode = useRef<HTMLFormElement | null>(null)

  const productModalClick = (e: any) => {
    if (
      productModalNode.current &&
      productModalNode.current.contains(e.target)
    ) {
      return
    }

    setShowProductModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', productModalClick)

    return () => {
      document.removeEventListener('mousedown', productModalClick)
    }
  })

  return (
    <AnimatePresence exitBeforeEnter>
      {showProductModal && (
        <motion.div
          className='fixed overflow-y-scroll top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[10] scrollbar-thin'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={backdrop}
        >
          <Formik
            initialValues={{
              name: '',
              description: '',
              images: [''],
              price: 0.0,
              stock: 0,
              categories: [''],
            }}
            onSubmit={async (
              { name, description, images, price, stock, categories },
              { setErrors }
            ) => {
              images = uploadedImages.map((images) => images.public_id)

              const response = await newProduct({
                variables: {
                  name,
                  description,
                  images,
                  price,
                  stock,
                  categories,
                },
                update: (cache) => {
                  cache.evict({ fieldName: 'products' })
                },
              })

              if (response.errors) {
                setErrors({ name: response.errors[0].message })
              } else if (response.data?.createProduct) {
                setShowProductModal(false)
              }
            }}
          >
            <motion.div variants={scaleUp} className='flex h-[90vh]'>
              <Form
                ref={productModalNode}
                className='flex flex-col max-w-4xl h-48 w-[95%] m-auto pb-6 rounded-md shadow-md bg-white'
              >
                <button
                  className='ml-auto mr-2'
                  type='button'
                  onClick={() => {
                    setShowProductModal(false)
                  }}
                >
                  <X tailwind='h-6 mt-2 text-green-dark' />
                </button>
              </Form>
            </motion.div>
          </Formik>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
