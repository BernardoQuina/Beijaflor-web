import { NextPage } from 'next'

import { Layout } from '../components/Layout'
import { HeroSection } from '../components/home/HeroSection'
import { AdvantagesSection } from '../components/home/AdvantagesSection'
import { SpecialOccasionSection } from '../components/home/SpecialOccasionSection'
import { CategoriesSection } from '../components/home/CategoriesSection'
import { MostPopularSection } from '../components/home/MostPopularSection'
// import Link from 'next/link'
// import { useMeQuery } from '../lib/generated/graphql'
interface HomeProps {
  serverError?: { message: string }
}

const Home: NextPage<HomeProps> = () => {
  // const { data, loading, error } = useMeQuery({ errorPolicy: 'all' })

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

export default Home
