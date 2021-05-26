import { NextPage } from 'next'
import { useState } from 'react'
import { NewAddressModal } from '../../components/account/NewAddressModal'

import { Layout } from '../../components/Layout'
import { Plus } from '../../components/svg/Plus'

interface moradasProps {}

const moradas: NextPage<moradasProps> = ({}) => {
  const [showNewAddressModal, setShowNewAddressModal] = useState(false)
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
    </Layout>
  )
}

export default moradas
