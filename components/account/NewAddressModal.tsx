import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { Form, Formik } from 'formik'
import { AnimatePresence, motion } from 'framer-motion'

import { InputField } from '../InputField'
import { X } from '../svg/X'
import { useCreateAddressMutation } from '../../lib/generated/graphql'
import { backdrop, scaleUp } from '../../utils/animations'

interface NewAddressModalProps {
  showAddressModal: boolean
  setShowAddressModal: Dispatch<SetStateAction<boolean>>
}

export const NewAddressModal: React.FC<NewAddressModalProps> = ({
  showAddressModal,
  setShowAddressModal,
}) => {
  const [newAddress] = useCreateAddressMutation({ errorPolicy: 'all' })

  const addressModalNode = useRef<HTMLFormElement | null>(null)

  const addressModalClick = (e: any) => {
    if (
      addressModalNode.current &&
      addressModalNode.current.contains(e.target)
    ) {
      return
    }

    setShowAddressModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', addressModalClick)

    return () => {
      document.removeEventListener('mousedown', addressModalClick)
    }
  })

  return (
    <AnimatePresence exitBeforeEnter>
      {showAddressModal && (
        <motion.div
          className='fixed overflow-y-scroll top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[10] scrollbar-thin'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={backdrop}
        >
          <Formik
            initialValues={{
              completeName: '',
              country: 'Portugal',
              street: '',
              numberAndBlock: '',
              zone: '',
              region: '',
              postal: '',
              contact: '',
              instructions: '',
            }}
            onSubmit={async (
              {
                completeName,
                country,
                street,
                numberAndBlock,
                zone,
                region,
                postal,
                contact,
                instructions,
              },
              { setErrors }
            ) => {
              const response = await newAddress({
                variables: {
                  completeName,
                  country,
                  street,
                  numberAndBlock,
                  zone,
                  region,
                  postal,
                  contact,
                  instructions: instructions !== '' ? instructions : null,
                },
                update: (cache) => {
                  cache.evict({ fieldName: 'me' })
                },
              })

              if (response.errors) {
                setErrors({ completeName: response.errors[0].message })
              } else if (response.data?.createAddress) {
                setShowAddressModal(false)
              }
            }}
          >
            <motion.div variants={scaleUp} className='flex py-4 h-[100vh]'>
              <Form
                ref={addressModalNode}
                className='relative flex flex-col max-w-2xl w-[95%] max-h-[90vh] m-auto rounded-md shadow-md bg-white'
              >
                <div className='sticky top-0 flex py-2 px-2 border-b'>
                  <h4 className='ml-2 font-thin tracking-widest text-green-dark text-xl'>
                    Criar nova morada
                  </h4>
                  <button
                    className='ml-auto'
                    type='button'
                    onClick={() => {
                      setShowAddressModal(false)
                    }}
                  >
                    <X tailwind='h-6 text-green-dark' />
                  </button>
                </div>
                <div className='flex flex-col w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-green-medium'>
                  <div className='flex flex-col lg:flex-row w-[90%] mx-auto'>
                    <div className='w-full my-10'>
                      <InputField
                        name='completeName'
                        placeholder='ex: Maria Ferreira Silva'
                        label='Nome completo (Nome e Sobrenome)'
                        type='text'
                        labelStyling='ml-3 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='absolute bottom-20 text-center max-w-xs lg:max-w-xl w-full rounded-md py-1 text-red-800 bg-red-200 transform left-[50%] translate-x-[-50%]'
                      />
                      <InputField
                        name='country'
                        placeholder='ex: Portugal'
                        label='Pa??s (de momento dispon??vel apenas em Portugal)'
                        type='text'
                        labelStyling='mt-6 ml-3 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                        disabled={true}
                      />
                      <InputField
                        name='street'
                        placeholder='ex: Rua Alegre, Av. da Liberdade'
                        label='Morada'
                        type='text'
                        labelStyling='mt-6 ml-3 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                      <InputField
                        name='numberAndBlock'
                        placeholder='ex: n??7, 4?? Dto.'
                        label='N?? da porta (e lote/andar)'
                        type='text'
                        labelStyling='mt-6 ml-3 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                      <InputField
                        name='zone'
                        placeholder='ex: Lisboa'
                        label='Localidade'
                        type='text'
                        labelStyling='mt-6 ml-3 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                      <InputField
                        name='region'
                        placeholder='ex: Lisboa'
                        label='Distrito'
                        type='text'
                        labelStyling='mt-6 ml-3 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                      <InputField
                        name='postal'
                        placeholder='ex: 1200-120'
                        label='C??digo postal'
                        type='text'
                        labelStyling='mt-6 ml-3 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                      <InputField
                        name='contact'
                        placeholder='ex: +351 919191919'
                        label='Contacto'
                        type='text'
                        labelStyling='mt-6 ml-3 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                      <InputField
                        name='instructions'
                        placeholder='ex: N??o na porta, mas no port??o / campainha avariada'
                        label='Instru????es de entrega (opcional)'
                        type='text'
                        labelStyling='mt-6 ml-3 text-green-medium tracking-wider'
                        inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                        errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex py-3 border-t'>
                  <button
                    className='flex w-[8rem] mx-auto px-4 py-2 rounded-md shadow-md bg-green-extraLight hover:opacity-80'
                    type='submit'
                  >
                    <p className='mx-auto text-lg text-green-dark tracking-widest'>
                      Criar!
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
