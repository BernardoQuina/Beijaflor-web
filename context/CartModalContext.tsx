import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react'

const defaultState = false

const CartModalContext =
  createContext<{
    cartModal: boolean
    setCartModal: Dispatch<'true' | 'false'>
  }>(undefined)

const cartModalReducer = (_state: boolean, action: 'true' | 'false') => {
  switch (action) {
    case 'true':
      return true
    case 'false':
      return false
  }
}

export const CartModalProvider = ({ children }: { children: ReactNode }) => {
  const [cartModal, setCartModal] = useReducer(cartModalReducer, defaultState)

  return (
    <CartModalContext.Provider value={{ cartModal, setCartModal }}>
      {children}
    </CartModalContext.Provider>
  )
}

export const useCartModal = () => {
  const context = useContext(CartModalContext)

  if (!context)
    throw new Error('useCartModal must be used inside a cartModalProvider.')

  return context
}
