import React, { useRef, useEffect, useState } from 'react'

import { BasicAddressInfoFragment } from '../../lib/generated/graphql'
import { Settings } from '../svg/Settings'
import { AddressOptionsModal } from './AddressOptionsModal'
import { EditAddressModal } from './EditAddressModal'

interface AddressItemProps {
  address: BasicAddressInfoFragment
}

export const AddressItem: React.FC<AddressItemProps> = ({ address }) => {
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
    <div className='relative flex flex-col mx-auto p-4 w-[20rem] max-h-[15rem] rounded-md shadow-around bg-white'>
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
      <p className='mt-auto text-green-dark tracking-wide'>{address.contact}</p>
      <button
        type='button'
        onClick={() => setShowAddressOptionsModal(!showAddressOptionsModal)}
        ref={addressOptionsButtonNode}
        className='absolute bottom-4 right-4 bg-green-extraLight p-1 rounded-md shadow-md h-8 self-center'
      >
        <Settings tailwind='h-5 text-green-dark' />
      </button>
    </div>
  )
}
