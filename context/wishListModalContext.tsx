import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react'

const defaultState = false

const WishlistModalContext =
  createContext<{
    wishlistModal: boolean
    setWishlistModal: Dispatch<'true' | 'false'>
  }>(undefined)

const wishlistModalReducer = (_state: boolean, action: 'true' | 'false') => {
  switch (action) {
    case 'true':
      return true
    case 'false':
      return false
  }
}

export const WishlistModalProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [wishlistModal, setWishlistModal] = useReducer(
    wishlistModalReducer,
    defaultState
  )

  return (
    <WishlistModalContext.Provider value={{ wishlistModal, setWishlistModal }}>
      {children}
    </WishlistModalContext.Provider>
  )
}

export const useWishlistModal = () => {
  const context = useContext(WishlistModalContext)

  if (!context)
    throw new Error(
      'useWishlistModal must be used inside a wishlistModalProvider.'
    )

  return context
}
