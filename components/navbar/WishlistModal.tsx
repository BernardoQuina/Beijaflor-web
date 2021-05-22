import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react'

import { MeQuery } from '../../lib/generated/graphql'
import { LocalCart } from '../../utils/localStorageCart'
import { isServer } from '../../utils/isServer'
import { CartContent } from './CartContent'

interface WishlistModalProps {
  data: MeQuery
  modalRef: MutableRefObject<HTMLDivElement>
  localStorageChange: boolean
  setLocalStorageChange: Dispatch<SetStateAction<boolean>>
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  data,
  modalRef,
  localStorageChange,
  setLocalStorageChange,
}) => {
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
    <div
      ref={modalRef}
      className='absolute flex flex-col z-[20] w-[20rem] min-h-[4rem] max-h-[20.2rem] top-[3.7rem] right-0 rounded-md shadow-around bg-white overflow-hidden'
    >
      {data?.me ? (
        <div>
          
        </div>
      ) : (
        null
        // <CartContent
        //   cart={localCart}
        //   data={data}
        //   setLocalStorageChange={setLocalStorageChange}
        //   isLocal={true}
        // />
      )}
    </div>
  )
}
