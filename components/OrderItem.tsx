import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Image } from 'cloudinary-react'
import { DateTime } from 'luxon'

import { BasicOrderInfoFragment } from '../lib/generated/graphql'
import { ArrowDown } from './svg/ArrowDown'
import { Settings } from './svg/Settings'
import { OrderOptionsModal } from './admin/OrderOptionsModal'

interface OrderItemProps {
  order: BasicOrderInfoFragment
  admin?: boolean
}

export const OrderItem: React.FC<OrderItemProps> = ({ order, admin }) => {
  const [showOrderOptionsModal, setShowOrderOptionsModal] = useState(false)

  const orderOptionsButtonNode = useRef<HTMLButtonElement | null>(null)
  const orderOptionsModalNode = useRef<HTMLDivElement | null>(null)

  const orderOptionsButtonClick = (e: any) => {
    if (
      orderOptionsButtonNode.current &&
      orderOptionsButtonNode.current.contains(e.target)
    ) {
      return
    }
    if (
      orderOptionsModalNode.current &&
      orderOptionsModalNode.current.contains(e.target)
    ) {
      return
    }

    setShowOrderOptionsModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', orderOptionsButtonClick)

    return () => {
      document.removeEventListener('mousedown', orderOptionsButtonClick)
    }
  })

  return (
    <div className='relative flex w-full px-2 my-4 rounded-md shadow-md bg-white'>
      {showOrderOptionsModal && (
        <OrderOptionsModal
          order={order}
          setShowOrderOptionsModal={setShowOrderOptionsModal}
          modalRef={orderOptionsModalNode}
        />
      )}
      {admin && (
        <button
          className='absolute top-2 right-2 lg:right-10 mx-auto bg-green-extraLight p-1 rounded-md shadow-md h-8 self-center hover:opacity-80'
          type='button'
          onClick={() => setShowOrderOptionsModal(!showOrderOptionsModal)}
          ref={orderOptionsButtonNode}
        >
          <Settings tailwind='h-5 text-green-dark' />
        </button>
      )}
      <Link href={`/conta/encomendas/${order.id}`}>
        <a className='absolute flex top-[50%] translate-y-[-50%] right-2 p-1 h-[30%] lg:h-[85%] rounded-md shadow-md bg-green-extraLight hover:opacity-80'>
          <ArrowDown
            tailwind='h-4 self-center text-green-dark transform -rotate-90'
            strokeWidth={2}
          />
        </a>
      </Link>
      <div className='flex pt-2'>
        <div className='w-14 h-20 mx-auto mb-auto flex overflow-hidden rounded-md'>
          <Image
            alt={order.orderItems[0].product.name}
            className='my-auto'
            cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
            publicId={order.orderItems[0].product.images[0]}
            quality={20}
            height={286}
            width={200}
            gravity='auto'
            crop='fill'
            secure={true}
          />
        </div>
      </div>
      <div className='flex flex-col py-2 pl-2'>
        <h5 className='text-green-dark font-serif ml-1 max-w-[85%]'>
          {order.orderItems[0].quantity} x {order.orderItems[0].product.name}
          {order.orderItems.length > order.orderItems[0].quantity
            ? ` e ${order.quantity - order.orderItems[0].quantity}
                  outros`
            : null}
        </h5>
        <div className='flex flex-col lg:flex-row mt-2 w-[85%] xs:w-[90%] lg:w-[97%]'>
          <div className='flex flex-col ml-1 min-w-[9rem]'>
            <h5 className='text-gray-400'>Data de encomenda</h5>
            <p className='ml-1 tracking-wide text-green-dark'>
              {DateTime.fromISO(order.createdAt)
                .setLocale('pt-pt')
                .toLocaleString()}
            </p>
          </div>
          <div className='flex flex-col ml-1 lg:ml-10 mt-2 lg:mt-0 w-full lg:w-[14rem]'>
            <h5 className='text-gray-400'>Enviar para</h5>
            <p className='ml-1 tracking-wide text-green-dark'>
              {order.address.completeName}
            </p>
          </div>
          <div className='flex flex-col ml-1 lg:ml-5 mt-2 lg:mt-0'>
            <h5 className='text-gray-400'>Total</h5>
            <div className='flex ml-1'>
              <h5 className='mr-1 text-green-dark text-sm self-start tracking-wide font-bold'>
                €
              </h5>
              <h5 className='text-green-dark tracking-wide font-bold'>
                {order.price.toFixed(2)}
              </h5>
            </div>
          </div>
          <div className='flex flex-col ml-1 lg:ml-5 mt-2 lg:mt-0'>
            <h5 className='text-gray-400'>Estado</h5>

            <h5 className='text-green-dark tracking-wide'>{order.state}</h5>
          </div>
          <div className='flex flex-col ml-1 lg:ml-5 mt-2 lg:mt-0'>
            <h5 className='text-gray-400'>ID da encomenda</h5>
            <p className='ml-1 tracking-wide text-green-dark text-sm'>
              {order.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
