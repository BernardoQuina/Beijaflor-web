import { NextPage } from 'next'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { Layout } from '../components/Layout'
import { CheckoutForm } from '../components/checkout/CheckoutForm'
import { useState } from 'react'
import { useMeQuery } from '../lib/generated/graphql'
import { isServer } from '../utils/isServer'
import { useIsAuth } from '../utils/useIsAuth'
import { ConfirmItems } from '../components/checkout/ConfirmItems'
import { CheckoutHeader } from '../components/checkout/CheckoutHeader'

interface checkoutProps {}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const checkout: NextPage<checkoutProps> = ({}) => {
  const [checkoutFase, setCheckoutFase] = useState('confirm items')

  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  useIsAuth(true)

  return (
    <Elements options={{ locale: 'pt' }} stripe={stripePromise}>
      <Layout>
        <CheckoutHeader checkoutFase={checkoutFase} />
        {checkoutFase === 'confirm items' ? (
          <ConfirmItems data={data} setCheckoutFase={setCheckoutFase} />
        ) : null}
        {/* <CheckoutForm /> */}
      </Layout>
    </Elements>
  )
}

export default checkout
