import { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'

import { useEditUserMutation, useMeQuery } from '../../lib/generated/graphql'
import { Layout } from '../../components/Layout'
import { InputField } from '../../components/InputField'
import { ArrowDown } from '../../components/svg/ArrowDown'
import { useIsAuth } from '../../utils/useIsAuth'
import { isServer } from '../../utils/isServer'

interface definiçõesProps {}

const definições: NextPage<definiçõesProps> = ({}) => {
  const [successMessage, setSuccessMessage] = useState(false)
  const router = useRouter()
  useIsAuth(true)

  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  const [editUser] = useEditUserMutation({ errorPolicy: 'all' })

  return (
    <Layout>
      <div className='flex mx-auto w-full max-w-7xl lg:mb-0 -mt-12 lg:-mt-20'>
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
        <Form className='w-full max-w-2xl min-h-[70vh] mx-auto mt-6 bg-white rounded-md shadow-around'>
          <div className='sticky top-0 flex py-2 px-2 border-b'>
            <h4 className='ml-2 font-thin tracking-widest text-green-dark text-xl'>
              Editar conta
            </h4>
          </div>
          <div className='relative flex flex-col pt-4 pb-12 w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-green-medium'>
            <div className='w-[90%] lg:w-[80%] mx-auto mt-2'>
              <InputField
                name='password'
                label='Password'
                type='password'
                labelStyling='ml-3 text-green-medium tracking-wider'
                inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                errorStyling='absolute bottom-2 text-center max-w-xs lg:max-w-xl w-full rounded-md py-1 text-red-800 bg-red-200 transform left-[50%] translate-x-[-50%]'
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
              />
            </div>
          </div>
          <div className='flex py-3 border-t'>
            <button
              className='flex w-[8rem] mx-auto px-4 py-2 rounded-md shadow-md bg-green-extraLight'
              type='submit'
            >
              <p className='mx-auto text-lg text-green-dark tracking-widest'>
                Editar!
              </p>
            </button>
          </div>
        </Form>
      </Formik>
    </Layout>
  )
}

export default definições
