import { useEffect, useRef, useState, useContext } from 'react'
import { Formik, Form } from 'formik'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import {
  BasicPaymentIntentFragment,
  useCreatePaymentIntentMutation,
  useSuccessfulPaymentMutation,
} from '../../lib/generated/graphql'
import { ptErrors } from '../../utils/ptErrors'
import { Secure } from '../svg/Secure'

interface CheckoutFormProps {}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({}) => {
  const stripe = useStripe()
  const elements = useElements()

  const [paymentIntent, setPaymentIntent] =
    useState<BasicPaymentIntentFragment>()
  const [paymentError, setPaymentError] = useState('')

  const errorMessageRef = useRef<HTMLHeadingElement | null>(null)

  const [createPaymentIntent] = useCreatePaymentIntentMutation({
    variables: { amount: 1000 },
  })

  const [successfulPayment] = useSuccessfulPaymentMutation()

  const messageClick = (e: any) => {
    if (errorMessageRef.current && errorMessageRef.current.contains(e.target)) {
      return
    }

    setPaymentError('')
  }

  useEffect(() => {
    const getIntent = async () => {
      const response = await createPaymentIntent()

      if (response.errors) {
        console.log(response.errors[0].message)
        return
      }

      console.log('successful response: ', response.data.createPaymentIntent)
      setPaymentIntent(response.data.createPaymentIntent)
    }

    getIntent()

    document.addEventListener('mousedown', messageClick)

    return () => {
      document.removeEventListener('mousedown', messageClick)
    }
  }, [])

  return (
    <Formik
      initialValues={() => {}}
      onSubmit={async () => {
        try {
          const {
            error,
            paymentIntent: { status, last_payment_error },
          } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          })

          if (error) {
            console.log('payment error: ', error)
            setPaymentError(error.message)
          }

          if (last_payment_error) {
            console.log('last payment error: ', last_payment_error.message)
          }

          if (status === 'succeeded') {
            successfulPayment()
            alert('Payment succeeded!!!')
          } else if (status === 'canceled') {
            console.log('payment failed.')
          }
        } catch (err) {
          const response = await createPaymentIntent()

          if (response.data.createPaymentIntent.last_payment_error) {
            const inPt = ptErrors.some(
              (ptError) =>
                ptError.code ===
                response.data.createPaymentIntent.last_payment_error.code
            )

            if (inPt) {
              setPaymentError(
                ptErrors.filter(
                  (ptError) =>
                    ptError.code ===
                    response.data.createPaymentIntent.last_payment_error.code
                )[0].message
              )
            } else {
              setPaymentError(
                response.data.createPaymentIntent.last_payment_error.message
              )
            }
          }
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col mx-auto min-h-[20rem] w-[25rem] max-w-full p-4 rounded-md shadow-around bg-white'>
          {paymentError !== '' ? (
            <h3
              ref={errorMessageRef}
              className='w-full mx-auto mb-8 py-2 text-center bg-red-200 rounded-md shadow-md text-red-600'
            >
              {paymentError}
            </h3>
          ) : null}
          <div className='shadow-around p-2 py-4 rounded-md'>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    letterSpacing: '2px',
                    '::placeholder': {
                      color: '#B7B7A4',
                    },
                    iconColor: "#6B705C",
                  },
                },
                hidePostalCode: true,
              }}
            />
          </div>

          <button
            className='mx-auto mt-auto p-2 rounded-md shadow-md w-[10rem] bg-green-extraLight'
            type='submit'
            disabled={!stripe || isSubmitting}
          >
            {isSubmitting ? (
              <div className='w-full flex'>
                <h6 className='text-center font-bold text-green-dark tracking-widest transform animate-pulse'>
                  A processar
                </h6>
                <Secure
                  tailwind='ml-auto h-6 text-green-dark fill-current transform animate-bounce'
                  strokeWidth={0.5}
                />
              </div>
            ) : (
              <h6 className='text-center font-bold text-green-dark tracking-widest'>
                Pagar
              </h6>
            )}
          </button>
          <div className='flex mx-auto mt-8 text-gray-300 tracking-wider'>
            <h4 className='self-end'>Powered by</h4>
            <h4
              className='ml-2 font-black text-lg'
              style={{ fontFamily: 'sans-serif' }}
            >
              stripe
            </h4>
          </div>
        </Form>
      )}
    </Formik>
  )
}
