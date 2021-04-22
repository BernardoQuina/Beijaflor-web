import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { Layout } from '../../../components/Layout'

interface subdomainProps {

}

const subdomain: NextPage<subdomainProps> = ({  }) => {
  const router = useRouter()

  console.log(router.query)

  return (
    <Layout>
      hello subdomain
    </Layout>
  )
}

export default subdomain
