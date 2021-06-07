import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { useApolloClient } from '@apollo/client'
import { Form, Formik } from 'formik'
import { motion } from 'framer-motion'

import { X } from '../svg/X'
import { InputField } from '../InputField'
import { useDeleteUserMutation, MeQuery } from '../../lib/generated/graphql'
import { backdrop, scaleUp } from '../../utils/animations'
import { useRouter } from 'next/router'

interface DeleteUserModalProps {
  data: MeQuery
  setShowDeleteModal: Dispatch<SetStateAction<boolean>>
  deleteUserModalNode: MutableRefObject<HTMLFormElement>
}

export const DeleteUserModal: React.FC<DeleteUserModalProps> = ({
  data,
  setShowDeleteModal,
  deleteUserModalNode,
}) => {
  const router = useRouter()

  const apolloClient = useApolloClient()

  const [deleteUser] = useDeleteUserMutation({
    errorPolicy: 'all',
  })

  return (
      <motion.div
        className='fixed overflow-y-scroll top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[10] scrollbar-thin'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={backdrop}
      >
        <motion.div variants={scaleUp} className='flex py-4 h-[100vh]'>
          <Formik
            initialValues={{
              password: '',
            }}
            onSubmit={async ({ password }, { setErrors }) => {
              const response = await deleteUser({
                variables: { password },
                update: (cache) => {
                  cache.evict({fieldName: 'me'})
                }
              })

              if (response.errors) {
                return setErrors({ password: response.errors[0].message })
              } else if (response.data?.deleteUser) {
                await apolloClient.clearStore()
                router.push('/login')
              }

              setShowDeleteModal(false)
            }}
          >
            <Form
              ref={deleteUserModalNode}
              className='relative flex flex-col max-w-4xl w-[95%] max-h-[90vh] m-auto rounded-md shadow-md bg-white'
            >
              <div className='sticky top-0 flex py-2 px-2 border-b'>
                <h4 className='ml-2 font-thin tracking-widest text-green-dark text-xl'>
                  Eliminar conta
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
                  Tem a certeza que quer eliminar a conta?
                </h4>
                <InputField
                  name='password'
                  label='Password'
                  type='password'
                  labelStyling='ml-3 text-green-medium tracking-wider'
                  inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                  errorStyling='absolute top-12 text-center max-w-xs lg:max-w-xl w-full rounded-md py-1 text-red-800 bg-red-200 transform left-[50%] translate-x-[-50%]'
                  showLabel={!data?.me?.facebookId && !data?.me?.googleId}
                  hidden={
                    data?.me?.facebookId || data?.me?.googleId ? true : false
                  }
                />
              </div>
              <div className='flex py-3 border-t'>
                <button
                  className='flex w-[8rem] mx-auto px-4 py-2 rounded-md shadow-md bg-red-100 hover:opacity-80'
                  type='submit'
                >
                  <p className='mx-auto text-lg text-red-500 tracking-widest'>
                    Eliminar
                  </p>
                </button>
              </div>
            </Form>
          </Formik>
        </motion.div>
      </motion.div>
  )
}
