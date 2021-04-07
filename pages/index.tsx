import { NextPage } from 'next'
import { Layout } from '../components/Layout'
// import Link from 'next/link'
// import { useMeQuery } from '../lib/generated/graphql'
interface HomeProps {
  serverError?: { message: string }
}

const Home: NextPage<HomeProps> = () => {
  // const { data, loading, error } = useMeQuery({ errorPolicy: 'all' })

  return (
    <Layout>
      <div className='flex mt-20'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
      <div className='flex mt-10'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
      <div className='flex mt-10'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
      <div className='flex mt-10'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
      <div className='flex mt-10'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
      <div className='flex mt-10'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
      <div className='flex mt-10'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
      <div className='flex mt-10'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
      <div className='flex mt-10'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
      <div className='flex mt-10'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
      <div className='flex mt-10'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
      <div className='flex mt-10'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
      <div className='flex mt-10'>
        <h1 className='text-5xl'>hello</h1>
        <h1 className='text-5xl mx-auto'>hello</h1>
        <h1 className='text-5xl'>hello</h1>
      </div>
    </Layout>
  )
}

export default Home
