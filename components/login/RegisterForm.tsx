import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import { motion } from 'framer-motion'

import {
  MeQuery,
  MeDocument,
  useRegisterMutation,
} from '../../lib/generated/graphql'
import { slideRight } from '../../utils/animations'
import { InputField } from '../../components/InputField'

interface RegisterFormProps {}

export const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const router = useRouter()

  const [register] = useRegisterMutation({errorPolicy: 'all'})

  return (
    <motion.div
      key='1'
      className='w-full'
      initial='initial'
      animate='animate'
      exit='exit'
      variants={slideRight}
    >
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={async ({ name, email, password, confirmPassword }, { setErrors }) => {
          const response = await register({
            variables: { name, email, password, confirmPassword },
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: 'Query',
                  me: data?.register,
                },
              })
            },
          })

          if (response.errors) {
            console.log(response.errors)
            setErrors({ name: response.errors[0].message })
          } else if (response.data.register) {
            router.push('/')
          }
        }}
      >
        {() => (
          <Form className='mx-auto mt-4 max-w-[16rem] xs:max-w-[18rem] lg:max-w-xs'>
            <div className='flex flex-col'>
              <InputField
                name='name'
                placeholder='Maria Silva'
                label='Nome'
                type='text'
                labelStyling='ml-3 text-green-medium tracking-wider'
                inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
              />
            </div>
            <div className='mt-6 flex flex-col'>
              <InputField
                name='email'
                placeholder='exemplo@email.com'
                label='Email'
                type='email'
                labelStyling='ml-3 text-green-medium tracking-wider'
                inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin text-lg'
                errorStyling='text-center mb-3 w-full rounded-md py-1 text-red-800 bg-red-200'
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
            </div>
            <div className='flex flex-col mt-6'>
              <InputField
                name='confirmPassword'
                label='Confirmar palavra-passe'
                type='password'
                labelStyling='ml-3 text-green-medium tracking-wider'
                inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin'
                errorStyling='text-center bg-red-200'
              />
            </div>
            <button
              className='flex mt-6 p-2 px-2 mx-auto w-[80%] rounded-md shadow-md opacity-95 bg-opacity-80 hover:opacity-100 hover:bg-opacity-100 bg-green-medium'
              type='submit'
            >
              <p className='w-full text-center text-white tracking-widest font-thin'>
                Criar conta
              </p>
            </button>
          </Form>
        )}
      </Formik>
    </motion.div>
  )
}
