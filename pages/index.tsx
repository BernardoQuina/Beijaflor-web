import { GetServerSideProps, NextPage } from 'next'

import { Layout } from '../components/Layout'
import { Meta } from '../components/Meta'
import { HeroSection } from '../components/home/HeroSection'
import { AdvantagesSection } from '../components/home/AdvantagesSection'
import { SpecialOccasionSection } from '../components/home/SpecialOccasionSection'
import { CategoriesSection } from '../components/home/CategoriesSection'
import { MostPopularSection } from '../components/home/MostPopularSection'
import { initializeApollo } from '../lib/apolloClient'
import {
  HeaderCategoryDocument,
  PopularCategoriesDocument,
  PopularProductsDocument,
  SpecialOccasionDocument,
} from '../lib/generated/graphql'
interface HomeProps {
  serverError?: { message: string }
}

const Home: NextPage<HomeProps> = ({}) => {
  return (
    <Layout>
      <Meta title='Início | Florista Beijaflor' />
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
    query: PopularProductsDocument,
    errorPolicy: 'all',
  })

  await apolloClient.query({
    query: SpecialOccasionDocument,
    errorPolicy: 'all',
  })

  await apolloClient.query({
    query: PopularCategoriesDocument,
    errorPolicy: 'all',
  })

  await apolloClient.query({
    query: HeaderCategoryDocument,
    errorPolicy: 'all',
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Home
