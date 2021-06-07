import { motion } from 'framer-motion'
import React, {
  useRef,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

import { BasicAddressInfoFragment } from '../../lib/generated/graphql'
import { Settings } from '../svg/Settings'
import { AddressOptionsModal } from './AddressOptionsModal'
import { DeleteAddressModal } from './DeleteAddressModal'
import { EditAddressModal } from './EditAddressModal'

interface AddressItemProps {
  address: BasicAddressInfoFragment
  checkout?: boolean
  setAddressId?: Dispatch<SetStateAction<string>>
  addressId?: string
}

export const AddressItem: React.FC<AddressItemProps> = ({
  address,
  checkout,
  setAddressId,
  addressId,
}) => {
  const [showAddressOptionsModal, setShowAddressOptionsModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const addressOptionsButtonNode = useRef<HTMLButtonElement | null>(null)
  const addressOptionsModalNode = useRef<HTMLDivElement | null>(null)

  const addressOptionsButtonClick = (e: any) => {
    if (
      addressOptionsButtonNode.current &&
      addressOptionsButtonNode.current.contains(e.target)
    ) {
      return
    }
    if (
      addressOptionsModalNode.current &&
      addressOptionsModalNode.current.contains(e.target)
    ) {
      return
    }

    setShowAddressOptionsModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', addressOptionsButtonClick)

    return () => {
      document.removeEventListener('mousedown', addressOptionsButtonClick)
    }
  })

  return (
    <div className='h-[20rem]'>
      <motion.div
        layoutId={`address ${address.id}`}
        className={`relative flex flex-col mx-auto p-4 ${
          checkout ? 'w-[17rem] xs:w-[18rem] min-h-[18.5rem]' : 'w-[20rem] min-h-[15rem]'
        } max-h-[20rem] rounded-md  bg-white ${
          addressId === address.id
            ? 'border-4 border-green-200 shadow-inner'
            : 'shadow-around'
        }`}
      >
        {showAddressOptionsModal && (
          <AddressOptionsModal
            modalRef={addressOptionsModalNode}
            setShowEditModal={setShowEditModal}
            setShowDeleteModal={setShowDeleteModal}
          />
        )}
        <EditAddressModal
          setShowEditModal={setShowEditModal}
          showEditModal={showEditModal}
          address={address}
        />
        <DeleteAddressModal
          setShowDeleteModal={setShowDeleteModal}
          showDeleteModal={showDeleteModal}
          address={address}
        />
        <h3 className='font-bold tracking-wider text-green-dark'>
          {address.completeName}
        </h3>
        <p className='mt-4 text-green-dark tracking-wide'>
          {address.street}, {address.numberAndBlock}
        </p>
        <p className='mt-1 text-green-dark tracking-wide'>
          {address.postal} {address.zone},
        </p>
        <p className='mt-2 text-green-dark tracking-wide'>{address.region},</p>
        <p className='mt-1 mb-2 text-green-dark tracking-wide'>
          {address.country}
        </p>
        <p className='mt-auto text-green-dark tracking-wide'>
          {address.contact}
        </p>
        {checkout && (
          <button
            type='button'
            onClick={() => {
              setAddressId(address.id)
            }}
            className='w-[10rem] mt-2 p-2 rounded-md shadow-md bg-green-extraLight hover:opacity-80'
          >
            <p className='text-green-dark tracking-wide'>Selecionar morada</p>
          </button>
        )}
        <button
          type='button'
          onClick={() => setShowAddressOptionsModal(!showAddressOptionsModal)}
          ref={addressOptionsButtonNode}
          className='absolute bottom-4 right-4 bg-green-extraLight p-1 rounded-md shadow-md h-8 self-center hover:opacity-80'
        >
          <Settings tailwind='h-5 text-green-dark' />
        </button>
      </motion.div>
    </div>
  )
}
