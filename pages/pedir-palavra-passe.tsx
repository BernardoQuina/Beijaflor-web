import { useState } from 'react'
import { NextPage } from 'next'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { Layout } from '../components/Layout'
import {InputField} from '../components/InputField'
import { useForgotPasswordMutation } from '../lib/generated/graphql'
import { fadeDown } from '../utils/animations'
import { ArrowDown } from '../components/svg/ArrowDown'

interface pedirPalavraPasseProps {}

const pedirPalavraPasse: NextPage<pedirPalavraPasseProps> = ({}) => {
  const [complete, setComplete] = useState(false)

  const [forgotPassword] = useForgotPasswordMutation({ errorPolicy: 'all' })

  const router = useRouter()

  return (
    <Layout>
      <div className='flex mx-auto w-full max-w-7xl lg:mb-0 -mt-12 lg:-mt-20'>
        <button className='flex p-1' type='button' onClick={() => router.back()}>
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
          Nova palavra-passe
          <div className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
        </h1>
      </div>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={async ({ email }, { setErrors }) => {
          const response = await forgotPassword({
            variables: { email },
          })

          if (response.errors) {
            setErrors({ email: response.errors[0].message })
          } else if (response.data?.forgotPassword) {
            setComplete(true)
          }
        }}
      >
        {!complete ? (
          <Form className='flex flex-col w-full max-w-2xl min-h-[20rem] mx-auto mt-12 bg-white rounded-md shadow-around'>
            <div className='sticky top-0 flex border-b'>
              <h3 className='w-full p-4 text-green-dark text-center'>
                Enviaremos um link por email para redefinir a palavra passe
              </h3>
            </div>
            <div className='relative flex flex-col pt-4 pb-12 w-full'>
            <div className='w-[90%] lg:w-[80%] mx-auto mt-8'>
              <InputField
                name='email'
                label='Email'
                placeholder='ex: exemplo@email.com'
                type='email'
                labelStyling='ml-3 text-green-medium tracking-wider'
                inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                errorStyling='absolute bottom-1 text-center max-w-xs lg:max-w-xl w-full rounded-md py-1 text-red-800 bg-red-200 transform left-[50%] translate-x-[-50%]'
              />
            </div>
            </div>
            <div className='flex py-3 mt-auto border-t'>
            <button
              className='flex w-[10rem] mx-auto px-4 py-2 rounded-md shadow-md text-green-dark bg-green-extraLight disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-600  hover:opacity-80 hover:disabled:opacity-100'
              type='submit'
              
            >
              <p className='mx-auto text-lg tracking-widest'>Enviar email</p>
            </button>
          </div>
          </Form>
        ) : (
          <motion.div
            initial='initial'
            animate='animate'
            variants={fadeDown}
            className='text-lg mt-14 p-4 w-[90%] max-w-[40rem] mx-auto text-center rounded-md shadow-md bg-green-extraLight text-green-dark'
          >
            Se uma conta existir com este email, enviamos-lhe um link para
            redefinir a palavra-passe
          </motion.div>
        )}
      </Formik>
    </Layout>
  )
}

export default pedirPalavraPasse
