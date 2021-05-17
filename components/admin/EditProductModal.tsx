import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Form, Formik } from 'formik'
import { AnimatePresence, motion } from 'framer-motion'

import { ImageUpload } from './ImageUpload'
import { InputField } from '../InputField'
import { Textarea } from '../Textarea'
import { X } from '../svg/X'
import {
  BasicProductInfoFragment,
  useEditProductMutation,
} from '../../lib/generated/graphql'
import { backdrop, scaleUp } from '../../utils/animations'
import { Plus } from '../svg/Plus'
import { Image, Placeholder } from 'cloudinary-react'

interface EditProductModalProps {
  product: BasicProductInfoFragment
  showProductModal: boolean
  setShowProductModal: Dispatch<SetStateAction<boolean>>
}

export const EditProductModal: React.FC<EditProductModalProps> = ({
  product,
  showProductModal,
  setShowProductModal,
}) => {
  const [newCategory, setNewCategory] = useState<string>('')
  const [chosenCategories, setChosenCategories] = useState(
    product.categories.map((category) => category.name)
  )

  let productImageIds: { public_id: string }[] = []

  product.images.map((image) => productImageIds.push({ public_id: image }))

  const [uploadedImages, setUploadedImages] =
    useState<{ public_id: string }[]>(productImageIds)

  const [editProduct] = useEditProductMutation({ errorPolicy: 'all' })

  const editProductModalNode = useRef<HTMLFormElement | null>(null)

  const editProductModalClick = (e: any) => {
    if (
      editProductModalNode.current &&
      editProductModalNode.current.contains(e.target)
    ) {
      return
    }

    setShowProductModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', editProductModalClick)

    return () => {
      document.removeEventListener('mousedown', editProductModalClick)
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
              name: product.name,
              description: product.description,
              images: [''],
              price: product.price,
              stock: product.stock,
              categories: [''],
              height: product.height ? product.height : '',
              water: product.water ? product.water : '',
              exposure: product.exposure ? product.exposure : '',
              temperature: product.temperature ? product.temperature : '',
              lifespan: product.lifespan ? product.lifespan : '',
            }}
            onSubmit={async (
              {
                name,
                description,
                images,
                price,
                stock,
                categories,
                height,
                water,
                exposure,
                temperature,
                lifespan,
              },
              { setErrors }
            ) => {
              categories = chosenCategories.map((category) => category)
              images = uploadedImages.map((image) => image.public_id)

              const response = await editProduct({
                variables: {
                  whereId: product.id,
                  name: name.length > 0 ? name : null,
                  description: description.length > 0 ? description : null,
                  images,
                  price,
                  stock,
                  categories,
                  height: height.length > 0 ? height : null,
                  water: water.length > 0 ? water : null,
                  exposure: exposure.length > 0 ? exposure : null,
                  temperature: temperature.length > 0 ? temperature : null,
                  lifespan: lifespan.length > 0 ? lifespan : null,
                },
                update: (cache) => {
                  cache.evict({ fieldName: 'products' })
                },
              })

              if (response.errors) {
                setErrors({ name: response.errors[0].message })
              } else if (response.data?.editProduct) {
                setShowProductModal(false)
                setUploadedImages([])
                setChosenCategories([])
              }
            }}
          >
            <motion.div variants={scaleUp} className='flex py-4 h-[100vh]'>
              <Form
                ref={editProductModalNode}
                className='relative flex flex-col max-w-4xl w-[95%] max-h-[90vh] m-auto rounded-md shadow-md bg-white'
              >
                <div className='sticky top-0 flex py-2 px-2 border-b'>
                  <h4 className='ml-2 font-thin tracking-widest text-green-dark text-xl'>
                    Editar produto
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
                <div className='flex flex-col w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-green-medium'>
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
                      <Textarea
                        name='description'
                        placeholder='ex: Ramo de 20 rosas vermelhas em um arranjo ideal para despertar emoção.'
                        label='Descrição'
                        type='text'
                        maxLength={250}
                        labelStyling='mt-6 ml-3 text-green-medium tracking-wider'
                        textareaStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                    </div>
                    <div className='flex lg:flex-col w-full lg:w-[50%] mt-6 lg:mt-4'>
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
                        labelStyling='lg:mt-6 ml-3 text-green-medium tracking-wider'
                        inputStyling='mt-1 ml-2 lg:ml-0 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-[95%] lg:w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col lg:flex-row mx-auto w-[90%]'>
                    <div className='flex w-full lg:w-[35%]'>
                      <InputField
                        name='category'
                        placeholder='ex: rosas'
                        label='Adicionar categoria'
                        type='text'
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        labelStyling='mt-6 ml-3 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                      <button
                        className='flex ml-4 mb-1 lg:mb-0 lg:mt-[3.3rem] p-2 self-end lg:self-start bg-green-extraLight rounded-md shadow-md'
                        type='button'
                        onClick={() => {
                          if (
                            !chosenCategories.includes(
                              newCategory.toUpperCase()
                            )
                          ) {
                            setChosenCategories((prev) => [
                              ...prev,
                              newCategory.toUpperCase(),
                            ])
                          }
                          setNewCategory('')
                        }}
                      >
                        <Plus tailwind='h-6 text-green-dark' strokeWidth={2} />
                      </button>
                    </div>
                    <div className='flex flex-wrap min-h-[6.8rem] mt-6 w-full lg:w-[60%] ml-auto border rounded-md shadow-sm'>
                      {chosenCategories.map((category) => (
                        <div
                          key={category}
                          className='flex h-9 py-1 m-2 px-3 bg-green-extraLight rounded-md'
                        >
                          <p className='text-lg font-thin text-green-dark tracking-wider'>
                            {category}
                          </p>
                          <button
                            onClick={() => {
                              setChosenCategories((prev) => [
                                ...prev.filter((chosen) => chosen !== category),
                              ])
                            }}
                            type='button'
                            className='flex self-center ml-2 rounded-full h-6 w-6 bg-green-medium bg-opacity-20'
                          >
                            <X tailwind='self-center mx-auto h-4 text-green-dark' />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex flex-col mx-auto w-[90%] mt-10'>
                    <div>
                      <p className='ml-3 text-green-medium tracking-wider'>
                        Características do produto (opcionais)
                      </p>
                      <p className='ml-3 text-sm text-green-medium'>
                        (Recomendado adicionar pelo menos 3 e usar texto curto
                        para melhor apresentação)
                      </p>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:flex-wrap w-full mt-4'>
                      <InputField
                        name='height'
                        placeholder='ex: 40 cm'
                        label='Comprimento'
                        type='text'
                        maxLength={20}
                        labelStyling='ml-3 mt-4 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                      <InputField
                        name='water'
                        placeholder='ex: 200 ml por dia'
                        label='Àgua'
                        type='text'
                        maxLength={20}
                        labelStyling='ml-3 mt-4 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                      <InputField
                        name='exposure'
                        placeholder='ex: sombra'
                        label='Exposição'
                        type='text'
                        maxLength={20}
                        labelStyling='ml-3 mt-4 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                      <InputField
                        name='temperature'
                        placeholder='ex: 15-20 ºC'
                        label='Temperatura'
                        type='text'
                        maxLength={20}
                        labelStyling='ml-3 mt-4 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                      <InputField
                        name='lifespan'
                        placeholder='ex: 2-3 semanas'
                        label='Duração'
                        type='text'
                        maxLength={20}
                        labelStyling='ml-3 mt-4 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                    </div>
                  </div>
                  <div className='flex mx-auto w-[90%] mt-10'>
                    <div className='flex flex-col'>
                      <p className=' ml-3 text-green-medium tracking-wider'>
                        Adicionar Imagens
                      </p>
                      <p className='ml-3 text-sm self-center text-green-medium tracking-wide'>
                        (Utilizar apenas imagens verticais (3:2))
                      </p>
                    </div>
                    <ImageUpload setUploadedImages={setUploadedImages} />
                  </div>
                  <ul className='flex flex-wrap mx-auto w-[90%] mt-3 mb-6 border rounded-md shadow-sm '>
                    <div className='h-[13rem]'></div>
                    {uploadedImages.map((image) => (
                      <li
                        className='relative rounded-md mx-auto lg:mx-2 overflow-hidden m-2 h-[12rem] w-[8rem]'
                        key={image.public_id}
                      >
                        <button
                          type='button'
                          onClick={() => {
                            setUploadedImages(
                              uploadedImages.filter(
                                (uploaded) =>
                                  uploaded.public_id !== image.public_id
                              )
                            )
                          }}
                          className='absolute rounded-full bg-green-medium p-1 bg-opacity-20 right-2 top-2'
                        >
                          <X tailwind='self-center mx-auto h-4 text-green-dark' />
                        </button>
                        <Image
                          cloudName={
                            process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                          }
                          publicId={image.public_id}
                          height={300}
                          width={200}
                          crop='fill'
                          secure={true}
                        >
                          <Placeholder type='blur'></Placeholder>
                        </Image>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex py-3 border-t'>
                  <button
                    className='flex w-[8rem] mx-auto px-4 py-2 rounded-md shadow-md bg-green-extraLight'
                    type='submit'
                    disabled={uploadedImages.length === 0}
                    title={
                      uploadedImages.length === 0
                        ? 'adicione pelo menos uma imagem!'
                        : undefined
                    }
                  >
                    <p className='mx-auto text-lg text-green-dark tracking-widest'>
                      Editar!
                    </p>
                  </button>
                </div>
              </Form>
            </motion.div>
          </Formik>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
