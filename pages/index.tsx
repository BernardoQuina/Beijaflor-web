import { NextPage } from 'next'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <div className='min-h-screen bg-blue-500 text-blue-50 flex items-center justify-center'>
      Hello world!
    </div>
  )
}

export default Home
