import Link from 'next/link'
import { DateTime } from 'luxon'
import { Image } from 'cloudinary-react'

import { useConfirmedOrderQuery } from '../../lib/generated/graphql'

interface OrderConfirmationProps {
  confirmedOrderId: string
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  confirmedOrderId,
}) => {
  const { data: orderData } = useConfirmedOrderQuery({
    errorPolicy: 'all',
    variables: { orderId: confirmedOrderId },
  })

  return (
    <div className='mt-3 xs:mt-6 flex flex-col mx-auto max-w-2xl h-[27rem] xs:h-[40rem] bg-white rounded-md shadow-around '>
      <div className='w-full flex h-[2rem] border-b'>
        <h3 className='my-auto ml-3 font-bold text-green-dark tracking-wide'>
          Confirmação de encomenda
        </h3>
      </div>
      <div className='w-full flex flex-col bg-green-400 p-2 shadow-md'>
        <h2 className='text-center text-lg text-white tracking-wide'>
          Pagamento bem sucedido!
        </h2>
      </div>
      <div className='flex flex-col w-full h-[25rem] xs:h-[38rem] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full'>
        <h4 className='mt-4 mb-2 ml-4 text-green-dark tracking-wide'>
          Detalhes da encomenda:
        </h4>
        <div className='w-full flex flex-col px-2 border-t'>
          <div className='flex flex-col lg:flex-row p-2'>
            <div className='flex flex-col p-2 mr-auto'>
              <h6 className='text-gray-400 tracking-wide mb-1'>
                Data de encomenda
              </h6>
              <p className='tracking-wide'>
                {DateTime.fromISO(orderData?.order?.createdAt)
                  .setLocale('pt-pt')
                  .toLocaleString(DateTime.DATETIME_MED)}
              </p>
            </div>
            <div className='flex flex-col p-2 lg:mr-auto border-t lg:border-t-0 lg:border-l'>
              <h6 className='text-gray-400 tracking-wide mb-1'>Pagamento</h6>
              <p className='tracking-wide'>{orderData?.order?.cardDetails}</p>
            </div>
            <div className='flex flex-col lg:w-[50%] p-2 border-t lg:border-t-0 lg:border-l'>
              <h6 className='text-gray-400 tracking-wide mb-1'>Morada</h6>
              <p className='tracking-wide'>
                {orderData?.order?.address.completeName},
              </p>
              <p className='tracking-wide'>
                {`${orderData?.order?.address.street}, ${orderData?.order?.address.numberAndBlock}, ${orderData?.order?.address.postal} ${orderData?.order?.address.zone}`}
              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col px-2'>
          <div className='flex flex-col px-2 py-4 border-t'>
            {orderData?.order?.orderItems.map((orderItem, index) => (
              <div
                key={orderItem.id}
                className={`w-full py-2 flex ${
                  orderData?.order?.orderItems.length !== index + 1 &&
                  'border-b'
                }`}
              >
                <div className='flex'>
                  <div className='w-14 h-16 m-auto flex overflow-hidden rounded-md'>
                    <Image
                      className='my-auto'
                      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                      publicId={orderItem.product.images[0]}
                      quality={20}
                      height={250}
                      width={200}
                      gravity='auto'
                      crop='fill'
                      secure={true}
                    />
                  </div>
                </div>
                <div className='flex flex-col w-[65%] lg:w-[75%]'>
                  <div className='flex flex-col ml-2 my-auto'>
                    <Link
                      href={`/produtos/${encodeURIComponent(
                        orderItem.product.name
                      ).replace(/%20/g, '-')}`}
                    >
                      <a>
                        <h5 className='mt-auto leading-tight text-green-dark font-serif tracking-wider'>
                          {orderItem.product.name}
                        </h5>
                      </a>
                    </Link>
                    <div className='mb-auto flex mt-1'>
                      <h5 className='mr-1 text-xs text-green-dark font-bold'>
                        €
                      </h5>
                      <h5 className='text-green-dark'>
                        {orderItem.product.price.toFixed(2)}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className='flex mx-auto lg:mr-2 min-w-[2.2rem]'>
                  <div className='flex self-center'>
                    <h5 className='mr-2 text-green-dark'>
                      x {orderItem.quantity}
                    </h5>
                  </div>
                </div>
                <div className='flex ml-auto lg:mr-2  min-w-[3.2rem]'>
                  <div className='flex self-center'>
                    <h5 className='mr-1 text-xs text-green-dark font-bold'>
                      €
                    </h5>
                    <h5 className='text-green-dark'>
                      {(orderItem.product.price * orderItem.quantity).toFixed(
                        2
                      )}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col border-t'>
            <div className='flex px-4 py-2'>
              <h5 className='text-gray-400 tracking-wide'>Subtotal</h5>
              <h5 className='ml-auto mr-1 text-sm self-start text-green-dark'>
                €
              </h5>
              <h5 className='text-green-dark'>
                {(orderData?.order?.price * 0.77).toFixed(2)}
              </h5>
            </div>
            <div className='flex px-4 py-2'>
              <h5 className='text-gray-400 tracking-wide'>IVA (23%)</h5>
              <h5 className='ml-auto mr-1 text-sm self-start text-green-dark'>
                €
              </h5>
              <h5 className='text-green-dark'>
                {(orderData?.order?.price * 0.23).toFixed(2)}
              </h5>
            </div>
            <div className='flex px-4 py-2'>
              <h5 className='text-gray-500 font-bold tracking-wide'>Total</h5>
              <h5 className='ml-auto mr-1 text-green-dark text-sm self-start tracking-wide font-bold'>
                €
              </h5>
              <h5 className='text-green-dark tracking-wide font-bold'>
                {orderData?.order?.price.toFixed(2)}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col p-2 border-t'>
        <Link href='/conta/encomendas'>
          <a className='mx-auto bg-green-extraLight rounded-md shadow-md p-2 hover:opacity-80'>
            <p className='text-green-dark '>minhas encomendas</p>
          </a>
        </Link>
      </div>
    </div>
  )
}
