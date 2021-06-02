import { NextPage } from 'next'
import Link from 'next/link'
import { Image } from 'cloudinary-react'
import { DateTime } from 'luxon'

import { Layout } from '../../components/Layout'
import { useMeQuery } from '../../lib/generated/graphql'
import { isServer } from '../../utils/isServer'
import { ArrowDown } from '../../components/svg/ArrowDown'

interface encomendasProps {}

const encomendas: NextPage<encomendasProps> = ({}) => {
  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  return (
    <Layout>
      <div className='flex mx-auto -mt-10 max-w-6xl'>
        <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark'>
          As minhas Encomendas
          <div className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
        </h1>
      </div>
      {data?.me?.orders.length > 0 ? (
        <div className='w-full max-w-4xl mx-auto flex flex-col mt-4'>
          {data?.me?.orders.map((order) => (
            <div
              key={order.id}
              className='relative flex w-full px-2 my-2 rounded-md shadow-md bg-white'
            >
              <Link href={`/conta/encomendas/${order.id}`}>
                <a className='absolute top-2 right-2 p-1 rounded-md shadow-md bg-green-extraLight'>
                  <ArrowDown
                    tailwind='h-4 text-green-dark transform -rotate-90'
                    strokeWidth={2}
                  />
                </a>
              </Link>
              <div className='flex pt-2'>
                <div className='w-14 h-20 mx-auto mb-auto flex overflow-hidden rounded-md'>
                  <Image
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
                  {order.orderItems[0].quantity} x{' '}
                  {order.orderItems[0].product.name}
                  {order.orderItems.length > order.orderItems[0].quantity
                    ? ` e ${
                        order.orderItems.length - order.orderItems[0].quantity
                      }
                  outros`
                    : null}
                </h5>
                <div className='flex flex-col lg:flex-row mt-2'>
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
                  <div className='flex flex-col ml-1 lg:ml-10 mt-2 lg:mt-0'>
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
                  <div className='flex flex-col ml-1 lg:ml-10 mt-2 lg:mt-0'>
                    <h5 className='text-gray-400'>ID da encomenda</h5>
                    <p className='ml-1 tracking-wide text-green-dark text-sm'>
                      {order.id}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className='mt-6 text-lg text-green-dark max-w-5xl mx-auto'>
          Nenhuma encomenda encontrada
        </h3>
      )}
    </Layout>
  )
}

export default encomendas
