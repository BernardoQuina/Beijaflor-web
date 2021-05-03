import { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Formik, Form } from 'formik'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

import { MeDocument, MeQuery, useLoginMutation } from '../lib/generated/graphql'
import { useIsAuth } from '../utils/useIsAuth'
import { slideLeft, slideRight } from '../utils/animations'
import { Layout } from '../components/Layout'
import { PresentationSection } from '../components/login/PresentationSection'
import { InputField } from '../components/InputField'

interface loginProps {}

const login: NextPage<loginProps> = ({}) => {
  const [loginOrRegister, setLoginOrRegister] = useState('login')

  const router = useRouter()

  const [login] = useLoginMutation({ errorPolicy: 'all' })

  useIsAuth()

  return (
    <Layout>
      <div className='-mt-4 mb-48 min-h-[40rem] w-full max-w-7xl mx-auto grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2'>
        <PresentationSection />
        <section className='col-span-1 row-start-1 lg:col-start-2 bg-white rounded-xl shadow-around w-[95%] h-[26rem] lg:w-[26rem] lg:h-[36rem] mx-auto overflow-hidden'>
          <AnimateSharedLayout>
            <div className='p-4 flex h-[4rem]'>
              <button
                className='mx-auto'
                type='button'
                onClick={() => setLoginOrRegister('login')}
              >
                <h3 className=' text-xl tracking-wide text-green-medium'>
                  Entrar
                </h3>
                {loginOrRegister === 'login' && (
                  <motion.div
                    layoutId='underline2'
                    className='h-[0.18rem] w-full rounded-full bg-green-medium'
                  ></motion.div>
                )}
              </button>
              <button
                className='mx-auto'
                type='button'
                onClick={() => setLoginOrRegister('register')}
              >
                <h3 className='text-xl tracking-wide text-green-medium'>
                  Criar conta
                </h3>
                {loginOrRegister === 'register' && (
                  <motion.div
                    layoutId='underline2'
                    className='h-[0.18rem] w-full rounded-full bg-green-medium'
                  ></motion.div>
                )}
              </button>
            </div>
          </AnimateSharedLayout>
          <AnimatePresence exitBeforeEnter>
            {loginOrRegister === 'login' ? (
              <motion.div
                key='1'
                className='w-full h-[22rem] lg:h-[32rem]'
                initial='initial'
                animate='animate'
                exit='exit'
                variants={slideLeft}
              >
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  onSubmit={async ({ email, password }, { setErrors }) => {
                    const response = await login({
                      variables: { email, password },
                      update: (cache, { data }) => {
                        cache.writeQuery<MeQuery>({
                          query: MeDocument,
                          data: {
                            __typename: 'Query',
                            me: data?.login,
                          },
                        })
                      },
                    })

                    if (response.errors) {
                      console.log(response.errors)
                      setErrors({ email: response.errors[0].message })
                    } else if (response.data.login) {
                      router.push('/')
                    }
                  }}
                >
                  {() => (
                    <Form className='mx-auto mt-12 max-w-[18rem] lg:max-w-xs'>
                      <div className='flex flex-col'>
                        <InputField
                          name='email'
                          placeholder='exemplo@email.com'
                          label='Email'
                          type='email'
                          labelStyling='ml-3 text-green-medium tracking-wider'
                          inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                          errorStyling='text-center mt-[-2.75rem] mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
                        />
                      </div>
                      <div className='flex flex-col mt-6'>
                        <InputField
                          name='password'
                          label='Palavra-passe'
                          type='password'
                          labelStyling='ml-3 text-green-medium tracking-wider'
                          inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin'
                          errorStyling='text-center bg-red-200'
                        />
                        <Link href='/forgot-password'>
                          <p className='mt-1 text-right text-sm text-green-dark hover:underline cursor-pointer'>
                            Esqueceu-se da palavra-passe?
                          </p>
                        </Link>
                      </div>
                      <button
                        className='flex mt-6 p-2 px-2 mx-auto w-[80%] rounded-md shadow-md opacity-95 bg-opacity-80 hover:opacity-100 hover:bg-opacity-100 bg-green-medium'
                        type='submit'
                      >
                        <p className='w-full text-center text-white tracking-widest font-thin'>
                          Entrar
                        </p>
                      </button>
                    </Form>
                  )}
                </Formik>
              </motion.div>
            ) : loginOrRegister === 'register' ? (
              <motion.div
                key='2'
                className='w-full h-[22rem] lg:h-[32rem] bg-gray-300'
                initial='initial'
                animate='animate'
                exit='exit'
                variants={slideRight}
              ></motion.div>
            ) : null}
          </AnimatePresence>
        </section>
      </div>
    </Layout>
  )
}

export default login
