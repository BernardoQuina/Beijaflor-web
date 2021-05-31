import { Dispatch, SetStateAction, useState } from 'react'

import { MeQuery } from '../../lib/generated/graphql'
import { AnimatePresence, motion } from 'framer-motion'

import { ArrowDown } from '../svg/ArrowDown'
import { Payment } from '../svg/Payment'
import { Paypal } from '../svg/Paypal'
import { slideLeft, slideRight } from '../../utils/animations'
import { Stripe } from '../svg/Stripe'
import { StripeCheckout } from './StripeCheckout'

interface OrderConfirmationProps {
  data: MeQuery
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  data,
}) => {

  return (
    <div className='mt-3 xs:mt-6 flex flex-col mx-auto max-w-2xl h-[27rem] xs:h-[40rem] bg-white rounded-md shadow-around'>
      <div className='w-full flex h-[2rem] border-b'>
        <h3 className='my-auto ml-3 font-bold text-green-dark tracking-wide'>
          Confirmação de encomenda
        </h3>
      </div>
      <div className='flex flex-col w-full h-[25rem] xs:h-[38rem] overflow-x-hidden'>
        
      </div>
    </div>
  )
}
