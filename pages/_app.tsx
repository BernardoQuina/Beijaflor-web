import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { useApollo } from '../lib/apolloClient'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
