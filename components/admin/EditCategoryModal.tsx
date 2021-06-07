import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Form, Formik } from 'formik'
import { AnimatePresence, motion } from 'framer-motion'

import { ImageUpload } from './ImageUpload'
import { InputField } from '../InputField'
import { X } from '../svg/X'
import {
  MainCategory,
  SubCategory,
  BasicCategoryInfoFragment,
  useEditCategoryMutation,
} from '../../lib/generated/graphql'
import { backdrop, scaleUp } from '../../utils/animations'
import { Image, Placeholder } from 'cloudinary-react'

interface EditCategoryModalProps {
  category: BasicCategoryInfoFragment
  showCategoryModal: boolean
  setShowCategoryModal: Dispatch<SetStateAction<boolean>>
}

export const EditCategoryModal: React.FC<EditCategoryModalProps> = ({
  category,
  showCategoryModal,
  setShowCategoryModal,
}) => {
  const [selectedMain, setSelectedMain] = useState(category.mainCategory)
  const [selectedSub, setSelectedSub] = useState(category.subCategory)

  let categoryImageId: { public_id: string }[] = []

  categoryImageId.push({ public_id: category.image })

  const [uploadedImages, setUploadedImages] =
    useState<{ public_id: string }[]>(categoryImageId)

  const [editCategory] = useEditCategoryMutation({ errorPolicy: 'all' })

  const categoryModalNode = useRef<HTMLFormElement | null>(null)

  const categoryModalClick = (e: any) => {
    if (
      categoryModalNode.current &&
      categoryModalNode.current.contains(e.target)
    ) {
      return
    }

    setShowCategoryModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', categoryModalClick)

    return () => {
      document.removeEventListener('mousedown', categoryModalClick)
    }
  })

  useEffect(() => {
    if (uploadedImages.length > 1) {
      setUploadedImages([uploadedImages[1]])
    }
  }, [uploadedImages])

  return (
    <AnimatePresence exitBeforeEnter>
      {showCategoryModal && (
        <motion.div
          className='fixed overflow-y-scroll top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[10] scrollbar-thin'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={backdrop}
        >
          <Formik
            initialValues={{
              mainCategory: category.mainCategory,
              subCategory: category.subCategory,
              name: category.name,
              image: '',
            }}
            onSubmit={async ({ name, image }, { setErrors }) => {
              image = uploadedImages[0].public_id

              const response = await editCategory({
                variables: {
                  whereId: category.id,
                  mainCategory: selectedMain,
                  subCategory: selectedSub,
                  name: name.toUpperCase(),
                  image,
                },
                update: (cache) => {
                  cache.evict({ fieldName: 'categories' })
                },
              })

              if (response.errors) {
                setErrors({ name: response.errors[0].message })
              } else if (response.data?.editCategory) {
                setShowCategoryModal(false)
              }
            }}
          >
            <motion.div variants={scaleUp} className='flex py-4 h-[100vh]'>
              <Form
                ref={categoryModalNode}
                className='relative flex flex-col max-w-4xl w-[95%] h-[90vh] max-h-[36rem] m-auto rounded-md shadow-md bg-white'
              >
                <div className='sticky top-0 flex py-2 px-2 border-b'>
                  <h4 className='ml-2 font-thin tracking-widest text-green-dark text-xl'>
                    Editar categoria
                  </h4>
                  <button
                    className='ml-auto'
                    type='button'
                    onClick={() => {
                      setShowCategoryModal(false)
                    }}
                  >
                    <X tailwind='h-6 text-green-dark' />
                  </button>
                </div>
                <div className='flex flex-col lg:flex-row w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-green-medium'>
                  <div className='flex flex-col w-[90%] lg:w-[50%] mx-auto lg:mt-8'>
                    <div className='flex flex-col mx-auto w-full lg:w-[80%] mt-6 lg:mt-4'>
                      <label className='ml-3 text-green-medium tracking-wider'>
                        Categoria Principal
                      </label>
                      <select
                        className='mt-1 pl-4 pt-2 pb-3 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        name='MainCategory'
                        value={selectedMain}
                        onChange={(e) =>
                          setSelectedMain(e.target.value as MainCategory)
                        }
                      >
                        <option value={MainCategory.Flores}>Flores</option>
                        <option value={MainCategory.Plantas}>Plantas</option>
                        <option value={MainCategory.Acessorios}>
                          Acessórios
                        </option>
                        <option value={MainCategory.Ocasiao}>Ocasião</option>
                      </select>
                    </div>
                    <div className='flex flex-col w-full mx-auto lg:w-[80%] mt-10'>
                      <label className='ml-3 text-green-medium tracking-wider'>
                        SubCategoria
                      </label>
                      <select
                        className='mt-1 pl-4 pt-2 pb-3 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        name='MainCategory'
                        value={selectedSub}
                        onChange={(e) =>
                          setSelectedSub(e.target.value as SubCategory)
                        }
                      >
                        {selectedMain === MainCategory.Flores ? (
                          <>
                            <option value={SubCategory.TiposFlores}>tipos</option>
                            <option value={SubCategory.Arranjos}>
                              arranjos
                            </option>
                            <option value={SubCategory.Cores}>cores</option>
                            <option value={SubCategory.Estacao}>estação</option>
                          </>
                        ) : selectedMain === MainCategory.Plantas ? (
                          <>
                            <option value={SubCategory.TiposPlantas}>tipos</option>
                            <option value={SubCategory.Local}>local</option>
                            <option value={SubCategory.Caracteristicas}>
                              características
                            </option>
                          </>
                        ) : selectedMain === MainCategory.Acessorios ? (
                          <>
                            <option value={SubCategory.Vasos}>vasos</option>
                            <option value={SubCategory.Outros}>outros</option>
                          </>
                        ) : selectedMain === MainCategory.Ocasiao ? (
                          <>
                            <option value={SubCategory.Calendario}>
                              calendário
                            </option>
                            <option value={SubCategory.MomentosEspeciais}>
                              momentos especiais
                            </option>
                            <option value={SubCategory.Cerimonias}>
                              cerimónias
                            </option>
                          </>
                        ) : null}
                      </select>
                    </div>
                    <div className='w-full lg:w-[80%] mx-auto mt-10 lg:mr-10'>
                      <InputField
                        name='name'
                        placeholder='ex: rosas'
                        label='Nome'
                        type='text'
                        labelStyling='ml-3 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col mt-10 lg:mt-8 mb-6'>
                    <div className='flex mx-auto w-[90%] lg:w-[75%]'>
                      <div className='flex flex-col'>
                        <p className=' ml-3 text-green-medium tracking-wider'>
                          Adicionar Imagem
                        </p>
                        <p className='ml-3 text-sm self-center text-green-medium tracking-wide'>
                          (Utilizar apenas UMA imagem vertical (3:2))
                        </p>
                      </div>
                      <ImageUpload setUploadedImages={setUploadedImages} />
                    </div>
                    <ul className='flex flex-wrap mx-auto w-[70%] lg:w-[50%] mt-3 mb-6 border rounded-md shadow-sm '>
                      <div className='h-[20rem]'></div>
                      {uploadedImages[0] && (
                        <li
                          className='relative rounded-md m-auto overflow-hidden h-[18rem] w-[12rem]'
                          key={uploadedImages[0].public_id}
                        >
                          <button
                            type='button'
                            onClick={() => {
                              setUploadedImages([])
                            }}
                            className='absolute rounded-full bg-green-medium p-1 bg-opacity-20 right-2 top-2'
                          >
                            <X tailwind='self-center mx-auto h-4 text-green-dark' />
                          </button>
                          <Image
                            cloudName={
                              process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                            }
                            publicId={uploadedImages[0].public_id}
                            height={600}
                            width={400}
                            crop='fill'
                            secure={true}
                          >
                            <Placeholder type='blur'></Placeholder>
                          </Image>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className='flex py-3 border-t'>
                  <button
                    className='flex w-[8rem] mx-auto px-4 py-2 rounded-md shadow-md bg-green-extraLight hover:opacity-80'
                    type='submit'
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
