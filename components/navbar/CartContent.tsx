import { Image } from 'cloudinary-react'
import Link from 'next/link'

import {
  BasicCartInfoFragment,
  BasicCartItemInfoFragment,
  MeQuery,
  useChangeItemQuantityMutation,
  useRemoveItemMutation,
} from '../../lib/generated/graphql'
import {
  LocalCart,
  LocalCartItem,
  minusOneItem,
  plusOneItem,
  removeFromLocalCart,
} from '../../utils/localStorageCart'
import { Minus } from '../svg/Minus'
import { Plus } from '../svg/Plus'
import { X } from '../svg/X'
import { useLocalStorageChange } from '../../context/localStorageChangeContext'
import { useCartModal } from '../../context/CartModalContext'

interface CartContentProps {
  cart: BasicCartInfoFragment | LocalCart
  data: MeQuery
  isLocal?: boolean
}

export const CartContent: React.FC<CartContentProps> = ({
  cart,
  data,
  isLocal,
}) => {
  const { setLocalStorageChange } = useLocalStorageChange()
  const { setCartModal } = useCartModal()

  const [changeItemQuantity] = useChangeItemQuantityMutation({
    errorPolicy: 'all',
  })

  const [removeItem] = useRemoveItemMutation({ errorPolicy: 'all' })

  return (
    <>
      {cart === null || cart.cartItems.length < 1 ? (
        <h4 className='m-auto tracking-wider text-green-dark'>
          O seu cesto está vazio!
        </h4>
      ) : (
        <>
          <div className='flex flex-col w-full pb-3 px-2 h-[75%] max-h-[16rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
            {cart.cartItems
              .slice()
              .sort(
                (
                  a: BasicCartItemInfoFragment | LocalCartItem,
                  b: BasicCartItemInfoFragment | LocalCartItem
                ) => {
                  if (isLocal) {
                    return b.createdAt - a.createdAt
                  }
                  return
                }
              )
              .map((cartItem: BasicCartItemInfoFragment | LocalCartItem) => (
                <div
                  key={cartItem.product.name}
                  className='flex relative w-[98%] p-2 mt-3 h-[5.4rem] rounded-md shadow-around'
                >
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
                      } else {
                        removeFromLocalCart(
                          cart,
                          cartItem,
                          setLocalStorageChange
                        )
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
                        } else {
                          minusOneItem(cart, cartItem, setLocalStorageChange)
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
                        } else {
                          plusOneItem(cart, cartItem, setLocalStorageChange)
                        }
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
            <div className='flex flex-col w-[55%] p-2'>
              <div className='flex'>
                <h3 className='text-green-dark tracking-wide'>Total</h3>
                <h3 className='ml-auto mr-1 font-bold text-sm text-green-dark'>
                  €
                </h3>
                <h3 className='font-bold text-green-dark'>
                  {cart.price.toFixed(2)}
                </h3>
              </div>
              <div className='flex'>
                <h3 className='text-green-dark tracking-wide'>Produtos</h3>
                <h3 className='ml-auto font-bold text-green-dark'>
                  {cart.quantity}
                </h3>
              </div>
            </div>
            <div className='flex w-[40%] ml-auto p-2'>
              <Link href='/checkout'>
                <a
                  onClick={() => setCartModal('false')}
                  className='h-full w-full flex flex-col rounded-md shadow-md bg-green-extraLight hover:opacity-80 opacity-100'
                >
                  <h5 className='text-center m-auto text-green-dark tracking-wider'>
                    Checkout
                  </h5>
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}
