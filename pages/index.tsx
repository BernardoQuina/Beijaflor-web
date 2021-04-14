import { NextPage } from 'next'

import { Layout } from '../components/Layout'
import { HeroSection } from '../components/HeroSection'
import { AdvantagesSection } from '../components/AdvantagesSection'
import { SpecialOccasionSection } from '../components/SpecialOccasionSection'
import { CategoriesSection } from '../components/CategoriesSection'
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
      <CategoriesSection />
    </Layout>
  )
}

export default Home
