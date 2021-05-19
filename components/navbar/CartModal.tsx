import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react'
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
import { NarrowArrow } from '../svg/NarrowArrow'
import {
  LocalCart,
  minusOneItem,
  plusOneItem,
  removeFromLocalCart,
} from '../../utils/localStorageCart'
import { isServer } from '../../utils/isServer'

interface CartModalProps {
  data: MeQuery
  modalRef: MutableRefObject<HTMLDivElement>
  localStorageChange: boolean
  setLocalStorageChange: Dispatch<SetStateAction<boolean>>
}

export const CartModal: React.FC<CartModalProps> = ({
  data,
  modalRef,
  localStorageChange,
  setLocalStorageChange,
}) => {
  const [changeItemQuantity] = useChangeItemQuantityMutation({
    errorPolicy: 'all',
  })

  const [removeItem] = useRemoveItemMutation({ errorPolicy: 'all' })

  let localCart: LocalCart = {
    price: 0,
    quantity: 0,
    cartItems: [],
  }

  if (!isServer()) {
    localCart = JSON.parse(localStorage.getItem('cart'))
  }

  useEffect(() => {
    if (localStorageChange) {
      localCart = JSON.parse(localStorage.getItem('cart'))
    }
  }, [localStorageChange])

  return (
    <div
      ref={modalRef}
      className='absolute flex flex-col z-[20] w-[20rem] min-h-[4rem] max-h-[20.2rem] top-[3.7rem] right-0 rounded-md shadow-around bg-white overflow-hidden'
    >
      {data?.me ? (
        <>
          {data.me.cart.cartItems.length < 1 ? (
            <h4 className='m-auto tracking-wider text-green-dark'>
              O seu cesto está vazio!
            </h4>
          ) : (
            <>
              <div className='flex flex-col w-full pb-3 px-2 h-[75%] max-h-[16rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
                {data.me.cart.cartItems.map((cartItem) => (
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
                            cartId: data.me.cart.id,
                            productId: cartItem.product.id,
                          },
                          update: (cache) => {
                            cache.evict({ id: `CartItem:${cartItem.id}` })
                            cache.evict({ id: `Cart:${data.me.cart.id}` })
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
                              cartId: data.me.cart.id,
                              productId: cartItem.product.id,
                            },
                            update: (cache) => {
                              cache.evict({ id: `CartItem:${cartItem.id}` })
                              cache.evict({ id: `Cart:${data.me.cart.id}` })
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
                              cartId: data.me.cart.id,
                              productId: cartItem.product.id,
                            },
                            update: (cache) => {
                              cache.evict({ id: `CartItem:${cartItem.id}` })
                              cache.evict({ id: `Cart:${data.me.cart.id}` })
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
                <div className='flex flex-col w-[55%] p-2'>
                  <div className='flex'>
                    <h3 className='text-green-dark tracking-wide'>TOTAL</h3>
                    <h3 className='ml-auto mr-1 font-bold text-sm text-green-dark'>
                      €
                    </h3>
                    <h3 className='font-bold text-green-dark'>
                      {data.me.cart.price.toFixed(2)}
                    </h3>
                  </div>
                  <div className='flex'>
                    <h3 className='text-green-dark tracking-wide'>PRODUTOS</h3>
                    <h3 className='ml-auto font-bold text-green-dark'>
                      {data.me.cart.quantity}
                    </h3>
                  </div>
                </div>
                <div className='flex w-[40%] ml-auto p-2'>
                  <Link href='/checkout'>
                    <a className='h-full w-full flex flex-col rounded-md hover:bg-green-extraLight'>
                      <h5 className='text-center mt-auto font-bold text-green-dark tracking-wider'>
                        Checkout
                      </h5>
                      <NarrowArrow
                        tailwind='h-5 mb-auto text-green-dark'
                        strokeWidth={2.5}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {localCart && localCart.cartItems.length >= 1 ? (
            <>
              <div className='flex flex-col w-full pb-3 px-2 h-[75%] max-h-[16rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
                {localCart.cartItems
                  .sort((a, b) => b.createdAt - a.createdAt)
                  .map((cartItem) => (
                    <div
                      key={cartItem.product.name}
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
                        onClick={() => {
                          removeFromLocalCart(
                            localCart,
                            cartItem,
                            setLocalStorageChange
                          )
                        }}
                      >
                        <X tailwind='h-4 text-green-medium' />
                      </button>
                      <div className='flex absolute m-auto w-[20%] right-2 bottom-2'>
                        <button
                          className='h-5 self-center'
                          onClick={() => {
                            minusOneItem(
                              localCart,
                              cartItem,
                              setLocalStorageChange
                            )
                          }}
                          disabled={cartItem.quantity <= 1}
                        >
                          <Minus
                            tailwind='h-4 text-green-dark'
                            strokeWidth={2}
                          />
                        </button>
                        <p className='self-center mx-auto font-bold text-green-dark'>
                          {cartItem.quantity}
                        </p>
                        <button
                          className='h-5 self-center'
                          onClick={async () => {
                            plusOneItem(
                              localCart,
                              cartItem,
                              setLocalStorageChange
                            )
                          }}
                          disabled={cartItem.quantity >= cartItem.product.stock}
                        >
                          <Plus
                            tailwind='h-4 text-green-dark'
                            strokeWidth={2}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
              <div className='flex w-full h-[4rem] border-t'>
                <div className='flex flex-col w-[55%] p-2'>
                  <div className='flex'>
                    <h3 className='text-green-dark tracking-wide'>TOTAL</h3>
                    <h3 className='ml-auto mr-1 font-bold text-sm text-green-dark'>
                      €
                    </h3>
                    <h3 className='font-bold text-green-dark'>
                      {localCart.price.toFixed(2)}
                    </h3>
                  </div>
                  <div className='flex'>
                    <h3 className='text-green-dark tracking-wide'>PRODUTOS</h3>
                    <h3 className='ml-auto font-bold text-green-dark'>
                      {localCart.quantity}
                    </h3>
                  </div>
                </div>
                <div className='flex w-[40%] ml-auto p-2'>
                  <Link href='/checkout'>
                    <a className='h-full w-full flex flex-col rounded-md hover:bg-green-extraLight'>
                      <h5 className='text-center mt-auto font-bold text-green-dark tracking-wider'>
                        Checkout
                      </h5>
                      <NarrowArrow
                        tailwind='h-5 mb-auto text-green-dark'
                        strokeWidth={2.5}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </>
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
