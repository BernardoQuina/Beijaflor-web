import { MutableRefObject, useEffect, useState } from 'react'

import { MeQuery } from '../../lib/generated/graphql'
import { LocalCart } from '../../utils/localStorageCart'
import { isServer } from '../../utils/isServer'
import { WishlistContent } from './WishlistContent'
import { LocalWishlist } from '../../utils/localStorageWishlist'
import { useLocalStorageChange } from '../../context/localStorageChangeContext'

interface WishlistModalProps {
  data: MeQuery
  modalRef: MutableRefObject<HTMLDivElement>
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  data,
  modalRef,
}) => {
  const { localStorageChange } = useLocalStorageChange()

  const [localWishlist, setLocalWishlist] = useState<LocalWishlist>({
    products: [],
  })

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
      setLocalWishlist(JSON.parse(localStorage.getItem('wishlist')))
    }
  }, [localStorageChange])

  useEffect(() => {
    setLocalWishlist(JSON.parse(localStorage.getItem('wishlist')))
  }, [])

  return (
    <div
      ref={modalRef}
      className='absolute flex flex-col z-[20] w-[20rem] min-h-[4rem] max-h-[20.2rem] top-[3.7rem] right-0 rounded-md shadow-around bg-white overflow-hidden'
    >
      {data?.me ? (
        <WishlistContent
          data={data}
          wishlist={data.me.wishlist}
          cart={localCart}
        />
      ) : (
        <WishlistContent
          data={data}
          wishlist={localWishlist}
          cart={localCart}
        />
      )}
    </div>
  )
}
