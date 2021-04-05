import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { setContext } from '@apollo/client/link/context'
import { NextPageContext } from 'next'
import { createWithApollo } from './createWithApollo'
import { getMainDefinition } from '@apollo/client/utilities'

const createClient = (_ctx: NextPageContext) => {
  const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    credentials: 'include',
  })

  const wsLink = process.browser
    ? new WebSocketLink({
        uri: `${process.env.NEXT_PUBLIC_API_URL_WS}/graphql`,
        options: {
          reconnect: true,
        },
      })
    : null

  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
      },
    }
  })

  const splitLink = process.browser
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          )
        },
        wsLink as WebSocketLink,
        authLink.concat(httpLink)
      )
    : authLink.concat(httpLink)

  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: splitLink,
    cache: new InMemoryCache({}),
  })

  return client
}

export const withApollo = createWithApollo(
  (createClient as unknown) as ApolloClient<NormalizedCacheObject>
)
