import { GetServerSideProps, NextPage } from 'next'

import { Layout } from '../components/Layout'
import { HeroSection } from '../components/home/HeroSection'
import { AdvantagesSection } from '../components/home/AdvantagesSection'
import { SpecialOccasionSection } from '../components/home/SpecialOccasionSection'
import { CategoriesSection } from '../components/home/CategoriesSection'
import { MostPopularSection } from '../components/home/MostPopularSection'
import { initializeApollo } from '../lib/apolloClient'
import { ProductsDocument } from '../lib/generated/graphql'
interface HomeProps {
  serverError?: { message: string }
}

const Home: NextPage<HomeProps> = ({}) => {

  return (
    <Layout>
      <HeroSection />
      <SpecialOccasionSection />
      <MostPopularSection />
      <CategoriesSection />
      <AdvantagesSection />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ProductsDocument,
    variables: { search: 'dia da mãe' },
    errorPolicy: 'all',
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Home
