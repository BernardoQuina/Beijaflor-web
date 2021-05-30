import { MutableRefObject, useEffect } from 'react'

import { MeQuery } from '../../lib/generated/graphql'
import { LocalCart } from '../../utils/localStorageCart'
import { isServer } from '../../utils/isServer'
import { CartContent } from './CartContent'
import { useLocalStorageChange } from '../../context/localStorageChangeContext'
import { fadeDown, } from '../../utils/animations'
import { motion } from 'framer-motion'

interface CartModalProps {
  data: MeQuery
  modalRef: MutableRefObject<HTMLDivElement>
}

export const CartModal: React.FC<CartModalProps> = ({ data, modalRef }) => {
  const { localStorageChange } = useLocalStorageChange()

  let localCart: LocalCart = {
    price: 0,
    quantity: 0,
    cartItems: [],
  }

  if (!isServer()) {
    localCart = JSON.parse(localStorage.getItem('cart'))
  }

  useEffect(() => {
    if (localStorageChange) {
      localCart = JSON.parse(localStorage.getItem('cart'))
    }
  }, [localStorageChange])

  return (
    <motion.div
      key='cart modal'
      initial='initial'
      animate='animate'
      exit='exit'
      variants={fadeDown}
      ref={modalRef}
      className='absolute flex flex-col z-[20] w-[20rem] min-h-[4rem] max-h-[20.2rem] top-[3.7rem] right-0 rounded-md shadow-around bg-white overflow-hidden'
    >
      {data?.me ? (
        <CartContent cart={data.me.cart} data={data} />
      ) : (
        <CartContent cart={localCart} data={data} isLocal={true} />
      )}
    </motion.div>
  )
}
