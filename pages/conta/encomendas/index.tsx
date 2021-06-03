import { NextPage } from 'next'

import { Layout } from '../../../components/Layout'
import { useMeQuery } from '../../../lib/generated/graphql'
import { isServer } from '../../../utils/isServer'
import { ArrowDown } from '../../../components/svg/ArrowDown'
import { useIsAuth } from '../../../utils/useIsAuth'
import { useRouter } from 'next/router'
import { OrderItem } from '../../../components/OrderItem'

interface encomendasProps {}

const encomendas: NextPage<encomendasProps> = ({}) => {
  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  const router = useRouter()

  useIsAuth(true)

  return (
    <Layout>
      <button
        className='flex lg:mb-0 lg:ml-10  p-1 -mt-12 lg:-mt-20'
        onClick={() => router.back()}
      >
        <ArrowDown
          tailwind='h-4 lg:h-6 text-green-dark self-center transform rotate-90'
          strokeWidth={3}
        />
        <h6 className='mx-1 lg:mx-2 text-lg text-green-dark tracking-widest self-center'>
          voltar
        </h6>
      </button>
      <div className='flex mx-auto max-w-6xl'>
        <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark'>
          As minhas Encomendas
          <div className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
        </h1>
      </div>
      {data?.me?.orders.length > 0 ? (
        <div className='w-full max-w-4xl mx-auto flex flex-col mt-4'>
          {data?.me?.orders.map((order) => (
            <OrderItem order={order} key={order.id} />
          ))}
        </div>
      ) : (
        <h3 className='mt-6 text-lg text-green-dark max-w-5xl mx-auto'>
          Ainda não tem nenhuma encomenda!
        </h3>
      )}
    </Layout>
  )
}

export default encomendas
