import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { MeQuery } from '../../lib/generated/graphql'

interface PaypalCheckoutProps {
  data: MeQuery
  addressId: string
  setPaymentMethod: Dispatch<SetStateAction<string>>
  setCheckoutFase: Dispatch<SetStateAction<string>>
  setConfirmedOrderId: Dispatch<SetStateAction<string>>
}

export const PaypalCheckout: React.FC<PaypalCheckoutProps> = ({
  data,
  addressId,
  setPaymentMethod,
  setCheckoutFase,
  setConfirmedOrderId,
}) => {
  const paypal = useRef()

  useEffect(() => {
    console.log(window.paypal)

    window.paypal
      .Buttons({
        style: {
          color: 'blue'
        },
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'cool looking table',
                amount: {
                  currency_code: 'EUR',
                  value: 650.0,
                },
              },
            ],
          })
        },

        onApprove: async (data, actions) => {
          const order = await actions.order.capture()

          console.log('successful order: ', order)
        },

        onError: (err) => {
          console.log('Error: ', err)
        },
      })
      .render(paypal.current)
  }, [])

  return <div ref={paypal}></div>
}
