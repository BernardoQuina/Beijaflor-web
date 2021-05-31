import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Formik, Form } from 'formik'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import {
  BasicPaymentIntentFragment,
  MeQuery,
  useCreateOrderMutation,
  useCreatePaymentIntentMutation,
  useSuccessfulPaymentMutation,
  useUnsuccessfulPaymentMutation,
} from '../../lib/generated/graphql'
import { ptErrors } from '../../utils/ptErrors'
import { Secure } from '../svg/Secure'
import { Stripe } from '../svg/Stripe'
import { ArrowDown } from '../svg/ArrowDown'

interface StripeCheckoutProps {
  data: MeQuery
  addressId: string
  setPaymentMethod: Dispatch<SetStateAction<string>>
  setCheckoutFase: Dispatch<SetStateAction<string>>
}

export const StripeCheckout: React.FC<StripeCheckoutProps> = ({
  data,
  addressId,
  setPaymentMethod,
  setCheckoutFase
}) => {
  const stripe = useStripe()
  const elements = useElements()

  const [paymentIntent, setPaymentIntent] =
    useState<BasicPaymentIntentFragment>()
  const [paymentError, setPaymentError] = useState('')
  const [cartItemsIds, setCartItemsIds] = useState([])

  const errorMessageRef = useRef<HTMLHeadingElement | null>(null)

  const [createPaymentIntent] = useCreatePaymentIntentMutation({
    errorPolicy: 'all',
  })

  const [createOrder] = useCreateOrderMutation({ errorPolicy: 'all' })

  const [successfulPayment] = useSuccessfulPaymentMutation({
    errorPolicy: 'all',
  })
  const [unsuccessfulPayment] = useUnsuccessfulPaymentMutation({
    errorPolicy: 'all',
  })

  const messageClick = (e: any) => {
    if (errorMessageRef.current && errorMessageRef.current.contains(e.target)) {
      return
    }

    setPaymentError('')
  }

  useEffect(() => {
    const getIntent = async () => {
      const response = await createPaymentIntent({
        variables: {
          amount: parseInt((data?.me?.cart.price * 100).toFixed(0)),
        },
      })

      if (response.errors) {
        console.log(response.errors[0].message)
        return
      }

      console.log('successful response: ', response.data.createPaymentIntent)
      setPaymentIntent(response.data.createPaymentIntent)
    }

    console.log('cart price: ', data?.me?.cart.price)

    getIntent()

    setCartItemsIds([])

    data?.me?.cart.cartItems.forEach((cartItem) => {
      setCartItemsIds((prev) => [...prev, cartItem.id])
    })

    document.addEventListener('mousedown', messageClick)

    return () => {
      document.removeEventListener('mousedown', messageClick)
    }
  }, [data])

  return (
    <Formik
      initialValues={() => {}}
      onSubmit={async () => {
        if (!addressId) {
          setPaymentError('Defina uma morada primeiro!')
          return
        }

        const createOrderResponse = await createOrder({
          variables: {
            addressId,
            cartId: data?.me?.cart.id,
            cartItemsIds,
          },
        })

        if (createOrderResponse.errors) {
          setPaymentError(createOrderResponse.errors[0].message)
        } else if (createOrderResponse.data?.createOrder) {
          console.log(
            'successful order: ',
            createOrderResponse.data.createOrder
          )
          try {
            const {
              error,
              paymentIntent: { status, last_payment_error },
            } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
              payment_method: {
                card: elements.getElement(CardElement),
              },
              receipt_email: data.me.email,
              shipping: {
                name: createOrderResponse.data.createOrder.address.completeName,
                address: {
                  line1: `${createOrderResponse.data.createOrder.address.street}, ${createOrderResponse.data.createOrder.address.numberAndBlock}`,
                  postal_code: `${createOrderResponse.data.createOrder.address.postal}, ${createOrderResponse.data.createOrder.address.zone}`,
                  city: createOrderResponse.data.createOrder.address.region,
                  country: createOrderResponse.data.createOrder.address.country,
                },
                phone: createOrderResponse.data.createOrder.address.contact,
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
              await successfulPayment({
                update: (cache) => {
                  cache.evict({ id: `Cart:${data.me.cart.id}` })
                },
              })
              
              setCheckoutFase('confirmation')
            } else {
              await unsuccessfulPayment({
                variables: { orderId: createOrderResponse.data.createOrder.id },
              })

              setPaymentError('O pagamento não foi bem sucedido.')
            }
          } catch (err) {
            // refetch the payment intent for errors
            const response = await createPaymentIntent({
              variables: {
                amount: parseInt((data?.me?.cart.price * 100).toFixed(0)),
              },
            })

            const unsuccessfulPaymentRes = await unsuccessfulPayment({
              variables: { orderId: createOrderResponse.data.createOrder.id },
            })

            if (unsuccessfulPaymentRes.errors) {
              console.log(
                'unsuccessful payment error: ',
                unsuccessfulPaymentRes.errors[0].message
              )
            }

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
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col m-auto min-h-full  md:min-h-[29rem] w-[25rem] max-w-full p-4 rounded-md md:shadow-around bg-white'>
          <button
            className='flex mr-auto mb-4 lg:hidden p-1'
            onClick={() => setPaymentMethod('')}
            type='button'
          >
            <ArrowDown
              tailwind='h-4 lg:h-6 text-green-dark self-center transform rotate-90'
              strokeWidth={3}
            />
            <h6 className='mx-1 lg:mx-2 text-lg text-green-dark tracking-widest self-center'>
              voltar
            </h6>
          </button>
          {paymentError !== '' ? (
            <h3
              ref={errorMessageRef}
              className='w-full mx-auto mb-8 py-2 text-center bg-red-200 rounded-md shadow-md text-red-600'
            >
              {paymentError}
            </h3>
          ) : null}
          <div className='w-full flex'>
            <Secure
              tailwind='h-6 text-gray-300 fill-current'
              strokeWidth={0.5}
            />
            <h6 className='text-gray-400 text-sm tracking-wide ml-2 mb-1'>
              Todos os pagamentos são seguros e encriptados.{' '}
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://stripe.com/pt-br-pt/payments'
                className='m-1 underline'
              >
                Saiba mais
              </a>
            </h6>
          </div>
          <h6 className='text-green-dark font-bold tracking-wide ml-2 mb-1 mt-4'>
            Cartão
          </h6>
          <div className='shadow-md bg-green-50 bg-opacity-40 p-2 py-4 rounded-md'>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    letterSpacing: '2px',
                    '::placeholder': {
                      color: '#B7B7A4',
                    },
                    iconColor: '#6B705C',
                  },
                },
                hidePostalCode: true,
              }}
            />
          </div>
          <div className='flex flex-col mt-5 border-t'>
            <div className='flex p-4'>
              <h5 className='text-green-dark'>Subtotal</h5>
              <h5 className='ml-auto mr-1 text-sm self-start text-green-dark'>
                €
              </h5>
              <h5 className='text-green-dark'>
                {(data.me?.cart?.price * 0.77).toFixed(2)}
              </h5>
            </div>
            <div className='flex p-4'>
              <h5 className='text-green-dark'>IVA (23%)</h5>
              <h5 className='ml-auto mr-1 text-sm self-start text-green-dark'>
                €
              </h5>
              <h5 className='text-green-dark'>
                {(data.me?.cart?.price * 0.23).toFixed(2)}
              </h5>
            </div>
            <div className='flex p-4'>
              <h5 className='text-green-dark font-bold tracking-wide'>Total</h5>
              <h5 className='ml-auto mr-1 text-sm self-start text-green-dark font-bold'>
                €
              </h5>
              <h5 className='text-green-dark font-bold'>
                {data.me?.cart?.price.toFixed(2)}
              </h5>
            </div>
          </div>
          <div className='flex flex-col w-full mt-auto border-t pt-4'>
            <button
              className='mx-auto p-2 rounded-md shadow-md w-[10rem] bg-green-extraLight'
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
            <div className='flex mx-auto mt-6 mb-2 text-gray-300 tracking-wider'>
              <h4 className='self-end'>Powered by</h4>
              <Stripe tailwind='self-end h-5 ml-2 mb-[0.2rem]' />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
