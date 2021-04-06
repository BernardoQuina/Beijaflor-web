import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { initializeApollo } from '../lib/apolloClient'
import { UserDocument, useUserQuery } from '../lib/generated/graphql'

interface UserProps {
  serverError?: { message: string }
}

const User: NextPage<UserProps> = ({ serverError }) => {
  const router = useRouter()

  const userId = router.query.example as string

  const { data, loading, error } = useUserQuery({
    errorPolicy: 'all',
    variables: { userId },
  })


  return (
    <div className='min-h-screen font-bold text-4xl bg-blue-500 text-blue-50 items-center justify-center'>
      <Link href='/'>
        <a>Go Home</a>
      </Link>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo()

  console.log('context: ', context.req)

  const response = await apolloClient.query({
    query: UserDocument,
    variables: { userId: context.query.example },
    errorPolicy: 'all',
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      serverError: response.errors ? response.errors[0] : null,
    },
  }
}

export default User
