import { Dispatch, SetStateAction, useState } from 'react'

import { MeQuery } from '../../lib/generated/graphql'
import { AnimatePresence, motion } from 'framer-motion'

import { ArrowDown } from '../svg/ArrowDown'
import { Payment } from '../svg/Payment'
import { Paypal } from '../svg/Paypal'
import { slideLeft, slideRight } from '../../utils/animations'
import { Stripe } from '../svg/Stripe'
import { StripeCheckout } from './StripeCheckout'

interface MakePaymentProps {
  data: MeQuery
  setCheckoutFase: Dispatch<SetStateAction<string>>
  setConfirmedOrderId: Dispatch<SetStateAction<string>>
  addressId: string
}

export const MakePayment: React.FC<MakePaymentProps> = ({
  data,
  setCheckoutFase,
  setConfirmedOrderId,
  addressId,
}) => {
  const [paymentMethod, setPaymentMethod] = useState('')

  return (
    <div className='mt-3 xs:mt-6 flex flex-col mx-auto max-w-2xl h-[27rem] xs:h-[40rem] bg-white rounded-md shadow-around'>
      <div className='w-full flex h-[2rem] border-b'>
        <h3 className='my-auto ml-3 font-bold text-green-dark tracking-wide'>
          Método de pagamento
        </h3>
      </div>
      <div className='flex flex-col w-full h-[25rem] xs:h-[38rem] overflow-x-hidden'>
        <AnimatePresence exitBeforeEnter>
          {paymentMethod === '' ? (
            <motion.div
              key='select method'
              className='w-full h-full flex flex-col'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={slideLeft}
            >
              <button
                className='flex w-[90%] max-w-[20rem] h-[6rem] mt-auto mx-auto mb-10 px-2 rounded-md shadow-md bg-green-extraLight'
                type='button'
                onClick={() => setPaymentMethod('stripe')}
              >
                <div className='flex w-[30%] h-full'>
                  <div className='m-auto'>
                    <Payment tailwind='h-16 w-16 text-green-light' />
                  </div>
                </div>
                <div className='flex flex-col w-[70%] h-full'>
                  <h4 className='w-full mt-auto text-center tracking-wide text-lg text-green-dark'>
                    Cartão de crédito
                  </h4>
                  <div className='flex mx-auto mb-auto mt-2 text-green-light tracking-wider'>
                    <h4 className='self-end'>Powered by</h4>

                    <Stripe tailwind='self-end h-5 ml-2 mb-[0.2rem]' />
                  </div>
                </div>
              </button>
              <button
                className='flex w-[90%] max-w-[20rem] h-[6rem] mb-auto mx-auto mt-10 px-2 rounded-md shadow-md bg-blue-50'
                type='button'
                onClick={() => setPaymentMethod('paypal')}
              >
                <div className='flex w-full h-full'>
                  <div className='m-auto'>
                    <Paypal tailwind='h-[4.5rem] w-36' />
                  </div>
                </div>
              </button>
            </motion.div>
          ) : paymentMethod === 'stripe' ? (
            <motion.div
              key='stripe'
              className='w-full h-full flex flex-col relative'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={slideRight}
            >
              <button
                className='hidden absolute top-2 left-2 lg:flex p-1'
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
              <StripeCheckout
                setPaymentMethod={setPaymentMethod}
                setCheckoutFase={setCheckoutFase}
                setConfirmedOrderId={setConfirmedOrderId}
                addressId={addressId}
                data={data}
              />
            </motion.div>
          ) : paymentMethod === 'paypal' ? (
            <motion.div
              key='paypal'
              className='w-full h-full flex flex-col'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={slideRight}
            >
              <button type='button' onClick={() => setPaymentMethod('')}>
                voltar
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}
