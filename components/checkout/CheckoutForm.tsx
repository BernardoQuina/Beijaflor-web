import { useEffect, useRef, useState } from 'react'
import { Formik, Form } from 'formik'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useStripeChargeMutation } from '../../lib/generated/graphql'

interface CheckoutFormProps {}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({}) => {
  const stripe = useStripe()
  const elements = useElements()

  const [paymentError, setPaymentError] = useState('')

  const [stripeCharge] = useStripeChargeMutation({ errorPolicy: 'all' })

  const errorMessageRef = useRef<HTMLHeadingElement | null>(null)

  const messageClick = (e: any) => {
    if (errorMessageRef.current && errorMessageRef.current.contains(e.target)) {
      return
    }

    setPaymentError('')
  }

  useEffect(() => {
    document.addEventListener('mousedown', messageClick)

    return () => {
      document.removeEventListener('mousedown', messageClick)
    }
  }, [])

  return (
    <Formik
      initialValues={() => {}}
      onSubmit={async () => {
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement),
        })

        if (!error) {
          const { id } = paymentMethod

          const response = await stripeCharge({
            variables: { id, amount: 1000 },
          })

          if (response.errors) {
            setPaymentError(response.errors[0].message)
            console.log(response.errors[0].message)
          } else {
            console.log(response.data.stripeCharge)
          }
        } else {
          setPaymentError(error.message)
          console.log(error)
        }
      }}
    >
      <Form className='flex flex-col mx-auto min-h-[20rem] w-[25rem] max-w-full p-4 rounded-md shadow-around bg-white'>
        {paymentError !== '' ? (
          <h3
            ref={errorMessageRef}
            className='w-full mx-auto mb-8 py-2 text-center bg-red-200 rounded-md shadow-md text-red-600'
          >
            {paymentError}
          </h3>
        ) : null}
        <CardElement
          options={{
            style: {
              base: {},
            },
          }}
        />
        <button
          className='mx-auto mt-auto p-2 rounded-md shadow-md w-[10rem] bg-green-extraLight'
          type='submit'
          disabled={!stripe}
        >
          Pagar
        </button>
      </Form>
    </Formik>
  )
}
