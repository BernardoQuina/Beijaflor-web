import { NextPage } from 'next'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { Layout } from '../components/Layout'
import { Meta } from '../components/Meta'
import { useState } from 'react'
import { useMeQuery } from '../lib/generated/graphql'
import { isServer } from '../utils/isServer'
import { useIsAuth } from '../utils/useIsAuth'
import { CheckoutHeader } from '../components/checkout/CheckoutHeader'
import { ConfirmItems } from '../components/checkout/ConfirmItems'
import { SetAddress } from '../components/checkout/SetAddress'
import { AnimatePresence, motion } from 'framer-motion'
import { slideFromRightToLeft, slideLeft } from '../utils/animations'
import { MakePayment } from '../components/checkout/MakePayment'
import { OrderConfirmation } from '../components/checkout/OrderConfirmation'
import { ChooseDate } from '../components/checkout/ChooseDate'

interface checkoutProps {}

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
)

const checkout: NextPage<checkoutProps> = ({}) => {
  const [checkoutFase, setCheckoutFase] = useState('confirm items')
  const [addressId, setAddressId] = useState<string | null>(null)
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null)

  let minDate = new Date()
  minDate.setDate(minDate.getDate() + 1)

  const [selectedDate, setSelectedDate] = useState(minDate)

  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  useIsAuth(true)

  return (
    <Elements options={{ locale: 'pt' }} stripe={stripePromise}>
      <Layout overflowHide={true}>
        <Meta
          title='Checkout | Florista Beijaflor'
          description='Faça checkout na Florista Beijaflor com paypal ou cartão de crédito via stripe. Descubra a nossa seleção de plantas e flores e receba-as à sua porta. Mais de 20 anos de momentos especiais!'
        />
        <CheckoutHeader
          checkoutFase={checkoutFase}
          setCheckoutFase={setCheckoutFase}
          cart={data?.me?.cart}
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
          ) : checkoutFase === 'date' ? (
            <motion.div
              key='date'
              className='w-full'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={slideFromRightToLeft}
            >
              <ChooseDate
                setCheckoutFase={setCheckoutFase}
                setSelectedDate={setSelectedDate}
                selectedDate={selectedDate}
                minDate={minDate}
              />
            </motion.div>
          ) : checkoutFase === 'payment' ? (
            <motion.div
              key='payment'
              className='w-full'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={slideFromRightToLeft}
            >
              <MakePayment
                data={data}
                setCheckoutFase={setCheckoutFase}
                setConfirmedOrderId={setConfirmedOrderId}
                confirmedOrderId={confirmedOrderId}
                addressId={addressId}
                selectedDate={selectedDate}
              />
            </motion.div>
          ) : checkoutFase === 'confirmation' ? (
            <motion.div
              key='confirmation'
              className='w-full'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={slideFromRightToLeft}
            >
              <OrderConfirmation confirmedOrderId={confirmedOrderId} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Layout>
    </Elements>
  )
}

export default checkout
