import { GetServerSideProps, NextPage } from 'next'
import { initializeApollo } from '../lib/apolloClient'
import { UserDocument, useUserQuery } from '../lib/generated/graphql'

interface HomeProps {
  serverError?: { message: string }
}

const Home: NextPage<HomeProps> = ({ serverError }) => {
  const { data, loading, error } = useUserQuery({
    errorPolicy: 'all',
    variables: { userId: '15a3a60b-3e07-436-a7562e6f85c2a' },
  })


  return (
    <div className='min-h-screen font-bold text-4xl bg-blue-500 text-blue-50 flex items-center justify-center'>
      {loading ? (
        <div>loading</div>
      ) : error || serverError ? (
        <>
          <div>{error?.message}</div>
          <div>{serverError?.message}</div>
        </>
      ) : data ? (
        <div>
          <div>{data.user.name}</div>
        </div>
      ) : null}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const response = await apolloClient.query({
    query: UserDocument,
    variables: { userId: '15a3a60b-3e07-436-a7562e6f85c2a' },
    errorPolicy: 'all',
  })

  console.log('response error: ', response.errors)

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      serverError: response.errors[0] ? response.errors[0] : null,
    },
  }
}

export default Home
