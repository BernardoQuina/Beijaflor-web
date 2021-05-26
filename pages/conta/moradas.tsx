import { NextPage } from 'next'
import { useState } from 'react'
import { AddressItem } from '../../components/account/AddressItem'
import { NewAddressModal } from '../../components/account/NewAddressModal'

import { Layout } from '../../components/Layout'
import { Plus } from '../../components/svg/Plus'
import { useMeQuery } from '../../lib/generated/graphql'
import { isServer } from '../../utils/isServer'

interface moradasProps {}

const moradas: NextPage<moradasProps> = ({}) => {
  const [showNewAddressModal, setShowNewAddressModal] = useState(false)

  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  return (
    <Layout>
      <NewAddressModal
        setShowAddressModal={setShowNewAddressModal}
        showAddressModal={showNewAddressModal}
      />
      <div className='flex mx-auto -mt-10 max-w-6xl'>
        <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark'>
          As minhas moradas
          <div className='absolute z-[-1] ml-1 -mt-3 lg:-mt-4 rounded-sm bg-pink-light w-full h-[0.4rem] lg:h-[0.6rem]'></div>
        </h1>
      </div>
      <div className='flex mx-auto max-w-6xl'>
        <button
          className='group flex mt-4 lg:px-3 ml-auto mr-2 px-2 self-center h-10 rounded-md shadow-md bg-green-extraLight'
          onClick={() => setShowNewAddressModal(true)}
        >
          <h5 className='mr-2 self-center tracking-wider text-green-dark group-hover:font-bold'>
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
          <h4 className='ml-4 mt-10 lg:mt-0 text-center lg:text-left text-xl text-green-dark tracking-wider'>
              Ainda não tem nenhuma morada guardada!
            </h4>
        </div>
      )}
    </Layout>
  )
}

export default moradas
