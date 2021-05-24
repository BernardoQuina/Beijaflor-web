import { Image } from 'cloudinary-react'
import Link from 'next/link'

import {
  BasicCartInfoFragment,
  BasicProductInfoFragment,
  BasicWishListInfoFragment,
  MeQuery,
  useCreateCartItemMutation,
  useToggleFromWishListMutation,
} from '../../lib/generated/graphql'
import { ShoppingBag } from '../svg/ShoppingBag'
import { X } from '../svg/X'
import { useCartModal } from '../../context/CartModalContext'
import { useWishlistModal } from '../../context/wishListModalContext'
import {
  LocalWishlist,
  toggleFromLocalWishlist,
} from '../../utils/localStorageWishlist'
import { LocalProduct } from '../../utils/localStorageProduct'
import { addToLocalCart, LocalCart } from '../../utils/localStorageCart'
import { useLocalStorageChange } from '../../context/localStorageChangeContext'

interface WishlistContentProps {
  wishlist: BasicWishListInfoFragment | LocalWishlist
  cart: BasicCartInfoFragment | LocalCart
  data: MeQuery
}

export const WishlistContent: React.FC<WishlistContentProps> = ({
  wishlist,
  cart,
  data,
}) => {
  const { setCartModal } = useCartModal()
  const { setWishlistModal } = useWishlistModal()
  const { setLocalStorageChange } = useLocalStorageChange()

  const [toggleFromWishList] = useToggleFromWishListMutation({
    errorPolicy: 'all',
  })

  const [createCartItem] = useCreateCartItemMutation({ errorPolicy: 'all' })

  return (
    <>
      {wishlist === null ||
      !wishlist.products ||
      wishlist.products?.length < 1 ? (
        <h4 className='m-auto tracking-wider text-green-dark'>
          A sua lista de desejos está vazia!
        </h4>
      ) : (
        <>
          <div className='flex flex-col w-full pb-3 px-2 h-[75%] max-h-[16rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
            {wishlist.products?.map(
              (product: BasicProductInfoFragment | LocalProduct) => (
                <div
                  key={product.name}
                  className='flex relative w-[98%] p-2 mt-3 h-[5.4rem] rounded-md shadow-around'
                >
                  <div className='flex'>
                    <div className='w-14 h-16 m-auto flex overflow-hidden rounded-md'>
                      <Image
                        className='my-auto'
                        cloudName={
                          process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                        }
                        publicId={product.images[0]}
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
                          product.name
                        ).replace(/%20/g, '-')}`}
                      >
                        <a>
                          <h5 className='mt-auto leading-tight text-green-dark font-serif tracking-wider'>
                            {product.name}
                          </h5>
                        </a>
                      </Link>
                      <div className='mb-auto flex mt-1'>
                        <h5 className='mr-1 text-xs text-green-dark font-bold'>
                          €
                        </h5>
                        <h5 className='text-green-dark font-bold'>
                          {product.price.toFixed(2)}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <button
                    className='absolute right-2 top-2 flex'
                    type='button'
                    onClick={async () => {
                      if (data?.me) {
                        await toggleFromWishList({
                          variables: {
                            productId: product.id,
                            wishListId: data.me.wishlist.id,
                          },
                          update: (cache, { data: mutationData }) => {
                            cache.modify({
                              id: `Product:${product.id}`,
                              fields: {
                                wishLists() {
                                  return [mutationData.toggleFromWishList]
                                },
                              },
                            })
                            cache.evict({
                              id: `Wishlist:${data.me.wishlist.id}`,
                            })
                          },
                        })
                      } else {
                        toggleFromLocalWishlist(
                          wishlist,
                          product,
                          setLocalStorageChange,
                          setWishlistModal
                        )
                      }
                    }}
                  >
                    <X tailwind='h-4 text-green-medium' />
                  </button>
                  <div className='flex absolute m-auto right-2 bottom-2'>
                    <button
                      className='self-center'
                      onClick={async () => {
                        if (data && data.me !== null) {
                          await createCartItem({
                            variables: {
                              cartId: data.me.cart.id,
                              productId: product.id,
                              quantity: 1,
                            },
                            update: (cache) => {
                              cache.evict({ fieldName: 'CartItems' })
                              cache.evict({ id: `Cart:${data.me.cart.id}` })
                            },
                          })

                          await toggleFromWishList({
                            variables: {
                              productId: product.id,
                              wishListId: data.me.wishlist.id,
                            },
                            update: (cache, { data: mutationData }) => {
                              cache.modify({
                                id: `Product:${product.id}`,
                                fields: {
                                  wishLists() {
                                    return [mutationData.toggleFromWishList]
                                  },
                                },
                              })
                              cache.evict({
                                id: `Wishlist:${data.me.wishlist.id}`,
                              })
                            },
                          })
                        } else {
                          addToLocalCart(cart, product, 1)
                          toggleFromLocalWishlist(
                            wishlist,
                            product,
                            setLocalStorageChange,
                            setWishlistModal
                          )
                        }

                        setWishlistModal('false')
                        setCartModal('true')
                      }}
                    >
                      <ShoppingBag
                        tailwind='h-7 text-pink-dark'
                        strokeWidth={1.8}
                      />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </>
      )}
    </>
  )
}
