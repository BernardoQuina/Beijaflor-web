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
      <div className='grid pt-2 xs:pt-6 w-full mx-auto max-w-6xl h-[19rem] xs:h-[32rem] grid-cols-1 sm:grid-cols-2 sm:px-8 gap-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
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
      <div className='flex w-full h-[4rem] border-t'>
        <div className='flex flex-col w-[55%] lg:w-[78%] p-2'>
          <div className='hidden lg:flex'>
            <h3 className='text-green-dark tracking-wide'>Entregar em:</h3>
          </div>
          <div className='flex'>
            <h3 className='text-green-dark'>
              {addressId
                ? data?.me.addresses.filter(
                    (myAddress) => myAddress.id === addressId
                  )[0].street
                : null}
            </h3>
          </div>
        </div>
        <div className='flex w-[45%] lg:w-[22%]  ml-auto p-2'>
          <button
            type='button'
            className='h-full w-full max-w-[8rem] ml-auto flex flex-col rounded-md shadow-md bg-green-extraLight hover:opacity-80 opacity-100'
            onClick={() => setCheckoutFase('date')}
          >
            <h5 className='text-center m-auto text-green-dark tracking-wider'>
              Continuar
            </h5>
          </button>
        </div>
      </div>
    </div>
  )
}
