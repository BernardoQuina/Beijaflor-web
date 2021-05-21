import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Image } from 'cloudinary-react'
import { AnimatePresence, motion } from 'framer-motion'

import { X } from '../svg/X'
import { Plus } from '../svg/Plus'
import { Minus } from '../svg/Minus'
import { backdrop, scaleUp } from '../../utils/animations'
import {
  LocalCart,
  minusOneItem,
  plusOneItem,
  removeFromLocalCart,
} from '../../utils/localStorageCart'
import {
  MeQuery,
  useChangeItemQuantityMutation,
  useCreateCartItemMutation,
  useRemoveItemMutation,
} from '../../lib/generated/graphql'
import { Sort } from '../svg/Sort'

interface MergeCartsModalProps {
  showMergeCartsModal: boolean
  setShowMergeCartsModal: Dispatch<SetStateAction<boolean>>
  localCart: LocalCart
  data: MeQuery
  setLocalStorageChange: Dispatch<SetStateAction<boolean>>
}

export const MergeCartsModal: React.FC<MergeCartsModalProps> = ({
  showMergeCartsModal,
  setShowMergeCartsModal,
  localCart,
  data,
  setLocalStorageChange,
}) => {
  const [changeItemQuantity] = useChangeItemQuantityMutation({
    errorPolicy: 'all',
  })

  const [removeItem] = useRemoveItemMutation({ errorPolicy: 'all' })

  const [createCartItem] = useCreateCartItemMutation({ errorPolicy: 'all' })

  const mergeCartsModalNode = useRef<HTMLDivElement | null>(null)

  const mergeCartsModalClick = (e: any) => {
    if (
      mergeCartsModalNode.current &&
      mergeCartsModalNode.current.contains(e.target)
    ) {
      return
    }

    setShowMergeCartsModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', mergeCartsModalClick)

    return () => {
      document.removeEventListener('mousedown', mergeCartsModalClick)
    }
  })

  return (
    <AnimatePresence exitBeforeEnter>
      {showMergeCartsModal && (
        <motion.div
          className='fixed overflow-y-scroll top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[10] scrollbar-thin'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={backdrop}
        >
          <motion.div variants={scaleUp} className='flex py-4 h-[100vh]'>
            <div
              ref={mergeCartsModalNode}
              className='relative flex flex-col max-w-4xl w-[95%] h-[90vh] max-h-[40rem] m-auto rounded-md shadow-md bg-white'
            >
              <div className='sticky top-0 flex py-2 px-2 border-b'>
                <h4 className='ml-2 font-thin tracking-widest text-green-dark text-xl'>
                  Unir cestos
                </h4>
                <button
                  className='ml-auto'
                  type='button'
                  onClick={() => {
                    setShowMergeCartsModal(false)
                  }}
                >
                  <X tailwind='h-6 text-green-dark' />
                </button>
              </div>
              <div className='flex flex-col min-h-[80.4%] w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-green-medium'>
                <h5 className='w-[97%] lg:w-[80%] mx-auto my-4 text-center text-green-dark lg:text-xl tracking-wider font-thin'>
                  Já existem itens no cesto da sua conta, como pretende
                  conciliar com o cesto atual?
                </h5>
                <div className='w-full flex flex-col lg:flex-row'>
                  <div className=' w-full lg:w-[50%] min-h-[30rem] border-t lg:border-r'>
                    <h5 className='mt-4 ml-4 text-green-medium text-xl tracking-wider'>
                      Cesto atual
                    </h5>
                    {localCart.cartItems
                      .sort((a, b) => b.createdAt - a.createdAt)
                      .map((cartItem) => (
                        <div
                          key={cartItem.product.name}
                          className='flex relative w-[90%] mx-auto p-2 mt-8 h-[6rem] rounded-md shadow-around'
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
                              onClick={async () => {
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
                              disabled={
                                cartItem.quantity >= cartItem.product.stock
                              }
                            >
                              <Plus
                                tailwind='h-4 text-green-dark'
                                strokeWidth={2}
                              />
                            </button>
                          </div>
                          <button
                            className='absolute -bottom-4 left-[50%] translate-x-[-50%] p-1 rounded-full shadow-around border bg-green-extraLight'
                            type='button'
                            onClick={async () => {
                              await createCartItem({
                                variables: {
                                  cartId: data.me.cart.id,
                                  productId: cartItem.product.id,
                                  quantity: cartItem.quantity,
                                },
                                update: (cache) => {
                                  cache.evict({ fieldName: 'CartItems' })
                                  cache.evict({ id: `Cart:${data.me.cart.id}` })
                                },
                              })

                              removeFromLocalCart(
                                localCart,
                                cartItem,
                                setLocalStorageChange
                              )
                            }}
                          >
                            <Sort
                              tailwind='h-6 text-green-dark transform rotate-90'
                              strokeWidth={1.8}
                            />
                          </button>
                        </div>
                      ))}
                  </div>
                  <div className='w-full lg:w-[50%] min-h-[30rem] border-t'>
                    <h5 className='mt-4 ml-4 text-green-medium text-xl tracking-wider'>
                      Cesto da conta
                    </h5>
                    {data.me.cart.cartItems.map((cartItem) => (
                      <div
                        key={cartItem.product.name}
                        className='flex relative w-[90%] mx-auto p-2 mt-8 h-[6rem] rounded-md shadow-around'
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
                            disabled={
                              cartItem.quantity >= cartItem.product.stock
                            }
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
                </div>
              </div>
              <div className='flex py-3 border-t'>
                <button
                  className='flex w-[8rem] mx-auto px-4 py-2 rounded-md shadow-md bg-green-extraLight'
                  type='button'
                  onClick={() => {
                    localStorage.removeItem('cart')
                    setShowMergeCartsModal(false)
                  }}
                >
                  <p className='mx-auto text-lg text-green-dark tracking-widest'>
                    Confirmar
                  </p>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
