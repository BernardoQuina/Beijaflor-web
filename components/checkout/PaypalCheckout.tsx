import { PayPalNamespace } from '@paypal/paypal-js'
import { PurchaseUnit } from '@paypal/paypal-js/types/apis/orders'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import {
  MeQuery,
  useCreateOrderMutation,
  useSuccessfulPaymentMutation,
  useUnsuccessfulPaymentMutation,
} from '../../lib/generated/graphql'
import { ArrowDown } from '../svg/ArrowDown'
import { Secure } from '../svg/Secure'
import { Paypal } from '../svg/Paypal'
interface PaypalCheckoutProps {
  paypal: PayPalNamespace
  purchaseUnits: PurchaseUnit[]
  data: MeQuery
  addressId: string
  setPaymentMethod: Dispatch<SetStateAction<string>>
  setCheckoutFase: Dispatch<SetStateAction<string>>
  setConfirmedOrderId: Dispatch<SetStateAction<string>>
  confirmedOrderId: string
  cartItemsIds: string[]
}

export const PaypalCheckout: React.FC<PaypalCheckoutProps> = ({
  paypal,
  purchaseUnits,
  data,
  addressId,
  setPaymentMethod,
  setCheckoutFase,
  setConfirmedOrderId,
  confirmedOrderId,
  cartItemsIds
}) => {
  const [paymentError, setPaymentError] = useState('')

  const errorMessageRef = useRef<HTMLHeadingElement | null>(null)

  const [createOrder] = useCreateOrderMutation({ errorPolicy: 'all' })

  const [successfulPayment] = useSuccessfulPaymentMutation({
    errorPolicy: 'all',
    variables: { orderId: confirmedOrderId },
  })
  const [unsuccessfulPayment] = useUnsuccessfulPaymentMutation({
    errorPolicy: 'all',
    variables: { orderId: confirmedOrderId },
  })

  const messageClick = (e: any) => {
    if (errorMessageRef.current && errorMessageRef.current.contains(e.target)) {
      return
    }

    setPaymentError('')
  }

  useEffect(() => {

    console.log('cartIds: ', cartItemsIds)

    paypal
      .Buttons({
        style: {
          color: 'blue',
          label: 'checkout',
        },
        onClick: async (_data, actions) => {
          if (!addressId) {
            setPaymentError('Defina uma morada primeiro!')
            return actions.reject()
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
            return actions.reject()
          } else if (createOrderResponse.data?.createOrder) {
            setConfirmedOrderId(createOrderResponse.data.createOrder.id)
            return actions.resolve()
          }
        },
        createOrder: (_data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: purchaseUnits,
          })
        },

        onApprove: async (_data, actions) => {
          const order = await actions.order.capture()

          console.log('successful order: ', order)

          await successfulPayment({
            update: (cache) => {
              cache.evict({ id: `Cart:${data.me.cart.id}` })
              cache.evict({
                id: `Order:${confirmedOrderId}`,
              })
            },
          })
          setCheckoutFase('confirmation')
        },
        onCancel: async (_data) => {
          await unsuccessfulPayment()

          setPaymentError('O pagamento foi cancelado.')
        },

        onError: async (err) => {
          console.log('Error: ', err)
          await unsuccessfulPayment({
            variables: { orderId: confirmedOrderId },
          })

          setPaymentError('O pagamento não foi bem sucedido.')
        },
      })
      .render('#paypal-button')

    document.addEventListener('mousedown', messageClick)

    if (data?.me?.cart.quantity < 1) {
      setCheckoutFase('confirm items')
    }

    return () => {
      document.removeEventListener('mousedown', messageClick)
    }
  }, [data, paypal])

  return (
    <div className='flex flex-col m-auto min-h-full  md:min-h-[29rem] w-[25rem] max-w-full p-4 rounded-md md:shadow-around bg-white'>
      <button
        className='flex mr-auto mb-4 p-1 lg:hidden'
        onClick={() => {
          setPaymentMethod('')
        }}
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
          className='w-full mx-auto mb-4 py-2 text-center bg-red-200 rounded-md shadow-md text-red-600'
        >
          {paymentError}
        </h3>
      ) : null}
      <div className='w-full flex'>
        <Secure tailwind='h-6 text-gray-300 fill-current' strokeWidth={0.5} />
        <h6 className='text-gray-400 text-sm tracking-wide ml-2 mb-1'>
          Todos os pagamentos são seguros e encriptados.{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.paypal.com/webapps/mpp/paypal-safety-and-security'
            className='m-1 underline'
          >
            Saiba mais
          </a>
        </h6>
      </div>
      <div className='flex flex-col mt-2 border-t'>
        <div className='flex p-4'>
          <h5 className='text-green-dark'>Subtotal</h5>
          <h5 className='ml-auto mr-1 text-sm self-start text-green-dark'>€</h5>
          <h5 className='text-green-dark'>
            {(data.me?.cart?.price * 0.77).toFixed(2)}
          </h5>
        </div>
        <div className='flex p-4'>
          <h5 className='text-green-dark'>IVA (23%)</h5>
          <h5 className='ml-auto mr-1 text-sm self-start text-green-dark'>€</h5>
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
        <div id='paypal-button'></div>
        <div className='flex mx-auto mt-4 text-gray-300 tracking-wider'>
          <h4 className='self-center'>Powered by</h4>
          <Paypal tailwind='self-end h-8 w-14 ml-2 mb-[0.2rem]' />
        </div>
      </div>
    </div>
  )
}
