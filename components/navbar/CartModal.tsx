import { MutableRefObject } from 'react'
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

interface CartModalProps {
  me: MeQuery
  modalRef: MutableRefObject<HTMLDivElement>
}

export const CartModal: React.FC<CartModalProps> = ({ me, modalRef }) => {
  const [changeItemQuantity] = useChangeItemQuantityMutation({
    errorPolicy: 'all',
  })

  const [removeItem] = useRemoveItemMutation({ errorPolicy: 'all' })

  const localCart = localStorage.getItem('cart')

  return (
    <div
      ref={modalRef}
      className='absolute flex flex-col z-[20] w-[20rem] min-h-[4rem] max-h-[20.2rem] top-[3.7rem] right-0 rounded-md shadow-around bg-white overflow-hidden'
    >
      {me.me ? (
        <>
          {me.me.cart.cartItems.length < 1 ? (
            <h4 className='m-auto tracking-wider text-green-dark'>
              O seu cesto está vazio!
            </h4>
          ) : (
            <>
              <div className='flex flex-col w-full pb-3 px-2 h-[75%] max-h-[16rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
                {me.me.cart.cartItems.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className='flex relative w-[98%] p-2 mt-3 h-[5.4rem] rounded-md shadow-around'
                  >
                    <div className='flex'>
                      <div className='w-14 h-16 m-auto flex overflow-hidden rounded-md'>
                        <Image
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
                    <div className='flex flex-col w-[70%]'>
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
                        await removeItem({
                          variables: {
                            cartItemId: cartItem.id,
                            cartId: me.me.cart.id,
                            productId: cartItem.product.id,
                          },
                          update: (cache) => {
                            cache.evict({ id: `CartItem:${cartItem.id}` })
                            cache.evict({ id: `Cart:${me.me.cart.id}` })
                          },
                        })
                      }}
                    >
                      <X tailwind='h-4 text-green-medium' />
                    </button>
                    <div className='flex absolute m-auto w-[20%] right-2 bottom-2'>
                      <button
                        className='h-5 self-center'
                        onClick={async () => {
                          await changeItemQuantity({
                            variables: {
                              plusOrMinusOne: -1,
                              cartItemId: cartItem.id,
                              cartId: me.me.cart.id,
                              productId: cartItem.product.id,
                            },
                            update: (cache) => {
                              cache.evict({ id: `CartItem:${cartItem.id}` })
                              cache.evict({ id: `Cart:${me.me.cart.id}` })
                            },
                          })
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
                          await changeItemQuantity({
                            variables: {
                              plusOrMinusOne: 1,
                              cartItemId: cartItem.id,
                              cartId: me.me.cart.id,
                              productId: cartItem.product.id,
                            },
                            update: (cache) => {
                              cache.evict({ id: `CartItem:${cartItem.id}` })
                              cache.evict({ id: `Cart:${me.me.cart.id}` })
                            },
                          })
                        }}
                        disabled={cartItem.quantity >= cartItem.product.stock}
                      >
                        <Plus tailwind='h-4 text-green-dark' strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex w-full h-[4rem] border-t'>
                <div className='flex flex-col w-[70%] p-2'>
                  <div className='flex'>
                    <h3 className='text-green-dark font-bold tracking-wide'>
                      TOTAL
                    </h3>
                    <h3 className='ml-auto mr-1 font-bold text-sm text-green-dark'>
                      €
                    </h3>
                    <h3 className='font-bold text-green-dark'>
                      {me.me.cart.price.toFixed(2)}
                    </h3>
                  </div>
                  <div className='flex'>
                    <h3 className='text-green-dark font-bold tracking-wide'>
                      PRODUTOS
                    </h3>

                    <h3 className='ml-auto font-bold text-green-dark'>
                      {me.me.cart.quantity}
                    </h3>
                  </div>
                </div>
                <div className='flex w-[30%]'></div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {localCart ? (
            JSON.parse(localCart)
          ) : (
            <h4 className='m-auto tracking-wider text-green-dark'>
              O seu cesto está vazio!
            </h4>
          )}
        </>
      )}
    </div>
  )
}
