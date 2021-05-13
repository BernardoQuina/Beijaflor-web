import { GetServerSideProps, NextPage } from 'next'

import { Layout } from '../components/Layout'
import { HeroSection } from '../components/home/HeroSection'
import { AdvantagesSection } from '../components/home/AdvantagesSection'
import { SpecialOccasionSection } from '../components/home/SpecialOccasionSection'
import { CategoriesSection } from '../components/home/CategoriesSection'
import { MostPopularSection } from '../components/home/MostPopularSection'
import { initializeApollo } from '../lib/apolloClient'
import { CategoriesDocument } from '../lib/generated/graphql'
interface HomeProps {
  serverError?: { message: string }
}

const Home: NextPage<HomeProps> = ({}) => {

  return (
    <Layout>
      <HeroSection />
      <AdvantagesSection />
      <SpecialOccasionSection />
      <MostPopularSection />
      <CategoriesSection />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const response = await apolloClient.query({
    query: CategoriesDocument,
    variables: { search: '' },
    errorPolicy: 'all',
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      serverError: response.errors ? response.errors[0] : null,
    },
  }
}

export default Home
