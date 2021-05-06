import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
// import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'
import { AnimatePresence, motion } from 'framer-motion'

import { InputField } from '../InputField'
import { X } from '../svg/X'
import { useNewProductMutation } from '../../lib/generated/graphql'
import { backdrop, scaleUp } from '../../utils/animations'
import { TextAreaField } from '../TextareaField'

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
                className='flex flex-col max-w-4xl  w-[95%] m-auto pb-6 rounded-md shadow-md bg-white'
              >
                <div className='flex my-2 pb-2 px-2 border-b'>
                  <h4 className='ml-2 font-thin tracking-widest text-green-dark text-xl'>
                    Criar novo produto
                  </h4>
                  <button
                    className='ml-auto'
                    type='button'
                    onClick={() => {
                      setShowProductModal(false)
                    }}
                  >
                    <X tailwind='h-6 text-green-dark' />
                  </button>
                </div>
                <div className='flex flex-col lg:flex-row w-[90%] mx-auto'>
                  <div className='w-full mt-4 lg:mr-10'>
                    <InputField
                      name='name'
                      placeholder='ex: Ramo de rosas'
                      label='Nome'
                      type='text'
                      labelStyling='ml-3 text-green-medium tracking-wider'
                      inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                      errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                    />
                    <TextAreaField
                      name='description'
                      placeholder='ex: Ramo de 20 rosas vermelhas em um arranjo ideal para despertar emoção.'
                      label='Descrição'
                      type='text'
                      labelStyling='mt-4 ml-3 text-green-medium tracking-wider'
                      textareaStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                      errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                    />
                  </div>
                  <div className='flex lg:flex-col w-full lg:w-[50%] mt-4'>
                    <InputField
                      name='price'
                      placeholder='ex: 9.99'
                      label='Preço (€)'
                      type='number'
                      step='0.01'
                      min='0'
                      pattern='^\d*(\.\d{0,2})?$'
                      labelStyling='ml-3 text-green-medium tracking-wider'
                      inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-[95%] lg:w-full tracking-wider font-thin text-lg'
                      errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                    />
                    <InputField
                      name='stock'
                      placeholder='ex: 15'
                      label='Stock'
                      type='number'
                      step='1'
                      min='0'
                      pattern='^\d*(\.\d{0,2})?$'
                      labelStyling='lg:mt-4 ml-3 text-green-medium tracking-wider'
                      inputStyling='mt-1 ml-2 lg:ml-0 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-[95%] lg:w-full tracking-wider font-thin text-lg'
                      errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                    />
                  </div>
                  
                </div>
              </Form>
            </motion.div>
          </Formik>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
