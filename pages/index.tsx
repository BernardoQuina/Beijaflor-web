import { NextPage } from 'next'
import { withApollo } from '../lib/apollo'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <div className='min-h-screen font-bold text-4xl bg-blue-500 text-blue-50 flex items-center justify-center'>
      Hello world!
    </div>
  )
}

export default withApollo({ssr: true})(Home)
