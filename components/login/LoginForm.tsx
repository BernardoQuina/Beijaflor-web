import { useRouter } from 'next/router'
import Link from 'next/link'
import { Formik, Form } from 'formik'

import {
  useLoginMutation,
  MeQuery,
  MeDocument,
} from '../../lib/generated/graphql'
import { InputField } from '../../components/InputField'

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const router = useRouter()

  const [login] = useLoginMutation({ errorPolicy: 'all' })

  return (
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
          setErrors({ email: response.errors[0].message })
        } else if (response.data.login) {
          router.push('/')
        }
      }}
    >
      {() => (
        <Form className='mx-auto mt-4 max-w-[16rem] xs:max-w-[18rem] lg:max-w-xs'>
          <div className='flex flex-col'>
            <InputField
              name='email'
              placeholder='exemplo@email.com'
              label='Email'
              type='email'
              containerStyling='mx-auto w-full'
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
              containerStyling='mx-auto w-full'
              labelStyling='ml-3 text-green-medium tracking-wider'
              inputStyling='mt-1 pl-4 py-2 border shadow-sm rounded-md focus:border-green-medium w-full tracking-wider font-thin'
              errorStyling='text-center bg-red-200'
            />
            <Link href='/pedir-palavra-passe'>
              <a className='mt-1 text-right text-sm text-green-dark hover:underline cursor-pointer'>
                Esqueceu-se da palavra-passe?
              </a>
            </Link>
          </div>
          <button
            className='flex mt-6 p-2 px-2 mx-auto w-[80%] rounded-md shadow-md hover:opacity-80 bg-green-extraLight'
            type='submit'
          >
            <p className='w-full text-center text-green-dark tracking-widest'>
              Entrar
            </p>
          </button>
        </Form>
      )}
    </Formik>
  )
}
