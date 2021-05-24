import { NextPage } from 'next'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { Layout } from '../components/Layout'
import { CheckoutForm } from '../components/checkout/CheckoutForm'

interface checkoutProps {}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const checkout: NextPage<checkoutProps> = ({}) => {
  return (
    <Elements options={{locale: 'pt'}} stripe={stripePromise}>
      <Layout>
        <CheckoutForm />
      </Layout>
    </Elements>
  )
}

export default checkout
