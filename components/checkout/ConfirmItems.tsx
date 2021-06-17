import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { Image } from 'cloudinary-react'

import {
  MeQuery,
  useChangeItemQuantityMutation,
  useRemoveItemMutation,
} from '../../lib/generated/graphql'
import { X } from '../svg/X'
import { Plus } from '../svg/Plus'
import { Minus } from '../svg/Minus'

interface ConfirmItemsProps {
  data: MeQuery
  setCheckoutFase: Dispatch<SetStateAction<string>>
}

export const ConfirmItems: React.FC<ConfirmItemsProps> = ({
  data,
  setCheckoutFase,
}) => {
  const [changeItemQuantity] = useChangeItemQuantityMutation({
    errorPolicy: 'all',
  })

  const [removeItem] = useRemoveItemMutation({ errorPolicy: 'all' })

  if (!data?.me) {
    return (
      <h1 className='text-green-dark text-center w-full m-auto'>
        Faça login para fazer checkout
      </h1>
    )
  }

  return (
    <div className='mt-3 xs:mt-6 flex flex-col mx-auto max-w-2xl h-[27rem] xs:h-[40rem] bg-white rounded-md shadow-around'>
      {data?.me?.cart === null || data?.me?.cart.cartItems.length < 1 ? (
        <h4 className='m-auto w-[90%] lg:w-full text-center tracking-wider text-green-dark'>
          O seu cesto está vazio! Adicione algo para continuar.
        </h4>
      ) : (
        <div className='flex flex-col w-full'>
          <div className='w-full flex h-[2rem] border-b'>
            <div className='flex w-[80%]'>
              <h3 className='mt-1 ml-3 w-full font-bold text-green-dark tracking-wide'>
                Produtos
              </h3>
            </div>
            <div className='hidden lg:flex w-[20%] ml-auto'>
              <h3 className='mt-1 text-center w-full font-bold text-green-dark tracking-wide'>
                Subtotal
              </h3>
            </div>
          </div>
          <div className='flex flex-col w-full pb-4 px-3 lg:px-4 h-[21rem] xs:h-[34rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
            {data?.me?.cart.cartItems.map((cartItem) => (
              <div className='flex w-full' key={cartItem.id}>
                <div className='flex relative mx-auto w-[99%] lg:w-[80%] p-2 mt-3 h-[5.4rem] rounded-md shadow-around'>
                  <div className='flex'>
                    <div className='w-14 h-16 m-auto flex overflow-hidden rounded-md'>
                      <Image
                        alt={cartItem.product.name}
                        className='my-auto'
                        cloudName={
                          process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                        }
                        publicId={cartItem.product.images[0]}
                        quality={20}
                        height={250}
                        width={200}
                        gravity='auto'
                        crop='fill'
                        secure={true}
                      />
                    </div>
                  </div>
                  <div className='relative flex flex-col w-[70%]'>
                    {cartItem.product.stock === 0 ? (
                      <p className='absolute -bottom-2 left-4 text-red-500'>
                        Sem stock!
                      </p>
                    ) : !cartItem.product.active ? (
                      <p className='absolute -bottom-2 left-4 text-red-500'>
                        Indisponível!
                      </p>
                    ) : cartItem.quantity > cartItem.product.stock ? (
                      <p className='absolute -bottom-2 left-4 text-red-500'>
                        stock insuficiente!
                      </p>
                    ) : null}
                    <div className='flex flex-col ml-4 my-auto'>
                      <Link
                        href={`/produtos/${encodeURIComponent(
                          cartItem.product.name
                        ).replace(/%20/g, '-')}`}
                      >
                        <a>
                          <h5 className='mt-auto leading-tight text-green-dark font-serif tracking-wider'>
                            {cartItem.product.name}
                          </h5>
                        </a>
                      </Link>
                      <div className='mb-auto flex mt-1'>
                        <h5 className='mr-1 text-xs text-green-dark font-bold'>
                          €
                        </h5>
                        <h5 className='text-green-dark font-bold'>
                          {cartItem.product.price.toFixed(2)}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <button
                    className='absolute right-2 top-2 flex'
                    type='button'
                    onClick={async () => {
                      if (data?.me) {
                        await removeItem({
                          variables: {
                            cartItemId: cartItem.id,
                            cartId: data.me.cart.id,
                            productId: cartItem.product.id,
                          },
                          update: (cache) => {
                            cache.evict({ id: `CartItem:${cartItem.id}` })
                            cache.evict({ id: `Cart:${data.me.cart.id}` })
                          },
                        })
                      }
                    }}
                  >
                    <X tailwind='h-4 text-green-medium' />
                  </button>
                  <div className='flex absolute m-auto w-[20%] right-2 bottom-2'>
                    <button
                      className='h-5 self-center'
                      onClick={async () => {
                        if (data?.me) {
                          await changeItemQuantity({
                            variables: {
                              plusOrMinusOne: -1,
                              cartItemId: cartItem.id,
                              cartId: data.me.cart.id,
                              productId: cartItem.product.id,
                            },
                            update: (cache) => {
                              cache.evict({ id: `CartItem:${cartItem.id}` })
                              cache.evict({ id: `Cart:${data.me.cart.id}` })
                            },
                          })
                        }
                      }}
                      disabled={cartItem.quantity <= 1}
                    >
                      <Minus tailwind='h-4 text-green-dark' strokeWidth={2} />
                    </button>
                    <p className='self-center mx-auto font-bold text-green-dark'>
                      {cartItem.quantity}
                    </p>
                    <button
                      className='h-5 self-center'
                      onClick={async () => {
                        if (data?.me) {
                          await changeItemQuantity({
                            variables: {
                              plusOrMinusOne: 1,
                              cartItemId: cartItem.id,
                              cartId: data.me.cart.id,
                              productId: cartItem.product.id,
                            },
                            update: (cache) => {
                              cache.evict({ id: `CartItem:${cartItem.id}` })
                              cache.evict({ id: `Cart:${data.me.cart.id}` })
                            },
                          })
                        }
                      }}
                      disabled={cartItem.quantity >= cartItem.product.stock}
                    >
                      <Plus tailwind='h-4 text-green-dark' strokeWidth={2} />
                    </button>
                  </div>
                </div>
                <div className='hidden lg:flex lg:flex-col lg:w-[20%]'>
                  <div className='m-auto flex'>
                    <h5 className='mr-1 text-xs text-green-dark font-bold'>
                      €
                    </h5>
                    <h5 className='text-green-dark font-bold'>
                      {(cartItem.product.price * cartItem.quantity).toFixed(2)}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex w-full h-[4rem] border-t'>
            <div className='flex flex-col w-[55%] lg:w-[78%] pl-4 p-2'>
              <div className='flex'>
                <h3 className='text-green-dark tracking-wide'>Total</h3>
                <h3 className='ml-auto mr-1 font-bold text-sm text-green-dark'>
                  €
                </h3>
                <h3 className='font-bold text-green-dark'>
                  {data?.me.cart.price.toFixed(2)}
                </h3>
              </div>
              <div className='flex'>
                <h3 className='text-green-dark tracking-wide'>Produtos</h3>
                <h3 className='ml-auto font-bold text-green-dark'>
                  {data?.me.cart.quantity}
                </h3>
              </div>
            </div>
            <div className='flex w-[45%] lg:w-[22%]  ml-auto p-2'>
              <button
                type='button'
                className='h-full w-full max-w-[8rem] ml-auto flex flex-col rounded-md shadow-md bg-green-extraLight hover:opacity-80 opacity-100'
                onClick={() => setCheckoutFase('address')}
              >
                <h5 className='text-center m-auto text-green-dark tracking-wider'>
                  Continuar
                </h5>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
