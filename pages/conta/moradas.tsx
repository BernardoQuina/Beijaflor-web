import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AddressItem } from '../../components/account/AddressItem'
import { NewAddressModal } from '../../components/account/NewAddressModal'

import { Layout } from '../../components/Layout'
import { Plus } from '../../components/svg/Plus'
import { useMeQuery } from '../../lib/generated/graphql'
import { isServer } from '../../utils/isServer'
import { useIsAuth } from '../../utils/useIsAuth'
import { ArrowDown } from '../../components/svg/ArrowDown'

interface moradasProps {}

const moradas: NextPage<moradasProps> = ({}) => {
  const [showNewAddressModal, setShowNewAddressModal] = useState(false)

  const router = useRouter()

  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  useIsAuth(true)

  return (
    <Layout>
      <NewAddressModal
        setShowAddressModal={setShowNewAddressModal}
        showAddressModal={showNewAddressModal}
      />
      <div className='flex mx-auto w-full max-w-7xl lg:mb-0 -mt-12 lg:-mt-20'>
        <button className='flex p-1' onClick={() => router.back()}>
          <ArrowDown
            tailwind='h-4 lg:h-6 text-green-dark self-center transform rotate-90'
            strokeWidth={3}
          />
          <h6 className='mx-1 lg:mx-2 text-lg text-green-dark tracking-widest self-center'>
            voltar
          </h6>
        </button>
      </div>
      <div className='flex mx-auto max-w-6xl'>
        <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark'>
          As minhas moradas
          <div className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
        </h1>
      </div>
      <div className='flex mx-auto max-w-6xl'>
        <button
          className='group flex mt-4 lg:px-3 ml-auto mr-2 px-2 self-center h-10 rounded-md shadow-md bg-green-extraLight hover:opacity-80'
          onClick={() => setShowNewAddressModal(true)}
        >
          <h5 className='mr-2 self-center tracking-wider text-green-dark'>
            Nova morada
          </h5>
          <Plus tailwind='m-auto h-6 text-green-dark' strokeWidth={2} />
        </button>
      </div>
      {data?.me && data.me.addresses.length > 0 ? (
        <div className='grid mt-8 mx-auto max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {data.me.addresses.map((address) => (
            <AddressItem key={address.id} address={address} />
          ))}
        </div>
      ) : (
        <div>
          <h4 className='text-lg text-green-dark max-w-5xl mx-auto'>
            Ainda não tem nenhuma morada guardada!
          </h4>
        </div>
      )}
    </Layout>
  )
}

export default moradas
