import { useEffect, useState, useRef } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'

import { useEditUserMutation, useMeQuery } from '../../lib/generated/graphql'
import { Layout } from '../../components/Layout'
import { InputField } from '../../components/InputField'
import { ArrowDown } from '../../components/svg/ArrowDown'
import { useIsAuth } from '../../utils/useIsAuth'
import { isServer } from '../../utils/isServer'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeDown } from '../../utils/animations'
import { DeleteUserModal } from '../../components/account/DeleteUserModal'

interface definiçõesProps {}

const definições: NextPage<definiçõesProps> = ({}) => {
  const [successMessage, setSuccessMessage] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const router = useRouter()
  useIsAuth(true)

  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  const [editUser] = useEditUserMutation({ errorPolicy: 'all' })

  const deleteUserButtonNode = useRef<HTMLButtonElement | null>(null)
  const deleteUserModalNode = useRef<HTMLFormElement | null>(null)

  const deleteUserButtonClick = (e: any) => {
    if (
      deleteUserButtonNode.current &&
      deleteUserButtonNode.current.contains(e.target)
    ) {
      return
    }
    if (
      deleteUserModalNode.current &&
      deleteUserModalNode.current.contains(e.target)
    ) {
      return
    }

    setShowDeleteModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', deleteUserButtonClick)

    return () => {
      document.removeEventListener('mousedown', deleteUserButtonClick)
    }
  })

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        return setSuccessMessage(false)
      }, 1500)
    }
  }, [successMessage])

  return (
    <Layout>
      <div className='flex mx-auto w-full max-w-7xl lg:mb-0 -mt-12 lg:-mt-20'>
        <AnimatePresence exitBeforeEnter>
          {showDeleteModal && (
            <DeleteUserModal
              data={data}
              deleteUserModalNode={deleteUserModalNode}
              setShowDeleteModal={setShowDeleteModal}
            />
          )}
        </AnimatePresence>
        <button className='flex p-1' onClick={() => router.back()}>
          <ArrowDown
            tailwind='h-4 lg:h-6 text-green-dark self-center transform rotate-90'
            strokeWidth={3}
          />
          <h6 className='mx-1 lg:mx-2 text-lg text-green-dark tracking-widest self-center'>
            voltar
          </h6>
        </button>
      </div>
      <div className='flex mx-auto max-w-6xl'>
        <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark'>
          Definições de conta
          <div className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
        </h1>
      </div>
      <Formik
        initialValues={{
          password: '',
          updateName: data?.me?.name,
          updateEmail: data?.me?.email,
          updatePassword: '',
          confirmNewPassword: '',
        }}
        onSubmit={async (
          {
            password,
            updateName,
            updateEmail,
            updatePassword,
            confirmNewPassword,
          },
          { setErrors }
        ) => {
          const response = await editUser({
            variables: {
              password,
              updateName,
              updateEmail,
              updatePassword,
              confirmNewPassword,
            },
            update: (cache) => {
              cache.evict({ fieldName: 'me' })
            },
          })

          if (response.errors) {
            setErrors({ password: response.errors[0].message })
          } else setSuccessMessage(true)
        }}
      >
        <Form className='flex flex-col w-full max-w-2xl min-h-[70vh] mx-auto mt-6 bg-white rounded-md shadow-around'>
          <div className='sticky top-0 flex py-2 px-2 border-b'>
            <h4 className='ml-2 font-thin tracking-widest text-green-dark text-xl'>
              Editar conta
            </h4>
            <button
              className='flex px-2 ml-auto mr-1 rounded-md shadow-md hover:bg-red-200'
              ref={deleteUserButtonNode}
              type='button'
              onClick={() => setShowDeleteModal(true)}
            >
              <h5 className='self-center text-red-600'>Eliminar</h5>
            </button>
          </div>
          <div className='relative flex flex-col pt-4 pb-12 w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-green-medium'>
            <AnimatePresence exitBeforeEnter>
              {successMessage && (
                <motion.p
                  key='success message'
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  variants={fadeDown}
                  className='absolute top-4 w-[80%] right-9 lg:right-[4.2rem] text-lg p-4 text-center rounded-md shadow-md bg-green-extraLight text-green-dark'
                >
                  Conta editada com sucesso!
                </motion.p>
              )}
            </AnimatePresence>
            <div className='w-[90%] lg:w-[80%] mx-auto mt-2'>
              {data?.me?.facebookId || data?.me?.googleId ? (
                <p className='my-4 mx-2 text-lg p-4 text-center rounded-md shadow-md bg-pink-light text-pink-dark'>
                  Como a sua conta foi criada via Google ou Facebook, não a pode
                  editar, apenas eliminá-la.
                </p>
              ) : null}
              <InputField
                name='password'
                label='Password'
                type='password'
                labelStyling='ml-3 text-green-medium tracking-wider'
                inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                errorStyling='absolute bottom-2 text-center max-w-xs lg:max-w-xl w-full rounded-md py-1 text-red-800 bg-red-200 transform left-[50%] translate-x-[-50%]'
                showLabel={!data?.me?.facebookId && !data?.me?.googleId}
                hidden={
                  data?.me?.facebookId || data?.me?.googleId ? true : false
                }
              />
            </div>
            <div className='w-[90%] lg:w-[80%] mx-auto mt-8'>
              <InputField
                name='updateName'
                label='Nome'
                placeholder='ex: Maria Silva'
                type='text'
                labelStyling='ml-3 text-green-medium tracking-wider'
                inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                disabled={
                  data?.me?.facebookId || data?.me?.googleId ? true : false
                }
              />
            </div>
            <div className='w-[90%] lg:w-[80%] mx-auto mt-8'>
              <InputField
                name='updateEmail'
                label='Email'
                placeholder='ex: exemplo@email.com'
                type='email'
                labelStyling='ml-3 text-green-medium tracking-wider'
                inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                disabled={
                  data?.me?.facebookId || data?.me?.googleId ? true : false
                }
              />
            </div>
            <div className='w-[90%] lg:w-[80%] mx-auto mt-8'>
              <InputField
                name='updatePassword'
                label='Nova palavra-passe'
                type='password'
                labelStyling='ml-3 text-green-medium tracking-wider'
                inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                showLabel={!data?.me?.facebookId && !data?.me?.googleId}
                hidden={
                  data?.me?.facebookId || data?.me?.googleId ? true : false
                }
              />
            </div>
            <div className='w-[90%] lg:w-[80%] mx-auto mt-8'>
              <InputField
                name='confirmNewPassword'
                label='Confirmar palavra-passe'
                type='password'
                labelStyling='ml-3 text-green-medium tracking-wider'
                inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                showLabel={!data?.me?.facebookId && !data?.me?.googleId}
                hidden={
                  data?.me?.facebookId || data?.me?.googleId ? true : false
                }
              />
            </div>
          </div>
          <div className='flex py-3 mt-auto border-t'>
            <button
              className='flex w-[8rem] mx-auto px-4 py-2 rounded-md shadow-md text-green-dark bg-green-extraLight disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-600'
              type='submit'
              disabled={
                data?.me?.facebookId || data?.me?.googleId ? true : false
              }
            >
              <p className='mx-auto text-lg tracking-widest'>Editar!</p>
            </button>
          </div>
        </Form>
      </Formik>
    </Layout>
  )
}

export default definições
