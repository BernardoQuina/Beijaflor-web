import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'

import { Layout } from '../../components/Layout'
import { Meta } from '../../components/Meta'
import { InputField } from '../../components/InputField'
import { ArrowDown } from '../../components/svg/ArrowDown'
import { useIsAuth } from '../../utils/useIsAuth'
import { useChangePasswordMutation } from '../../lib/generated/graphql'

interface RedefinirPalavraPasseProps {}

const RedefinirPalavraPasse: NextPage<RedefinirPalavraPasseProps> = ({}) => {
  const router = useRouter()

  useIsAuth()

  const [changePassword] = useChangePasswordMutation({ errorPolicy: 'all' })

  const token = typeof router.query.token === 'string' ? router.query.token : ''

  return (
    <Layout>
      <Meta
        title='Redefinir palavra-passe | Florista Beijaflor'
        description='Redefinir nova palavra-passe da sua conta. Descubra a nossa seleção de plantas e flores e receba-as à sua porta. Mais de 20 anos de momentos especiais!'
      />
      <div className='flex mx-auto w-full max-w-7xl lg:mb-0 -mt-12 lg:-mt-20'>
        <button
          className='flex p-1'
          type='button'
          onClick={() => router.back()}
        >
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
          Redefinir palavra-passe
          <div className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
        </h1>
      </div>
      <Formik
        initialValues={{
          newPassword: '',
          confirmPassword: '',
        }}
        onSubmit={async ({ newPassword, confirmPassword }, { setErrors }) => {
          const response = await changePassword({
            variables: { token, newPassword, confirmPassword },
            update: (cache) => {
              cache.evict({ fieldName: 'me' })
            },
          })

          if (response.errors) {
            setErrors({ newPassword: response.errors[0].message })
          } else if (response.data?.changePassword) {
            router.push('/')
          }
        }}
      >
        <Form className='flex flex-col w-full max-w-2xl min-h-[20rem] mx-auto mt-12 bg-white rounded-md shadow-around'>
          <div className='sticky top-0 flex border-b'>
            <h3 className='w-full p-4 text-green-dark'>
              Redefinir palavra passe
            </h3>
          </div>
          <div className='relative flex flex-col pt-4 pb-2 w-full'>
            <div className='w-[90%] lg:w-[80%] mx-auto mt-8'>
              <InputField
                name='newPassword'
                label='Nova palavra-passe'
                type='password'
                autoComplete='new-password'
                labelStyling='ml-3 text-green-medium tracking-wider'
                inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                errorStyling='absolute top-2 text-center max-w-xs lg:max-w-xl w-full rounded-md py-1 text-red-800 bg-red-200 transform left-[50%] translate-x-[-50%]'
              />
            </div>
          </div>
          <div className='relative flex flex-col pt-2 pb-12 w-full'>
            <div className='w-[90%] lg:w-[80%] mx-auto mt-8'>
              <InputField
                name='confirmPassword'
                label='confirmar palavra-passe'
                type='password'
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
              <p className='mx-auto text-lg tracking-widest'>Redefinir</p>
            </button>
          </div>
        </Form>
      </Formik>
    </Layout>
  )
}

export default RedefinirPalavraPasse
