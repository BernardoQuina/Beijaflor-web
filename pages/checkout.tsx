import { NextPage } from 'next'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { Layout } from '../components/Layout'
import { CheckoutForm } from '../components/checkout/CheckoutForm'
import { useState } from 'react'
import { useMeQuery } from '../lib/generated/graphql'
import { isServer } from '../utils/isServer'
import { useIsAuth } from '../utils/useIsAuth'
import { CheckoutHeader } from '../components/checkout/CheckoutHeader'
import { ConfirmItems } from '../components/checkout/ConfirmItems'
import { SetAddress } from '../components/checkout/SetAddress'
import { AnimatePresence, motion } from 'framer-motion'
import { slideFromRightToLeft, slideLeft } from '../utils/animations'

interface checkoutProps {}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const checkout: NextPage<checkoutProps> = ({}) => {
  const [checkoutFase, setCheckoutFase] = useState('confirm items')
  const [addressId, setAddressId] = useState<string | null>(null)

  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  useIsAuth(true)

  return (
    <Elements options={{ locale: 'pt' }} stripe={stripePromise}>
      <Layout>
        <CheckoutHeader
          checkoutFase={checkoutFase}
          setCheckoutFase={setCheckoutFase}
        />
        <AnimatePresence exitBeforeEnter>
          {checkoutFase === 'confirm items' ? (
            <motion.div
              key='confirm items'
              className='w-full'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={slideLeft}
            >
              <ConfirmItems data={data} setCheckoutFase={setCheckoutFase} />
            </motion.div>
          ) : checkoutFase === 'address' ? (
            <motion.div
              key='address'
              className='w-full'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={slideFromRightToLeft}
            >
              <SetAddress
                data={data}
                setCheckoutFase={setCheckoutFase}
                setAddressId={setAddressId}
                addressId={addressId}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
        {/* <CheckoutForm /> */}
      </Layout>
    </Elements>
  )
}

export default checkout
