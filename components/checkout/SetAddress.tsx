import { Dispatch, SetStateAction, useState } from 'react'

import { MeQuery } from '../../lib/generated/graphql'
import { NewAddressModal } from '../account/NewAddressModal'
import { AddressItem } from '../account/AddressItem'
import { Plus } from '../svg/Plus'
import { AnimateSharedLayout } from 'framer-motion'

interface SetAddressProps {
  data: MeQuery
  setCheckoutFase: Dispatch<SetStateAction<string>>
  setAddressId: Dispatch<SetStateAction<string>>
  addressId: string
}

export const SetAddress: React.FC<SetAddressProps> = ({
  data,
  setCheckoutFase,
  setAddressId,
  addressId,
}) => {
  const [showNewAddressModal, setShowNewAddressModal] = useState(false)

  console.log(data)

  return (
    <div className='mt-3 xs:mt-6 flex flex-col mx-auto max-w-2xl h-[27rem] xs:h-[40rem] bg-white rounded-md shadow-around'>
      <NewAddressModal
        setShowAddressModal={setShowNewAddressModal}
        showAddressModal={showNewAddressModal}
      />
      <div className='w-full flex h-[4rem] border-b'>
          <h3 className='my-auto ml-3 font-bold text-green-dark tracking-wide'>
            Moradas
          </h3>
          <button
            className='group flex my-auto lg:px-3 ml-auto mr-3 px-2 self-center h-10 rounded-md shadow-md bg-green-extraLight'
            onClick={() => setShowNewAddressModal(true)}
          >
            <h5 className='mr-2 self-center tracking-wider text-green-dark group-hover:font-bold'>
              Nova morada
            </h5>
            <Plus tailwind='m-auto h-6 text-green-dark' strokeWidth={2} />
          </button>
      </div>
      <div className='grid mt-4 pt-2 mx-auto max-w-6xl h-[30rem] grid-cols-1 sm:grid-cols-2 sm:px-8 gap-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
        <AnimateSharedLayout>
          {data.me.addresses.map((address) => (
            <AddressItem
              key={address.id}
              address={address}
              checkout={true}
              setAddressId={setAddressId}
              addressId={addressId}
            />
          ))}
        </AnimateSharedLayout>
      </div>
    </div>
  )
}
