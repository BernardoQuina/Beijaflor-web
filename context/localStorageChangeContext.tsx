import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react'

const defaultState = false

const LocalStorageChangeContext =
  createContext<{
    localStorageChange: boolean
    setLocalStorageChange: Dispatch<'true' | 'false'>
  }>(undefined)

const localStorageChangeReducer = (
  _state: boolean,
  action: 'true' | 'false'
) => {
  switch (action) {
    case 'true':
      return true
    case 'false':
      return false
  }
}

export const LocalStorageChangeProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [localStorageChange, setLocalStorageChange] = useReducer(
    localStorageChangeReducer,
    defaultState
  )

  return (
    <LocalStorageChangeContext.Provider
      value={{ localStorageChange, setLocalStorageChange }}
    >
      {children}
    </LocalStorageChangeContext.Provider>
  )
}

export const useLocalStorageChange = () => {
  const context = useContext(LocalStorageChangeContext)

  if (!context)
    throw new Error(
      'useLocalStorageChange must be used inside a localStorageChangeProvider.'
    )

  return context
}
