import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { useApollo } from '../lib/apolloClient'

import '../styles/globals.css'

import { CartModalProvider } from '../context/CartModalContext'
import { WishlistModalProvider } from '../context/wishListModalContext'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <CartModalProvider>
        <WishlistModalProvider>
          <Component {...pageProps} />
        </WishlistModalProvider>
      </CartModalProvider>
    </ApolloProvider>
  )
}

export default MyApp
