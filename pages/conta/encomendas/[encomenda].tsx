import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'
import { Image } from 'cloudinary-react'
import { DateTime } from 'luxon'

import { Layout } from '../../../components/Layout'
import { Meta } from '../../../components/Meta'
import { ArrowDown } from '../../../components/svg/ArrowDown'
import { Shipping } from '../../../components/svg/Shipping'
import { useMeQuery, useSingleOrderQuery } from '../../../lib/generated/graphql'
import { isServer } from '../../../utils/isServer'
import { useIsAuth } from '../../../utils/useIsAuth'

interface encomendaProps {}

const encomenda: NextPage<encomendaProps> = ({}) => {
  const router = useRouter()

  const orderId = router.query.encomenda as string

  const { data } = useSingleOrderQuery({
    errorPolicy: 'all',
    variables: { orderId },
    skip: !orderId,
  })

  const { data: meData } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  useEffect(() => {
    if (data?.order?.userId && meData.me?.id) {
      if (data.order.userId !== meData.me.id && meData.me.role !== 'ADMIN') {
        console.log('pushing')
        router.push('/')
      }
    }
  }, [meData, data])

  useIsAuth(true)

  return (
    <Layout>
      <Meta title={`Encomenda ${data?.order?.id} | Florista Beijaflor`} />
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
      <div className='flex flex-col lg:flex-row mx-auto mt-4 max-w-6xl'>
        <h1 className='relative z-[0] mt-1 ml-2 mr-auto lg:mr-1 font-serif text-2xl md:text-3xl tracking-widest text-pink-dark'>
          Encomenda
          <div className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
        </h1>
      </div>
      <div className='flex flex-col w-full max-w-5xl mx-auto mt-6 h-[25rem] xs:min-h-[35rem] max-h-[38rem] bg-white rounded-md shadow-around overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full'>
        <h4 className='mt-4 mb-2 ml-4 text-green-dark tracking-wide'>
          Detalhes da encomenda:
        </h4>
        <div className='w-full flex flex-col px-2 border-t'>
          <div className='flex flex-col lg:flex-row p-2'>
            <div className='flex flex-col p-2 mr-auto'>
              <h6 className='text-gray-400 tracking-wide mb-1'>
                ID da encomenda
              </h6>
              <p className='text-sm text-green-dark'>{data?.order?.id}</p>
            </div>
            <div className='flex flex-col p-2 min-w-[16%] lg:mr-auto border-t lg:border-t-0 lg:border-l'>
              <h6 className='text-gray-400 tracking-wide mb-1'>
                Data do pedido
              </h6>
              <p className='tracking-wide text-green-dark'>
                {DateTime.fromISO(data?.order?.createdAt)
                  .setLocale('pt-pt')
                  .toLocaleString(DateTime.DATETIME_MED)}
              </p>
            </div>
            <div className='flex flex-col p-2 min-w-[13%] lg:mr-auto border-t lg:border-t-0 lg:border-l'>
              <h6 className='text-gray-400 tracking-wide mb-1'>
                Agendamento
              </h6>
              <p className='tracking-wide text-green-dark'>
                {DateTime.fromISO(data?.order?.deliveryDate)
                  .setLocale('pt-pt')
                  .toLocaleString()}
              </p>
            </div>
            <div className='flex flex-col p-2 lg:mr-auto border-t lg:border-t-0 lg:border-l'>
              <h6 className='text-gray-400 tracking-wide mb-1'>Pagamento</h6>
              <p className='tracking-wide text-green-dark'>
                {data?.order?.cardDetails}
              </p>
            </div>
            <div className='flex flex-col p-2 lg:mr-auto border-t lg:border-t-0 lg:border-l'>
              <h6 className='text-gray-400 tracking-wide mb-1'>Estado</h6>
              <p className='tracking-wide text-green-dark'>
                {data?.order?.state}
              </p>
            </div>
            <div className='flex flex-col lg:w-[40%] p-2 border-t lg:border-t-0 lg:border-l'>
              <h6 className='text-gray-400 tracking-wide mb-1'>Morada</h6>
              <p className='tracking-wide text-green-dark'>
                {data?.order?.address.completeName},
              </p>
              <p className='tracking-wide text-green-dark'>
                {`${data?.order?.address.street}, ${data?.order?.address.numberAndBlock}, ${data?.order?.address.postal} ${data?.order?.address.zone}`}
              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col px-2'>
          <div className='flex flex-col p-2 border-t'>
            {data?.order?.orderItems.map((orderItem, index) => (
              <div
                key={orderItem.id}
                className={`w-full py-2 flex ${
                  (data?.order?.orderItems.length !== index + 1 ||
                    data?.order?.price < 35) &&
                  'border-b'
                }`}
              >
                <div className='flex'>
                  <div className='w-14 h-16 m-auto flex overflow-hidden rounded-md'>
                    <Image
                      alt={orderItem.product.name}
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
            {data?.order?.price < 35 && (
              <div className='w-full py-2 flex'>
                <div className='flex'>
                  <Shipping
                    tailwind='h-14 fill-current text-green-medium m-auto'
                    strokeWidth={0.1}
                  />
                </div>
                <div className='flex flex-col w-[65%] lg:w-[75%]'>
                  <div className='flex flex-col ml-2 my-auto'>
                    <h5 className='mt-auto leading-tight text-green-dark font-serif tracking-wider'>
                      Taxa de entrega
                    </h5>
                    <div className='mb-auto flex mt-1'>
                      <h5 className='mr-1 text-xs text-green-dark font-bold'>
                        €
                      </h5>
                      <h5 className='text-green-dark'>5.00</h5>
                    </div>
                  </div>
                </div>
                <div className='flex mx-auto lg:mr-2 min-w-[2.2rem]'>
                  <div className='flex self-center'>
                    <h5 className='mr-2 text-green-dark'>x 1</h5>
                  </div>
                </div>
                <div className='flex ml-auto lg:mr-2  min-w-[3.2rem]'>
                  <div className='flex self-center'>
                    <h5 className='mr-1 text-xs text-green-dark font-bold'>
                      €
                    </h5>
                    <h5 className='text-green-dark'>5.00</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='flex flex-col border-t'>
            <div className='flex px-4 py-2'>
              <h5 className='text-gray-400 tracking-wide'>Subtotal</h5>
              <h5 className='ml-auto mr-1 text-sm self-start text-green-dark'>
                €
              </h5>
              <h5 className='text-green-dark'>
                {(data?.order?.price * 0.77).toFixed(2)}
              </h5>
            </div>
            <div className='flex px-4 py-2'>
              <h5 className='text-gray-400 tracking-wide'>IVA (23%)</h5>
              <h5 className='ml-auto mr-1 text-sm self-start text-green-dark'>
                €
              </h5>
              <h5 className='text-green-dark'>
                {(data?.order?.price * 0.23).toFixed(2)}
              </h5>
            </div>
            <div className='flex px-4 py-2'>
              <h5 className='text-gray-500 font-bold tracking-wide'>Total</h5>
              <h5 className='ml-auto mr-1 text-green-dark text-sm self-start tracking-wide font-bold'>
                €
              </h5>
              <h5 className='text-green-dark tracking-wide font-bold'>
                {data?.order?.price.toFixed(2)}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default encomenda
