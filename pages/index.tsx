import { NextPage } from 'next'
import Link from 'next/link'
import { useMeQuery } from '../lib/generated/graphql'
interface HomeProps {
  serverError?: { message: string }
}

const Home: NextPage<HomeProps> = () => {
  const { data, loading, error } = useMeQuery({ errorPolicy: 'all' })

  return (
    <div className='min-h-screen text-4xl tracking-[0.5rem] bg-pink-light text-green-light items-center justify-center'>
      <Link href='/15a3a60b-3e07-4360-a756-9221e6f85c2a'>
        <a>Go bob</a>
      </Link>
      <div>Florista Beijaflor</div>
      {loading ? (
        <div>loading</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : data && data.me ? (
        <div>{data.me.name}</div>
      ) : null}
    </div>
  )
}

export default Home
