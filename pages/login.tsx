import { useState } from 'react'
import { NextPage } from 'next'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

import { useIsAuth } from '../utils/useIsAuth'
import { slideLeft, slideRight } from '../utils/animations'
import { Layout } from '../components/Layout'
import { PresentationSection } from '../components/login/PresentationSection'
import { LoginForm } from '../components/login/LoginForm'
import { RegisterForm } from '../components/login/RegisterForm'
import { OauthSignIn } from '../components/login/OauthSignIn'

interface loginProps {}

const login: NextPage<loginProps> = ({}) => {
  const [loginOrRegister, setLoginOrRegister] = useState('login')

  useIsAuth()

  return (
    <Layout>
      <div className='-mt-4 mb-64 w-full max-w-7xl mx-auto grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2'>
        <PresentationSection />
        <section className='col-span-1 row-start-1 lg:col-start-2 w-[95%] lg:w-[26rem] mx-auto'>
          <AnimateSharedLayout>
            <motion.div
              layoutId='forms'
              className='bg-white rounded-xl shadow-around pb-12 overflow-hidden'
            >
              <motion.div layoutId='top' className='p-4 flex h-[4rem]'>
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
              </motion.div>
              <AnimatePresence exitBeforeEnter>
                {loginOrRegister === 'login' ? (
                  <motion.div
                    key='login'
                    className='w-full'
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={slideLeft}
                  >
                    <LoginForm />
                  </motion.div>
                ) : loginOrRegister === 'register' ? (
                  <motion.div
                    key='register'
                    className='w-full'
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={slideRight}
                  >
                    <RegisterForm />
                  </motion.div>
                ) : null}
              </AnimatePresence>
              <OauthSignIn />
            </motion.div>
          </AnimateSharedLayout>
        </section>
      </div>
    </Layout>
  )
}

export default login
